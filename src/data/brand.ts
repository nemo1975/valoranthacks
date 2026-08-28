/**
 * SINGLE SOURCE OF TRUTH for template rebrands.
 * Employees: use Brand Studio at http://localhost:4321/brand-studio/ during `astro dev`.
 * Do not scatter brand strings across components.
 */
export const brand = {
	/** Public brand name (nav, footer, H1 hero, schema Organization) */
	name: 'Valorant Hacks',
	/** Short product label if needed */
	shortName: 'Valorant',
	/** Canonical origin — no trailing slash */
	url: 'https://valoranthack.net',
	locale: 'en',
	market: 'Americas & Worldwide',
	supportEmail: 'support@valoranthack.net',
	checkoutUrl: 'https://zadeyo.com/go/AMAN?to=%2Fproducts%2Fvalorant',

	/** Game this template instance targets */
	game: 'Valorant',
	/** Anti-cheat name used in Status / FAQ copy */
	antiCheat: 'Vanguard',

	logo: '/images/valorant-hacks-logo.webp',
	logoRaster: '/images/valorant-hacks-logo.png',
	logoRasterWidth: 512,
	logoRasterHeight: 512,
	logoAlt: 'Valorant Hacks logo',
	defaultOgImage: '/images/valorant-hacks-hero-1024w.webp',
	heroImage: '/images/valorant-hacks-hero-1024w.webp',

	plans: [
		{ id: 'monthly', label: 'Monthly', price: 35, duration: 'P30D' },
		{ id: 'lifetime', label: 'Lifetime', price: 150, duration: 'P99Y' },
	] as const,
	currency: 'USD',
	platforms: ['Windows PC'] as const,

	/**
	 * Site color tones — accent + canvas + soft/deep/hover/panel.
	 * Edit in Brand Studio → Colors (tones are fully customizable).
	 */
	theme: {
		accent: '#FF4655',
		bg: '#0F1419',
		soft: '#FF8A93',
		deep: '#BD2C38',
		hover: '#FF6B77',
		panel: '#111820',
	},

	/**
	 * Keyword system — primary drives titles; list feeds schema / light targeting.
	 * Keep 5–8 terms.
	 */
	keywords: {
		primary: 'valorant hacks',
		list: [
			'valorant hacks',
			'valorant hack',
			'valorant cheats',
			'valorant aimbot',
			'valorant esp',
			'valorant wallhack',
			'undetected valorant hacks',
			'best valorant hacks',
		] as const,
	},

	/**
	 * Editable SEO meta — tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 * Aim ~50–60 chars titles, ~140–160 chars descriptions.
	 */
	seo: {
		/** Titles ≤60 chars; descriptions ~140–160 (Google SERP display). */
		/** Home = brand hub. Money URL /valorant-hacks/ owns the head term. */
		homeTitle: 'Valorant Hacks | Official Windows PC Site',
		homeDescription:
			'Official Valorant Hacks site for Windows PC. Compare features, plans, and live status — then buy ESP, aimbot, and radar. Built for NA, LATAM, and worldwide.',
		featuresTitle: '{game} Features | {brand}',
		featuresDescription:
			'Everything in one {game} license for Windows PC — ESP, soft aim, radar, spike tools, and patch updates after {antiCheat}. See what is included.',
		storeTitle: '{game} Store | {brand}',
		storeDescription:
			'Monthly and lifetime {game} plans for Windows PC. Same ESP, aimbot, and radar features on both. Instant delivery after payment checkout today.',
		statusTitle: '{game} Status | {brand}',
		statusDescription:
			'Live undetected status for {brand} after {game} or {antiCheat} patches. Check here before you queue a Competitive match on Windows PC today.',
		/** Money page meta — primary target for "valorant hacks". */
		previewTitle: 'Valorant Hacks | Undetected ESP and Aimbot for PC',
		previewDescription:
			'Buy undetected valorant hacks for Windows PC. ESP, aimbot, and radar with Vanguard updates. Instant delivery across NA, LATAM, Brazil, and worldwide.',
		setupTitle: '{game} Setup | {brand}',
		setupDescription:
			'Install and launch {brand} on Windows PC after checkout. Short setup steps so you can queue faster. Follow each step in order before your first match.',
		supportTitle: '{game} Support | {brand}',
		supportDescription:
			'Get help with {brand} on Windows PC. Email {email} with your order ID for setup, delivery, or billing help after you buy.',
		faqTitle: '{game} FAQs | {brand}',
		faqDescription:
			'Short answers about {brand} for Valorant — delivery, setup, {antiCheat} updates, refunds, and Windows PC system notes before you buy today.',
		reviewsTitle: '{brand} Reviews | Buyer Feedback',
		reviewsDescription:
			'Buyer reviews for {brand} — ESP, soft aim, radar, and patch updates for Valorant on Windows PC. Real feedback from license holders today.',
		blogTitle: '{game} Intel | {brand}',
		blogDescription:
			'Guides and notes for {game} — ranked tips, ESP, aimbot, map reads, and {antiCheat} updates for Windows PC players in NA, LATAM, and worldwide.',
	},

	/** On-page marketing copy (tokens allowed) */
	copy: {
		tagline: 'Undetected {primaryKeyword} — ESP, aimbot, and radar for PC',
		summary:
			'{brand} is an undetected {game} cheat package for Windows PC. Includes ESP, soft aim, and radar, with {antiCheat} maintenance after patches.',
		heroLede: '{brand}: undetected ESP, soft aim, and radar for Valorant on Windows PC — NA, LATAM, and worldwide.',
		blogLabel: 'Valorant Intel',
		ctaBuy: 'Get Access',
		ctaBuyShort: 'Buy',
		featuresIntro: 'Everything in {brand} is included in one license for {game} on Windows PC.',
		storeIntro: 'Pick a {brand} plan. Same ESP, aimbot, and radar on both. Instant delivery after payment.',
		statusIntro: 'Check {brand} here after a {game} or {antiCheat} patch before you queue.',
		previewIntro:
			'Buy undetected {primaryKeyword} for Windows PC. ESP, aimbot, and radar in one license, with {antiCheat} rebuilds after patches.',
		setupIntro: 'Install {brand} on Windows PC after you buy. Follow these short steps.',
		supportIntro: 'Need help with {brand}? Email {email} with your order ID.',
		faqIntro: 'Short answers about {brand} — delivery, setup, updates, and refunds.',
		reviewsIntro: 'Feedback from {brand} buyers — ESP, soft aim, radar, and support.',
		chipEsp: 'ESP / wallhack',
		chipAim: 'Soft aim',
		chipRadar: '2D radar',
		chipUpdates: 'Patch updates',
		navPreview: 'Cheats',
		navFeatures: 'Features',
		navStore: 'Store',
		navStatus: 'Status',
		navReviews: 'Reviews',
	},

	/**
	 * Sitemap labels — XML is generated at build/dev from routes + these strings.
	 * Domain comes from `url` (also written to robots.txt via sync:brand).
	 * Tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 */
	sitemap: {
		/** YYYY-MM-DD — Brand Studio can bump this on save to refresh crawl dates */
		contentLastmod: '2026-08-28',
		blogImageTitle: '{brand} blog',
		blogImageCaption: 'Tips and updates for {primaryKeyword}',
		reviewsImageTitle: '{brand} reviews',
		reviewsImageCaption: 'What buyers say about {primaryKeyword}',
		images: [
			{
				src: '/images/valorant-hacks-esp.webp',
				title: 'Valorant ESP boxes and skeleton overlay',
				caption: 'Player ESP boxes, names, and skeleton ESP on the practice range',
			},
			{
				src: '/images/valorant-hacks-wallhack.webp',
				title: 'Valorant wallhack on Sunset',
				caption: 'Enemy skeletons through walls plus spike timer and aimbot FOV',
			},
			{
				src: '/images/valorant-hacks-aimbot.webp',
				title: 'Valorant aimbot FOV in combat',
				caption: 'Aimbot FOV circle locking onto Chamber while firing',
			},
			{
				src: '/images/valorant-hacks-aimbot-view.webp',
				title: 'Operator sniper aimbot with ESP',
				caption: 'Sniper-scope ESP box and aim lock on Brimstone',
			},
			{
				src: '/images/valorant-hacks-radar.webp',
				title: 'Spike timer and item ESP',
				caption: 'Custom spike timer with weapon and spike distance markers',
			},
			{
				src: '/images/valorant-hacks-combat.webp',
				title: 'Skeleton ESP in a Valorant hallway',
				caption: 'Bounding box, skeleton ESP, and wallhack item distances',
			},
		],
	},
} as const;

export type Brand = typeof brand;

/** Replace {brand} {game} {antiCheat} {email} {primaryKeyword} {checkout} */
export function fillBrandTokens(input: string): string {
	return input
		.replaceAll('{brand}', brand.name)
		.replaceAll('{game}', brand.game)
		.replaceAll('{antiCheat}', brand.antiCheat)
		.replaceAll('{email}', brand.supportEmail)
		.replaceAll('{primaryKeyword}', brand.keywords.primary)
		.replaceAll('{checkout}', brand.checkoutUrl);
}

/** Locked title formula fallback: `{Game} {Topic} | {Brand}` */
export function seoTitle(topic: string): string {
	const title = `${brand.game} ${topic} | ${brand.name}`;
	return title.length <= 60 ? title : `${topic} | ${brand.name}`;
}

/** Keep descriptions short; tokens allowed. */
export function seoDescription(template: string): string {
	const text = fillBrandTokens(template).trim();
	return text.length <= 160 ? text : `${text.slice(0, 157).trim()}…`;
}

/** Resolved EN home meta from brand.seo (title clamp lives in site-core.seoPageTitle). */
export function homeSeo() {
	return {
		title: fillBrandTokens(brand.seo.homeTitle),
		description: seoDescription(brand.seo.homeDescription),
	};
}
