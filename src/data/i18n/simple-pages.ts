import type { PageId } from './content.generated';
import { fillBrandTokens, seoDescription } from '../brand';
import { brandCopy, brandSeo, seoPageTitle } from '../site-core';

export type SimpleSection = {
	h2: string;
	paragraphs: string[];
	list?: string[];
};

export type SimplePageCopy = {
	title: string;
	description: string;
	h1: string;
	intro: string;
	ctaPrimary: string;
	ctaSecondary?: string;
	ctaSecondaryHref?: string;
	galleryTitle: string;
	sections: SimpleSection[];
};

function page(copy: SimplePageCopy): SimplePageCopy {
	return {
		...copy,
		title: seoPageTitle(copy.title),
		description: seoDescription(copy.description),
		intro: fillBrandTokens(copy.intro),
		sections: copy.sections.map((section) => ({
			...section,
			h2: fillBrandTokens(section.h2),
			paragraphs: section.paragraphs.map(fillBrandTokens),
			list: section.list?.map(fillBrandTokens),
		})),
	};
}

/** Short, plain-English overrides for key EN nav pages — meta from brand.seo */
export const simplePageCopy: Partial<Record<PageId, SimplePageCopy>> = {
	home: page({
		title: brandSeo.homeTitle,
		description: brandSeo.homeDescription,
		h1: 'Valorant Hacks',
		intro: brandCopy.heroLede,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'View features',
		ctaSecondaryHref: '/features/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'Built for every Riot region',
				paragraphs: [
					'{brand} is the official Windows PC site. Compare features, store, and status — then buy on the product page.',
					'English is first for NA and Canada. Spanish covers Mexico and LATAM. Portuguese covers Brazil. All 22 locales stay live for worldwide search.',
				],
				list: ['NA and Canada English', 'Mexico and LATAM Spanish', 'Brazil Portuguese'],
			},
			{
				h2: 'What you can buy',
				paragraphs: [
					'One {brand} license includes ESP, aimbot, and radar. Compare plans, then check Status before you queue.',
				],
				list: [
					'<a href="/valorant-hacks/">Valorant Hacks overview</a>',
					'<a href="/pricing/">Store</a>',
					'<a href="/updates/">Live status</a>',
				],
			},
		],
	}),
	features: page({
		title: brandSeo.featuresTitle,
		description: brandSeo.featuresDescription,
		h1: 'Features',
		intro: brandCopy.featuresIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'View store',
		ctaSecondaryHref: '/pricing/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'ESP & wallhack',
				paragraphs: [
					'{brand} ESP shows agents, abilities, and the spike through walls with distance readouts.',
					'Use {brand} filters so the overlay stays clear on Haven, Split, and Deathmatch.',
				],
				list: ['Player boxes & distance', 'Spike and ability markers', 'Agent and ability filters'],
			},
			{
				h2: 'Aimbot & soft aim',
				paragraphs: [
					'{brand} aimbot is aim help you can tune to feel natural.',
					'Set FOV, smoothness, and bone priority in {brand} per weapon before you queue.',
				],
				list: ['Smooth aim strength', 'FOV and bone priority', 'Hotkeys mid-match'],
			},
			{
				h2: 'Radar',
				paragraphs: [
					'{brand} includes a simple 2D radar for threats outside your view.',
					'Spot flanks near spike sites with {brand} without filling the whole screen.',
				],
				list: ['Nearby enemy cues', 'Adjustable range', 'Works in Ranked & Unrated'],
			},
			{
				h2: 'Updates & support',
				paragraphs: [
					'{brand} rebuilds after big {game} or {antiCheat} patches.',
					'Check {brand} Status before you play after a patch day.',
				],
				list: ['Status on the Status page', 'Setup guide included', 'Email support with your order ID'],
			},
		],
	}),
	pricing: page({
		title: brandSeo.storeTitle,
		description: brandSeo.storeDescription,
		h1: 'Store',
		intro: brandCopy.storeIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Setup guide',
		ctaSecondaryHref: '/setup/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'What you get',
				paragraphs: [
					'{brand} is full package access for Windows 10 / 11.',
					'Same {brand} ESP, soft aim, and radar on monthly and lifetime plans.',
				],
				list: ['ESP, aimbot, and radar', 'Patch rebuilds while active', 'Digital delivery after checkout'],
			},
			{
				h2: 'Plans',
				paragraphs: [
					'Pick a monthly {brand} plan to try first, or lifetime for one payment.',
					'Both {brand} plans unlock the same features after checkout.',
				],
				list: ['Monthly — 30 days', 'Lifetime — one-time', 'Instant license by email'],
			},
			{
				h2: 'Before you buy',
				paragraphs: ['Read the {brand} refund policy if you need it. Contact support with your order ID for help.'],
				list: [
					'<a href="/refund-policy/">Refund policy</a>',
					'<a href="/faq/">FAQ</a>',
					'<a href="/support/">Support</a>',
				],
			},
		],
	}),
	updates: page({
		title: brandSeo.statusTitle,
		description: brandSeo.statusDescription,
		h1: 'Status',
		intro: brandCopy.statusIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Valorant Hacks overview',
		ctaSecondaryHref: '/valorant-hacks/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'Current status',
				paragraphs: [
					'As of 13 Aug 2026 {brand} is online for Valorant on Windows PC. We post a new note here when a game or Vanguard patch needs a rebuild.',
					'If {brand} Status is green, you can queue. If we are rebuilding, wait for the next note.',
				],
				list: [
					'Check this page before every match after a patch',
					'Monthly and lifetime licenses get rebuilds while active',
					'No cheat stays undetected forever — status first, then play',
				],
			},
			{
				h2: 'After a patch',
				paragraphs: [
					'Wait for the {brand} rebuild note, then launch. Do not play on an old build after a big update.',
				],
				list: ['Read the latest status note', 'Follow setup if something fails', 'Email support with your order ID'],
			},
			{
				h2: 'Important',
				paragraphs: ['No cheat is 100% safe forever. Keep {brand} updated and use safe settings.'],
				list: ['Status first, then play', '<a href="/support/">Support</a> for license help'],
			},
		],
	}),
	hacks: page({
		title: brandSeo.previewTitle,
		description: brandSeo.previewDescription,
		h1: 'Valorant Hacks',
		intro: brandCopy.previewIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'View features',
		ctaSecondaryHref: '/features/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'ESP, aimbot, and radar',
				paragraphs: [
					'{brand} is one license for Valorant on Windows PC — ESP, aimbot, and radar for Competitive, Unrated, and Deathmatch.',
				],
				list: [
					'ESP / wallhack with distance',
					'Soft aim & aimbot profiles',
					'2D radar for flanks',
					'Vanguard rebuilds after patches',
				],
			},
			{
				h2: 'Competitive, Unrated, and Deathmatch',
				paragraphs: [
					'{brand} helps you read agents before you push, mark the spike, and stay aware near sites. Tune soft aim per weapon for Haven, Split, and long-range maps.',
				],
				list: [
					'<a href="/valorant-esp/">ESP guide</a>',
					'<a href="/valorant-aimbot/">Aimbot controls</a>',
					'<a href="/valorant-radar-hack/">Radar overlay</a>',
					'<a href="/updates/">Live status</a>',
				],
			},
			{
				h2: 'How to start',
				paragraphs: ['Buy {brand}, get your license by email, then follow setup. Check Status after every major patch.'],
				list: [
					'<a href="/pricing/">Open store</a>',
					'<a href="/setup/">Setup guide</a>',
					'<a href="/updates/">Check status</a>',
				],
			},
		],
	}),
	'valorant-esp': page({
		title: 'Valorant ESP Overlay | {brand}',
		description:
			'Valorant ESP and wallhack for Windows PC — player boxes, distance, and spike filters in matches. Included in {brand} with Vanguard updates.',
		h1: 'ESP',
		intro: 'Valorant ESP shows agents through walls with boxes and distance. Part of the same {brand} license.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Valorant Hacks overview',
		ctaSecondaryHref: '/valorant-hacks/',
		galleryTitle: 'ESP in match',
		sections: [
			{
				h2: 'What Valorant ESP shows',
				paragraphs: ['{brand} ESP shows boxes, distance, and filters for agents, enemies, ultimates, and the spike.'],
				list: ['Player ESP', 'Spike markers', 'Agent and ability filters'],
			},
			{
				h2: 'When to use wallhack',
				paragraphs: ['Use {brand} wallhack to clear Haven, Split, and Deathmatch without flooding the screen.'],
				list: ['Tune opacity', 'Filter noise', 'Pair with radar'],
			},
			{
				h2: 'Next steps',
				paragraphs: ['{brand} ESP is included with aimbot and radar in one plan.'],
				list: [
					'<a href="/valorant-hacks/">Full product</a>',
					'<a href="/features/">All features</a>',
					'<a href="/pricing/">Store</a>',
				],
			},
		],
	}),
	'valorant-aimbot': page({
		title: 'Valorant Aimbot | {brand}',
		description:
			'Valorant aimbot and soft aim for Windows PC — FOV, smoothness, and bone priority you can tune per weapon. Included in {brand} with Vanguard updates.',
		h1: 'Aimbot',
		intro: 'Valorant aimbot and soft aim you can tune per weapon. Included in the same {brand} license.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Valorant Hacks overview',
		ctaSecondaryHref: '/valorant-hacks/',
		galleryTitle: 'Aimbot view',
		sections: [
			{
				h2: 'Aimbot controls',
				paragraphs: ['Set FOV, smoothness, and bone priority in {brand} before you queue.'],
				list: ['Soft aim strength', 'Bone priority', 'Hotkeys mid-match'],
			},
			{
				h2: 'Play styles',
				paragraphs: ['Keep {brand} settings subtle for longer sessions. Raise strength only when you accept more risk.'],
				list: ['Legit soft aim', 'Per-weapon profiles', 'Works with ESP'],
			},
			{
				h2: 'Next steps',
				paragraphs: ['{brand} aimbot ships with ESP and radar in one license.'],
				list: [
					'<a href="/valorant-hacks/">Full product</a>',
					'<a href="/features/">All features</a>',
					'<a href="/pricing/">Store</a>',
				],
			},
		],
	}),
	radar: page({
		title: 'Valorant Radar Hack | {brand}',
		description:
			'Valorant radar hack for Windows PC — flank cues near spike sites without filling the screen. Included in {brand} with ESP and Vanguard updates.',
		h1: 'Radar',
		intro: 'A Valorant radar hack for threats outside your view. Included in the same {brand} license.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Valorant Hacks overview',
		ctaSecondaryHref: '/valorant-hacks/',
		galleryTitle: 'Radar overlay',
		sections: [
			{
				h2: 'What the radar shows',
				paragraphs: ['{brand} radar shows nearby enemy cues with adjustable range for flanks and site holds.'],
				list: ['Flank awareness', 'Spike site approaches', 'Adjustable range'],
			},
			{
				h2: 'With ESP',
				paragraphs: ['Use {brand} radar for threats you cannot see yet. Use ESP when you push.'],
				list: [
					'<a href="/valorant-esp/">ESP guide</a>',
					'<a href="/valorant-hacks/">Full product</a>',
					'<a href="/pricing/">Store</a>',
				],
			},
			{
				h2: 'Next steps',
				paragraphs: ['{brand} radar ships with ESP and aimbot in one license.'],
				list: [
					'<a href="/valorant-hacks/">Full product</a>',
					'<a href="/features/">All features</a>',
					'<a href="/pricing/">Store</a>',
				],
			},
		],
	}),
	setup: page({
		title: brandSeo.setupTitle,
		description: brandSeo.setupDescription,
		h1: 'Setup',
		intro: brandCopy.setupIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Check status',
		ctaSecondaryHref: '/updates/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'Before you install',
				paragraphs: ['Buy a {brand} plan first. You get a license by email.'],
				list: ['Windows 10 / 11 PC', 'Disable conflicting overlays', 'Have your order email ready'],
			},
			{
				h2: 'Install steps',
				paragraphs: ['Run the {brand} loader as admin, paste your license, then launch {game}.'],
				list: ['Download the loader from your delivery email', 'Paste license key', 'Launch the game'],
			},
			{
				h2: 'If something fails',
				paragraphs: ['Check {brand} Status after a patch. Email {email} with your order ID.'],
				list: ['<a href="/updates/">Status page</a>', '<a href="/support/">Support</a>', '<a href="/faq/">FAQ</a>'],
			},
		],
	}),
	support: page({
		title: brandSeo.supportTitle,
		description: brandSeo.supportDescription,
		h1: 'Support',
		intro: brandCopy.supportIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'FAQ',
		ctaSecondaryHref: '/faq/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'How to contact us',
				paragraphs: ['Email {email} for {brand} help. Include your order ID and a short note about the issue.'],
				list: ['Order ID from your receipt', 'Windows version', 'What you already tried'],
			},
			{
				h2: 'Faster answers',
				paragraphs: ['Check the {brand} FAQ and Status before you write. Many setup questions are already covered.'],
				list: ['<a href="/faq/">FAQ</a>', '<a href="/updates/">Status</a>', '<a href="/setup/">Setup</a>'],
			},
		],
	}),
	faq: page({
		title: brandSeo.faqTitle,
		description: brandSeo.faqDescription,
		h1: 'FAQ',
		intro: brandCopy.faqIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Support',
		ctaSecondaryHref: '/support/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'Buying & delivery',
				paragraphs: ['You get a {brand} digital license by email after payment.'],
				list: ['Instant delivery after checkout', 'Keep your order email', 'One license per purchase'],
			},
			{
				h2: 'Setup & updates',
				paragraphs: ['Follow {brand} Setup after you buy. Check Status after big {game} or {antiCheat} patches.'],
				list: ['<a href="/setup/">Setup guide</a>', '<a href="/updates/">Status</a>'],
			},
			{
				h2: 'Refunds',
				paragraphs: ['Read the {brand} refund policy before you buy if you need details.'],
				list: ['<a href="/refund-policy/">Refund policy</a>', '<a href="/support/">Support</a>'],
			},
		],
	}),
};
