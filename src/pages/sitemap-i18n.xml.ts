import type { APIRoute } from 'astro';

import {
	buildAllI18nSitemapEntries,
	renderLocaleSitemapUrlBlock,
} from '../data/sitemap-locale';
import { renderUrlsetXml, sitemapResponseHeaders } from '../data/sitemap-xml';

export const prerender = true;

/**
 * Combined localized sitemap — kept on disk for validators.
 * HTTP requests 301 to sitemap.xml so Search Console is not given a second copy of the same URLs.
 */
export const GET: APIRoute = () => {
	const entries = buildAllI18nSitemapEntries();
	const xml = renderUrlsetXml(entries.map(renderLocaleSitemapUrlBlock));

	return new Response(xml, { headers: sitemapResponseHeaders });
};
