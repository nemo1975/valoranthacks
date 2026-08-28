import { siteConfig } from './site';
import { valorantImages } from './valorant';
import { pageIds, type PageId } from './i18n/routing';
import { pageSitemapImageLabels } from './brand-sitemap';

/** Rotating product screenshots for FAQ / review detail URLs. */
export const crawlPhotoPool = [
	valorantImages.espWallhack,
	valorantImages.aimbotCombat,
	valorantImages.aimbotSkeleton,
	valorantImages.playerEsp,
	valorantImages.cheatsCombat,
	'/images/valorant-hacks-esp.webp',
] as const;

/**
 * One primary crawl/OG photo per product page.
 * Prefer compressed WebP screenshots so Google can fetch them quickly.
 */
export const pageImageSrcById: Record<PageId, string> = {
	home: '/images/valorant-hacks-hero-1024w.webp',
	'valorant-esp': valorantImages.playerEsp,
	'valorant-aimbot': valorantImages.aimbotCombat,
	features: valorantImages.aimbotSkeleton,
	pricing: valorantImages.cheatsCombat,
	setup: valorantImages.playerEsp,
	updates: '/images/valorant-hacks-hero-1024w.webp',
	faq: valorantImages.aimbotSkeleton,
	support: valorantImages.cheatsCombat,
	undetected: valorantImages.espWallhack,
	wallhack: valorantImages.espWallhack,
	radar: valorantImages.playerEsp,
	vanguard: valorantImages.aimbotCombat,
	'cheats-2026': '/images/valorant-hacks-hero-1024w.webp',
	hacks: valorantImages.cheatsCombat,
	'cheat-download': valorantImages.cheatsCombat,
	'mod-menu': valorantImages.playerEsp,
	'soft-aim': valorantImages.aimbotSkeleton,
	'best-cheats': '/images/valorant-hacks-hero-1024w.webp',
	'aimbot-hack': valorantImages.aimbotSkeleton,
	'esp-hack': valorantImages.espWallhack,
	'unlock-all': valorantImages.playerEsp,
	privacy: valorantImages.aimbotCombat,
	refund: valorantImages.cheatsCombat,
	terms: valorantImages.aimbotSkeleton,
};

for (const pageId of pageIds) {
	if (!pageImageSrcById[pageId]) {
		throw new Error(`[page-images] No image path configured for pageId: ${pageId}`);
	}
}

export function absoluteImageUrl(path: string): string {
	return new URL(path, siteConfig.url).href;
}

export function getPageImageSrc(pageId: PageId): string {
	return pageImageSrcById[pageId];
}

export function getPageCrawlImage(pageId: PageId): {
	src: string;
	url: string;
	title: string;
	caption: string;
} {
	const src = pageImageSrcById[pageId];
	const labels = pageSitemapImageLabels(pageId);
	return {
		src,
		url: absoluteImageUrl(src),
		title: labels.title,
		caption: labels.caption,
	};
}

/** Stable pick from the photo pool (FAQ answers, reviews, etc.). */
export function pickCrawlPhoto(seed: string): string {
	let hash = 0;
	for (let i = 0; i < seed.length; i += 1) {
		hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
	}
	return crawlPhotoPool[hash % crawlPhotoPool.length];
}

export function crawlPhotoMeta(
	seed: string,
	title: string,
	caption: string,
): { src: string; url: string; title: string; caption: string } {
	const src = pickCrawlPhoto(seed);
	return {
		src,
		url: absoluteImageUrl(src),
		title,
		caption,
	};
}

/** Default large social / SERP image when a page has no specific asset. */
export const defaultCrawlImageSrc = pageImageSrcById.home;
