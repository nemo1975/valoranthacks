import { siteConfig } from './site';

/** Screenshots used across product pages — simple valorant hacks keyword alts. */
export const valorantImages = {
	hero: '/images/valorant-hacks-hero-full.png',
	espWallhack: '/images/valorant-hacks-wallhack.webp',
	aimbotCombat: '/images/valorant-hacks-aimbot.webp',
	aimbotSkeleton: '/images/valorant-hacks-aimbot-view.webp',
	playerEsp: '/images/valorant-hacks-radar.webp',
	cheatsCombat: '/images/valorant-hacks-raid.webp',
	logo: siteConfig.logo,
	/** @deprecated Blog / legacy aliases — each maps to one of the six assets above */
	cover: '/images/valorant-hacks-raid.webp',
	loadoutBuilder: '/images/valorant-hacks-radar.webp',
	squadFight: '/images/valorant-hacks-aimbot-view.webp',
	cheatsPackage: '/images/valorant-hacks-radar.webp',
	headerArt: '/images/valorant-hacks-aimbot-view.webp',
	battleRoyaleCombat: '/images/valorant-hacks-raid.webp',
	extractFight: '/images/valorant-hacks-aimbot.webp',
	rebootFight: '/images/valorant-hacks-aimbot.webp',
	scavRunCombat: '/images/valorant-hacks-wallhack.webp',
	scavRunMode: '/images/valorant-hacks-esp.webp',
	battleRoyaleIsland: '/images/valorant-hacks-esp.webp',
	raidMap: '/images/valorant-hacks-esp.webp',
	product: [
		{
			src: '/images/valorant-hacks-esp.webp',
			alt: 'Valorant ESP boxes and skeleton overlay on practice range bots',
		},
		{
			src: '/images/valorant-hacks-wallhack.webp',
			alt: 'Valorant wallhack showing enemy skeletons through walls on Sunset',
		},
		{
			src: '/images/valorant-hacks-aimbot.webp',
			alt: 'Valorant aimbot FOV circle locking onto Chamber in a corridor',
		},
		{
			src: '/images/valorant-hacks-aimbot-view.webp',
			alt: 'Operator sniper aimbot and ESP box on Brimstone in Valorant',
		},
		{
			src: '/images/valorant-hacks-radar.webp',
			alt: 'Spike timer and item ESP overlay during a Valorant round',
		},
		{
			src: '/images/valorant-hacks-raid.webp',
			alt: 'Skeleton ESP and wallhack on Brimstone in a Valorant hallway',
		},
	],
	gallery: [
		{
			src: '/images/valorant-hacks-esp.webp',
			alt: 'Valorant ESP boxes and skeleton overlay on practice range bots',
			featured: true,
		},
		{
			src: '/images/valorant-hacks-wallhack.webp',
			alt: 'Valorant wallhack showing enemy skeletons through walls on Sunset',
		},
		{
			src: '/images/valorant-hacks-aimbot.webp',
			alt: 'Valorant aimbot FOV circle locking onto Chamber in a corridor',
		},
		{
			src: '/images/valorant-hacks-aimbot-view.webp',
			alt: 'Operator sniper aimbot and ESP box on Brimstone in Valorant',
		},
		{
			src: '/images/valorant-hacks-radar.webp',
			alt: 'Spike timer and item ESP overlay during a Valorant round',
		},
		{
			src: '/images/valorant-hacks-raid.webp',
			alt: 'Skeleton ESP and wallhack on Brimstone in a Valorant hallway',
		},
	],
	/**
	 * @deprecated Prefer brand.sitemap.images via brand-sitemap / page-sitemap.
	 * Kept as path aliases for older imports; titles come from Brand Studio.
	 */
	sitemap: [
		{ src: '/images/valorant-hacks-esp.webp', title: '', caption: '' },
		{ src: '/images/valorant-hacks-wallhack.webp', title: '', caption: '' },
		{ src: '/images/valorant-hacks-aimbot.webp', title: '', caption: '' },
		{ src: '/images/valorant-hacks-aimbot-view.webp', title: '', caption: '' },
		{ src: '/images/valorant-hacks-radar.webp', title: '', caption: '' },
		{ src: '/images/valorant-hacks-raid.webp', title: '', caption: '' },
	],
} as const;
