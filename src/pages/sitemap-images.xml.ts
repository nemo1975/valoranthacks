import type { APIRoute } from 'astro';
import {
	absolutePageUrl,
	imageSitemapEntries,
	imageSitemapHostPaths,
	pageSitemapEntries,
} from '../data/page-sitemap';
import { hreflangLinksXml, resolvePageIdFromPath } from '../data/i18n/routing';
import {
	assertCrawlableAssetUrl,
	assertLastmod,
	escapeXml,
	renderUrlsetXml,
	sitemapResponseHeaders,
} from '../data/sitemap-xml';

export const prerender = true;

/**
 * Dedicated image sitemap: one unique page <loc> per unique image asset.
 * Host pages are indexable only (never 301 stubs) so Search Console does not
 * report “Submitted URL has redirect”.
 */
export const GET: APIRoute = () => {
	const lastmodByPath = new Map(pageSitemapEntries.map((page) => [page.path, page.lastmod]));
	const fallbackLastmod = assertLastmod(
		pageSitemapEntries[0]?.lastmod ?? new Date().toISOString().slice(0, 10),
		'sitemap-images',
	);

	const uniqueImages = new Map<string, (typeof imageSitemapEntries)[number]>();
	for (const image of imageSitemapEntries) {
		assertCrawlableAssetUrl(image.url, 'sitemap-images');
		if (!uniqueImages.has(image.url)) uniqueImages.set(image.url, image);
	}

	const usedHosts = new Set<string>();
	const urls = [...uniqueImages.values()].map((image, index) => {
		const preferred = imageSitemapHostPaths[index];
		let hostPath = preferred;
		if (!hostPath || usedHosts.has(hostPath)) {
			hostPath = imageSitemapHostPaths.find((candidate) => !usedHosts.has(candidate));
		}
		if (!hostPath) {
			throw new Error(
				`[sitemap-images] No unique host page left for image ${image.url}. Add more imageSitemapHostPaths or fewer brand.sitemap.images.`,
			);
		}
		usedHosts.add(hostPath);

		const host = absolutePageUrl(hostPath);
		const lastmod = assertLastmod(lastmodByPath.get(hostPath) ?? fallbackLastmod, hostPath);
		const pageId = resolvePageIdFromPath(hostPath);
		const hreflangBlock = pageId ? `\n${hreflangLinksXml(pageId, escapeXml)}` : '';

		return `  <url>
    <loc>${escapeXml(host)}</loc>
    <lastmod>${escapeXml(lastmod)}</lastmod>${hreflangBlock}
    <image:image>
      <image:loc>${escapeXml(image.url)}</image:loc>
      <image:title>${escapeXml(image.title)}</image:title>
      <image:caption>${escapeXml(image.caption)}</image:caption>
    </image:image>
  </url>`;
	});

	const xml = renderUrlsetXml(urls);

	return new Response(xml, { headers: sitemapResponseHeaders });
};
