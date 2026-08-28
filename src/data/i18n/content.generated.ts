import type { LocaleCode } from './locales';

export type PageSection = { h2: string; paragraphs: string[]; list?: string[] };
export type PageContent = {
	title: string;
	description: string;
	h1: string;
	intro: string;
	imageAlt: string;
	galleryTitle: string;
	heroImage: string;
	sections: PageSection[];
	ctaPrimary: string;
	ctaSecondary?: string;
	ctaSecondaryHref?: string;
};
export type LocaleUi = {
	nav: { home: string; hacks: string; aimbot: string; esp: string; features: string; pricing: string; setup: string; updates: string; faq: string; buyNow: string };
	hero: { accent: string; accentShort: string; subtitle: string; subtitleShort: string; buyNow: string; seeFeatures: string };
	trust: { status: string; statusNote: string; statusShort: string; delivery: string; platform: string; antiCheat: string; antiCheatShort: string };
	product: { title: string; addToCart: string; monthly: string; lifetime: string; available: string; gameBadge: string; platformBadge: string; statusBadge: string };
	reviews: { title: string; subtitle: string; outOf: string; countLabel: string };
	common: { buyNow: string; readGuide: string; language: string; officialLanguageNote: string; relatedPages: string };
	footer: { explore: string; help: string; tagline: string };
	images: {
		hero: string; espWallhack: string; aimbotCombat: string; squadFight: string; playerEsp: string;
		headerArt: string; cheatsPackage: string; rebootFight: string; battleRoyale: string; battleRoyaleIsland: string;
	};
};
export type PageId = 'home' | 'valorant-esp' | 'valorant-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'vanguard' | 'cheats-2026' | 'hacks' | 'cheat-download' | 'mod-menu' | 'soft-aim' | 'best-cheats' | 'aimbot-hack' | 'esp-hack' | 'unlock-all' | 'privacy' | 'refund' | 'terms';

export const i18nContent: Record<LocaleCode, { ui: LocaleUi; pages: Record<PageId, PageContent> }> = {
		en: {
			ui: {
				nav: {
					home: "Home",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Features",
					pricing: "Pricing",
					setup: "Setup",
					updates: "Updates",
					faq: "FAQ",
					buyNow: "Buy Now",
				},
				hero: {
					accent: "2026 — Undetected ESP, Aimbot & Wallhack",
					accentShort: "Undetected ESP & Aimbot",
					subtitle: "Valorant Hacks: undetected ESP, soft aim, and radar for Valorant on Windows PC.",
					subtitleShort: "ESP, radar, and aimbot for PC",
					buyNow: "Get Access",
					seeFeatures: "See Features",
				},
				trust: {
					status: "Online",
					statusNote: "Valorant Hacks is live for Valorant on Windows PC.",
					statusShort: "Live",
					delivery: "Instant digital delivery",
					platform: "Windows 10 & 11",
					antiCheat: "Vanguard maintenance supported",
					antiCheatShort: "Vanguard anti-cheat supported",
				},
				product: {
					title: "Valorant Hacks",
					addToCart: "Add to Cart",
					monthly: "Monthly",
					lifetime: "Lifetime",
					available: "Available now",
					gameBadge: "Valorant",
					platformBadge: "Windows PC",
					statusBadge: "Undetected",
				},
				reviews: {
					title: "What players say",
					subtitle: "Recent feedback from Valorant Hacks buyers",
					outOf: "out of 5",
					countLabel: "reviews",
				},
				common: {
					buyNow: "Buy Valorant Hacks",
					readGuide: "Read guide",
					language: "Language",
					officialLanguageNote: "English is official; other locales are translated.",
					relatedPages: "Related pages",
				},
				footer: {
					explore: "Explore",
					help: "Help & legal",
					tagline: "Undetected Valorant hacks for PC.\nESP, wallhack, radar & aimbot.",
				},
				images: {
					hero: "Valorant Hacks hero — ESP and aimbot overlay in Valorant",
					espWallhack: "Wallhack outlines showing agents and enemies through walls",
					aimbotCombat: "Soft aim assist overlay during a Valorant round",
					squadFight: "Valorant Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Valorant match",
					headerArt: "Aimbot view and bone priority controls for Valorant",
					cheatsPackage: "2D radar threat overlay for Valorant",
					rebootFight: "Aimbot assist during a Valorant firefight",
					battleRoyale: "Valorant Hacks in-match overview for Windows PC",
					battleRoyaleIsland: "ESP markers for agents and the spike in Valorant",
				},
			},
			pages: {
				home: {
					title: "Valorant Hacks | Official Windows PC Site",
					description: "Official Valorant Hacks site for Windows PC. Compare ESP, aimbot, and radar — then buy. Built for NA, LATAM, Brazil, and worldwide.",
					h1: "Valorant Hacks",
					intro: "Valorant Hacks is the official Windows PC site for Valorant. Check features, plans, and live Vanguard status before you buy — for NA, LATAM, and every Riot region.",
					imageAlt: "Valorant Hacks homepage hero — ESP and aimbot for Valorant",
					galleryTitle: "In-game look",
					ctaPrimary: "Get Access",
					ctaSecondary: "See all features",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Built for every Riot region",
							paragraphs: [
								"Valorant Hacks is the official Windows PC site. Compare features, store, and status — then buy on the product page.",
								"English is first for NA and Canada. Spanish and Portuguese cover LATAM and Brazil. All 22 locales stay live for worldwide search.",
								"Official seasons, patches, and anti-cheat updates come from <a href=\"https://playvalorant.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Valorant</a> and <a href=\"https://www.riotgames.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Vanguard Anti-Cheat</a>. We rebuild ESP, radar, and Aimbot modules when those patches require maintenance — then post status on the <a href=\"/updates/\">Status page</a>.",
								"Start with the <a href=\"/valorant-hacks/\">Valorant Hacks overview</a>, <a href=\"/valorant-esp/\">ESP guide</a>, and <a href=\"/valorant-aimbot/\">Aimbot controls</a> if you are comparing tools before checkout.",
							],
						},
						{
							h2: "ESP, aimbot, and radar in one license",
							paragraphs: [
								"Instead of stacking separate tools, Valorant Hacks bundles player ESP, spike markers, 2D radar overlays, and Aimbot profiles in one package built for Competitive, Unrated, and Deathmatch.",
								"Browse the <a href=\"/valorant-esp/\">ESP</a>, <a href=\"/valorant-aimbot/\">Aimbot</a>, and <a href=\"/valorant-radar-hack/\">radar</a> pages for control details — or jump to <a href=\"/pricing/\">Store</a> for monthly and lifetime options.",
								"Before patch days, check <a href=\"https://support-valorant.riotgames.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Valorant Support</a> for Riot Games service health, then confirm our maintenance notes so you are not queueing on an outdated build.",
								"Ready to buy? Open <a href=\"/pricing/\">Store</a>, follow <a href=\"/setup/\">Setup</a> after delivery, and keep <a href=\"/faq/\">FAQ</a> / <a href=\"/support/\">Support</a> bookmarked for license questions.",
							],
						},
					],
					heroImage: "/images/valorant-hacks-esp.webp",
				},
				"valorant-esp": {
					title: "Valorant ESP Overlay | Valorant Hacks",
					description: "Valorant ESP and wallhack for Windows PC — player boxes, distance, and spike filters in matches. Included in Valorant Hacks with Vanguard updates.",
					h1: "ESP",
					intro: "Valorant ESP shows agents through walls with boxes and distance. Part of the same Valorant Hacks license.",
					imageAlt: "Valorant ESP player boxes and distance readouts in a match",
					galleryTitle: "ESP in match",
					ctaPrimary: "Get Access",
					ctaSecondary: "Valorant Hacks overview",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "What Valorant ESP shows",
							paragraphs: [
								"Boxes, distance, and filters for agents, enemies, ultimates, and the spike. Toggle categories so overlays stay clear on Haven, Split, and Deathmatch.",
								"On Competitive, Unrated, and Deathmatch, that visibility gap is often the difference between a clean site take and a lost round. ESP ships with radar and Aimbot in one license.",
								"Valorant’s live seasons and map updates are published by Riot Games (<a href=\"https://playvalorant.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Valorant</a>). When sites or agents rotate, ESP categories stay useful because they track players and the spike — not a single static landmark.",
							],
						},
						{
							h2: "Player, spike, and ability overlays",
							paragraphs: [
								"Toggle enemy player outlines, spike markers, and ability cues so only match-critical overlays stay active during rotations.",
								"Distance readouts and snapline options help you control engagement range. Team and enemy colour coding supports Competitive, Unrated, and Deathmatch.",
								"Compare category detail on this page and pair visibility with the <a href=\"/valorant-radar-hack/\">radar hack</a> for flanks outside your FOV.",
							],
							list: [
								"Enemy player ESP outlines with distance",
								"Spike markers for site holds",
								"Agent and ability filters",
								"Toggleable categories to reduce overlay noise",
							],
						},
						{
							h2: "Undetected ESP with Vanguard maintenance",
							paragraphs: [
								"Valorant Hacks ESP is maintained for Valorant with rebuilds after Vanguard patches. Check the <a href=\"/updates/\">Status page</a> before you queue — no cheat guarantees permanent undetected status.",
								"Read <a href=\"https://www.riotgames.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Vanguard Anti-Cheat</a> for how anti-cheat updates ship, then cross-check our <a href=\"/updates/\">Vanguard maintenance notes</a> after major patches.",
								"Checkout includes instant digital delivery for Windows 10 and 11. After purchase, follow the <a href=\"/setup/\">Setup guide</a> and tune overlays before your first match.",
							],
						},
						{
							h2: "ESP next steps",
							paragraphs: [
								"ESP wins information; Aimbot covers the firefight. Review <a href=\"/valorant-aimbot/\">Aimbot controls</a> if you want one license for visibility and assist.",
								"Compare monthly ($35) and lifetime ($150) on <a href=\"/pricing/\">Store</a>, then keep <a href=\"/support/\">Support</a> ready if activation needs a human reply.",
								"Still researching? The <a href=\"/valorant-hacks/\">Valorant Hacks overview</a> summarizes the full stack.",
							],
						},
					],
					heroImage: "/images/valorant-hacks-radar.webp",
				},
				"valorant-aimbot": {
					title: "Valorant Aimbot | Valorant Hacks",
					description: "Valorant aimbot and soft aim for Windows PC — FOV, smoothness, and bone priority you can tune. Included in Valorant Hacks with Vanguard updates.",
					h1: "Aimbot",
					intro: "Valorant aimbot and soft aim you can tune per weapon. Included in the same Valorant Hacks license.",
					imageAlt: "Valorant aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot view",
					ctaPrimary: "Get Access",
					ctaSecondary: "See ESP wallhack",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Aimbot controls",
							paragraphs: [
								"Valorant mixes long-range Operator fights with close-range SMG pushes. Valorant Hacks Aimbot includes smoothness, FOV, and sensitivity controls — with hotkey toggles mid-match.",
								"Bone priority and target selection options cover closest player, lowest health, or highest-threat targets during site takes and retakes.",
								"Weapon balance and season rules change via <a href=\"https://playvalorant.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Valorant</a>. Revisit Aimbot FOV and smoothness after major combat patches so assist still matches the live TTK windows.",
							],
						},
						{
							h2: "Per-weapon Aimbot profiles",
							paragraphs: [
								"Save separate Aimbot profiles for rifles, SMGs, and Operator. Switch between long-range fights and Haven clears without reopening menus every match.",
								"Prefer softer tracking? Keep smoothness high and FOV tight. Aimbot ships alongside <a href=\"/valorant-esp/\">ESP</a> and <a href=\"/valorant-radar-hack/\">2D radar</a> in the same license.",
								"Use in-client hotkeys to toggle assist mid-round.",
							],
							list: [
								"Smoothness, FOV, and sensitivity sliders",
								"Bone priority and threat-based targeting",
								"Hotkeys to toggle Aimbot mid-match",
								"Per-weapon profile slots",
							],
						},
						{
							h2: "Vanguard maintenance for Aimbot",
							paragraphs: [
								"Valorant Hacks rebuilds Aimbot behavior when Vanguard or major Valorant patches land. Maintenance notes appear on the <a href=\"/updates/\">Status page</a> so you know when a new build is live.",
								"Cross-check service health on <a href=\"https://support-valorant.riotgames.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Valorant Support</a> and anti-cheat context on <a href=\"https://www.riotgames.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Vanguard Anti-Cheat</a>, then follow our <a href=\"/updates/\">Vanguard maintenance notes</a> before queueing on patch day.",
								"Responsible settings matter — undetected status requires ongoing maintenance, not set-and-forget configs. Start with conservative smoothness, then tune.",
							],
						},
						{
							h2: "Buy Aimbot with ESP",
							paragraphs: [
								"Every plan includes Aimbot plus ESP and radar. Compare options on <a href=\"/pricing/\">Store</a>, then activate with the <a href=\"/setup/\">Setup guide</a>.",
								"Questions about delivery or profiles? Use <a href=\"/faq/\">FAQ</a> or email <a href=\"/support/\">Support</a> with your order ID.",
								"Want the full control list first? Open <a href=\"/features/\">Features</a> before checkout.",
							],
						},
					],
					heroImage: "/images/valorant-hacks-aimbot.webp",
				},
				features: {
					title: "Valorant Features | Valorant Hacks",
					description: "Everything in one Valorant license for Windows PC — ESP, soft aim, radar, spike tools, and patch updates after Vanguard. See what is included.",
					h1: "Features",
					intro: "Everything included in one license for Valorant on Windows PC.",
					imageAlt: "Valorant Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "In-game look",
					ctaPrimary: "Get Access",
					ctaSecondary: "View store",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "ESP and wallhack",
							paragraphs: [
								"Enemy player ESP, spike markers, distance readouts, snaplines, and toggleable categories so overlays stay clear on Haven, Split, and Deathmatch.",
								"Team and enemy colour coding supports Competitive, Unrated, and Deathmatch. Deep-dive the <a href=\"/valorant-esp/\">ESP page</a> for category-level detail.",
								"Map and agent rotations evolve with <a href=\"https://playvalorant.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Valorant</a> updates — toggleable ESP categories keep overlays useful when sites change.",
							],
						},
						{
							h2: "Radar and Aimbot controls",
							paragraphs: [
								"2D radar overlay with directional threat cues, configurable range for site holds, plus Aimbot smoothness, FOV, bone priority, hotkeys, and per-weapon profiles.",
								"All tools share in-client toggles so you can adjust ESP, radar, and Aimbot during live Valorant sessions. See <a href=\"/valorant-radar-hack/\">radar</a> and <a href=\"/valorant-aimbot/\">Aimbot</a> for settings walkthroughs.",
								"Prefer a menu-first workflow? Use hotkeys mid-round without alt-tabbing.",
							],
						},
						{
							h2: "Licensing, delivery, and Vanguard maintenance",
							paragraphs: [
								"Monthly ($35) and lifetime ($150) licenses with instant digital delivery. Vanguard maintenance rebuilds publish on the <a href=\"/updates/\">Status page</a> after anti-cheat or game patches.",
								"Monitor <a href=\"https://support-valorant.riotgames.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Valorant Support</a> on patch days, then confirm rebuild notes before you queue. Setup and billing help lives on <a href=\"/support/\">Support</a> and support@valoranthack.net.",
								"Next step: compare plans on <a href=\"/pricing/\">Store</a> or read <a href=\"/valorant-hacks/\">the product overview</a>.",
							],
						},
					],
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
				},
				pricing: {
					title: "Valorant Hacks Pricing | $35/mo or $150 Life",
					description: "Valorant hacks pricing: $35/month or $150 lifetime for ESP, soft aim, and radar on Windows PC. Instant delivery — pick a plan.",
					h1: "Valorant Hacks Pricing — Monthly & Lifetime",
					intro: "Choose monthly or lifetime access to undetected Valorant Hacks — ESP wallhack, radar hack, and Aimbot for Valorant on Windows PC. Instant digital delivery after payment.",
					imageAlt: "Valorant Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Valorant Hacks package visuals",
					ctaPrimary: "Buy Valorant Hacks",
					ctaSecondary: "Read setup guide",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Monthly and lifetime Valorant Hacks plans",
							paragraphs: [
								"Monthly license: $35 USD for 30 days of full ESP wallhack, radar hack, and Aimbot access with Vanguard maintenance included during your term.",
								"Lifetime license: $150 USD for long-term access to the same undetected Valorant Hacks package — ideal if you play Valorant regularly across seasons.",
								"Both plans unlock the same feature stack described on <a href=\"/features/\">Features</a>. Choose monthly to test, or lifetime if you already know you want the full toolkit.",
							],
						},
						{
							h2: "What every plan includes",
							paragraphs: [
								"Player ESP wallhack, spike markers, 2D radar overlays, Aimbot controls, in-client toggles, and maintenance rebuilds after Vanguard anti-cheat or major Valorant patches.",
								"Season calendars and client updates come from <a href=\"https://playvalorant.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Valorant</a>. Active licenses receive rebuild access when we publish maintenance on <a href=\"/updates/\">Updates</a>.",
								"Digital delivery starts after payment confirmation. Keep your order reference for <a href=\"/support/\">Support</a> requests and follow <a href=\"/setup/\">Setup</a> for first launch.",
							],
						},
						{
							h2: "Refund, billing, and buying checklist",
							paragraphs: [
								"Review the <a href=\"/refund-policy/\">Refund Policy</a> before purchase. For billing or delivery issues, contact Support with your order details.",
								"Prices are listed in USD. Availability is worldwide for Windows 10 and 11 PCs.",
								"Still comparing tools? Read <a href=\"/valorant-hacks/\">Valorant hacks</a>, <a href=\"/valorant-hacks/\">undetected status</a>, and <a href=\"/faq/\">FAQ</a> before you checkout.",
							],
						},
					],
					heroImage: "/images/valorant-hacks-raid.webp",
				},
				setup: {
					title: "Valorant Hacks Setup | Windows PC Guide",
					description: "Set up valorant hacks on Windows PC — activate ESP boxes, soft aim profiles, and . Check Vanguard updates before your first queue.",
					h1: "Valorant Hacks Setup — Windows PC Guide",
					intro: "Install and configure Valorant Hacks for Valorant on Windows 10 or 11. Activate your license, load ESP wallhack and Aimbot profiles, and verify Vanguard maintenance status before queueing.",
					imageAlt: "Valorant Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Valorant Hacks setup visuals",
					ctaPrimary: "Buy Valorant Hacks",
					ctaSecondary: "Contact support",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Before you install Valorant Hacks",
							paragraphs: [
								"Confirm your order email and license details. Check the <a href=\"/updates/\">Updates page</a> for the latest Vanguard maintenance build before launching Valorant.",
								"Also glance at <a href=\"https://support-valorant.riotgames.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Valorant Support</a> if Riot Games services look unstable on patch day — a platform outage is not a license fault.",
								"Valorant Hacks requires Windows 10 or 11. Close conflicting overlay software that may interfere with ESP wallhack or Aimbot toggles.",
							],
						},
						{
							h2: "Activate ESP wallhack and Aimbot profiles",
							paragraphs: [
								"Follow the delivery instructions in your license email. Load default Valorant Hacks ESP categories for agents, enemies, and the spike — then tune radar range and Aimbot smoothness to your playstyle.",
								"Use in-client hotkeys to toggle ESP, radar, and Aimbot mid-match. Details for Vanguard module live on <a href=\"/valorant-esp/\">ESP</a>, <a href=\"/valorant-aimbot/\">Aimbot</a>, and <a href=\"/valorant-hacks/\">mod menu</a>.",
								"Prefer a soft tracking feel? Start with the <a href=\"/valorant-aimbot/\">soft aim</a> recommendations before raising aggressiveness.",
							],
						},
						{
							h2: "After Valorant or Vanguard anti-cheat patches",
							paragraphs: [
								"When Riot Games ships a major Valorant update or Vanguard anti-cheat patch, revisit Updates before queueing. Download maintenance rebuilds when posted.",
								"Official anti-cheat background: <a href=\"https://www.riotgames.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Vanguard Anti-Cheat</a>. Our practical workflow is documented on the <a href=\"/updates/\">Vanguard bypass page</a> and <a href=\"/valorant-hacks/\">undetected guide</a>.",
								"Contact <a href=\"/support/\">Support</a> with your order ID if activation fails after a patch — include Windows version and error details for faster replies.",
							],
						},
					],
					heroImage: "/images/valorant-hacks-radar.webp",
				},
				updates: {
					title: "Valorant Hacks Updates | Vanguard Maintenance Log",
					description: "Valorant hacks update log: Vanguard rebuilds for ESP boxes, soft aim, and radar on Windows PC. Check status before queueing after patches.",
					h1: "Valorant Hacks Updates — Maintenance Log",
					intro: "Track Vanguard maintenance and Valorant patch rebuilds for the undetected ESP wallhack, radar hack, and Aimbot package. Check here before queueing after major updates.",
					imageAlt: "Valorant Hacks live status after Vanguard and game patches",
					galleryTitle: "Valorant patch and maintenance visuals",
					ctaPrimary: "Buy Valorant Hacks",
					ctaSecondary: "Undetected status guide",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "Why the Updates page matters",
							paragraphs: [
								"Valorant and Vanguard anti-cheat receive frequent patches. Valorant Hacks publishes maintenance notes when ESP wallhack, radar, or Aimbot behavior needs a rebuild.",
								"Use <a href=\"https://support-valorant.riotgames.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Valorant Support</a> for Riot Games platform health and this page for Valorant Hacks build status — both matter on big update days.",
								"Checking this log before you queue reduces surprises after game days or seasonal launches on Competitive and Deathmatch.",
							],
						},
						{
							h2: "What maintenance entries cover",
							paragraphs: [
								"Entries note Vanguard anti-cheat compatibility status, rebuilt ESP wallhack overlays, radar range fixes, Aimbot tuning after weapon balance changes, and digital delivery of new builds to active licenses.",
								"Lifetime and monthly subscribers receive rebuild access during active license terms. See <a href=\"/pricing/\">Pricing</a> if you need to renew.",
								"For context on why rebuilds happen, read the <a href=\"/updates/\">Vanguard bypass guide</a> and <a href=\"/valorant-hacks/\">undetected Valorant hacks</a> explainer.",
							],
						},
						{
							h2: "Staying undetected after patches",
							paragraphs: [
								"No cheat guarantees permanent undetected status. Combine maintenance updates with responsible in-game settings and patch awareness.",
								"Follow season notes from <a href=\"https://playvalorant.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Valorant</a>, then confirm our rebuild is live before you queue.",
								"For urgent status questions after a Vanguard update, contact <a href=\"/support/\">Support</a> with your license tier and last played build version.",
							],
						},
					],
					heroImage: "/images/valorant-hacks-esp.webp",
				},
				faq: {
					title: "Valorant Hacks FAQ | ESP, Soft Aim & Radar Answers",
					description: "Valorant hacks FAQ: ESP boxes, soft aim, Vanguard maintenance, and pricing for PC. Clear answers before you buy.",
					h1: "Valorant Hacks FAQ — Common Questions",
					intro: "Answers about undetected Valorant Hacks — ESP wallhack, radar hack, Aimbot, Vanguard maintenance, checkout, and Valorant compatibility on Windows PC.",
					imageAlt: "Valorant Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "Valorant Hacks FAQ visuals",
					ctaPrimary: "Buy Valorant Hacks",
					ctaSecondary: "Contact support",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "What is Valorant Hacks?",
							paragraphs: [
								"Valorant Hacks is an undetected cheat package for Valorant on Windows PC. It includes ESP wallhack, 2D radar-style awareness, and Aimbot controls with Vanguard maintenance updates.",
								"Packages cover Competitive, Unrated, and Deathmatch. Explore <a href=\"/features/\">Features</a> for the full control list and <a href=\"/valorant-esp/\">ESP</a> / <a href=\"/valorant-aimbot/\">Aimbot</a> for module detail.",
								"Valorant itself is published by Riot Games (<a href=\"https://playvalorant.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Valorant</a>). Cheats are third-party tools and may violate Riot Games' rules — use is at your own risk.",
							],
						},
						{
							h2: "Are Valorant Hacks undetected in 2026?",
							paragraphs: [
								"Valorant Hacks is maintained with rebuilds after Vanguard anti-cheat and game patches. Check the <a href=\"/updates/\">Updates page</a> for current status — no cheat can guarantee permanent undetected operation.",
								"Read <a href=\"/valorant-hacks/\">undetected Valorant hacks</a> and the <a href=\"/updates/\">Vanguard guide</a> for the maintenance workflow.",
								"Responsible settings and reading maintenance notes before queueing are essential.",
							],
						},
						{
							h2: "Delivery, pricing, and support",
							paragraphs: [
								"Licenses deliver digitally after payment confirmation. Monthly is $35; lifetime is $150 USD — see <a href=\"/pricing/\">Pricing</a>.",
								"Contact support@valoranthack.net or the <a href=\"/support/\">Support page</a> with order details for setup or billing help. First launch steps are on <a href=\"/setup/\">Setup</a>.",
								"Refund eligibility is covered in the <a href=\"/refund-policy/\">Refund Policy</a>.",
							],
						},
					],
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
				},
				support: {
					title: "Valorant Hacks Support | Help & Contact",
					description: "Contact valorant hacks support for licenses, ESP setup, soft aim profiles, and on Windows PC. Include your order ID for faster help.",
					h1: "Valorant Hacks Support — Contact Us",
					intro: "Get help with Valorant Hacks licenses, checkout, ESP wallhack setup, Aimbot profiles, and Vanguard maintenance for Valorant on Windows PC.",
					imageAlt: "Valorant Hacks support page for license and setup help",
					galleryTitle: "Valorant Hacks support resources",
					ctaPrimary: "Email support",
					ctaSecondary: "Read setup guide",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "When to contact support",
							paragraphs: [
								"Reach out for order issues, license activation failures, ESP wallhack or Aimbot setup questions, and post-patch problems after Vanguard maintenance rebuilds.",
								"Include your order ID, license tier (monthly or lifetime), Windows version, and a clear description of the issue.",
								"Many answers already live in <a href=\"/faq/\">FAQ</a>, <a href=\"/setup/\">Setup</a>, and <a href=\"/updates/\">Updates</a> — check those first for faster resolution.",
							],
						},
						{
							h2: "Response times and scope",
							paragraphs: [
								"Support requests are reviewed daily. Valorant Hacks support covers delivery, billing, setup, and maintenance — not in-game coaching or account recovery for Riot Games bans.",
								"Account and game policy questions belong with Riot Games. We can help with license delivery and product configuration only.",
								"Check the Updates page and FAQ before opening a ticket — many post-patch questions are answered there.",
							],
						},
						{
							h2: "Self-service resources",
							paragraphs: [
								"Setup guide, Features list, Updates log, Refund Policy, and Terms of Use are linked from the footer. Vanguard bypass notes live on the dedicated <a href=\"/updates/\">Vanguard anti-cheat page</a>.",
								"Email: support@valoranthack.net",
								"Ready to purchase or renew? Open <a href=\"/pricing/\">Pricing</a>. Need feature detail first? See <a href=\"/features/\">Features</a>.",
							],
						},
					],
					heroImage: "/images/valorant-hacks-raid.webp",
				},
				undetected: {
					title: "Undetected Valorant Hacks 2026 | Vanguard Maintenance",
					description: "Undetected valorant hacks with Vanguard maintenance for ESP boxes, soft aim, and radar on Windows PC. Check status before you queue.",
					h1: "Undetected Valorant Hacks — Vanguard Maintenance",
					intro: "How Valorant Hacks stays maintained for Valorant after Vanguard anti-cheat patches — ESP wallhack, radar hack, and Aimbot rebuilds for Windows PC.",
					imageAlt: "Valorant Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected Valorant Hacks visuals",
					ctaPrimary: "Buy Valorant Hacks",
					ctaSecondary: "Vanguard bypass guide",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "What undetected means for Valorant Hacks",
							paragraphs: [
								"Undetected Valorant Hacks means the package is actively maintained against Vanguard anti-cheat and major Valorant patches — not that detection is impossible forever.",
								"Rebuilds target ESP wallhack overlays, radar behavior, and Aimbot signatures after Vanguard security updates.",
								"Anti-cheat technology is documented by <a href=\"https://www.riotgames.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Vanguard Anti-Cheat</a>; Valorant client updates ship through <a href=\"https://playvalorant.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Valorant</a>. Undetected status is an ongoing process tied to those releases.",
							],
						},
						{
							h2: "Vanguard maintenance workflow",
							paragraphs: [
								"When Vanguard anti-cheat or Valorant updates ship, the team assesses ESP, radar, and Aimbot modules, publishes status on the <a href=\"/updates/\">Updates page</a>, and delivers rebuilt builds to active licenses.",
								"On patch mornings, also check <a href=\"https://support-valorant.riotgames.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Valorant Support</a> for launcher outages that can look like product failures.",
								"Deep technical workflow: <a href=\"/updates/\">Vanguard bypass Valorant guide</a>. Feature stack: <a href=\"/features/\">Features</a>.",
							],
						},
						{
							h2: "Responsible use and next steps",
							paragraphs: [
								"Combine maintenance with conservative in-game settings. Read the <a href=\"/faq/\">FAQ</a> and Updates log regularly — undetected status is not a one-time promise.",
								"Lifetime and monthly plans include rebuild access during active terms — see <a href=\"/pricing/\">Pricing</a>.",
								"New buyers should also read <a href=\"/valorant-hacks/\">Valorant hacks 2026</a> and complete <a href=\"/setup/\">Setup</a> after delivery.",
							],
						},
					],
					heroImage: "/images/valorant-hacks-wallhack.webp",
				},
				wallhack: {
					title: "Valorant Wallhack 2026 | ESP Boxes & Visibility",
					description: "Valorant wallhack ESP with player boxes and spike markers for Windows PC. Undetected valorant hacks — learn overlays and buy.",
					h1: "Valorant Wallhack — ESP Boxes & Visibility",
					intro: "Valorant wallhack ESP for Valorant — see players, abilities, and the spike through toggleable wallhack overlays built for Competitive, Unrated, and Deathmatch.",
					imageAlt: "Valorant wallhack visibility through walls in a match",
					galleryTitle: "Valorant wallhack ESP gallery",
					ctaPrimary: "Buy Valorant Hacks",
					ctaSecondary: "Valorant ESP page",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Wallhack ESP vs raw aim tools",
							paragraphs: [
								"A Valorant wallhack focuses on information — player outlines, spike markers, ability cues — rather than automatic aiming. Valorant Hacks bundles wallhack ESP with radar and optional Aimbot in one license.",
								"Toggle categories so only the Valorant Hacks wallhack overlays you need stay active during rotations and site holds.",
								"For the broader ESP keyword page see <a href=\"/valorant-esp/\">Valorant ESP</a>; for combat assist see <a href=\"/valorant-aimbot/\">Aimbot</a>.",
							],
						},
						{
							h2: "Map coverage for wallhack ESP",
							paragraphs: [
								"Wallhack overlays support Competitive, Unrated, and Deathmatch with distance readouts and snaplines for engagement control.",
								"Season maps and POI changes are announced via <a href=\"https://playvalorant.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Valorant</a>. Wallhack remains useful because it tracks entities, not fixed landmarks alone.",
								"Pair wallhack awareness with <a href=\"/valorant-radar-hack/\">radar hack</a> cues for flanks during building and rooftop fights.",
							],
						},
						{
							h2: "Undetected wallhack maintenance",
							paragraphs: [
								"ESP wallhack modules rebuild after Vanguard anti-cheat patches. Follow the <a href=\"/updates/\">Updates page</a> and complete checkout for instant license delivery on Windows PC.",
								"Learn the full maintenance story on <a href=\"/valorant-hacks/\">undetected Valorant hacks</a> and <a href=\"/updates/\">Vanguard bypass</a>.",
								"Ready to buy? Compare <a href=\"/pricing/\">Pricing</a> or continue to the <a href=\"/valorant-esp/\">ESP hack</a> landing for alternate search wording.",
							],
						},
					],
					heroImage: "/images/valorant-hacks-wallhack.webp",
				},
				radar: {
					title: "Valorant Radar Hack | Valorant Hacks",
					description: "Valorant radar hack for Windows PC — flank cues near spike sites without filling the screen. Included in Valorant Hacks with ESP and Vanguard updates.",
					h1: "Radar",
					intro: "A Valorant radar hack for threats outside your view. Included in the same Valorant Hacks license.",
					imageAlt: "Valorant 2D radar overlay showing nearby threats",
					galleryTitle: "Radar overlay",
					ctaPrimary: "Get Access",
					ctaSecondary: "See ESP wallhack",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "What the radar shows",
							paragraphs: [
								"Site fights happen around corners, windows, and flanks. A 2D radar overlay shows nearby player threats outside direct line of sight so you can reposition before a rotate.",
								"Valorant Hacks radar complements <a href=\"/valorant-esp/\">ESP</a> markers during site takes and retakes.",
								"Mode rules and seasonal changes come from <a href=\"https://playvalorant.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Valorant</a>. Radar range remains configurable when map scale or agent mobility shifts.",
							],
						},
						{
							h2: "Configurable radar range",
							paragraphs: [
								"Adjust radar range for early rotations versus tight site holds. Directional cues highlight flanks during building clears on Competitive, Unrated, and Deathmatch.",
								"Toggle radar alongside ESP and Aimbot with in-client hotkeys during live matches.",
								"Combat follow-up lives on <a href=\"/valorant-aimbot/\">Aimbot</a> when you convert radar info into a fight.",
							],
						},
						{
							h2: "Maintenance and licensing",
							paragraphs: [
								"Radar modules receive Vanguard maintenance rebuilds with the full Valorant Hacks package. Monthly and lifetime licenses include digital delivery — see <a href=\"/pricing/\">Store</a>.",
								"Check <a href=\"/updates/\">Status</a> after major Valorant patches before relying on previous radar configs.",
								"New to the stack? Start at <a href=\"/features/\">Features</a> or the <a href=\"/valorant-hacks/\">product overview</a>.",
							],
						},
					],
					heroImage: "/images/valorant-hacks-radar.webp",
				},
				vanguard: {
					title: "Vanguard Bypass Valorant | Valorant Hacks Maintenance",
					description: "How valorant hacks rebuild after Vanguard patches — ESP boxes, soft aim, and radar maintenance for Windows PC. Read before queueing.",
					h1: "Vanguard Bypass — Valorant Hacks Maintenance",
					intro: "Understand Vanguard anti-cheat maintenance for Valorant Hacks — how ESP wallhack, radar hack, and Aimbot rebuild after Valorant security updates.",
					imageAlt: "Valorant Hacks maintenance after a Vanguard patch",
					galleryTitle: "Vanguard maintenance visuals",
					ctaPrimary: "Buy Valorant Hacks",
					ctaSecondary: "Check updates",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Vanguard anti-cheat overview",
							paragraphs: [
								"Vanguard anti-cheat is Riot Games' anti-cheat for Valorant on PC (see <a href=\"https://www.riotgames.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Vanguard Anti-Cheat</a>). Security updates can affect ESP wallhack, radar, and Aimbot behavior — requiring maintenance rebuilds for undetected packages.",
								"Valorant Hacks monitors Vanguard patch notes and Valorant seasonal updates from <a href=\"https://playvalorant.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Valorant</a> to schedule module reviews.",
								"“Vanguard bypass” in our wording means timely maintenance — not a permanent free pass around anti-cheat.",
							],
						},
						{
							h2: "What happens after a Vanguard patch",
							paragraphs: [
								"The team tests ESP overlays, radar signatures, and Aimbot profiles against the new build, publishes status on <a href=\"/updates/\">Updates</a>, and ships rebuilt packages to active licenses.",
								"Confirm Riot Games service health on <a href=\"https://support-valorant.riotgames.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Valorant Support</a> if the launcher or matchmaking fails during the same window.",
								"Avoid queueing on old builds after major patch days until maintenance notes confirm a new release. Related reading: <a href=\"/valorant-hacks/\">undetected Valorant hacks</a>.",
							],
						},
						{
							h2: "No permanent bypass guarantee",
							paragraphs: [
								"Vanguard bypass in practice means timely maintenance. Read the undetected guide, <a href=\"/faq/\">FAQ</a>, and Updates log before every session.",
								"Contact <a href=\"/support/\">Support</a> if activation fails immediately after a posted rebuild.",
								"Buying for the first time? Compare <a href=\"/pricing/\">Pricing</a> and finish <a href=\"/setup/\">Setup</a> only after Updates shows a live build.",
							],
						},
					],
					heroImage: "/images/valorant-hacks-aimbot.webp",
				},
				"cheats-2026": {
					title: "Valorant Hacks 2026 | ESP Soft Aim & Radar",
					description: "Best valorant hacks 2026: ESP boxes, soft aim, and radar for Windows PC. Undetected valorant hacks with Vanguard maintenance — compare and buy.",
					h1: "Valorant Hacks 2026 — ESP, Soft Aim & Radar",
					intro: "The 2026 Valorant Hacks package for Valorant — undetected ESP wallhack, radar hack, and Aimbot with Vanguard maintenance, instant delivery, and Windows PC support.",
					imageAlt: "Valorant Hacks product overview for Valorant",
					galleryTitle: "Valorant Hacks 2026 gallery",
					ctaPrimary: "Buy Valorant Hacks",
					ctaSecondary: "Compare features",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Why valorant hacks buyers choose Valorant Hacks in 2026",
							paragraphs: [
								"2026 seasons bring new maps, weapons, and Vanguard anti-cheat updates. Valorant Hacks bundles ESP wallhack, radar hack, and Aimbot with active maintenance — not a stale prior-year build.",
								"Track official season messaging on <a href=\"https://playvalorant.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Valorant</a>, then use our <a href=\"/updates/\">Updates log</a> for product rebuild timing.",
								"Monthly ($35) and lifetime ($150) Valorant Hacks plans cover Competitive, Unrated, and Deathmatch — see <a href=\"/pricing/\">Store</a>.",
							],
						},
						{
							h2: "Full feature stack for 2026 buyers",
							paragraphs: [
								"Player ESP wallhack, spike markers, 2D radar overlays, Aimbot profiles, in-client toggles, and post-patch rebuilds — one license instead of stacking separate tools.",
								"Deep links: <a href=\"/valorant-hacks/\">Valorant hacks pillar</a>, <a href=\"/valorant-esp/\">ESP</a>, <a href=\"/valorant-aimbot/\">Aimbot</a>, <a href=\"/valorant-esp/\">wallhack</a>, <a href=\"/valorant-radar-hack/\">radar</a>, <a href=\"/valorant-hacks/\">undetected</a>.",
								"Instant digital delivery after checkout confirmation worldwide.",
							],
						},
						{
							h2: "Before you buy in 2026",
							paragraphs: [
								"Read the <a href=\"/valorant-hacks/\">Valorant hacks</a> pillar, Features, Pricing, Setup, and Updates pages. Check undetected status notes after every major patch — responsible use and maintenance awareness matter.",
								"Also compare the <a href=\"/valorant-hacks/\">Valorant hacks</a> checklist, <a href=\"/blog/valorant-hacks-2026-whats-new/\">2026 blog guide</a>, and <a href=\"/faq/\">FAQ</a>.",
								"Support is available at support@valoranthack.net via the <a href=\"/support/\">Support page</a>.",
							],
						},
					],
					heroImage: "/images/valorant-hacks-esp.webp",
				},
				hacks: {
					title: "Valorant Hacks | Undetected ESP and Aimbot for PC",
					description: "Buy undetected valorant hacks for Windows PC. ESP, aimbot, and radar with Vanguard updates. Instant delivery across NA, LATAM, Brazil, and worldwide.",
					h1: "Valorant Hacks",
					intro: "Buy undetected valorant hacks for Windows PC. ESP, aimbot, and radar in one license, with Vanguard rebuilds after patches.",
					imageAlt: "Valorant Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "In-game look",
					ctaPrimary: "Get Access",
					ctaSecondary: "View features",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "ESP, aimbot, and radar",
							paragraphs: [
								"Players searching for Valorant hacks usually want visibility and combat tools without stacking separate downloads. Valorant Hacks bundles player ESP, spike markers, 2D radar overlays, and configurable Aimbot in one maintained package.",
								"Coverage spans Competitive, Unrated, and Deathmatch with in-client toggles for live matches. Monthly ($35) and lifetime ($150) licenses unlock the full stack.",
								"Official game updates come from <a href=\"https://playvalorant.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Valorant</a>; our package tracks those releases via the <a href=\"/updates/\">Status page</a>. Cross-check platform health on <a href=\"https://support-valorant.riotgames.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Valorant Support</a> before patch-day queues.",
							],
						},
						{
							h2: "Competitive, Unrated, and Deathmatch",
							paragraphs: [
								"Use this page for the core product overview. Deep-dive modules: <a href=\"/valorant-esp/\">Valorant ESP</a>, <a href=\"/valorant-aimbot/\">Valorant Aimbot</a>, and <a href=\"/valorant-radar-hack/\">radar hack</a>.",
								"Read agents before you push, mark the spike, and stay aware near sites. Tune soft aim per weapon for Haven, Split, and long-range maps.",
								"Blog guides: <a href=\"/blog/valorant-hacks-complete-guide-2026/\">complete guide</a> and <a href=\"/blog/valorant-hacks-buyers-guide/\">buyers guide</a>.",
							],
						},
						{
							h2: "How to start",
							paragraphs: [
								"Buy a plan, get your license by email, then follow setup. Check Status after every major patch.",
								"Compare the <a href=\"/valorant-esp/\">ESP</a>, <a href=\"/valorant-aimbot/\">Aimbot</a>, and <a href=\"/features/\">Features</a> pages — or review <a href=\"/pricing/\">Store</a> for monthly and lifetime licenses.",
								"Digital delivery runs after checkout for Windows 10 and 11 PCs worldwide. After purchase, follow <a href=\"/setup/\">Setup</a> and keep <a href=\"/support/\">Support</a> ready with your order ID.",
							],
						},
						{
							h2: "Undetected status with Vanguard maintenance",
							paragraphs: [
								"Undetected Valorant hacks require rebuilds after Vanguard and major Valorant patches. Check Status before queueing — maintenance notes confirm when a new build is live. No package can promise permanent undetected status.",
								"See <a href=\"https://www.riotgames.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Vanguard Anti-Cheat</a> for anti-cheat background and our <a href=\"/updates/\">Vanguard maintenance notes</a> for the practical workflow.",
								"Responsible settings and reading Status before you queue are essential.",
							],
						},
					],
					heroImage: "/images/valorant-hacks-raid.webp",
				},
				"cheat-download": {
					title: "Valorant Hack Download 2026 | Instant Access",
					description: "Valorant hack download with instant license delivery — ESP boxes, soft aim, and radar for Windows PC. Buy, activate, and play.",
					h1: "Valorant Hack Download — Instant License Delivery",
					intro: "How Valorant hack download works for Valorant — digital license delivery after payment confirmation, with ESP wallhack, radar hack, and Aimbot access on Windows PC.",
					imageAlt: "Valorant Hacks download and install delivery flow",
					galleryTitle: "Valorant hack download visuals",
					ctaPrimary: "Buy Valorant Hacks",
					ctaSecondary: "Setup guide",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "How Valorant hack download delivery works",
							paragraphs: [
								"After checkout confirms payment, Valorant Hacks license details arrive digitally by email. No physical shipment — access begins once activation instructions are delivered.",
								"Keep your order confirmation and license email ready for the <a href=\"/setup/\">Setup guide</a> and Support requests.",
								"If Riot Games services are down, check <a href=\"https://support-valorant.riotgames.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Valorant Support</a> before assuming a download failure.",
							],
						},
						{
							h2: "What your download unlocks",
							paragraphs: [
								"Every Valorant Hacks download includes player ESP, spike markers, 2D radar overlays, Aimbot profiles, and in-client toggles for Competitive, Unrated, and Deathmatch.",
								"Monthly ($35) and lifetime ($150) plans share the same feature stack — compare options on the <a href=\"/pricing/\">Pricing page</a>.",
								"Feature detail: <a href=\"/features/\">Features</a>. Module pages: <a href=\"/valorant-esp/\">ESP</a>, <a href=\"/valorant-aimbot/\">Aimbot</a>.",
							],
						},
						{
							h2: "After purchase — setup and updates",
							paragraphs: [
								"Follow Setup to activate ESP wallhack and Aimbot on Windows 10 or 11. When Valorant or Vanguard anti-cheat patches ship, check the <a href=\"/updates/\">Updates page</a> for maintenance rebuilds.",
								"Contact <a href=\"/support/\">Support</a> with your order ID if delivery or activation fails within 24 hours of purchase.",
								"Also read <a href=\"/valorant-hacks/\">undetected status</a> so you know what “download ready” means after a patch.",
							],
						},
					],
					heroImage: "/images/valorant-hacks-raid.webp",
				},
				"mod-menu": {
					title: "Valorant Mod Menu 2026 | ESP & Soft Aim Toggles",
					description: "Valorant mod menu for in-match toggles — ESP boxes, soft aim, radar, and on Windows PC. Undetected valorant hacks package.",
					h1: "Valorant Mod Menu — In-Client Control Panel",
					intro: "Valorant mod menu controls for Valorant — toggle ESP wallhack categories, radar range, and Aimbot profiles mid-match without leaving your Valorant session on Windows PC.",
					imageAlt: "Valorant Hacks in-game menu controls",
					galleryTitle: "Valorant mod menu gallery",
					ctaPrimary: "Buy Valorant Hacks",
					ctaSecondary: "Full feature list",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "What a Valorant mod menu controls",
							paragraphs: [
								"A Valorant mod menu is the in-client panel where you enable ESP wallhack overlays, adjust radar range, and switch Aimbot profiles during live matches. Valorant Hacks keeps those toggles accessible with hotkeys.",
								"Toggle player outlines, spike markers, ability cues, and per-weapon Aimbot settings without alt-tabbing out of Valorant.",
								"Control deep-dives: <a href=\"/valorant-esp/\">ESP</a>, <a href=\"/valorant-aimbot/\">Aimbot</a>, <a href=\"/valorant-radar-hack/\">radar</a>.",
							],
						},
						{
							h2: "Mod menu categories for Competitive, Unrated, and Deathmatch",
							paragraphs: [
								"Separate Valorant Hacks ESP categories for players, the spike, and abilities let you reduce overlay noise during rotations and site holds.",
								"Radar hack range and Aimbot smoothness adjust from the same mod menu — useful when ${EXT.valorant} seasons change fight distances and mobility.",
								"Soft tracking players should start with <a href=\"/valorant-aimbot/\">soft aim</a> profiles before aggressive FOV.",
							],
						},
						{
							h2: "Maintained mod menu after Vanguard patches",
							paragraphs: [
								"Valorant mod menu behavior is rebuilt when Vanguard anti-cheat or major Valorant updates land. Follow the <a href=\"/updates/\">Updates page</a> and <a href=\"/updates/\">Vanguard bypass guide</a> before queueing on patch days.",
								"Checkout with instant digital delivery for monthly and lifetime licenses — see <a href=\"/pricing/\">Pricing</a>.",
								"Need install steps? Open <a href=\"/setup/\">Setup</a> after your license email arrives.",
							],
						},
					],
					heroImage: "/images/valorant-hacks-radar.webp",
				},
				"soft-aim": {
					title: "Valorant Soft Aim 2026 | Smooth Aimbot Settings",
					description: "Valorant soft aim settings for natural tracking on Windows PC. Smoothness, FOV, and bone priority — included in our valorant hacks with ESP boxes.",
					h1: "Valorant Soft Aim — Smooth Aimbot Controls",
					intro: "Valorant soft aim settings for Valorant — configurable Aimbot smoothness, FOV, bone priority, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.",
					imageAlt: "Valorant soft aim FOV and smoothness settings",
					galleryTitle: "Valorant soft aim gallery",
					ctaPrimary: "Buy Valorant Hacks",
					ctaSecondary: "Aimbot controls",
					ctaSecondaryHref: "/valorant-aimbot/",
					sections: [
						{
							h2: "What Valorant soft aim means",
							paragraphs: [
								"Valorant Hacks soft aim refers to Aimbot behavior tuned for smooth, natural-looking tracking rather than instant snap. Smoothness, FOV, and sensitivity sliders control how assist feels in Valorant fights.",
								"Bone priority and target selection cover closest player, lowest health, or highest-threat targets during squad fights.",
								"Full Aimbot documentation: <a href=\"/valorant-aimbot/\">Valorant Aimbot</a>. Alternate wording: <a href=\"/valorant-aimbot/\">aimbot hack</a>.",
							],
						},
						{
							h2: "Soft aim profiles per weapon class",
							paragraphs: [
								"Save separate soft aim profiles for ARs, SMGs, and bolt-actions. Switch between long-range AR beams and close-quarters room clears with hotkeys mid-match.",
								"Weapon TTKs shift with <a href=\"https://playvalorant.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Valorant</a> balance patches — retune smoothness after major combat updates.",
								"Soft aim ships alongside <a href=\"/valorant-esp/\">ESP wallhack</a> and <a href=\"/valorant-radar-hack/\">2D radar</a> overlays.",
							],
						},
						{
							h2: "Undetected soft aim with Vanguard maintenance",
							paragraphs: [
								"Aimbot modules rebuild after Vanguard anti-cheat patches. Check the <a href=\"/updates/\">Updates page</a> before queueing — responsible settings and maintenance awareness matter for undetected play.",
								"Monthly and lifetime licenses checkout with digital delivery on Windows PC — <a href=\"/pricing/\">Pricing</a>.",
								"Activation help: <a href=\"/setup/\">Setup</a> · status questions: <a href=\"/support/\">Support</a>.",
							],
						},
					],
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
				},
				"best-cheats": {
					title: "Best Valorant Hacks 2026 | Buyer Guide",
					description: "Best valorant hacks for 2026: ESP boxes, soft aim, and Vanguard maintenance on Windows PC. Use this checklist before checkout.",
					h1: "Best Valorant Hacks — 2026 Buyer Guide",
					intro: "Compare the Valorant hacks for Valorant in 2026 — undetected ESP wallhack, radar hack, and Aimbot in one maintained package with Vanguard anti-cheat rebuilds and instant delivery.",
					imageAlt: "Valorant Hacks overview for Valorant on PC",
					galleryTitle: "Best Valorant hacks gallery",
					ctaPrimary: "Buy Valorant Hacks",
					ctaSecondary: "Compare pricing",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "What makes the Valorant hacks in 2026",
							paragraphs: [
								"The Valorant hacks combine active Vanguard maintenance, a full ESP wallhack and radar stack, configurable Aimbot, and clear update communication — not a stale build from a prior season.",
								"Valorant Hacks covers Competitive, Unrated, and Deathmatch with in-client toggles and post-patch rebuilds.",
								"Verify the live game is healthy via <a href=\"https://support-valorant.riotgames.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Valorant Support</a>, then confirm our <a href=\"/updates/\">Updates</a> note before you judge any package “best.”",
							],
						},
						{
							h2: "Best Valorant hacks feature checklist",
							paragraphs: [
								"Look for player ESP wallhack, spike markers, 2D radar overlays, Aimbot profiles, hotkey toggles, and documented maintenance after Valorant patches.",
								"Review <a href=\"/features/\">Features</a>, <a href=\"/valorant-hacks/\">undetected status</a>, and <a href=\"/valorant-hacks/\">Valorant hacks 2026</a> before checkout — monthly ($35) and lifetime ($150) plans available.",
								"Module pages worth opening: <a href=\"/valorant-esp/\">ESP</a>, <a href=\"/valorant-aimbot/\">Aimbot</a>, <a href=\"/valorant-hacks/\">hacks</a>.",
							],
						},
						{
							h2: "Buying the Valorant hacks safely",
							paragraphs: [
								"Purchase through secure checkout for instant digital delivery. Read Setup, FAQ, and Updates pages before your first queue — and contact Support with order details if activation needs help.",
								"No cheat guarantees permanent undetected status — combine maintenance with responsible in-game settings.",
								"Remember: using cheats can violate Riot Games terms. Proceed only if you accept that risk.",
							],
						},
					],
					heroImage: "/images/valorant-hacks-esp.webp",
				},
				"aimbot-hack": {
					title: "Valorant Aimbot Hack 2026 | Soft Aim Assist",
					description: "Valorant aimbot hack with soft aim for Windows PC. FOV, bone priority, and hotkeys — bundled with ESP boxes in our valorant hacks package.",
					h1: "Valorant Aimbot Hack — Soft Aim Assist",
					intro: "Valorant aimbot hack tools for Valorant — smoothness, FOV, bone priority, per-weapon profiles, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.",
					imageAlt: "Valorant aimbot hack controls and bone priority",
					galleryTitle: "Valorant aimbot hack gallery",
					ctaPrimary: "Buy Valorant Hacks",
					ctaSecondary: "Aimbot settings",
					ctaSecondaryHref: "/valorant-aimbot/",
					sections: [
						{
							h2: "Valorant aimbot hack vs visibility tools",
							paragraphs: [
								"A Valorant aimbot hack focuses on assisted targeting during firefights — while ESP wallhack and radar handle map awareness. Valorant Hacks bundles aimbot hack modules with visibility overlays in one license.",
								"Smoothness, FOV, and sensitivity controls tune assist for Valorant combat pace across Competitive, Unrated, and Deathmatch.",
								"Prefer softer tracking language? See <a href=\"/valorant-aimbot/\">soft aim</a>. Full settings: <a href=\"/valorant-aimbot/\">Aimbot page</a>.",
							],
						},
						{
							h2: "Aimbot hack controls and hotkeys",
							paragraphs: [
								"Bone priority options cover head, chest, or dynamic targets. Hotkeys enable or disable Valorant Hacks aimbot mid-match without opening menus during rotations or site holds.",
								"Per-weapon profile slots separate long-range AR tuning from close-quarters SMG settings.",
								"Balance patches from <a href=\"https://playvalorant.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Valorant</a> can change ideal FOV — retune after major weapon updates.",
							],
						},
						{
							h2: "Undetected aimbot hack maintenance",
							paragraphs: [
								"Aimbot hack signatures rebuild after Vanguard anti-cheat updates. Follow the <a href=\"/updates/\">Updates page</a> and <a href=\"/updates/\">Vanguard bypass guide</a> before queueing after patch days.",
								"Checkout with instant digital delivery for Windows 10 and 11 — <a href=\"/pricing/\">Pricing</a>.",
								"Pair with <a href=\"/valorant-esp/\">ESP</a> for the full information + assist loop.",
							],
						},
					],
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
				},
				"esp-hack": {
					title: "Valorant ESP Hack 2026 | Player Boxes & Spike",
					description: "Valorant ESP hack with player boxes and spike markers for Windows PC. Undetected valorant hacks with — see overlays and buy.",
					h1: "Valorant ESP Hack — Player Boxes Guide",
					intro: "Valorant Hacks ESP overlays for Valorant — player outlines, ability cues, and spike markers with distance readouts across Competitive, Unrated, and Deathmatch.",
					imageAlt: "Valorant ESP hack boxes and spike markers",
					galleryTitle: "Valorant ESP hack gallery",
					ctaPrimary: "Buy Valorant Hacks",
					ctaSecondary: "ESP controls",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "What a Valorant ESP hack shows",
							paragraphs: [
								"A Valorant Hacks ESP overlay renders enemy player outlines, ability cues, and spike markers through walls — closing the information gap before you commit to a fight.",
								"Distance readouts and snapline options help control engagement range during squad pushes and third-party scenarios.",
								"Canonical visibility guide: <a href=\"/valorant-esp/\">Valorant ESP</a>. Wallhack wording: <a href=\"/valorant-esp/\">wallhack</a>.",
							],
						},
						{
							h2: "ESP hack categories",
							paragraphs: [
								"Toggle player ESP, spike markers, and ability cues independently so only match-critical overlays stay active during rotations.",
								"Team and enemy colour coding supports Competitive, Unrated, and Deathmatch.",
								"Map and agent updates publish through <a href=\"https://playvalorant.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Valorant</a> — keep categories toggled to what the current map rewards.",
							],
						},
						{
							h2: "Undetected ESP hack with Vanguard maintenance",
							paragraphs: [
								"ESP hack modules rebuild after Vanguard anti-cheat and Valorant patches. Check the <a href=\"/updates/\">Updates page</a> before queueing — pair ESP hack awareness with <a href=\"/valorant-radar-hack/\">radar hack</a> for flank reads.",
								"Licenses deliver digitally after checkout on Windows PC — see <a href=\"/pricing/\">Pricing</a>.",
								"Install steps: <a href=\"/setup/\">Setup</a>. Status questions: <a href=\"/valorant-hacks/\">undetected guide</a>.",
							],
						},
					],
					heroImage: "/images/valorant-hacks-wallhack.webp",
				},
				"unlock-all": {
					title: "Valorant Unlock All 2026 | What It Really Means",
					description: "Valorant unlock all explained vs real valorant hacks — ESP boxes, soft aim, and radar for Windows PC. Know what you are buying.",
					h1: "Valorant Unlock All — What Players Search For",
					intro: "Valorant unlock all is a common search term for Valorant — this page clarifies what unlock-all tools claim versus the ESP wallhack, radar hack, and Aimbot tools Valorant Hacks actually provides on Windows PC.",
					imageAlt: "Valorant Hacks license features overview",
					galleryTitle: "Valorant unlock all guide visuals",
					ctaPrimary: "Buy Valorant Hacks",
					ctaSecondary: "See features",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "What Valorant unlock all usually means",
							paragraphs: [
								"Valorant unlock all searches often refer to instant access to weapons, camos, skins, or battle pass tiers. Those claims differ from visibility and combat-assist tools like ESP wallhack and Aimbot.",
								"Valorant Hacks focuses on in-match awareness — player ESP, spike markers, radar overlays, and configurable Aimbot — not account-wide cosmetic unlocks.",
								"Skins and battle pass items are sold through <a href=\"https://playvalorant.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Valorant</a>. Be wary of unlock-all downloads that promise free skins — they are often scams.",
							],
						},
						{
							h2: "Visibility tools vs unlock-all claims",
							paragraphs: [
								"Valorant Hacks ESP helps you spot enemy agents, abilities, and the spike during live matches. Radar adds flank awareness; Aimbot covers combat assist with smoothness and hotkey controls.",
								"For site takes during a match, spike markers speed rotations — see the <a href=\"/valorant-esp/\">ESP</a> and <a href=\"/features/\">Features</a> pages for the full Valorant Hacks tool list.",
								"Related: <a href=\"/valorant-hacks/\">Valorant hacks</a> and <a href=\"/valorant-hacks/\">Valorant hacks</a>.",
							],
						},
						{
							h2: "Buying Valorant Hacks for the right reasons",
							paragraphs: [
								"If you need undetected ESP wallhack, radar hack, and Aimbot for Valorant on Windows PC, compare <a href=\"/pricing/\">Pricing</a> and read the <a href=\"/setup/\">Setup guide</a> before checkout.",
								"Check the <a href=\"/updates/\">Updates page</a> after Vanguard anti-cheat patches — maintenance rebuilds publish for active licenses.",
								"Questions? <a href=\"/faq/\">FAQ</a> and <a href=\"/support/\">Support</a> cover delivery and configuration — not cosmetic unlocks.",
							],
						},
					],
					heroImage: "/images/valorant-hacks-radar.webp",
				},
				privacy: {
					title: "Privacy Policy | Valorant Hacks",
					description: "Privacy policy for Valorant Hacks. How we handle support emails, order data, and checkout for valorant hacks licenses on valoranthack.net.",
					h1: "Privacy Policy",
					intro: "How Valorant Hacks handles information when you browse valoranthack.net or contact support about a Valorant license.",
					imageAlt: "Valorant Hacks privacy policy page",
					galleryTitle: "Valorant Hacks legal resources",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms of use",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we may collect",
							paragraphs: [
								"We may collect contact details you send by email, order references needed to resolve support requests, and basic technical data used to operate and secure the website.",
								"We do not sell personal data. Checkout payment details are processed by the checkout provider — review their privacy terms for transaction data.",
							],
							list: [
								"Contact details you send by email",
								"Order references for support requests",
								"Basic technical data for site security",
							],
						},
						{
							h2: "How information is used",
							paragraphs: [
								"Information is used to respond to support requests, process order issues, improve site reliability, and meet legal obligations when required.",
								"Analytics may use aggregated traffic data without identifying individual Valorant Hacks customers.",
							],
						},
						{
							h2: "Your choices and contact",
							paragraphs: [
								"You may request correction or deletion of support email data by contacting support@valoranthack.net with your request details.",
								"Policy updates publish on this page. Continued use of valoranthack.net after updates means you accept the revised policy. Also see <a href=\"/terms/\">Terms of Use</a> and <a href=\"/refund-policy/\">Refund Policy</a>.",
							],
						},
					],
					heroImage: "/images/valorant-hacks-aimbot.webp",
				},
				refund: {
					title: "Refund Policy | Valorant Hacks",
					description: "Refund policy for Valorant Hacks. Digital delivery terms and eligibility for valorant hacks packages with ESP, soft aim, and radar.",
					h1: "Refund Policy",
					intro: "Refund terms for Valorant Hacks licenses — ESP wallhack, radar hack, and Aimbot packages purchased through checkout for Valorant.",
					imageAlt: "Valorant Hacks refund policy page",
					galleryTitle: "Valorant Hacks billing resources",
					ctaPrimary: "Contact support",
					ctaSecondary: "Read privacy policy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery and eligibility",
							paragraphs: [
								"Valorant Hacks licenses deliver digitally after payment confirmation. Because access begins immediately, refunds are limited to cases outlined below.",
								"Submit refund requests within 24 hours of purchase with your order ID and reason.",
							],
						},
						{
							h2: "When refunds may be approved",
							paragraphs: [
								"Duplicate charges, failed delivery despite confirmed payment, or technical activation failures verified by support may qualify for review.",
								"Refund decisions are final. Chargebacks without contacting support first may result in license revocation. See also <a href=\"/terms/\">Terms of Use</a>.",
							],
						},
						{
							h2: "How to request a refund",
							paragraphs: [
								"Email support@valoranthack.net with subject \"Refund Request\", your order ID, purchase date, and issue summary — or use the <a href=\"/support/\">Support page</a>.",
								"Approved refunds process back to the original payment method when possible. Pricing details live on <a href=\"/pricing/\">Pricing</a>.",
							],
						},
					],
					heroImage: "/images/valorant-hacks-raid.webp",
				},
				terms: {
					title: "Terms of Use 2026 | Valorant Hacks Rules",
					description: "Terms of use for valoranthack.net and Valorant Hacks licenses. Usage rules, anti-cheat risk, and liability for Windows PC cheats.",
					h1: "Terms of Use",
					intro: "Terms governing use of valoranthack.net and Valorant Hacks licenses for Valorant on Windows PC.",
					imageAlt: "Valorant Hacks terms of use page",
					galleryTitle: "Valorant Hacks legal pages",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy policy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance and license scope",
							paragraphs: [
								"By purchasing or using Valorant Hacks you agree to these terms. Licenses grant personal use of ESP wallhack, radar, and Aimbot tools for Valorant on Windows PC only.",
								"Sharing, reselling, or reverse-engineering the package violates these terms and may revoke access.",
							],
						},
						{
							h2: "Risk and anti-cheat disclaimer",
							paragraphs: [
								"Using cheats in Valorant may violate Riot Games terms and result in account penalties. Valorant Hacks provides maintenance but does not guarantee undetected status or account safety.",
								"You assume all risk. We are not liable for bans, data loss, or damages arising from product use. See also <a href=\"/valorant-hacks/\">undetected status</a>.",
							],
						},
						{
							h2: "Changes and governing law",
							paragraphs: [
								"We may update these terms by posting revisions on this page. Continued use after changes constitutes acceptance.",
								"Contact support@valoranthack.net for questions. Related policies: <a href=\"/privacy-policy/\">Privacy</a> and <a href=\"/refund-policy/\">Refunds</a>.",
							],
						},
					],
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
				},
			},
		},
		es: {
			ui: {
				nav: {
					home: "Inicio",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funciones",
					pricing: "Precios",
					setup: "Instalación",
					updates: "Actualizaciones",
					faq: "FAQ",
					buyNow: "Comprar",
				},
				hero: {
					accent: "Trucos Valorant indetectables",
					accentShort: "Valorant Hacks",
					subtitle: "ESP wallhack, radar hack y Aimbot para Valorant en PC Windows — mantenimiento Vanguard anti-cheat incluido.",
					subtitleShort: "ESP, radar y Aimbot para Valorant PC",
					buyNow: "Comprar ahora",
					seeFeatures: "Ver funciones",
				},
				trust: {
					status: "En línea",
					statusNote: "El paquete Valorant Hacks está activo para Valorant en PC Windows.",
					statusShort: "Activo",
					delivery: "Entrega digital instantánea",
					platform: "Windows 10 y 11",
					antiCheat: "Mantenimiento Vanguard anti-cheat incluido",
					antiCheatShort: "Vanguard anti-cheat incluido",
				},
				product: {
					title: "Valorant Hacks",
					addToCart: "Añadir al carrito",
					monthly: "Mensual",
					lifetime: "De por vida",
					available: "Disponible ahora",
					gameBadge: "Valorant",
					platformBadge: "PC Windows",
					statusBadge: "Paquete indetectable",
				},
				reviews: {
					title: "Lo que dicen los jugadores",
					subtitle: "Comentarios recientes de compradores de Valorant Hacks",
					outOf: "de 5",
					countLabel: "reseñas",
				},
				common: {
					buyNow: "Comprar ahora",
					readGuide: "Leer guía",
					language: "Idioma",
					officialLanguageNote: "El inglés es el idioma oficial. Otras versiones están traducidas para SEO global.",
					relatedPages: "Páginas relacionadas",
				},
				footer: {
					explore: "Explorar",
					help: "Ayuda y legal",
					tagline: "ESP, wallhack, radar y Aimbot indetectables para Valorant — checkout en Zadeyo.",
				},
				images: {
					hero: "Valorant Hacks hero — ESP and aimbot overlay in Valorant",
					espWallhack: "Wallhack outlines showing agents and enemies through walls",
					aimbotCombat: "Soft aim assist overlay during a Valorant round",
					squadFight: "Valorant Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Valorant match",
					headerArt: "Aimbot view and bone priority controls for Valorant",
					cheatsPackage: "2D radar threat overlay for Valorant",
					rebootFight: "Aimbot assist during a Valorant firefight",
					battleRoyale: "Valorant Hacks in-match overview for Windows PC",
					battleRoyaleIsland: "ESP markers for agents and the spike in Valorant",
				},
			},
			pages: {
				home: {
					title: "Valorant Hacks | Sitio oficial para PC",
					description: "Sitio oficial de Valorant Hacks para PC Windows. Compara ESP, aimbot y radar — luego compra. Hecho para LATAM, NA y el mundo.",
					h1: "Valorant Hacks",
					intro: "Valorant Hacks es el sitio oficial para Valorant en PC Windows. Revisa funciones, planes y el estado de Vanguard antes de comprar.",
					imageAlt: "Valorant Hacks — ESP y aimbot en partida",
					galleryTitle: "Aspecto en partida",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Comprar Valorant Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Por qué comprar aquí",
							paragraphs: [
								"Valorant Hacks ofrece ESP wallhack, radar hack y valorant aimbot indetectables para Valorant en Windows PC. Ideal para Competitive, Unrated y Deathmatch.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Vanguard anti-cheat maintenance.",
							],
						},
						{
							h2: "ESP, aimbot y radar en una licencia",
							paragraphs: [
								"Valorant Hacks ofrece ESP wallhack, radar hack y valorant aimbot indetectables para Valorant en Windows PC. Una licencia en lugar de herramientas separadas.",
								"Consulta la página Updates antes de jugar tras parches de Vanguard anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
							],
						},
					],
				},
				"valorant-esp": {
					title: "ESP Valorant | Cajas de jugador y wallhack",
					description: "ESP Valorant: player boxes, spike markers, and wallhack overlays. entrega digital instantánea. indetectables — Windows PC.",
					h1: "ESP Valorant",
					intro: "Valorant Hacks ofrece ESP wallhack, radar hack y valorant aimbot indetectables para Valorant en Windows PC. ESP Valorant.",
					imageAlt: "Valorant ESP player boxes and distance readouts in a match",
					galleryTitle: "ESP Valorant",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Comprar Valorant Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "ESP Valorant",
							paragraphs: [
								"Valorant Hacks ofrece ESP wallhack, radar hack y valorant aimbot indetectables para Valorant en Windows PC. player boxes, spike markers, and wallhack overlays.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Vanguard anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Vanguard anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Vanguard anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Vanguard anti-cheat maintenance.",
								"Contacta support@valoranthack.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"valorant-aimbot": {
					title: "Aimbot Valorant | Controles soft aim",
					description: "Aimbot Valorant: soft aim, FOV, and per-weapon Aimbot profiles. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Aimbot Valorant",
					intro: "Valorant Hacks ofrece ESP wallhack, radar hack y valorant aimbot indetectables para Valorant en Windows PC. Aimbot Valorant.",
					imageAlt: "Valorant aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Valorant",
					heroImage: "/images/valorant-hacks-aimbot.webp",
					ctaPrimary: "Comprar Valorant Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Aimbot Valorant",
							paragraphs: [
								"Valorant Hacks ofrece ESP wallhack, radar hack y valorant aimbot indetectables para Valorant en Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Vanguard anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Vanguard anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Vanguard anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Vanguard anti-cheat maintenance.",
								"Contacta support@valoranthack.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				features: {
					title: "Funciones | Lista completa de funciones",
					description: "Funciones: ESP, soft aim, radar controls. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Funciones",
					intro: "Valorant Hacks ofrece ESP wallhack, radar hack y valorant aimbot indetectables para Valorant en Windows PC. Funciones.",
					imageAlt: "Valorant Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funciones",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Comprar Valorant Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funciones",
							paragraphs: [
								"Valorant Hacks ofrece ESP wallhack, radar hack y valorant aimbot indetectables para Valorant en Windows PC. ESP, soft aim, radar controls.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Vanguard anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Vanguard anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Vanguard anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Vanguard anti-cheat maintenance.",
								"Contacta support@valoranthack.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				pricing: {
					title: "Precios | Mensual y de por vida",
					description: "Precios: $35 monthly or $150 lifetime licenses. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Precios",
					intro: "Valorant Hacks ofrece ESP wallhack, radar hack y valorant aimbot indetectables para Valorant en Windows PC. Precios.",
					imageAlt: "Valorant Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Precios",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Comprar Valorant Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Precios",
							paragraphs: [
								"Valorant Hacks ofrece ESP wallhack, radar hack y valorant aimbot indetectables para Valorant en Windows PC. $35 monthly or $150 lifetime licenses.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Vanguard anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Vanguard anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Vanguard anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Vanguard anti-cheat maintenance.",
								"Contacta support@valoranthack.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				setup: {
					title: "Instalación | Guía de instalación PC",
					description: "Instalación: Windows PC activation and first-launch setup. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Instalación",
					intro: "Valorant Hacks ofrece ESP wallhack, radar hack y valorant aimbot indetectables para Valorant en Windows PC. Instalación.",
					imageAlt: "Valorant Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Instalación",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Comprar Valorant Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalación",
							paragraphs: [
								"Valorant Hacks ofrece ESP wallhack, radar hack y valorant aimbot indetectables para Valorant en Windows PC. Windows PC activation and first-launch setup.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Vanguard anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Vanguard anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Vanguard anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Vanguard anti-cheat maintenance.",
								"Contacta support@valoranthack.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				updates: {
					title: "Actualizaciones | Registro Vanguard",
					description: "Actualizaciones: Vanguard patch status and rebuild notes. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Actualizaciones",
					intro: "Valorant Hacks ofrece ESP wallhack, radar hack y valorant aimbot indetectables para Valorant en Windows PC. Actualizaciones.",
					imageAlt: "Valorant Hacks live status after Vanguard and game patches",
					galleryTitle: "Actualizaciones",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Comprar Valorant Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "Actualizaciones",
							paragraphs: [
								"Valorant Hacks ofrece ESP wallhack, radar hack y valorant aimbot indetectables para Valorant en Windows PC. Vanguard patch status and rebuild notes.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Vanguard anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Vanguard anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Vanguard anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Vanguard anti-cheat maintenance.",
								"Contacta support@valoranthack.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Preguntas frecuentes",
					description: "FAQ: ESP, soft aim, delivery, and Vanguard questions. entrega digital instantánea. indetectables — Windows PC.",
					h1: "FAQ",
					intro: "Valorant Hacks ofrece ESP wallhack, radar hack y valorant aimbot indetectables para Valorant en Windows PC. FAQ.",
					imageAlt: "Valorant Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Comprar Valorant Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Valorant Hacks ofrece ESP wallhack, radar hack y valorant aimbot indetectables para Valorant en Windows PC. ESP, soft aim, delivery, and Vanguard questions.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Vanguard anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Vanguard anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Vanguard anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Vanguard anti-cheat maintenance.",
								"Contacta support@valoranthack.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				support: {
					title: "Soporte | Ayuda y contacto",
					description: "Soporte: order help and license support contact. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Soporte",
					intro: "Valorant Hacks ofrece ESP wallhack, radar hack y valorant aimbot indetectables para Valorant en Windows PC. Soporte.",
					imageAlt: "Valorant Hacks support page for license and setup help",
					galleryTitle: "Soporte",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Comprar Valorant Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Soporte",
							paragraphs: [
								"Valorant Hacks ofrece ESP wallhack, radar hack y valorant aimbot indetectables para Valorant en Windows PC. order help and license support contact.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Vanguard anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Vanguard anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Vanguard anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Vanguard anti-cheat maintenance.",
								"Contacta support@valoranthack.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				undetected: {
					title: "Trucos indetectables | Estado indetectable",
					description: "Trucos indetectables: undetected maintenance after Vanguard anti-cheat patches. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Trucos indetectables",
					intro: "Valorant Hacks ofrece ESP wallhack, radar hack y valorant aimbot indetectables para Valorant en Windows PC. Trucos indetectables.",
					imageAlt: "Valorant Hacks undetected status overview for Windows PC",
					galleryTitle: "Trucos indetectables",
					heroImage: "/images/valorant-hacks-wallhack.webp",
					ctaPrimary: "Comprar Valorant Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "Trucos indetectables",
							paragraphs: [
								"Valorant Hacks ofrece ESP wallhack, radar hack y valorant aimbot indetectables para Valorant en Windows PC. undetected maintenance after Vanguard anti-cheat patches.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Vanguard anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Vanguard anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Vanguard anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Vanguard anti-cheat maintenance.",
								"Contacta support@valoranthack.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Valorant | Visibilidad ESP",
					description: "Wallhack Valorant: wallhack ESP for players, spike, and distance. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Wallhack Valorant",
					intro: "Valorant Hacks ofrece ESP wallhack, radar hack y valorant aimbot indetectables para Valorant en Windows PC. Wallhack Valorant.",
					imageAlt: "Valorant wallhack visibility through walls in a match",
					galleryTitle: "Wallhack Valorant",
					heroImage: "/images/valorant-hacks-wallhack.webp",
					ctaPrimary: "Comprar Valorant Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Wallhack Valorant",
							paragraphs: [
								"Valorant Hacks ofrece ESP wallhack, radar hack y valorant aimbot indetectables para Valorant en Windows PC. wallhack ESP for players, spike, and distance.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Vanguard anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Vanguard anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Vanguard anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Vanguard anti-cheat maintenance.",
								"Contacta support@valoranthack.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack Valorant | Radar 2D de amenazas",
					description: "Radar hack Valorant: 2D radar cues for flanks and rotations. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Radar hack Valorant",
					intro: "Valorant Hacks ofrece ESP wallhack, radar hack y valorant aimbot indetectables para Valorant en Windows PC. Radar hack Valorant.",
					imageAlt: "Valorant 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack Valorant",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Comprar Valorant Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Radar hack Valorant",
							paragraphs: [
								"Valorant Hacks ofrece ESP wallhack, radar hack y valorant aimbot indetectables para Valorant en Windows PC. 2D radar cues for flanks and rotations.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Vanguard anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Vanguard anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Vanguard anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Vanguard anti-cheat maintenance.",
								"Contacta support@valoranthack.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				vanguard: {
					title: "Bypass Vanguard | Mantenimiento de parches",
					description: "Bypass Vanguard: how Vanguard updates are handled for Valorant hacks. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Bypass Vanguard",
					intro: "Valorant Hacks ofrece ESP wallhack, radar hack y valorant aimbot indetectables para Valorant en Windows PC. Bypass Vanguard.",
					imageAlt: "Valorant Hacks maintenance after a Vanguard patch",
					galleryTitle: "Bypass Vanguard",
					heroImage: "/images/valorant-hacks-aimbot.webp",
					ctaPrimary: "Comprar Valorant Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Vanguard",
							paragraphs: [
								"Valorant Hacks ofrece ESP wallhack, radar hack y valorant aimbot indetectables para Valorant en Windows PC. how Vanguard updates are handled for Valorant hacks.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Vanguard anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Vanguard anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Vanguard anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Vanguard anti-cheat maintenance.",
								"Contacta support@valoranthack.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Trucos Valorant 2026 | Guía del comprador",
					description: "Trucos Valorant 2026: 2026 Valorant hacks checklist before checkout. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Trucos Valorant 2026",
					intro: "Valorant Hacks ofrece ESP wallhack, radar hack y valorant aimbot indetectables para Valorant en Windows PC. Trucos Valorant 2026.",
					imageAlt: "Valorant Hacks product overview for Valorant",
					galleryTitle: "Trucos Valorant 2026",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Comprar Valorant Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "Trucos Valorant 2026",
							paragraphs: [
								"Valorant Hacks ofrece ESP wallhack, radar hack y valorant aimbot indetectables para Valorant en Windows PC. 2026 Valorant hacks checklist before checkout.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Vanguard anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Vanguard anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Vanguard anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Vanguard anti-cheat maintenance.",
								"Contacta support@valoranthack.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				hacks: {
					title: "Trucos Valorant | Guía ESP y Aimbot",
					description: "Trucos Valorant: the Valorant hacks pillar for ESP and Aimbot. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Trucos Valorant",
					intro: "Valorant Hacks ofrece ESP wallhack, radar hack y valorant aimbot indetectables para Valorant en Windows PC. Trucos Valorant.",
					imageAlt: "Valorant Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Trucos Valorant",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Comprar Valorant Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Trucos Valorant",
							paragraphs: [
								"Valorant Hacks ofrece ESP wallhack, radar hack y valorant aimbot indetectables para Valorant en Windows PC. the Valorant hacks pillar for ESP and Aimbot.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Vanguard anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Vanguard anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Vanguard anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Vanguard anti-cheat maintenance.",
								"Contacta support@valoranthack.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Descarga Valorant Hacks | Acceso instantáneo",
					description: "Descarga Valorant Hacks: digital license download after payment. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Descarga Valorant Hacks",
					intro: "Valorant Hacks ofrece ESP wallhack, radar hack y valorant aimbot indetectables para Valorant en Windows PC. Descarga Valorant Hacks.",
					imageAlt: "Valorant Hacks download and install delivery flow",
					galleryTitle: "Descarga Valorant Hacks",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Comprar Valorant Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Descarga Valorant Hacks",
							paragraphs: [
								"Valorant Hacks ofrece ESP wallhack, radar hack y valorant aimbot indetectables para Valorant en Windows PC. digital license download after payment.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Vanguard anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Vanguard anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Vanguard anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Vanguard anti-cheat maintenance.",
								"Contacta support@valoranthack.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menú mod Valorant | Controles en partida",
					description: "Menú mod Valorant: in-client ESP and soft aim toggles. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Menú mod Valorant",
					intro: "Valorant Hacks ofrece ESP wallhack, radar hack y valorant aimbot indetectables para Valorant en Windows PC. Menú mod Valorant.",
					imageAlt: "Valorant Hacks in-game menu controls",
					galleryTitle: "Menú mod Valorant",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Comprar Valorant Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menú mod Valorant",
							paragraphs: [
								"Valorant Hacks ofrece ESP wallhack, radar hack y valorant aimbot indetectables para Valorant en Windows PC. in-client ESP and soft aim toggles.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Vanguard anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Vanguard anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Vanguard anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Vanguard anti-cheat maintenance.",
								"Contacta support@valoranthack.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Valorant | Ajustes soft aim",
					description: "Soft aim Valorant: smooth soft aim settings for Windows PC. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Soft aim Valorant",
					intro: "Valorant Hacks ofrece ESP wallhack, radar hack y valorant aimbot indetectables para Valorant en Windows PC. Soft aim Valorant.",
					imageAlt: "Valorant soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Valorant",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Comprar Valorant Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/valorant-aimbot/",
					sections: [
						{
							h2: "Soft aim Valorant",
							paragraphs: [
								"Valorant Hacks ofrece ESP wallhack, radar hack y valorant aimbot indetectables para Valorant en Windows PC. smooth soft aim settings for Windows PC.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Vanguard anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Vanguard anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Vanguard anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Vanguard anti-cheat maintenance.",
								"Contacta support@valoranthack.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Mejores trucos Valorant | Lista de compra",
					description: "Mejores trucos Valorant: what to compare before buying Valorant hacks. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Mejores trucos Valorant",
					intro: "Valorant Hacks ofrece ESP wallhack, radar hack y valorant aimbot indetectables para Valorant en Windows PC. Mejores trucos Valorant.",
					imageAlt: "Valorant Hacks overview for Valorant on PC",
					galleryTitle: "Mejores trucos Valorant",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Comprar Valorant Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Mejores trucos Valorant",
							paragraphs: [
								"Valorant Hacks ofrece ESP wallhack, radar hack y valorant aimbot indetectables para Valorant en Windows PC. what to compare before buying Valorant hacks.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Vanguard anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Vanguard anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Vanguard anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Vanguard anti-cheat maintenance.",
								"Contacta support@valoranthack.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Valorant | Asistencia soft aim",
					description: "Hack aimbot Valorant: undetected Aimbot hack assist for Valorant. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Hack aimbot Valorant",
					intro: "Valorant Hacks ofrece ESP wallhack, radar hack y valorant aimbot indetectables para Valorant en Windows PC. Hack aimbot Valorant.",
					imageAlt: "Valorant aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Valorant",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Comprar Valorant Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/valorant-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Valorant",
							paragraphs: [
								"Valorant Hacks ofrece ESP wallhack, radar hack y valorant aimbot indetectables para Valorant en Windows PC. undetected Aimbot hack assist for Valorant.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Vanguard anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Vanguard anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Vanguard anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Vanguard anti-cheat maintenance.",
								"Contacta support@valoranthack.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Valorant | Cajas y spike",
					description: "Hack ESP Valorant: ESP hack boxes, spike markers, and distance. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Hack ESP Valorant",
					intro: "Valorant Hacks ofrece ESP wallhack, radar hack y valorant aimbot indetectables para Valorant en Windows PC. Hack ESP Valorant.",
					imageAlt: "Valorant ESP hack boxes and spike markers",
					galleryTitle: "Hack ESP Valorant",
					heroImage: "/images/valorant-hacks-wallhack.webp",
					ctaPrimary: "Comprar Valorant Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Hack ESP Valorant",
							paragraphs: [
								"Valorant Hacks ofrece ESP wallhack, radar hack y valorant aimbot indetectables para Valorant en Windows PC. ESP hack boxes, spike markers, and distance.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Vanguard anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Vanguard anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Vanguard anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Vanguard anti-cheat maintenance.",
								"Contacta support@valoranthack.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Valorant | Qué significa",
					description: "Unlock all Valorant: unlock-all searches vs real ESP and Aimbot tools. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Unlock all Valorant",
					intro: "Valorant Hacks ofrece ESP wallhack, radar hack y valorant aimbot indetectables para Valorant en Windows PC. Unlock all Valorant.",
					imageAlt: "Valorant Hacks license features overview",
					galleryTitle: "Unlock all Valorant",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Comprar Valorant Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Valorant",
							paragraphs: [
								"Valorant Hacks ofrece ESP wallhack, radar hack y valorant aimbot indetectables para Valorant en Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Vanguard anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Vanguard anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Vanguard anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Vanguard anti-cheat maintenance.",
								"Contacta support@valoranthack.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				privacy: {
					title: "Política de privacidad | Valorant Hacks",
					description: "Política de privacidad for Valorant Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Política de privacidad",
					intro: "Valorant Hacks ofrece ESP wallhack, radar hack y valorant aimbot indetectables para Valorant en Windows PC. Política de privacidad for valoranthack.net and Valorant licenses.",
					imageAlt: "valorant hacks",
					galleryTitle: "valorant hacks",
					heroImage: "/images/valorant-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Leer términos",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Información que recopilamos",
							paragraphs: [
								"Valorant Hacks ofrece ESP wallhack, radar hack y valorant aimbot indetectables para Valorant en Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on valoranthack.net.",
							],
						},
						{
							h2: "Uso de la información",
							paragraphs: [
								"Valorant Hacks ofrece ESP wallhack, radar hack y valorant aimbot indetectables para Valorant en Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Consulta la página Updates antes de jugar tras parches de Vanguard anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
							],
						},
						{
							h2: "Tus derechos",
							paragraphs: [
								"Contacta support@valoranthack.net para solicitudes legales o de soporte.",
								"Email: support@valoranthack.net",
							],
						},
					],
				},
				refund: {
					title: "Política de reembolso | Valorant Hacks",
					description: "Política de reembolso for Valorant Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Política de reembolso",
					intro: "Valorant Hacks ofrece ESP wallhack, radar hack y valorant aimbot indetectables para Valorant en Windows PC. Política de reembolso for valoranthack.net and Valorant licenses.",
					imageAlt: "valorant hacks",
					galleryTitle: "valorant hacks",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Leer privacidad",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Entrega digital",
							paragraphs: [
								"Valorant Hacks ofrece ESP wallhack, radar hack y valorant aimbot indetectables para Valorant en Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Vanguard anti-cheat maintenance.",
							],
						},
						{
							h2: "Cuándo se aprueba",
							paragraphs: [
								"Valorant Hacks ofrece ESP wallhack, radar hack y valorant aimbot indetectables para Valorant en Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Consulta la página Updates antes de jugar tras parches de Vanguard anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
							],
						},
						{
							h2: "Cómo solicitar",
							paragraphs: [
								"Contacta support@valoranthack.net para solicitudes legales o de soporte.",
								"Email: support@valoranthack.net",
							],
						},
					],
				},
				terms: {
					title: "Términos de uso | Valorant Hacks",
					description: "Términos de uso for Valorant Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Términos de uso",
					intro: "Valorant Hacks ofrece ESP wallhack, radar hack y valorant aimbot indetectables para Valorant en Windows PC. Términos de uso for valoranthack.net and Valorant licenses.",
					imageAlt: "valorant hacks",
					galleryTitle: "valorant hacks",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Leer privacidad",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Aceptación de términos",
							paragraphs: [
								"Valorant Hacks ofrece ESP wallhack, radar hack y valorant aimbot indetectables para Valorant en Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Vanguard anti-cheat maintenance.",
							],
						},
						{
							h2: "Riesgos y anti-cheat",
							paragraphs: [
								"Valorant Hacks ofrece ESP wallhack, radar hack y valorant aimbot indetectables para Valorant en Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Riot Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Cambios",
							paragraphs: [
								"Contacta support@valoranthack.net para solicitudes legales o de soporte.",
								"Email: support@valoranthack.net",
							],
						},
					],
				},
			},
		},
		fr: {
			ui: {
				nav: {
					home: "Accueil",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Fonctions",
					pricing: "Tarifs",
					setup: "Installation",
					updates: "Mises à jour",
					faq: "FAQ",
					buyNow: "Acheter",
				},
				hero: {
					accent: "Triches Valorant indétectables",
					accentShort: "Valorant Hacks",
					subtitle: "ESP wallhack, radar hack et Aimbot pour Valorant sur PC Windows — maintenance Vanguard anti-cheat incluse.",
					subtitleShort: "ESP, radar et Aimbot pour Valorant PC",
					buyNow: "Acheter",
					seeFeatures: "Voir les fonctions",
				},
				trust: {
					status: "En ligne",
					statusNote: "Le pack Valorant Hacks est actif pour Valorant sur PC Windows.",
					statusShort: "Actif",
					delivery: "Livraison numérique instantanée",
					platform: "Windows 10 et 11",
					antiCheat: "Maintenance Vanguard anti-cheat incluse",
					antiCheatShort: "Vanguard anti-cheat inclus",
				},
				product: {
					title: "Valorant Hacks",
					addToCart: "Ajouter au panier",
					monthly: "Mensuel",
					lifetime: "À vie",
					available: "Disponible",
					gameBadge: "Valorant",
					platformBadge: "PC Windows",
					statusBadge: "Pack indétectable",
				},
				reviews: {
					title: "Ce que disent les joueurs",
					subtitle: "Avis récents des acheteurs Valorant Hacks",
					outOf: "sur 5",
					countLabel: "avis",
				},
				common: {
					buyNow: "Acheter",
					readGuide: "Lire le guide",
					language: "Langue",
					officialLanguageNote: "L'anglais est la langue officielle. Les autres versions sont traduites pour le SEO mondial.",
					relatedPages: "Pages associées",
				},
				footer: {
					explore: "Explorer",
					help: "Aide et légal",
					tagline: "ESP, wallhack, radar et Aimbot indétectables pour Valorant — checkout via Zadeyo.",
				},
				images: {
					hero: "Valorant Hacks hero — ESP and aimbot overlay in Valorant",
					espWallhack: "Wallhack outlines showing agents and enemies through walls",
					aimbotCombat: "Soft aim assist overlay during a Valorant round",
					squadFight: "Valorant Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Valorant match",
					headerArt: "Aimbot view and bone priority controls for Valorant",
					cheatsPackage: "2D radar threat overlay for Valorant",
					rebootFight: "Aimbot assist during a Valorant firefight",
					battleRoyale: "Valorant Hacks in-match overview for Windows PC",
					battleRoyaleIsland: "ESP markers for agents and the spike in Valorant",
				},
			},
			pages: {
				home: {
					title: "Valorant Hacks | Site officiel PC",
					description: "Site officiel Valorant Hacks pour PC Windows. Comparez ESP, aimbot et radar — puis achetez. Pour le Canada, les Amériques et le monde.",
					h1: "Valorant Hacks",
					intro: "Valorant Hacks est le site officiel pour Valorant sur PC Windows. Vérifiez les fonctions, les forfaits et le statut Vanguard avant d’acheter.",
					imageAlt: "Valorant Hacks — ESP et aimbot en jeu",
					galleryTitle: "Aperçu en jeu",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Acheter Valorant Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Pourquoi acheter ici",
							paragraphs: [
								"Valorant Hacks combine ESP wallhack, radar hack et valorant aimbot indétectables pour Valorant sur PC Windows. Idéal pour Competitive, Unrated et Deathmatch.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard anti-cheat.",
							],
						},
						{
							h2: "ESP, aimbot et radar en une licence",
							paragraphs: [
								"Valorant Hacks combine ESP wallhack, radar hack et valorant aimbot indétectables pour Valorant sur PC Windows. Une licence au lieu d'outils séparés.",
								"Consultez Updates après les patchs Vanguard anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
							],
						},
					],
				},
				"valorant-esp": {
					title: "ESP Valorant | Boîtes joueur et wallhack",
					description: "ESP Valorant: player boxes, spike markers, and wallhack overlays. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "ESP Valorant",
					intro: "Valorant Hacks combine ESP wallhack, radar hack et valorant aimbot indétectables pour Valorant sur PC Windows. ESP Valorant.",
					imageAlt: "Valorant ESP player boxes and distance readouts in a match",
					galleryTitle: "ESP Valorant",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Acheter Valorant Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "ESP Valorant",
							paragraphs: [
								"Valorant Hacks combine ESP wallhack, radar hack et valorant aimbot indétectables pour Valorant sur PC Windows. player boxes, spike markers, and wallhack overlays.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Vanguard anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard anti-cheat.",
								"Contactez support@valoranthack.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				"valorant-aimbot": {
					title: "Aimbot Valorant | Contrôles soft aim",
					description: "Aimbot Valorant: soft aim, FOV, and per-weapon Aimbot profiles. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Aimbot Valorant",
					intro: "Valorant Hacks combine ESP wallhack, radar hack et valorant aimbot indétectables pour Valorant sur PC Windows. Aimbot Valorant.",
					imageAlt: "Valorant aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Valorant",
					heroImage: "/images/valorant-hacks-aimbot.webp",
					ctaPrimary: "Acheter Valorant Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Aimbot Valorant",
							paragraphs: [
								"Valorant Hacks combine ESP wallhack, radar hack et valorant aimbot indétectables pour Valorant sur PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Vanguard anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard anti-cheat.",
								"Contactez support@valoranthack.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				features: {
					title: "Fonctions | Liste complète des fonctions",
					description: "Fonctions: ESP, soft aim, radar controls. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Fonctions",
					intro: "Valorant Hacks combine ESP wallhack, radar hack et valorant aimbot indétectables pour Valorant sur PC Windows. Fonctions.",
					imageAlt: "Valorant Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Fonctions",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Acheter Valorant Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Fonctions",
							paragraphs: [
								"Valorant Hacks combine ESP wallhack, radar hack et valorant aimbot indétectables pour Valorant sur PC Windows. ESP, soft aim, radar controls.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Vanguard anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard anti-cheat.",
								"Contactez support@valoranthack.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				pricing: {
					title: "Tarifs | Mensuel et à vie",
					description: "Tarifs: $35 monthly or $150 lifetime licenses. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Tarifs",
					intro: "Valorant Hacks combine ESP wallhack, radar hack et valorant aimbot indétectables pour Valorant sur PC Windows. Tarifs.",
					imageAlt: "Valorant Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Tarifs",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Acheter Valorant Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Tarifs",
							paragraphs: [
								"Valorant Hacks combine ESP wallhack, radar hack et valorant aimbot indétectables pour Valorant sur PC Windows. $35 monthly or $150 lifetime licenses.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Vanguard anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard anti-cheat.",
								"Contactez support@valoranthack.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				setup: {
					title: "Installation | Guide d'installation PC",
					description: "Installation: Windows PC activation and first-launch setup. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Installation",
					intro: "Valorant Hacks combine ESP wallhack, radar hack et valorant aimbot indétectables pour Valorant sur PC Windows. Installation.",
					imageAlt: "Valorant Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Installation",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Acheter Valorant Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Installation",
							paragraphs: [
								"Valorant Hacks combine ESP wallhack, radar hack et valorant aimbot indétectables pour Valorant sur PC Windows. Windows PC activation and first-launch setup.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Vanguard anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard anti-cheat.",
								"Contactez support@valoranthack.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				updates: {
					title: "Mises à jour | Journal Vanguard",
					description: "Mises à jour: Vanguard patch status and rebuild notes. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Mises à jour",
					intro: "Valorant Hacks combine ESP wallhack, radar hack et valorant aimbot indétectables pour Valorant sur PC Windows. Mises à jour.",
					imageAlt: "Valorant Hacks live status after Vanguard and game patches",
					galleryTitle: "Mises à jour",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Acheter Valorant Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "Mises à jour",
							paragraphs: [
								"Valorant Hacks combine ESP wallhack, radar hack et valorant aimbot indétectables pour Valorant sur PC Windows. Vanguard patch status and rebuild notes.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Vanguard anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard anti-cheat.",
								"Contactez support@valoranthack.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Questions fréquentes",
					description: "FAQ: ESP, soft aim, delivery, and Vanguard questions. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "FAQ",
					intro: "Valorant Hacks combine ESP wallhack, radar hack et valorant aimbot indétectables pour Valorant sur PC Windows. FAQ.",
					imageAlt: "Valorant Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Acheter Valorant Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Valorant Hacks combine ESP wallhack, radar hack et valorant aimbot indétectables pour Valorant sur PC Windows. ESP, soft aim, delivery, and Vanguard questions.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Vanguard anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard anti-cheat.",
								"Contactez support@valoranthack.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				support: {
					title: "Support | Aide et contact",
					description: "Support: order help and license support contact. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Support",
					intro: "Valorant Hacks combine ESP wallhack, radar hack et valorant aimbot indétectables pour Valorant sur PC Windows. Support.",
					imageAlt: "Valorant Hacks support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Acheter Valorant Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"Valorant Hacks combine ESP wallhack, radar hack et valorant aimbot indétectables pour Valorant sur PC Windows. order help and license support contact.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Vanguard anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard anti-cheat.",
								"Contactez support@valoranthack.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				undetected: {
					title: "Triches indétectables | Statut indétectable",
					description: "Triches indétectables: undetected maintenance after Vanguard anti-cheat patches. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Triches indétectables",
					intro: "Valorant Hacks combine ESP wallhack, radar hack et valorant aimbot indétectables pour Valorant sur PC Windows. Triches indétectables.",
					imageAlt: "Valorant Hacks undetected status overview for Windows PC",
					galleryTitle: "Triches indétectables",
					heroImage: "/images/valorant-hacks-wallhack.webp",
					ctaPrimary: "Acheter Valorant Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "Triches indétectables",
							paragraphs: [
								"Valorant Hacks combine ESP wallhack, radar hack et valorant aimbot indétectables pour Valorant sur PC Windows. undetected maintenance after Vanguard anti-cheat patches.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Vanguard anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard anti-cheat.",
								"Contactez support@valoranthack.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Valorant | Visibilité ESP",
					description: "Wallhack Valorant: wallhack ESP for players, spike, and distance. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Wallhack Valorant",
					intro: "Valorant Hacks combine ESP wallhack, radar hack et valorant aimbot indétectables pour Valorant sur PC Windows. Wallhack Valorant.",
					imageAlt: "Valorant wallhack visibility through walls in a match",
					galleryTitle: "Wallhack Valorant",
					heroImage: "/images/valorant-hacks-wallhack.webp",
					ctaPrimary: "Acheter Valorant Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Wallhack Valorant",
							paragraphs: [
								"Valorant Hacks combine ESP wallhack, radar hack et valorant aimbot indétectables pour Valorant sur PC Windows. wallhack ESP for players, spike, and distance.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Vanguard anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard anti-cheat.",
								"Contactez support@valoranthack.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack Valorant | Radar 2D des menaces",
					description: "Radar hack Valorant: 2D radar cues for flanks and rotations. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Radar hack Valorant",
					intro: "Valorant Hacks combine ESP wallhack, radar hack et valorant aimbot indétectables pour Valorant sur PC Windows. Radar hack Valorant.",
					imageAlt: "Valorant 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack Valorant",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Acheter Valorant Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Radar hack Valorant",
							paragraphs: [
								"Valorant Hacks combine ESP wallhack, radar hack et valorant aimbot indétectables pour Valorant sur PC Windows. 2D radar cues for flanks and rotations.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Vanguard anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard anti-cheat.",
								"Contactez support@valoranthack.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				vanguard: {
					title: "Bypass Vanguard | Maintenance des patchs",
					description: "Bypass Vanguard: how Vanguard updates are handled for Valorant hacks. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Bypass Vanguard",
					intro: "Valorant Hacks combine ESP wallhack, radar hack et valorant aimbot indétectables pour Valorant sur PC Windows. Bypass Vanguard.",
					imageAlt: "Valorant Hacks maintenance after a Vanguard patch",
					galleryTitle: "Bypass Vanguard",
					heroImage: "/images/valorant-hacks-aimbot.webp",
					ctaPrimary: "Acheter Valorant Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Vanguard",
							paragraphs: [
								"Valorant Hacks combine ESP wallhack, radar hack et valorant aimbot indétectables pour Valorant sur PC Windows. how Vanguard updates are handled for Valorant hacks.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Vanguard anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard anti-cheat.",
								"Contactez support@valoranthack.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Triches Valorant 2026 | Guide acheteur",
					description: "Triches Valorant 2026: 2026 Valorant hacks checklist before checkout. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Triches Valorant 2026",
					intro: "Valorant Hacks combine ESP wallhack, radar hack et valorant aimbot indétectables pour Valorant sur PC Windows. Triches Valorant 2026.",
					imageAlt: "Valorant Hacks product overview for Valorant",
					galleryTitle: "Triches Valorant 2026",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Acheter Valorant Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "Triches Valorant 2026",
							paragraphs: [
								"Valorant Hacks combine ESP wallhack, radar hack et valorant aimbot indétectables pour Valorant sur PC Windows. 2026 Valorant hacks checklist before checkout.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Vanguard anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard anti-cheat.",
								"Contactez support@valoranthack.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				hacks: {
					title: "Triches Valorant | Guide ESP et Aimbot",
					description: "Triches Valorant: the Valorant hacks pillar for ESP and Aimbot. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Triches Valorant",
					intro: "Valorant Hacks combine ESP wallhack, radar hack et valorant aimbot indétectables pour Valorant sur PC Windows. Triches Valorant.",
					imageAlt: "Valorant Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Triches Valorant",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Acheter Valorant Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Triches Valorant",
							paragraphs: [
								"Valorant Hacks combine ESP wallhack, radar hack et valorant aimbot indétectables pour Valorant sur PC Windows. the Valorant hacks pillar for ESP and Aimbot.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Vanguard anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard anti-cheat.",
								"Contactez support@valoranthack.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Téléchargement Valorant Hacks | Accès instantané",
					description: "Téléchargement Valorant Hacks: digital license download after payment. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Téléchargement Valorant Hacks",
					intro: "Valorant Hacks combine ESP wallhack, radar hack et valorant aimbot indétectables pour Valorant sur PC Windows. Téléchargement Valorant Hacks.",
					imageAlt: "Valorant Hacks download and install delivery flow",
					galleryTitle: "Téléchargement Valorant Hacks",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Acheter Valorant Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Téléchargement Valorant Hacks",
							paragraphs: [
								"Valorant Hacks combine ESP wallhack, radar hack et valorant aimbot indétectables pour Valorant sur PC Windows. digital license download after payment.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Vanguard anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard anti-cheat.",
								"Contactez support@valoranthack.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menu mod Valorant | Contrôles en jeu",
					description: "Menu mod Valorant: in-client ESP and soft aim toggles. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Menu mod Valorant",
					intro: "Valorant Hacks combine ESP wallhack, radar hack et valorant aimbot indétectables pour Valorant sur PC Windows. Menu mod Valorant.",
					imageAlt: "Valorant Hacks in-game menu controls",
					galleryTitle: "Menu mod Valorant",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Acheter Valorant Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu mod Valorant",
							paragraphs: [
								"Valorant Hacks combine ESP wallhack, radar hack et valorant aimbot indétectables pour Valorant sur PC Windows. in-client ESP and soft aim toggles.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Vanguard anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard anti-cheat.",
								"Contactez support@valoranthack.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Valorant | Réglages soft aim",
					description: "Soft aim Valorant: smooth soft aim settings for Windows PC. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Soft aim Valorant",
					intro: "Valorant Hacks combine ESP wallhack, radar hack et valorant aimbot indétectables pour Valorant sur PC Windows. Soft aim Valorant.",
					imageAlt: "Valorant soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Valorant",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Acheter Valorant Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/valorant-aimbot/",
					sections: [
						{
							h2: "Soft aim Valorant",
							paragraphs: [
								"Valorant Hacks combine ESP wallhack, radar hack et valorant aimbot indétectables pour Valorant sur PC Windows. smooth soft aim settings for Windows PC.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Vanguard anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard anti-cheat.",
								"Contactez support@valoranthack.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Meilleures triches Valorant | Checklist acheteur",
					description: "Meilleures triches Valorant: what to compare before buying Valorant hacks. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Meilleures triches Valorant",
					intro: "Valorant Hacks combine ESP wallhack, radar hack et valorant aimbot indétectables pour Valorant sur PC Windows. Meilleures triches Valorant.",
					imageAlt: "Valorant Hacks overview for Valorant on PC",
					galleryTitle: "Meilleures triches Valorant",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Acheter Valorant Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Meilleures triches Valorant",
							paragraphs: [
								"Valorant Hacks combine ESP wallhack, radar hack et valorant aimbot indétectables pour Valorant sur PC Windows. what to compare before buying Valorant hacks.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Vanguard anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard anti-cheat.",
								"Contactez support@valoranthack.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Valorant | Assistance soft aim",
					description: "Hack aimbot Valorant: undetected Aimbot hack assist for Valorant. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Hack aimbot Valorant",
					intro: "Valorant Hacks combine ESP wallhack, radar hack et valorant aimbot indétectables pour Valorant sur PC Windows. Hack aimbot Valorant.",
					imageAlt: "Valorant aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Valorant",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Acheter Valorant Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/valorant-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Valorant",
							paragraphs: [
								"Valorant Hacks combine ESP wallhack, radar hack et valorant aimbot indétectables pour Valorant sur PC Windows. undetected Aimbot hack assist for Valorant.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Vanguard anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard anti-cheat.",
								"Contactez support@valoranthack.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Valorant | Boîtes et spike",
					description: "Hack ESP Valorant: ESP hack boxes, spike markers, and distance. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Hack ESP Valorant",
					intro: "Valorant Hacks combine ESP wallhack, radar hack et valorant aimbot indétectables pour Valorant sur PC Windows. Hack ESP Valorant.",
					imageAlt: "Valorant ESP hack boxes and spike markers",
					galleryTitle: "Hack ESP Valorant",
					heroImage: "/images/valorant-hacks-wallhack.webp",
					ctaPrimary: "Acheter Valorant Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Hack ESP Valorant",
							paragraphs: [
								"Valorant Hacks combine ESP wallhack, radar hack et valorant aimbot indétectables pour Valorant sur PC Windows. ESP hack boxes, spike markers, and distance.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Vanguard anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard anti-cheat.",
								"Contactez support@valoranthack.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Valorant | Ce que ça signifie",
					description: "Unlock all Valorant: unlock-all searches vs real ESP and Aimbot tools. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Unlock all Valorant",
					intro: "Valorant Hacks combine ESP wallhack, radar hack et valorant aimbot indétectables pour Valorant sur PC Windows. Unlock all Valorant.",
					imageAlt: "Valorant Hacks license features overview",
					galleryTitle: "Unlock all Valorant",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Acheter Valorant Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Valorant",
							paragraphs: [
								"Valorant Hacks combine ESP wallhack, radar hack et valorant aimbot indétectables pour Valorant sur PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Vanguard anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard anti-cheat.",
								"Contactez support@valoranthack.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				privacy: {
					title: "Politique de confidentialité | Valorant Hacks",
					description: "Politique de confidentialité for Valorant Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politique de confidentialité",
					intro: "Valorant Hacks combine ESP wallhack, radar hack et valorant aimbot indétectables pour Valorant sur PC Windows. Politique de confidentialité for valoranthack.net and Valorant licenses.",
					imageAlt: "valorant hacks",
					galleryTitle: "valorant hacks",
					heroImage: "/images/valorant-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Lire conditions",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Informations collectées",
							paragraphs: [
								"Valorant Hacks combine ESP wallhack, radar hack et valorant aimbot indétectables pour Valorant sur PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on valoranthack.net.",
							],
						},
						{
							h2: "Utilisation",
							paragraphs: [
								"Valorant Hacks combine ESP wallhack, radar hack et valorant aimbot indétectables pour Valorant sur PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Consultez Updates après les patchs Vanguard anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
							],
						},
						{
							h2: "Vos droits",
							paragraphs: [
								"Contactez support@valoranthack.net pour le support ou les demandes légales.",
								"Email: support@valoranthack.net",
							],
						},
					],
				},
				refund: {
					title: "Politique de remboursement | Valorant Hacks",
					description: "Politique de remboursement for Valorant Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politique de remboursement",
					intro: "Valorant Hacks combine ESP wallhack, radar hack et valorant aimbot indétectables pour Valorant sur PC Windows. Politique de remboursement for valoranthack.net and Valorant licenses.",
					imageAlt: "valorant hacks",
					galleryTitle: "valorant hacks",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Livraison numérique",
							paragraphs: [
								"Valorant Hacks combine ESP wallhack, radar hack et valorant aimbot indétectables pour Valorant sur PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard anti-cheat.",
							],
						},
						{
							h2: "Approbation",
							paragraphs: [
								"Valorant Hacks combine ESP wallhack, radar hack et valorant aimbot indétectables pour Valorant sur PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Consultez Updates après les patchs Vanguard anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
							],
						},
						{
							h2: "Comment demander",
							paragraphs: [
								"Contactez support@valoranthack.net pour le support ou les demandes légales.",
								"Email: support@valoranthack.net",
							],
						},
					],
				},
				terms: {
					title: "Conditions d'utilisation | Valorant Hacks",
					description: "Conditions d'utilisation for Valorant Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Conditions d'utilisation",
					intro: "Valorant Hacks combine ESP wallhack, radar hack et valorant aimbot indétectables pour Valorant sur PC Windows. Conditions d'utilisation for valoranthack.net and Valorant licenses.",
					imageAlt: "valorant hacks",
					galleryTitle: "valorant hacks",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptation",
							paragraphs: [
								"Valorant Hacks combine ESP wallhack, radar hack et valorant aimbot indétectables pour Valorant sur PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard anti-cheat.",
							],
						},
						{
							h2: "Risques",
							paragraphs: [
								"Valorant Hacks combine ESP wallhack, radar hack et valorant aimbot indétectables pour Valorant sur PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Riot Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Modifications",
							paragraphs: [
								"Contactez support@valoranthack.net pour le support ou les demandes légales.",
								"Email: support@valoranthack.net",
							],
						},
					],
				},
			},
		},
		de: {
			ui: {
				nav: {
					home: "Start",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Features",
					pricing: "Preise",
					setup: "Setup",
					updates: "Updates",
					faq: "FAQ",
					buyNow: "Kaufen",
				},
				hero: {
					accent: "Undetected Valorant Hacks",
					accentShort: "Valorant Hacks",
					subtitle: "ESP Wallhack, Radar Hack und Aimbot für Valorant auf Windows PC — Vanguard anti-cheat-Wartung inklusive.",
					subtitleShort: "ESP, Radar & Aimbot für Valorant PC",
					buyNow: "Jetzt kaufen",
					seeFeatures: "Features ansehen",
				},
				trust: {
					status: "Online",
					statusNote: "Valorant Hacks Paket ist live für Valorant auf Windows PC.",
					statusShort: "Live",
					delivery: "Sofortige digitale Lieferung",
					platform: "Windows 10 & 11",
					antiCheat: "Vanguard anti-cheat-Wartung unterstützt",
					antiCheatShort: "Vanguard anti-cheat Support",
				},
				product: {
					title: "Valorant Hacks",
					addToCart: "In den Warenkorb",
					monthly: "Monatlich",
					lifetime: "Lifetime",
					available: "Jetzt verfügbar",
					gameBadge: "Valorant",
					platformBadge: "Windows PC",
					statusBadge: "Undetected Paket",
				},
				reviews: {
					title: "Was Spieler sagen",
					subtitle: "Aktuelles Feedback von Valorant Hacks Käufern",
					outOf: "von 5",
					countLabel: "Bewertungen",
				},
				common: {
					buyNow: "Jetzt kaufen",
					readGuide: "Guide lesen",
					language: "Sprache",
					officialLanguageNote: "Englisch ist die offizielle Sprache. Andere Locales sind für globales SEO übersetzt.",
					relatedPages: "Verwandte Seiten",
				},
				footer: {
					explore: "Entdecken",
					help: "Hilfe & Rechtliches",
					tagline: "Undetected ESP, Wallhack, Radar und Aimbot für Valorant — Checkout über Zadeyo.",
				},
				images: {
					hero: "Valorant Hacks hero — ESP and aimbot overlay in Valorant",
					espWallhack: "Wallhack outlines showing agents and enemies through walls",
					aimbotCombat: "Soft aim assist overlay during a Valorant round",
					squadFight: "Valorant Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Valorant match",
					headerArt: "Aimbot view and bone priority controls for Valorant",
					cheatsPackage: "2D radar threat overlay for Valorant",
					rebootFight: "Aimbot assist during a Valorant firefight",
					battleRoyale: "Valorant Hacks in-match overview for Windows PC",
					battleRoyaleIsland: "ESP markers for agents and the spike in Valorant",
				},
			},
			pages: {
				home: {
					title: "Valorant Hacks | Offizielle Windows-PC-Seite",
					description: "Offizielle Valorant Hacks Seite für Windows-PC. ESP, Aimbot und Radar vergleichen — dann kaufen. Für NA, LATAM und weltweit.",
					h1: "Valorant Hacks",
					intro: "Valorant Hacks ist die offizielle Windows-PC-Seite für Valorant. Prüfe Features, Pläne und Vanguard-Status vor dem Kauf.",
					imageAlt: "Valorant Hacks — ESP und Aimbot im Spiel",
					galleryTitle: "In-Game-Ansicht",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Valorant Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Warum hier kaufen",
							paragraphs: [
								"Valorant Hacks bündelt ESP wallhack, radar hack und valorant aimbot als undetected Paket für Valorant auf Windows PC. Ideal für Competitive, Unrated und Deathmatch.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard anti-cheat-Wartung.",
							],
						},
						{
							h2: "ESP, Aimbot und Radar in einer Lizenz",
							paragraphs: [
								"Valorant Hacks bündelt ESP wallhack, radar hack und valorant aimbot als undetected Paket für Valorant auf Windows PC. Eine Lizenz statt separater Tools.",
								"Updates-Seite nach Vanguard anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
							],
						},
					],
				},
				"valorant-esp": {
					title: "Valorant ESP | Spielerboxen & Wallhack",
					description: "Valorant ESP: player boxes, spike markers, and wallhack overlays. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Valorant ESP",
					intro: "Valorant Hacks bündelt ESP wallhack, radar hack und valorant aimbot als undetected Paket für Valorant auf Windows PC. Valorant ESP.",
					imageAlt: "Valorant ESP player boxes and distance readouts in a match",
					galleryTitle: "Valorant ESP",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Valorant Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "Valorant ESP",
							paragraphs: [
								"Valorant Hacks bündelt ESP wallhack, radar hack und valorant aimbot als undetected Paket für Valorant auf Windows PC. player boxes, spike markers, and wallhack overlays.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Vanguard anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard anti-cheat-Wartung.",
								"support@valoranthack.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"valorant-aimbot": {
					title: "Valorant Aimbot | Soft-Aim Steuerung",
					description: "Valorant Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Valorant Aimbot",
					intro: "Valorant Hacks bündelt ESP wallhack, radar hack und valorant aimbot als undetected Paket für Valorant auf Windows PC. Valorant Aimbot.",
					imageAlt: "Valorant aimbot and soft aim controls on Windows PC",
					galleryTitle: "Valorant Aimbot",
					heroImage: "/images/valorant-hacks-aimbot.webp",
					ctaPrimary: "Valorant Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Valorant Aimbot",
							paragraphs: [
								"Valorant Hacks bündelt ESP wallhack, radar hack und valorant aimbot als undetected Paket für Valorant auf Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Vanguard anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard anti-cheat-Wartung.",
								"support@valoranthack.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				features: {
					title: "Features | Vollständige Feature-Liste",
					description: "Features: ESP, soft aim, radar controls. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Features",
					intro: "Valorant Hacks bündelt ESP wallhack, radar hack und valorant aimbot als undetected Paket für Valorant auf Windows PC. Features.",
					imageAlt: "Valorant Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Features",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Valorant Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Features",
							paragraphs: [
								"Valorant Hacks bündelt ESP wallhack, radar hack und valorant aimbot als undetected Paket für Valorant auf Windows PC. ESP, soft aim, radar controls.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Vanguard anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard anti-cheat-Wartung.",
								"support@valoranthack.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				pricing: {
					title: "Preise | Monatlich & Lifetime",
					description: "Preise: $35 monthly or $150 lifetime licenses. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Preise",
					intro: "Valorant Hacks bündelt ESP wallhack, radar hack und valorant aimbot als undetected Paket für Valorant auf Windows PC. Preise.",
					imageAlt: "Valorant Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Preise",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Valorant Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Preise",
							paragraphs: [
								"Valorant Hacks bündelt ESP wallhack, radar hack und valorant aimbot als undetected Paket für Valorant auf Windows PC. $35 monthly or $150 lifetime licenses.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Vanguard anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard anti-cheat-Wartung.",
								"support@valoranthack.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				setup: {
					title: "Setup | PC Setup-Anleitung",
					description: "Setup: Windows PC activation and first-launch setup. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Setup",
					intro: "Valorant Hacks bündelt ESP wallhack, radar hack und valorant aimbot als undetected Paket für Valorant auf Windows PC. Setup.",
					imageAlt: "Valorant Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Valorant Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"Valorant Hacks bündelt ESP wallhack, radar hack und valorant aimbot als undetected Paket für Valorant auf Windows PC. Windows PC activation and first-launch setup.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Vanguard anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard anti-cheat-Wartung.",
								"support@valoranthack.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				updates: {
					title: "Updates | Vanguard Wartungslog",
					description: "Updates: Vanguard patch status and rebuild notes. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Updates",
					intro: "Valorant Hacks bündelt ESP wallhack, radar hack und valorant aimbot als undetected Paket für Valorant auf Windows PC. Updates.",
					imageAlt: "Valorant Hacks live status after Vanguard and game patches",
					galleryTitle: "Updates",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Valorant Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "Updates",
							paragraphs: [
								"Valorant Hacks bündelt ESP wallhack, radar hack und valorant aimbot als undetected Paket für Valorant auf Windows PC. Vanguard patch status and rebuild notes.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Vanguard anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard anti-cheat-Wartung.",
								"support@valoranthack.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Häufige Fragen",
					description: "FAQ: ESP, soft aim, delivery, and Vanguard questions. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Valorant Hacks bündelt ESP wallhack, radar hack und valorant aimbot als undetected Paket für Valorant auf Windows PC. FAQ.",
					imageAlt: "Valorant Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Valorant Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Valorant Hacks bündelt ESP wallhack, radar hack und valorant aimbot als undetected Paket für Valorant auf Windows PC. ESP, soft aim, delivery, and Vanguard questions.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Vanguard anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard anti-cheat-Wartung.",
								"support@valoranthack.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				support: {
					title: "Support | Hilfe & Kontakt",
					description: "Support: order help and license support contact. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Support",
					intro: "Valorant Hacks bündelt ESP wallhack, radar hack und valorant aimbot als undetected Paket für Valorant auf Windows PC. Support.",
					imageAlt: "Valorant Hacks support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Valorant Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"Valorant Hacks bündelt ESP wallhack, radar hack und valorant aimbot als undetected Paket für Valorant auf Windows PC. order help and license support contact.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Vanguard anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard anti-cheat-Wartung.",
								"support@valoranthack.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected Cheats | Undetected Status",
					description: "Undetected Cheats: undetected maintenance after Vanguard anti-cheat patches. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Undetected Cheats",
					intro: "Valorant Hacks bündelt ESP wallhack, radar hack und valorant aimbot als undetected Paket für Valorant auf Windows PC. Undetected Cheats.",
					imageAlt: "Valorant Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected Cheats",
					heroImage: "/images/valorant-hacks-wallhack.webp",
					ctaPrimary: "Valorant Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "Undetected Cheats",
							paragraphs: [
								"Valorant Hacks bündelt ESP wallhack, radar hack und valorant aimbot als undetected Paket für Valorant auf Windows PC. undetected maintenance after Vanguard anti-cheat patches.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Vanguard anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard anti-cheat-Wartung.",
								"support@valoranthack.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				wallhack: {
					title: "Valorant Wallhack | ESP Sichtbarkeit",
					description: "Valorant Wallhack: wallhack ESP for players, spike, and distance. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Valorant Wallhack",
					intro: "Valorant Hacks bündelt ESP wallhack, radar hack und valorant aimbot als undetected Paket für Valorant auf Windows PC. Valorant Wallhack.",
					imageAlt: "Valorant wallhack visibility through walls in a match",
					galleryTitle: "Valorant Wallhack",
					heroImage: "/images/valorant-hacks-wallhack.webp",
					ctaPrimary: "Valorant Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Valorant Wallhack",
							paragraphs: [
								"Valorant Hacks bündelt ESP wallhack, radar hack und valorant aimbot als undetected Paket für Valorant auf Windows PC. wallhack ESP for players, spike, and distance.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Vanguard anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard anti-cheat-Wartung.",
								"support@valoranthack.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				radar: {
					title: "Valorant Radar Hack | 2D Bedrohungsradar",
					description: "Valorant Radar Hack: 2D radar cues for flanks and rotations. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Valorant Radar Hack",
					intro: "Valorant Hacks bündelt ESP wallhack, radar hack und valorant aimbot als undetected Paket für Valorant auf Windows PC. Valorant Radar Hack.",
					imageAlt: "Valorant 2D radar overlay showing nearby threats",
					galleryTitle: "Valorant Radar Hack",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Valorant Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Valorant Radar Hack",
							paragraphs: [
								"Valorant Hacks bündelt ESP wallhack, radar hack und valorant aimbot als undetected Paket für Valorant auf Windows PC. 2D radar cues for flanks and rotations.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Vanguard anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard anti-cheat-Wartung.",
								"support@valoranthack.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				vanguard: {
					title: "Vanguard Bypass | Patch-Wartung",
					description: "Vanguard Bypass: how Vanguard updates are handled for Valorant hacks. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Vanguard Bypass",
					intro: "Valorant Hacks bündelt ESP wallhack, radar hack und valorant aimbot als undetected Paket für Valorant auf Windows PC. Vanguard Bypass.",
					imageAlt: "Valorant Hacks maintenance after a Vanguard patch",
					galleryTitle: "Vanguard Bypass",
					heroImage: "/images/valorant-hacks-aimbot.webp",
					ctaPrimary: "Valorant Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Vanguard Bypass",
							paragraphs: [
								"Valorant Hacks bündelt ESP wallhack, radar hack und valorant aimbot als undetected Paket für Valorant auf Windows PC. how Vanguard updates are handled for Valorant hacks.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Vanguard anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard anti-cheat-Wartung.",
								"support@valoranthack.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Valorant Hacks 2026 | Käuferleitfaden",
					description: "Valorant Hacks 2026: 2026 Valorant hacks checklist before checkout. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Valorant Hacks 2026",
					intro: "Valorant Hacks bündelt ESP wallhack, radar hack und valorant aimbot als undetected Paket für Valorant auf Windows PC. Valorant Hacks 2026.",
					imageAlt: "Valorant Hacks product overview for Valorant",
					galleryTitle: "Valorant Hacks 2026",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Valorant Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "Valorant Hacks 2026",
							paragraphs: [
								"Valorant Hacks bündelt ESP wallhack, radar hack und valorant aimbot als undetected Paket für Valorant auf Windows PC. 2026 Valorant hacks checklist before checkout.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Vanguard anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard anti-cheat-Wartung.",
								"support@valoranthack.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				hacks: {
					title: "Valorant Hacks | ESP Aimbot Guide",
					description: "Valorant Hacks: the Valorant hacks pillar for ESP and Aimbot. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Valorant Hacks",
					intro: "Valorant Hacks bündelt ESP wallhack, radar hack und valorant aimbot als undetected Paket für Valorant auf Windows PC. Valorant Hacks.",
					imageAlt: "Valorant Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Valorant Hacks",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Valorant Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Valorant Hacks",
							paragraphs: [
								"Valorant Hacks bündelt ESP wallhack, radar hack und valorant aimbot als undetected Paket für Valorant auf Windows PC. the Valorant hacks pillar for ESP and Aimbot.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Vanguard anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard anti-cheat-Wartung.",
								"support@valoranthack.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Valorant Cheat Download | Sofortzugang",
					description: "Valorant Cheat Download: digital license download after payment. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Valorant Cheat Download",
					intro: "Valorant Hacks bündelt ESP wallhack, radar hack und valorant aimbot als undetected Paket für Valorant auf Windows PC. Valorant Cheat Download.",
					imageAlt: "Valorant Hacks download and install delivery flow",
					galleryTitle: "Valorant Cheat Download",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Valorant Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Valorant Cheat Download",
							paragraphs: [
								"Valorant Hacks bündelt ESP wallhack, radar hack und valorant aimbot als undetected Paket für Valorant auf Windows PC. digital license download after payment.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Vanguard anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard anti-cheat-Wartung.",
								"support@valoranthack.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Valorant Mod-Menü | In-Game Toggles",
					description: "Valorant Mod-Menü: in-client ESP and soft aim toggles. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Valorant Mod-Menü",
					intro: "Valorant Hacks bündelt ESP wallhack, radar hack und valorant aimbot als undetected Paket für Valorant auf Windows PC. Valorant Mod-Menü.",
					imageAlt: "Valorant Hacks in-game menu controls",
					galleryTitle: "Valorant Mod-Menü",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Valorant Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Valorant Mod-Menü",
							paragraphs: [
								"Valorant Hacks bündelt ESP wallhack, radar hack und valorant aimbot als undetected Paket für Valorant auf Windows PC. in-client ESP and soft aim toggles.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Vanguard anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard anti-cheat-Wartung.",
								"support@valoranthack.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Valorant Soft Aim | Soft-Aim Einstellungen",
					description: "Valorant Soft Aim: smooth soft aim settings for Windows PC. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Valorant Soft Aim",
					intro: "Valorant Hacks bündelt ESP wallhack, radar hack und valorant aimbot als undetected Paket für Valorant auf Windows PC. Valorant Soft Aim.",
					imageAlt: "Valorant soft aim FOV and smoothness settings",
					galleryTitle: "Valorant Soft Aim",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Valorant Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/valorant-aimbot/",
					sections: [
						{
							h2: "Valorant Soft Aim",
							paragraphs: [
								"Valorant Hacks bündelt ESP wallhack, radar hack und valorant aimbot als undetected Paket für Valorant auf Windows PC. smooth soft aim settings for Windows PC.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Vanguard anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard anti-cheat-Wartung.",
								"support@valoranthack.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Beste Valorant Hacks | Käufer-Checkliste",
					description: "Beste Valorant Hacks: what to compare before buying Valorant hacks. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Beste Valorant Hacks",
					intro: "Valorant Hacks bündelt ESP wallhack, radar hack und valorant aimbot als undetected Paket für Valorant auf Windows PC. Beste Valorant Hacks.",
					imageAlt: "Valorant Hacks overview for Valorant on PC",
					galleryTitle: "Beste Valorant Hacks",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Valorant Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Beste Valorant Hacks",
							paragraphs: [
								"Valorant Hacks bündelt ESP wallhack, radar hack und valorant aimbot als undetected Paket für Valorant auf Windows PC. what to compare before buying Valorant hacks.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Vanguard anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard anti-cheat-Wartung.",
								"support@valoranthack.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Valorant Aimbot Hack | Soft-Aim Assist",
					description: "Valorant Aimbot Hack: undetected Aimbot hack assist for Valorant. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Valorant Aimbot Hack",
					intro: "Valorant Hacks bündelt ESP wallhack, radar hack und valorant aimbot als undetected Paket für Valorant auf Windows PC. Valorant Aimbot Hack.",
					imageAlt: "Valorant aimbot hack controls and bone priority",
					galleryTitle: "Valorant Aimbot Hack",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Valorant Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/valorant-aimbot/",
					sections: [
						{
							h2: "Valorant Aimbot Hack",
							paragraphs: [
								"Valorant Hacks bündelt ESP wallhack, radar hack und valorant aimbot als undetected Paket für Valorant auf Windows PC. undetected Aimbot hack assist for Valorant.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Vanguard anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard anti-cheat-Wartung.",
								"support@valoranthack.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Valorant ESP Hack | Boxen & Spike",
					description: "Valorant ESP Hack: ESP hack boxes, spike markers, and distance. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Valorant ESP Hack",
					intro: "Valorant Hacks bündelt ESP wallhack, radar hack und valorant aimbot als undetected Paket für Valorant auf Windows PC. Valorant ESP Hack.",
					imageAlt: "Valorant ESP hack boxes and spike markers",
					galleryTitle: "Valorant ESP Hack",
					heroImage: "/images/valorant-hacks-wallhack.webp",
					ctaPrimary: "Valorant Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Valorant ESP Hack",
							paragraphs: [
								"Valorant Hacks bündelt ESP wallhack, radar hack und valorant aimbot als undetected Paket für Valorant auf Windows PC. ESP hack boxes, spike markers, and distance.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Vanguard anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard anti-cheat-Wartung.",
								"support@valoranthack.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Valorant Unlock All | Was es bedeutet",
					description: "Valorant Unlock All: unlock-all searches vs real ESP and Aimbot tools. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Valorant Unlock All",
					intro: "Valorant Hacks bündelt ESP wallhack, radar hack und valorant aimbot als undetected Paket für Valorant auf Windows PC. Valorant Unlock All.",
					imageAlt: "Valorant Hacks license features overview",
					galleryTitle: "Valorant Unlock All",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Valorant Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Valorant Unlock All",
							paragraphs: [
								"Valorant Hacks bündelt ESP wallhack, radar hack und valorant aimbot als undetected Paket für Valorant auf Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Vanguard anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard anti-cheat-Wartung.",
								"support@valoranthack.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				privacy: {
					title: "Datenschutz | Valorant Hacks",
					description: "Datenschutz for Valorant Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Datenschutz",
					intro: "Valorant Hacks bündelt ESP wallhack, radar hack und valorant aimbot als undetected Paket für Valorant auf Windows PC. Datenschutz for valoranthack.net and Valorant licenses.",
					imageAlt: "valorant hacks",
					galleryTitle: "valorant hacks",
					heroImage: "/images/valorant-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Nutzungsbedingungen",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Erhobene Daten",
							paragraphs: [
								"Valorant Hacks bündelt ESP wallhack, radar hack und valorant aimbot als undetected Paket für Valorant auf Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on valoranthack.net.",
							],
						},
						{
							h2: "Datennutzung",
							paragraphs: [
								"Valorant Hacks bündelt ESP wallhack, radar hack und valorant aimbot als undetected Paket für Valorant auf Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Updates-Seite nach Vanguard anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
							],
						},
						{
							h2: "Ihre Rechte",
							paragraphs: [
								"support@valoranthack.net für Support und rechtliche Anfragen.",
								"Email: support@valoranthack.net",
							],
						},
					],
				},
				refund: {
					title: "Rückerstattung | Valorant Hacks",
					description: "Rückerstattung for Valorant Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Rückerstattung",
					intro: "Valorant Hacks bündelt ESP wallhack, radar hack und valorant aimbot als undetected Paket für Valorant auf Windows PC. Rückerstattung for valoranthack.net and Valorant licenses.",
					imageAlt: "valorant hacks",
					galleryTitle: "valorant hacks",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digitale Lieferung",
							paragraphs: [
								"Valorant Hacks bündelt ESP wallhack, radar hack und valorant aimbot als undetected Paket für Valorant auf Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard anti-cheat-Wartung.",
							],
						},
						{
							h2: "Genehmigung",
							paragraphs: [
								"Valorant Hacks bündelt ESP wallhack, radar hack und valorant aimbot als undetected Paket für Valorant auf Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Updates-Seite nach Vanguard anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
							],
						},
						{
							h2: "Anfrage stellen",
							paragraphs: [
								"support@valoranthack.net für Support und rechtliche Anfragen.",
								"Email: support@valoranthack.net",
							],
						},
					],
				},
				terms: {
					title: "Nutzungsbedingungen | Valorant Hacks",
					description: "Nutzungsbedingungen for Valorant Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Nutzungsbedingungen",
					intro: "Valorant Hacks bündelt ESP wallhack, radar hack und valorant aimbot als undetected Paket für Valorant auf Windows PC. Nutzungsbedingungen for valoranthack.net and Valorant licenses.",
					imageAlt: "valorant hacks",
					galleryTitle: "valorant hacks",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Annahme",
							paragraphs: [
								"Valorant Hacks bündelt ESP wallhack, radar hack und valorant aimbot als undetected Paket für Valorant auf Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard anti-cheat-Wartung.",
							],
						},
						{
							h2: "Risiko",
							paragraphs: [
								"Valorant Hacks bündelt ESP wallhack, radar hack und valorant aimbot als undetected Paket für Valorant auf Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Riot Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Änderungen",
							paragraphs: [
								"support@valoranthack.net für Support und rechtliche Anfragen.",
								"Email: support@valoranthack.net",
							],
						},
					],
				},
			},
		},
		pt: {
			ui: {
				nav: {
					home: "Início",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Recursos",
					pricing: "Preços",
					setup: "Instalação",
					updates: "Atualizações",
					faq: "FAQ",
					buyNow: "Comprar",
				},
				hero: {
					accent: "Cheats Valorant indetectáveis",
					accentShort: "Valorant Hacks",
					subtitle: "ESP wallhack, radar hack e Aimbot para Valorant no PC Windows — manutenção Vanguard anti-cheat incluída.",
					subtitleShort: "ESP, radar e Aimbot para Valorant PC",
					buyNow: "Comprar agora",
					seeFeatures: "Ver recursos",
				},
				trust: {
					status: "Online",
					statusNote: "O pacote Valorant Hacks está ativo para Valorant no PC Windows.",
					statusShort: "Ativo",
					delivery: "Entrega digital instantânea",
					platform: "Windows 10 e 11",
					antiCheat: "Manutenção Vanguard anti-cheat incluída",
					antiCheatShort: "Vanguard anti-cheat incluído",
				},
				product: {
					title: "Valorant Hacks",
					addToCart: "Adicionar ao carrinho",
					monthly: "Mensal",
					lifetime: "Vitalício",
					available: "Disponível agora",
					gameBadge: "Valorant",
					platformBadge: "PC Windows",
					statusBadge: "Pacote indetectável",
				},
				reviews: {
					title: "O que os jogadores dizem",
					subtitle: "Feedback recente de compradores Valorant Hacks",
					outOf: "de 5",
					countLabel: "avaliações",
				},
				common: {
					buyNow: "Comprar agora",
					readGuide: "Ler guia",
					language: "Idioma",
					officialLanguageNote: "Inglês é o idioma oficial. Outros idiomas são traduzidos para SEO global.",
					relatedPages: "Páginas relacionadas",
				},
				footer: {
					explore: "Explorar",
					help: "Ajuda e legal",
					tagline: "ESP, wallhack, radar e Aimbot indetectáveis para Valorant — checkout via Zadeyo.",
				},
				images: {
					hero: "Valorant Hacks hero — ESP and aimbot overlay in Valorant",
					espWallhack: "Wallhack outlines showing agents and enemies through walls",
					aimbotCombat: "Soft aim assist overlay during a Valorant round",
					squadFight: "Valorant Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Valorant match",
					headerArt: "Aimbot view and bone priority controls for Valorant",
					cheatsPackage: "2D radar threat overlay for Valorant",
					rebootFight: "Aimbot assist during a Valorant firefight",
					battleRoyale: "Valorant Hacks in-match overview for Windows PC",
					battleRoyaleIsland: "ESP markers for agents and the spike in Valorant",
				},
			},
			pages: {
				home: {
					title: "Valorant Hacks | Site oficial para PC",
					description: "Site oficial da Valorant Hacks para PC Windows. Compare ESP, aimbot e radar — depois compre. Feito para o Brasil, LATAM e o mundo.",
					h1: "Valorant Hacks",
					intro: "Valorant Hacks é o site oficial para Valorant no PC Windows. Confira recursos, planos e o status do Vanguard antes de comprar.",
					imageAlt: "Valorant Hacks — ESP e aimbot na partida",
					galleryTitle: "Visual in-game",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Comprar Valorant Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Por que comprar aqui",
							paragraphs: [
								"Valorant Hacks reúne ESP wallhack, radar hack e valorant aimbot indetectáveis para Valorant no PC Windows. Ideal para Competitive, Unrated e Deathmatch.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard anti-cheat.",
							],
						},
						{
							h2: "ESP, aimbot e radar numa licença",
							paragraphs: [
								"Valorant Hacks reúne ESP wallhack, radar hack e valorant aimbot indetectáveis para Valorant no PC Windows. Uma licença em vez de ferramentas separadas.",
								"Verifique Updates após patches Vanguard anti-cheat. Nenhum cheat garante status indetectável permanente.",
							],
						},
					],
				},
				"valorant-esp": {
					title: "ESP Valorant | Caixas de jogador e wallhack",
					description: "ESP Valorant: player boxes, spike markers, and wallhack overlays. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "ESP Valorant",
					intro: "Valorant Hacks reúne ESP wallhack, radar hack e valorant aimbot indetectáveis para Valorant no PC Windows. ESP Valorant.",
					imageAlt: "Valorant ESP player boxes and distance readouts in a match",
					galleryTitle: "ESP Valorant",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Comprar Valorant Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "ESP Valorant",
							paragraphs: [
								"Valorant Hacks reúne ESP wallhack, radar hack e valorant aimbot indetectáveis para Valorant no PC Windows. player boxes, spike markers, and wallhack overlays.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Vanguard anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard anti-cheat.",
								"Contacte support@valoranthack.net para suporte ou questões legais.",
							],
						},
					],
				},
				"valorant-aimbot": {
					title: "Aimbot Valorant | Controles soft aim",
					description: "Aimbot Valorant: soft aim, FOV, and per-weapon Aimbot profiles. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Aimbot Valorant",
					intro: "Valorant Hacks reúne ESP wallhack, radar hack e valorant aimbot indetectáveis para Valorant no PC Windows. Aimbot Valorant.",
					imageAlt: "Valorant aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Valorant",
					heroImage: "/images/valorant-hacks-aimbot.webp",
					ctaPrimary: "Comprar Valorant Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Aimbot Valorant",
							paragraphs: [
								"Valorant Hacks reúne ESP wallhack, radar hack e valorant aimbot indetectáveis para Valorant no PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Vanguard anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard anti-cheat.",
								"Contacte support@valoranthack.net para suporte ou questões legais.",
							],
						},
					],
				},
				features: {
					title: "Recursos | Lista completa de recursos",
					description: "Recursos: ESP, soft aim, radar controls. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Recursos",
					intro: "Valorant Hacks reúne ESP wallhack, radar hack e valorant aimbot indetectáveis para Valorant no PC Windows. Recursos.",
					imageAlt: "Valorant Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Recursos",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Comprar Valorant Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Recursos",
							paragraphs: [
								"Valorant Hacks reúne ESP wallhack, radar hack e valorant aimbot indetectáveis para Valorant no PC Windows. ESP, soft aim, radar controls.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Vanguard anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard anti-cheat.",
								"Contacte support@valoranthack.net para suporte ou questões legais.",
							],
						},
					],
				},
				pricing: {
					title: "Preços | Mensal e vitalício",
					description: "Preços: $35 monthly or $150 lifetime licenses. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Preços",
					intro: "Valorant Hacks reúne ESP wallhack, radar hack e valorant aimbot indetectáveis para Valorant no PC Windows. Preços.",
					imageAlt: "Valorant Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Preços",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Comprar Valorant Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Preços",
							paragraphs: [
								"Valorant Hacks reúne ESP wallhack, radar hack e valorant aimbot indetectáveis para Valorant no PC Windows. $35 monthly or $150 lifetime licenses.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Vanguard anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard anti-cheat.",
								"Contacte support@valoranthack.net para suporte ou questões legais.",
							],
						},
					],
				},
				setup: {
					title: "Instalação | Guia de instalação PC",
					description: "Instalação: Windows PC activation and first-launch setup. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Instalação",
					intro: "Valorant Hacks reúne ESP wallhack, radar hack e valorant aimbot indetectáveis para Valorant no PC Windows. Instalação.",
					imageAlt: "Valorant Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Instalação",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Comprar Valorant Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalação",
							paragraphs: [
								"Valorant Hacks reúne ESP wallhack, radar hack e valorant aimbot indetectáveis para Valorant no PC Windows. Windows PC activation and first-launch setup.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Vanguard anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard anti-cheat.",
								"Contacte support@valoranthack.net para suporte ou questões legais.",
							],
						},
					],
				},
				updates: {
					title: "Atualizações | Registro Vanguard",
					description: "Atualizações: Vanguard patch status and rebuild notes. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Atualizações",
					intro: "Valorant Hacks reúne ESP wallhack, radar hack e valorant aimbot indetectáveis para Valorant no PC Windows. Atualizações.",
					imageAlt: "Valorant Hacks live status after Vanguard and game patches",
					galleryTitle: "Atualizações",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Comprar Valorant Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "Atualizações",
							paragraphs: [
								"Valorant Hacks reúne ESP wallhack, radar hack e valorant aimbot indetectáveis para Valorant no PC Windows. Vanguard patch status and rebuild notes.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Vanguard anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard anti-cheat.",
								"Contacte support@valoranthack.net para suporte ou questões legais.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Perguntas frequentes",
					description: "FAQ: ESP, soft aim, delivery, and Vanguard questions. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "FAQ",
					intro: "Valorant Hacks reúne ESP wallhack, radar hack e valorant aimbot indetectáveis para Valorant no PC Windows. FAQ.",
					imageAlt: "Valorant Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Comprar Valorant Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Valorant Hacks reúne ESP wallhack, radar hack e valorant aimbot indetectáveis para Valorant no PC Windows. ESP, soft aim, delivery, and Vanguard questions.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Vanguard anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard anti-cheat.",
								"Contacte support@valoranthack.net para suporte ou questões legais.",
							],
						},
					],
				},
				support: {
					title: "Suporte | Ajuda e contato",
					description: "Suporte: order help and license support contact. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Suporte",
					intro: "Valorant Hacks reúne ESP wallhack, radar hack e valorant aimbot indetectáveis para Valorant no PC Windows. Suporte.",
					imageAlt: "Valorant Hacks support page for license and setup help",
					galleryTitle: "Suporte",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Comprar Valorant Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Suporte",
							paragraphs: [
								"Valorant Hacks reúne ESP wallhack, radar hack e valorant aimbot indetectáveis para Valorant no PC Windows. order help and license support contact.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Vanguard anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard anti-cheat.",
								"Contacte support@valoranthack.net para suporte ou questões legais.",
							],
						},
					],
				},
				undetected: {
					title: "Cheats indetectáveis | Status indetectável",
					description: "Cheats indetectáveis: undetected maintenance after Vanguard anti-cheat patches. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Cheats indetectáveis",
					intro: "Valorant Hacks reúne ESP wallhack, radar hack e valorant aimbot indetectáveis para Valorant no PC Windows. Cheats indetectáveis.",
					imageAlt: "Valorant Hacks undetected status overview for Windows PC",
					galleryTitle: "Cheats indetectáveis",
					heroImage: "/images/valorant-hacks-wallhack.webp",
					ctaPrimary: "Comprar Valorant Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "Cheats indetectáveis",
							paragraphs: [
								"Valorant Hacks reúne ESP wallhack, radar hack e valorant aimbot indetectáveis para Valorant no PC Windows. undetected maintenance after Vanguard anti-cheat patches.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Vanguard anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard anti-cheat.",
								"Contacte support@valoranthack.net para suporte ou questões legais.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Valorant | Visibilidade ESP",
					description: "Wallhack Valorant: wallhack ESP for players, spike, and distance. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Wallhack Valorant",
					intro: "Valorant Hacks reúne ESP wallhack, radar hack e valorant aimbot indetectáveis para Valorant no PC Windows. Wallhack Valorant.",
					imageAlt: "Valorant wallhack visibility through walls in a match",
					galleryTitle: "Wallhack Valorant",
					heroImage: "/images/valorant-hacks-wallhack.webp",
					ctaPrimary: "Comprar Valorant Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Wallhack Valorant",
							paragraphs: [
								"Valorant Hacks reúne ESP wallhack, radar hack e valorant aimbot indetectáveis para Valorant no PC Windows. wallhack ESP for players, spike, and distance.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Vanguard anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard anti-cheat.",
								"Contacte support@valoranthack.net para suporte ou questões legais.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack Valorant | Radar 2D de ameaças",
					description: "Radar hack Valorant: 2D radar cues for flanks and rotations. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Radar hack Valorant",
					intro: "Valorant Hacks reúne ESP wallhack, radar hack e valorant aimbot indetectáveis para Valorant no PC Windows. Radar hack Valorant.",
					imageAlt: "Valorant 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack Valorant",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Comprar Valorant Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Radar hack Valorant",
							paragraphs: [
								"Valorant Hacks reúne ESP wallhack, radar hack e valorant aimbot indetectáveis para Valorant no PC Windows. 2D radar cues for flanks and rotations.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Vanguard anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard anti-cheat.",
								"Contacte support@valoranthack.net para suporte ou questões legais.",
							],
						},
					],
				},
				vanguard: {
					title: "Bypass Vanguard | Manutenção de patches",
					description: "Bypass Vanguard: how Vanguard updates are handled for Valorant hacks. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Bypass Vanguard",
					intro: "Valorant Hacks reúne ESP wallhack, radar hack e valorant aimbot indetectáveis para Valorant no PC Windows. Bypass Vanguard.",
					imageAlt: "Valorant Hacks maintenance after a Vanguard patch",
					galleryTitle: "Bypass Vanguard",
					heroImage: "/images/valorant-hacks-aimbot.webp",
					ctaPrimary: "Comprar Valorant Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Vanguard",
							paragraphs: [
								"Valorant Hacks reúne ESP wallhack, radar hack e valorant aimbot indetectáveis para Valorant no PC Windows. how Vanguard updates are handled for Valorant hacks.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Vanguard anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard anti-cheat.",
								"Contacte support@valoranthack.net para suporte ou questões legais.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheats Valorant 2026 | Guia do comprador",
					description: "Cheats Valorant 2026: 2026 Valorant hacks checklist before checkout. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Cheats Valorant 2026",
					intro: "Valorant Hacks reúne ESP wallhack, radar hack e valorant aimbot indetectáveis para Valorant no PC Windows. Cheats Valorant 2026.",
					imageAlt: "Valorant Hacks product overview for Valorant",
					galleryTitle: "Cheats Valorant 2026",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Comprar Valorant Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "Cheats Valorant 2026",
							paragraphs: [
								"Valorant Hacks reúne ESP wallhack, radar hack e valorant aimbot indetectáveis para Valorant no PC Windows. 2026 Valorant hacks checklist before checkout.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Vanguard anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard anti-cheat.",
								"Contacte support@valoranthack.net para suporte ou questões legais.",
							],
						},
					],
				},
				hacks: {
					title: "Cheats Valorant | Guia ESP e Aimbot",
					description: "Cheats Valorant: the Valorant hacks pillar for ESP and Aimbot. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Cheats Valorant",
					intro: "Valorant Hacks reúne ESP wallhack, radar hack e valorant aimbot indetectáveis para Valorant no PC Windows. Cheats Valorant.",
					imageAlt: "Valorant Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Cheats Valorant",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Comprar Valorant Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheats Valorant",
							paragraphs: [
								"Valorant Hacks reúne ESP wallhack, radar hack e valorant aimbot indetectáveis para Valorant no PC Windows. the Valorant hacks pillar for ESP and Aimbot.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Vanguard anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard anti-cheat.",
								"Contacte support@valoranthack.net para suporte ou questões legais.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Download Valorant Hacks | Acesso instantâneo",
					description: "Download Valorant Hacks: digital license download after payment. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Download Valorant Hacks",
					intro: "Valorant Hacks reúne ESP wallhack, radar hack e valorant aimbot indetectáveis para Valorant no PC Windows. Download Valorant Hacks.",
					imageAlt: "Valorant Hacks download and install delivery flow",
					galleryTitle: "Download Valorant Hacks",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Comprar Valorant Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Download Valorant Hacks",
							paragraphs: [
								"Valorant Hacks reúne ESP wallhack, radar hack e valorant aimbot indetectáveis para Valorant no PC Windows. digital license download after payment.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Vanguard anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard anti-cheat.",
								"Contacte support@valoranthack.net para suporte ou questões legais.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menu mod Valorant | Controles in-game",
					description: "Menu mod Valorant: in-client ESP and soft aim toggles. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Menu mod Valorant",
					intro: "Valorant Hacks reúne ESP wallhack, radar hack e valorant aimbot indetectáveis para Valorant no PC Windows. Menu mod Valorant.",
					imageAlt: "Valorant Hacks in-game menu controls",
					galleryTitle: "Menu mod Valorant",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Comprar Valorant Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu mod Valorant",
							paragraphs: [
								"Valorant Hacks reúne ESP wallhack, radar hack e valorant aimbot indetectáveis para Valorant no PC Windows. in-client ESP and soft aim toggles.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Vanguard anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard anti-cheat.",
								"Contacte support@valoranthack.net para suporte ou questões legais.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Valorant | Ajustes soft aim",
					description: "Soft aim Valorant: smooth soft aim settings for Windows PC. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Soft aim Valorant",
					intro: "Valorant Hacks reúne ESP wallhack, radar hack e valorant aimbot indetectáveis para Valorant no PC Windows. Soft aim Valorant.",
					imageAlt: "Valorant soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Valorant",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Comprar Valorant Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/valorant-aimbot/",
					sections: [
						{
							h2: "Soft aim Valorant",
							paragraphs: [
								"Valorant Hacks reúne ESP wallhack, radar hack e valorant aimbot indetectáveis para Valorant no PC Windows. smooth soft aim settings for Windows PC.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Vanguard anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard anti-cheat.",
								"Contacte support@valoranthack.net para suporte ou questões legais.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Melhores cheats Valorant | Checklist do comprador",
					description: "Melhores cheats Valorant: what to compare before buying Valorant hacks. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Melhores cheats Valorant",
					intro: "Valorant Hacks reúne ESP wallhack, radar hack e valorant aimbot indetectáveis para Valorant no PC Windows. Melhores cheats Valorant.",
					imageAlt: "Valorant Hacks overview for Valorant on PC",
					galleryTitle: "Melhores cheats Valorant",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Comprar Valorant Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Melhores cheats Valorant",
							paragraphs: [
								"Valorant Hacks reúne ESP wallhack, radar hack e valorant aimbot indetectáveis para Valorant no PC Windows. what to compare before buying Valorant hacks.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Vanguard anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard anti-cheat.",
								"Contacte support@valoranthack.net para suporte ou questões legais.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Valorant | Assistência soft aim",
					description: "Hack aimbot Valorant: undetected Aimbot hack assist for Valorant. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Hack aimbot Valorant",
					intro: "Valorant Hacks reúne ESP wallhack, radar hack e valorant aimbot indetectáveis para Valorant no PC Windows. Hack aimbot Valorant.",
					imageAlt: "Valorant aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Valorant",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Comprar Valorant Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/valorant-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Valorant",
							paragraphs: [
								"Valorant Hacks reúne ESP wallhack, radar hack e valorant aimbot indetectáveis para Valorant no PC Windows. undetected Aimbot hack assist for Valorant.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Vanguard anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard anti-cheat.",
								"Contacte support@valoranthack.net para suporte ou questões legais.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Valorant | Caixas e spike",
					description: "Hack ESP Valorant: ESP hack boxes, spike markers, and distance. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Hack ESP Valorant",
					intro: "Valorant Hacks reúne ESP wallhack, radar hack e valorant aimbot indetectáveis para Valorant no PC Windows. Hack ESP Valorant.",
					imageAlt: "Valorant ESP hack boxes and spike markers",
					galleryTitle: "Hack ESP Valorant",
					heroImage: "/images/valorant-hacks-wallhack.webp",
					ctaPrimary: "Comprar Valorant Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Hack ESP Valorant",
							paragraphs: [
								"Valorant Hacks reúne ESP wallhack, radar hack e valorant aimbot indetectáveis para Valorant no PC Windows. ESP hack boxes, spike markers, and distance.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Vanguard anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard anti-cheat.",
								"Contacte support@valoranthack.net para suporte ou questões legais.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Valorant | O que significa",
					description: "Unlock all Valorant: unlock-all searches vs real ESP and Aimbot tools. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Unlock all Valorant",
					intro: "Valorant Hacks reúne ESP wallhack, radar hack e valorant aimbot indetectáveis para Valorant no PC Windows. Unlock all Valorant.",
					imageAlt: "Valorant Hacks license features overview",
					galleryTitle: "Unlock all Valorant",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Comprar Valorant Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Valorant",
							paragraphs: [
								"Valorant Hacks reúne ESP wallhack, radar hack e valorant aimbot indetectáveis para Valorant no PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Vanguard anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard anti-cheat.",
								"Contacte support@valoranthack.net para suporte ou questões legais.",
							],
						},
					],
				},
				privacy: {
					title: "Política de privacidade | Valorant Hacks",
					description: "Política de privacidade for Valorant Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Política de privacidade",
					intro: "Valorant Hacks reúne ESP wallhack, radar hack e valorant aimbot indetectáveis para Valorant no PC Windows. Política de privacidade for valoranthack.net and Valorant licenses.",
					imageAlt: "valorant hacks",
					galleryTitle: "valorant hacks",
					heroImage: "/images/valorant-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Valorant Hacks reúne ESP wallhack, radar hack e valorant aimbot indetectáveis para Valorant no PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on valoranthack.net.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Valorant Hacks reúne ESP wallhack, radar hack e valorant aimbot indetectáveis para Valorant no PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Verifique Updates após patches Vanguard anti-cheat. Nenhum cheat garante status indetectável permanente.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"Contacte support@valoranthack.net para suporte ou questões legais.",
								"Email: support@valoranthack.net",
							],
						},
					],
				},
				refund: {
					title: "Política de reembolso | Valorant Hacks",
					description: "Política de reembolso for Valorant Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Política de reembolso",
					intro: "Valorant Hacks reúne ESP wallhack, radar hack e valorant aimbot indetectáveis para Valorant no PC Windows. Política de reembolso for valoranthack.net and Valorant licenses.",
					imageAlt: "valorant hacks",
					galleryTitle: "valorant hacks",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Valorant Hacks reúne ESP wallhack, radar hack e valorant aimbot indetectáveis para Valorant no PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard anti-cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Valorant Hacks reúne ESP wallhack, radar hack e valorant aimbot indetectáveis para Valorant no PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Verifique Updates após patches Vanguard anti-cheat. Nenhum cheat garante status indetectável permanente.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"Contacte support@valoranthack.net para suporte ou questões legais.",
								"Email: support@valoranthack.net",
							],
						},
					],
				},
				terms: {
					title: "Termos de uso | Valorant Hacks",
					description: "Termos de uso for Valorant Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Termos de uso",
					intro: "Valorant Hacks reúne ESP wallhack, radar hack e valorant aimbot indetectáveis para Valorant no PC Windows. Termos de uso for valoranthack.net and Valorant licenses.",
					imageAlt: "valorant hacks",
					galleryTitle: "valorant hacks",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Valorant Hacks reúne ESP wallhack, radar hack e valorant aimbot indetectáveis para Valorant no PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard anti-cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Valorant Hacks reúne ESP wallhack, radar hack e valorant aimbot indetectáveis para Valorant no PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Riot Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"Contacte support@valoranthack.net para suporte ou questões legais.",
								"Email: support@valoranthack.net",
							],
						},
					],
				},
			},
		},
		it: {
			ui: {
				nav: {
					home: "Home",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funzioni",
					pricing: "Prezzi",
					setup: "Setup",
					updates: "Aggiornamenti",
					faq: "FAQ",
					buyNow: "Acquista",
				},
				hero: {
					accent: "Cheat Valorant indetectable",
					accentShort: "Valorant Hacks",
					subtitle: "ESP wallhack, radar hack e Aimbot per Valorant su PC Windows — manutenzione Vanguard anti-cheat inclusa.",
					subtitleShort: "ESP, radar e Aimbot per Valorant PC",
					buyNow: "Acquista ora",
					seeFeatures: "Vedi funzioni",
				},
				trust: {
					status: "Online",
					statusNote: "Il pacchetto Valorant Hacks è attivo per Valorant su PC Windows.",
					statusShort: "Attivo",
					delivery: "Consegna digitale istantanea",
					platform: "Windows 10 e 11",
					antiCheat: "Manutenzione Vanguard anti-cheat supportata",
					antiCheatShort: "Vanguard anti-cheat supportato",
				},
				product: {
					title: "Valorant Hacks",
					addToCart: "Aggiungi al carrello",
					monthly: "Mensile",
					lifetime: "A vita",
					available: "Disponibile ora",
					gameBadge: "Valorant",
					platformBadge: "PC Windows",
					statusBadge: "Pacchetto indetectable",
				},
				reviews: {
					title: "Cosa dicono i giocatori",
					subtitle: "Feedback recente dagli acquirenti Valorant Hacks",
					outOf: "su 5",
					countLabel: "recensioni",
				},
				common: {
					buyNow: "Acquista ora",
					readGuide: "Leggi guida",
					language: "Lingua",
					officialLanguageNote: "L'inglese è la lingua ufficiale. Altre versioni sono tradotte per SEO globale.",
					relatedPages: "Pagine correlate",
				},
				footer: {
					explore: "Esplora",
					help: "Aiuto e legale",
					tagline: "ESP, wallhack, radar e Aimbot indetectable per Valorant — checkout via Zadeyo.",
				},
				images: {
					hero: "Valorant Hacks hero — ESP and aimbot overlay in Valorant",
					espWallhack: "Wallhack outlines showing agents and enemies through walls",
					aimbotCombat: "Soft aim assist overlay during a Valorant round",
					squadFight: "Valorant Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Valorant match",
					headerArt: "Aimbot view and bone priority controls for Valorant",
					cheatsPackage: "2D radar threat overlay for Valorant",
					rebootFight: "Aimbot assist during a Valorant firefight",
					battleRoyale: "Valorant Hacks in-match overview for Windows PC",
					battleRoyaleIsland: "ESP markers for agents and the spike in Valorant",
				},
			},
			pages: {
				home: {
					title: "Valorant Hacks | Official PC Site",
					description: "Cheat Valorant indetectable per Valorant su PC. ESP wallhack, radar hack e Aimbot con manutenzione Vanguard anti-cheat. Consegna digitale istantanea.",
					h1: "Valorant Hacks",
					intro: "Pacchetto undetected per Valorant su PC Windows: ESP wallhack, radar e Aimbot con manutenzione Vanguard anti-cheat dopo ogni patch.",
					imageAlt: "Valorant ESP player tags hack",
					galleryTitle: "Galleria Valorant Hacks — ESP, Aimbot e wallhack",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Acquista Valorant Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Perché scegliere Valorant Hacks nel 2026",
							paragraphs: [
								"Valorant Hacks unisce ESP wallhack, radar hack e valorant aimbot indetectable per Valorant su PC Windows. Ideale per leggere squadre nemiche in Competitive e Deathmatch.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard anti-cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar e Aimbot in una licenza",
							paragraphs: [
								"Valorant Hacks unisce ESP wallhack, radar hack e valorant aimbot indetectable per Valorant su PC Windows. Una licenza invece di tool separati.",
								"Controlla Updates dopo patch Vanguard anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
							],
						},
					],
				},
				"valorant-esp": {
					title: "ESP Valorant | Box giocatore e wallhack",
					description: "ESP Valorant: player boxes, spike markers, and wallhack overlays. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "ESP Valorant",
					intro: "Valorant Hacks unisce ESP wallhack, radar hack e valorant aimbot indetectable per Valorant su PC Windows. ESP Valorant.",
					imageAlt: "Valorant ESP player boxes and distance readouts in a match",
					galleryTitle: "ESP Valorant",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Acquista Valorant Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "ESP Valorant",
							paragraphs: [
								"Valorant Hacks unisce ESP wallhack, radar hack e valorant aimbot indetectable per Valorant su PC Windows. player boxes, spike markers, and wallhack overlays.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Vanguard anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard anti-cheat.",
								"Contatta support@valoranthack.net per supporto o richieste legali.",
							],
						},
					],
				},
				"valorant-aimbot": {
					title: "Aimbot Valorant | Controlli soft aim",
					description: "Aimbot Valorant: soft aim, FOV, and per-weapon Aimbot profiles. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Aimbot Valorant",
					intro: "Valorant Hacks unisce ESP wallhack, radar hack e valorant aimbot indetectable per Valorant su PC Windows. Aimbot Valorant.",
					imageAlt: "Valorant aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Valorant",
					heroImage: "/images/valorant-hacks-aimbot.webp",
					ctaPrimary: "Acquista Valorant Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Aimbot Valorant",
							paragraphs: [
								"Valorant Hacks unisce ESP wallhack, radar hack e valorant aimbot indetectable per Valorant su PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Vanguard anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard anti-cheat.",
								"Contatta support@valoranthack.net per supporto o richieste legali.",
							],
						},
					],
				},
				features: {
					title: "Funzioni | Elenco completo funzioni",
					description: "Funzioni: ESP, soft aim, radar controls. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Funzioni",
					intro: "Valorant Hacks unisce ESP wallhack, radar hack e valorant aimbot indetectable per Valorant su PC Windows. Funzioni.",
					imageAlt: "Valorant Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funzioni",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Acquista Valorant Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funzioni",
							paragraphs: [
								"Valorant Hacks unisce ESP wallhack, radar hack e valorant aimbot indetectable per Valorant su PC Windows. ESP, soft aim, radar controls.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Vanguard anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard anti-cheat.",
								"Contatta support@valoranthack.net per supporto o richieste legali.",
							],
						},
					],
				},
				pricing: {
					title: "Prezzi | Mensile e lifetime",
					description: "Prezzi: $35 monthly or $150 lifetime licenses. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Prezzi",
					intro: "Valorant Hacks unisce ESP wallhack, radar hack e valorant aimbot indetectable per Valorant su PC Windows. Prezzi.",
					imageAlt: "Valorant Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Prezzi",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Acquista Valorant Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Prezzi",
							paragraphs: [
								"Valorant Hacks unisce ESP wallhack, radar hack e valorant aimbot indetectable per Valorant su PC Windows. $35 monthly or $150 lifetime licenses.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Vanguard anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard anti-cheat.",
								"Contatta support@valoranthack.net per supporto o richieste legali.",
							],
						},
					],
				},
				setup: {
					title: "Setup | Guida setup PC",
					description: "Setup: Windows PC activation and first-launch setup. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Setup",
					intro: "Valorant Hacks unisce ESP wallhack, radar hack e valorant aimbot indetectable per Valorant su PC Windows. Setup.",
					imageAlt: "Valorant Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Acquista Valorant Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"Valorant Hacks unisce ESP wallhack, radar hack e valorant aimbot indetectable per Valorant su PC Windows. Windows PC activation and first-launch setup.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Vanguard anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard anti-cheat.",
								"Contatta support@valoranthack.net per supporto o richieste legali.",
							],
						},
					],
				},
				updates: {
					title: "Aggiornamenti | Log manutenzione Vanguard",
					description: "Aggiornamenti: Vanguard patch status and rebuild notes. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Aggiornamenti",
					intro: "Valorant Hacks unisce ESP wallhack, radar hack e valorant aimbot indetectable per Valorant su PC Windows. Aggiornamenti.",
					imageAlt: "Valorant Hacks live status after Vanguard and game patches",
					galleryTitle: "Aggiornamenti",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Acquista Valorant Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "Aggiornamenti",
							paragraphs: [
								"Valorant Hacks unisce ESP wallhack, radar hack e valorant aimbot indetectable per Valorant su PC Windows. Vanguard patch status and rebuild notes.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Vanguard anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard anti-cheat.",
								"Contatta support@valoranthack.net per supporto o richieste legali.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Domande frequenti",
					description: "FAQ: ESP, soft aim, delivery, and Vanguard questions. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "FAQ",
					intro: "Valorant Hacks unisce ESP wallhack, radar hack e valorant aimbot indetectable per Valorant su PC Windows. FAQ.",
					imageAlt: "Valorant Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Acquista Valorant Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Valorant Hacks unisce ESP wallhack, radar hack e valorant aimbot indetectable per Valorant su PC Windows. ESP, soft aim, delivery, and Vanguard questions.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Vanguard anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard anti-cheat.",
								"Contatta support@valoranthack.net per supporto o richieste legali.",
							],
						},
					],
				},
				support: {
					title: "Supporto | Aiuto e contatto",
					description: "Supporto: order help and license support contact. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Supporto",
					intro: "Valorant Hacks unisce ESP wallhack, radar hack e valorant aimbot indetectable per Valorant su PC Windows. Supporto.",
					imageAlt: "Valorant Hacks support page for license and setup help",
					galleryTitle: "Supporto",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Acquista Valorant Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Supporto",
							paragraphs: [
								"Valorant Hacks unisce ESP wallhack, radar hack e valorant aimbot indetectable per Valorant su PC Windows. order help and license support contact.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Vanguard anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard anti-cheat.",
								"Contatta support@valoranthack.net per supporto o richieste legali.",
							],
						},
					],
				},
				undetected: {
					title: "Cheat indetectable | Stato indetectable",
					description: "Cheat indetectable: undetected maintenance after Vanguard anti-cheat patches. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Cheat indetectable",
					intro: "Valorant Hacks unisce ESP wallhack, radar hack e valorant aimbot indetectable per Valorant su PC Windows. Cheat indetectable.",
					imageAlt: "Valorant Hacks undetected status overview for Windows PC",
					galleryTitle: "Cheat indetectable",
					heroImage: "/images/valorant-hacks-wallhack.webp",
					ctaPrimary: "Acquista Valorant Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "Cheat indetectable",
							paragraphs: [
								"Valorant Hacks unisce ESP wallhack, radar hack e valorant aimbot indetectable per Valorant su PC Windows. undetected maintenance after Vanguard anti-cheat patches.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Vanguard anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard anti-cheat.",
								"Contatta support@valoranthack.net per supporto o richieste legali.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Valorant | Visibilità ESP",
					description: "Wallhack Valorant: wallhack ESP for players, spike, and distance. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Wallhack Valorant",
					intro: "Valorant Hacks unisce ESP wallhack, radar hack e valorant aimbot indetectable per Valorant su PC Windows. Wallhack Valorant.",
					imageAlt: "Valorant wallhack visibility through walls in a match",
					galleryTitle: "Wallhack Valorant",
					heroImage: "/images/valorant-hacks-wallhack.webp",
					ctaPrimary: "Acquista Valorant Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Wallhack Valorant",
							paragraphs: [
								"Valorant Hacks unisce ESP wallhack, radar hack e valorant aimbot indetectable per Valorant su PC Windows. wallhack ESP for players, spike, and distance.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Vanguard anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard anti-cheat.",
								"Contatta support@valoranthack.net per supporto o richieste legali.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack Valorant | Radar 2D minacce",
					description: "Radar hack Valorant: 2D radar cues for flanks and rotations. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Radar hack Valorant",
					intro: "Valorant Hacks unisce ESP wallhack, radar hack e valorant aimbot indetectable per Valorant su PC Windows. Radar hack Valorant.",
					imageAlt: "Valorant 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack Valorant",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Acquista Valorant Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Radar hack Valorant",
							paragraphs: [
								"Valorant Hacks unisce ESP wallhack, radar hack e valorant aimbot indetectable per Valorant su PC Windows. 2D radar cues for flanks and rotations.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Vanguard anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard anti-cheat.",
								"Contatta support@valoranthack.net per supporto o richieste legali.",
							],
						},
					],
				},
				vanguard: {
					title: "Bypass Vanguard | Manutenzione patch",
					description: "Bypass Vanguard: how Vanguard updates are handled for Valorant hacks. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Bypass Vanguard",
					intro: "Valorant Hacks unisce ESP wallhack, radar hack e valorant aimbot indetectable per Valorant su PC Windows. Bypass Vanguard.",
					imageAlt: "Valorant Hacks maintenance after a Vanguard patch",
					galleryTitle: "Bypass Vanguard",
					heroImage: "/images/valorant-hacks-aimbot.webp",
					ctaPrimary: "Acquista Valorant Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Vanguard",
							paragraphs: [
								"Valorant Hacks unisce ESP wallhack, radar hack e valorant aimbot indetectable per Valorant su PC Windows. how Vanguard updates are handled for Valorant hacks.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Vanguard anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard anti-cheat.",
								"Contatta support@valoranthack.net per supporto o richieste legali.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheat Valorant 2026 | Guida acquirente",
					description: "Cheat Valorant 2026: 2026 Valorant hacks checklist before checkout. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Cheat Valorant 2026",
					intro: "Valorant Hacks unisce ESP wallhack, radar hack e valorant aimbot indetectable per Valorant su PC Windows. Cheat Valorant 2026.",
					imageAlt: "Valorant Hacks product overview for Valorant",
					galleryTitle: "Cheat Valorant 2026",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Acquista Valorant Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "Cheat Valorant 2026",
							paragraphs: [
								"Valorant Hacks unisce ESP wallhack, radar hack e valorant aimbot indetectable per Valorant su PC Windows. 2026 Valorant hacks checklist before checkout.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Vanguard anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard anti-cheat.",
								"Contatta support@valoranthack.net per supporto o richieste legali.",
							],
						},
					],
				},
				hacks: {
					title: "Cheat Valorant | Guida ESP e Aimbot",
					description: "Cheat Valorant: the Valorant hacks pillar for ESP and Aimbot. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Cheat Valorant",
					intro: "Valorant Hacks unisce ESP wallhack, radar hack e valorant aimbot indetectable per Valorant su PC Windows. Cheat Valorant.",
					imageAlt: "Valorant Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Cheat Valorant",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Acquista Valorant Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat Valorant",
							paragraphs: [
								"Valorant Hacks unisce ESP wallhack, radar hack e valorant aimbot indetectable per Valorant su PC Windows. the Valorant hacks pillar for ESP and Aimbot.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Vanguard anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard anti-cheat.",
								"Contatta support@valoranthack.net per supporto o richieste legali.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Download Valorant Hacks | Accesso istantaneo",
					description: "Download Valorant Hacks: digital license download after payment. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Download Valorant Hacks",
					intro: "Valorant Hacks unisce ESP wallhack, radar hack e valorant aimbot indetectable per Valorant su PC Windows. Download Valorant Hacks.",
					imageAlt: "Valorant Hacks download and install delivery flow",
					galleryTitle: "Download Valorant Hacks",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Acquista Valorant Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Download Valorant Hacks",
							paragraphs: [
								"Valorant Hacks unisce ESP wallhack, radar hack e valorant aimbot indetectable per Valorant su PC Windows. digital license download after payment.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Vanguard anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard anti-cheat.",
								"Contatta support@valoranthack.net per supporto o richieste legali.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Mod menu Valorant | Toggle in-game",
					description: "Mod menu Valorant: in-client ESP and soft aim toggles. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Mod menu Valorant",
					intro: "Valorant Hacks unisce ESP wallhack, radar hack e valorant aimbot indetectable per Valorant su PC Windows. Mod menu Valorant.",
					imageAlt: "Valorant Hacks in-game menu controls",
					galleryTitle: "Mod menu Valorant",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Acquista Valorant Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mod menu Valorant",
							paragraphs: [
								"Valorant Hacks unisce ESP wallhack, radar hack e valorant aimbot indetectable per Valorant su PC Windows. in-client ESP and soft aim toggles.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Vanguard anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard anti-cheat.",
								"Contatta support@valoranthack.net per supporto o richieste legali.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Valorant | Impostazioni soft aim",
					description: "Soft aim Valorant: smooth soft aim settings for Windows PC. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Soft aim Valorant",
					intro: "Valorant Hacks unisce ESP wallhack, radar hack e valorant aimbot indetectable per Valorant su PC Windows. Soft aim Valorant.",
					imageAlt: "Valorant soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Valorant",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Acquista Valorant Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/valorant-aimbot/",
					sections: [
						{
							h2: "Soft aim Valorant",
							paragraphs: [
								"Valorant Hacks unisce ESP wallhack, radar hack e valorant aimbot indetectable per Valorant su PC Windows. smooth soft aim settings for Windows PC.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Vanguard anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard anti-cheat.",
								"Contatta support@valoranthack.net per supporto o richieste legali.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Migliori cheat Valorant | Checklist acquirente",
					description: "Migliori cheat Valorant: what to compare before buying Valorant hacks. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Migliori cheat Valorant",
					intro: "Valorant Hacks unisce ESP wallhack, radar hack e valorant aimbot indetectable per Valorant su PC Windows. Migliori cheat Valorant.",
					imageAlt: "Valorant Hacks overview for Valorant on PC",
					galleryTitle: "Migliori cheat Valorant",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Acquista Valorant Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Migliori cheat Valorant",
							paragraphs: [
								"Valorant Hacks unisce ESP wallhack, radar hack e valorant aimbot indetectable per Valorant su PC Windows. what to compare before buying Valorant hacks.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Vanguard anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard anti-cheat.",
								"Contatta support@valoranthack.net per supporto o richieste legali.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Valorant | Assist soft aim",
					description: "Hack aimbot Valorant: undetected Aimbot hack assist for Valorant. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Hack aimbot Valorant",
					intro: "Valorant Hacks unisce ESP wallhack, radar hack e valorant aimbot indetectable per Valorant su PC Windows. Hack aimbot Valorant.",
					imageAlt: "Valorant aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Valorant",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Acquista Valorant Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/valorant-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Valorant",
							paragraphs: [
								"Valorant Hacks unisce ESP wallhack, radar hack e valorant aimbot indetectable per Valorant su PC Windows. undetected Aimbot hack assist for Valorant.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Vanguard anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard anti-cheat.",
								"Contatta support@valoranthack.net per supporto o richieste legali.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Valorant | Box e spike",
					description: "Hack ESP Valorant: ESP hack boxes, spike markers, and distance. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Hack ESP Valorant",
					intro: "Valorant Hacks unisce ESP wallhack, radar hack e valorant aimbot indetectable per Valorant su PC Windows. Hack ESP Valorant.",
					imageAlt: "Valorant ESP hack boxes and spike markers",
					galleryTitle: "Hack ESP Valorant",
					heroImage: "/images/valorant-hacks-wallhack.webp",
					ctaPrimary: "Acquista Valorant Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Hack ESP Valorant",
							paragraphs: [
								"Valorant Hacks unisce ESP wallhack, radar hack e valorant aimbot indetectable per Valorant su PC Windows. ESP hack boxes, spike markers, and distance.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Vanguard anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard anti-cheat.",
								"Contatta support@valoranthack.net per supporto o richieste legali.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Valorant | Cosa significa",
					description: "Unlock all Valorant: unlock-all searches vs real ESP and Aimbot tools. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Unlock all Valorant",
					intro: "Valorant Hacks unisce ESP wallhack, radar hack e valorant aimbot indetectable per Valorant su PC Windows. Unlock all Valorant.",
					imageAlt: "Valorant Hacks license features overview",
					galleryTitle: "Unlock all Valorant",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Acquista Valorant Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Valorant",
							paragraphs: [
								"Valorant Hacks unisce ESP wallhack, radar hack e valorant aimbot indetectable per Valorant su PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Vanguard anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard anti-cheat.",
								"Contatta support@valoranthack.net per supporto o richieste legali.",
							],
						},
					],
				},
				privacy: {
					title: "Informativa privacy | Valorant Hacks",
					description: "Informativa privacy for Valorant Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Informativa privacy",
					intro: "Valorant Hacks unisce ESP wallhack, radar hack e valorant aimbot indetectable per Valorant su PC Windows. Informativa privacy for valoranthack.net and Valorant licenses.",
					imageAlt: "valorant hacks",
					galleryTitle: "valorant hacks",
					heroImage: "/images/valorant-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Valorant Hacks unisce ESP wallhack, radar hack e valorant aimbot indetectable per Valorant su PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on valoranthack.net.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Valorant Hacks unisce ESP wallhack, radar hack e valorant aimbot indetectable per Valorant su PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Controlla Updates dopo patch Vanguard anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"Contatta support@valoranthack.net per supporto o richieste legali.",
								"Email: support@valoranthack.net",
							],
						},
					],
				},
				refund: {
					title: "Politica di rimborso | Valorant Hacks",
					description: "Politica di rimborso for Valorant Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politica di rimborso",
					intro: "Valorant Hacks unisce ESP wallhack, radar hack e valorant aimbot indetectable per Valorant su PC Windows. Politica di rimborso for valoranthack.net and Valorant licenses.",
					imageAlt: "valorant hacks",
					galleryTitle: "valorant hacks",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Valorant Hacks unisce ESP wallhack, radar hack e valorant aimbot indetectable per Valorant su PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard anti-cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Valorant Hacks unisce ESP wallhack, radar hack e valorant aimbot indetectable per Valorant su PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Controlla Updates dopo patch Vanguard anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"Contatta support@valoranthack.net per supporto o richieste legali.",
								"Email: support@valoranthack.net",
							],
						},
					],
				},
				terms: {
					title: "Termini di utilizzo | Valorant Hacks",
					description: "Termini di utilizzo for Valorant Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Termini di utilizzo",
					intro: "Valorant Hacks unisce ESP wallhack, radar hack e valorant aimbot indetectable per Valorant su PC Windows. Termini di utilizzo for valoranthack.net and Valorant licenses.",
					imageAlt: "valorant hacks",
					galleryTitle: "valorant hacks",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Valorant Hacks unisce ESP wallhack, radar hack e valorant aimbot indetectable per Valorant su PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard anti-cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Valorant Hacks unisce ESP wallhack, radar hack e valorant aimbot indetectable per Valorant su PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Riot Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"Contatta support@valoranthack.net per supporto o richieste legali.",
								"Email: support@valoranthack.net",
							],
						},
					],
				},
			},
		},
		nl: {
			ui: {
				nav: {
					home: "Home",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Functies",
					pricing: "Prijzen",
					setup: "Setup",
					updates: "Updates",
					faq: "FAQ",
					buyNow: "Kopen",
				},
				hero: {
					accent: "Undetected Valorant Hacks",
					accentShort: "Valorant Hacks",
					subtitle: "ESP wallhack, radar hack en Aimbot voor Valorant op Windows PC — Vanguard anti-cheat-onderhoud inbegrepen.",
					subtitleShort: "ESP, radar & Aimbot voor Valorant PC",
					buyNow: "Nu kopen",
					seeFeatures: "Bekijk functies",
				},
				trust: {
					status: "Online",
					statusNote: "Valorant Hacks pakket is live voor Valorant op Windows PC.",
					statusShort: "Live",
					delivery: "Directe digitale levering",
					platform: "Windows 10 & 11",
					antiCheat: "Vanguard anti-cheat-onderhoud ondersteund",
					antiCheatShort: "Vanguard anti-cheat support",
				},
				product: {
					title: "Valorant Hacks",
					addToCart: "In winkelwagen",
					monthly: "Maandelijks",
					lifetime: "Lifetime",
					available: "Nu beschikbaar",
					gameBadge: "Valorant",
					platformBadge: "Windows PC",
					statusBadge: "Undetected pakket",
				},
				reviews: {
					title: "Wat spelers zeggen",
					subtitle: "Recente feedback van Valorant Hacks kopers",
					outOf: "van 5",
					countLabel: "reviews",
				},
				common: {
					buyNow: "Nu kopen",
					readGuide: "Lees gids",
					language: "Taal",
					officialLanguageNote: "Engels is de officiële taal. Andere talen zijn vertaald voor wereldwijde SEO.",
					relatedPages: "Gerelateerde pagina's",
				},
				footer: {
					explore: "Verkennen",
					help: "Help & juridisch",
					tagline: "Undetected ESP, wallhack, radar en Aimbot voor Valorant — checkout via Zadeyo.",
				},
				images: {
					hero: "Valorant Hacks hero — ESP and aimbot overlay in Valorant",
					espWallhack: "Wallhack outlines showing agents and enemies through walls",
					aimbotCombat: "Soft aim assist overlay during a Valorant round",
					squadFight: "Valorant Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Valorant match",
					headerArt: "Aimbot view and bone priority controls for Valorant",
					cheatsPackage: "2D radar threat overlay for Valorant",
					rebootFight: "Aimbot assist during a Valorant firefight",
					battleRoyale: "Valorant Hacks in-match overview for Windows PC",
					battleRoyaleIsland: "ESP markers for agents and the spike in Valorant",
				},
			},
			pages: {
				home: {
					title: "Valorant Hacks | Official PC Site",
					description: "Undetected Valorant hacks voor Valorant op PC. ESP wallhack, radar hack en Aimbot met Vanguard anti-cheat-onderhoud. Directe digitale levering.",
					h1: "Valorant Hacks",
					intro: "Undetected Windows PC pakket voor Valorant: ESP wallhack, radar en Aimbot met Vanguard anti-cheat-onderhoud na elke patch.",
					imageAlt: "Valorant ESP player tags hack",
					galleryTitle: "Valorant Hacks galerij — ESP, Aimbot en wallhack",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Valorant Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Waarom Valorant Hacks in 2026",
							paragraphs: [
								"Valorant Hacks bundelt ESP wallhack, radar hack en valorant aimbot als undetected pakket voor Valorant op Windows PC. Ideaal om vijandelijke squads te lezen in Competitive en Deathmatch.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard anti-cheat-onderhoud.",
							],
						},
						{
							h2: "ESP wallhack, radar en Aimbot in één licentie",
							paragraphs: [
								"Valorant Hacks bundelt ESP wallhack, radar hack en valorant aimbot als undetected pakket voor Valorant op Windows PC. Eén licentie in plaats van losse tools.",
								"Check Updates na Vanguard anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
							],
						},
					],
				},
				"valorant-esp": {
					title: "Valorant ESP | Player Boxes & Wallhack",
					description: "Valorant ESP: player boxes, spike markers, and wallhack overlays. directe digitale levering. undetected — Windows PC.",
					h1: "Valorant ESP",
					intro: "Valorant Hacks bundelt ESP wallhack, radar hack en valorant aimbot als undetected pakket voor Valorant op Windows PC. Valorant ESP.",
					imageAlt: "Valorant ESP player boxes and distance readouts in a match",
					galleryTitle: "Valorant ESP",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Valorant Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "Valorant ESP",
							paragraphs: [
								"Valorant Hacks bundelt ESP wallhack, radar hack en valorant aimbot als undetected pakket voor Valorant op Windows PC. player boxes, spike markers, and wallhack overlays.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Vanguard anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard anti-cheat-onderhoud.",
								"support@valoranthack.net voor support en juridische vragen.",
							],
						},
					],
				},
				"valorant-aimbot": {
					title: "Valorant Aimbot | Soft Aim Controls",
					description: "Valorant Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. directe digitale levering. undetected — Windows PC.",
					h1: "Valorant Aimbot",
					intro: "Valorant Hacks bundelt ESP wallhack, radar hack en valorant aimbot als undetected pakket voor Valorant op Windows PC. Valorant Aimbot.",
					imageAlt: "Valorant aimbot and soft aim controls on Windows PC",
					galleryTitle: "Valorant Aimbot",
					heroImage: "/images/valorant-hacks-aimbot.webp",
					ctaPrimary: "Valorant Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Valorant Aimbot",
							paragraphs: [
								"Valorant Hacks bundelt ESP wallhack, radar hack en valorant aimbot als undetected pakket voor Valorant op Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Vanguard anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard anti-cheat-onderhoud.",
								"support@valoranthack.net voor support en juridische vragen.",
							],
						},
					],
				},
				features: {
					title: "Functies | Full Feature List",
					description: "Functies: ESP, soft aim, radar controls. directe digitale levering. undetected — Windows PC.",
					h1: "Functies",
					intro: "Valorant Hacks bundelt ESP wallhack, radar hack en valorant aimbot als undetected pakket voor Valorant op Windows PC. Functies.",
					imageAlt: "Valorant Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Functies",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Valorant Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Functies",
							paragraphs: [
								"Valorant Hacks bundelt ESP wallhack, radar hack en valorant aimbot als undetected pakket voor Valorant op Windows PC. ESP, soft aim, radar controls.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Vanguard anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard anti-cheat-onderhoud.",
								"support@valoranthack.net voor support en juridische vragen.",
							],
						},
					],
				},
				pricing: {
					title: "Prijzen | Monthly & Lifetime",
					description: "Prijzen: $35 monthly or $150 lifetime licenses. directe digitale levering. undetected — Windows PC.",
					h1: "Prijzen",
					intro: "Valorant Hacks bundelt ESP wallhack, radar hack en valorant aimbot als undetected pakket voor Valorant op Windows PC. Prijzen.",
					imageAlt: "Valorant Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Prijzen",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Valorant Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Prijzen",
							paragraphs: [
								"Valorant Hacks bundelt ESP wallhack, radar hack en valorant aimbot als undetected pakket voor Valorant op Windows PC. $35 monthly or $150 lifetime licenses.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Vanguard anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard anti-cheat-onderhoud.",
								"support@valoranthack.net voor support en juridische vragen.",
							],
						},
					],
				},
				setup: {
					title: "Setup | PC Setup Guide",
					description: "Setup: Windows PC activation and first-launch setup. directe digitale levering. undetected — Windows PC.",
					h1: "Setup",
					intro: "Valorant Hacks bundelt ESP wallhack, radar hack en valorant aimbot als undetected pakket voor Valorant op Windows PC. Setup.",
					imageAlt: "Valorant Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Valorant Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"Valorant Hacks bundelt ESP wallhack, radar hack en valorant aimbot als undetected pakket voor Valorant op Windows PC. Windows PC activation and first-launch setup.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Vanguard anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard anti-cheat-onderhoud.",
								"support@valoranthack.net voor support en juridische vragen.",
							],
						},
					],
				},
				updates: {
					title: "Updates | Vanguard Maintenance Log",
					description: "Updates: Vanguard patch status and rebuild notes. directe digitale levering. undetected — Windows PC.",
					h1: "Updates",
					intro: "Valorant Hacks bundelt ESP wallhack, radar hack en valorant aimbot als undetected pakket voor Valorant op Windows PC. Updates.",
					imageAlt: "Valorant Hacks live status after Vanguard and game patches",
					galleryTitle: "Updates",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Valorant Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "Updates",
							paragraphs: [
								"Valorant Hacks bundelt ESP wallhack, radar hack en valorant aimbot als undetected pakket voor Valorant op Windows PC. Vanguard patch status and rebuild notes.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Vanguard anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard anti-cheat-onderhoud.",
								"support@valoranthack.net voor support en juridische vragen.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and Vanguard questions. directe digitale levering. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Valorant Hacks bundelt ESP wallhack, radar hack en valorant aimbot als undetected pakket voor Valorant op Windows PC. FAQ.",
					imageAlt: "Valorant Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Valorant Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Valorant Hacks bundelt ESP wallhack, radar hack en valorant aimbot als undetected pakket voor Valorant op Windows PC. ESP, soft aim, delivery, and Vanguard questions.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Vanguard anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard anti-cheat-onderhoud.",
								"support@valoranthack.net voor support en juridische vragen.",
							],
						},
					],
				},
				support: {
					title: "Support | Help & Contact",
					description: "Support: order help and license support contact. directe digitale levering. undetected — Windows PC.",
					h1: "Support",
					intro: "Valorant Hacks bundelt ESP wallhack, radar hack en valorant aimbot als undetected pakket voor Valorant op Windows PC. Support.",
					imageAlt: "Valorant Hacks support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Valorant Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"Valorant Hacks bundelt ESP wallhack, radar hack en valorant aimbot als undetected pakket voor Valorant op Windows PC. order help and license support contact.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Vanguard anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard anti-cheat-onderhoud.",
								"support@valoranthack.net voor support en juridische vragen.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected Cheats | Vanguard Safe Status",
					description: "Undetected Cheats: undetected maintenance after Vanguard anti-cheat patches. directe digitale levering. undetected — Windows PC.",
					h1: "Undetected Cheats",
					intro: "Valorant Hacks bundelt ESP wallhack, radar hack en valorant aimbot als undetected pakket voor Valorant op Windows PC. Undetected Cheats.",
					imageAlt: "Valorant Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected Cheats",
					heroImage: "/images/valorant-hacks-wallhack.webp",
					ctaPrimary: "Valorant Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "Undetected Cheats",
							paragraphs: [
								"Valorant Hacks bundelt ESP wallhack, radar hack en valorant aimbot als undetected pakket voor Valorant op Windows PC. undetected maintenance after Vanguard anti-cheat patches.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Vanguard anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard anti-cheat-onderhoud.",
								"support@valoranthack.net voor support en juridische vragen.",
							],
						},
					],
				},
				wallhack: {
					title: "Valorant Wallhack | ESP Visibility",
					description: "Valorant Wallhack: wallhack ESP for players, spike, and distance. directe digitale levering. undetected — Windows PC.",
					h1: "Valorant Wallhack",
					intro: "Valorant Hacks bundelt ESP wallhack, radar hack en valorant aimbot als undetected pakket voor Valorant op Windows PC. Valorant Wallhack.",
					imageAlt: "Valorant wallhack visibility through walls in a match",
					galleryTitle: "Valorant Wallhack",
					heroImage: "/images/valorant-hacks-wallhack.webp",
					ctaPrimary: "Valorant Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Valorant Wallhack",
							paragraphs: [
								"Valorant Hacks bundelt ESP wallhack, radar hack en valorant aimbot als undetected pakket voor Valorant op Windows PC. wallhack ESP for players, spike, and distance.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Vanguard anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard anti-cheat-onderhoud.",
								"support@valoranthack.net voor support en juridische vragen.",
							],
						},
					],
				},
				radar: {
					title: "Valorant Radar Hack | 2D Threat Overlay",
					description: "Valorant Radar Hack: 2D radar cues for flanks and rotations. directe digitale levering. undetected — Windows PC.",
					h1: "Valorant Radar Hack",
					intro: "Valorant Hacks bundelt ESP wallhack, radar hack en valorant aimbot als undetected pakket voor Valorant op Windows PC. Valorant Radar Hack.",
					imageAlt: "Valorant 2D radar overlay showing nearby threats",
					galleryTitle: "Valorant Radar Hack",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Valorant Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Valorant Radar Hack",
							paragraphs: [
								"Valorant Hacks bundelt ESP wallhack, radar hack en valorant aimbot als undetected pakket voor Valorant op Windows PC. 2D radar cues for flanks and rotations.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Vanguard anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard anti-cheat-onderhoud.",
								"support@valoranthack.net voor support en juridische vragen.",
							],
						},
					],
				},
				vanguard: {
					title: "Vanguard Bypass | Patch Maintenance",
					description: "Vanguard Bypass: how Vanguard updates are handled for Valorant hacks. directe digitale levering. undetected — Windows PC.",
					h1: "Vanguard Bypass",
					intro: "Valorant Hacks bundelt ESP wallhack, radar hack en valorant aimbot als undetected pakket voor Valorant op Windows PC. Vanguard Bypass.",
					imageAlt: "Valorant Hacks maintenance after a Vanguard patch",
					galleryTitle: "Vanguard Bypass",
					heroImage: "/images/valorant-hacks-aimbot.webp",
					ctaPrimary: "Valorant Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Vanguard Bypass",
							paragraphs: [
								"Valorant Hacks bundelt ESP wallhack, radar hack en valorant aimbot als undetected pakket voor Valorant op Windows PC. how Vanguard updates are handled for Valorant hacks.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Vanguard anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard anti-cheat-onderhoud.",
								"support@valoranthack.net voor support en juridische vragen.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Valorant Hacks 2026 | Buyer Guide",
					description: "Valorant Hacks 2026: 2026 Valorant hacks checklist before checkout. directe digitale levering. undetected — Windows PC.",
					h1: "Valorant Hacks 2026",
					intro: "Valorant Hacks bundelt ESP wallhack, radar hack en valorant aimbot als undetected pakket voor Valorant op Windows PC. Valorant Hacks 2026.",
					imageAlt: "Valorant Hacks product overview for Valorant",
					galleryTitle: "Valorant Hacks 2026",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Valorant Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "Valorant Hacks 2026",
							paragraphs: [
								"Valorant Hacks bundelt ESP wallhack, radar hack en valorant aimbot als undetected pakket voor Valorant op Windows PC. 2026 Valorant hacks checklist before checkout.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Vanguard anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard anti-cheat-onderhoud.",
								"support@valoranthack.net voor support en juridische vragen.",
							],
						},
					],
				},
				hacks: {
					title: "Valorant Hacks | ESP Aimbot Guide",
					description: "Valorant Hacks: the Valorant hacks pillar for ESP and Aimbot. directe digitale levering. undetected — Windows PC.",
					h1: "Valorant Hacks",
					intro: "Valorant Hacks bundelt ESP wallhack, radar hack en valorant aimbot als undetected pakket voor Valorant op Windows PC. Valorant Hacks.",
					imageAlt: "Valorant Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Valorant Hacks",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Valorant Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Valorant Hacks",
							paragraphs: [
								"Valorant Hacks bundelt ESP wallhack, radar hack en valorant aimbot als undetected pakket voor Valorant op Windows PC. the Valorant hacks pillar for ESP and Aimbot.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Vanguard anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard anti-cheat-onderhoud.",
								"support@valoranthack.net voor support en juridische vragen.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Valorant Cheat Download | Instant Access",
					description: "Valorant Cheat Download: digital license download after payment. directe digitale levering. undetected — Windows PC.",
					h1: "Valorant Cheat Download",
					intro: "Valorant Hacks bundelt ESP wallhack, radar hack en valorant aimbot als undetected pakket voor Valorant op Windows PC. Valorant Cheat Download.",
					imageAlt: "Valorant Hacks download and install delivery flow",
					galleryTitle: "Valorant Cheat Download",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Valorant Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Valorant Cheat Download",
							paragraphs: [
								"Valorant Hacks bundelt ESP wallhack, radar hack en valorant aimbot als undetected pakket voor Valorant op Windows PC. digital license download after payment.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Vanguard anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard anti-cheat-onderhoud.",
								"support@valoranthack.net voor support en juridische vragen.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Valorant Mod Menu | In-Game Toggles",
					description: "Valorant Mod Menu: in-client ESP and soft aim toggles. directe digitale levering. undetected — Windows PC.",
					h1: "Valorant Mod Menu",
					intro: "Valorant Hacks bundelt ESP wallhack, radar hack en valorant aimbot als undetected pakket voor Valorant op Windows PC. Valorant Mod Menu.",
					imageAlt: "Valorant Hacks in-game menu controls",
					galleryTitle: "Valorant Mod Menu",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Valorant Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Valorant Mod Menu",
							paragraphs: [
								"Valorant Hacks bundelt ESP wallhack, radar hack en valorant aimbot als undetected pakket voor Valorant op Windows PC. in-client ESP and soft aim toggles.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Vanguard anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard anti-cheat-onderhoud.",
								"support@valoranthack.net voor support en juridische vragen.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Valorant Soft Aim | Smooth Aim Settings",
					description: "Valorant Soft Aim: smooth soft aim settings for Windows PC. directe digitale levering. undetected — Windows PC.",
					h1: "Valorant Soft Aim",
					intro: "Valorant Hacks bundelt ESP wallhack, radar hack en valorant aimbot als undetected pakket voor Valorant op Windows PC. Valorant Soft Aim.",
					imageAlt: "Valorant soft aim FOV and smoothness settings",
					galleryTitle: "Valorant Soft Aim",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Valorant Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/valorant-aimbot/",
					sections: [
						{
							h2: "Valorant Soft Aim",
							paragraphs: [
								"Valorant Hacks bundelt ESP wallhack, radar hack en valorant aimbot als undetected pakket voor Valorant op Windows PC. smooth soft aim settings for Windows PC.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Vanguard anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard anti-cheat-onderhoud.",
								"support@valoranthack.net voor support en juridische vragen.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Beste Valorant Hacks | Buyer Checklist",
					description: "Beste Valorant Hacks: what to compare before buying Valorant hacks. directe digitale levering. undetected — Windows PC.",
					h1: "Beste Valorant Hacks",
					intro: "Valorant Hacks bundelt ESP wallhack, radar hack en valorant aimbot als undetected pakket voor Valorant op Windows PC. Beste Valorant Hacks.",
					imageAlt: "Valorant Hacks overview for Valorant on PC",
					galleryTitle: "Beste Valorant Hacks",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Valorant Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Beste Valorant Hacks",
							paragraphs: [
								"Valorant Hacks bundelt ESP wallhack, radar hack en valorant aimbot als undetected pakket voor Valorant op Windows PC. what to compare before buying Valorant hacks.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Vanguard anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard anti-cheat-onderhoud.",
								"support@valoranthack.net voor support en juridische vragen.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Valorant Aimbot Hack | Soft Aim Assist",
					description: "Valorant Aimbot Hack: undetected Aimbot hack assist for Valorant. directe digitale levering. undetected — Windows PC.",
					h1: "Valorant Aimbot Hack",
					intro: "Valorant Hacks bundelt ESP wallhack, radar hack en valorant aimbot als undetected pakket voor Valorant op Windows PC. Valorant Aimbot Hack.",
					imageAlt: "Valorant aimbot hack controls and bone priority",
					galleryTitle: "Valorant Aimbot Hack",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Valorant Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/valorant-aimbot/",
					sections: [
						{
							h2: "Valorant Aimbot Hack",
							paragraphs: [
								"Valorant Hacks bundelt ESP wallhack, radar hack en valorant aimbot als undetected pakket voor Valorant op Windows PC. undetected Aimbot hack assist for Valorant.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Vanguard anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard anti-cheat-onderhoud.",
								"support@valoranthack.net voor support en juridische vragen.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Valorant ESP Hack | Boxes & Spike",
					description: "Valorant ESP Hack: ESP hack boxes, spike markers, and distance. directe digitale levering. undetected — Windows PC.",
					h1: "Valorant ESP Hack",
					intro: "Valorant Hacks bundelt ESP wallhack, radar hack en valorant aimbot als undetected pakket voor Valorant op Windows PC. Valorant ESP Hack.",
					imageAlt: "Valorant ESP hack boxes and spike markers",
					galleryTitle: "Valorant ESP Hack",
					heroImage: "/images/valorant-hacks-wallhack.webp",
					ctaPrimary: "Valorant Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Valorant ESP Hack",
							paragraphs: [
								"Valorant Hacks bundelt ESP wallhack, radar hack en valorant aimbot als undetected pakket voor Valorant op Windows PC. ESP hack boxes, spike markers, and distance.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Vanguard anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard anti-cheat-onderhoud.",
								"support@valoranthack.net voor support en juridische vragen.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Valorant Unlock All | What It Means",
					description: "Valorant Unlock All: unlock-all searches vs real ESP and Aimbot tools. directe digitale levering. undetected — Windows PC.",
					h1: "Valorant Unlock All",
					intro: "Valorant Hacks bundelt ESP wallhack, radar hack en valorant aimbot als undetected pakket voor Valorant op Windows PC. Valorant Unlock All.",
					imageAlt: "Valorant Hacks license features overview",
					galleryTitle: "Valorant Unlock All",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Valorant Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Valorant Unlock All",
							paragraphs: [
								"Valorant Hacks bundelt ESP wallhack, radar hack en valorant aimbot als undetected pakket voor Valorant op Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Vanguard anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard anti-cheat-onderhoud.",
								"support@valoranthack.net voor support en juridische vragen.",
							],
						},
					],
				},
				privacy: {
					title: "Privacybeleid | Valorant Hacks",
					description: "Privacybeleid for Valorant Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Privacybeleid",
					intro: "Valorant Hacks bundelt ESP wallhack, radar hack en valorant aimbot als undetected pakket voor Valorant op Windows PC. Privacybeleid for valoranthack.net and Valorant licenses.",
					imageAlt: "valorant hacks",
					galleryTitle: "valorant hacks",
					heroImage: "/images/valorant-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Valorant Hacks bundelt ESP wallhack, radar hack en valorant aimbot als undetected pakket voor Valorant op Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on valoranthack.net.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Valorant Hacks bundelt ESP wallhack, radar hack en valorant aimbot als undetected pakket voor Valorant op Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Check Updates na Vanguard anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@valoranthack.net voor support en juridische vragen.",
								"Email: support@valoranthack.net",
							],
						},
					],
				},
				refund: {
					title: "Restitutiebeleid | Valorant Hacks",
					description: "Restitutiebeleid for Valorant Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Restitutiebeleid",
					intro: "Valorant Hacks bundelt ESP wallhack, radar hack en valorant aimbot als undetected pakket voor Valorant op Windows PC. Restitutiebeleid for valoranthack.net and Valorant licenses.",
					imageAlt: "valorant hacks",
					galleryTitle: "valorant hacks",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Valorant Hacks bundelt ESP wallhack, radar hack en valorant aimbot als undetected pakket voor Valorant op Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard anti-cheat-onderhoud.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Valorant Hacks bundelt ESP wallhack, radar hack en valorant aimbot als undetected pakket voor Valorant op Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Check Updates na Vanguard anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@valoranthack.net voor support en juridische vragen.",
								"Email: support@valoranthack.net",
							],
						},
					],
				},
				terms: {
					title: "Gebruiksvoorwaarden | Valorant Hacks",
					description: "Gebruiksvoorwaarden for Valorant Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Gebruiksvoorwaarden",
					intro: "Valorant Hacks bundelt ESP wallhack, radar hack en valorant aimbot als undetected pakket voor Valorant op Windows PC. Gebruiksvoorwaarden for valoranthack.net and Valorant licenses.",
					imageAlt: "valorant hacks",
					galleryTitle: "valorant hacks",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Valorant Hacks bundelt ESP wallhack, radar hack en valorant aimbot als undetected pakket voor Valorant op Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard anti-cheat-onderhoud.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Valorant Hacks bundelt ESP wallhack, radar hack en valorant aimbot als undetected pakket voor Valorant op Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Riot Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@valoranthack.net voor support en juridische vragen.",
								"Email: support@valoranthack.net",
							],
						},
					],
				},
			},
		},
		pl: {
			ui: {
				nav: {
					home: "Strona główna",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funkcje",
					pricing: "Cennik",
					setup: "Instalacja",
					updates: "Aktualizacje",
					faq: "FAQ",
					buyNow: "Kup teraz",
				},
				hero: {
					accent: "Undetected cheaty Valorant",
					accentShort: "Valorant Hacks",
					subtitle: "ESP wallhack, radar hack i Aimbot do Valorant na PC Windows — konserwacja Vanguard anti-cheat w cenie.",
					subtitleShort: "ESP, radar i Aimbot dla Valorant PC",
					buyNow: "Kup teraz",
					seeFeatures: "Zobacz funkcje",
				},
				trust: {
					status: "Online",
					statusNote: "Pakiet Valorant Hacks jest aktywny dla Valorant na PC Windows.",
					statusShort: "Aktywny",
					delivery: "Natychmiastowa dostawa cyfrowa",
					platform: "Windows 10 i 11",
					antiCheat: "Wsparcie konserwacji Vanguard anti-cheat",
					antiCheatShort: "Vanguard anti-cheat wsparcie",
				},
				product: {
					title: "Valorant Hacks",
					addToCart: "Dodaj do koszyka",
					monthly: "Miesięcznie",
					lifetime: "Dożywotnio",
					available: "Dostępne teraz",
					gameBadge: "Valorant",
					platformBadge: "PC Windows",
					statusBadge: "Pakiet undetected",
				},
				reviews: {
					title: "Co mówią gracze",
					subtitle: "Ostatnie opinie kupujących Valorant Hacks",
					outOf: "na 5",
					countLabel: "opinii",
				},
				common: {
					buyNow: "Kup teraz",
					readGuide: "Czytaj poradnik",
					language: "Język",
					officialLanguageNote: "Angielski jest językiem oficjalnym. Inne wersje są tłumaczone dla globalnego SEO.",
					relatedPages: "Powiązane strony",
				},
				footer: {
					explore: "Odkrywaj",
					help: "Pomoc i prawo",
					tagline: "Undetected ESP, wallhack, radar i Aimbot dla Valorant — checkout przez Zadeyo.",
				},
				images: {
					hero: "Valorant Hacks hero — ESP and aimbot overlay in Valorant",
					espWallhack: "Wallhack outlines showing agents and enemies through walls",
					aimbotCombat: "Soft aim assist overlay during a Valorant round",
					squadFight: "Valorant Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Valorant match",
					headerArt: "Aimbot view and bone priority controls for Valorant",
					cheatsPackage: "2D radar threat overlay for Valorant",
					rebootFight: "Aimbot assist during a Valorant firefight",
					battleRoyale: "Valorant Hacks in-match overview for Windows PC",
					battleRoyaleIsland: "ESP markers for agents and the spike in Valorant",
				},
			},
			pages: {
				home: {
					title: "Valorant Hacks | Official PC Site",
					description: "Undetected cheaty Valorant dla Valorant na PC. ESP wallhack, radar hack i Aimbot z konserwacją Vanguard anti-cheat. Natychmiastowa dostawa cyfrowa.",
					h1: "Valorant Hacks",
					intro: "Pakiet undetected dla Valorant na Windows PC: ESP wallhack, radar i Aimbot z konserwacją Vanguard anti-cheat po każdym patchu.",
					imageAlt: "Valorant ESP player tags hack",
					galleryTitle: "Galeria Valorant Hacks — ESP, Aimbot i wallhack",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Kup Valorant Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Dlaczego Valorant Hacks w 2026",
							paragraphs: [
								"Valorant Hacks łączy ESP wallhack, radar hack i valorant aimbot jako pakiet undetected dla Valorant na PC Windows. Idealny do czytania wrogich squadów w Competitive i Deathmatch.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard anti-cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar i Aimbot w jednej licencji",
							paragraphs: [
								"Valorant Hacks łączy ESP wallhack, radar hack i valorant aimbot jako pakiet undetected dla Valorant na PC Windows. Jedna licencja zamiast osobnych narzędzi.",
								"Sprawdź Updates po patchach Vanguard anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
							],
						},
					],
				},
				"valorant-esp": {
					title: "ESP Valorant | Player Boxes & Wallhack",
					description: "ESP Valorant: player boxes, spike markers, and wallhack overlays. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "ESP Valorant",
					intro: "Valorant Hacks łączy ESP wallhack, radar hack i valorant aimbot jako pakiet undetected dla Valorant na PC Windows. ESP Valorant.",
					imageAlt: "Valorant ESP player boxes and distance readouts in a match",
					galleryTitle: "ESP Valorant",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Kup Valorant Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "ESP Valorant",
							paragraphs: [
								"Valorant Hacks łączy ESP wallhack, radar hack i valorant aimbot jako pakiet undetected dla Valorant na PC Windows. player boxes, spike markers, and wallhack overlays.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Vanguard anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard anti-cheat.",
								"support@valoranthack.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"valorant-aimbot": {
					title: "Aimbot Valorant | Soft Aim Controls",
					description: "Aimbot Valorant: soft aim, FOV, and per-weapon Aimbot profiles. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Aimbot Valorant",
					intro: "Valorant Hacks łączy ESP wallhack, radar hack i valorant aimbot jako pakiet undetected dla Valorant na PC Windows. Aimbot Valorant.",
					imageAlt: "Valorant aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Valorant",
					heroImage: "/images/valorant-hacks-aimbot.webp",
					ctaPrimary: "Kup Valorant Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Aimbot Valorant",
							paragraphs: [
								"Valorant Hacks łączy ESP wallhack, radar hack i valorant aimbot jako pakiet undetected dla Valorant na PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Vanguard anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard anti-cheat.",
								"support@valoranthack.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				features: {
					title: "Funkcje | Full Feature List",
					description: "Funkcje: ESP, soft aim, radar controls. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Funkcje",
					intro: "Valorant Hacks łączy ESP wallhack, radar hack i valorant aimbot jako pakiet undetected dla Valorant na PC Windows. Funkcje.",
					imageAlt: "Valorant Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funkcje",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Kup Valorant Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funkcje",
							paragraphs: [
								"Valorant Hacks łączy ESP wallhack, radar hack i valorant aimbot jako pakiet undetected dla Valorant na PC Windows. ESP, soft aim, radar controls.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Vanguard anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard anti-cheat.",
								"support@valoranthack.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				pricing: {
					title: "Cennik | Monthly & Lifetime",
					description: "Cennik: $35 monthly or $150 lifetime licenses. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Cennik",
					intro: "Valorant Hacks łączy ESP wallhack, radar hack i valorant aimbot jako pakiet undetected dla Valorant na PC Windows. Cennik.",
					imageAlt: "Valorant Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Cennik",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Kup Valorant Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Cennik",
							paragraphs: [
								"Valorant Hacks łączy ESP wallhack, radar hack i valorant aimbot jako pakiet undetected dla Valorant na PC Windows. $35 monthly or $150 lifetime licenses.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Vanguard anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard anti-cheat.",
								"support@valoranthack.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				setup: {
					title: "Instalacja | PC Setup Guide",
					description: "Instalacja: Windows PC activation and first-launch setup. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Instalacja",
					intro: "Valorant Hacks łączy ESP wallhack, radar hack i valorant aimbot jako pakiet undetected dla Valorant na PC Windows. Instalacja.",
					imageAlt: "Valorant Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Instalacja",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Kup Valorant Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalacja",
							paragraphs: [
								"Valorant Hacks łączy ESP wallhack, radar hack i valorant aimbot jako pakiet undetected dla Valorant na PC Windows. Windows PC activation and first-launch setup.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Vanguard anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard anti-cheat.",
								"support@valoranthack.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				updates: {
					title: "Aktualizacje | Vanguard Maintenance Log",
					description: "Aktualizacje: Vanguard patch status and rebuild notes. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Aktualizacje",
					intro: "Valorant Hacks łączy ESP wallhack, radar hack i valorant aimbot jako pakiet undetected dla Valorant na PC Windows. Aktualizacje.",
					imageAlt: "Valorant Hacks live status after Vanguard and game patches",
					galleryTitle: "Aktualizacje",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Kup Valorant Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "Aktualizacje",
							paragraphs: [
								"Valorant Hacks łączy ESP wallhack, radar hack i valorant aimbot jako pakiet undetected dla Valorant na PC Windows. Vanguard patch status and rebuild notes.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Vanguard anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard anti-cheat.",
								"support@valoranthack.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and Vanguard questions. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "FAQ",
					intro: "Valorant Hacks łączy ESP wallhack, radar hack i valorant aimbot jako pakiet undetected dla Valorant na PC Windows. FAQ.",
					imageAlt: "Valorant Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Kup Valorant Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Valorant Hacks łączy ESP wallhack, radar hack i valorant aimbot jako pakiet undetected dla Valorant na PC Windows. ESP, soft aim, delivery, and Vanguard questions.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Vanguard anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard anti-cheat.",
								"support@valoranthack.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				support: {
					title: "Wsparcie | Help & Contact",
					description: "Wsparcie: order help and license support contact. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Wsparcie",
					intro: "Valorant Hacks łączy ESP wallhack, radar hack i valorant aimbot jako pakiet undetected dla Valorant na PC Windows. Wsparcie.",
					imageAlt: "Valorant Hacks support page for license and setup help",
					galleryTitle: "Wsparcie",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Kup Valorant Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Wsparcie",
							paragraphs: [
								"Valorant Hacks łączy ESP wallhack, radar hack i valorant aimbot jako pakiet undetected dla Valorant na PC Windows. order help and license support contact.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Vanguard anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard anti-cheat.",
								"support@valoranthack.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				undetected: {
					title: "Cheaty undetected | Vanguard Safe Status",
					description: "Cheaty undetected: undetected maintenance after Vanguard anti-cheat patches. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Cheaty undetected",
					intro: "Valorant Hacks łączy ESP wallhack, radar hack i valorant aimbot jako pakiet undetected dla Valorant na PC Windows. Cheaty undetected.",
					imageAlt: "Valorant Hacks undetected status overview for Windows PC",
					galleryTitle: "Cheaty undetected",
					heroImage: "/images/valorant-hacks-wallhack.webp",
					ctaPrimary: "Kup Valorant Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "Cheaty undetected",
							paragraphs: [
								"Valorant Hacks łączy ESP wallhack, radar hack i valorant aimbot jako pakiet undetected dla Valorant na PC Windows. undetected maintenance after Vanguard anti-cheat patches.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Vanguard anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard anti-cheat.",
								"support@valoranthack.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Valorant | ESP Visibility",
					description: "Wallhack Valorant: wallhack ESP for players, spike, and distance. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Wallhack Valorant",
					intro: "Valorant Hacks łączy ESP wallhack, radar hack i valorant aimbot jako pakiet undetected dla Valorant na PC Windows. Wallhack Valorant.",
					imageAlt: "Valorant wallhack visibility through walls in a match",
					galleryTitle: "Wallhack Valorant",
					heroImage: "/images/valorant-hacks-wallhack.webp",
					ctaPrimary: "Kup Valorant Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Wallhack Valorant",
							paragraphs: [
								"Valorant Hacks łączy ESP wallhack, radar hack i valorant aimbot jako pakiet undetected dla Valorant na PC Windows. wallhack ESP for players, spike, and distance.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Vanguard anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard anti-cheat.",
								"support@valoranthack.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack Valorant | 2D Threat Overlay",
					description: "Radar hack Valorant: 2D radar cues for flanks and rotations. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Radar hack Valorant",
					intro: "Valorant Hacks łączy ESP wallhack, radar hack i valorant aimbot jako pakiet undetected dla Valorant na PC Windows. Radar hack Valorant.",
					imageAlt: "Valorant 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack Valorant",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Kup Valorant Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Radar hack Valorant",
							paragraphs: [
								"Valorant Hacks łączy ESP wallhack, radar hack i valorant aimbot jako pakiet undetected dla Valorant na PC Windows. 2D radar cues for flanks and rotations.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Vanguard anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard anti-cheat.",
								"support@valoranthack.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				vanguard: {
					title: "Bypass Vanguard | Patch Maintenance",
					description: "Bypass Vanguard: how Vanguard updates are handled for Valorant hacks. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Bypass Vanguard",
					intro: "Valorant Hacks łączy ESP wallhack, radar hack i valorant aimbot jako pakiet undetected dla Valorant na PC Windows. Bypass Vanguard.",
					imageAlt: "Valorant Hacks maintenance after a Vanguard patch",
					galleryTitle: "Bypass Vanguard",
					heroImage: "/images/valorant-hacks-aimbot.webp",
					ctaPrimary: "Kup Valorant Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Vanguard",
							paragraphs: [
								"Valorant Hacks łączy ESP wallhack, radar hack i valorant aimbot jako pakiet undetected dla Valorant na PC Windows. how Vanguard updates are handled for Valorant hacks.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Vanguard anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard anti-cheat.",
								"support@valoranthack.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheaty Valorant 2026 | Buyer Guide",
					description: "Cheaty Valorant 2026: 2026 Valorant hacks checklist before checkout. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Cheaty Valorant 2026",
					intro: "Valorant Hacks łączy ESP wallhack, radar hack i valorant aimbot jako pakiet undetected dla Valorant na PC Windows. Cheaty Valorant 2026.",
					imageAlt: "Valorant Hacks product overview for Valorant",
					galleryTitle: "Cheaty Valorant 2026",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Kup Valorant Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "Cheaty Valorant 2026",
							paragraphs: [
								"Valorant Hacks łączy ESP wallhack, radar hack i valorant aimbot jako pakiet undetected dla Valorant na PC Windows. 2026 Valorant hacks checklist before checkout.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Vanguard anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard anti-cheat.",
								"support@valoranthack.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				hacks: {
					title: "Cheaty Valorant | ESP Aimbot Guide",
					description: "Cheaty Valorant: the Valorant hacks pillar for ESP and Aimbot. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Cheaty Valorant",
					intro: "Valorant Hacks łączy ESP wallhack, radar hack i valorant aimbot jako pakiet undetected dla Valorant na PC Windows. Cheaty Valorant.",
					imageAlt: "Valorant Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Cheaty Valorant",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Kup Valorant Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheaty Valorant",
							paragraphs: [
								"Valorant Hacks łączy ESP wallhack, radar hack i valorant aimbot jako pakiet undetected dla Valorant na PC Windows. the Valorant hacks pillar for ESP and Aimbot.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Vanguard anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard anti-cheat.",
								"support@valoranthack.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Pobieranie Valorant Hacks | Instant Access",
					description: "Pobieranie Valorant Hacks: digital license download after payment. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Pobieranie Valorant Hacks",
					intro: "Valorant Hacks łączy ESP wallhack, radar hack i valorant aimbot jako pakiet undetected dla Valorant na PC Windows. Pobieranie Valorant Hacks.",
					imageAlt: "Valorant Hacks download and install delivery flow",
					galleryTitle: "Pobieranie Valorant Hacks",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Kup Valorant Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Pobieranie Valorant Hacks",
							paragraphs: [
								"Valorant Hacks łączy ESP wallhack, radar hack i valorant aimbot jako pakiet undetected dla Valorant na PC Windows. digital license download after payment.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Vanguard anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard anti-cheat.",
								"support@valoranthack.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Mod menu Valorant | In-Game Toggles",
					description: "Mod menu Valorant: in-client ESP and soft aim toggles. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Mod menu Valorant",
					intro: "Valorant Hacks łączy ESP wallhack, radar hack i valorant aimbot jako pakiet undetected dla Valorant na PC Windows. Mod menu Valorant.",
					imageAlt: "Valorant Hacks in-game menu controls",
					galleryTitle: "Mod menu Valorant",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Kup Valorant Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mod menu Valorant",
							paragraphs: [
								"Valorant Hacks łączy ESP wallhack, radar hack i valorant aimbot jako pakiet undetected dla Valorant na PC Windows. in-client ESP and soft aim toggles.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Vanguard anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard anti-cheat.",
								"support@valoranthack.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Valorant | Smooth Aim Settings",
					description: "Soft aim Valorant: smooth soft aim settings for Windows PC. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Soft aim Valorant",
					intro: "Valorant Hacks łączy ESP wallhack, radar hack i valorant aimbot jako pakiet undetected dla Valorant na PC Windows. Soft aim Valorant.",
					imageAlt: "Valorant soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Valorant",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Kup Valorant Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/valorant-aimbot/",
					sections: [
						{
							h2: "Soft aim Valorant",
							paragraphs: [
								"Valorant Hacks łączy ESP wallhack, radar hack i valorant aimbot jako pakiet undetected dla Valorant na PC Windows. smooth soft aim settings for Windows PC.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Vanguard anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard anti-cheat.",
								"support@valoranthack.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Najlepsze cheaty Valorant | Buyer Checklist",
					description: "Najlepsze cheaty Valorant: what to compare before buying Valorant hacks. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Najlepsze cheaty Valorant",
					intro: "Valorant Hacks łączy ESP wallhack, radar hack i valorant aimbot jako pakiet undetected dla Valorant na PC Windows. Najlepsze cheaty Valorant.",
					imageAlt: "Valorant Hacks overview for Valorant on PC",
					galleryTitle: "Najlepsze cheaty Valorant",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Kup Valorant Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Najlepsze cheaty Valorant",
							paragraphs: [
								"Valorant Hacks łączy ESP wallhack, radar hack i valorant aimbot jako pakiet undetected dla Valorant na PC Windows. what to compare before buying Valorant hacks.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Vanguard anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard anti-cheat.",
								"support@valoranthack.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Valorant | Soft Aim Assist",
					description: "Hack aimbot Valorant: undetected Aimbot hack assist for Valorant. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Hack aimbot Valorant",
					intro: "Valorant Hacks łączy ESP wallhack, radar hack i valorant aimbot jako pakiet undetected dla Valorant na PC Windows. Hack aimbot Valorant.",
					imageAlt: "Valorant aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Valorant",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Kup Valorant Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/valorant-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Valorant",
							paragraphs: [
								"Valorant Hacks łączy ESP wallhack, radar hack i valorant aimbot jako pakiet undetected dla Valorant na PC Windows. undetected Aimbot hack assist for Valorant.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Vanguard anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard anti-cheat.",
								"support@valoranthack.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Valorant | Boxes & Spike",
					description: "Hack ESP Valorant: ESP hack boxes, spike markers, and distance. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Hack ESP Valorant",
					intro: "Valorant Hacks łączy ESP wallhack, radar hack i valorant aimbot jako pakiet undetected dla Valorant na PC Windows. Hack ESP Valorant.",
					imageAlt: "Valorant ESP hack boxes and spike markers",
					galleryTitle: "Hack ESP Valorant",
					heroImage: "/images/valorant-hacks-wallhack.webp",
					ctaPrimary: "Kup Valorant Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Hack ESP Valorant",
							paragraphs: [
								"Valorant Hacks łączy ESP wallhack, radar hack i valorant aimbot jako pakiet undetected dla Valorant na PC Windows. ESP hack boxes, spike markers, and distance.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Vanguard anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard anti-cheat.",
								"support@valoranthack.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Valorant | What It Means",
					description: "Unlock all Valorant: unlock-all searches vs real ESP and Aimbot tools. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Unlock all Valorant",
					intro: "Valorant Hacks łączy ESP wallhack, radar hack i valorant aimbot jako pakiet undetected dla Valorant na PC Windows. Unlock all Valorant.",
					imageAlt: "Valorant Hacks license features overview",
					galleryTitle: "Unlock all Valorant",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Kup Valorant Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Valorant",
							paragraphs: [
								"Valorant Hacks łączy ESP wallhack, radar hack i valorant aimbot jako pakiet undetected dla Valorant na PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Vanguard anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard anti-cheat.",
								"support@valoranthack.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				privacy: {
					title: "Polityka prywatności | Valorant Hacks",
					description: "Polityka prywatności for Valorant Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Polityka prywatności",
					intro: "Valorant Hacks łączy ESP wallhack, radar hack i valorant aimbot jako pakiet undetected dla Valorant na PC Windows. Polityka prywatności for valoranthack.net and Valorant licenses.",
					imageAlt: "valorant hacks",
					galleryTitle: "valorant hacks",
					heroImage: "/images/valorant-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Valorant Hacks łączy ESP wallhack, radar hack i valorant aimbot jako pakiet undetected dla Valorant na PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on valoranthack.net.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Valorant Hacks łączy ESP wallhack, radar hack i valorant aimbot jako pakiet undetected dla Valorant na PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Sprawdź Updates po patchach Vanguard anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@valoranthack.net w sprawach wsparcia i prawnych.",
								"Email: support@valoranthack.net",
							],
						},
					],
				},
				refund: {
					title: "Polityka zwrotów | Valorant Hacks",
					description: "Polityka zwrotów for Valorant Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Polityka zwrotów",
					intro: "Valorant Hacks łączy ESP wallhack, radar hack i valorant aimbot jako pakiet undetected dla Valorant na PC Windows. Polityka zwrotów for valoranthack.net and Valorant licenses.",
					imageAlt: "valorant hacks",
					galleryTitle: "valorant hacks",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Valorant Hacks łączy ESP wallhack, radar hack i valorant aimbot jako pakiet undetected dla Valorant na PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard anti-cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Valorant Hacks łączy ESP wallhack, radar hack i valorant aimbot jako pakiet undetected dla Valorant na PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Sprawdź Updates po patchach Vanguard anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@valoranthack.net w sprawach wsparcia i prawnych.",
								"Email: support@valoranthack.net",
							],
						},
					],
				},
				terms: {
					title: "Warunki użytkowania | Valorant Hacks",
					description: "Warunki użytkowania for Valorant Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Warunki użytkowania",
					intro: "Valorant Hacks łączy ESP wallhack, radar hack i valorant aimbot jako pakiet undetected dla Valorant na PC Windows. Warunki użytkowania for valoranthack.net and Valorant licenses.",
					imageAlt: "valorant hacks",
					galleryTitle: "valorant hacks",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Valorant Hacks łączy ESP wallhack, radar hack i valorant aimbot jako pakiet undetected dla Valorant na PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard anti-cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Valorant Hacks łączy ESP wallhack, radar hack i valorant aimbot jako pakiet undetected dla Valorant na PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Riot Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@valoranthack.net w sprawach wsparcia i prawnych.",
								"Email: support@valoranthack.net",
							],
						},
					],
				},
			},
		},
		ru: {
			ui: {
				nav: {
					home: "Главная",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Функции",
					pricing: "Цены",
					setup: "Установка",
					updates: "Обновления",
					faq: "FAQ",
					buyNow: "Купить",
				},
				hero: {
					accent: "Undetected читы Valorant",
					accentShort: "Valorant Hacks",
					subtitle: "ESP wallhack, radar hack и Aimbot для Valorant на Windows PC — обслуживание Vanguard anti-cheat включено.",
					subtitleShort: "ESP, radar и Aimbot для Valorant PC",
					buyNow: "Купить",
					seeFeatures: "Смотреть функции",
				},
				trust: {
					status: "Онлайн",
					statusNote: "Пакет Valorant Hacks активен для Valorant на Windows PC.",
					statusShort: "Активен",
					delivery: "Мгновенная цифровая доставка",
					platform: "Windows 10 и 11",
					antiCheat: "Поддержка обслуживания Vanguard anti-cheat",
					antiCheatShort: "Vanguard anti-cheat поддержка",
				},
				product: {
					title: "Valorant Hacks",
					addToCart: "В корзину",
					monthly: "Месяц",
					lifetime: "Навсегда",
					available: "Доступно сейчас",
					gameBadge: "Valorant",
					platformBadge: "Windows PC",
					statusBadge: "Undetected пакет",
				},
				reviews: {
					title: "Что говорят игроки",
					subtitle: "Недавние отзывы покупателей Valorant Hacks",
					outOf: "из 5",
					countLabel: "отзывов",
				},
				common: {
					buyNow: "Купить",
					readGuide: "Читать гайд",
					language: "Язык",
					officialLanguageNote: "Английский — официальный язык. Другие версии переведены для глобального SEO.",
					relatedPages: "Похожие страницы",
				},
				footer: {
					explore: "Обзор",
					help: "Помощь и право",
					tagline: "Undetected ESP, wallhack, radar и Aimbot для Valorant — оплата через Zadeyo.",
				},
				images: {
					hero: "Valorant Hacks hero — ESP and aimbot overlay in Valorant",
					espWallhack: "Wallhack outlines showing agents and enemies through walls",
					aimbotCombat: "Soft aim assist overlay during a Valorant round",
					squadFight: "Valorant Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Valorant match",
					headerArt: "Aimbot view and bone priority controls for Valorant",
					cheatsPackage: "2D radar threat overlay for Valorant",
					rebootFight: "Aimbot assist during a Valorant firefight",
					battleRoyale: "Valorant Hacks in-match overview for Windows PC",
					battleRoyaleIsland: "ESP markers for agents and the spike in Valorant",
				},
			},
			pages: {
				home: {
					title: "Valorant Hacks | Official PC Site",
					description: "Undetected читы Valorant для Valorant на PC. ESP wallhack, radar hack и Aimbot с обслуживанием Vanguard anti-cheat. Мгновенная цифровая доставка.",
					h1: "Valorant Hacks",
					intro: "Undetected пакет для Valorant на Windows PC: ESP wallhack, radar и Aimbot с обслуживанием Vanguard anti-cheat после патчей.",
					imageAlt: "Valorant ESP player tags hack",
					galleryTitle: "Галерея Valorant Hacks — ESP, Aimbot и wallhack",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Купить Valorant Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Почему выбирают Valorant Hacks в 2026",
							paragraphs: [
								"Valorant Hacks объединяет ESP wallhack, radar hack и valorant aimbot в undetected пакете для Valorant на Windows PC. Идеально для чтения вражеских отрядов в Competitive и Deathmatch.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard anti-cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar и Aimbot в одной лицензии",
							paragraphs: [
								"Valorant Hacks объединяет ESP wallhack, radar hack и valorant aimbot в undetected пакете для Valorant на Windows PC. Одна лицензия вместо отдельных инструментов.",
								"Проверяйте Updates после патчей Vanguard anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
							],
						},
					],
				},
				"valorant-esp": {
					title: "ESP Valorant | Боксы игроков и wallhack",
					description: "ESP Valorant: player boxes, spike markers, and wallhack overlays. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "ESP Valorant",
					intro: "Valorant Hacks объединяет ESP wallhack, radar hack и valorant aimbot в undetected пакете для Valorant на Windows PC. ESP Valorant.",
					imageAlt: "Valorant ESP player boxes and distance readouts in a match",
					galleryTitle: "ESP Valorant",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Купить Valorant Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "ESP Valorant",
							paragraphs: [
								"Valorant Hacks объединяет ESP wallhack, radar hack и valorant aimbot в undetected пакете для Valorant на Windows PC. player boxes, spike markers, and wallhack overlays.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Vanguard anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard anti-cheat.",
								"support@valoranthack.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"valorant-aimbot": {
					title: "Aimbot Valorant | Управление soft aim",
					description: "Aimbot Valorant: soft aim, FOV, and per-weapon Aimbot profiles. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Aimbot Valorant",
					intro: "Valorant Hacks объединяет ESP wallhack, radar hack и valorant aimbot в undetected пакете для Valorant на Windows PC. Aimbot Valorant.",
					imageAlt: "Valorant aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Valorant",
					heroImage: "/images/valorant-hacks-aimbot.webp",
					ctaPrimary: "Купить Valorant Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Aimbot Valorant",
							paragraphs: [
								"Valorant Hacks объединяет ESP wallhack, radar hack и valorant aimbot в undetected пакете для Valorant на Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Vanguard anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard anti-cheat.",
								"support@valoranthack.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				features: {
					title: "Функции | Полный список функций",
					description: "Функции: ESP, soft aim, radar controls. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Функции",
					intro: "Valorant Hacks объединяет ESP wallhack, radar hack и valorant aimbot в undetected пакете для Valorant на Windows PC. Функции.",
					imageAlt: "Valorant Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Функции",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Купить Valorant Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Функции",
							paragraphs: [
								"Valorant Hacks объединяет ESP wallhack, radar hack и valorant aimbot в undetected пакете для Valorant на Windows PC. ESP, soft aim, radar controls.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Vanguard anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard anti-cheat.",
								"support@valoranthack.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				pricing: {
					title: "Цены | Месяц и lifetime",
					description: "Цены: $35 monthly or $150 lifetime licenses. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Цены",
					intro: "Valorant Hacks объединяет ESP wallhack, radar hack и valorant aimbot в undetected пакете для Valorant на Windows PC. Цены.",
					imageAlt: "Valorant Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Цены",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Купить Valorant Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Цены",
							paragraphs: [
								"Valorant Hacks объединяет ESP wallhack, radar hack и valorant aimbot в undetected пакете для Valorant на Windows PC. $35 monthly or $150 lifetime licenses.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Vanguard anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard anti-cheat.",
								"support@valoranthack.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				setup: {
					title: "Установка | Гайд по установке",
					description: "Установка: Windows PC activation and first-launch setup. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Установка",
					intro: "Valorant Hacks объединяет ESP wallhack, radar hack и valorant aimbot в undetected пакете для Valorant на Windows PC. Установка.",
					imageAlt: "Valorant Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Установка",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Купить Valorant Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Установка",
							paragraphs: [
								"Valorant Hacks объединяет ESP wallhack, radar hack и valorant aimbot в undetected пакете для Valorant на Windows PC. Windows PC activation and first-launch setup.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Vanguard anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard anti-cheat.",
								"support@valoranthack.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				updates: {
					title: "Обновления | Журнал Vanguard",
					description: "Обновления: Vanguard patch status and rebuild notes. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Обновления",
					intro: "Valorant Hacks объединяет ESP wallhack, radar hack и valorant aimbot в undetected пакете для Valorant на Windows PC. Обновления.",
					imageAlt: "Valorant Hacks live status after Vanguard and game patches",
					galleryTitle: "Обновления",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Купить Valorant Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "Обновления",
							paragraphs: [
								"Valorant Hacks объединяет ESP wallhack, radar hack и valorant aimbot в undetected пакете для Valorant на Windows PC. Vanguard patch status and rebuild notes.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Vanguard anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard anti-cheat.",
								"support@valoranthack.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Частые вопросы",
					description: "FAQ: ESP, soft aim, delivery, and Vanguard questions. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Valorant Hacks объединяет ESP wallhack, radar hack и valorant aimbot в undetected пакете для Valorant на Windows PC. FAQ.",
					imageAlt: "Valorant Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Купить Valorant Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Valorant Hacks объединяет ESP wallhack, radar hack и valorant aimbot в undetected пакете для Valorant на Windows PC. ESP, soft aim, delivery, and Vanguard questions.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Vanguard anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard anti-cheat.",
								"support@valoranthack.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				support: {
					title: "Поддержка | Помощь и контакт",
					description: "Поддержка: order help and license support contact. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Поддержка",
					intro: "Valorant Hacks объединяет ESP wallhack, radar hack и valorant aimbot в undetected пакете для Valorant на Windows PC. Поддержка.",
					imageAlt: "Valorant Hacks support page for license and setup help",
					galleryTitle: "Поддержка",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Купить Valorant Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Поддержка",
							paragraphs: [
								"Valorant Hacks объединяет ESP wallhack, radar hack и valorant aimbot в undetected пакете для Valorant на Windows PC. order help and license support contact.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Vanguard anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard anti-cheat.",
								"support@valoranthack.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected читы | Статус undetected",
					description: "Undetected читы: undetected maintenance after Vanguard anti-cheat patches. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Undetected читы",
					intro: "Valorant Hacks объединяет ESP wallhack, radar hack и valorant aimbot в undetected пакете для Valorant на Windows PC. Undetected читы.",
					imageAlt: "Valorant Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected читы",
					heroImage: "/images/valorant-hacks-wallhack.webp",
					ctaPrimary: "Купить Valorant Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "Undetected читы",
							paragraphs: [
								"Valorant Hacks объединяет ESP wallhack, radar hack и valorant aimbot в undetected пакете для Valorant на Windows PC. undetected maintenance after Vanguard anti-cheat patches.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Vanguard anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard anti-cheat.",
								"support@valoranthack.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Valorant | Видимость ESP",
					description: "Wallhack Valorant: wallhack ESP for players, spike, and distance. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Wallhack Valorant",
					intro: "Valorant Hacks объединяет ESP wallhack, radar hack и valorant aimbot в undetected пакете для Valorant на Windows PC. Wallhack Valorant.",
					imageAlt: "Valorant wallhack visibility through walls in a match",
					galleryTitle: "Wallhack Valorant",
					heroImage: "/images/valorant-hacks-wallhack.webp",
					ctaPrimary: "Купить Valorant Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Wallhack Valorant",
							paragraphs: [
								"Valorant Hacks объединяет ESP wallhack, radar hack и valorant aimbot в undetected пакете для Valorant на Windows PC. wallhack ESP for players, spike, and distance.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Vanguard anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard anti-cheat.",
								"support@valoranthack.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack Valorant | 2D радар угроз",
					description: "Radar hack Valorant: 2D radar cues for flanks and rotations. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Radar hack Valorant",
					intro: "Valorant Hacks объединяет ESP wallhack, radar hack и valorant aimbot в undetected пакете для Valorant на Windows PC. Radar hack Valorant.",
					imageAlt: "Valorant 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack Valorant",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Купить Valorant Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Radar hack Valorant",
							paragraphs: [
								"Valorant Hacks объединяет ESP wallhack, radar hack и valorant aimbot в undetected пакете для Valorant на Windows PC. 2D radar cues for flanks and rotations.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Vanguard anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard anti-cheat.",
								"support@valoranthack.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				vanguard: {
					title: "Bypass Vanguard | Обслуживание патчей",
					description: "Bypass Vanguard: how Vanguard updates are handled for Valorant hacks. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Bypass Vanguard",
					intro: "Valorant Hacks объединяет ESP wallhack, radar hack и valorant aimbot в undetected пакете для Valorant на Windows PC. Bypass Vanguard.",
					imageAlt: "Valorant Hacks maintenance after a Vanguard patch",
					galleryTitle: "Bypass Vanguard",
					heroImage: "/images/valorant-hacks-aimbot.webp",
					ctaPrimary: "Купить Valorant Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Vanguard",
							paragraphs: [
								"Valorant Hacks объединяет ESP wallhack, radar hack и valorant aimbot в undetected пакете для Valorant на Windows PC. how Vanguard updates are handled for Valorant hacks.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Vanguard anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard anti-cheat.",
								"support@valoranthack.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Читы Valorant 2026 | Гайд покупателя",
					description: "Читы Valorant 2026: 2026 Valorant hacks checklist before checkout. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Читы Valorant 2026",
					intro: "Valorant Hacks объединяет ESP wallhack, radar hack и valorant aimbot в undetected пакете для Valorant на Windows PC. Читы Valorant 2026.",
					imageAlt: "Valorant Hacks product overview for Valorant",
					galleryTitle: "Читы Valorant 2026",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Купить Valorant Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "Читы Valorant 2026",
							paragraphs: [
								"Valorant Hacks объединяет ESP wallhack, radar hack и valorant aimbot в undetected пакете для Valorant на Windows PC. 2026 Valorant hacks checklist before checkout.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Vanguard anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard anti-cheat.",
								"support@valoranthack.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				hacks: {
					title: "Читы Valorant | Гайд ESP и Aimbot",
					description: "Читы Valorant: the Valorant hacks pillar for ESP and Aimbot. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Читы Valorant",
					intro: "Valorant Hacks объединяет ESP wallhack, radar hack и valorant aimbot в undetected пакете для Valorant на Windows PC. Читы Valorant.",
					imageAlt: "Valorant Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Читы Valorant",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Купить Valorant Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Читы Valorant",
							paragraphs: [
								"Valorant Hacks объединяет ESP wallhack, radar hack и valorant aimbot в undetected пакете для Valorant на Windows PC. the Valorant hacks pillar for ESP and Aimbot.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Vanguard anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard anti-cheat.",
								"support@valoranthack.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Скачать Valorant Hacks | Мгновенный доступ",
					description: "Скачать Valorant Hacks: digital license download after payment. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Скачать Valorant Hacks",
					intro: "Valorant Hacks объединяет ESP wallhack, radar hack и valorant aimbot в undetected пакете для Valorant на Windows PC. Скачать Valorant Hacks.",
					imageAlt: "Valorant Hacks download and install delivery flow",
					galleryTitle: "Скачать Valorant Hacks",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Купить Valorant Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Скачать Valorant Hacks",
							paragraphs: [
								"Valorant Hacks объединяет ESP wallhack, radar hack и valorant aimbot в undetected пакете для Valorant на Windows PC. digital license download after payment.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Vanguard anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard anti-cheat.",
								"support@valoranthack.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Мод-меню Valorant | Игровые переключатели",
					description: "Мод-меню Valorant: in-client ESP and soft aim toggles. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Мод-меню Valorant",
					intro: "Valorant Hacks объединяет ESP wallhack, radar hack и valorant aimbot в undetected пакете для Valorant на Windows PC. Мод-меню Valorant.",
					imageAlt: "Valorant Hacks in-game menu controls",
					galleryTitle: "Мод-меню Valorant",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Купить Valorant Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Мод-меню Valorant",
							paragraphs: [
								"Valorant Hacks объединяет ESP wallhack, radar hack и valorant aimbot в undetected пакете для Valorant на Windows PC. in-client ESP and soft aim toggles.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Vanguard anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard anti-cheat.",
								"support@valoranthack.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Valorant | Настройки soft aim",
					description: "Soft aim Valorant: smooth soft aim settings for Windows PC. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Soft aim Valorant",
					intro: "Valorant Hacks объединяет ESP wallhack, radar hack и valorant aimbot в undetected пакете для Valorant на Windows PC. Soft aim Valorant.",
					imageAlt: "Valorant soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Valorant",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Купить Valorant Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/valorant-aimbot/",
					sections: [
						{
							h2: "Soft aim Valorant",
							paragraphs: [
								"Valorant Hacks объединяет ESP wallhack, radar hack и valorant aimbot в undetected пакете для Valorant на Windows PC. smooth soft aim settings for Windows PC.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Vanguard anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard anti-cheat.",
								"support@valoranthack.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Лучшие читы Valorant | Чеклист покупателя",
					description: "Лучшие читы Valorant: what to compare before buying Valorant hacks. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Лучшие читы Valorant",
					intro: "Valorant Hacks объединяет ESP wallhack, radar hack и valorant aimbot в undetected пакете для Valorant на Windows PC. Лучшие читы Valorant.",
					imageAlt: "Valorant Hacks overview for Valorant on PC",
					galleryTitle: "Лучшие читы Valorant",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Купить Valorant Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Лучшие читы Valorant",
							paragraphs: [
								"Valorant Hacks объединяет ESP wallhack, radar hack и valorant aimbot в undetected пакете для Valorant на Windows PC. what to compare before buying Valorant hacks.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Vanguard anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard anti-cheat.",
								"support@valoranthack.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Хак aimbot Valorant | Soft aim ассист",
					description: "Хак aimbot Valorant: undetected Aimbot hack assist for Valorant. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Хак aimbot Valorant",
					intro: "Valorant Hacks объединяет ESP wallhack, radar hack и valorant aimbot в undetected пакете для Valorant на Windows PC. Хак aimbot Valorant.",
					imageAlt: "Valorant aimbot hack controls and bone priority",
					galleryTitle: "Хак aimbot Valorant",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Купить Valorant Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/valorant-aimbot/",
					sections: [
						{
							h2: "Хак aimbot Valorant",
							paragraphs: [
								"Valorant Hacks объединяет ESP wallhack, radar hack и valorant aimbot в undetected пакете для Valorant на Windows PC. undetected Aimbot hack assist for Valorant.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Vanguard anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard anti-cheat.",
								"support@valoranthack.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Хак ESP Valorant | Боксы и spike",
					description: "Хак ESP Valorant: ESP hack boxes, spike markers, and distance. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Хак ESP Valorant",
					intro: "Valorant Hacks объединяет ESP wallhack, radar hack и valorant aimbot в undetected пакете для Valorant на Windows PC. Хак ESP Valorant.",
					imageAlt: "Valorant ESP hack boxes and spike markers",
					galleryTitle: "Хак ESP Valorant",
					heroImage: "/images/valorant-hacks-wallhack.webp",
					ctaPrimary: "Купить Valorant Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Хак ESP Valorant",
							paragraphs: [
								"Valorant Hacks объединяет ESP wallhack, radar hack и valorant aimbot в undetected пакете для Valorant на Windows PC. ESP hack boxes, spike markers, and distance.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Vanguard anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard anti-cheat.",
								"support@valoranthack.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Valorant | Что это значит",
					description: "Unlock all Valorant: unlock-all searches vs real ESP and Aimbot tools. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Unlock all Valorant",
					intro: "Valorant Hacks объединяет ESP wallhack, radar hack и valorant aimbot в undetected пакете для Valorant на Windows PC. Unlock all Valorant.",
					imageAlt: "Valorant Hacks license features overview",
					galleryTitle: "Unlock all Valorant",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Купить Valorant Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Valorant",
							paragraphs: [
								"Valorant Hacks объединяет ESP wallhack, radar hack и valorant aimbot в undetected пакете для Valorant на Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Vanguard anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard anti-cheat.",
								"support@valoranthack.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				privacy: {
					title: "Политика конфиденциальности | Valorant Hacks",
					description: "Политика конфиденциальности for Valorant Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Политика конфиденциальности",
					intro: "Valorant Hacks объединяет ESP wallhack, radar hack и valorant aimbot в undetected пакете для Valorant на Windows PC. Политика конфиденциальности for valoranthack.net and Valorant licenses.",
					imageAlt: "valorant hacks",
					galleryTitle: "valorant hacks",
					heroImage: "/images/valorant-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Valorant Hacks объединяет ESP wallhack, radar hack и valorant aimbot в undetected пакете для Valorant на Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on valoranthack.net.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Valorant Hacks объединяет ESP wallhack, radar hack и valorant aimbot в undetected пакете для Valorant на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Проверяйте Updates после патчей Vanguard anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@valoranthack.net для поддержки и юридических вопросов.",
								"Email: support@valoranthack.net",
							],
						},
					],
				},
				refund: {
					title: "Политика возврата | Valorant Hacks",
					description: "Политика возврата for Valorant Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Политика возврата",
					intro: "Valorant Hacks объединяет ESP wallhack, radar hack и valorant aimbot в undetected пакете для Valorant на Windows PC. Политика возврата for valoranthack.net and Valorant licenses.",
					imageAlt: "valorant hacks",
					galleryTitle: "valorant hacks",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Valorant Hacks объединяет ESP wallhack, radar hack и valorant aimbot в undetected пакете для Valorant на Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard anti-cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Valorant Hacks объединяет ESP wallhack, radar hack и valorant aimbot в undetected пакете для Valorant на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Проверяйте Updates после патчей Vanguard anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@valoranthack.net для поддержки и юридических вопросов.",
								"Email: support@valoranthack.net",
							],
						},
					],
				},
				terms: {
					title: "Условия использования | Valorant Hacks",
					description: "Условия использования for Valorant Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Условия использования",
					intro: "Valorant Hacks объединяет ESP wallhack, radar hack и valorant aimbot в undetected пакете для Valorant на Windows PC. Условия использования for valoranthack.net and Valorant licenses.",
					imageAlt: "valorant hacks",
					galleryTitle: "valorant hacks",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Valorant Hacks объединяет ESP wallhack, radar hack и valorant aimbot в undetected пакете для Valorant на Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard anti-cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Valorant Hacks объединяет ESP wallhack, radar hack и valorant aimbot в undetected пакете для Valorant на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Riot Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@valoranthack.net для поддержки и юридических вопросов.",
								"Email: support@valoranthack.net",
							],
						},
					],
				},
			},
		},
		tr: {
			ui: {
				nav: {
					home: "Ana sayfa",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Özellikler",
					pricing: "Fiyatlar",
					setup: "Kurulum",
					updates: "Güncellemeler",
					faq: "SSS",
					buyNow: "Satın al",
				},
				hero: {
					accent: "Undetected Valorant hileleri",
					accentShort: "Valorant Hacks",
					subtitle: "Valorant Windows PC için ESP wallhack, radar hack ve Aimbot — Vanguard anti-cheat bakımı dahil.",
					subtitleShort: "Valorant PC için ESP, radar ve Aimbot",
					buyNow: "Satın al",
					seeFeatures: "Özellikleri gör",
				},
				trust: {
					status: "Çevrimiçi",
					statusNote: "Valorant Hacks paketi Valorant Windows PC için aktif.",
					statusShort: "Aktif",
					delivery: "Anında dijital teslimat",
					platform: "Windows 10 ve 11",
					antiCheat: "Vanguard anti-cheat bakım desteği",
					antiCheatShort: "Vanguard anti-cheat destek",
				},
				product: {
					title: "Valorant Hacks",
					addToCart: "Sepete ekle",
					monthly: "Aylık",
					lifetime: "Ömür boyu",
					available: "Şimdi mevcut",
					gameBadge: "Valorant",
					platformBadge: "Windows PC",
					statusBadge: "Undetected paket",
				},
				reviews: {
					title: "Oyuncular ne diyor",
					subtitle: "Valorant Hacks alıcılarından son geri bildirimler",
					outOf: "/5",
					countLabel: "yorum",
				},
				common: {
					buyNow: "Satın al",
					readGuide: "Rehberi oku",
					language: "Dil",
					officialLanguageNote: "Resmi dil İngilizcedir. Diğer diller küresel SEO için çevrilmiştir.",
					relatedPages: "İlgili sayfalar",
				},
				footer: {
					explore: "Keşfet",
					help: "Yardım ve yasal",
					tagline: "Valorant için undetected ESP, wallhack, radar ve Aimbot — Zadeyo checkout.",
				},
				images: {
					hero: "Valorant Hacks hero — ESP and aimbot overlay in Valorant",
					espWallhack: "Wallhack outlines showing agents and enemies through walls",
					aimbotCombat: "Soft aim assist overlay during a Valorant round",
					squadFight: "Valorant Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Valorant match",
					headerArt: "Aimbot view and bone priority controls for Valorant",
					cheatsPackage: "2D radar threat overlay for Valorant",
					rebootFight: "Aimbot assist during a Valorant firefight",
					battleRoyale: "Valorant Hacks in-match overview for Windows PC",
					battleRoyaleIsland: "ESP markers for agents and the spike in Valorant",
				},
			},
			pages: {
				home: {
					title: "Valorant Hacks | Official PC Site",
					description: "Valorant için undetected hileler. ESP wallhack, radar hack ve Aimbot — Vanguard anti-cheat bakımı. Anında dijital teslimat.",
					h1: "Valorant Hacks",
					intro: "Valorant Windows PC undetected paketi: ESP wallhack, radar ve Aimbot — Vanguard anti-cheat bakımı dahil.",
					imageAlt: "Valorant ESP player tags hack",
					galleryTitle: "Valorant Hacks galeri — ESP, Aimbot ve wallhack",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Valorant Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026'da neden Valorant Hacks",
							paragraphs: [
								"Valorant Hacks, Valorant için Windows PC üzerinde ESP wallhack, radar hack ve valorant aimbot undetected paket sunar. Competitive ve Deathmatch'da düşman squad okumak için ideal.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "ESP wallhack, radar ve Aimbot tek lisans",
							paragraphs: [
								"Valorant Hacks, Valorant için Windows PC üzerinde ESP wallhack, radar hack ve valorant aimbot undetected paket sunar. Ayrı araçlar yerine tek lisans.",
								"Vanguard anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
							],
						},
					],
				},
				"valorant-esp": {
					title: "Valorant ESP | Player Boxes & Wallhack",
					description: "Valorant ESP: player boxes, spike markers, and wallhack overlays. anında dijital teslimat. undetected — Windows PC.",
					h1: "Valorant ESP",
					intro: "Valorant Hacks, Valorant için Windows PC üzerinde ESP wallhack, radar hack ve valorant aimbot undetected paket sunar. Valorant ESP.",
					imageAlt: "Valorant ESP player boxes and distance readouts in a match",
					galleryTitle: "Valorant ESP",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Valorant Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "Valorant ESP",
							paragraphs: [
								"Valorant Hacks, Valorant için Windows PC üzerinde ESP wallhack, radar hack ve valorant aimbot undetected paket sunar. player boxes, spike markers, and wallhack overlays.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@valoranthack.net.",
							],
						},
					],
				},
				"valorant-aimbot": {
					title: "Valorant Aimbot | Soft Aim Controls",
					description: "Valorant Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. anında dijital teslimat. undetected — Windows PC.",
					h1: "Valorant Aimbot",
					intro: "Valorant Hacks, Valorant için Windows PC üzerinde ESP wallhack, radar hack ve valorant aimbot undetected paket sunar. Valorant Aimbot.",
					imageAlt: "Valorant aimbot and soft aim controls on Windows PC",
					galleryTitle: "Valorant Aimbot",
					heroImage: "/images/valorant-hacks-aimbot.webp",
					ctaPrimary: "Valorant Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Valorant Aimbot",
							paragraphs: [
								"Valorant Hacks, Valorant için Windows PC üzerinde ESP wallhack, radar hack ve valorant aimbot undetected paket sunar. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@valoranthack.net.",
							],
						},
					],
				},
				features: {
					title: "Özellikler | Full Feature List",
					description: "Özellikler: ESP, soft aim, radar controls. anında dijital teslimat. undetected — Windows PC.",
					h1: "Özellikler",
					intro: "Valorant Hacks, Valorant için Windows PC üzerinde ESP wallhack, radar hack ve valorant aimbot undetected paket sunar. Özellikler.",
					imageAlt: "Valorant Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Özellikler",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Valorant Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Özellikler",
							paragraphs: [
								"Valorant Hacks, Valorant için Windows PC üzerinde ESP wallhack, radar hack ve valorant aimbot undetected paket sunar. ESP, soft aim, radar controls.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@valoranthack.net.",
							],
						},
					],
				},
				pricing: {
					title: "Fiyatlar | Monthly & Lifetime",
					description: "Fiyatlar: $35 monthly or $150 lifetime licenses. anında dijital teslimat. undetected — Windows PC.",
					h1: "Fiyatlar",
					intro: "Valorant Hacks, Valorant için Windows PC üzerinde ESP wallhack, radar hack ve valorant aimbot undetected paket sunar. Fiyatlar.",
					imageAlt: "Valorant Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Fiyatlar",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Valorant Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Fiyatlar",
							paragraphs: [
								"Valorant Hacks, Valorant için Windows PC üzerinde ESP wallhack, radar hack ve valorant aimbot undetected paket sunar. $35 monthly or $150 lifetime licenses.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@valoranthack.net.",
							],
						},
					],
				},
				setup: {
					title: "Kurulum | PC Setup Guide",
					description: "Kurulum: Windows PC activation and first-launch setup. anında dijital teslimat. undetected — Windows PC.",
					h1: "Kurulum",
					intro: "Valorant Hacks, Valorant için Windows PC üzerinde ESP wallhack, radar hack ve valorant aimbot undetected paket sunar. Kurulum.",
					imageAlt: "Valorant Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Kurulum",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Valorant Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Kurulum",
							paragraphs: [
								"Valorant Hacks, Valorant için Windows PC üzerinde ESP wallhack, radar hack ve valorant aimbot undetected paket sunar. Windows PC activation and first-launch setup.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@valoranthack.net.",
							],
						},
					],
				},
				updates: {
					title: "Güncellemeler | Vanguard Maintenance Log",
					description: "Güncellemeler: Vanguard patch status and rebuild notes. anında dijital teslimat. undetected — Windows PC.",
					h1: "Güncellemeler",
					intro: "Valorant Hacks, Valorant için Windows PC üzerinde ESP wallhack, radar hack ve valorant aimbot undetected paket sunar. Güncellemeler.",
					imageAlt: "Valorant Hacks live status after Vanguard and game patches",
					galleryTitle: "Güncellemeler",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Valorant Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "Güncellemeler",
							paragraphs: [
								"Valorant Hacks, Valorant için Windows PC üzerinde ESP wallhack, radar hack ve valorant aimbot undetected paket sunar. Vanguard patch status and rebuild notes.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@valoranthack.net.",
							],
						},
					],
				},
				faq: {
					title: "SSS | Common Answers",
					description: "SSS: ESP, soft aim, delivery, and Vanguard questions. anında dijital teslimat. undetected — Windows PC.",
					h1: "SSS",
					intro: "Valorant Hacks, Valorant için Windows PC üzerinde ESP wallhack, radar hack ve valorant aimbot undetected paket sunar. SSS.",
					imageAlt: "Valorant Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "SSS",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Valorant Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "SSS",
							paragraphs: [
								"Valorant Hacks, Valorant için Windows PC üzerinde ESP wallhack, radar hack ve valorant aimbot undetected paket sunar. ESP, soft aim, delivery, and Vanguard questions.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@valoranthack.net.",
							],
						},
					],
				},
				support: {
					title: "Destek | Help & Contact",
					description: "Destek: order help and license support contact. anında dijital teslimat. undetected — Windows PC.",
					h1: "Destek",
					intro: "Valorant Hacks, Valorant için Windows PC üzerinde ESP wallhack, radar hack ve valorant aimbot undetected paket sunar. Destek.",
					imageAlt: "Valorant Hacks support page for license and setup help",
					galleryTitle: "Destek",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Valorant Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Destek",
							paragraphs: [
								"Valorant Hacks, Valorant için Windows PC üzerinde ESP wallhack, radar hack ve valorant aimbot undetected paket sunar. order help and license support contact.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@valoranthack.net.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected hileler | Vanguard Safe Status",
					description: "Undetected hileler: undetected maintenance after Vanguard anti-cheat patches. anında dijital teslimat. undetected — Windows PC.",
					h1: "Undetected hileler",
					intro: "Valorant Hacks, Valorant için Windows PC üzerinde ESP wallhack, radar hack ve valorant aimbot undetected paket sunar. Undetected hileler.",
					imageAlt: "Valorant Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected hileler",
					heroImage: "/images/valorant-hacks-wallhack.webp",
					ctaPrimary: "Valorant Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "Undetected hileler",
							paragraphs: [
								"Valorant Hacks, Valorant için Windows PC üzerinde ESP wallhack, radar hack ve valorant aimbot undetected paket sunar. undetected maintenance after Vanguard anti-cheat patches.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@valoranthack.net.",
							],
						},
					],
				},
				wallhack: {
					title: "Valorant Wallhack | ESP Visibility",
					description: "Valorant Wallhack: wallhack ESP for players, spike, and distance. anında dijital teslimat. undetected — Windows PC.",
					h1: "Valorant Wallhack",
					intro: "Valorant Hacks, Valorant için Windows PC üzerinde ESP wallhack, radar hack ve valorant aimbot undetected paket sunar. Valorant Wallhack.",
					imageAlt: "Valorant wallhack visibility through walls in a match",
					galleryTitle: "Valorant Wallhack",
					heroImage: "/images/valorant-hacks-wallhack.webp",
					ctaPrimary: "Valorant Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Valorant Wallhack",
							paragraphs: [
								"Valorant Hacks, Valorant için Windows PC üzerinde ESP wallhack, radar hack ve valorant aimbot undetected paket sunar. wallhack ESP for players, spike, and distance.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@valoranthack.net.",
							],
						},
					],
				},
				radar: {
					title: "Valorant Radar Hack | 2D Threat Overlay",
					description: "Valorant Radar Hack: 2D radar cues for flanks and rotations. anında dijital teslimat. undetected — Windows PC.",
					h1: "Valorant Radar Hack",
					intro: "Valorant Hacks, Valorant için Windows PC üzerinde ESP wallhack, radar hack ve valorant aimbot undetected paket sunar. Valorant Radar Hack.",
					imageAlt: "Valorant 2D radar overlay showing nearby threats",
					galleryTitle: "Valorant Radar Hack",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Valorant Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Valorant Radar Hack",
							paragraphs: [
								"Valorant Hacks, Valorant için Windows PC üzerinde ESP wallhack, radar hack ve valorant aimbot undetected paket sunar. 2D radar cues for flanks and rotations.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@valoranthack.net.",
							],
						},
					],
				},
				vanguard: {
					title: "Vanguard bypass | Patch Maintenance",
					description: "Vanguard bypass: how Vanguard updates are handled for Valorant hacks. anında dijital teslimat. undetected — Windows PC.",
					h1: "Vanguard bypass",
					intro: "Valorant Hacks, Valorant için Windows PC üzerinde ESP wallhack, radar hack ve valorant aimbot undetected paket sunar. Vanguard bypass.",
					imageAlt: "Valorant Hacks maintenance after a Vanguard patch",
					galleryTitle: "Vanguard bypass",
					heroImage: "/images/valorant-hacks-aimbot.webp",
					ctaPrimary: "Valorant Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Vanguard bypass",
							paragraphs: [
								"Valorant Hacks, Valorant için Windows PC üzerinde ESP wallhack, radar hack ve valorant aimbot undetected paket sunar. how Vanguard updates are handled for Valorant hacks.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@valoranthack.net.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Valorant Hileleri 2026 | Buyer Guide",
					description: "Valorant Hileleri 2026: 2026 Valorant hacks checklist before checkout. anında dijital teslimat. undetected — Windows PC.",
					h1: "Valorant Hileleri 2026",
					intro: "Valorant Hacks, Valorant için Windows PC üzerinde ESP wallhack, radar hack ve valorant aimbot undetected paket sunar. Valorant Hileleri 2026.",
					imageAlt: "Valorant Hacks product overview for Valorant",
					galleryTitle: "Valorant Hileleri 2026",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Valorant Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "Valorant Hileleri 2026",
							paragraphs: [
								"Valorant Hacks, Valorant için Windows PC üzerinde ESP wallhack, radar hack ve valorant aimbot undetected paket sunar. 2026 Valorant hacks checklist before checkout.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@valoranthack.net.",
							],
						},
					],
				},
				hacks: {
					title: "Valorant Hileleri | ESP Aimbot Guide",
					description: "Valorant Hileleri: the Valorant hacks pillar for ESP and Aimbot. anında dijital teslimat. undetected — Windows PC.",
					h1: "Valorant Hileleri",
					intro: "Valorant Hacks, Valorant için Windows PC üzerinde ESP wallhack, radar hack ve valorant aimbot undetected paket sunar. Valorant Hileleri.",
					imageAlt: "Valorant Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Valorant Hileleri",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Valorant Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Valorant Hileleri",
							paragraphs: [
								"Valorant Hacks, Valorant için Windows PC üzerinde ESP wallhack, radar hack ve valorant aimbot undetected paket sunar. the Valorant hacks pillar for ESP and Aimbot.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@valoranthack.net.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Valorant Hile İndir | Instant Access",
					description: "Valorant Hile İndir: digital license download after payment. anında dijital teslimat. undetected — Windows PC.",
					h1: "Valorant Hile İndir",
					intro: "Valorant Hacks, Valorant için Windows PC üzerinde ESP wallhack, radar hack ve valorant aimbot undetected paket sunar. Valorant Hile İndir.",
					imageAlt: "Valorant Hacks download and install delivery flow",
					galleryTitle: "Valorant Hile İndir",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Valorant Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Valorant Hile İndir",
							paragraphs: [
								"Valorant Hacks, Valorant için Windows PC üzerinde ESP wallhack, radar hack ve valorant aimbot undetected paket sunar. digital license download after payment.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@valoranthack.net.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Valorant Mod Menü | In-Game Toggles",
					description: "Valorant Mod Menü: in-client ESP and soft aim toggles. anında dijital teslimat. undetected — Windows PC.",
					h1: "Valorant Mod Menü",
					intro: "Valorant Hacks, Valorant için Windows PC üzerinde ESP wallhack, radar hack ve valorant aimbot undetected paket sunar. Valorant Mod Menü.",
					imageAlt: "Valorant Hacks in-game menu controls",
					galleryTitle: "Valorant Mod Menü",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Valorant Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Valorant Mod Menü",
							paragraphs: [
								"Valorant Hacks, Valorant için Windows PC üzerinde ESP wallhack, radar hack ve valorant aimbot undetected paket sunar. in-client ESP and soft aim toggles.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@valoranthack.net.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Valorant Soft Aim | Smooth Aim Settings",
					description: "Valorant Soft Aim: smooth soft aim settings for Windows PC. anında dijital teslimat. undetected — Windows PC.",
					h1: "Valorant Soft Aim",
					intro: "Valorant Hacks, Valorant için Windows PC üzerinde ESP wallhack, radar hack ve valorant aimbot undetected paket sunar. Valorant Soft Aim.",
					imageAlt: "Valorant soft aim FOV and smoothness settings",
					galleryTitle: "Valorant Soft Aim",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Valorant Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/valorant-aimbot/",
					sections: [
						{
							h2: "Valorant Soft Aim",
							paragraphs: [
								"Valorant Hacks, Valorant için Windows PC üzerinde ESP wallhack, radar hack ve valorant aimbot undetected paket sunar. smooth soft aim settings for Windows PC.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@valoranthack.net.",
							],
						},
					],
				},
				"best-cheats": {
					title: "En İyi Valorant Hileleri | Buyer Checklist",
					description: "En İyi Valorant Hileleri: what to compare before buying Valorant hacks. anında dijital teslimat. undetected — Windows PC.",
					h1: "En İyi Valorant Hileleri",
					intro: "Valorant Hacks, Valorant için Windows PC üzerinde ESP wallhack, radar hack ve valorant aimbot undetected paket sunar. En İyi Valorant Hileleri.",
					imageAlt: "Valorant Hacks overview for Valorant on PC",
					galleryTitle: "En İyi Valorant Hileleri",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Valorant Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "En İyi Valorant Hileleri",
							paragraphs: [
								"Valorant Hacks, Valorant için Windows PC üzerinde ESP wallhack, radar hack ve valorant aimbot undetected paket sunar. what to compare before buying Valorant hacks.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@valoranthack.net.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Valorant Aimbot Hilesi | Soft Aim Assist",
					description: "Valorant Aimbot Hilesi: undetected Aimbot hack assist for Valorant. anında dijital teslimat. undetected — Windows PC.",
					h1: "Valorant Aimbot Hilesi",
					intro: "Valorant Hacks, Valorant için Windows PC üzerinde ESP wallhack, radar hack ve valorant aimbot undetected paket sunar. Valorant Aimbot Hilesi.",
					imageAlt: "Valorant aimbot hack controls and bone priority",
					galleryTitle: "Valorant Aimbot Hilesi",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Valorant Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/valorant-aimbot/",
					sections: [
						{
							h2: "Valorant Aimbot Hilesi",
							paragraphs: [
								"Valorant Hacks, Valorant için Windows PC üzerinde ESP wallhack, radar hack ve valorant aimbot undetected paket sunar. undetected Aimbot hack assist for Valorant.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@valoranthack.net.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Valorant ESP Hilesi | Boxes & Spike",
					description: "Valorant ESP Hilesi: ESP hack boxes, spike markers, and distance. anında dijital teslimat. undetected — Windows PC.",
					h1: "Valorant ESP Hilesi",
					intro: "Valorant Hacks, Valorant için Windows PC üzerinde ESP wallhack, radar hack ve valorant aimbot undetected paket sunar. Valorant ESP Hilesi.",
					imageAlt: "Valorant ESP hack boxes and spike markers",
					galleryTitle: "Valorant ESP Hilesi",
					heroImage: "/images/valorant-hacks-wallhack.webp",
					ctaPrimary: "Valorant Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Valorant ESP Hilesi",
							paragraphs: [
								"Valorant Hacks, Valorant için Windows PC üzerinde ESP wallhack, radar hack ve valorant aimbot undetected paket sunar. ESP hack boxes, spike markers, and distance.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@valoranthack.net.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Valorant Unlock All | What It Means",
					description: "Valorant Unlock All: unlock-all searches vs real ESP and Aimbot tools. anında dijital teslimat. undetected — Windows PC.",
					h1: "Valorant Unlock All",
					intro: "Valorant Hacks, Valorant için Windows PC üzerinde ESP wallhack, radar hack ve valorant aimbot undetected paket sunar. Valorant Unlock All.",
					imageAlt: "Valorant Hacks license features overview",
					galleryTitle: "Valorant Unlock All",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Valorant Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Valorant Unlock All",
							paragraphs: [
								"Valorant Hacks, Valorant için Windows PC üzerinde ESP wallhack, radar hack ve valorant aimbot undetected paket sunar. unlock-all searches vs real ESP and Aimbot tools.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@valoranthack.net.",
							],
						},
					],
				},
				privacy: {
					title: "Gizlilik politikası | Valorant Hacks",
					description: "Gizlilik politikası for Valorant Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Gizlilik politikası",
					intro: "Valorant Hacks, Valorant için Windows PC üzerinde ESP wallhack, radar hack ve valorant aimbot undetected paket sunar. Gizlilik politikası for valoranthack.net and Valorant licenses.",
					imageAlt: "valorant hacks",
					galleryTitle: "valorant hacks",
					heroImage: "/images/valorant-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Valorant Hacks, Valorant için Windows PC üzerinde ESP wallhack, radar hack ve valorant aimbot undetected paket sunar. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on valoranthack.net.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Valorant Hacks, Valorant için Windows PC üzerinde ESP wallhack, radar hack ve valorant aimbot undetected paket sunar. Support responses, order resolution, and legal compliance when required.",
								"Vanguard anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"Destek ve yasal sorular için support@valoranthack.net.",
								"Email: support@valoranthack.net",
							],
						},
					],
				},
				refund: {
					title: "İade politikası | Valorant Hacks",
					description: "İade politikası for Valorant Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "İade politikası",
					intro: "Valorant Hacks, Valorant için Windows PC üzerinde ESP wallhack, radar hack ve valorant aimbot undetected paket sunar. İade politikası for valoranthack.net and Valorant licenses.",
					imageAlt: "valorant hacks",
					galleryTitle: "valorant hacks",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Valorant Hacks, Valorant için Windows PC üzerinde ESP wallhack, radar hack ve valorant aimbot undetected paket sunar. Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Valorant Hacks, Valorant için Windows PC üzerinde ESP wallhack, radar hack ve valorant aimbot undetected paket sunar. Support responses, order resolution, and legal compliance when required.",
								"Vanguard anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"Destek ve yasal sorular için support@valoranthack.net.",
								"Email: support@valoranthack.net",
							],
						},
					],
				},
				terms: {
					title: "Kullanım şartları | Valorant Hacks",
					description: "Kullanım şartları for Valorant Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Kullanım şartları",
					intro: "Valorant Hacks, Valorant için Windows PC üzerinde ESP wallhack, radar hack ve valorant aimbot undetected paket sunar. Kullanım şartları for valoranthack.net and Valorant licenses.",
					imageAlt: "valorant hacks",
					galleryTitle: "valorant hacks",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Valorant Hacks, Valorant için Windows PC üzerinde ESP wallhack, radar hack ve valorant aimbot undetected paket sunar. Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Valorant Hacks, Valorant için Windows PC üzerinde ESP wallhack, radar hack ve valorant aimbot undetected paket sunar. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Riot Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"Destek ve yasal sorular için support@valoranthack.net.",
								"Email: support@valoranthack.net",
							],
						},
					],
				},
			},
		},
		ar: {
			ui: {
				nav: {
					home: "الرئيسية",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "الميزات",
					pricing: "الأسعار",
					setup: "التثبيت",
					updates: "التحديثات",
					faq: "الأسئلة",
					buyNow: "اشترِ الآن",
				},
				hero: {
					accent: "غش Valorant غير مكتشف",
					accentShort: "Valorant Hacks",
					subtitle: "ESP wallhack ورadar hack وAimbot لـ Valorant على Windows PC — صيانة Vanguard anti-cheat مشمولة.",
					subtitleShort: "ESP ورadar وAimbot لـ Valorant PC",
					buyNow: "اشترِ الآن",
					seeFeatures: "عرض الميزات",
				},
				trust: {
					status: "متصل",
					statusNote: "حزمة Valorant Hacks نشطة لـ Valorant على Windows PC.",
					statusShort: "نشط",
					delivery: "تسليم رقمي فوري",
					platform: "Windows 10 و11",
					antiCheat: "دعم صيانة Vanguard anti-cheat",
					antiCheatShort: "دعم Vanguard anti-cheat",
				},
				product: {
					title: "Valorant Hacks",
					addToCart: "أضف إلى السلة",
					monthly: "شهري",
					lifetime: "مدى الحياة",
					available: "متوفر الآن",
					gameBadge: "Valorant",
					platformBadge: "Windows PC",
					statusBadge: "حزمة غير مكتشفة",
				},
				reviews: {
					title: "ماذا يقول اللاعبون",
					subtitle: "آراء حديثة من مشتري Valorant Hacks",
					outOf: "من 5",
					countLabel: "مراجعات",
				},
				common: {
					buyNow: "اشترِ الآن",
					readGuide: "اقرأ الدليل",
					language: "اللغة",
					officialLanguageNote: "الإنجليزية هي اللغة الرسمية. اللغات الأخرى مترجمة لتحسين SEO العالمي.",
					relatedPages: "صفحات ذات صلة",
				},
				footer: {
					explore: "استكشف",
					help: "المساعدة والقانون",
					tagline: "ESP وwallhack ورadar وAimbot غير مكتشف لـ Valorant — الدفع عبر Zadeyo.",
				},
				images: {
					hero: "Valorant Hacks hero — ESP and aimbot overlay in Valorant",
					espWallhack: "Wallhack outlines showing agents and enemies through walls",
					aimbotCombat: "Soft aim assist overlay during a Valorant round",
					squadFight: "Valorant Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Valorant match",
					headerArt: "Aimbot view and bone priority controls for Valorant",
					cheatsPackage: "2D radar threat overlay for Valorant",
					rebootFight: "Aimbot assist during a Valorant firefight",
					battleRoyale: "Valorant Hacks in-match overview for Windows PC",
					battleRoyaleIsland: "ESP markers for agents and the spike in Valorant",
				},
			},
			pages: {
				home: {
					title: "Valorant Hacks | Official PC Site",
					description: "غش Valorant undetected لـ Valorant على PC. ESP wallhack ورadar hack وAimbot مع صيانة Vanguard anti-cheat. تسليم رقمي فوري.",
					h1: "Valorant Hacks",
					intro: "حزمة undetected لـ Valorant على Windows PC: ESP wallhack ورadar وAimbot مع صيانة Vanguard anti-cheat.",
					imageAlt: "Valorant ESP player tags hack",
					galleryTitle: "معرض Valorant Hacks — ESP وAimbot وwallhack",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "اشترِ Valorant Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "لماذا Valorant Hacks في 2026",
							paragraphs: [
								"Valorant Hacks يجمع ESP wallhack وradar hack وvalorant aimbot غير مكتشف لـ Valorant على Windows PC. مثالي لقراءة فرق العدو في Competitive وDeathmatch.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard anti-cheat.",
							],
						},
						{
							h2: "ESP wallhack ورadar وAimbot في ترخيص واحد",
							paragraphs: [
								"Valorant Hacks يجمع ESP wallhack وradar hack وvalorant aimbot غير مكتشف لـ Valorant على Windows PC. ترخيص واحد بدلاً من أدوات منفصلة.",
								"راجع Updates بعد تص patches Vanguard anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
							],
						},
					],
				},
				"valorant-esp": {
					title: "ESP Valorant | Player Boxes & Wallhack",
					description: "ESP Valorant: player boxes, spike markers, and wallhack overlays. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "ESP Valorant",
					intro: "Valorant Hacks يجمع ESP wallhack وradar hack وvalorant aimbot غير مكتشف لـ Valorant على Windows PC. ESP Valorant.",
					imageAlt: "Valorant ESP player boxes and distance readouts in a match",
					galleryTitle: "ESP Valorant",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "اشترِ Valorant Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "ESP Valorant",
							paragraphs: [
								"Valorant Hacks يجمع ESP wallhack وradar hack وvalorant aimbot غير مكتشف لـ Valorant على Windows PC. player boxes, spike markers, and wallhack overlays.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Vanguard anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard anti-cheat.",
								"support@valoranthack.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"valorant-aimbot": {
					title: "Aimbot Valorant | Soft Aim Controls",
					description: "Aimbot Valorant: soft aim, FOV, and per-weapon Aimbot profiles. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Aimbot Valorant",
					intro: "Valorant Hacks يجمع ESP wallhack وradar hack وvalorant aimbot غير مكتشف لـ Valorant على Windows PC. Aimbot Valorant.",
					imageAlt: "Valorant aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Valorant",
					heroImage: "/images/valorant-hacks-aimbot.webp",
					ctaPrimary: "اشترِ Valorant Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Aimbot Valorant",
							paragraphs: [
								"Valorant Hacks يجمع ESP wallhack وradar hack وvalorant aimbot غير مكتشف لـ Valorant على Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Vanguard anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard anti-cheat.",
								"support@valoranthack.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				features: {
					title: "الميزات | Full Feature List",
					description: "الميزات: ESP, soft aim, radar controls. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "الميزات",
					intro: "Valorant Hacks يجمع ESP wallhack وradar hack وvalorant aimbot غير مكتشف لـ Valorant على Windows PC. الميزات.",
					imageAlt: "Valorant Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "الميزات",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "اشترِ Valorant Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "الميزات",
							paragraphs: [
								"Valorant Hacks يجمع ESP wallhack وradar hack وvalorant aimbot غير مكتشف لـ Valorant على Windows PC. ESP, soft aim, radar controls.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Vanguard anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard anti-cheat.",
								"support@valoranthack.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				pricing: {
					title: "الأسعار | Monthly & Lifetime",
					description: "الأسعار: $35 monthly or $150 lifetime licenses. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "الأسعار",
					intro: "Valorant Hacks يجمع ESP wallhack وradar hack وvalorant aimbot غير مكتشف لـ Valorant على Windows PC. الأسعار.",
					imageAlt: "Valorant Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "الأسعار",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "اشترِ Valorant Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "الأسعار",
							paragraphs: [
								"Valorant Hacks يجمع ESP wallhack وradar hack وvalorant aimbot غير مكتشف لـ Valorant على Windows PC. $35 monthly or $150 lifetime licenses.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Vanguard anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard anti-cheat.",
								"support@valoranthack.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				setup: {
					title: "التثبيت | PC Setup Guide",
					description: "التثبيت: Windows PC activation and first-launch setup. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "التثبيت",
					intro: "Valorant Hacks يجمع ESP wallhack وradar hack وvalorant aimbot غير مكتشف لـ Valorant على Windows PC. التثبيت.",
					imageAlt: "Valorant Hacks setup guide screenshot for Windows PC",
					galleryTitle: "التثبيت",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "اشترِ Valorant Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "التثبيت",
							paragraphs: [
								"Valorant Hacks يجمع ESP wallhack وradar hack وvalorant aimbot غير مكتشف لـ Valorant على Windows PC. Windows PC activation and first-launch setup.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Vanguard anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard anti-cheat.",
								"support@valoranthack.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				updates: {
					title: "التحديثات | Vanguard Maintenance Log",
					description: "التحديثات: Vanguard patch status and rebuild notes. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "التحديثات",
					intro: "Valorant Hacks يجمع ESP wallhack وradar hack وvalorant aimbot غير مكتشف لـ Valorant على Windows PC. التحديثات.",
					imageAlt: "Valorant Hacks live status after Vanguard and game patches",
					galleryTitle: "التحديثات",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "اشترِ Valorant Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "التحديثات",
							paragraphs: [
								"Valorant Hacks يجمع ESP wallhack وradar hack وvalorant aimbot غير مكتشف لـ Valorant على Windows PC. Vanguard patch status and rebuild notes.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Vanguard anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard anti-cheat.",
								"support@valoranthack.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				faq: {
					title: "الأسئلة | Common Answers",
					description: "الأسئلة: ESP, soft aim, delivery, and Vanguard questions. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "الأسئلة",
					intro: "Valorant Hacks يجمع ESP wallhack وradar hack وvalorant aimbot غير مكتشف لـ Valorant على Windows PC. الأسئلة.",
					imageAlt: "Valorant Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "الأسئلة",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "اشترِ Valorant Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "الأسئلة",
							paragraphs: [
								"Valorant Hacks يجمع ESP wallhack وradar hack وvalorant aimbot غير مكتشف لـ Valorant على Windows PC. ESP, soft aim, delivery, and Vanguard questions.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Vanguard anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard anti-cheat.",
								"support@valoranthack.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				support: {
					title: "الدعم | Help & Contact",
					description: "الدعم: order help and license support contact. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "الدعم",
					intro: "Valorant Hacks يجمع ESP wallhack وradar hack وvalorant aimbot غير مكتشف لـ Valorant على Windows PC. الدعم.",
					imageAlt: "Valorant Hacks support page for license and setup help",
					galleryTitle: "الدعم",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "اشترِ Valorant Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "الدعم",
							paragraphs: [
								"Valorant Hacks يجمع ESP wallhack وradar hack وvalorant aimbot غير مكتشف لـ Valorant على Windows PC. order help and license support contact.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Vanguard anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard anti-cheat.",
								"support@valoranthack.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				undetected: {
					title: "غش undetected | Vanguard Safe Status",
					description: "غش undetected: undetected maintenance after Vanguard anti-cheat patches. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "غش undetected",
					intro: "Valorant Hacks يجمع ESP wallhack وradar hack وvalorant aimbot غير مكتشف لـ Valorant على Windows PC. غش undetected.",
					imageAlt: "Valorant Hacks undetected status overview for Windows PC",
					galleryTitle: "غش undetected",
					heroImage: "/images/valorant-hacks-wallhack.webp",
					ctaPrimary: "اشترِ Valorant Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "غش undetected",
							paragraphs: [
								"Valorant Hacks يجمع ESP wallhack وradar hack وvalorant aimbot غير مكتشف لـ Valorant على Windows PC. undetected maintenance after Vanguard anti-cheat patches.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Vanguard anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard anti-cheat.",
								"support@valoranthack.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Valorant | ESP Visibility",
					description: "Wallhack Valorant: wallhack ESP for players, spike, and distance. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Wallhack Valorant",
					intro: "Valorant Hacks يجمع ESP wallhack وradar hack وvalorant aimbot غير مكتشف لـ Valorant على Windows PC. Wallhack Valorant.",
					imageAlt: "Valorant wallhack visibility through walls in a match",
					galleryTitle: "Wallhack Valorant",
					heroImage: "/images/valorant-hacks-wallhack.webp",
					ctaPrimary: "اشترِ Valorant Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Wallhack Valorant",
							paragraphs: [
								"Valorant Hacks يجمع ESP wallhack وradar hack وvalorant aimbot غير مكتشف لـ Valorant على Windows PC. wallhack ESP for players, spike, and distance.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Vanguard anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard anti-cheat.",
								"support@valoranthack.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack Valorant | 2D Threat Overlay",
					description: "Radar hack Valorant: 2D radar cues for flanks and rotations. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Radar hack Valorant",
					intro: "Valorant Hacks يجمع ESP wallhack وradar hack وvalorant aimbot غير مكتشف لـ Valorant على Windows PC. Radar hack Valorant.",
					imageAlt: "Valorant 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack Valorant",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "اشترِ Valorant Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Radar hack Valorant",
							paragraphs: [
								"Valorant Hacks يجمع ESP wallhack وradar hack وvalorant aimbot غير مكتشف لـ Valorant على Windows PC. 2D radar cues for flanks and rotations.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Vanguard anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard anti-cheat.",
								"support@valoranthack.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				vanguard: {
					title: "Bypass Vanguard | Patch Maintenance",
					description: "Bypass Vanguard: how Vanguard updates are handled for Valorant hacks. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Bypass Vanguard",
					intro: "Valorant Hacks يجمع ESP wallhack وradar hack وvalorant aimbot غير مكتشف لـ Valorant على Windows PC. Bypass Vanguard.",
					imageAlt: "Valorant Hacks maintenance after a Vanguard patch",
					galleryTitle: "Bypass Vanguard",
					heroImage: "/images/valorant-hacks-aimbot.webp",
					ctaPrimary: "اشترِ Valorant Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Vanguard",
							paragraphs: [
								"Valorant Hacks يجمع ESP wallhack وradar hack وvalorant aimbot غير مكتشف لـ Valorant على Windows PC. how Vanguard updates are handled for Valorant hacks.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Vanguard anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard anti-cheat.",
								"support@valoranthack.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "غش Valorant 2026 | Buyer Guide",
					description: "غش Valorant 2026: 2026 Valorant hacks checklist before checkout. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "غش Valorant 2026",
					intro: "Valorant Hacks يجمع ESP wallhack وradar hack وvalorant aimbot غير مكتشف لـ Valorant على Windows PC. غش Valorant 2026.",
					imageAlt: "Valorant Hacks product overview for Valorant",
					galleryTitle: "غش Valorant 2026",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "اشترِ Valorant Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "غش Valorant 2026",
							paragraphs: [
								"Valorant Hacks يجمع ESP wallhack وradar hack وvalorant aimbot غير مكتشف لـ Valorant على Windows PC. 2026 Valorant hacks checklist before checkout.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Vanguard anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard anti-cheat.",
								"support@valoranthack.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				hacks: {
					title: "غش Valorant | ESP Aimbot Guide",
					description: "غش Valorant: the Valorant hacks pillar for ESP and Aimbot. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "غش Valorant",
					intro: "Valorant Hacks يجمع ESP wallhack وradar hack وvalorant aimbot غير مكتشف لـ Valorant على Windows PC. غش Valorant.",
					imageAlt: "Valorant Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "غش Valorant",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "اشترِ Valorant Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "غش Valorant",
							paragraphs: [
								"Valorant Hacks يجمع ESP wallhack وradar hack وvalorant aimbot غير مكتشف لـ Valorant على Windows PC. the Valorant hacks pillar for ESP and Aimbot.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Vanguard anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard anti-cheat.",
								"support@valoranthack.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"cheat-download": {
					title: "تحميل Valorant Hacks | Instant Access",
					description: "تحميل Valorant Hacks: digital license download after payment. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "تحميل Valorant Hacks",
					intro: "Valorant Hacks يجمع ESP wallhack وradar hack وvalorant aimbot غير مكتشف لـ Valorant على Windows PC. تحميل Valorant Hacks.",
					imageAlt: "Valorant Hacks download and install delivery flow",
					galleryTitle: "تحميل Valorant Hacks",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "اشترِ Valorant Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "تحميل Valorant Hacks",
							paragraphs: [
								"Valorant Hacks يجمع ESP wallhack وradar hack وvalorant aimbot غير مكتشف لـ Valorant على Windows PC. digital license download after payment.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Vanguard anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard anti-cheat.",
								"support@valoranthack.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"mod-menu": {
					title: "قائمة مود Valorant | In-Game Toggles",
					description: "قائمة مود Valorant: in-client ESP and soft aim toggles. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "قائمة مود Valorant",
					intro: "Valorant Hacks يجمع ESP wallhack وradar hack وvalorant aimbot غير مكتشف لـ Valorant على Windows PC. قائمة مود Valorant.",
					imageAlt: "Valorant Hacks in-game menu controls",
					galleryTitle: "قائمة مود Valorant",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "اشترِ Valorant Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "قائمة مود Valorant",
							paragraphs: [
								"Valorant Hacks يجمع ESP wallhack وradar hack وvalorant aimbot غير مكتشف لـ Valorant على Windows PC. in-client ESP and soft aim toggles.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Vanguard anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard anti-cheat.",
								"support@valoranthack.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Valorant | Smooth Aim Settings",
					description: "Soft aim Valorant: smooth soft aim settings for Windows PC. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Soft aim Valorant",
					intro: "Valorant Hacks يجمع ESP wallhack وradar hack وvalorant aimbot غير مكتشف لـ Valorant على Windows PC. Soft aim Valorant.",
					imageAlt: "Valorant soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Valorant",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "اشترِ Valorant Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/valorant-aimbot/",
					sections: [
						{
							h2: "Soft aim Valorant",
							paragraphs: [
								"Valorant Hacks يجمع ESP wallhack وradar hack وvalorant aimbot غير مكتشف لـ Valorant على Windows PC. smooth soft aim settings for Windows PC.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Vanguard anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard anti-cheat.",
								"support@valoranthack.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"best-cheats": {
					title: "أفضل غش Valorant | Buyer Checklist",
					description: "أفضل غش Valorant: what to compare before buying Valorant hacks. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "أفضل غش Valorant",
					intro: "Valorant Hacks يجمع ESP wallhack وradar hack وvalorant aimbot غير مكتشف لـ Valorant على Windows PC. أفضل غش Valorant.",
					imageAlt: "Valorant Hacks overview for Valorant on PC",
					galleryTitle: "أفضل غش Valorant",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "اشترِ Valorant Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "أفضل غش Valorant",
							paragraphs: [
								"Valorant Hacks يجمع ESP wallhack وradar hack وvalorant aimbot غير مكتشف لـ Valorant على Windows PC. what to compare before buying Valorant hacks.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Vanguard anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard anti-cheat.",
								"support@valoranthack.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "هاك Aimbot Valorant | Soft Aim Assist",
					description: "هاك Aimbot Valorant: undetected Aimbot hack assist for Valorant. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "هاك Aimbot Valorant",
					intro: "Valorant Hacks يجمع ESP wallhack وradar hack وvalorant aimbot غير مكتشف لـ Valorant على Windows PC. هاك Aimbot Valorant.",
					imageAlt: "Valorant aimbot hack controls and bone priority",
					galleryTitle: "هاك Aimbot Valorant",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "اشترِ Valorant Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/valorant-aimbot/",
					sections: [
						{
							h2: "هاك Aimbot Valorant",
							paragraphs: [
								"Valorant Hacks يجمع ESP wallhack وradar hack وvalorant aimbot غير مكتشف لـ Valorant على Windows PC. undetected Aimbot hack assist for Valorant.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Vanguard anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard anti-cheat.",
								"support@valoranthack.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"esp-hack": {
					title: "هاك ESP Valorant | Boxes & Spike",
					description: "هاك ESP Valorant: ESP hack boxes, spike markers, and distance. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "هاك ESP Valorant",
					intro: "Valorant Hacks يجمع ESP wallhack وradar hack وvalorant aimbot غير مكتشف لـ Valorant على Windows PC. هاك ESP Valorant.",
					imageAlt: "Valorant ESP hack boxes and spike markers",
					galleryTitle: "هاك ESP Valorant",
					heroImage: "/images/valorant-hacks-wallhack.webp",
					ctaPrimary: "اشترِ Valorant Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "هاك ESP Valorant",
							paragraphs: [
								"Valorant Hacks يجمع ESP wallhack وradar hack وvalorant aimbot غير مكتشف لـ Valorant على Windows PC. ESP hack boxes, spike markers, and distance.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Vanguard anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard anti-cheat.",
								"support@valoranthack.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Valorant | What It Means",
					description: "Unlock all Valorant: unlock-all searches vs real ESP and Aimbot tools. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Unlock all Valorant",
					intro: "Valorant Hacks يجمع ESP wallhack وradar hack وvalorant aimbot غير مكتشف لـ Valorant على Windows PC. Unlock all Valorant.",
					imageAlt: "Valorant Hacks license features overview",
					galleryTitle: "Unlock all Valorant",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "اشترِ Valorant Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Valorant",
							paragraphs: [
								"Valorant Hacks يجمع ESP wallhack وradar hack وvalorant aimbot غير مكتشف لـ Valorant على Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Vanguard anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard anti-cheat.",
								"support@valoranthack.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				privacy: {
					title: "سياسة الخصوصية | Valorant Hacks",
					description: "سياسة الخصوصية for Valorant Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "سياسة الخصوصية",
					intro: "Valorant Hacks يجمع ESP wallhack وradar hack وvalorant aimbot غير مكتشف لـ Valorant على Windows PC. سياسة الخصوصية for valoranthack.net and Valorant licenses.",
					imageAlt: "valorant hacks",
					galleryTitle: "valorant hacks",
					heroImage: "/images/valorant-hacks-aimbot.webp",
					ctaPrimary: "مراسلة الدعم",
					ctaSecondary: "اقرأ الشروط",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "المعلومات التي نجمعها",
							paragraphs: [
								"Valorant Hacks يجمع ESP wallhack وradar hack وvalorant aimbot غير مكتشف لـ Valorant على Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on valoranthack.net.",
							],
						},
						{
							h2: "استخدام المعلومات",
							paragraphs: [
								"Valorant Hacks يجمع ESP wallhack وradar hack وvalorant aimbot غير مكتشف لـ Valorant على Windows PC. Support responses, order resolution, and legal compliance when required.",
								"راجع Updates بعد تص patches Vanguard anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
							],
						},
						{
							h2: "حقوقك",
							paragraphs: [
								"support@valoranthack.net للدعم والطلبات القانونية.",
								"Email: support@valoranthack.net",
							],
						},
					],
				},
				refund: {
					title: "سياسة الاسترداد | Valorant Hacks",
					description: "سياسة الاسترداد for Valorant Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "سياسة الاسترداد",
					intro: "Valorant Hacks يجمع ESP wallhack وradar hack وvalorant aimbot غير مكتشف لـ Valorant على Windows PC. سياسة الاسترداد for valoranthack.net and Valorant licenses.",
					imageAlt: "valorant hacks",
					galleryTitle: "valorant hacks",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "مراسلة الدعم",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "التسليم الرقمي",
							paragraphs: [
								"Valorant Hacks يجمع ESP wallhack وradar hack وvalorant aimbot غير مكتشف لـ Valorant على Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard anti-cheat.",
							],
						},
						{
							h2: "موافقة الاسترداد",
							paragraphs: [
								"Valorant Hacks يجمع ESP wallhack وradar hack وvalorant aimbot غير مكتشف لـ Valorant على Windows PC. Support responses, order resolution, and legal compliance when required.",
								"راجع Updates بعد تص patches Vanguard anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
							],
						},
						{
							h2: "كيفية الطلب",
							paragraphs: [
								"support@valoranthack.net للدعم والطلبات القانونية.",
								"Email: support@valoranthack.net",
							],
						},
					],
				},
				terms: {
					title: "شروط الاستخدام | Valorant Hacks",
					description: "شروط الاستخدام for Valorant Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "شروط الاستخدام",
					intro: "Valorant Hacks يجمع ESP wallhack وradar hack وvalorant aimbot غير مكتشف لـ Valorant على Windows PC. شروط الاستخدام for valoranthack.net and Valorant licenses.",
					imageAlt: "valorant hacks",
					galleryTitle: "valorant hacks",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "مراسلة الدعم",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "قبول الشروط",
							paragraphs: [
								"Valorant Hacks يجمع ESP wallhack وradar hack وvalorant aimbot غير مكتشف لـ Valorant على Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard anti-cheat.",
							],
						},
						{
							h2: "المخاطر",
							paragraphs: [
								"Valorant Hacks يجمع ESP wallhack وradar hack وvalorant aimbot غير مكتشف لـ Valorant على Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Riot Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "التغييرات",
							paragraphs: [
								"support@valoranthack.net للدعم والطلبات القانونية.",
								"Email: support@valoranthack.net",
							],
						},
					],
				},
			},
		},
		ja: {
			ui: {
				nav: {
					home: "ホーム",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "機能",
					pricing: "料金",
					setup: "セットアップ",
					updates: "更新",
					faq: "FAQ",
					buyNow: "今すぐ購入",
				},
				hero: {
					accent: "Undetected Valorantチート",
					accentShort: "Valorant Hacks",
					subtitle: "Valorant Windows PC向けESP wallhack、radar hack、Aimbot — Vanguard anti-cheatメンテナンス付き。",
					subtitleShort: "Valorant PC向けESP・radar・Aimbot",
					buyNow: "今すぐ購入",
					seeFeatures: "機能を見る",
				},
				trust: {
					status: "オンライン",
					statusNote: "Valorant HacksパッケージはValorant Windows PCで利用可能です。",
					statusShort: "稼働中",
					delivery: "即時デジタル配信",
					platform: "Windows 10 & 11",
					antiCheat: "Vanguard anti-cheatメンテナンス対応",
					antiCheatShort: "Vanguard anti-cheat対応",
				},
				product: {
					title: "Valorant Hacks",
					addToCart: "カートに追加",
					monthly: "月額",
					lifetime: "永久",
					available: "現在利用可能",
					gameBadge: "Valorant",
					platformBadge: "Windows PC",
					statusBadge: "Undetectedパッケージ",
				},
				reviews: {
					title: "プレイヤーの声",
					subtitle: "Valorant Hacks購入者からの最近のフィードバック",
					outOf: "/5",
					countLabel: "件のレビュー",
				},
				common: {
					buyNow: "今すぐ購入",
					readGuide: "ガイドを読む",
					language: "言語",
					officialLanguageNote: "英語が公式言語です。他言語はグローバルSEO向けに翻訳されています。",
					relatedPages: "関連ページ",
				},
				footer: {
					explore: "探索",
					help: "ヘルプと法務",
					tagline: "Valorant向けundetected ESP、wallhack、radar、Aimbot — Zadeyoで購入。",
				},
				images: {
					hero: "Valorant Hacks hero — ESP and aimbot overlay in Valorant",
					espWallhack: "Wallhack outlines showing agents and enemies through walls",
					aimbotCombat: "Soft aim assist overlay during a Valorant round",
					squadFight: "Valorant Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Valorant match",
					headerArt: "Aimbot view and bone priority controls for Valorant",
					cheatsPackage: "2D radar threat overlay for Valorant",
					rebootFight: "Aimbot assist during a Valorant firefight",
					battleRoyale: "Valorant Hacks in-match overview for Windows PC",
					battleRoyaleIsland: "ESP markers for agents and the spike in Valorant",
				},
			},
			pages: {
				home: {
					title: "Valorant Hacks | Official PC Site",
					description: "Valorant向けundetectedチート。ESP wallhack、radar hack、Aimbot、Vanguard anti-cheatメンテナンス。即時デジタル配信。",
					h1: "Valorant Hacks",
					intro: "Valorant Windows PC向けundetectedパッケージ：ESP wallhack、radar、Aimbot、Vanguard anti-cheatメンテナンス付き。",
					imageAlt: "Valorant hacks hero ESP aimbot wallhack",
					galleryTitle: "Valorant Hacksギャラリー — ESP、Aimbot、wallhack",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Valorant Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026年にValorant Hacksを選ぶ理由",
							paragraphs: [
								"Valorant HacksはValorant向けWindows PC用ESP wallhack、radar hack、valorant aimbotのundetectedパッケージです。CompetitiveとDeathmatchで敵スクワッドを読むのに最適。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguard anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "ESP wallhack、radar、Aimbotが1ライセンス",
							paragraphs: [
								"Valorant HacksはValorant向けWindows PC用ESP wallhack、radar hack、valorant aimbotのundetectedパッケージです。別ツールではなく1ライセンス。",
								"Vanguard anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
							],
						},
					],
				},
				"valorant-esp": {
					title: "Valorant ESP | Player Boxes & Wallhack",
					description: "Valorant ESP: player boxes, spike markers, and wallhack overlays. 即時デジタル配信. undetected — Windows PC.",
					h1: "Valorant ESP",
					intro: "Valorant HacksはValorant向けWindows PC用ESP wallhack、radar hack、valorant aimbotのundetectedパッケージです。Valorant ESP.",
					imageAlt: "Valorant ESP player boxes and distance readouts in a match",
					galleryTitle: "Valorant ESP",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Valorant Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "Valorant ESP",
							paragraphs: [
								"Valorant HacksはValorant向けWindows PC用ESP wallhack、radar hack、valorant aimbotのundetectedパッケージです。player boxes, spike markers, and wallhack overlays.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguard anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguard anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguard anti-cheatメンテナンス含む。",
								"サポート・法務: support@valoranthack.net",
							],
						},
					],
				},
				"valorant-aimbot": {
					title: "Valorant Aimbot | Soft Aim Controls",
					description: "Valorant Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. 即時デジタル配信. undetected — Windows PC.",
					h1: "Valorant Aimbot",
					intro: "Valorant HacksはValorant向けWindows PC用ESP wallhack、radar hack、valorant aimbotのundetectedパッケージです。Valorant Aimbot.",
					imageAlt: "Valorant aimbot and soft aim controls on Windows PC",
					galleryTitle: "Valorant Aimbot",
					heroImage: "/images/valorant-hacks-aimbot.webp",
					ctaPrimary: "Valorant Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Valorant Aimbot",
							paragraphs: [
								"Valorant HacksはValorant向けWindows PC用ESP wallhack、radar hack、valorant aimbotのundetectedパッケージです。soft aim, FOV, and per-weapon Aimbot profiles.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguard anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguard anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguard anti-cheatメンテナンス含む。",
								"サポート・法務: support@valoranthack.net",
							],
						},
					],
				},
				features: {
					title: "機能 | Full Feature List",
					description: "機能: ESP, soft aim, radar controls. 即時デジタル配信. undetected — Windows PC.",
					h1: "機能",
					intro: "Valorant HacksはValorant向けWindows PC用ESP wallhack、radar hack、valorant aimbotのundetectedパッケージです。機能.",
					imageAlt: "Valorant Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "機能",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Valorant Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "機能",
							paragraphs: [
								"Valorant HacksはValorant向けWindows PC用ESP wallhack、radar hack、valorant aimbotのundetectedパッケージです。ESP, soft aim, radar controls.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguard anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguard anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguard anti-cheatメンテナンス含む。",
								"サポート・法務: support@valoranthack.net",
							],
						},
					],
				},
				pricing: {
					title: "料金 | Monthly & Lifetime",
					description: "料金: $35 monthly or $150 lifetime licenses. 即時デジタル配信. undetected — Windows PC.",
					h1: "料金",
					intro: "Valorant HacksはValorant向けWindows PC用ESP wallhack、radar hack、valorant aimbotのundetectedパッケージです。料金.",
					imageAlt: "Valorant Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "料金",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Valorant Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "料金",
							paragraphs: [
								"Valorant HacksはValorant向けWindows PC用ESP wallhack、radar hack、valorant aimbotのundetectedパッケージです。$35 monthly or $150 lifetime licenses.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguard anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguard anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguard anti-cheatメンテナンス含む。",
								"サポート・法務: support@valoranthack.net",
							],
						},
					],
				},
				setup: {
					title: "セットアップ | PC Setup Guide",
					description: "セットアップ: Windows PC activation and first-launch setup. 即時デジタル配信. undetected — Windows PC.",
					h1: "セットアップ",
					intro: "Valorant HacksはValorant向けWindows PC用ESP wallhack、radar hack、valorant aimbotのundetectedパッケージです。セットアップ.",
					imageAlt: "Valorant Hacks setup guide screenshot for Windows PC",
					galleryTitle: "セットアップ",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Valorant Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "セットアップ",
							paragraphs: [
								"Valorant HacksはValorant向けWindows PC用ESP wallhack、radar hack、valorant aimbotのundetectedパッケージです。Windows PC activation and first-launch setup.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguard anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguard anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguard anti-cheatメンテナンス含む。",
								"サポート・法務: support@valoranthack.net",
							],
						},
					],
				},
				updates: {
					title: "更新 | Vanguard Maintenance Log",
					description: "更新: Vanguard patch status and rebuild notes. 即時デジタル配信. undetected — Windows PC.",
					h1: "更新",
					intro: "Valorant HacksはValorant向けWindows PC用ESP wallhack、radar hack、valorant aimbotのundetectedパッケージです。更新.",
					imageAlt: "Valorant Hacks live status after Vanguard and game patches",
					galleryTitle: "更新",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Valorant Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "更新",
							paragraphs: [
								"Valorant HacksはValorant向けWindows PC用ESP wallhack、radar hack、valorant aimbotのundetectedパッケージです。Vanguard patch status and rebuild notes.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguard anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguard anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguard anti-cheatメンテナンス含む。",
								"サポート・法務: support@valoranthack.net",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and Vanguard questions. 即時デジタル配信. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Valorant HacksはValorant向けWindows PC用ESP wallhack、radar hack、valorant aimbotのundetectedパッケージです。FAQ.",
					imageAlt: "Valorant Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Valorant Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Valorant HacksはValorant向けWindows PC用ESP wallhack、radar hack、valorant aimbotのundetectedパッケージです。ESP, soft aim, delivery, and Vanguard questions.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguard anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguard anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguard anti-cheatメンテナンス含む。",
								"サポート・法務: support@valoranthack.net",
							],
						},
					],
				},
				support: {
					title: "サポート | Help & Contact",
					description: "サポート: order help and license support contact. 即時デジタル配信. undetected — Windows PC.",
					h1: "サポート",
					intro: "Valorant HacksはValorant向けWindows PC用ESP wallhack、radar hack、valorant aimbotのundetectedパッケージです。サポート.",
					imageAlt: "Valorant Hacks support page for license and setup help",
					galleryTitle: "サポート",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Valorant Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "サポート",
							paragraphs: [
								"Valorant HacksはValorant向けWindows PC用ESP wallhack、radar hack、valorant aimbotのundetectedパッケージです。order help and license support contact.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguard anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguard anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguard anti-cheatメンテナンス含む。",
								"サポート・法務: support@valoranthack.net",
							],
						},
					],
				},
				undetected: {
					title: "Undetectedチート | Vanguard Safe Status",
					description: "Undetectedチート: undetected maintenance after Vanguard anti-cheat patches. 即時デジタル配信. undetected — Windows PC.",
					h1: "Undetectedチート",
					intro: "Valorant HacksはValorant向けWindows PC用ESP wallhack、radar hack、valorant aimbotのundetectedパッケージです。Undetectedチート.",
					imageAlt: "Valorant Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetectedチート",
					heroImage: "/images/valorant-hacks-wallhack.webp",
					ctaPrimary: "Valorant Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "Undetectedチート",
							paragraphs: [
								"Valorant HacksはValorant向けWindows PC用ESP wallhack、radar hack、valorant aimbotのundetectedパッケージです。undetected maintenance after Vanguard anti-cheat patches.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguard anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguard anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguard anti-cheatメンテナンス含む。",
								"サポート・法務: support@valoranthack.net",
							],
						},
					],
				},
				wallhack: {
					title: "Valorant Wallhack | ESP Visibility",
					description: "Valorant Wallhack: wallhack ESP for players, spike, and distance. 即時デジタル配信. undetected — Windows PC.",
					h1: "Valorant Wallhack",
					intro: "Valorant HacksはValorant向けWindows PC用ESP wallhack、radar hack、valorant aimbotのundetectedパッケージです。Valorant Wallhack.",
					imageAlt: "Valorant wallhack visibility through walls in a match",
					galleryTitle: "Valorant Wallhack",
					heroImage: "/images/valorant-hacks-wallhack.webp",
					ctaPrimary: "Valorant Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Valorant Wallhack",
							paragraphs: [
								"Valorant HacksはValorant向けWindows PC用ESP wallhack、radar hack、valorant aimbotのundetectedパッケージです。wallhack ESP for players, spike, and distance.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguard anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguard anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguard anti-cheatメンテナンス含む。",
								"サポート・法務: support@valoranthack.net",
							],
						},
					],
				},
				radar: {
					title: "Valorant Radar Hack | 2D Threat Overlay",
					description: "Valorant Radar Hack: 2D radar cues for flanks and rotations. 即時デジタル配信. undetected — Windows PC.",
					h1: "Valorant Radar Hack",
					intro: "Valorant HacksはValorant向けWindows PC用ESP wallhack、radar hack、valorant aimbotのundetectedパッケージです。Valorant Radar Hack.",
					imageAlt: "Valorant 2D radar overlay showing nearby threats",
					galleryTitle: "Valorant Radar Hack",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Valorant Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Valorant Radar Hack",
							paragraphs: [
								"Valorant HacksはValorant向けWindows PC用ESP wallhack、radar hack、valorant aimbotのundetectedパッケージです。2D radar cues for flanks and rotations.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguard anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguard anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguard anti-cheatメンテナンス含む。",
								"サポート・法務: support@valoranthack.net",
							],
						},
					],
				},
				vanguard: {
					title: "Vanguard Bypass | Patch Maintenance",
					description: "Vanguard Bypass: how Vanguard updates are handled for Valorant hacks. 即時デジタル配信. undetected — Windows PC.",
					h1: "Vanguard Bypass",
					intro: "Valorant HacksはValorant向けWindows PC用ESP wallhack、radar hack、valorant aimbotのundetectedパッケージです。Vanguard Bypass.",
					imageAlt: "Valorant Hacks maintenance after a Vanguard patch",
					galleryTitle: "Vanguard Bypass",
					heroImage: "/images/valorant-hacks-aimbot.webp",
					ctaPrimary: "Valorant Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Vanguard Bypass",
							paragraphs: [
								"Valorant HacksはValorant向けWindows PC用ESP wallhack、radar hack、valorant aimbotのundetectedパッケージです。how Vanguard updates are handled for Valorant hacks.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguard anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguard anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguard anti-cheatメンテナンス含む。",
								"サポート・法務: support@valoranthack.net",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Valorant Hacks 2026 | Buyer Guide",
					description: "Valorant Hacks 2026: 2026 Valorant hacks checklist before checkout. 即時デジタル配信. undetected — Windows PC.",
					h1: "Valorant Hacks 2026",
					intro: "Valorant HacksはValorant向けWindows PC用ESP wallhack、radar hack、valorant aimbotのundetectedパッケージです。Valorant Hacks 2026.",
					imageAlt: "Valorant Hacks product overview for Valorant",
					galleryTitle: "Valorant Hacks 2026",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Valorant Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "Valorant Hacks 2026",
							paragraphs: [
								"Valorant HacksはValorant向けWindows PC用ESP wallhack、radar hack、valorant aimbotのundetectedパッケージです。2026 Valorant hacks checklist before checkout.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguard anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguard anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguard anti-cheatメンテナンス含む。",
								"サポート・法務: support@valoranthack.net",
							],
						},
					],
				},
				hacks: {
					title: "Valorant Hacks | ESP Aimbot Guide",
					description: "Valorant Hacks: the Valorant hacks pillar for ESP and Aimbot. 即時デジタル配信. undetected — Windows PC.",
					h1: "Valorant Hacks",
					intro: "Valorant HacksはValorant向けWindows PC用ESP wallhack、radar hack、valorant aimbotのundetectedパッケージです。Valorant Hacks.",
					imageAlt: "Valorant Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Valorant Hacks",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Valorant Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Valorant Hacks",
							paragraphs: [
								"Valorant HacksはValorant向けWindows PC用ESP wallhack、radar hack、valorant aimbotのundetectedパッケージです。the Valorant hacks pillar for ESP and Aimbot.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguard anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguard anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguard anti-cheatメンテナンス含む。",
								"サポート・法務: support@valoranthack.net",
							],
						},
					],
				},
				"cheat-download": {
					title: "Valorant Cheat Download | Instant Access",
					description: "Valorant Cheat Download: digital license download after payment. 即時デジタル配信. undetected — Windows PC.",
					h1: "Valorant Cheat Download",
					intro: "Valorant HacksはValorant向けWindows PC用ESP wallhack、radar hack、valorant aimbotのundetectedパッケージです。Valorant Cheat Download.",
					imageAlt: "Valorant Hacks download and install delivery flow",
					galleryTitle: "Valorant Cheat Download",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Valorant Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Valorant Cheat Download",
							paragraphs: [
								"Valorant HacksはValorant向けWindows PC用ESP wallhack、radar hack、valorant aimbotのundetectedパッケージです。digital license download after payment.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguard anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguard anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguard anti-cheatメンテナンス含む。",
								"サポート・法務: support@valoranthack.net",
							],
						},
					],
				},
				"mod-menu": {
					title: "Valorant Mod Menu | In-Game Toggles",
					description: "Valorant Mod Menu: in-client ESP and soft aim toggles. 即時デジタル配信. undetected — Windows PC.",
					h1: "Valorant Mod Menu",
					intro: "Valorant HacksはValorant向けWindows PC用ESP wallhack、radar hack、valorant aimbotのundetectedパッケージです。Valorant Mod Menu.",
					imageAlt: "Valorant Hacks in-game menu controls",
					galleryTitle: "Valorant Mod Menu",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Valorant Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Valorant Mod Menu",
							paragraphs: [
								"Valorant HacksはValorant向けWindows PC用ESP wallhack、radar hack、valorant aimbotのundetectedパッケージです。in-client ESP and soft aim toggles.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguard anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguard anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguard anti-cheatメンテナンス含む。",
								"サポート・法務: support@valoranthack.net",
							],
						},
					],
				},
				"soft-aim": {
					title: "Valorant Soft Aim | Smooth Aim Settings",
					description: "Valorant Soft Aim: smooth soft aim settings for Windows PC. 即時デジタル配信. undetected — Windows PC.",
					h1: "Valorant Soft Aim",
					intro: "Valorant HacksはValorant向けWindows PC用ESP wallhack、radar hack、valorant aimbotのundetectedパッケージです。Valorant Soft Aim.",
					imageAlt: "Valorant soft aim FOV and smoothness settings",
					galleryTitle: "Valorant Soft Aim",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Valorant Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/valorant-aimbot/",
					sections: [
						{
							h2: "Valorant Soft Aim",
							paragraphs: [
								"Valorant HacksはValorant向けWindows PC用ESP wallhack、radar hack、valorant aimbotのundetectedパッケージです。smooth soft aim settings for Windows PC.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguard anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguard anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguard anti-cheatメンテナンス含む。",
								"サポート・法務: support@valoranthack.net",
							],
						},
					],
				},
				"best-cheats": {
					title: "最強Valorantチート | Buyer Checklist",
					description: "最強Valorantチート: what to compare before buying Valorant hacks. 即時デジタル配信. undetected — Windows PC.",
					h1: "最強Valorantチート",
					intro: "Valorant HacksはValorant向けWindows PC用ESP wallhack、radar hack、valorant aimbotのundetectedパッケージです。最強Valorantチート.",
					imageAlt: "Valorant Hacks overview for Valorant on PC",
					galleryTitle: "最強Valorantチート",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Valorant Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "最強Valorantチート",
							paragraphs: [
								"Valorant HacksはValorant向けWindows PC用ESP wallhack、radar hack、valorant aimbotのundetectedパッケージです。what to compare before buying Valorant hacks.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguard anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguard anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguard anti-cheatメンテナンス含む。",
								"サポート・法務: support@valoranthack.net",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Valorant Aimbot Hack | Soft Aim Assist",
					description: "Valorant Aimbot Hack: undetected Aimbot hack assist for Valorant. 即時デジタル配信. undetected — Windows PC.",
					h1: "Valorant Aimbot Hack",
					intro: "Valorant HacksはValorant向けWindows PC用ESP wallhack、radar hack、valorant aimbotのundetectedパッケージです。Valorant Aimbot Hack.",
					imageAlt: "Valorant aimbot hack controls and bone priority",
					galleryTitle: "Valorant Aimbot Hack",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Valorant Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/valorant-aimbot/",
					sections: [
						{
							h2: "Valorant Aimbot Hack",
							paragraphs: [
								"Valorant HacksはValorant向けWindows PC用ESP wallhack、radar hack、valorant aimbotのundetectedパッケージです。undetected Aimbot hack assist for Valorant.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguard anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguard anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguard anti-cheatメンテナンス含む。",
								"サポート・法務: support@valoranthack.net",
							],
						},
					],
				},
				"esp-hack": {
					title: "Valorant ESP Hack | Boxes & Spike",
					description: "Valorant ESP Hack: ESP hack boxes, spike markers, and distance. 即時デジタル配信. undetected — Windows PC.",
					h1: "Valorant ESP Hack",
					intro: "Valorant HacksはValorant向けWindows PC用ESP wallhack、radar hack、valorant aimbotのundetectedパッケージです。Valorant ESP Hack.",
					imageAlt: "Valorant ESP hack boxes and spike markers",
					galleryTitle: "Valorant ESP Hack",
					heroImage: "/images/valorant-hacks-wallhack.webp",
					ctaPrimary: "Valorant Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Valorant ESP Hack",
							paragraphs: [
								"Valorant HacksはValorant向けWindows PC用ESP wallhack、radar hack、valorant aimbotのundetectedパッケージです。ESP hack boxes, spike markers, and distance.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguard anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguard anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguard anti-cheatメンテナンス含む。",
								"サポート・法務: support@valoranthack.net",
							],
						},
					],
				},
				"unlock-all": {
					title: "Valorant Unlock All | What It Means",
					description: "Valorant Unlock All: unlock-all searches vs real ESP and Aimbot tools. 即時デジタル配信. undetected — Windows PC.",
					h1: "Valorant Unlock All",
					intro: "Valorant HacksはValorant向けWindows PC用ESP wallhack、radar hack、valorant aimbotのundetectedパッケージです。Valorant Unlock All.",
					imageAlt: "Valorant Hacks license features overview",
					galleryTitle: "Valorant Unlock All",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Valorant Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Valorant Unlock All",
							paragraphs: [
								"Valorant HacksはValorant向けWindows PC用ESP wallhack、radar hack、valorant aimbotのundetectedパッケージです。unlock-all searches vs real ESP and Aimbot tools.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguard anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguard anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguard anti-cheatメンテナンス含む。",
								"サポート・法務: support@valoranthack.net",
							],
						},
					],
				},
				privacy: {
					title: "プライバシーポリシー | Valorant Hacks",
					description: "プライバシーポリシー for Valorant Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "プライバシーポリシー",
					intro: "Valorant HacksはValorant向けWindows PC用ESP wallhack、radar hack、valorant aimbotのundetectedパッケージです。プライバシーポリシー for valoranthack.net and Valorant licenses.",
					imageAlt: "valorant hacks",
					galleryTitle: "valorant hacks",
					heroImage: "/images/valorant-hacks-aimbot.webp",
					ctaPrimary: "サポートにメール",
					ctaSecondary: "利用規約",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "収集する情報",
							paragraphs: [
								"Valorant HacksはValorant向けWindows PC用ESP wallhack、radar hack、valorant aimbotのundetectedパッケージです。Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on valoranthack.net.",
							],
						},
						{
							h2: "情報の利用",
							paragraphs: [
								"Valorant HacksはValorant向けWindows PC用ESP wallhack、radar hack、valorant aimbotのundetectedパッケージです。Support responses, order resolution, and legal compliance when required.",
								"Vanguard anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
							],
						},
						{
							h2: "あなたの権利",
							paragraphs: [
								"サポート・法務: support@valoranthack.net",
								"Email: support@valoranthack.net",
							],
						},
					],
				},
				refund: {
					title: "返金ポリシー | Valorant Hacks",
					description: "返金ポリシー for Valorant Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "返金ポリシー",
					intro: "Valorant HacksはValorant向けWindows PC用ESP wallhack、radar hack、valorant aimbotのundetectedパッケージです。返金ポリシー for valoranthack.net and Valorant licenses.",
					imageAlt: "valorant hacks",
					galleryTitle: "valorant hacks",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "サポートにメール",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "デジタル配信",
							paragraphs: [
								"Valorant HacksはValorant向けWindows PC用ESP wallhack、radar hack、valorant aimbotのundetectedパッケージです。Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguard anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "返金承認",
							paragraphs: [
								"Valorant HacksはValorant向けWindows PC用ESP wallhack、radar hack、valorant aimbotのundetectedパッケージです。Support responses, order resolution, and legal compliance when required.",
								"Vanguard anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
							],
						},
						{
							h2: "申請方法",
							paragraphs: [
								"サポート・法務: support@valoranthack.net",
								"Email: support@valoranthack.net",
							],
						},
					],
				},
				terms: {
					title: "利用規約 | Valorant Hacks",
					description: "利用規約 for Valorant Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "利用規約",
					intro: "Valorant HacksはValorant向けWindows PC用ESP wallhack、radar hack、valorant aimbotのundetectedパッケージです。利用規約 for valoranthack.net and Valorant licenses.",
					imageAlt: "valorant hacks",
					galleryTitle: "valorant hacks",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "サポートにメール",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "規約への同意",
							paragraphs: [
								"Valorant HacksはValorant向けWindows PC用ESP wallhack、radar hack、valorant aimbotのundetectedパッケージです。Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguard anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "リスク",
							paragraphs: [
								"Valorant HacksはValorant向けWindows PC用ESP wallhack、radar hack、valorant aimbotのundetectedパッケージです。Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Riot Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "変更",
							paragraphs: [
								"サポート・法務: support@valoranthack.net",
								"Email: support@valoranthack.net",
							],
						},
					],
				},
			},
		},
		ko: {
			ui: {
				nav: {
					home: "홈",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "기능",
					pricing: "가격",
					setup: "설치",
					updates: "업데이트",
					faq: "FAQ",
					buyNow: "구매하기",
				},
				hero: {
					accent: "Undetected Valorant 치트",
					accentShort: "Valorant Hacks",
					subtitle: "Valorant Windows PC용 ESP wallhack, radar hack, Aimbot — Vanguard anti-cheat 유지보수 포함.",
					subtitleShort: "Valorant PC용 ESP, radar, Aimbot",
					buyNow: "지금 구매",
					seeFeatures: "기능 보기",
				},
				trust: {
					status: "온라인",
					statusNote: "Valorant Hacks 패키지는 Valorant Windows PC에서 이용 가능합니다.",
					statusShort: "가동 중",
					delivery: "즉시 디지털 배송",
					platform: "Windows 10 & 11",
					antiCheat: "Vanguard anti-cheat 유지보수 지원",
					antiCheatShort: "Vanguard anti-cheat 지원",
				},
				product: {
					title: "Valorant Hacks",
					addToCart: "장바구니에 추가",
					monthly: "월간",
					lifetime: "평생",
					available: "지금 이용 가능",
					gameBadge: "Valorant",
					platformBadge: "Windows PC",
					statusBadge: "Undetected 패키지",
				},
				reviews: {
					title: "플레이어 후기",
					subtitle: "Valorant Hacks 구매자 최근 피드백",
					outOf: "/5",
					countLabel: "리뷰",
				},
				common: {
					buyNow: "지금 구매",
					readGuide: "가이드 읽기",
					language: "언어",
					officialLanguageNote: "영어가 공식 언어입니다. 다른 언어는 글로벌 SEO를 위해 번역되었습니다.",
					relatedPages: "관련 페이지",
				},
				footer: {
					explore: "탐색",
					help: "도움말 및 법적",
					tagline: "Valorant용 undetected ESP, wallhack, radar, Aimbot — Zadeyo 결제.",
				},
				images: {
					hero: "Valorant Hacks hero — ESP and aimbot overlay in Valorant",
					espWallhack: "Wallhack outlines showing agents and enemies through walls",
					aimbotCombat: "Soft aim assist overlay during a Valorant round",
					squadFight: "Valorant Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Valorant match",
					headerArt: "Aimbot view and bone priority controls for Valorant",
					cheatsPackage: "2D radar threat overlay for Valorant",
					rebootFight: "Aimbot assist during a Valorant firefight",
					battleRoyale: "Valorant Hacks in-match overview for Windows PC",
					battleRoyaleIsland: "ESP markers for agents and the spike in Valorant",
				},
			},
			pages: {
				home: {
					title: "Valorant Hacks | Official PC Site",
					description: "Valorant undetected 치트. ESP wallhack, radar hack, Aimbot, Vanguard anti-cheat 유지보수. 즉시 디지털 배송.",
					h1: "Valorant Hacks",
					intro: "Valorant Windows PC undetected 패키지: ESP wallhack, radar, Aimbot, Vanguard anti-cheat 유지보수 포함.",
					imageAlt: "Valorant hacks hero ESP aimbot wallhack",
					galleryTitle: "Valorant Hacks 갤러리 — ESP, Aimbot, wallhack",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Valorant Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026년 Valorant Hacks를 선택하는 이유",
							paragraphs: [
								"Valorant Hacks는 Valorant Windows PC용 ESP wallhack, radar hack, valorant aimbot undetected 패키지입니다. Competitive 및 Deathmatch에서 적 분대 읽기에 이상적.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot 단일 라이선스",
							paragraphs: [
								"Valorant Hacks는 Valorant Windows PC용 ESP wallhack, radar hack, valorant aimbot undetected 패키지입니다. 별도 도구 대신 단일 라이선스.",
								"Vanguard anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
							],
						},
					],
				},
				"valorant-esp": {
					title: "Valorant ESP | Player Boxes & Wallhack",
					description: "Valorant ESP: player boxes, spike markers, and wallhack overlays. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Valorant ESP",
					intro: "Valorant Hacks는 Valorant Windows PC용 ESP wallhack, radar hack, valorant aimbot undetected 패키지입니다. Valorant ESP.",
					imageAlt: "Valorant ESP player boxes and distance readouts in a match",
					galleryTitle: "Valorant ESP",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Valorant Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "Valorant ESP",
							paragraphs: [
								"Valorant Hacks는 Valorant Windows PC용 ESP wallhack, radar hack, valorant aimbot undetected 패키지입니다. player boxes, spike markers, and wallhack overlays.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard anti-cheat 유지보수 포함.",
								"지원 및 법무: support@valoranthack.net",
							],
						},
					],
				},
				"valorant-aimbot": {
					title: "Valorant Aimbot | Soft Aim Controls",
					description: "Valorant Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Valorant Aimbot",
					intro: "Valorant Hacks는 Valorant Windows PC용 ESP wallhack, radar hack, valorant aimbot undetected 패키지입니다. Valorant Aimbot.",
					imageAlt: "Valorant aimbot and soft aim controls on Windows PC",
					galleryTitle: "Valorant Aimbot",
					heroImage: "/images/valorant-hacks-aimbot.webp",
					ctaPrimary: "Valorant Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Valorant Aimbot",
							paragraphs: [
								"Valorant Hacks는 Valorant Windows PC용 ESP wallhack, radar hack, valorant aimbot undetected 패키지입니다. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard anti-cheat 유지보수 포함.",
								"지원 및 법무: support@valoranthack.net",
							],
						},
					],
				},
				features: {
					title: "기능 | Full Feature List",
					description: "기능: ESP, soft aim, radar controls. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "기능",
					intro: "Valorant Hacks는 Valorant Windows PC용 ESP wallhack, radar hack, valorant aimbot undetected 패키지입니다. 기능.",
					imageAlt: "Valorant Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "기능",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Valorant Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "기능",
							paragraphs: [
								"Valorant Hacks는 Valorant Windows PC용 ESP wallhack, radar hack, valorant aimbot undetected 패키지입니다. ESP, soft aim, radar controls.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard anti-cheat 유지보수 포함.",
								"지원 및 법무: support@valoranthack.net",
							],
						},
					],
				},
				pricing: {
					title: "가격 | Monthly & Lifetime",
					description: "가격: $35 monthly or $150 lifetime licenses. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "가격",
					intro: "Valorant Hacks는 Valorant Windows PC용 ESP wallhack, radar hack, valorant aimbot undetected 패키지입니다. 가격.",
					imageAlt: "Valorant Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "가격",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Valorant Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "가격",
							paragraphs: [
								"Valorant Hacks는 Valorant Windows PC용 ESP wallhack, radar hack, valorant aimbot undetected 패키지입니다. $35 monthly or $150 lifetime licenses.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard anti-cheat 유지보수 포함.",
								"지원 및 법무: support@valoranthack.net",
							],
						},
					],
				},
				setup: {
					title: "설치 | PC Setup Guide",
					description: "설치: Windows PC activation and first-launch setup. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "설치",
					intro: "Valorant Hacks는 Valorant Windows PC용 ESP wallhack, radar hack, valorant aimbot undetected 패키지입니다. 설치.",
					imageAlt: "Valorant Hacks setup guide screenshot for Windows PC",
					galleryTitle: "설치",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Valorant Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "설치",
							paragraphs: [
								"Valorant Hacks는 Valorant Windows PC용 ESP wallhack, radar hack, valorant aimbot undetected 패키지입니다. Windows PC activation and first-launch setup.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard anti-cheat 유지보수 포함.",
								"지원 및 법무: support@valoranthack.net",
							],
						},
					],
				},
				updates: {
					title: "업데이트 | Vanguard Maintenance Log",
					description: "업데이트: Vanguard patch status and rebuild notes. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "업데이트",
					intro: "Valorant Hacks는 Valorant Windows PC용 ESP wallhack, radar hack, valorant aimbot undetected 패키지입니다. 업데이트.",
					imageAlt: "Valorant Hacks live status after Vanguard and game patches",
					galleryTitle: "업데이트",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Valorant Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "업데이트",
							paragraphs: [
								"Valorant Hacks는 Valorant Windows PC용 ESP wallhack, radar hack, valorant aimbot undetected 패키지입니다. Vanguard patch status and rebuild notes.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard anti-cheat 유지보수 포함.",
								"지원 및 법무: support@valoranthack.net",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and Vanguard questions. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Valorant Hacks는 Valorant Windows PC용 ESP wallhack, radar hack, valorant aimbot undetected 패키지입니다. FAQ.",
					imageAlt: "Valorant Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Valorant Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Valorant Hacks는 Valorant Windows PC용 ESP wallhack, radar hack, valorant aimbot undetected 패키지입니다. ESP, soft aim, delivery, and Vanguard questions.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard anti-cheat 유지보수 포함.",
								"지원 및 법무: support@valoranthack.net",
							],
						},
					],
				},
				support: {
					title: "지원 | Help & Contact",
					description: "지원: order help and license support contact. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "지원",
					intro: "Valorant Hacks는 Valorant Windows PC용 ESP wallhack, radar hack, valorant aimbot undetected 패키지입니다. 지원.",
					imageAlt: "Valorant Hacks support page for license and setup help",
					galleryTitle: "지원",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Valorant Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "지원",
							paragraphs: [
								"Valorant Hacks는 Valorant Windows PC용 ESP wallhack, radar hack, valorant aimbot undetected 패키지입니다. order help and license support contact.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard anti-cheat 유지보수 포함.",
								"지원 및 법무: support@valoranthack.net",
							],
						},
					],
				},
				undetected: {
					title: "Undetected 치트 | Vanguard Safe Status",
					description: "Undetected 치트: undetected maintenance after Vanguard anti-cheat patches. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Undetected 치트",
					intro: "Valorant Hacks는 Valorant Windows PC용 ESP wallhack, radar hack, valorant aimbot undetected 패키지입니다. Undetected 치트.",
					imageAlt: "Valorant Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected 치트",
					heroImage: "/images/valorant-hacks-wallhack.webp",
					ctaPrimary: "Valorant Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "Undetected 치트",
							paragraphs: [
								"Valorant Hacks는 Valorant Windows PC용 ESP wallhack, radar hack, valorant aimbot undetected 패키지입니다. undetected maintenance after Vanguard anti-cheat patches.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard anti-cheat 유지보수 포함.",
								"지원 및 법무: support@valoranthack.net",
							],
						},
					],
				},
				wallhack: {
					title: "Valorant Wallhack | ESP Visibility",
					description: "Valorant Wallhack: wallhack ESP for players, spike, and distance. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Valorant Wallhack",
					intro: "Valorant Hacks는 Valorant Windows PC용 ESP wallhack, radar hack, valorant aimbot undetected 패키지입니다. Valorant Wallhack.",
					imageAlt: "Valorant wallhack visibility through walls in a match",
					galleryTitle: "Valorant Wallhack",
					heroImage: "/images/valorant-hacks-wallhack.webp",
					ctaPrimary: "Valorant Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Valorant Wallhack",
							paragraphs: [
								"Valorant Hacks는 Valorant Windows PC용 ESP wallhack, radar hack, valorant aimbot undetected 패키지입니다. wallhack ESP for players, spike, and distance.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard anti-cheat 유지보수 포함.",
								"지원 및 법무: support@valoranthack.net",
							],
						},
					],
				},
				radar: {
					title: "Valorant Radar Hack | 2D Threat Overlay",
					description: "Valorant Radar Hack: 2D radar cues for flanks and rotations. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Valorant Radar Hack",
					intro: "Valorant Hacks는 Valorant Windows PC용 ESP wallhack, radar hack, valorant aimbot undetected 패키지입니다. Valorant Radar Hack.",
					imageAlt: "Valorant 2D radar overlay showing nearby threats",
					galleryTitle: "Valorant Radar Hack",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Valorant Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Valorant Radar Hack",
							paragraphs: [
								"Valorant Hacks는 Valorant Windows PC용 ESP wallhack, radar hack, valorant aimbot undetected 패키지입니다. 2D radar cues for flanks and rotations.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard anti-cheat 유지보수 포함.",
								"지원 및 법무: support@valoranthack.net",
							],
						},
					],
				},
				vanguard: {
					title: "Vanguard Bypass | Patch Maintenance",
					description: "Vanguard Bypass: how Vanguard updates are handled for Valorant hacks. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Vanguard Bypass",
					intro: "Valorant Hacks는 Valorant Windows PC용 ESP wallhack, radar hack, valorant aimbot undetected 패키지입니다. Vanguard Bypass.",
					imageAlt: "Valorant Hacks maintenance after a Vanguard patch",
					galleryTitle: "Vanguard Bypass",
					heroImage: "/images/valorant-hacks-aimbot.webp",
					ctaPrimary: "Valorant Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Vanguard Bypass",
							paragraphs: [
								"Valorant Hacks는 Valorant Windows PC용 ESP wallhack, radar hack, valorant aimbot undetected 패키지입니다. how Vanguard updates are handled for Valorant hacks.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard anti-cheat 유지보수 포함.",
								"지원 및 법무: support@valoranthack.net",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Valorant Hacks 2026 | Buyer Guide",
					description: "Valorant Hacks 2026: 2026 Valorant hacks checklist before checkout. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Valorant Hacks 2026",
					intro: "Valorant Hacks는 Valorant Windows PC용 ESP wallhack, radar hack, valorant aimbot undetected 패키지입니다. Valorant Hacks 2026.",
					imageAlt: "Valorant Hacks product overview for Valorant",
					galleryTitle: "Valorant Hacks 2026",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Valorant Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "Valorant Hacks 2026",
							paragraphs: [
								"Valorant Hacks는 Valorant Windows PC용 ESP wallhack, radar hack, valorant aimbot undetected 패키지입니다. 2026 Valorant hacks checklist before checkout.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard anti-cheat 유지보수 포함.",
								"지원 및 법무: support@valoranthack.net",
							],
						},
					],
				},
				hacks: {
					title: "Valorant Hacks | ESP Aimbot Guide",
					description: "Valorant Hacks: the Valorant hacks pillar for ESP and Aimbot. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Valorant Hacks",
					intro: "Valorant Hacks는 Valorant Windows PC용 ESP wallhack, radar hack, valorant aimbot undetected 패키지입니다. Valorant Hacks.",
					imageAlt: "Valorant Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Valorant Hacks",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Valorant Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Valorant Hacks",
							paragraphs: [
								"Valorant Hacks는 Valorant Windows PC용 ESP wallhack, radar hack, valorant aimbot undetected 패키지입니다. the Valorant hacks pillar for ESP and Aimbot.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard anti-cheat 유지보수 포함.",
								"지원 및 법무: support@valoranthack.net",
							],
						},
					],
				},
				"cheat-download": {
					title: "Valorant Cheat Download | Instant Access",
					description: "Valorant Cheat Download: digital license download after payment. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Valorant Cheat Download",
					intro: "Valorant Hacks는 Valorant Windows PC용 ESP wallhack, radar hack, valorant aimbot undetected 패키지입니다. Valorant Cheat Download.",
					imageAlt: "Valorant Hacks download and install delivery flow",
					galleryTitle: "Valorant Cheat Download",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Valorant Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Valorant Cheat Download",
							paragraphs: [
								"Valorant Hacks는 Valorant Windows PC용 ESP wallhack, radar hack, valorant aimbot undetected 패키지입니다. digital license download after payment.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard anti-cheat 유지보수 포함.",
								"지원 및 법무: support@valoranthack.net",
							],
						},
					],
				},
				"mod-menu": {
					title: "Valorant 모드 메뉴 | In-Game Toggles",
					description: "Valorant 모드 메뉴: in-client ESP and soft aim toggles. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Valorant 모드 메뉴",
					intro: "Valorant Hacks는 Valorant Windows PC용 ESP wallhack, radar hack, valorant aimbot undetected 패키지입니다. Valorant 모드 메뉴.",
					imageAlt: "Valorant Hacks in-game menu controls",
					galleryTitle: "Valorant 모드 메뉴",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Valorant Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Valorant 모드 메뉴",
							paragraphs: [
								"Valorant Hacks는 Valorant Windows PC용 ESP wallhack, radar hack, valorant aimbot undetected 패키지입니다. in-client ESP and soft aim toggles.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard anti-cheat 유지보수 포함.",
								"지원 및 법무: support@valoranthack.net",
							],
						},
					],
				},
				"soft-aim": {
					title: "Valorant Soft Aim | Smooth Aim Settings",
					description: "Valorant Soft Aim: smooth soft aim settings for Windows PC. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Valorant Soft Aim",
					intro: "Valorant Hacks는 Valorant Windows PC용 ESP wallhack, radar hack, valorant aimbot undetected 패키지입니다. Valorant Soft Aim.",
					imageAlt: "Valorant soft aim FOV and smoothness settings",
					galleryTitle: "Valorant Soft Aim",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Valorant Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/valorant-aimbot/",
					sections: [
						{
							h2: "Valorant Soft Aim",
							paragraphs: [
								"Valorant Hacks는 Valorant Windows PC용 ESP wallhack, radar hack, valorant aimbot undetected 패키지입니다. smooth soft aim settings for Windows PC.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard anti-cheat 유지보수 포함.",
								"지원 및 법무: support@valoranthack.net",
							],
						},
					],
				},
				"best-cheats": {
					title: "최고의 Valorant 치트 | Buyer Checklist",
					description: "최고의 Valorant 치트: what to compare before buying Valorant hacks. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "최고의 Valorant 치트",
					intro: "Valorant Hacks는 Valorant Windows PC용 ESP wallhack, radar hack, valorant aimbot undetected 패키지입니다. 최고의 Valorant 치트.",
					imageAlt: "Valorant Hacks overview for Valorant on PC",
					galleryTitle: "최고의 Valorant 치트",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Valorant Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "최고의 Valorant 치트",
							paragraphs: [
								"Valorant Hacks는 Valorant Windows PC용 ESP wallhack, radar hack, valorant aimbot undetected 패키지입니다. what to compare before buying Valorant hacks.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard anti-cheat 유지보수 포함.",
								"지원 및 법무: support@valoranthack.net",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Valorant 에임봇 핵 | Soft Aim Assist",
					description: "Valorant 에임봇 핵: undetected Aimbot hack assist for Valorant. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Valorant 에임봇 핵",
					intro: "Valorant Hacks는 Valorant Windows PC용 ESP wallhack, radar hack, valorant aimbot undetected 패키지입니다. Valorant 에임봇 핵.",
					imageAlt: "Valorant aimbot hack controls and bone priority",
					galleryTitle: "Valorant 에임봇 핵",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Valorant Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/valorant-aimbot/",
					sections: [
						{
							h2: "Valorant 에임봇 핵",
							paragraphs: [
								"Valorant Hacks는 Valorant Windows PC용 ESP wallhack, radar hack, valorant aimbot undetected 패키지입니다. undetected Aimbot hack assist for Valorant.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard anti-cheat 유지보수 포함.",
								"지원 및 법무: support@valoranthack.net",
							],
						},
					],
				},
				"esp-hack": {
					title: "Valorant ESP 핵 | Boxes & Spike",
					description: "Valorant ESP 핵: ESP hack boxes, spike markers, and distance. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Valorant ESP 핵",
					intro: "Valorant Hacks는 Valorant Windows PC용 ESP wallhack, radar hack, valorant aimbot undetected 패키지입니다. Valorant ESP 핵.",
					imageAlt: "Valorant ESP hack boxes and spike markers",
					galleryTitle: "Valorant ESP 핵",
					heroImage: "/images/valorant-hacks-wallhack.webp",
					ctaPrimary: "Valorant Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Valorant ESP 핵",
							paragraphs: [
								"Valorant Hacks는 Valorant Windows PC용 ESP wallhack, radar hack, valorant aimbot undetected 패키지입니다. ESP hack boxes, spike markers, and distance.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard anti-cheat 유지보수 포함.",
								"지원 및 법무: support@valoranthack.net",
							],
						},
					],
				},
				"unlock-all": {
					title: "Valorant Unlock All | What It Means",
					description: "Valorant Unlock All: unlock-all searches vs real ESP and Aimbot tools. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Valorant Unlock All",
					intro: "Valorant Hacks는 Valorant Windows PC용 ESP wallhack, radar hack, valorant aimbot undetected 패키지입니다. Valorant Unlock All.",
					imageAlt: "Valorant Hacks license features overview",
					galleryTitle: "Valorant Unlock All",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Valorant Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Valorant Unlock All",
							paragraphs: [
								"Valorant Hacks는 Valorant Windows PC용 ESP wallhack, radar hack, valorant aimbot undetected 패키지입니다. unlock-all searches vs real ESP and Aimbot tools.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard anti-cheat 유지보수 포함.",
								"지원 및 법무: support@valoranthack.net",
							],
						},
					],
				},
				privacy: {
					title: "개인정보 처리방침 | Valorant Hacks",
					description: "개인정보 처리방침 for Valorant Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "개인정보 처리방침",
					intro: "Valorant Hacks는 Valorant Windows PC용 ESP wallhack, radar hack, valorant aimbot undetected 패키지입니다. 개인정보 처리방침 for valoranthack.net and Valorant licenses.",
					imageAlt: "valorant hacks",
					galleryTitle: "valorant hacks",
					heroImage: "/images/valorant-hacks-aimbot.webp",
					ctaPrimary: "지원 이메일",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Valorant Hacks는 Valorant Windows PC용 ESP wallhack, radar hack, valorant aimbot undetected 패키지입니다. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on valoranthack.net.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Valorant Hacks는 Valorant Windows PC용 ESP wallhack, radar hack, valorant aimbot undetected 패키지입니다. Support responses, order resolution, and legal compliance when required.",
								"Vanguard anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"지원 및 법무: support@valoranthack.net",
								"Email: support@valoranthack.net",
							],
						},
					],
				},
				refund: {
					title: "환불 정책 | Valorant Hacks",
					description: "환불 정책 for Valorant Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "환불 정책",
					intro: "Valorant Hacks는 Valorant Windows PC용 ESP wallhack, radar hack, valorant aimbot undetected 패키지입니다. 환불 정책 for valoranthack.net and Valorant licenses.",
					imageAlt: "valorant hacks",
					galleryTitle: "valorant hacks",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "지원 이메일",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Valorant Hacks는 Valorant Windows PC용 ESP wallhack, radar hack, valorant aimbot undetected 패키지입니다. Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Valorant Hacks는 Valorant Windows PC용 ESP wallhack, radar hack, valorant aimbot undetected 패키지입니다. Support responses, order resolution, and legal compliance when required.",
								"Vanguard anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"지원 및 법무: support@valoranthack.net",
								"Email: support@valoranthack.net",
							],
						},
					],
				},
				terms: {
					title: "이용 약관 | Valorant Hacks",
					description: "이용 약관 for Valorant Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "이용 약관",
					intro: "Valorant Hacks는 Valorant Windows PC용 ESP wallhack, radar hack, valorant aimbot undetected 패키지입니다. 이용 약관 for valoranthack.net and Valorant licenses.",
					imageAlt: "valorant hacks",
					galleryTitle: "valorant hacks",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "지원 이메일",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Valorant Hacks는 Valorant Windows PC용 ESP wallhack, radar hack, valorant aimbot undetected 패키지입니다. Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Valorant Hacks는 Valorant Windows PC용 ESP wallhack, radar hack, valorant aimbot undetected 패키지입니다. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Riot Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"지원 및 법무: support@valoranthack.net",
								"Email: support@valoranthack.net",
							],
						},
					],
				},
			},
		},
		zh: {
			ui: {
				nav: {
					home: "首页",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "功能",
					pricing: "价格",
					setup: "安装",
					updates: "更新",
					faq: "常见问题",
					buyNow: "立即购买",
				},
				hero: {
					accent: "Undetected Valorant作弊",
					accentShort: "Valorant Hacks",
					subtitle: "适用于Valorant Windows PC的ESP wallhack、radar hack和Aimbot — 含Vanguard anti-cheat维护。",
					subtitleShort: "Valorant PC版ESP、radar与Aimbot",
					buyNow: "立即购买",
					seeFeatures: "查看功能",
				},
				trust: {
					status: "在线",
					statusNote: "Valorant Hacks套餐已在Valorant Windows PC上线。",
					statusShort: "运行中",
					delivery: "即时数字交付",
					platform: "Windows 10 和 11",
					antiCheat: "支持Vanguard anti-cheat维护",
					antiCheatShort: "Vanguard anti-cheat支持",
				},
				product: {
					title: "Valorant Hacks",
					addToCart: "加入购物车",
					monthly: "月付",
					lifetime: "终身",
					available: "现已可用",
					gameBadge: "Valorant",
					platformBadge: "Windows PC",
					statusBadge: "Undetected套餐",
				},
				reviews: {
					title: "玩家评价",
					subtitle: "Valorant Hacks 买家近期反馈",
					outOf: "/5",
					countLabel: "条评价",
				},
				common: {
					buyNow: "立即购买",
					readGuide: "阅读指南",
					language: "语言",
					officialLanguageNote: "英语为官方语言。其他语言为全球SEO翻译版本。",
					relatedPages: "相关页面",
				},
				footer: {
					explore: "探索",
					help: "帮助与法律",
					tagline: "Valorant undetected ESP、wallhack、radar与Aimbot — 通过Zadeyo结账。",
				},
				images: {
					hero: "Valorant Hacks hero — ESP and aimbot overlay in Valorant",
					espWallhack: "Wallhack outlines showing agents and enemies through walls",
					aimbotCombat: "Soft aim assist overlay during a Valorant round",
					squadFight: "Valorant Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Valorant match",
					headerArt: "Aimbot view and bone priority controls for Valorant",
					cheatsPackage: "2D radar threat overlay for Valorant",
					rebootFight: "Aimbot assist during a Valorant firefight",
					battleRoyale: "Valorant Hacks in-match overview for Windows PC",
					battleRoyaleIsland: "ESP markers for agents and the spike in Valorant",
				},
			},
			pages: {
				home: {
					title: "Valorant Hacks | Official PC Site",
					description: "Valorant undetected作弊。ESP wallhack、radar hack、Aimbot、Vanguard anti-cheat维护。即时数字交付。",
					h1: "Valorant Hacks",
					intro: "Valorant Windows PC undetected套餐：ESP wallhack、radar、Aimbot，含Vanguard anti-cheat维护。",
					imageAlt: "Valorant hacks hero ESP aimbot wallhack",
					galleryTitle: "Valorant Hacks图库 — ESP、Aimbot、wallhack",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "购买 Valorant Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026年选择Valorant Hacks的原因",
							paragraphs: [
								"Valorant Hacks为ValorantWindows PC提供ESP wallhack、radar hack和valorant aimbotundetected套餐。适合在Competitive和Deathmatch中读取敌方小队。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard anti-cheat维护。",
							],
						},
						{
							h2: "ESP wallhack、radar、Aimbot单一许可证",
							paragraphs: [
								"Valorant Hacks为ValorantWindows PC提供ESP wallhack、radar hack和valorant aimbotundetected套餐。一个许可证而非多个工具。",
								"Vanguard anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
							],
						},
					],
				},
				"valorant-esp": {
					title: "Valorant ESP | Player Boxes & Wallhack",
					description: "Valorant ESP: player boxes, spike markers, and wallhack overlays. 即时数字交付. undetected — Windows PC.",
					h1: "Valorant ESP",
					intro: "Valorant Hacks为ValorantWindows PC提供ESP wallhack、radar hack和valorant aimbotundetected套餐。Valorant ESP.",
					imageAlt: "Valorant ESP player boxes and distance readouts in a match",
					galleryTitle: "Valorant ESP",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "购买 Valorant Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "Valorant ESP",
							paragraphs: [
								"Valorant Hacks为ValorantWindows PC提供ESP wallhack、radar hack和valorant aimbotundetected套餐。player boxes, spike markers, and wallhack overlays.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard anti-cheat维护。",
								"支持与法务：support@valoranthack.net",
							],
						},
					],
				},
				"valorant-aimbot": {
					title: "Valorant Aimbot | Soft Aim Controls",
					description: "Valorant Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. 即时数字交付. undetected — Windows PC.",
					h1: "Valorant Aimbot",
					intro: "Valorant Hacks为ValorantWindows PC提供ESP wallhack、radar hack和valorant aimbotundetected套餐。Valorant Aimbot.",
					imageAlt: "Valorant aimbot and soft aim controls on Windows PC",
					galleryTitle: "Valorant Aimbot",
					heroImage: "/images/valorant-hacks-aimbot.webp",
					ctaPrimary: "购买 Valorant Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Valorant Aimbot",
							paragraphs: [
								"Valorant Hacks为ValorantWindows PC提供ESP wallhack、radar hack和valorant aimbotundetected套餐。soft aim, FOV, and per-weapon Aimbot profiles.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard anti-cheat维护。",
								"支持与法务：support@valoranthack.net",
							],
						},
					],
				},
				features: {
					title: "功能 | Full Feature List",
					description: "功能: ESP, soft aim, radar controls. 即时数字交付. undetected — Windows PC.",
					h1: "功能",
					intro: "Valorant Hacks为ValorantWindows PC提供ESP wallhack、radar hack和valorant aimbotundetected套餐。功能.",
					imageAlt: "Valorant Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "功能",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "购买 Valorant Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "功能",
							paragraphs: [
								"Valorant Hacks为ValorantWindows PC提供ESP wallhack、radar hack和valorant aimbotundetected套餐。ESP, soft aim, radar controls.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard anti-cheat维护。",
								"支持与法务：support@valoranthack.net",
							],
						},
					],
				},
				pricing: {
					title: "价格 | Monthly & Lifetime",
					description: "价格: $35 monthly or $150 lifetime licenses. 即时数字交付. undetected — Windows PC.",
					h1: "价格",
					intro: "Valorant Hacks为ValorantWindows PC提供ESP wallhack、radar hack和valorant aimbotundetected套餐。价格.",
					imageAlt: "Valorant Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "价格",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "购买 Valorant Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "价格",
							paragraphs: [
								"Valorant Hacks为ValorantWindows PC提供ESP wallhack、radar hack和valorant aimbotundetected套餐。$35 monthly or $150 lifetime licenses.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard anti-cheat维护。",
								"支持与法务：support@valoranthack.net",
							],
						},
					],
				},
				setup: {
					title: "安装 | PC Setup Guide",
					description: "安装: Windows PC activation and first-launch setup. 即时数字交付. undetected — Windows PC.",
					h1: "安装",
					intro: "Valorant Hacks为ValorantWindows PC提供ESP wallhack、radar hack和valorant aimbotundetected套餐。安装.",
					imageAlt: "Valorant Hacks setup guide screenshot for Windows PC",
					galleryTitle: "安装",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "购买 Valorant Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "安装",
							paragraphs: [
								"Valorant Hacks为ValorantWindows PC提供ESP wallhack、radar hack和valorant aimbotundetected套餐。Windows PC activation and first-launch setup.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard anti-cheat维护。",
								"支持与法务：support@valoranthack.net",
							],
						},
					],
				},
				updates: {
					title: "更新 | Vanguard Maintenance Log",
					description: "更新: Vanguard patch status and rebuild notes. 即时数字交付. undetected — Windows PC.",
					h1: "更新",
					intro: "Valorant Hacks为ValorantWindows PC提供ESP wallhack、radar hack和valorant aimbotundetected套餐。更新.",
					imageAlt: "Valorant Hacks live status after Vanguard and game patches",
					galleryTitle: "更新",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "购买 Valorant Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "更新",
							paragraphs: [
								"Valorant Hacks为ValorantWindows PC提供ESP wallhack、radar hack和valorant aimbotundetected套餐。Vanguard patch status and rebuild notes.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard anti-cheat维护。",
								"支持与法务：support@valoranthack.net",
							],
						},
					],
				},
				faq: {
					title: "常见问题 | Common Answers",
					description: "常见问题: ESP, soft aim, delivery, and Vanguard questions. 即时数字交付. undetected — Windows PC.",
					h1: "常见问题",
					intro: "Valorant Hacks为ValorantWindows PC提供ESP wallhack、radar hack和valorant aimbotundetected套餐。常见问题.",
					imageAlt: "Valorant Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "常见问题",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "购买 Valorant Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "常见问题",
							paragraphs: [
								"Valorant Hacks为ValorantWindows PC提供ESP wallhack、radar hack和valorant aimbotundetected套餐。ESP, soft aim, delivery, and Vanguard questions.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard anti-cheat维护。",
								"支持与法务：support@valoranthack.net",
							],
						},
					],
				},
				support: {
					title: "支持 | Help & Contact",
					description: "支持: order help and license support contact. 即时数字交付. undetected — Windows PC.",
					h1: "支持",
					intro: "Valorant Hacks为ValorantWindows PC提供ESP wallhack、radar hack和valorant aimbotundetected套餐。支持.",
					imageAlt: "Valorant Hacks support page for license and setup help",
					galleryTitle: "支持",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "购买 Valorant Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "支持",
							paragraphs: [
								"Valorant Hacks为ValorantWindows PC提供ESP wallhack、radar hack和valorant aimbotundetected套餐。order help and license support contact.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard anti-cheat维护。",
								"支持与法务：support@valoranthack.net",
							],
						},
					],
				},
				undetected: {
					title: "Undetected作弊 | Vanguard Safe Status",
					description: "Undetected作弊: undetected maintenance after Vanguard anti-cheat patches. 即时数字交付. undetected — Windows PC.",
					h1: "Undetected作弊",
					intro: "Valorant Hacks为ValorantWindows PC提供ESP wallhack、radar hack和valorant aimbotundetected套餐。Undetected作弊.",
					imageAlt: "Valorant Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected作弊",
					heroImage: "/images/valorant-hacks-wallhack.webp",
					ctaPrimary: "购买 Valorant Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "Undetected作弊",
							paragraphs: [
								"Valorant Hacks为ValorantWindows PC提供ESP wallhack、radar hack和valorant aimbotundetected套餐。undetected maintenance after Vanguard anti-cheat patches.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard anti-cheat维护。",
								"支持与法务：support@valoranthack.net",
							],
						},
					],
				},
				wallhack: {
					title: "Valorant Wallhack | ESP Visibility",
					description: "Valorant Wallhack: wallhack ESP for players, spike, and distance. 即时数字交付. undetected — Windows PC.",
					h1: "Valorant Wallhack",
					intro: "Valorant Hacks为ValorantWindows PC提供ESP wallhack、radar hack和valorant aimbotundetected套餐。Valorant Wallhack.",
					imageAlt: "Valorant wallhack visibility through walls in a match",
					galleryTitle: "Valorant Wallhack",
					heroImage: "/images/valorant-hacks-wallhack.webp",
					ctaPrimary: "购买 Valorant Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Valorant Wallhack",
							paragraphs: [
								"Valorant Hacks为ValorantWindows PC提供ESP wallhack、radar hack和valorant aimbotundetected套餐。wallhack ESP for players, spike, and distance.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard anti-cheat维护。",
								"支持与法务：support@valoranthack.net",
							],
						},
					],
				},
				radar: {
					title: "Valorant Radar Hack | 2D Threat Overlay",
					description: "Valorant Radar Hack: 2D radar cues for flanks and rotations. 即时数字交付. undetected — Windows PC.",
					h1: "Valorant Radar Hack",
					intro: "Valorant Hacks为ValorantWindows PC提供ESP wallhack、radar hack和valorant aimbotundetected套餐。Valorant Radar Hack.",
					imageAlt: "Valorant 2D radar overlay showing nearby threats",
					galleryTitle: "Valorant Radar Hack",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "购买 Valorant Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Valorant Radar Hack",
							paragraphs: [
								"Valorant Hacks为ValorantWindows PC提供ESP wallhack、radar hack和valorant aimbotundetected套餐。2D radar cues for flanks and rotations.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard anti-cheat维护。",
								"支持与法务：support@valoranthack.net",
							],
						},
					],
				},
				vanguard: {
					title: "Vanguard Bypass | Patch Maintenance",
					description: "Vanguard Bypass: how Vanguard updates are handled for Valorant hacks. 即时数字交付. undetected — Windows PC.",
					h1: "Vanguard Bypass",
					intro: "Valorant Hacks为ValorantWindows PC提供ESP wallhack、radar hack和valorant aimbotundetected套餐。Vanguard Bypass.",
					imageAlt: "Valorant Hacks maintenance after a Vanguard patch",
					galleryTitle: "Vanguard Bypass",
					heroImage: "/images/valorant-hacks-aimbot.webp",
					ctaPrimary: "购买 Valorant Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Vanguard Bypass",
							paragraphs: [
								"Valorant Hacks为ValorantWindows PC提供ESP wallhack、radar hack和valorant aimbotundetected套餐。how Vanguard updates are handled for Valorant hacks.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard anti-cheat维护。",
								"支持与法务：support@valoranthack.net",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Valorant作弊 2026 | Buyer Guide",
					description: "Valorant作弊 2026: 2026 Valorant hacks checklist before checkout. 即时数字交付. undetected — Windows PC.",
					h1: "Valorant作弊 2026",
					intro: "Valorant Hacks为ValorantWindows PC提供ESP wallhack、radar hack和valorant aimbotundetected套餐。Valorant作弊 2026.",
					imageAlt: "Valorant Hacks product overview for Valorant",
					galleryTitle: "Valorant作弊 2026",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "购买 Valorant Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "Valorant作弊 2026",
							paragraphs: [
								"Valorant Hacks为ValorantWindows PC提供ESP wallhack、radar hack和valorant aimbotundetected套餐。2026 Valorant hacks checklist before checkout.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard anti-cheat维护。",
								"支持与法务：support@valoranthack.net",
							],
						},
					],
				},
				hacks: {
					title: "Valorant作弊 | ESP Aimbot Guide",
					description: "Valorant作弊: the Valorant hacks pillar for ESP and Aimbot. 即时数字交付. undetected — Windows PC.",
					h1: "Valorant作弊",
					intro: "Valorant Hacks为ValorantWindows PC提供ESP wallhack、radar hack和valorant aimbotundetected套餐。Valorant作弊.",
					imageAlt: "Valorant Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Valorant作弊",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "购买 Valorant Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Valorant作弊",
							paragraphs: [
								"Valorant Hacks为ValorantWindows PC提供ESP wallhack、radar hack和valorant aimbotundetected套餐。the Valorant hacks pillar for ESP and Aimbot.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard anti-cheat维护。",
								"支持与法务：support@valoranthack.net",
							],
						},
					],
				},
				"cheat-download": {
					title: "Valorant作弊下载 | Instant Access",
					description: "Valorant作弊下载: digital license download after payment. 即时数字交付. undetected — Windows PC.",
					h1: "Valorant作弊下载",
					intro: "Valorant Hacks为ValorantWindows PC提供ESP wallhack、radar hack和valorant aimbotundetected套餐。Valorant作弊下载.",
					imageAlt: "Valorant Hacks download and install delivery flow",
					galleryTitle: "Valorant作弊下载",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "购买 Valorant Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Valorant作弊下载",
							paragraphs: [
								"Valorant Hacks为ValorantWindows PC提供ESP wallhack、radar hack和valorant aimbotundetected套餐。digital license download after payment.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard anti-cheat维护。",
								"支持与法务：support@valoranthack.net",
							],
						},
					],
				},
				"mod-menu": {
					title: "Valorant修改菜单 | In-Game Toggles",
					description: "Valorant修改菜单: in-client ESP and soft aim toggles. 即时数字交付. undetected — Windows PC.",
					h1: "Valorant修改菜单",
					intro: "Valorant Hacks为ValorantWindows PC提供ESP wallhack、radar hack和valorant aimbotundetected套餐。Valorant修改菜单.",
					imageAlt: "Valorant Hacks in-game menu controls",
					galleryTitle: "Valorant修改菜单",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "购买 Valorant Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Valorant修改菜单",
							paragraphs: [
								"Valorant Hacks为ValorantWindows PC提供ESP wallhack、radar hack和valorant aimbotundetected套餐。in-client ESP and soft aim toggles.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard anti-cheat维护。",
								"支持与法务：support@valoranthack.net",
							],
						},
					],
				},
				"soft-aim": {
					title: "Valorant Soft Aim | Smooth Aim Settings",
					description: "Valorant Soft Aim: smooth soft aim settings for Windows PC. 即时数字交付. undetected — Windows PC.",
					h1: "Valorant Soft Aim",
					intro: "Valorant Hacks为ValorantWindows PC提供ESP wallhack、radar hack和valorant aimbotundetected套餐。Valorant Soft Aim.",
					imageAlt: "Valorant soft aim FOV and smoothness settings",
					galleryTitle: "Valorant Soft Aim",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "购买 Valorant Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/valorant-aimbot/",
					sections: [
						{
							h2: "Valorant Soft Aim",
							paragraphs: [
								"Valorant Hacks为ValorantWindows PC提供ESP wallhack、radar hack和valorant aimbotundetected套餐。smooth soft aim settings for Windows PC.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard anti-cheat维护。",
								"支持与法务：support@valoranthack.net",
							],
						},
					],
				},
				"best-cheats": {
					title: "最佳Valorant作弊 | Buyer Checklist",
					description: "最佳Valorant作弊: what to compare before buying Valorant hacks. 即时数字交付. undetected — Windows PC.",
					h1: "最佳Valorant作弊",
					intro: "Valorant Hacks为ValorantWindows PC提供ESP wallhack、radar hack和valorant aimbotundetected套餐。最佳Valorant作弊.",
					imageAlt: "Valorant Hacks overview for Valorant on PC",
					galleryTitle: "最佳Valorant作弊",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "购买 Valorant Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "最佳Valorant作弊",
							paragraphs: [
								"Valorant Hacks为ValorantWindows PC提供ESP wallhack、radar hack和valorant aimbotundetected套餐。what to compare before buying Valorant hacks.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard anti-cheat维护。",
								"支持与法务：support@valoranthack.net",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Valorant自瞄外挂 | Soft Aim Assist",
					description: "Valorant自瞄外挂: undetected Aimbot hack assist for Valorant. 即时数字交付. undetected — Windows PC.",
					h1: "Valorant自瞄外挂",
					intro: "Valorant Hacks为ValorantWindows PC提供ESP wallhack、radar hack和valorant aimbotundetected套餐。Valorant自瞄外挂.",
					imageAlt: "Valorant aimbot hack controls and bone priority",
					galleryTitle: "Valorant自瞄外挂",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "购买 Valorant Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/valorant-aimbot/",
					sections: [
						{
							h2: "Valorant自瞄外挂",
							paragraphs: [
								"Valorant Hacks为ValorantWindows PC提供ESP wallhack、radar hack和valorant aimbotundetected套餐。undetected Aimbot hack assist for Valorant.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard anti-cheat维护。",
								"支持与法务：support@valoranthack.net",
							],
						},
					],
				},
				"esp-hack": {
					title: "Valorant ESP外挂 | Boxes & Spike",
					description: "Valorant ESP外挂: ESP hack boxes, spike markers, and distance. 即时数字交付. undetected — Windows PC.",
					h1: "Valorant ESP外挂",
					intro: "Valorant Hacks为ValorantWindows PC提供ESP wallhack、radar hack和valorant aimbotundetected套餐。Valorant ESP外挂.",
					imageAlt: "Valorant ESP hack boxes and spike markers",
					galleryTitle: "Valorant ESP外挂",
					heroImage: "/images/valorant-hacks-wallhack.webp",
					ctaPrimary: "购买 Valorant Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Valorant ESP外挂",
							paragraphs: [
								"Valorant Hacks为ValorantWindows PC提供ESP wallhack、radar hack和valorant aimbotundetected套餐。ESP hack boxes, spike markers, and distance.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard anti-cheat维护。",
								"支持与法务：support@valoranthack.net",
							],
						},
					],
				},
				"unlock-all": {
					title: "Valorant Unlock All | What It Means",
					description: "Valorant Unlock All: unlock-all searches vs real ESP and Aimbot tools. 即时数字交付. undetected — Windows PC.",
					h1: "Valorant Unlock All",
					intro: "Valorant Hacks为ValorantWindows PC提供ESP wallhack、radar hack和valorant aimbotundetected套餐。Valorant Unlock All.",
					imageAlt: "Valorant Hacks license features overview",
					galleryTitle: "Valorant Unlock All",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "购买 Valorant Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Valorant Unlock All",
							paragraphs: [
								"Valorant Hacks为ValorantWindows PC提供ESP wallhack、radar hack和valorant aimbotundetected套餐。unlock-all searches vs real ESP and Aimbot tools.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard anti-cheat维护。",
								"支持与法务：support@valoranthack.net",
							],
						},
					],
				},
				privacy: {
					title: "隐私政策 | Valorant Hacks",
					description: "隐私政策 for Valorant Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "隐私政策",
					intro: "Valorant Hacks为ValorantWindows PC提供ESP wallhack、radar hack和valorant aimbotundetected套餐。隐私政策 for valoranthack.net and Valorant licenses.",
					imageAlt: "valorant hacks",
					galleryTitle: "valorant hacks",
					heroImage: "/images/valorant-hacks-aimbot.webp",
					ctaPrimary: "邮件支持",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Valorant Hacks为ValorantWindows PC提供ESP wallhack、radar hack和valorant aimbotundetected套餐。Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on valoranthack.net.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Valorant Hacks为ValorantWindows PC提供ESP wallhack、radar hack和valorant aimbotundetected套餐。Support responses, order resolution, and legal compliance when required.",
								"Vanguard anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"支持与法务：support@valoranthack.net",
								"Email: support@valoranthack.net",
							],
						},
					],
				},
				refund: {
					title: "退款政策 | Valorant Hacks",
					description: "退款政策 for Valorant Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "退款政策",
					intro: "Valorant Hacks为ValorantWindows PC提供ESP wallhack、radar hack和valorant aimbotundetected套餐。退款政策 for valoranthack.net and Valorant licenses.",
					imageAlt: "valorant hacks",
					galleryTitle: "valorant hacks",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "邮件支持",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Valorant Hacks为ValorantWindows PC提供ESP wallhack、radar hack和valorant aimbotundetected套餐。Contact email, Zadeyo order references, and basic site security data.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard anti-cheat维护。",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Valorant Hacks为ValorantWindows PC提供ESP wallhack、radar hack和valorant aimbotundetected套餐。Support responses, order resolution, and legal compliance when required.",
								"Vanguard anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"支持与法务：support@valoranthack.net",
								"Email: support@valoranthack.net",
							],
						},
					],
				},
				terms: {
					title: "使用条款 | Valorant Hacks",
					description: "使用条款 for Valorant Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "使用条款",
					intro: "Valorant Hacks为ValorantWindows PC提供ESP wallhack、radar hack和valorant aimbotundetected套餐。使用条款 for valoranthack.net and Valorant licenses.",
					imageAlt: "valorant hacks",
					galleryTitle: "valorant hacks",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "邮件支持",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Valorant Hacks为ValorantWindows PC提供ESP wallhack、radar hack和valorant aimbotundetected套餐。Contact email, Zadeyo order references, and basic site security data.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard anti-cheat维护。",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Valorant Hacks为ValorantWindows PC提供ESP wallhack、radar hack和valorant aimbotundetected套餐。Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Riot Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"支持与法务：support@valoranthack.net",
								"Email: support@valoranthack.net",
							],
						},
					],
				},
			},
		},
		hi: {
			ui: {
				nav: {
					home: "होम",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "फ़ीचर्स",
					pricing: "कीमत",
					setup: "सेटअप",
					updates: "अपडेट",
					faq: "FAQ",
					buyNow: "अभी खरीदें",
				},
				hero: {
					accent: "Undetected Valorant hacks",
					accentShort: "Valorant Hacks",
					subtitle: "Valorant Windows PC के लिए ESP wallhack, radar hack और Aimbot — Vanguard maintenance शामिल।",
					subtitleShort: "Valorant PC के लिए ESP, radar और Aimbot",
					buyNow: "अभी खरीदें",
					seeFeatures: "फ़ीचर्स देखें",
				},
				trust: {
					status: "ऑनलाइन",
					statusNote: "Valorant Hacks पैकेज Valorant Windows PC के लिए सक्रिय है।",
					statusShort: "सक्रिय",
					delivery: "तुरंत डिजिटल डिलीवरी",
					platform: "Windows 10 और 11",
					antiCheat: "Vanguard maintenance समर्थित",
					antiCheatShort: "Vanguard anti-cheat समर्थित",
				},
				product: {
					title: "Valorant Hacks",
					addToCart: "कार्ट में जोड़ें",
					monthly: "मासिक",
					lifetime: "लाइफ़टाइम",
					available: "अभी उपलब्ध",
					gameBadge: "Valorant",
					platformBadge: "Windows PC",
					statusBadge: "Undetected पैकेज",
				},
				reviews: {
					title: "खिलाड़ी क्या कहते हैं",
					subtitle: "Valorant Hacks खरीदारों की हाल की प्रतिक्रिया",
					outOf: "/5",
					countLabel: "समीक्षाएँ",
				},
				common: {
					buyNow: "अभी खरीदें",
					readGuide: "गाइड पढ़ें",
					language: "भाषा",
					officialLanguageNote: "अंग्रेज़ी आधिकारिक भाषा है। अन्य भाषाएँ वैश्विक SEO के लिए अनुवादित हैं।",
					relatedPages: "संबंधित पेज",
				},
				footer: {
					explore: "एक्सप्लोर",
					help: "सहायता और कानूनी",
					tagline: "Valorant के लिए undetected ESP, wallhack, radar और Aimbot — Zadeyo checkout।",
				},
				images: {
					hero: "Valorant Hacks hero — ESP and aimbot overlay in Valorant",
					espWallhack: "Wallhack outlines showing agents and enemies through walls",
					aimbotCombat: "Soft aim assist overlay during a Valorant round",
					squadFight: "Valorant Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Valorant match",
					headerArt: "Aimbot view and bone priority controls for Valorant",
					cheatsPackage: "2D radar threat overlay for Valorant",
					rebootFight: "Aimbot assist during a Valorant firefight",
					battleRoyale: "Valorant Hacks in-match overview for Windows PC",
					battleRoyaleIsland: "ESP markers for agents and the spike in Valorant",
				},
			},
			pages: {
				home: {
					title: "Valorant Hacks | Official PC Site",
					description: "Valorant undetected cheats. ESP wallhack, radar hack, Aimbot, Vanguard maintenance. Instant digital delivery.",
					h1: "Valorant Hacks",
					intro: "Valorant Windows PC undetected पैकेज: ESP wallhack, radar, Aimbot, Vanguard maintenance सहित.",
					imageAlt: "Valorant hacks hero ESP aimbot wallhack",
					galleryTitle: "Valorant Hacks gallery — ESP, Aimbot, wallhack",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Valorant Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026 में Valorant Hacks क्यों",
							paragraphs: [
								"Valorant Hacks Valorant के लिए Windows PC पर ESP wallhack, radar hack और valorant aimbot undetected पैकेज देता है। Competitive और Deathmatch में दुश्मन squad पढ़ने के लिए आदर्श.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot एक लाइसेंस में",
							paragraphs: [
								"Valorant Hacks Valorant के लिए Windows PC पर ESP wallhack, radar hack और valorant aimbot undetected पैकेज देता है। अलग टूल्स के बजाय एक लाइसेंस.",
								"Vanguard anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
							],
						},
					],
				},
				"valorant-esp": {
					title: "Valorant ESP | Player Boxes & Wallhack",
					description: "Valorant ESP: player boxes, spike markers, and wallhack overlays. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Valorant ESP",
					intro: "Valorant Hacks Valorant के लिए Windows PC पर ESP wallhack, radar hack और valorant aimbot undetected पैकेज देता है। Valorant ESP.",
					imageAlt: "Valorant ESP player boxes and distance readouts in a match",
					galleryTitle: "Valorant ESP",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Valorant Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "Valorant ESP",
							paragraphs: [
								"Valorant Hacks Valorant के लिए Windows PC पर ESP wallhack, radar hack और valorant aimbot undetected पैकेज देता है। player boxes, spike markers, and wallhack overlays.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard anti-cheat maintenance शामिल।",
								"सहायता: support@valoranthack.net",
							],
						},
					],
				},
				"valorant-aimbot": {
					title: "Valorant Aimbot | Soft Aim Controls",
					description: "Valorant Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Valorant Aimbot",
					intro: "Valorant Hacks Valorant के लिए Windows PC पर ESP wallhack, radar hack और valorant aimbot undetected पैकेज देता है। Valorant Aimbot.",
					imageAlt: "Valorant aimbot and soft aim controls on Windows PC",
					galleryTitle: "Valorant Aimbot",
					heroImage: "/images/valorant-hacks-aimbot.webp",
					ctaPrimary: "Valorant Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Valorant Aimbot",
							paragraphs: [
								"Valorant Hacks Valorant के लिए Windows PC पर ESP wallhack, radar hack और valorant aimbot undetected पैकेज देता है। soft aim, FOV, and per-weapon Aimbot profiles.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard anti-cheat maintenance शामिल।",
								"सहायता: support@valoranthack.net",
							],
						},
					],
				},
				features: {
					title: "फ़ीचर्स | Full Feature List",
					description: "फ़ीचर्स: ESP, soft aim, radar controls. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "फ़ीचर्स",
					intro: "Valorant Hacks Valorant के लिए Windows PC पर ESP wallhack, radar hack और valorant aimbot undetected पैकेज देता है। फ़ीचर्स.",
					imageAlt: "Valorant Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "फ़ीचर्स",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Valorant Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "फ़ीचर्स",
							paragraphs: [
								"Valorant Hacks Valorant के लिए Windows PC पर ESP wallhack, radar hack और valorant aimbot undetected पैकेज देता है। ESP, soft aim, radar controls.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard anti-cheat maintenance शामिल।",
								"सहायता: support@valoranthack.net",
							],
						},
					],
				},
				pricing: {
					title: "कीमत | Monthly & Lifetime",
					description: "कीमत: $35 monthly or $150 lifetime licenses. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "कीमत",
					intro: "Valorant Hacks Valorant के लिए Windows PC पर ESP wallhack, radar hack और valorant aimbot undetected पैकेज देता है। कीमत.",
					imageAlt: "Valorant Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "कीमत",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Valorant Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "कीमत",
							paragraphs: [
								"Valorant Hacks Valorant के लिए Windows PC पर ESP wallhack, radar hack और valorant aimbot undetected पैकेज देता है। $35 monthly or $150 lifetime licenses.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard anti-cheat maintenance शामिल।",
								"सहायता: support@valoranthack.net",
							],
						},
					],
				},
				setup: {
					title: "सेटअप | PC Setup Guide",
					description: "सेटअप: Windows PC activation and first-launch setup. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "सेटअप",
					intro: "Valorant Hacks Valorant के लिए Windows PC पर ESP wallhack, radar hack और valorant aimbot undetected पैकेज देता है। सेटअप.",
					imageAlt: "Valorant Hacks setup guide screenshot for Windows PC",
					galleryTitle: "सेटअप",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Valorant Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "सेटअप",
							paragraphs: [
								"Valorant Hacks Valorant के लिए Windows PC पर ESP wallhack, radar hack और valorant aimbot undetected पैकेज देता है। Windows PC activation and first-launch setup.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard anti-cheat maintenance शामिल।",
								"सहायता: support@valoranthack.net",
							],
						},
					],
				},
				updates: {
					title: "अपडेट | Vanguard Maintenance Log",
					description: "अपडेट: Vanguard patch status and rebuild notes. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "अपडेट",
					intro: "Valorant Hacks Valorant के लिए Windows PC पर ESP wallhack, radar hack और valorant aimbot undetected पैकेज देता है। अपडेट.",
					imageAlt: "Valorant Hacks live status after Vanguard and game patches",
					galleryTitle: "अपडेट",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Valorant Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "अपडेट",
							paragraphs: [
								"Valorant Hacks Valorant के लिए Windows PC पर ESP wallhack, radar hack और valorant aimbot undetected पैकेज देता है। Vanguard patch status and rebuild notes.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard anti-cheat maintenance शामिल।",
								"सहायता: support@valoranthack.net",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and Vanguard questions. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Valorant Hacks Valorant के लिए Windows PC पर ESP wallhack, radar hack और valorant aimbot undetected पैकेज देता है। FAQ.",
					imageAlt: "Valorant Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Valorant Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Valorant Hacks Valorant के लिए Windows PC पर ESP wallhack, radar hack और valorant aimbot undetected पैकेज देता है। ESP, soft aim, delivery, and Vanguard questions.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard anti-cheat maintenance शामिल।",
								"सहायता: support@valoranthack.net",
							],
						},
					],
				},
				support: {
					title: "सहायता | Help & Contact",
					description: "सहायता: order help and license support contact. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "सहायता",
					intro: "Valorant Hacks Valorant के लिए Windows PC पर ESP wallhack, radar hack और valorant aimbot undetected पैकेज देता है। सहायता.",
					imageAlt: "Valorant Hacks support page for license and setup help",
					galleryTitle: "सहायता",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Valorant Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "सहायता",
							paragraphs: [
								"Valorant Hacks Valorant के लिए Windows PC पर ESP wallhack, radar hack और valorant aimbot undetected पैकेज देता है। order help and license support contact.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard anti-cheat maintenance शामिल।",
								"सहायता: support@valoranthack.net",
							],
						},
					],
				},
				undetected: {
					title: "Undetected cheats | Vanguard Safe Status",
					description: "Undetected cheats: undetected maintenance after Vanguard anti-cheat patches. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Undetected cheats",
					intro: "Valorant Hacks Valorant के लिए Windows PC पर ESP wallhack, radar hack और valorant aimbot undetected पैकेज देता है। Undetected cheats.",
					imageAlt: "Valorant Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected cheats",
					heroImage: "/images/valorant-hacks-wallhack.webp",
					ctaPrimary: "Valorant Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "Undetected cheats",
							paragraphs: [
								"Valorant Hacks Valorant के लिए Windows PC पर ESP wallhack, radar hack और valorant aimbot undetected पैकेज देता है। undetected maintenance after Vanguard anti-cheat patches.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard anti-cheat maintenance शामिल।",
								"सहायता: support@valoranthack.net",
							],
						},
					],
				},
				wallhack: {
					title: "Valorant Wallhack | ESP Visibility",
					description: "Valorant Wallhack: wallhack ESP for players, spike, and distance. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Valorant Wallhack",
					intro: "Valorant Hacks Valorant के लिए Windows PC पर ESP wallhack, radar hack और valorant aimbot undetected पैकेज देता है। Valorant Wallhack.",
					imageAlt: "Valorant wallhack visibility through walls in a match",
					galleryTitle: "Valorant Wallhack",
					heroImage: "/images/valorant-hacks-wallhack.webp",
					ctaPrimary: "Valorant Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Valorant Wallhack",
							paragraphs: [
								"Valorant Hacks Valorant के लिए Windows PC पर ESP wallhack, radar hack और valorant aimbot undetected पैकेज देता है। wallhack ESP for players, spike, and distance.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard anti-cheat maintenance शामिल।",
								"सहायता: support@valoranthack.net",
							],
						},
					],
				},
				radar: {
					title: "Valorant Radar Hack | 2D Threat Overlay",
					description: "Valorant Radar Hack: 2D radar cues for flanks and rotations. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Valorant Radar Hack",
					intro: "Valorant Hacks Valorant के लिए Windows PC पर ESP wallhack, radar hack और valorant aimbot undetected पैकेज देता है। Valorant Radar Hack.",
					imageAlt: "Valorant 2D radar overlay showing nearby threats",
					galleryTitle: "Valorant Radar Hack",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Valorant Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Valorant Radar Hack",
							paragraphs: [
								"Valorant Hacks Valorant के लिए Windows PC पर ESP wallhack, radar hack और valorant aimbot undetected पैकेज देता है। 2D radar cues for flanks and rotations.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard anti-cheat maintenance शामिल।",
								"सहायता: support@valoranthack.net",
							],
						},
					],
				},
				vanguard: {
					title: "Vanguard Bypass | Patch Maintenance",
					description: "Vanguard Bypass: how Vanguard updates are handled for Valorant hacks. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Vanguard Bypass",
					intro: "Valorant Hacks Valorant के लिए Windows PC पर ESP wallhack, radar hack और valorant aimbot undetected पैकेज देता है। Vanguard Bypass.",
					imageAlt: "Valorant Hacks maintenance after a Vanguard patch",
					galleryTitle: "Vanguard Bypass",
					heroImage: "/images/valorant-hacks-aimbot.webp",
					ctaPrimary: "Valorant Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Vanguard Bypass",
							paragraphs: [
								"Valorant Hacks Valorant के लिए Windows PC पर ESP wallhack, radar hack और valorant aimbot undetected पैकेज देता है। how Vanguard updates are handled for Valorant hacks.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard anti-cheat maintenance शामिल।",
								"सहायता: support@valoranthack.net",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Valorant Hacks 2026 | Buyer Guide",
					description: "Valorant Hacks 2026: 2026 Valorant hacks checklist before checkout. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Valorant Hacks 2026",
					intro: "Valorant Hacks Valorant के लिए Windows PC पर ESP wallhack, radar hack और valorant aimbot undetected पैकेज देता है। Valorant Hacks 2026.",
					imageAlt: "Valorant Hacks product overview for Valorant",
					galleryTitle: "Valorant Hacks 2026",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Valorant Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "Valorant Hacks 2026",
							paragraphs: [
								"Valorant Hacks Valorant के लिए Windows PC पर ESP wallhack, radar hack और valorant aimbot undetected पैकेज देता है। 2026 Valorant hacks checklist before checkout.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard anti-cheat maintenance शामिल।",
								"सहायता: support@valoranthack.net",
							],
						},
					],
				},
				hacks: {
					title: "Valorant Hacks | ESP Aimbot Guide",
					description: "Valorant Hacks: the Valorant hacks pillar for ESP and Aimbot. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Valorant Hacks",
					intro: "Valorant Hacks Valorant के लिए Windows PC पर ESP wallhack, radar hack और valorant aimbot undetected पैकेज देता है। Valorant Hacks.",
					imageAlt: "Valorant Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Valorant Hacks",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Valorant Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Valorant Hacks",
							paragraphs: [
								"Valorant Hacks Valorant के लिए Windows PC पर ESP wallhack, radar hack और valorant aimbot undetected पैकेज देता है। the Valorant hacks pillar for ESP and Aimbot.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard anti-cheat maintenance शामिल।",
								"सहायता: support@valoranthack.net",
							],
						},
					],
				},
				"cheat-download": {
					title: "Valorant Cheat Download | Instant Access",
					description: "Valorant Cheat Download: digital license download after payment. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Valorant Cheat Download",
					intro: "Valorant Hacks Valorant के लिए Windows PC पर ESP wallhack, radar hack और valorant aimbot undetected पैकेज देता है। Valorant Cheat Download.",
					imageAlt: "Valorant Hacks download and install delivery flow",
					galleryTitle: "Valorant Cheat Download",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Valorant Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Valorant Cheat Download",
							paragraphs: [
								"Valorant Hacks Valorant के लिए Windows PC पर ESP wallhack, radar hack और valorant aimbot undetected पैकेज देता है। digital license download after payment.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard anti-cheat maintenance शामिल।",
								"सहायता: support@valoranthack.net",
							],
						},
					],
				},
				"mod-menu": {
					title: "Valorant Mod Menu | In-Game Toggles",
					description: "Valorant Mod Menu: in-client ESP and soft aim toggles. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Valorant Mod Menu",
					intro: "Valorant Hacks Valorant के लिए Windows PC पर ESP wallhack, radar hack और valorant aimbot undetected पैकेज देता है। Valorant Mod Menu.",
					imageAlt: "Valorant Hacks in-game menu controls",
					galleryTitle: "Valorant Mod Menu",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Valorant Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Valorant Mod Menu",
							paragraphs: [
								"Valorant Hacks Valorant के लिए Windows PC पर ESP wallhack, radar hack और valorant aimbot undetected पैकेज देता है। in-client ESP and soft aim toggles.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard anti-cheat maintenance शामिल।",
								"सहायता: support@valoranthack.net",
							],
						},
					],
				},
				"soft-aim": {
					title: "Valorant Soft Aim | Smooth Aim Settings",
					description: "Valorant Soft Aim: smooth soft aim settings for Windows PC. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Valorant Soft Aim",
					intro: "Valorant Hacks Valorant के लिए Windows PC पर ESP wallhack, radar hack और valorant aimbot undetected पैकेज देता है। Valorant Soft Aim.",
					imageAlt: "Valorant soft aim FOV and smoothness settings",
					galleryTitle: "Valorant Soft Aim",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Valorant Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/valorant-aimbot/",
					sections: [
						{
							h2: "Valorant Soft Aim",
							paragraphs: [
								"Valorant Hacks Valorant के लिए Windows PC पर ESP wallhack, radar hack और valorant aimbot undetected पैकेज देता है। smooth soft aim settings for Windows PC.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard anti-cheat maintenance शामिल।",
								"सहायता: support@valoranthack.net",
							],
						},
					],
				},
				"best-cheats": {
					title: "सर्वश्रेष्ठ Valorant Hacks | Buyer Checklist",
					description: "सर्वश्रेष्ठ Valorant Hacks: what to compare before buying Valorant hacks. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "सर्वश्रेष्ठ Valorant Hacks",
					intro: "Valorant Hacks Valorant के लिए Windows PC पर ESP wallhack, radar hack और valorant aimbot undetected पैकेज देता है। सर्वश्रेष्ठ Valorant Hacks.",
					imageAlt: "Valorant Hacks overview for Valorant on PC",
					galleryTitle: "सर्वश्रेष्ठ Valorant Hacks",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Valorant Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "सर्वश्रेष्ठ Valorant Hacks",
							paragraphs: [
								"Valorant Hacks Valorant के लिए Windows PC पर ESP wallhack, radar hack और valorant aimbot undetected पैकेज देता है। what to compare before buying Valorant hacks.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard anti-cheat maintenance शामिल।",
								"सहायता: support@valoranthack.net",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Valorant Aimbot Hack | Soft Aim Assist",
					description: "Valorant Aimbot Hack: undetected Aimbot hack assist for Valorant. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Valorant Aimbot Hack",
					intro: "Valorant Hacks Valorant के लिए Windows PC पर ESP wallhack, radar hack और valorant aimbot undetected पैकेज देता है। Valorant Aimbot Hack.",
					imageAlt: "Valorant aimbot hack controls and bone priority",
					galleryTitle: "Valorant Aimbot Hack",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Valorant Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/valorant-aimbot/",
					sections: [
						{
							h2: "Valorant Aimbot Hack",
							paragraphs: [
								"Valorant Hacks Valorant के लिए Windows PC पर ESP wallhack, radar hack और valorant aimbot undetected पैकेज देता है। undetected Aimbot hack assist for Valorant.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard anti-cheat maintenance शामिल।",
								"सहायता: support@valoranthack.net",
							],
						},
					],
				},
				"esp-hack": {
					title: "Valorant ESP Hack | Boxes & Spike",
					description: "Valorant ESP Hack: ESP hack boxes, spike markers, and distance. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Valorant ESP Hack",
					intro: "Valorant Hacks Valorant के लिए Windows PC पर ESP wallhack, radar hack और valorant aimbot undetected पैकेज देता है। Valorant ESP Hack.",
					imageAlt: "Valorant ESP hack boxes and spike markers",
					galleryTitle: "Valorant ESP Hack",
					heroImage: "/images/valorant-hacks-wallhack.webp",
					ctaPrimary: "Valorant Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Valorant ESP Hack",
							paragraphs: [
								"Valorant Hacks Valorant के लिए Windows PC पर ESP wallhack, radar hack और valorant aimbot undetected पैकेज देता है। ESP hack boxes, spike markers, and distance.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard anti-cheat maintenance शामिल।",
								"सहायता: support@valoranthack.net",
							],
						},
					],
				},
				"unlock-all": {
					title: "Valorant Unlock All | What It Means",
					description: "Valorant Unlock All: unlock-all searches vs real ESP and Aimbot tools. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Valorant Unlock All",
					intro: "Valorant Hacks Valorant के लिए Windows PC पर ESP wallhack, radar hack और valorant aimbot undetected पैकेज देता है। Valorant Unlock All.",
					imageAlt: "Valorant Hacks license features overview",
					galleryTitle: "Valorant Unlock All",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Valorant Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Valorant Unlock All",
							paragraphs: [
								"Valorant Hacks Valorant के लिए Windows PC पर ESP wallhack, radar hack और valorant aimbot undetected पैकेज देता है। unlock-all searches vs real ESP and Aimbot tools.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard anti-cheat maintenance शामिल।",
								"सहायता: support@valoranthack.net",
							],
						},
					],
				},
				privacy: {
					title: "गोपनीयता नीति | Valorant Hacks",
					description: "गोपनीयता नीति for Valorant Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "गोपनीयता नीति",
					intro: "Valorant Hacks Valorant के लिए Windows PC पर ESP wallhack, radar hack और valorant aimbot undetected पैकेज देता है। गोपनीयता नीति for valoranthack.net and Valorant licenses.",
					imageAlt: "valorant hacks",
					galleryTitle: "valorant hacks",
					heroImage: "/images/valorant-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Valorant Hacks Valorant के लिए Windows PC पर ESP wallhack, radar hack और valorant aimbot undetected पैकेज देता है। Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on valoranthack.net.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Valorant Hacks Valorant के लिए Windows PC पर ESP wallhack, radar hack और valorant aimbot undetected पैकेज देता है। Support responses, order resolution, and legal compliance when required.",
								"Vanguard anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"सहायता: support@valoranthack.net",
								"Email: support@valoranthack.net",
							],
						},
					],
				},
				refund: {
					title: "रिफंड नीति | Valorant Hacks",
					description: "रिफंड नीति for Valorant Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "रिफंड नीति",
					intro: "Valorant Hacks Valorant के लिए Windows PC पर ESP wallhack, radar hack और valorant aimbot undetected पैकेज देता है। रिफंड नीति for valoranthack.net and Valorant licenses.",
					imageAlt: "valorant hacks",
					galleryTitle: "valorant hacks",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Valorant Hacks Valorant के लिए Windows PC पर ESP wallhack, radar hack और valorant aimbot undetected पैकेज देता है। Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Valorant Hacks Valorant के लिए Windows PC पर ESP wallhack, radar hack और valorant aimbot undetected पैकेज देता है। Support responses, order resolution, and legal compliance when required.",
								"Vanguard anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"सहायता: support@valoranthack.net",
								"Email: support@valoranthack.net",
							],
						},
					],
				},
				terms: {
					title: "उपयोग की शर्तें | Valorant Hacks",
					description: "उपयोग की शर्तें for Valorant Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "उपयोग की शर्तें",
					intro: "Valorant Hacks Valorant के लिए Windows PC पर ESP wallhack, radar hack और valorant aimbot undetected पैकेज देता है। उपयोग की शर्तें for valoranthack.net and Valorant licenses.",
					imageAlt: "valorant hacks",
					galleryTitle: "valorant hacks",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Valorant Hacks Valorant के लिए Windows PC पर ESP wallhack, radar hack और valorant aimbot undetected पैकेज देता है। Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Valorant Hacks Valorant के लिए Windows PC पर ESP wallhack, radar hack और valorant aimbot undetected पैकेज देता है। Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Riot Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"सहायता: support@valoranthack.net",
								"Email: support@valoranthack.net",
							],
						},
					],
				},
			},
		},
		id: {
			ui: {
				nav: {
					home: "Beranda",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Fitur",
					pricing: "Harga",
					setup: "Setup",
					updates: "Pembaruan",
					faq: "FAQ",
					buyNow: "Beli sekarang",
				},
				hero: {
					accent: "Cheat Valorant undetected",
					accentShort: "Valorant Hacks",
					subtitle: "ESP wallhack, radar hack, dan Aimbot untuk Valorant di PC Windows — pemeliharaan Vanguard anti-cheat termasuk.",
					subtitleShort: "ESP, radar & Aimbot untuk Valorant PC",
					buyNow: "Beli sekarang",
					seeFeatures: "Lihat fitur",
				},
				trust: {
					status: "Online",
					statusNote: "Paket Valorant Hacks aktif untuk Valorant di PC Windows.",
					statusShort: "Aktif",
					delivery: "Pengiriman digital instan",
					platform: "Windows 10 & 11",
					antiCheat: "Pemeliharaan Vanguard anti-cheat didukung",
					antiCheatShort: "Vanguard anti-cheat didukung",
				},
				product: {
					title: "Valorant Hacks",
					addToCart: "Tambah ke keranjang",
					monthly: "Bulanan",
					lifetime: "Seumur hidup",
					available: "Tersedia sekarang",
					gameBadge: "Valorant",
					platformBadge: "Windows PC",
					statusBadge: "Paket undetected",
				},
				reviews: {
					title: "Apa kata pemain",
					subtitle: "Umpan balik terbaru dari pembeli Valorant Hacks",
					outOf: "dari 5",
					countLabel: "ulasan",
				},
				common: {
					buyNow: "Beli sekarang",
					readGuide: "Baca panduan",
					language: "Bahasa",
					officialLanguageNote: "Bahasa Inggris adalah bahasa resmi. Bahasa lain diterjemahkan untuk SEO global.",
					relatedPages: "Halaman terkait",
				},
				footer: {
					explore: "Jelajahi",
					help: "Bantuan & legal",
					tagline: "ESP, wallhack, radar, dan Aimbot undetected untuk Valorant — checkout via Zadeyo.",
				},
				images: {
					hero: "Valorant Hacks hero — ESP and aimbot overlay in Valorant",
					espWallhack: "Wallhack outlines showing agents and enemies through walls",
					aimbotCombat: "Soft aim assist overlay during a Valorant round",
					squadFight: "Valorant Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Valorant match",
					headerArt: "Aimbot view and bone priority controls for Valorant",
					cheatsPackage: "2D radar threat overlay for Valorant",
					rebootFight: "Aimbot assist during a Valorant firefight",
					battleRoyale: "Valorant Hacks in-match overview for Windows PC",
					battleRoyaleIsland: "ESP markers for agents and the spike in Valorant",
				},
			},
			pages: {
				home: {
					title: "Valorant Hacks | Official PC Site",
					description: "Cheat Valorant undetected untuk Valorant di PC. ESP wallhack, radar hack, Aimbot, pemeliharaan Vanguard anti-cheat. Pengiriman digital instan.",
					h1: "Valorant Hacks",
					intro: "Paket undetected Valorant di Windows PC: ESP wallhack, radar, Aimbot dengan pemeliharaan Vanguard anti-cheat.",
					imageAlt: "Valorant ESP player tags hack",
					galleryTitle: "Galeri Valorant Hacks — ESP, Aimbot, wallhack",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Beli Valorant Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mengapa Valorant Hacks di 2026",
							paragraphs: [
								"Valorant Hacks menyediakan ESP wallhack, radar hack, dan valorant aimbot undetected untuk Valorant di PC Windows. Ideal membaca squad musuh di Competitive dan Deathmatch.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard anti-cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot dalam satu lisensi",
							paragraphs: [
								"Valorant Hacks menyediakan ESP wallhack, radar hack, dan valorant aimbot undetected untuk Valorant di PC Windows. Satu lisensi alih-alih alat terpisah.",
								"Periksa Updates setelah patch Vanguard anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
							],
						},
					],
				},
				"valorant-esp": {
					title: "ESP Valorant | Player Boxes & Wallhack",
					description: "ESP Valorant: player boxes, spike markers, and wallhack overlays. pengiriman digital instan. undetected — PC Windows.",
					h1: "ESP Valorant",
					intro: "Valorant Hacks menyediakan ESP wallhack, radar hack, dan valorant aimbot undetected untuk Valorant di PC Windows. ESP Valorant.",
					imageAlt: "Valorant ESP player boxes and distance readouts in a match",
					galleryTitle: "ESP Valorant",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Beli Valorant Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "ESP Valorant",
							paragraphs: [
								"Valorant Hacks menyediakan ESP wallhack, radar hack, dan valorant aimbot undetected untuk Valorant di PC Windows. player boxes, spike markers, and wallhack overlays.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Vanguard anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard anti-cheat.",
								"support@valoranthack.net untuk dukungan dan legal.",
							],
						},
					],
				},
				"valorant-aimbot": {
					title: "Aimbot Valorant | Soft Aim Controls",
					description: "Aimbot Valorant: soft aim, FOV, and per-weapon Aimbot profiles. pengiriman digital instan. undetected — PC Windows.",
					h1: "Aimbot Valorant",
					intro: "Valorant Hacks menyediakan ESP wallhack, radar hack, dan valorant aimbot undetected untuk Valorant di PC Windows. Aimbot Valorant.",
					imageAlt: "Valorant aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Valorant",
					heroImage: "/images/valorant-hacks-aimbot.webp",
					ctaPrimary: "Beli Valorant Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Aimbot Valorant",
							paragraphs: [
								"Valorant Hacks menyediakan ESP wallhack, radar hack, dan valorant aimbot undetected untuk Valorant di PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Vanguard anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard anti-cheat.",
								"support@valoranthack.net untuk dukungan dan legal.",
							],
						},
					],
				},
				features: {
					title: "Fitur | Full Feature List",
					description: "Fitur: ESP, soft aim, radar controls. pengiriman digital instan. undetected — PC Windows.",
					h1: "Fitur",
					intro: "Valorant Hacks menyediakan ESP wallhack, radar hack, dan valorant aimbot undetected untuk Valorant di PC Windows. Fitur.",
					imageAlt: "Valorant Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Fitur",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Beli Valorant Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Fitur",
							paragraphs: [
								"Valorant Hacks menyediakan ESP wallhack, radar hack, dan valorant aimbot undetected untuk Valorant di PC Windows. ESP, soft aim, radar controls.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Vanguard anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard anti-cheat.",
								"support@valoranthack.net untuk dukungan dan legal.",
							],
						},
					],
				},
				pricing: {
					title: "Harga | Monthly & Lifetime",
					description: "Harga: $35 monthly or $150 lifetime licenses. pengiriman digital instan. undetected — PC Windows.",
					h1: "Harga",
					intro: "Valorant Hacks menyediakan ESP wallhack, radar hack, dan valorant aimbot undetected untuk Valorant di PC Windows. Harga.",
					imageAlt: "Valorant Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Harga",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Beli Valorant Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Harga",
							paragraphs: [
								"Valorant Hacks menyediakan ESP wallhack, radar hack, dan valorant aimbot undetected untuk Valorant di PC Windows. $35 monthly or $150 lifetime licenses.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Vanguard anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard anti-cheat.",
								"support@valoranthack.net untuk dukungan dan legal.",
							],
						},
					],
				},
				setup: {
					title: "Setup | PC Setup Guide",
					description: "Setup: Windows PC activation and first-launch setup. pengiriman digital instan. undetected — PC Windows.",
					h1: "Setup",
					intro: "Valorant Hacks menyediakan ESP wallhack, radar hack, dan valorant aimbot undetected untuk Valorant di PC Windows. Setup.",
					imageAlt: "Valorant Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Beli Valorant Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"Valorant Hacks menyediakan ESP wallhack, radar hack, dan valorant aimbot undetected untuk Valorant di PC Windows. Windows PC activation and first-launch setup.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Vanguard anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard anti-cheat.",
								"support@valoranthack.net untuk dukungan dan legal.",
							],
						},
					],
				},
				updates: {
					title: "Pembaruan | Vanguard Maintenance Log",
					description: "Pembaruan: Vanguard patch status and rebuild notes. pengiriman digital instan. undetected — PC Windows.",
					h1: "Pembaruan",
					intro: "Valorant Hacks menyediakan ESP wallhack, radar hack, dan valorant aimbot undetected untuk Valorant di PC Windows. Pembaruan.",
					imageAlt: "Valorant Hacks live status after Vanguard and game patches",
					galleryTitle: "Pembaruan",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Beli Valorant Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "Pembaruan",
							paragraphs: [
								"Valorant Hacks menyediakan ESP wallhack, radar hack, dan valorant aimbot undetected untuk Valorant di PC Windows. Vanguard patch status and rebuild notes.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Vanguard anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard anti-cheat.",
								"support@valoranthack.net untuk dukungan dan legal.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and Vanguard questions. pengiriman digital instan. undetected — PC Windows.",
					h1: "FAQ",
					intro: "Valorant Hacks menyediakan ESP wallhack, radar hack, dan valorant aimbot undetected untuk Valorant di PC Windows. FAQ.",
					imageAlt: "Valorant Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Beli Valorant Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Valorant Hacks menyediakan ESP wallhack, radar hack, dan valorant aimbot undetected untuk Valorant di PC Windows. ESP, soft aim, delivery, and Vanguard questions.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Vanguard anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard anti-cheat.",
								"support@valoranthack.net untuk dukungan dan legal.",
							],
						},
					],
				},
				support: {
					title: "Dukungan | Help & Contact",
					description: "Dukungan: order help and license support contact. pengiriman digital instan. undetected — PC Windows.",
					h1: "Dukungan",
					intro: "Valorant Hacks menyediakan ESP wallhack, radar hack, dan valorant aimbot undetected untuk Valorant di PC Windows. Dukungan.",
					imageAlt: "Valorant Hacks support page for license and setup help",
					galleryTitle: "Dukungan",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Beli Valorant Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Dukungan",
							paragraphs: [
								"Valorant Hacks menyediakan ESP wallhack, radar hack, dan valorant aimbot undetected untuk Valorant di PC Windows. order help and license support contact.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Vanguard anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard anti-cheat.",
								"support@valoranthack.net untuk dukungan dan legal.",
							],
						},
					],
				},
				undetected: {
					title: "Cheat undetected | Vanguard Safe Status",
					description: "Cheat undetected: undetected maintenance after Vanguard anti-cheat patches. pengiriman digital instan. undetected — PC Windows.",
					h1: "Cheat undetected",
					intro: "Valorant Hacks menyediakan ESP wallhack, radar hack, dan valorant aimbot undetected untuk Valorant di PC Windows. Cheat undetected.",
					imageAlt: "Valorant Hacks undetected status overview for Windows PC",
					galleryTitle: "Cheat undetected",
					heroImage: "/images/valorant-hacks-wallhack.webp",
					ctaPrimary: "Beli Valorant Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "Cheat undetected",
							paragraphs: [
								"Valorant Hacks menyediakan ESP wallhack, radar hack, dan valorant aimbot undetected untuk Valorant di PC Windows. undetected maintenance after Vanguard anti-cheat patches.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Vanguard anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard anti-cheat.",
								"support@valoranthack.net untuk dukungan dan legal.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Valorant | ESP Visibility",
					description: "Wallhack Valorant: wallhack ESP for players, spike, and distance. pengiriman digital instan. undetected — PC Windows.",
					h1: "Wallhack Valorant",
					intro: "Valorant Hacks menyediakan ESP wallhack, radar hack, dan valorant aimbot undetected untuk Valorant di PC Windows. Wallhack Valorant.",
					imageAlt: "Valorant wallhack visibility through walls in a match",
					galleryTitle: "Wallhack Valorant",
					heroImage: "/images/valorant-hacks-wallhack.webp",
					ctaPrimary: "Beli Valorant Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Wallhack Valorant",
							paragraphs: [
								"Valorant Hacks menyediakan ESP wallhack, radar hack, dan valorant aimbot undetected untuk Valorant di PC Windows. wallhack ESP for players, spike, and distance.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Vanguard anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard anti-cheat.",
								"support@valoranthack.net untuk dukungan dan legal.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack Valorant | 2D Threat Overlay",
					description: "Radar hack Valorant: 2D radar cues for flanks and rotations. pengiriman digital instan. undetected — PC Windows.",
					h1: "Radar hack Valorant",
					intro: "Valorant Hacks menyediakan ESP wallhack, radar hack, dan valorant aimbot undetected untuk Valorant di PC Windows. Radar hack Valorant.",
					imageAlt: "Valorant 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack Valorant",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Beli Valorant Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Radar hack Valorant",
							paragraphs: [
								"Valorant Hacks menyediakan ESP wallhack, radar hack, dan valorant aimbot undetected untuk Valorant di PC Windows. 2D radar cues for flanks and rotations.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Vanguard anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard anti-cheat.",
								"support@valoranthack.net untuk dukungan dan legal.",
							],
						},
					],
				},
				vanguard: {
					title: "Bypass Vanguard | Patch Maintenance",
					description: "Bypass Vanguard: how Vanguard updates are handled for Valorant hacks. pengiriman digital instan. undetected — PC Windows.",
					h1: "Bypass Vanguard",
					intro: "Valorant Hacks menyediakan ESP wallhack, radar hack, dan valorant aimbot undetected untuk Valorant di PC Windows. Bypass Vanguard.",
					imageAlt: "Valorant Hacks maintenance after a Vanguard patch",
					galleryTitle: "Bypass Vanguard",
					heroImage: "/images/valorant-hacks-aimbot.webp",
					ctaPrimary: "Beli Valorant Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Vanguard",
							paragraphs: [
								"Valorant Hacks menyediakan ESP wallhack, radar hack, dan valorant aimbot undetected untuk Valorant di PC Windows. how Vanguard updates are handled for Valorant hacks.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Vanguard anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard anti-cheat.",
								"support@valoranthack.net untuk dukungan dan legal.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheat Valorant 2026 | Buyer Guide",
					description: "Cheat Valorant 2026: 2026 Valorant hacks checklist before checkout. pengiriman digital instan. undetected — PC Windows.",
					h1: "Cheat Valorant 2026",
					intro: "Valorant Hacks menyediakan ESP wallhack, radar hack, dan valorant aimbot undetected untuk Valorant di PC Windows. Cheat Valorant 2026.",
					imageAlt: "Valorant Hacks product overview for Valorant",
					galleryTitle: "Cheat Valorant 2026",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Beli Valorant Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "Cheat Valorant 2026",
							paragraphs: [
								"Valorant Hacks menyediakan ESP wallhack, radar hack, dan valorant aimbot undetected untuk Valorant di PC Windows. 2026 Valorant hacks checklist before checkout.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Vanguard anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard anti-cheat.",
								"support@valoranthack.net untuk dukungan dan legal.",
							],
						},
					],
				},
				hacks: {
					title: "Cheat Valorant | ESP Aimbot Guide",
					description: "Cheat Valorant: the Valorant hacks pillar for ESP and Aimbot. pengiriman digital instan. undetected — PC Windows.",
					h1: "Cheat Valorant",
					intro: "Valorant Hacks menyediakan ESP wallhack, radar hack, dan valorant aimbot undetected untuk Valorant di PC Windows. Cheat Valorant.",
					imageAlt: "Valorant Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Cheat Valorant",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Beli Valorant Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat Valorant",
							paragraphs: [
								"Valorant Hacks menyediakan ESP wallhack, radar hack, dan valorant aimbot undetected untuk Valorant di PC Windows. the Valorant hacks pillar for ESP and Aimbot.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Vanguard anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard anti-cheat.",
								"support@valoranthack.net untuk dukungan dan legal.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Download Cheat Valorant | Instant Access",
					description: "Download Cheat Valorant: digital license download after payment. pengiriman digital instan. undetected — PC Windows.",
					h1: "Download Cheat Valorant",
					intro: "Valorant Hacks menyediakan ESP wallhack, radar hack, dan valorant aimbot undetected untuk Valorant di PC Windows. Download Cheat Valorant.",
					imageAlt: "Valorant Hacks download and install delivery flow",
					galleryTitle: "Download Cheat Valorant",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Beli Valorant Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Download Cheat Valorant",
							paragraphs: [
								"Valorant Hacks menyediakan ESP wallhack, radar hack, dan valorant aimbot undetected untuk Valorant di PC Windows. digital license download after payment.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Vanguard anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard anti-cheat.",
								"support@valoranthack.net untuk dukungan dan legal.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menu mod Valorant | In-Game Toggles",
					description: "Menu mod Valorant: in-client ESP and soft aim toggles. pengiriman digital instan. undetected — PC Windows.",
					h1: "Menu mod Valorant",
					intro: "Valorant Hacks menyediakan ESP wallhack, radar hack, dan valorant aimbot undetected untuk Valorant di PC Windows. Menu mod Valorant.",
					imageAlt: "Valorant Hacks in-game menu controls",
					galleryTitle: "Menu mod Valorant",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Beli Valorant Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu mod Valorant",
							paragraphs: [
								"Valorant Hacks menyediakan ESP wallhack, radar hack, dan valorant aimbot undetected untuk Valorant di PC Windows. in-client ESP and soft aim toggles.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Vanguard anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard anti-cheat.",
								"support@valoranthack.net untuk dukungan dan legal.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Valorant | Smooth Aim Settings",
					description: "Soft aim Valorant: smooth soft aim settings for Windows PC. pengiriman digital instan. undetected — PC Windows.",
					h1: "Soft aim Valorant",
					intro: "Valorant Hacks menyediakan ESP wallhack, radar hack, dan valorant aimbot undetected untuk Valorant di PC Windows. Soft aim Valorant.",
					imageAlt: "Valorant soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Valorant",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Beli Valorant Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/valorant-aimbot/",
					sections: [
						{
							h2: "Soft aim Valorant",
							paragraphs: [
								"Valorant Hacks menyediakan ESP wallhack, radar hack, dan valorant aimbot undetected untuk Valorant di PC Windows. smooth soft aim settings for Windows PC.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Vanguard anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard anti-cheat.",
								"support@valoranthack.net untuk dukungan dan legal.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cheat Valorant terbaik | Buyer Checklist",
					description: "Cheat Valorant terbaik: what to compare before buying Valorant hacks. pengiriman digital instan. undetected — PC Windows.",
					h1: "Cheat Valorant terbaik",
					intro: "Valorant Hacks menyediakan ESP wallhack, radar hack, dan valorant aimbot undetected untuk Valorant di PC Windows. Cheat Valorant terbaik.",
					imageAlt: "Valorant Hacks overview for Valorant on PC",
					galleryTitle: "Cheat Valorant terbaik",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Beli Valorant Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cheat Valorant terbaik",
							paragraphs: [
								"Valorant Hacks menyediakan ESP wallhack, radar hack, dan valorant aimbot undetected untuk Valorant di PC Windows. what to compare before buying Valorant hacks.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Vanguard anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard anti-cheat.",
								"support@valoranthack.net untuk dukungan dan legal.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Valorant | Soft Aim Assist",
					description: "Hack aimbot Valorant: undetected Aimbot hack assist for Valorant. pengiriman digital instan. undetected — PC Windows.",
					h1: "Hack aimbot Valorant",
					intro: "Valorant Hacks menyediakan ESP wallhack, radar hack, dan valorant aimbot undetected untuk Valorant di PC Windows. Hack aimbot Valorant.",
					imageAlt: "Valorant aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Valorant",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Beli Valorant Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/valorant-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Valorant",
							paragraphs: [
								"Valorant Hacks menyediakan ESP wallhack, radar hack, dan valorant aimbot undetected untuk Valorant di PC Windows. undetected Aimbot hack assist for Valorant.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Vanguard anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard anti-cheat.",
								"support@valoranthack.net untuk dukungan dan legal.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Valorant | Boxes & Spike",
					description: "Hack ESP Valorant: ESP hack boxes, spike markers, and distance. pengiriman digital instan. undetected — PC Windows.",
					h1: "Hack ESP Valorant",
					intro: "Valorant Hacks menyediakan ESP wallhack, radar hack, dan valorant aimbot undetected untuk Valorant di PC Windows. Hack ESP Valorant.",
					imageAlt: "Valorant ESP hack boxes and spike markers",
					galleryTitle: "Hack ESP Valorant",
					heroImage: "/images/valorant-hacks-wallhack.webp",
					ctaPrimary: "Beli Valorant Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Hack ESP Valorant",
							paragraphs: [
								"Valorant Hacks menyediakan ESP wallhack, radar hack, dan valorant aimbot undetected untuk Valorant di PC Windows. ESP hack boxes, spike markers, and distance.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Vanguard anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard anti-cheat.",
								"support@valoranthack.net untuk dukungan dan legal.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Valorant | What It Means",
					description: "Unlock all Valorant: unlock-all searches vs real ESP and Aimbot tools. pengiriman digital instan. undetected — PC Windows.",
					h1: "Unlock all Valorant",
					intro: "Valorant Hacks menyediakan ESP wallhack, radar hack, dan valorant aimbot undetected untuk Valorant di PC Windows. Unlock all Valorant.",
					imageAlt: "Valorant Hacks license features overview",
					galleryTitle: "Unlock all Valorant",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Beli Valorant Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Valorant",
							paragraphs: [
								"Valorant Hacks menyediakan ESP wallhack, radar hack, dan valorant aimbot undetected untuk Valorant di PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Vanguard anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard anti-cheat.",
								"support@valoranthack.net untuk dukungan dan legal.",
							],
						},
					],
				},
				privacy: {
					title: "Kebijakan privasi | Valorant Hacks",
					description: "Kebijakan privasi for Valorant Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Kebijakan privasi",
					intro: "Valorant Hacks menyediakan ESP wallhack, radar hack, dan valorant aimbot undetected untuk Valorant di PC Windows. Kebijakan privasi for valoranthack.net and Valorant licenses.",
					imageAlt: "valorant hacks",
					galleryTitle: "valorant hacks",
					heroImage: "/images/valorant-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Valorant Hacks menyediakan ESP wallhack, radar hack, dan valorant aimbot undetected untuk Valorant di PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on valoranthack.net.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Valorant Hacks menyediakan ESP wallhack, radar hack, dan valorant aimbot undetected untuk Valorant di PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Periksa Updates setelah patch Vanguard anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@valoranthack.net untuk dukungan dan legal.",
								"Email: support@valoranthack.net",
							],
						},
					],
				},
				refund: {
					title: "Kebijakan refund | Valorant Hacks",
					description: "Kebijakan refund for Valorant Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Kebijakan refund",
					intro: "Valorant Hacks menyediakan ESP wallhack, radar hack, dan valorant aimbot undetected untuk Valorant di PC Windows. Kebijakan refund for valoranthack.net and Valorant licenses.",
					imageAlt: "valorant hacks",
					galleryTitle: "valorant hacks",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Valorant Hacks menyediakan ESP wallhack, radar hack, dan valorant aimbot undetected untuk Valorant di PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard anti-cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Valorant Hacks menyediakan ESP wallhack, radar hack, dan valorant aimbot undetected untuk Valorant di PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Periksa Updates setelah patch Vanguard anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@valoranthack.net untuk dukungan dan legal.",
								"Email: support@valoranthack.net",
							],
						},
					],
				},
				terms: {
					title: "Syarat penggunaan | Valorant Hacks",
					description: "Syarat penggunaan for Valorant Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Syarat penggunaan",
					intro: "Valorant Hacks menyediakan ESP wallhack, radar hack, dan valorant aimbot undetected untuk Valorant di PC Windows. Syarat penggunaan for valoranthack.net and Valorant licenses.",
					imageAlt: "valorant hacks",
					galleryTitle: "valorant hacks",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Valorant Hacks menyediakan ESP wallhack, radar hack, dan valorant aimbot undetected untuk Valorant di PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard anti-cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Valorant Hacks menyediakan ESP wallhack, radar hack, dan valorant aimbot undetected untuk Valorant di PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Riot Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@valoranthack.net untuk dukungan dan legal.",
								"Email: support@valoranthack.net",
							],
						},
					],
				},
			},
		},
		th: {
			ui: {
				nav: {
					home: "หน้าแรก",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "ฟีเจอร์",
					pricing: "ราคา",
					setup: "ติดตั้ง",
					updates: "อัปเดต",
					faq: "FAQ",
					buyNow: "ซื้อเลย",
				},
				hero: {
					accent: "Valorant hacks ไม่ถูกตรวจจับ",
					accentShort: "Valorant Hacks",
					subtitle: "ESP wallhack, radar hack และ Aimbot สำหรับ Valorant บน Windows PC — รวมการดูแล Vanguard anti-cheat",
					subtitleShort: "ESP, radar และ Aimbot สำหรับ Valorant PC",
					buyNow: "ซื้อเลย",
					seeFeatures: "ดูฟีเจอร์",
				},
				trust: {
					status: "ออนไลน์",
					statusNote: "แพ็กเกจ Valorant Hacks พร้อมใช้งานสำหรับ Valorant บน Windows PC",
					statusShort: "ใช้งาน",
					delivery: "จัดส่งดิจิทัลทันที",
					platform: "Windows 10 และ 11",
					antiCheat: "รองรับการดูแล Vanguard anti-cheat",
					antiCheatShort: "Vanguard anti-cheat รองรับ",
				},
				product: {
					title: "Valorant Hacks",
					addToCart: "เพิ่มในตะกร้า",
					monthly: "รายเดือน",
					lifetime: "ตลอดชีพ",
					available: "พร้อมใช้งาน",
					gameBadge: "Valorant",
					platformBadge: "Windows PC",
					statusBadge: "แพ็กเกจ undetected",
				},
				reviews: {
					title: "ผู้เล่นพูดว่าอย่างไร",
					subtitle: "ความคิดเห็นล่าสุดจากผู้ซื้อ Valorant Hacks",
					outOf: "จาก 5",
					countLabel: "รีวิว",
				},
				common: {
					buyNow: "ซื้อเลย",
					readGuide: "อ่านคู่มือ",
					language: "ภาษา",
					officialLanguageNote: "ภาษาอังกฤษเป็นภาษาทางการ ภาษาอื่นแปลเพื่อ SEO ระดับโลก",
					relatedPages: "หน้าที่เกี่ยวข้อง",
				},
				footer: {
					explore: "สำรวจ",
					help: "ช่วยเหลือและกฎหมาย",
					tagline: "ESP, wallhack, radar และ Aimbot ไม่ถูกตรวจจับสำหรับ Valorant — ชำระผ่าน Zadeyo",
				},
				images: {
					hero: "Valorant Hacks hero — ESP and aimbot overlay in Valorant",
					espWallhack: "Wallhack outlines showing agents and enemies through walls",
					aimbotCombat: "Soft aim assist overlay during a Valorant round",
					squadFight: "Valorant Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Valorant match",
					headerArt: "Aimbot view and bone priority controls for Valorant",
					cheatsPackage: "2D radar threat overlay for Valorant",
					rebootFight: "Aimbot assist during a Valorant firefight",
					battleRoyale: "Valorant Hacks in-match overview for Windows PC",
					battleRoyaleIsland: "ESP markers for agents and the spike in Valorant",
				},
			},
			pages: {
				home: {
					title: "Valorant Hacks | Official PC Site",
					description: "Cheat Valorant undetected สำหรับ Valorant บน PC. ESP wallhack, radar hack, Aimbot, Vanguard maintenance. จัดส่งดิจิทัลทันที.",
					h1: "Valorant Hacks",
					intro: "แพ็ก undetected สำหรับ Valorant บน Windows PC: ESP wallhack, radar, Aimbot พร้อม Vanguard maintenance",
					imageAlt: "Valorant ESP player tags hack",
					galleryTitle: "แกลเลอรี Valorant Hacks — ESP, Aimbot, wallhack",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "ซื้อ Valorant Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "ทำไมเลือก Valorant Hacks ปี 2026",
							paragraphs: [
								"Valorant Hacks รวม ESP wallhack, radar hack และ valorant aimbot แบบ undetected สำหรับ Valorant บน Windows PC เหมาะสำหรับอ่าน squad ศัตรูใน Competitive และ Deathmatch",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard anti-cheat",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot ในใบอนุญาตเดียว",
							paragraphs: [
								"Valorant Hacks รวม ESP wallhack, radar hack และ valorant aimbot แบบ undetected สำหรับ Valorant บน Windows PC ใบอนุญาตเดียวแทนเครื่องมือแยก",
								"ตรวจ Updates หลังแพตช์ Vanguard anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
							],
						},
					],
				},
				"valorant-esp": {
					title: "Valorant ESP | Player Boxes & Wallhack",
					description: "Valorant ESP: player boxes, spike markers, and wallhack overlays. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Valorant ESP",
					intro: "Valorant Hacks รวม ESP wallhack, radar hack และ valorant aimbot แบบ undetected สำหรับ Valorant บน Windows PC Valorant ESP.",
					imageAlt: "Valorant ESP player boxes and distance readouts in a match",
					galleryTitle: "Valorant ESP",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "ซื้อ Valorant Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "Valorant ESP",
							paragraphs: [
								"Valorant Hacks รวม ESP wallhack, radar hack และ valorant aimbot แบบ undetected สำหรับ Valorant บน Windows PC player boxes, spike markers, and wallhack overlays.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Vanguard anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard anti-cheat",
								"support@valoranthack.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				"valorant-aimbot": {
					title: "Valorant Aimbot | Soft Aim Controls",
					description: "Valorant Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Valorant Aimbot",
					intro: "Valorant Hacks รวม ESP wallhack, radar hack และ valorant aimbot แบบ undetected สำหรับ Valorant บน Windows PC Valorant Aimbot.",
					imageAlt: "Valorant aimbot and soft aim controls on Windows PC",
					galleryTitle: "Valorant Aimbot",
					heroImage: "/images/valorant-hacks-aimbot.webp",
					ctaPrimary: "ซื้อ Valorant Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Valorant Aimbot",
							paragraphs: [
								"Valorant Hacks รวม ESP wallhack, radar hack และ valorant aimbot แบบ undetected สำหรับ Valorant บน Windows PC soft aim, FOV, and per-weapon Aimbot profiles.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Vanguard anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard anti-cheat",
								"support@valoranthack.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				features: {
					title: "ฟีเจอร์ | Full Feature List",
					description: "ฟีเจอร์: ESP, soft aim, radar controls. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ฟีเจอร์",
					intro: "Valorant Hacks รวม ESP wallhack, radar hack และ valorant aimbot แบบ undetected สำหรับ Valorant บน Windows PC ฟีเจอร์.",
					imageAlt: "Valorant Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "ฟีเจอร์",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "ซื้อ Valorant Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "ฟีเจอร์",
							paragraphs: [
								"Valorant Hacks รวม ESP wallhack, radar hack และ valorant aimbot แบบ undetected สำหรับ Valorant บน Windows PC ESP, soft aim, radar controls.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Vanguard anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard anti-cheat",
								"support@valoranthack.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				pricing: {
					title: "ราคา | Monthly & Lifetime",
					description: "ราคา: $35 monthly or $150 lifetime licenses. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ราคา",
					intro: "Valorant Hacks รวม ESP wallhack, radar hack และ valorant aimbot แบบ undetected สำหรับ Valorant บน Windows PC ราคา.",
					imageAlt: "Valorant Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "ราคา",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "ซื้อ Valorant Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "ราคา",
							paragraphs: [
								"Valorant Hacks รวม ESP wallhack, radar hack และ valorant aimbot แบบ undetected สำหรับ Valorant บน Windows PC $35 monthly or $150 lifetime licenses.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Vanguard anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard anti-cheat",
								"support@valoranthack.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				setup: {
					title: "ติดตั้ง | PC Setup Guide",
					description: "ติดตั้ง: Windows PC activation and first-launch setup. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ติดตั้ง",
					intro: "Valorant Hacks รวม ESP wallhack, radar hack และ valorant aimbot แบบ undetected สำหรับ Valorant บน Windows PC ติดตั้ง.",
					imageAlt: "Valorant Hacks setup guide screenshot for Windows PC",
					galleryTitle: "ติดตั้ง",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "ซื้อ Valorant Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "ติดตั้ง",
							paragraphs: [
								"Valorant Hacks รวม ESP wallhack, radar hack และ valorant aimbot แบบ undetected สำหรับ Valorant บน Windows PC Windows PC activation and first-launch setup.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Vanguard anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard anti-cheat",
								"support@valoranthack.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				updates: {
					title: "อัปเดต | Vanguard Maintenance Log",
					description: "อัปเดต: Vanguard patch status and rebuild notes. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "อัปเดต",
					intro: "Valorant Hacks รวม ESP wallhack, radar hack และ valorant aimbot แบบ undetected สำหรับ Valorant บน Windows PC อัปเดต.",
					imageAlt: "Valorant Hacks live status after Vanguard and game patches",
					galleryTitle: "อัปเดต",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "ซื้อ Valorant Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "อัปเดต",
							paragraphs: [
								"Valorant Hacks รวม ESP wallhack, radar hack และ valorant aimbot แบบ undetected สำหรับ Valorant บน Windows PC Vanguard patch status and rebuild notes.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Vanguard anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard anti-cheat",
								"support@valoranthack.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and Vanguard questions. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Valorant Hacks รวม ESP wallhack, radar hack และ valorant aimbot แบบ undetected สำหรับ Valorant บน Windows PC FAQ.",
					imageAlt: "Valorant Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "ซื้อ Valorant Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Valorant Hacks รวม ESP wallhack, radar hack และ valorant aimbot แบบ undetected สำหรับ Valorant บน Windows PC ESP, soft aim, delivery, and Vanguard questions.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Vanguard anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard anti-cheat",
								"support@valoranthack.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				support: {
					title: "สนับสนุน | Help & Contact",
					description: "สนับสนุน: order help and license support contact. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "สนับสนุน",
					intro: "Valorant Hacks รวม ESP wallhack, radar hack และ valorant aimbot แบบ undetected สำหรับ Valorant บน Windows PC สนับสนุน.",
					imageAlt: "Valorant Hacks support page for license and setup help",
					galleryTitle: "สนับสนุน",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "ซื้อ Valorant Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "สนับสนุน",
							paragraphs: [
								"Valorant Hacks รวม ESP wallhack, radar hack และ valorant aimbot แบบ undetected สำหรับ Valorant บน Windows PC order help and license support contact.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Vanguard anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard anti-cheat",
								"support@valoranthack.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				undetected: {
					title: "Cheats undetected | Vanguard Safe Status",
					description: "Cheats undetected: undetected maintenance after Vanguard anti-cheat patches. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Cheats undetected",
					intro: "Valorant Hacks รวม ESP wallhack, radar hack และ valorant aimbot แบบ undetected สำหรับ Valorant บน Windows PC Cheats undetected.",
					imageAlt: "Valorant Hacks undetected status overview for Windows PC",
					galleryTitle: "Cheats undetected",
					heroImage: "/images/valorant-hacks-wallhack.webp",
					ctaPrimary: "ซื้อ Valorant Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "Cheats undetected",
							paragraphs: [
								"Valorant Hacks รวม ESP wallhack, radar hack และ valorant aimbot แบบ undetected สำหรับ Valorant บน Windows PC undetected maintenance after Vanguard anti-cheat patches.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Vanguard anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard anti-cheat",
								"support@valoranthack.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				wallhack: {
					title: "Valorant Wallhack | ESP Visibility",
					description: "Valorant Wallhack: wallhack ESP for players, spike, and distance. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Valorant Wallhack",
					intro: "Valorant Hacks รวม ESP wallhack, radar hack และ valorant aimbot แบบ undetected สำหรับ Valorant บน Windows PC Valorant Wallhack.",
					imageAlt: "Valorant wallhack visibility through walls in a match",
					galleryTitle: "Valorant Wallhack",
					heroImage: "/images/valorant-hacks-wallhack.webp",
					ctaPrimary: "ซื้อ Valorant Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Valorant Wallhack",
							paragraphs: [
								"Valorant Hacks รวม ESP wallhack, radar hack และ valorant aimbot แบบ undetected สำหรับ Valorant บน Windows PC wallhack ESP for players, spike, and distance.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Vanguard anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard anti-cheat",
								"support@valoranthack.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				radar: {
					title: "Valorant Radar Hack | 2D Threat Overlay",
					description: "Valorant Radar Hack: 2D radar cues for flanks and rotations. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Valorant Radar Hack",
					intro: "Valorant Hacks รวม ESP wallhack, radar hack และ valorant aimbot แบบ undetected สำหรับ Valorant บน Windows PC Valorant Radar Hack.",
					imageAlt: "Valorant 2D radar overlay showing nearby threats",
					galleryTitle: "Valorant Radar Hack",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "ซื้อ Valorant Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Valorant Radar Hack",
							paragraphs: [
								"Valorant Hacks รวม ESP wallhack, radar hack และ valorant aimbot แบบ undetected สำหรับ Valorant บน Windows PC 2D radar cues for flanks and rotations.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Vanguard anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard anti-cheat",
								"support@valoranthack.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				vanguard: {
					title: "Vanguard Bypass | Patch Maintenance",
					description: "Vanguard Bypass: how Vanguard updates are handled for Valorant hacks. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Vanguard Bypass",
					intro: "Valorant Hacks รวม ESP wallhack, radar hack และ valorant aimbot แบบ undetected สำหรับ Valorant บน Windows PC Vanguard Bypass.",
					imageAlt: "Valorant Hacks maintenance after a Vanguard patch",
					galleryTitle: "Vanguard Bypass",
					heroImage: "/images/valorant-hacks-aimbot.webp",
					ctaPrimary: "ซื้อ Valorant Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Vanguard Bypass",
							paragraphs: [
								"Valorant Hacks รวม ESP wallhack, radar hack และ valorant aimbot แบบ undetected สำหรับ Valorant บน Windows PC how Vanguard updates are handled for Valorant hacks.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Vanguard anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard anti-cheat",
								"support@valoranthack.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Valorant Hacks 2026 | Buyer Guide",
					description: "Valorant Hacks 2026: 2026 Valorant hacks checklist before checkout. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Valorant Hacks 2026",
					intro: "Valorant Hacks รวม ESP wallhack, radar hack และ valorant aimbot แบบ undetected สำหรับ Valorant บน Windows PC Valorant Hacks 2026.",
					imageAlt: "Valorant Hacks product overview for Valorant",
					galleryTitle: "Valorant Hacks 2026",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "ซื้อ Valorant Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "Valorant Hacks 2026",
							paragraphs: [
								"Valorant Hacks รวม ESP wallhack, radar hack และ valorant aimbot แบบ undetected สำหรับ Valorant บน Windows PC 2026 Valorant hacks checklist before checkout.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Vanguard anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard anti-cheat",
								"support@valoranthack.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				hacks: {
					title: "Valorant Hacks | ESP Aimbot Guide",
					description: "Valorant Hacks: the Valorant hacks pillar for ESP and Aimbot. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Valorant Hacks",
					intro: "Valorant Hacks รวม ESP wallhack, radar hack และ valorant aimbot แบบ undetected สำหรับ Valorant บน Windows PC Valorant Hacks.",
					imageAlt: "Valorant Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Valorant Hacks",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "ซื้อ Valorant Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Valorant Hacks",
							paragraphs: [
								"Valorant Hacks รวม ESP wallhack, radar hack และ valorant aimbot แบบ undetected สำหรับ Valorant บน Windows PC the Valorant hacks pillar for ESP and Aimbot.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Vanguard anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard anti-cheat",
								"support@valoranthack.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				"cheat-download": {
					title: "ดาวน์โหลด Valorant Hacks | Instant Access",
					description: "ดาวน์โหลด Valorant Hacks: digital license download after payment. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ดาวน์โหลด Valorant Hacks",
					intro: "Valorant Hacks รวม ESP wallhack, radar hack และ valorant aimbot แบบ undetected สำหรับ Valorant บน Windows PC ดาวน์โหลด Valorant Hacks.",
					imageAlt: "Valorant Hacks download and install delivery flow",
					galleryTitle: "ดาวน์โหลด Valorant Hacks",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "ซื้อ Valorant Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "ดาวน์โหลด Valorant Hacks",
							paragraphs: [
								"Valorant Hacks รวม ESP wallhack, radar hack และ valorant aimbot แบบ undetected สำหรับ Valorant บน Windows PC digital license download after payment.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Vanguard anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard anti-cheat",
								"support@valoranthack.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				"mod-menu": {
					title: "เมนูมอด Valorant | In-Game Toggles",
					description: "เมนูมอด Valorant: in-client ESP and soft aim toggles. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "เมนูมอด Valorant",
					intro: "Valorant Hacks รวม ESP wallhack, radar hack และ valorant aimbot แบบ undetected สำหรับ Valorant บน Windows PC เมนูมอด Valorant.",
					imageAlt: "Valorant Hacks in-game menu controls",
					galleryTitle: "เมนูมอด Valorant",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "ซื้อ Valorant Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "เมนูมอด Valorant",
							paragraphs: [
								"Valorant Hacks รวม ESP wallhack, radar hack และ valorant aimbot แบบ undetected สำหรับ Valorant บน Windows PC in-client ESP and soft aim toggles.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Vanguard anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard anti-cheat",
								"support@valoranthack.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				"soft-aim": {
					title: "Valorant Soft Aim | Smooth Aim Settings",
					description: "Valorant Soft Aim: smooth soft aim settings for Windows PC. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Valorant Soft Aim",
					intro: "Valorant Hacks รวม ESP wallhack, radar hack และ valorant aimbot แบบ undetected สำหรับ Valorant บน Windows PC Valorant Soft Aim.",
					imageAlt: "Valorant soft aim FOV and smoothness settings",
					galleryTitle: "Valorant Soft Aim",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "ซื้อ Valorant Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/valorant-aimbot/",
					sections: [
						{
							h2: "Valorant Soft Aim",
							paragraphs: [
								"Valorant Hacks รวม ESP wallhack, radar hack และ valorant aimbot แบบ undetected สำหรับ Valorant บน Windows PC smooth soft aim settings for Windows PC.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Vanguard anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard anti-cheat",
								"support@valoranthack.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cheat Valorant ที่ดีที่สุด | Buyer Checklist",
					description: "Cheat Valorant ที่ดีที่สุด: what to compare before buying Valorant hacks. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Cheat Valorant ที่ดีที่สุด",
					intro: "Valorant Hacks รวม ESP wallhack, radar hack และ valorant aimbot แบบ undetected สำหรับ Valorant บน Windows PC Cheat Valorant ที่ดีที่สุด.",
					imageAlt: "Valorant Hacks overview for Valorant on PC",
					galleryTitle: "Cheat Valorant ที่ดีที่สุด",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "ซื้อ Valorant Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cheat Valorant ที่ดีที่สุด",
							paragraphs: [
								"Valorant Hacks รวม ESP wallhack, radar hack และ valorant aimbot แบบ undetected สำหรับ Valorant บน Windows PC what to compare before buying Valorant hacks.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Vanguard anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard anti-cheat",
								"support@valoranthack.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack Aimbot Valorant | Soft Aim Assist",
					description: "Hack Aimbot Valorant: undetected Aimbot hack assist for Valorant. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Hack Aimbot Valorant",
					intro: "Valorant Hacks รวม ESP wallhack, radar hack และ valorant aimbot แบบ undetected สำหรับ Valorant บน Windows PC Hack Aimbot Valorant.",
					imageAlt: "Valorant aimbot hack controls and bone priority",
					galleryTitle: "Hack Aimbot Valorant",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "ซื้อ Valorant Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/valorant-aimbot/",
					sections: [
						{
							h2: "Hack Aimbot Valorant",
							paragraphs: [
								"Valorant Hacks รวม ESP wallhack, radar hack และ valorant aimbot แบบ undetected สำหรับ Valorant บน Windows PC undetected Aimbot hack assist for Valorant.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Vanguard anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard anti-cheat",
								"support@valoranthack.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Valorant | Boxes & Spike",
					description: "Hack ESP Valorant: ESP hack boxes, spike markers, and distance. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Hack ESP Valorant",
					intro: "Valorant Hacks รวม ESP wallhack, radar hack และ valorant aimbot แบบ undetected สำหรับ Valorant บน Windows PC Hack ESP Valorant.",
					imageAlt: "Valorant ESP hack boxes and spike markers",
					galleryTitle: "Hack ESP Valorant",
					heroImage: "/images/valorant-hacks-wallhack.webp",
					ctaPrimary: "ซื้อ Valorant Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Hack ESP Valorant",
							paragraphs: [
								"Valorant Hacks รวม ESP wallhack, radar hack และ valorant aimbot แบบ undetected สำหรับ Valorant บน Windows PC ESP hack boxes, spike markers, and distance.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Vanguard anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard anti-cheat",
								"support@valoranthack.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				"unlock-all": {
					title: "Valorant Unlock All | What It Means",
					description: "Valorant Unlock All: unlock-all searches vs real ESP and Aimbot tools. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Valorant Unlock All",
					intro: "Valorant Hacks รวม ESP wallhack, radar hack และ valorant aimbot แบบ undetected สำหรับ Valorant บน Windows PC Valorant Unlock All.",
					imageAlt: "Valorant Hacks license features overview",
					galleryTitle: "Valorant Unlock All",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "ซื้อ Valorant Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Valorant Unlock All",
							paragraphs: [
								"Valorant Hacks รวม ESP wallhack, radar hack และ valorant aimbot แบบ undetected สำหรับ Valorant บน Windows PC unlock-all searches vs real ESP and Aimbot tools.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Vanguard anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard anti-cheat",
								"support@valoranthack.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				privacy: {
					title: "นโยบายความเป็นส่วนตัว | Valorant Hacks",
					description: "นโยบายความเป็นส่วนตัว for Valorant Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "นโยบายความเป็นส่วนตัว",
					intro: "Valorant Hacks รวม ESP wallhack, radar hack และ valorant aimbot แบบ undetected สำหรับ Valorant บน Windows PC นโยบายความเป็นส่วนตัว for valoranthack.net and Valorant licenses.",
					imageAlt: "valorant hacks",
					galleryTitle: "valorant hacks",
					heroImage: "/images/valorant-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Valorant Hacks รวม ESP wallhack, radar hack และ valorant aimbot แบบ undetected สำหรับ Valorant บน Windows PC Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on valoranthack.net.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Valorant Hacks รวม ESP wallhack, radar hack และ valorant aimbot แบบ undetected สำหรับ Valorant บน Windows PC Support responses, order resolution, and legal compliance when required.",
								"ตรวจ Updates หลังแพตช์ Vanguard anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@valoranthack.net สำหรับการสนับสนุน",
								"Email: support@valoranthack.net",
							],
						},
					],
				},
				refund: {
					title: "นโยบายการคืนเงิน | Valorant Hacks",
					description: "นโยบายการคืนเงิน for Valorant Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "นโยบายการคืนเงิน",
					intro: "Valorant Hacks รวม ESP wallhack, radar hack และ valorant aimbot แบบ undetected สำหรับ Valorant บน Windows PC นโยบายการคืนเงิน for valoranthack.net and Valorant licenses.",
					imageAlt: "valorant hacks",
					galleryTitle: "valorant hacks",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Valorant Hacks รวม ESP wallhack, radar hack และ valorant aimbot แบบ undetected สำหรับ Valorant บน Windows PC Contact email, Zadeyo order references, and basic site security data.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard anti-cheat",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Valorant Hacks รวม ESP wallhack, radar hack และ valorant aimbot แบบ undetected สำหรับ Valorant บน Windows PC Support responses, order resolution, and legal compliance when required.",
								"ตรวจ Updates หลังแพตช์ Vanguard anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@valoranthack.net สำหรับการสนับสนุน",
								"Email: support@valoranthack.net",
							],
						},
					],
				},
				terms: {
					title: "ข้อกำหนดการใช้งาน | Valorant Hacks",
					description: "ข้อกำหนดการใช้งาน for Valorant Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "ข้อกำหนดการใช้งาน",
					intro: "Valorant Hacks รวม ESP wallhack, radar hack และ valorant aimbot แบบ undetected สำหรับ Valorant บน Windows PC ข้อกำหนดการใช้งาน for valoranthack.net and Valorant licenses.",
					imageAlt: "valorant hacks",
					galleryTitle: "valorant hacks",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Valorant Hacks รวม ESP wallhack, radar hack และ valorant aimbot แบบ undetected สำหรับ Valorant บน Windows PC Contact email, Zadeyo order references, and basic site security data.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard anti-cheat",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Valorant Hacks รวม ESP wallhack, radar hack และ valorant aimbot แบบ undetected สำหรับ Valorant บน Windows PC Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Riot Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@valoranthack.net สำหรับการสนับสนุน",
								"Email: support@valoranthack.net",
							],
						},
					],
				},
			},
		},
		vi: {
			ui: {
				nav: {
					home: "Trang chủ",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Tính năng",
					pricing: "Giá",
					setup: "Cài đặt",
					updates: "Cập nhật",
					faq: "FAQ",
					buyNow: "Mua ngay",
				},
				hero: {
					accent: "Cheat Valorant undetected",
					accentShort: "Valorant Hacks",
					subtitle: "ESP wallhack, radar hack và Aimbot cho Valorant trên PC Windows — bảo trì Vanguard anti-cheat bao gồm.",
					subtitleShort: "ESP, radar & Aimbot cho Valorant PC",
					buyNow: "Mua ngay",
					seeFeatures: "Xem tính năng",
				},
				trust: {
					status: "Trực tuyến",
					statusNote: "Gói Valorant Hacks đang hoạt động cho Valorant trên PC Windows.",
					statusShort: "Hoạt động",
					delivery: "Giao hàng kỹ thuật số tức thì",
					platform: "Windows 10 & 11",
					antiCheat: "Hỗ trợ bảo trì Vanguard anti-cheat",
					antiCheatShort: "Hỗ trợ Vanguard anti-cheat",
				},
				product: {
					title: "Valorant Hacks",
					addToCart: "Thêm vào giỏ",
					monthly: "Hàng tháng",
					lifetime: "Trọn đời",
					available: "Có sẵn ngay",
					gameBadge: "Valorant",
					platformBadge: "Windows PC",
					statusBadge: "Gói undetected",
				},
				reviews: {
					title: "Người chơi nói gì",
					subtitle: "Phản hồi gần đây từ người mua Valorant Hacks",
					outOf: "/5",
					countLabel: "đánh giá",
				},
				common: {
					buyNow: "Mua ngay",
					readGuide: "Đọc hướng dẫn",
					language: "Ngôn ngữ",
					officialLanguageNote: "Tiếng Anh là ngôn ngữ chính thức. Các ngôn ngữ khác được dịch cho SEO toàn cầu.",
					relatedPages: "Trang liên quan",
				},
				footer: {
					explore: "Khám phá",
					help: "Trợ giúp & pháp lý",
					tagline: "ESP, wallhack, radar và Aimbot undetected cho Valorant — thanh toán qua Zadeyo.",
				},
				images: {
					hero: "Valorant Hacks hero — ESP and aimbot overlay in Valorant",
					espWallhack: "Wallhack outlines showing agents and enemies through walls",
					aimbotCombat: "Soft aim assist overlay during a Valorant round",
					squadFight: "Valorant Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Valorant match",
					headerArt: "Aimbot view and bone priority controls for Valorant",
					cheatsPackage: "2D radar threat overlay for Valorant",
					rebootFight: "Aimbot assist during a Valorant firefight",
					battleRoyale: "Valorant Hacks in-match overview for Windows PC",
					battleRoyaleIsland: "ESP markers for agents and the spike in Valorant",
				},
			},
			pages: {
				home: {
					title: "Valorant Hacks | Official PC Site",
					description: "Cheat Valorant undetected cho Valorant trên PC. ESP wallhack, radar hack, Aimbot, bảo trì Vanguard anti-cheat. Giao hàng kỹ thuật số tức thì.",
					h1: "Valorant Hacks",
					intro: "Gói undetected Valorant trên Windows PC: ESP wallhack, radar, Aimbot với bảo trì Vanguard anti-cheat.",
					imageAlt: "Valorant ESP player tags hack",
					galleryTitle: "Thư viện Valorant Hacks — ESP, Aimbot, wallhack",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Mua Valorant Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Vì sao chọn Valorant Hacks 2026",
							paragraphs: [
								"Valorant Hacks cung cấp ESP wallhack, radar hack và valorant aimbot undetected cho Valorant trên PC Windows. Lý tưởng đọc squad địch trong Competitive và Deathmatch.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard anti-cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot trong một giấy phép",
							paragraphs: [
								"Valorant Hacks cung cấp ESP wallhack, radar hack và valorant aimbot undetected cho Valorant trên PC Windows. Một giấy phép thay vì công cụ riêng.",
								"Kiểm tra Updates sau bản vá Vanguard anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
							],
						},
					],
				},
				"valorant-esp": {
					title: "ESP Valorant | Player Boxes & Wallhack",
					description: "ESP Valorant: player boxes, spike markers, and wallhack overlays. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "ESP Valorant",
					intro: "Valorant Hacks cung cấp ESP wallhack, radar hack và valorant aimbot undetected cho Valorant trên PC Windows. ESP Valorant.",
					imageAlt: "Valorant ESP player boxes and distance readouts in a match",
					galleryTitle: "ESP Valorant",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Mua Valorant Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "ESP Valorant",
							paragraphs: [
								"Valorant Hacks cung cấp ESP wallhack, radar hack và valorant aimbot undetected cho Valorant trên PC Windows. player boxes, spike markers, and wallhack overlays.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Vanguard anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard anti-cheat.",
								"support@valoranthack.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"valorant-aimbot": {
					title: "Aimbot Valorant | Soft Aim Controls",
					description: "Aimbot Valorant: soft aim, FOV, and per-weapon Aimbot profiles. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Aimbot Valorant",
					intro: "Valorant Hacks cung cấp ESP wallhack, radar hack và valorant aimbot undetected cho Valorant trên PC Windows. Aimbot Valorant.",
					imageAlt: "Valorant aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Valorant",
					heroImage: "/images/valorant-hacks-aimbot.webp",
					ctaPrimary: "Mua Valorant Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Aimbot Valorant",
							paragraphs: [
								"Valorant Hacks cung cấp ESP wallhack, radar hack và valorant aimbot undetected cho Valorant trên PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Vanguard anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard anti-cheat.",
								"support@valoranthack.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				features: {
					title: "Tính năng | Full Feature List",
					description: "Tính năng: ESP, soft aim, radar controls. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Tính năng",
					intro: "Valorant Hacks cung cấp ESP wallhack, radar hack và valorant aimbot undetected cho Valorant trên PC Windows. Tính năng.",
					imageAlt: "Valorant Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Tính năng",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Mua Valorant Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Tính năng",
							paragraphs: [
								"Valorant Hacks cung cấp ESP wallhack, radar hack và valorant aimbot undetected cho Valorant trên PC Windows. ESP, soft aim, radar controls.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Vanguard anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard anti-cheat.",
								"support@valoranthack.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				pricing: {
					title: "Giá | Monthly & Lifetime",
					description: "Giá: $35 monthly or $150 lifetime licenses. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Giá",
					intro: "Valorant Hacks cung cấp ESP wallhack, radar hack và valorant aimbot undetected cho Valorant trên PC Windows. Giá.",
					imageAlt: "Valorant Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Giá",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Mua Valorant Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Giá",
							paragraphs: [
								"Valorant Hacks cung cấp ESP wallhack, radar hack và valorant aimbot undetected cho Valorant trên PC Windows. $35 monthly or $150 lifetime licenses.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Vanguard anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard anti-cheat.",
								"support@valoranthack.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				setup: {
					title: "Cài đặt | PC Setup Guide",
					description: "Cài đặt: Windows PC activation and first-launch setup. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cài đặt",
					intro: "Valorant Hacks cung cấp ESP wallhack, radar hack và valorant aimbot undetected cho Valorant trên PC Windows. Cài đặt.",
					imageAlt: "Valorant Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Cài đặt",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Mua Valorant Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Cài đặt",
							paragraphs: [
								"Valorant Hacks cung cấp ESP wallhack, radar hack và valorant aimbot undetected cho Valorant trên PC Windows. Windows PC activation and first-launch setup.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Vanguard anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard anti-cheat.",
								"support@valoranthack.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				updates: {
					title: "Cập nhật | Vanguard Maintenance Log",
					description: "Cập nhật: Vanguard patch status and rebuild notes. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cập nhật",
					intro: "Valorant Hacks cung cấp ESP wallhack, radar hack và valorant aimbot undetected cho Valorant trên PC Windows. Cập nhật.",
					imageAlt: "Valorant Hacks live status after Vanguard and game patches",
					galleryTitle: "Cập nhật",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Mua Valorant Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "Cập nhật",
							paragraphs: [
								"Valorant Hacks cung cấp ESP wallhack, radar hack và valorant aimbot undetected cho Valorant trên PC Windows. Vanguard patch status and rebuild notes.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Vanguard anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard anti-cheat.",
								"support@valoranthack.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and Vanguard questions. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "FAQ",
					intro: "Valorant Hacks cung cấp ESP wallhack, radar hack và valorant aimbot undetected cho Valorant trên PC Windows. FAQ.",
					imageAlt: "Valorant Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Mua Valorant Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Valorant Hacks cung cấp ESP wallhack, radar hack và valorant aimbot undetected cho Valorant trên PC Windows. ESP, soft aim, delivery, and Vanguard questions.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Vanguard anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard anti-cheat.",
								"support@valoranthack.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				support: {
					title: "Hỗ trợ | Help & Contact",
					description: "Hỗ trợ: order help and license support contact. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Hỗ trợ",
					intro: "Valorant Hacks cung cấp ESP wallhack, radar hack và valorant aimbot undetected cho Valorant trên PC Windows. Hỗ trợ.",
					imageAlt: "Valorant Hacks support page for license and setup help",
					galleryTitle: "Hỗ trợ",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Mua Valorant Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Hỗ trợ",
							paragraphs: [
								"Valorant Hacks cung cấp ESP wallhack, radar hack và valorant aimbot undetected cho Valorant trên PC Windows. order help and license support contact.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Vanguard anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard anti-cheat.",
								"support@valoranthack.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				undetected: {
					title: "Cheat undetected | Vanguard Safe Status",
					description: "Cheat undetected: undetected maintenance after Vanguard anti-cheat patches. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cheat undetected",
					intro: "Valorant Hacks cung cấp ESP wallhack, radar hack và valorant aimbot undetected cho Valorant trên PC Windows. Cheat undetected.",
					imageAlt: "Valorant Hacks undetected status overview for Windows PC",
					galleryTitle: "Cheat undetected",
					heroImage: "/images/valorant-hacks-wallhack.webp",
					ctaPrimary: "Mua Valorant Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "Cheat undetected",
							paragraphs: [
								"Valorant Hacks cung cấp ESP wallhack, radar hack và valorant aimbot undetected cho Valorant trên PC Windows. undetected maintenance after Vanguard anti-cheat patches.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Vanguard anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard anti-cheat.",
								"support@valoranthack.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Valorant | ESP Visibility",
					description: "Wallhack Valorant: wallhack ESP for players, spike, and distance. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Wallhack Valorant",
					intro: "Valorant Hacks cung cấp ESP wallhack, radar hack và valorant aimbot undetected cho Valorant trên PC Windows. Wallhack Valorant.",
					imageAlt: "Valorant wallhack visibility through walls in a match",
					galleryTitle: "Wallhack Valorant",
					heroImage: "/images/valorant-hacks-wallhack.webp",
					ctaPrimary: "Mua Valorant Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Wallhack Valorant",
							paragraphs: [
								"Valorant Hacks cung cấp ESP wallhack, radar hack và valorant aimbot undetected cho Valorant trên PC Windows. wallhack ESP for players, spike, and distance.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Vanguard anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard anti-cheat.",
								"support@valoranthack.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack Valorant | 2D Threat Overlay",
					description: "Radar hack Valorant: 2D radar cues for flanks and rotations. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Radar hack Valorant",
					intro: "Valorant Hacks cung cấp ESP wallhack, radar hack và valorant aimbot undetected cho Valorant trên PC Windows. Radar hack Valorant.",
					imageAlt: "Valorant 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack Valorant",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Mua Valorant Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Radar hack Valorant",
							paragraphs: [
								"Valorant Hacks cung cấp ESP wallhack, radar hack và valorant aimbot undetected cho Valorant trên PC Windows. 2D radar cues for flanks and rotations.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Vanguard anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard anti-cheat.",
								"support@valoranthack.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				vanguard: {
					title: "Bypass Vanguard | Patch Maintenance",
					description: "Bypass Vanguard: how Vanguard updates are handled for Valorant hacks. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Bypass Vanguard",
					intro: "Valorant Hacks cung cấp ESP wallhack, radar hack và valorant aimbot undetected cho Valorant trên PC Windows. Bypass Vanguard.",
					imageAlt: "Valorant Hacks maintenance after a Vanguard patch",
					galleryTitle: "Bypass Vanguard",
					heroImage: "/images/valorant-hacks-aimbot.webp",
					ctaPrimary: "Mua Valorant Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Vanguard",
							paragraphs: [
								"Valorant Hacks cung cấp ESP wallhack, radar hack và valorant aimbot undetected cho Valorant trên PC Windows. how Vanguard updates are handled for Valorant hacks.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Vanguard anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard anti-cheat.",
								"support@valoranthack.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheat Valorant 2026 | Buyer Guide",
					description: "Cheat Valorant 2026: 2026 Valorant hacks checklist before checkout. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cheat Valorant 2026",
					intro: "Valorant Hacks cung cấp ESP wallhack, radar hack và valorant aimbot undetected cho Valorant trên PC Windows. Cheat Valorant 2026.",
					imageAlt: "Valorant Hacks product overview for Valorant",
					galleryTitle: "Cheat Valorant 2026",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Mua Valorant Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "Cheat Valorant 2026",
							paragraphs: [
								"Valorant Hacks cung cấp ESP wallhack, radar hack và valorant aimbot undetected cho Valorant trên PC Windows. 2026 Valorant hacks checklist before checkout.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Vanguard anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard anti-cheat.",
								"support@valoranthack.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				hacks: {
					title: "Cheat Valorant | ESP Aimbot Guide",
					description: "Cheat Valorant: the Valorant hacks pillar for ESP and Aimbot. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cheat Valorant",
					intro: "Valorant Hacks cung cấp ESP wallhack, radar hack và valorant aimbot undetected cho Valorant trên PC Windows. Cheat Valorant.",
					imageAlt: "Valorant Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Cheat Valorant",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Mua Valorant Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat Valorant",
							paragraphs: [
								"Valorant Hacks cung cấp ESP wallhack, radar hack và valorant aimbot undetected cho Valorant trên PC Windows. the Valorant hacks pillar for ESP and Aimbot.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Vanguard anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard anti-cheat.",
								"support@valoranthack.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Tải Cheat Valorant | Instant Access",
					description: "Tải Cheat Valorant: digital license download after payment. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Tải Cheat Valorant",
					intro: "Valorant Hacks cung cấp ESP wallhack, radar hack và valorant aimbot undetected cho Valorant trên PC Windows. Tải Cheat Valorant.",
					imageAlt: "Valorant Hacks download and install delivery flow",
					galleryTitle: "Tải Cheat Valorant",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Mua Valorant Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Tải Cheat Valorant",
							paragraphs: [
								"Valorant Hacks cung cấp ESP wallhack, radar hack và valorant aimbot undetected cho Valorant trên PC Windows. digital license download after payment.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Vanguard anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard anti-cheat.",
								"support@valoranthack.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Mod menu Valorant | In-Game Toggles",
					description: "Mod menu Valorant: in-client ESP and soft aim toggles. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Mod menu Valorant",
					intro: "Valorant Hacks cung cấp ESP wallhack, radar hack và valorant aimbot undetected cho Valorant trên PC Windows. Mod menu Valorant.",
					imageAlt: "Valorant Hacks in-game menu controls",
					galleryTitle: "Mod menu Valorant",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Mua Valorant Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mod menu Valorant",
							paragraphs: [
								"Valorant Hacks cung cấp ESP wallhack, radar hack và valorant aimbot undetected cho Valorant trên PC Windows. in-client ESP and soft aim toggles.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Vanguard anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard anti-cheat.",
								"support@valoranthack.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Valorant | Smooth Aim Settings",
					description: "Soft aim Valorant: smooth soft aim settings for Windows PC. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Soft aim Valorant",
					intro: "Valorant Hacks cung cấp ESP wallhack, radar hack và valorant aimbot undetected cho Valorant trên PC Windows. Soft aim Valorant.",
					imageAlt: "Valorant soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Valorant",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Mua Valorant Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/valorant-aimbot/",
					sections: [
						{
							h2: "Soft aim Valorant",
							paragraphs: [
								"Valorant Hacks cung cấp ESP wallhack, radar hack và valorant aimbot undetected cho Valorant trên PC Windows. smooth soft aim settings for Windows PC.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Vanguard anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard anti-cheat.",
								"support@valoranthack.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cheat Valorant tốt nhất | Buyer Checklist",
					description: "Cheat Valorant tốt nhất: what to compare before buying Valorant hacks. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cheat Valorant tốt nhất",
					intro: "Valorant Hacks cung cấp ESP wallhack, radar hack và valorant aimbot undetected cho Valorant trên PC Windows. Cheat Valorant tốt nhất.",
					imageAlt: "Valorant Hacks overview for Valorant on PC",
					galleryTitle: "Cheat Valorant tốt nhất",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Mua Valorant Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cheat Valorant tốt nhất",
							paragraphs: [
								"Valorant Hacks cung cấp ESP wallhack, radar hack và valorant aimbot undetected cho Valorant trên PC Windows. what to compare before buying Valorant hacks.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Vanguard anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard anti-cheat.",
								"support@valoranthack.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Valorant | Soft Aim Assist",
					description: "Hack aimbot Valorant: undetected Aimbot hack assist for Valorant. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Hack aimbot Valorant",
					intro: "Valorant Hacks cung cấp ESP wallhack, radar hack và valorant aimbot undetected cho Valorant trên PC Windows. Hack aimbot Valorant.",
					imageAlt: "Valorant aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Valorant",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Mua Valorant Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/valorant-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Valorant",
							paragraphs: [
								"Valorant Hacks cung cấp ESP wallhack, radar hack và valorant aimbot undetected cho Valorant trên PC Windows. undetected Aimbot hack assist for Valorant.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Vanguard anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard anti-cheat.",
								"support@valoranthack.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Valorant | Boxes & Spike",
					description: "Hack ESP Valorant: ESP hack boxes, spike markers, and distance. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Hack ESP Valorant",
					intro: "Valorant Hacks cung cấp ESP wallhack, radar hack và valorant aimbot undetected cho Valorant trên PC Windows. Hack ESP Valorant.",
					imageAlt: "Valorant ESP hack boxes and spike markers",
					galleryTitle: "Hack ESP Valorant",
					heroImage: "/images/valorant-hacks-wallhack.webp",
					ctaPrimary: "Mua Valorant Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Hack ESP Valorant",
							paragraphs: [
								"Valorant Hacks cung cấp ESP wallhack, radar hack và valorant aimbot undetected cho Valorant trên PC Windows. ESP hack boxes, spike markers, and distance.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Vanguard anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard anti-cheat.",
								"support@valoranthack.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Valorant | What It Means",
					description: "Unlock all Valorant: unlock-all searches vs real ESP and Aimbot tools. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Unlock all Valorant",
					intro: "Valorant Hacks cung cấp ESP wallhack, radar hack và valorant aimbot undetected cho Valorant trên PC Windows. Unlock all Valorant.",
					imageAlt: "Valorant Hacks license features overview",
					galleryTitle: "Unlock all Valorant",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Mua Valorant Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Valorant",
							paragraphs: [
								"Valorant Hacks cung cấp ESP wallhack, radar hack và valorant aimbot undetected cho Valorant trên PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Vanguard anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard anti-cheat.",
								"support@valoranthack.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				privacy: {
					title: "Chính sách bảo mật | Valorant Hacks",
					description: "Chính sách bảo mật for Valorant Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Chính sách bảo mật",
					intro: "Valorant Hacks cung cấp ESP wallhack, radar hack và valorant aimbot undetected cho Valorant trên PC Windows. Chính sách bảo mật for valoranthack.net and Valorant licenses.",
					imageAlt: "valorant hacks",
					galleryTitle: "valorant hacks",
					heroImage: "/images/valorant-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Valorant Hacks cung cấp ESP wallhack, radar hack và valorant aimbot undetected cho Valorant trên PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on valoranthack.net.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Valorant Hacks cung cấp ESP wallhack, radar hack và valorant aimbot undetected cho Valorant trên PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Kiểm tra Updates sau bản vá Vanguard anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@valoranthack.net cho hỗ trợ và pháp lý.",
								"Email: support@valoranthack.net",
							],
						},
					],
				},
				refund: {
					title: "Chính sách hoàn tiền | Valorant Hacks",
					description: "Chính sách hoàn tiền for Valorant Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Chính sách hoàn tiền",
					intro: "Valorant Hacks cung cấp ESP wallhack, radar hack và valorant aimbot undetected cho Valorant trên PC Windows. Chính sách hoàn tiền for valoranthack.net and Valorant licenses.",
					imageAlt: "valorant hacks",
					galleryTitle: "valorant hacks",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Valorant Hacks cung cấp ESP wallhack, radar hack và valorant aimbot undetected cho Valorant trên PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard anti-cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Valorant Hacks cung cấp ESP wallhack, radar hack và valorant aimbot undetected cho Valorant trên PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Kiểm tra Updates sau bản vá Vanguard anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@valoranthack.net cho hỗ trợ và pháp lý.",
								"Email: support@valoranthack.net",
							],
						},
					],
				},
				terms: {
					title: "Điều khoản sử dụng | Valorant Hacks",
					description: "Điều khoản sử dụng for Valorant Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Điều khoản sử dụng",
					intro: "Valorant Hacks cung cấp ESP wallhack, radar hack và valorant aimbot undetected cho Valorant trên PC Windows. Điều khoản sử dụng for valoranthack.net and Valorant licenses.",
					imageAlt: "valorant hacks",
					galleryTitle: "valorant hacks",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Valorant Hacks cung cấp ESP wallhack, radar hack và valorant aimbot undetected cho Valorant trên PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard anti-cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Valorant Hacks cung cấp ESP wallhack, radar hack và valorant aimbot undetected cho Valorant trên PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Riot Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@valoranthack.net cho hỗ trợ và pháp lý.",
								"Email: support@valoranthack.net",
							],
						},
					],
				},
			},
		},
		uk: {
			ui: {
				nav: {
					home: "Головна",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Функції",
					pricing: "Ціни",
					setup: "Встановлення",
					updates: "Оновлення",
					faq: "FAQ",
					buyNow: "Купити",
				},
				hero: {
					accent: "Undetected чіти Valorant",
					accentShort: "Valorant Hacks",
					subtitle: "ESP wallhack, radar hack і Aimbot для Valorant на Windows PC — обслуговування Vanguard anti-cheat включено.",
					subtitleShort: "ESP, radar і Aimbot для Valorant PC",
					buyNow: "Купити",
					seeFeatures: "Дивитися функції",
				},
				trust: {
					status: "Онлайн",
					statusNote: "Пакет Valorant Hacks активний для Valorant на Windows PC.",
					statusShort: "Активний",
					delivery: "Миттєва цифрова доставка",
					platform: "Windows 10 і 11",
					antiCheat: "Підтримка обслуговування Vanguard anti-cheat",
					antiCheatShort: "Vanguard anti-cheat підтримка",
				},
				product: {
					title: "Valorant Hacks",
					addToCart: "До кошика",
					monthly: "Щомісяця",
					lifetime: "Назавжди",
					available: "Доступно зараз",
					gameBadge: "Valorant",
					platformBadge: "Windows PC",
					statusBadge: "Undetected пакет",
				},
				reviews: {
					title: "Що кажуть гравці",
					subtitle: "Останні відгуки покупців Valorant Hacks",
					outOf: "з 5",
					countLabel: "відгуків",
				},
				common: {
					buyNow: "Купити",
					readGuide: "Читати гайд",
					language: "Мова",
					officialLanguageNote: "Англійська — офіційна мова. Інші версії перекладені для глобального SEO.",
					relatedPages: "Пов'язані сторінки",
				},
				footer: {
					explore: "Огляд",
					help: "Допомога та право",
					tagline: "Undetected ESP, wallhack, radar і Aimbot для Valorant — оплата через Zadeyo.",
				},
				images: {
					hero: "Valorant Hacks hero — ESP and aimbot overlay in Valorant",
					espWallhack: "Wallhack outlines showing agents and enemies through walls",
					aimbotCombat: "Soft aim assist overlay during a Valorant round",
					squadFight: "Valorant Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Valorant match",
					headerArt: "Aimbot view and bone priority controls for Valorant",
					cheatsPackage: "2D radar threat overlay for Valorant",
					rebootFight: "Aimbot assist during a Valorant firefight",
					battleRoyale: "Valorant Hacks in-match overview for Windows PC",
					battleRoyaleIsland: "ESP markers for agents and the spike in Valorant",
				},
			},
			pages: {
				home: {
					title: "Valorant Hacks | Official PC Site",
					description: "Undetected чіти Valorant для Valorant на PC. ESP wallhack, radar hack, Aimbot, обслуговування Vanguard anti-cheat. Мгновенная цифровая доставка.",
					h1: "Valorant Hacks",
					intro: "Undetected пакет для Valorant на Windows PC: ESP wallhack, radar, Aimbot з обслуговуванням Vanguard anti-cheat.",
					imageAlt: "Valorant ESP player tags hack",
					galleryTitle: "Галерея Valorant Hacks — ESP, Aimbot, wallhack",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Купити Valorant Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Чому Valorant Hacks у 2026",
							paragraphs: [
								"Valorant Hacks об'єднує ESP wallhack, radar hack і valorant aimbot у undetected пакеті для Valorant на Windows PC. Ідеально для читання ворожих загонів у Competitive і Deathmatch.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard anti-cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar і Aimbot в одній ліцензії",
							paragraphs: [
								"Valorant Hacks об'єднує ESP wallhack, radar hack і valorant aimbot у undetected пакеті для Valorant на Windows PC. Одна ліцензія замість окремих інструментів.",
								"Перевіряйте Updates після патчів Vanguard anti-cheat. Жоден чит не гарантує постійний undetected статус.",
							],
						},
					],
				},
				"valorant-esp": {
					title: "ESP Valorant | Player Boxes & Wallhack",
					description: "ESP Valorant: player boxes, spike markers, and wallhack overlays. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "ESP Valorant",
					intro: "Valorant Hacks об'єднує ESP wallhack, radar hack і valorant aimbot у undetected пакеті для Valorant на Windows PC. ESP Valorant.",
					imageAlt: "Valorant ESP player boxes and distance readouts in a match",
					galleryTitle: "ESP Valorant",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Купити Valorant Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "ESP Valorant",
							paragraphs: [
								"Valorant Hacks об'єднує ESP wallhack, radar hack і valorant aimbot у undetected пакеті для Valorant на Windows PC. player boxes, spike markers, and wallhack overlays.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Vanguard anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard anti-cheat.",
								"support@valoranthack.net для підтримки та правових питань.",
							],
						},
					],
				},
				"valorant-aimbot": {
					title: "Aimbot Valorant | Soft Aim Controls",
					description: "Aimbot Valorant: soft aim, FOV, and per-weapon Aimbot profiles. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Aimbot Valorant",
					intro: "Valorant Hacks об'єднує ESP wallhack, radar hack і valorant aimbot у undetected пакеті для Valorant на Windows PC. Aimbot Valorant.",
					imageAlt: "Valorant aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Valorant",
					heroImage: "/images/valorant-hacks-aimbot.webp",
					ctaPrimary: "Купити Valorant Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Aimbot Valorant",
							paragraphs: [
								"Valorant Hacks об'єднує ESP wallhack, radar hack і valorant aimbot у undetected пакеті для Valorant на Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Vanguard anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard anti-cheat.",
								"support@valoranthack.net для підтримки та правових питань.",
							],
						},
					],
				},
				features: {
					title: "Функції | Full Feature List",
					description: "Функції: ESP, soft aim, radar controls. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Функції",
					intro: "Valorant Hacks об'єднує ESP wallhack, radar hack і valorant aimbot у undetected пакеті для Valorant на Windows PC. Функції.",
					imageAlt: "Valorant Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Функції",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Купити Valorant Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Функції",
							paragraphs: [
								"Valorant Hacks об'єднує ESP wallhack, radar hack і valorant aimbot у undetected пакеті для Valorant на Windows PC. ESP, soft aim, radar controls.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Vanguard anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard anti-cheat.",
								"support@valoranthack.net для підтримки та правових питань.",
							],
						},
					],
				},
				pricing: {
					title: "Ціни | Monthly & Lifetime",
					description: "Ціни: $35 monthly or $150 lifetime licenses. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Ціни",
					intro: "Valorant Hacks об'єднує ESP wallhack, radar hack і valorant aimbot у undetected пакеті для Valorant на Windows PC. Ціни.",
					imageAlt: "Valorant Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Ціни",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Купити Valorant Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Ціни",
							paragraphs: [
								"Valorant Hacks об'єднує ESP wallhack, radar hack і valorant aimbot у undetected пакеті для Valorant на Windows PC. $35 monthly or $150 lifetime licenses.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Vanguard anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard anti-cheat.",
								"support@valoranthack.net для підтримки та правових питань.",
							],
						},
					],
				},
				setup: {
					title: "Встановлення | PC Setup Guide",
					description: "Встановлення: Windows PC activation and first-launch setup. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Встановлення",
					intro: "Valorant Hacks об'єднує ESP wallhack, radar hack і valorant aimbot у undetected пакеті для Valorant на Windows PC. Встановлення.",
					imageAlt: "Valorant Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Встановлення",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Купити Valorant Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Встановлення",
							paragraphs: [
								"Valorant Hacks об'єднує ESP wallhack, radar hack і valorant aimbot у undetected пакеті для Valorant на Windows PC. Windows PC activation and first-launch setup.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Vanguard anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard anti-cheat.",
								"support@valoranthack.net для підтримки та правових питань.",
							],
						},
					],
				},
				updates: {
					title: "Оновлення | Vanguard Maintenance Log",
					description: "Оновлення: Vanguard patch status and rebuild notes. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Оновлення",
					intro: "Valorant Hacks об'єднує ESP wallhack, radar hack і valorant aimbot у undetected пакеті для Valorant на Windows PC. Оновлення.",
					imageAlt: "Valorant Hacks live status after Vanguard and game patches",
					galleryTitle: "Оновлення",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Купити Valorant Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "Оновлення",
							paragraphs: [
								"Valorant Hacks об'єднує ESP wallhack, radar hack і valorant aimbot у undetected пакеті для Valorant на Windows PC. Vanguard patch status and rebuild notes.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Vanguard anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard anti-cheat.",
								"support@valoranthack.net для підтримки та правових питань.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and Vanguard questions. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Valorant Hacks об'єднує ESP wallhack, radar hack і valorant aimbot у undetected пакеті для Valorant на Windows PC. FAQ.",
					imageAlt: "Valorant Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Купити Valorant Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Valorant Hacks об'єднує ESP wallhack, radar hack і valorant aimbot у undetected пакеті для Valorant на Windows PC. ESP, soft aim, delivery, and Vanguard questions.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Vanguard anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard anti-cheat.",
								"support@valoranthack.net для підтримки та правових питань.",
							],
						},
					],
				},
				support: {
					title: "Підтримка | Help & Contact",
					description: "Підтримка: order help and license support contact. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Підтримка",
					intro: "Valorant Hacks об'єднує ESP wallhack, radar hack і valorant aimbot у undetected пакеті для Valorant на Windows PC. Підтримка.",
					imageAlt: "Valorant Hacks support page for license and setup help",
					galleryTitle: "Підтримка",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Купити Valorant Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Підтримка",
							paragraphs: [
								"Valorant Hacks об'єднує ESP wallhack, radar hack і valorant aimbot у undetected пакеті для Valorant на Windows PC. order help and license support contact.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Vanguard anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard anti-cheat.",
								"support@valoranthack.net для підтримки та правових питань.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected чіти | Vanguard Safe Status",
					description: "Undetected чіти: undetected maintenance after Vanguard anti-cheat patches. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Undetected чіти",
					intro: "Valorant Hacks об'єднує ESP wallhack, radar hack і valorant aimbot у undetected пакеті для Valorant на Windows PC. Undetected чіти.",
					imageAlt: "Valorant Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected чіти",
					heroImage: "/images/valorant-hacks-wallhack.webp",
					ctaPrimary: "Купити Valorant Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "Undetected чіти",
							paragraphs: [
								"Valorant Hacks об'єднує ESP wallhack, radar hack і valorant aimbot у undetected пакеті для Valorant на Windows PC. undetected maintenance after Vanguard anti-cheat patches.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Vanguard anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard anti-cheat.",
								"support@valoranthack.net для підтримки та правових питань.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Valorant | ESP Visibility",
					description: "Wallhack Valorant: wallhack ESP for players, spike, and distance. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Wallhack Valorant",
					intro: "Valorant Hacks об'єднує ESP wallhack, radar hack і valorant aimbot у undetected пакеті для Valorant на Windows PC. Wallhack Valorant.",
					imageAlt: "Valorant wallhack visibility through walls in a match",
					galleryTitle: "Wallhack Valorant",
					heroImage: "/images/valorant-hacks-wallhack.webp",
					ctaPrimary: "Купити Valorant Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Wallhack Valorant",
							paragraphs: [
								"Valorant Hacks об'єднує ESP wallhack, radar hack і valorant aimbot у undetected пакеті для Valorant на Windows PC. wallhack ESP for players, spike, and distance.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Vanguard anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard anti-cheat.",
								"support@valoranthack.net для підтримки та правових питань.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack Valorant | 2D Threat Overlay",
					description: "Radar hack Valorant: 2D radar cues for flanks and rotations. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Radar hack Valorant",
					intro: "Valorant Hacks об'єднує ESP wallhack, radar hack і valorant aimbot у undetected пакеті для Valorant на Windows PC. Radar hack Valorant.",
					imageAlt: "Valorant 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack Valorant",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Купити Valorant Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Radar hack Valorant",
							paragraphs: [
								"Valorant Hacks об'єднує ESP wallhack, radar hack і valorant aimbot у undetected пакеті для Valorant на Windows PC. 2D radar cues for flanks and rotations.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Vanguard anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard anti-cheat.",
								"support@valoranthack.net для підтримки та правових питань.",
							],
						},
					],
				},
				vanguard: {
					title: "Bypass Vanguard | Patch Maintenance",
					description: "Bypass Vanguard: how Vanguard updates are handled for Valorant hacks. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Bypass Vanguard",
					intro: "Valorant Hacks об'єднує ESP wallhack, radar hack і valorant aimbot у undetected пакеті для Valorant на Windows PC. Bypass Vanguard.",
					imageAlt: "Valorant Hacks maintenance after a Vanguard patch",
					galleryTitle: "Bypass Vanguard",
					heroImage: "/images/valorant-hacks-aimbot.webp",
					ctaPrimary: "Купити Valorant Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Vanguard",
							paragraphs: [
								"Valorant Hacks об'єднує ESP wallhack, radar hack і valorant aimbot у undetected пакеті для Valorant на Windows PC. how Vanguard updates are handled for Valorant hacks.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Vanguard anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard anti-cheat.",
								"support@valoranthack.net для підтримки та правових питань.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Чіти Valorant 2026 | Buyer Guide",
					description: "Чіти Valorant 2026: 2026 Valorant hacks checklist before checkout. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Чіти Valorant 2026",
					intro: "Valorant Hacks об'єднує ESP wallhack, radar hack і valorant aimbot у undetected пакеті для Valorant на Windows PC. Чіти Valorant 2026.",
					imageAlt: "Valorant Hacks product overview for Valorant",
					galleryTitle: "Чіти Valorant 2026",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Купити Valorant Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "Чіти Valorant 2026",
							paragraphs: [
								"Valorant Hacks об'єднує ESP wallhack, radar hack і valorant aimbot у undetected пакеті для Valorant на Windows PC. 2026 Valorant hacks checklist before checkout.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Vanguard anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard anti-cheat.",
								"support@valoranthack.net для підтримки та правових питань.",
							],
						},
					],
				},
				hacks: {
					title: "Чіти Valorant | ESP Aimbot Guide",
					description: "Чіти Valorant: the Valorant hacks pillar for ESP and Aimbot. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Чіти Valorant",
					intro: "Valorant Hacks об'єднує ESP wallhack, radar hack і valorant aimbot у undetected пакеті для Valorant на Windows PC. Чіти Valorant.",
					imageAlt: "Valorant Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Чіти Valorant",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Купити Valorant Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Чіти Valorant",
							paragraphs: [
								"Valorant Hacks об'єднує ESP wallhack, radar hack і valorant aimbot у undetected пакеті для Valorant на Windows PC. the Valorant hacks pillar for ESP and Aimbot.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Vanguard anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard anti-cheat.",
								"support@valoranthack.net для підтримки та правових питань.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Завантаження Valorant Hacks | Instant Access",
					description: "Завантаження Valorant Hacks: digital license download after payment. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Завантаження Valorant Hacks",
					intro: "Valorant Hacks об'єднує ESP wallhack, radar hack і valorant aimbot у undetected пакеті для Valorant на Windows PC. Завантаження Valorant Hacks.",
					imageAlt: "Valorant Hacks download and install delivery flow",
					galleryTitle: "Завантаження Valorant Hacks",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Купити Valorant Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Завантаження Valorant Hacks",
							paragraphs: [
								"Valorant Hacks об'єднує ESP wallhack, radar hack і valorant aimbot у undetected пакеті для Valorant на Windows PC. digital license download after payment.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Vanguard anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard anti-cheat.",
								"support@valoranthack.net для підтримки та правових питань.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Мод-меню Valorant | In-Game Toggles",
					description: "Мод-меню Valorant: in-client ESP and soft aim toggles. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Мод-меню Valorant",
					intro: "Valorant Hacks об'єднує ESP wallhack, radar hack і valorant aimbot у undetected пакеті для Valorant на Windows PC. Мод-меню Valorant.",
					imageAlt: "Valorant Hacks in-game menu controls",
					galleryTitle: "Мод-меню Valorant",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Купити Valorant Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Мод-меню Valorant",
							paragraphs: [
								"Valorant Hacks об'єднує ESP wallhack, radar hack і valorant aimbot у undetected пакеті для Valorant на Windows PC. in-client ESP and soft aim toggles.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Vanguard anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard anti-cheat.",
								"support@valoranthack.net для підтримки та правових питань.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Valorant | Smooth Aim Settings",
					description: "Soft aim Valorant: smooth soft aim settings for Windows PC. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Soft aim Valorant",
					intro: "Valorant Hacks об'єднує ESP wallhack, radar hack і valorant aimbot у undetected пакеті для Valorant на Windows PC. Soft aim Valorant.",
					imageAlt: "Valorant soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Valorant",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Купити Valorant Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/valorant-aimbot/",
					sections: [
						{
							h2: "Soft aim Valorant",
							paragraphs: [
								"Valorant Hacks об'єднує ESP wallhack, radar hack і valorant aimbot у undetected пакеті для Valorant на Windows PC. smooth soft aim settings for Windows PC.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Vanguard anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard anti-cheat.",
								"support@valoranthack.net для підтримки та правових питань.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Найкращі чіти Valorant | Buyer Checklist",
					description: "Найкращі чіти Valorant: what to compare before buying Valorant hacks. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Найкращі чіти Valorant",
					intro: "Valorant Hacks об'єднує ESP wallhack, radar hack і valorant aimbot у undetected пакеті для Valorant на Windows PC. Найкращі чіти Valorant.",
					imageAlt: "Valorant Hacks overview for Valorant on PC",
					galleryTitle: "Найкращі чіти Valorant",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Купити Valorant Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Найкращі чіти Valorant",
							paragraphs: [
								"Valorant Hacks об'єднує ESP wallhack, radar hack і valorant aimbot у undetected пакеті для Valorant на Windows PC. what to compare before buying Valorant hacks.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Vanguard anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard anti-cheat.",
								"support@valoranthack.net для підтримки та правових питань.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Хак aimbot Valorant | Soft Aim Assist",
					description: "Хак aimbot Valorant: undetected Aimbot hack assist for Valorant. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Хак aimbot Valorant",
					intro: "Valorant Hacks об'єднує ESP wallhack, radar hack і valorant aimbot у undetected пакеті для Valorant на Windows PC. Хак aimbot Valorant.",
					imageAlt: "Valorant aimbot hack controls and bone priority",
					galleryTitle: "Хак aimbot Valorant",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Купити Valorant Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/valorant-aimbot/",
					sections: [
						{
							h2: "Хак aimbot Valorant",
							paragraphs: [
								"Valorant Hacks об'єднує ESP wallhack, radar hack і valorant aimbot у undetected пакеті для Valorant на Windows PC. undetected Aimbot hack assist for Valorant.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Vanguard anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard anti-cheat.",
								"support@valoranthack.net для підтримки та правових питань.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Хак ESP Valorant | Boxes & Spike",
					description: "Хак ESP Valorant: ESP hack boxes, spike markers, and distance. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Хак ESP Valorant",
					intro: "Valorant Hacks об'єднує ESP wallhack, radar hack і valorant aimbot у undetected пакеті для Valorant на Windows PC. Хак ESP Valorant.",
					imageAlt: "Valorant ESP hack boxes and spike markers",
					galleryTitle: "Хак ESP Valorant",
					heroImage: "/images/valorant-hacks-wallhack.webp",
					ctaPrimary: "Купити Valorant Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Хак ESP Valorant",
							paragraphs: [
								"Valorant Hacks об'єднує ESP wallhack, radar hack і valorant aimbot у undetected пакеті для Valorant на Windows PC. ESP hack boxes, spike markers, and distance.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Vanguard anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard anti-cheat.",
								"support@valoranthack.net для підтримки та правових питань.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Valorant | What It Means",
					description: "Unlock all Valorant: unlock-all searches vs real ESP and Aimbot tools. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Unlock all Valorant",
					intro: "Valorant Hacks об'єднує ESP wallhack, radar hack і valorant aimbot у undetected пакеті для Valorant на Windows PC. Unlock all Valorant.",
					imageAlt: "Valorant Hacks license features overview",
					galleryTitle: "Unlock all Valorant",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Купити Valorant Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Valorant",
							paragraphs: [
								"Valorant Hacks об'єднує ESP wallhack, radar hack і valorant aimbot у undetected пакеті для Valorant на Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Vanguard anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard anti-cheat.",
								"support@valoranthack.net для підтримки та правових питань.",
							],
						},
					],
				},
				privacy: {
					title: "Політика конфіденційності | Valorant Hacks",
					description: "Політика конфіденційності for Valorant Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Політика конфіденційності",
					intro: "Valorant Hacks об'єднує ESP wallhack, radar hack і valorant aimbot у undetected пакеті для Valorant на Windows PC. Політика конфіденційності for valoranthack.net and Valorant licenses.",
					imageAlt: "valorant hacks",
					galleryTitle: "valorant hacks",
					heroImage: "/images/valorant-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Valorant Hacks об'єднує ESP wallhack, radar hack і valorant aimbot у undetected пакеті для Valorant на Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on valoranthack.net.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Valorant Hacks об'єднує ESP wallhack, radar hack і valorant aimbot у undetected пакеті для Valorant на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Перевіряйте Updates після патчів Vanguard anti-cheat. Жоден чит не гарантує постійний undetected статус.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@valoranthack.net для підтримки та правових питань.",
								"Email: support@valoranthack.net",
							],
						},
					],
				},
				refund: {
					title: "Політика повернення | Valorant Hacks",
					description: "Політика повернення for Valorant Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Політика повернення",
					intro: "Valorant Hacks об'єднує ESP wallhack, radar hack і valorant aimbot у undetected пакеті для Valorant на Windows PC. Політика повернення for valoranthack.net and Valorant licenses.",
					imageAlt: "valorant hacks",
					galleryTitle: "valorant hacks",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Valorant Hacks об'єднує ESP wallhack, radar hack і valorant aimbot у undetected пакеті для Valorant на Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard anti-cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Valorant Hacks об'єднує ESP wallhack, radar hack і valorant aimbot у undetected пакеті для Valorant на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Перевіряйте Updates після патчів Vanguard anti-cheat. Жоден чит не гарантує постійний undetected статус.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@valoranthack.net для підтримки та правових питань.",
								"Email: support@valoranthack.net",
							],
						},
					],
				},
				terms: {
					title: "Умови використання | Valorant Hacks",
					description: "Умови використання for Valorant Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Умови використання",
					intro: "Valorant Hacks об'єднує ESP wallhack, radar hack і valorant aimbot у undetected пакеті для Valorant на Windows PC. Умови використання for valoranthack.net and Valorant licenses.",
					imageAlt: "valorant hacks",
					galleryTitle: "valorant hacks",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Valorant Hacks об'єднує ESP wallhack, radar hack і valorant aimbot у undetected пакеті для Valorant на Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard anti-cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Valorant Hacks об'єднує ESP wallhack, radar hack і valorant aimbot у undetected пакеті для Valorant на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Riot Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@valoranthack.net для підтримки та правових питань.",
								"Email: support@valoranthack.net",
							],
						},
					],
				},
			},
		},
		cs: {
			ui: {
				nav: {
					home: "Domů",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funkce",
					pricing: "Ceny",
					setup: "Instalace",
					updates: "Aktualizace",
					faq: "FAQ",
					buyNow: "Koupit",
				},
				hero: {
					accent: "Undetected Valorant hacky",
					accentShort: "Valorant Hacks",
					subtitle: "ESP wallhack, radar hack a Aimbot pro Valorant na Windows PC — údržba Vanguard anti-cheat v ceně.",
					subtitleShort: "ESP, radar a Aimbot pro Valorant PC",
					buyNow: "Koupit",
					seeFeatures: "Zobrazit funkce",
				},
				trust: {
					status: "Online",
					statusNote: "Balíček Valorant Hacks je aktivní pro Valorant na Windows PC.",
					statusShort: "Aktivní",
					delivery: "Okamžité digitální doručení",
					platform: "Windows 10 a 11",
					antiCheat: "Podpora údržby Vanguard anti-cheat",
					antiCheatShort: "Vanguard anti-cheat podpora",
				},
				product: {
					title: "Valorant Hacks",
					addToCart: "Přidat do košíku",
					monthly: "Měsíčně",
					lifetime: "Doživotně",
					available: "Dostupné nyní",
					gameBadge: "Valorant",
					platformBadge: "Windows PC",
					statusBadge: "Undetected balíček",
				},
				reviews: {
					title: "Co říkají hráči",
					subtitle: "Nedávná zpětná vazba od kupujících Valorant Hacks",
					outOf: "z 5",
					countLabel: "recenzí",
				},
				common: {
					buyNow: "Koupit",
					readGuide: "Číst průvodce",
					language: "Jazyk",
					officialLanguageNote: "Angličtina je oficiální jazyk. Ostatní jazyky jsou přeloženy pro globální SEO.",
					relatedPages: "Související stránky",
				},
				footer: {
					explore: "Prozkoumat",
					help: "Nápověda a právo",
					tagline: "Undetected ESP, wallhack, radar a Aimbot pro Valorant — checkout přes Zadeyo.",
				},
				images: {
					hero: "Valorant Hacks hero — ESP and aimbot overlay in Valorant",
					espWallhack: "Wallhack outlines showing agents and enemies through walls",
					aimbotCombat: "Soft aim assist overlay during a Valorant round",
					squadFight: "Valorant Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Valorant match",
					headerArt: "Aimbot view and bone priority controls for Valorant",
					cheatsPackage: "2D radar threat overlay for Valorant",
					rebootFight: "Aimbot assist during a Valorant firefight",
					battleRoyale: "Valorant Hacks in-match overview for Windows PC",
					battleRoyaleIsland: "ESP markers for agents and the spike in Valorant",
				},
			},
			pages: {
				home: {
					title: "Valorant Hacks | Official PC Site",
					description: "Undetected Valorant hacky pro Valorant na PC. ESP wallhack, radar hack, Aimbot, údržba Vanguard anti-cheat. Okamžité digitální doručení.",
					h1: "Valorant Hacks",
					intro: "Undetected balíček pro Valorant na Windows PC: ESP wallhack, radar, Aimbot s údržbou Vanguard anti-cheat.",
					imageAlt: "Valorant ESP player tags hack",
					galleryTitle: "Galerie Valorant Hacks — ESP, Aimbot, wallhack",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Koupit Valorant Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Proč Valorant Hacks v roce 2026",
							paragraphs: [
								"Valorant Hacks spojuje ESP wallhack, radar hack a valorant aimbot jako undetected balíček pro Valorant na Windows PC. Ideální pro čtení nepřátelských squadů v Competitive a Deathmatch.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard anti-cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar a Aimbot v jedné licenci",
							paragraphs: [
								"Valorant Hacks spojuje ESP wallhack, radar hack a valorant aimbot jako undetected balíček pro Valorant na Windows PC. Jedna licence místo samostatných nástrojů.",
								"Po patchích Vanguard anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
							],
						},
					],
				},
				"valorant-esp": {
					title: "Valorant ESP | Player Boxes & Wallhack",
					description: "Valorant ESP: player boxes, spike markers, and wallhack overlays. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Valorant ESP",
					intro: "Valorant Hacks spojuje ESP wallhack, radar hack a valorant aimbot jako undetected balíček pro Valorant na Windows PC. Valorant ESP.",
					imageAlt: "Valorant ESP player boxes and distance readouts in a match",
					galleryTitle: "Valorant ESP",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Koupit Valorant Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "Valorant ESP",
							paragraphs: [
								"Valorant Hacks spojuje ESP wallhack, radar hack a valorant aimbot jako undetected balíček pro Valorant na Windows PC. player boxes, spike markers, and wallhack overlays.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Vanguard anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard anti-cheat.",
								"support@valoranthack.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				"valorant-aimbot": {
					title: "Valorant Aimbot | Soft Aim Controls",
					description: "Valorant Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Valorant Aimbot",
					intro: "Valorant Hacks spojuje ESP wallhack, radar hack a valorant aimbot jako undetected balíček pro Valorant na Windows PC. Valorant Aimbot.",
					imageAlt: "Valorant aimbot and soft aim controls on Windows PC",
					galleryTitle: "Valorant Aimbot",
					heroImage: "/images/valorant-hacks-aimbot.webp",
					ctaPrimary: "Koupit Valorant Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Valorant Aimbot",
							paragraphs: [
								"Valorant Hacks spojuje ESP wallhack, radar hack a valorant aimbot jako undetected balíček pro Valorant na Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Vanguard anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard anti-cheat.",
								"support@valoranthack.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				features: {
					title: "Funkce | Full Feature List",
					description: "Funkce: ESP, soft aim, radar controls. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Funkce",
					intro: "Valorant Hacks spojuje ESP wallhack, radar hack a valorant aimbot jako undetected balíček pro Valorant na Windows PC. Funkce.",
					imageAlt: "Valorant Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funkce",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Koupit Valorant Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funkce",
							paragraphs: [
								"Valorant Hacks spojuje ESP wallhack, radar hack a valorant aimbot jako undetected balíček pro Valorant na Windows PC. ESP, soft aim, radar controls.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Vanguard anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard anti-cheat.",
								"support@valoranthack.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				pricing: {
					title: "Ceny | Monthly & Lifetime",
					description: "Ceny: $35 monthly or $150 lifetime licenses. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Ceny",
					intro: "Valorant Hacks spojuje ESP wallhack, radar hack a valorant aimbot jako undetected balíček pro Valorant na Windows PC. Ceny.",
					imageAlt: "Valorant Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Ceny",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Koupit Valorant Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Ceny",
							paragraphs: [
								"Valorant Hacks spojuje ESP wallhack, radar hack a valorant aimbot jako undetected balíček pro Valorant na Windows PC. $35 monthly or $150 lifetime licenses.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Vanguard anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard anti-cheat.",
								"support@valoranthack.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				setup: {
					title: "Instalace | PC Setup Guide",
					description: "Instalace: Windows PC activation and first-launch setup. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Instalace",
					intro: "Valorant Hacks spojuje ESP wallhack, radar hack a valorant aimbot jako undetected balíček pro Valorant na Windows PC. Instalace.",
					imageAlt: "Valorant Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Instalace",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Koupit Valorant Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalace",
							paragraphs: [
								"Valorant Hacks spojuje ESP wallhack, radar hack a valorant aimbot jako undetected balíček pro Valorant na Windows PC. Windows PC activation and first-launch setup.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Vanguard anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard anti-cheat.",
								"support@valoranthack.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				updates: {
					title: "Aktualizace | Vanguard Maintenance Log",
					description: "Aktualizace: Vanguard patch status and rebuild notes. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Aktualizace",
					intro: "Valorant Hacks spojuje ESP wallhack, radar hack a valorant aimbot jako undetected balíček pro Valorant na Windows PC. Aktualizace.",
					imageAlt: "Valorant Hacks live status after Vanguard and game patches",
					galleryTitle: "Aktualizace",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Koupit Valorant Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "Aktualizace",
							paragraphs: [
								"Valorant Hacks spojuje ESP wallhack, radar hack a valorant aimbot jako undetected balíček pro Valorant na Windows PC. Vanguard patch status and rebuild notes.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Vanguard anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard anti-cheat.",
								"support@valoranthack.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and Vanguard questions. okamžité digitální doručení. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Valorant Hacks spojuje ESP wallhack, radar hack a valorant aimbot jako undetected balíček pro Valorant na Windows PC. FAQ.",
					imageAlt: "Valorant Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Koupit Valorant Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Valorant Hacks spojuje ESP wallhack, radar hack a valorant aimbot jako undetected balíček pro Valorant na Windows PC. ESP, soft aim, delivery, and Vanguard questions.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Vanguard anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard anti-cheat.",
								"support@valoranthack.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				support: {
					title: "Podpora | Help & Contact",
					description: "Podpora: order help and license support contact. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Podpora",
					intro: "Valorant Hacks spojuje ESP wallhack, radar hack a valorant aimbot jako undetected balíček pro Valorant na Windows PC. Podpora.",
					imageAlt: "Valorant Hacks support page for license and setup help",
					galleryTitle: "Podpora",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Koupit Valorant Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Podpora",
							paragraphs: [
								"Valorant Hacks spojuje ESP wallhack, radar hack a valorant aimbot jako undetected balíček pro Valorant na Windows PC. order help and license support contact.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Vanguard anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard anti-cheat.",
								"support@valoranthack.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected cheaty | Vanguard Safe Status",
					description: "Undetected cheaty: undetected maintenance after Vanguard anti-cheat patches. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Undetected cheaty",
					intro: "Valorant Hacks spojuje ESP wallhack, radar hack a valorant aimbot jako undetected balíček pro Valorant na Windows PC. Undetected cheaty.",
					imageAlt: "Valorant Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected cheaty",
					heroImage: "/images/valorant-hacks-wallhack.webp",
					ctaPrimary: "Koupit Valorant Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "Undetected cheaty",
							paragraphs: [
								"Valorant Hacks spojuje ESP wallhack, radar hack a valorant aimbot jako undetected balíček pro Valorant na Windows PC. undetected maintenance after Vanguard anti-cheat patches.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Vanguard anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard anti-cheat.",
								"support@valoranthack.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				wallhack: {
					title: "Valorant Wallhack | ESP Visibility",
					description: "Valorant Wallhack: wallhack ESP for players, spike, and distance. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Valorant Wallhack",
					intro: "Valorant Hacks spojuje ESP wallhack, radar hack a valorant aimbot jako undetected balíček pro Valorant na Windows PC. Valorant Wallhack.",
					imageAlt: "Valorant wallhack visibility through walls in a match",
					galleryTitle: "Valorant Wallhack",
					heroImage: "/images/valorant-hacks-wallhack.webp",
					ctaPrimary: "Koupit Valorant Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Valorant Wallhack",
							paragraphs: [
								"Valorant Hacks spojuje ESP wallhack, radar hack a valorant aimbot jako undetected balíček pro Valorant na Windows PC. wallhack ESP for players, spike, and distance.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Vanguard anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard anti-cheat.",
								"support@valoranthack.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				radar: {
					title: "Valorant Radar Hack | 2D Threat Overlay",
					description: "Valorant Radar Hack: 2D radar cues for flanks and rotations. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Valorant Radar Hack",
					intro: "Valorant Hacks spojuje ESP wallhack, radar hack a valorant aimbot jako undetected balíček pro Valorant na Windows PC. Valorant Radar Hack.",
					imageAlt: "Valorant 2D radar overlay showing nearby threats",
					galleryTitle: "Valorant Radar Hack",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Koupit Valorant Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Valorant Radar Hack",
							paragraphs: [
								"Valorant Hacks spojuje ESP wallhack, radar hack a valorant aimbot jako undetected balíček pro Valorant na Windows PC. 2D radar cues for flanks and rotations.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Vanguard anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard anti-cheat.",
								"support@valoranthack.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				vanguard: {
					title: "Vanguard Bypass | Patch Maintenance",
					description: "Vanguard Bypass: how Vanguard updates are handled for Valorant hacks. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Vanguard Bypass",
					intro: "Valorant Hacks spojuje ESP wallhack, radar hack a valorant aimbot jako undetected balíček pro Valorant na Windows PC. Vanguard Bypass.",
					imageAlt: "Valorant Hacks maintenance after a Vanguard patch",
					galleryTitle: "Vanguard Bypass",
					heroImage: "/images/valorant-hacks-aimbot.webp",
					ctaPrimary: "Koupit Valorant Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Vanguard Bypass",
							paragraphs: [
								"Valorant Hacks spojuje ESP wallhack, radar hack a valorant aimbot jako undetected balíček pro Valorant na Windows PC. how Vanguard updates are handled for Valorant hacks.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Vanguard anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard anti-cheat.",
								"support@valoranthack.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Valorant hacky 2026 | Buyer Guide",
					description: "Valorant hacky 2026: 2026 Valorant hacks checklist before checkout. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Valorant hacky 2026",
					intro: "Valorant Hacks spojuje ESP wallhack, radar hack a valorant aimbot jako undetected balíček pro Valorant na Windows PC. Valorant hacky 2026.",
					imageAlt: "Valorant Hacks product overview for Valorant",
					galleryTitle: "Valorant hacky 2026",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Koupit Valorant Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "Valorant hacky 2026",
							paragraphs: [
								"Valorant Hacks spojuje ESP wallhack, radar hack a valorant aimbot jako undetected balíček pro Valorant na Windows PC. 2026 Valorant hacks checklist before checkout.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Vanguard anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard anti-cheat.",
								"support@valoranthack.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				hacks: {
					title: "Valorant hacky | ESP Aimbot Guide",
					description: "Valorant hacky: the Valorant hacks pillar for ESP and Aimbot. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Valorant hacky",
					intro: "Valorant Hacks spojuje ESP wallhack, radar hack a valorant aimbot jako undetected balíček pro Valorant na Windows PC. Valorant hacky.",
					imageAlt: "Valorant Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Valorant hacky",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Koupit Valorant Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Valorant hacky",
							paragraphs: [
								"Valorant Hacks spojuje ESP wallhack, radar hack a valorant aimbot jako undetected balíček pro Valorant na Windows PC. the Valorant hacks pillar for ESP and Aimbot.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Vanguard anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard anti-cheat.",
								"support@valoranthack.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Stáhnout Valorant Hacks | Instant Access",
					description: "Stáhnout Valorant Hacks: digital license download after payment. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Stáhnout Valorant Hacks",
					intro: "Valorant Hacks spojuje ESP wallhack, radar hack a valorant aimbot jako undetected balíček pro Valorant na Windows PC. Stáhnout Valorant Hacks.",
					imageAlt: "Valorant Hacks download and install delivery flow",
					galleryTitle: "Stáhnout Valorant Hacks",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Koupit Valorant Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Stáhnout Valorant Hacks",
							paragraphs: [
								"Valorant Hacks spojuje ESP wallhack, radar hack a valorant aimbot jako undetected balíček pro Valorant na Windows PC. digital license download after payment.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Vanguard anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard anti-cheat.",
								"support@valoranthack.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Valorant mod menu | In-Game Toggles",
					description: "Valorant mod menu: in-client ESP and soft aim toggles. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Valorant mod menu",
					intro: "Valorant Hacks spojuje ESP wallhack, radar hack a valorant aimbot jako undetected balíček pro Valorant na Windows PC. Valorant mod menu.",
					imageAlt: "Valorant Hacks in-game menu controls",
					galleryTitle: "Valorant mod menu",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Koupit Valorant Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Valorant mod menu",
							paragraphs: [
								"Valorant Hacks spojuje ESP wallhack, radar hack a valorant aimbot jako undetected balíček pro Valorant na Windows PC. in-client ESP and soft aim toggles.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Vanguard anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard anti-cheat.",
								"support@valoranthack.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Valorant Soft Aim | Smooth Aim Settings",
					description: "Valorant Soft Aim: smooth soft aim settings for Windows PC. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Valorant Soft Aim",
					intro: "Valorant Hacks spojuje ESP wallhack, radar hack a valorant aimbot jako undetected balíček pro Valorant na Windows PC. Valorant Soft Aim.",
					imageAlt: "Valorant soft aim FOV and smoothness settings",
					galleryTitle: "Valorant Soft Aim",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Koupit Valorant Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/valorant-aimbot/",
					sections: [
						{
							h2: "Valorant Soft Aim",
							paragraphs: [
								"Valorant Hacks spojuje ESP wallhack, radar hack a valorant aimbot jako undetected balíček pro Valorant na Windows PC. smooth soft aim settings for Windows PC.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Vanguard anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard anti-cheat.",
								"support@valoranthack.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Nejlepší Valorant hacky | Buyer Checklist",
					description: "Nejlepší Valorant hacky: what to compare before buying Valorant hacks. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Nejlepší Valorant hacky",
					intro: "Valorant Hacks spojuje ESP wallhack, radar hack a valorant aimbot jako undetected balíček pro Valorant na Windows PC. Nejlepší Valorant hacky.",
					imageAlt: "Valorant Hacks overview for Valorant on PC",
					galleryTitle: "Nejlepší Valorant hacky",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Koupit Valorant Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Nejlepší Valorant hacky",
							paragraphs: [
								"Valorant Hacks spojuje ESP wallhack, radar hack a valorant aimbot jako undetected balíček pro Valorant na Windows PC. what to compare before buying Valorant hacks.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Vanguard anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard anti-cheat.",
								"support@valoranthack.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Valorant aimbot hack | Soft Aim Assist",
					description: "Valorant aimbot hack: undetected Aimbot hack assist for Valorant. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Valorant aimbot hack",
					intro: "Valorant Hacks spojuje ESP wallhack, radar hack a valorant aimbot jako undetected balíček pro Valorant na Windows PC. Valorant aimbot hack.",
					imageAlt: "Valorant aimbot hack controls and bone priority",
					galleryTitle: "Valorant aimbot hack",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Koupit Valorant Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/valorant-aimbot/",
					sections: [
						{
							h2: "Valorant aimbot hack",
							paragraphs: [
								"Valorant Hacks spojuje ESP wallhack, radar hack a valorant aimbot jako undetected balíček pro Valorant na Windows PC. undetected Aimbot hack assist for Valorant.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Vanguard anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard anti-cheat.",
								"support@valoranthack.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Valorant ESP hack | Boxes & Spike",
					description: "Valorant ESP hack: ESP hack boxes, spike markers, and distance. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Valorant ESP hack",
					intro: "Valorant Hacks spojuje ESP wallhack, radar hack a valorant aimbot jako undetected balíček pro Valorant na Windows PC. Valorant ESP hack.",
					imageAlt: "Valorant ESP hack boxes and spike markers",
					galleryTitle: "Valorant ESP hack",
					heroImage: "/images/valorant-hacks-wallhack.webp",
					ctaPrimary: "Koupit Valorant Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Valorant ESP hack",
							paragraphs: [
								"Valorant Hacks spojuje ESP wallhack, radar hack a valorant aimbot jako undetected balíček pro Valorant na Windows PC. ESP hack boxes, spike markers, and distance.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Vanguard anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard anti-cheat.",
								"support@valoranthack.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Valorant Unlock All | What It Means",
					description: "Valorant Unlock All: unlock-all searches vs real ESP and Aimbot tools. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Valorant Unlock All",
					intro: "Valorant Hacks spojuje ESP wallhack, radar hack a valorant aimbot jako undetected balíček pro Valorant na Windows PC. Valorant Unlock All.",
					imageAlt: "Valorant Hacks license features overview",
					galleryTitle: "Valorant Unlock All",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Koupit Valorant Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Valorant Unlock All",
							paragraphs: [
								"Valorant Hacks spojuje ESP wallhack, radar hack a valorant aimbot jako undetected balíček pro Valorant na Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Vanguard anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard anti-cheat.",
								"support@valoranthack.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				privacy: {
					title: "Zásady ochrany soukromí | Valorant Hacks",
					description: "Zásady ochrany soukromí for Valorant Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Zásady ochrany soukromí",
					intro: "Valorant Hacks spojuje ESP wallhack, radar hack a valorant aimbot jako undetected balíček pro Valorant na Windows PC. Zásady ochrany soukromí for valoranthack.net and Valorant licenses.",
					imageAlt: "valorant hacks",
					galleryTitle: "valorant hacks",
					heroImage: "/images/valorant-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Valorant Hacks spojuje ESP wallhack, radar hack a valorant aimbot jako undetected balíček pro Valorant na Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on valoranthack.net.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Valorant Hacks spojuje ESP wallhack, radar hack a valorant aimbot jako undetected balíček pro Valorant na Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Po patchích Vanguard anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@valoranthack.net pro podporu a právní dotazy.",
								"Email: support@valoranthack.net",
							],
						},
					],
				},
				refund: {
					title: "Zásady vrácení peněz | Valorant Hacks",
					description: "Zásady vrácení peněz for Valorant Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Zásady vrácení peněz",
					intro: "Valorant Hacks spojuje ESP wallhack, radar hack a valorant aimbot jako undetected balíček pro Valorant na Windows PC. Zásady vrácení peněz for valoranthack.net and Valorant licenses.",
					imageAlt: "valorant hacks",
					galleryTitle: "valorant hacks",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Valorant Hacks spojuje ESP wallhack, radar hack a valorant aimbot jako undetected balíček pro Valorant na Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard anti-cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Valorant Hacks spojuje ESP wallhack, radar hack a valorant aimbot jako undetected balíček pro Valorant na Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Po patchích Vanguard anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@valoranthack.net pro podporu a právní dotazy.",
								"Email: support@valoranthack.net",
							],
						},
					],
				},
				terms: {
					title: "Podmínky použití | Valorant Hacks",
					description: "Podmínky použití for Valorant Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Podmínky použití",
					intro: "Valorant Hacks spojuje ESP wallhack, radar hack a valorant aimbot jako undetected balíček pro Valorant na Windows PC. Podmínky použití for valoranthack.net and Valorant licenses.",
					imageAlt: "valorant hacks",
					galleryTitle: "valorant hacks",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Valorant Hacks spojuje ESP wallhack, radar hack a valorant aimbot jako undetected balíček pro Valorant na Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard anti-cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Valorant Hacks spojuje ESP wallhack, radar hack a valorant aimbot jako undetected balíček pro Valorant na Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Riot Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@valoranthack.net pro podporu a právní dotazy.",
								"Email: support@valoranthack.net",
							],
						},
					],
				},
			},
		},
		ro: {
			ui: {
				nav: {
					home: "Acasă",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funcții",
					pricing: "Prețuri",
					setup: "Instalare",
					updates: "Actualizări",
					faq: "FAQ",
					buyNow: "Cumpără",
				},
				hero: {
					accent: "Cheats Valorant undetected",
					accentShort: "Valorant Hacks",
					subtitle: "ESP wallhack, radar hack și Aimbot pentru Valorant pe PC Windows — mentenanță Vanguard anti-cheat inclusă.",
					subtitleShort: "ESP, radar și Aimbot pentru Valorant PC",
					buyNow: "Cumpără acum",
					seeFeatures: "Vezi funcții",
				},
				trust: {
					status: "Online",
					statusNote: "Pachetul Valorant Hacks este activ pentru Valorant pe PC Windows.",
					statusShort: "Activ",
					delivery: "Livrare digitală instantă",
					platform: "Windows 10 și 11",
					antiCheat: "Mentenanță Vanguard anti-cheat suportată",
					antiCheatShort: "Vanguard anti-cheat suportat",
				},
				product: {
					title: "Valorant Hacks",
					addToCart: "Adaugă în coș",
					monthly: "Lunar",
					lifetime: "Pe viață",
					available: "Disponibil acum",
					gameBadge: "Valorant",
					platformBadge: "Windows PC",
					statusBadge: "Pachet undetected",
				},
				reviews: {
					title: "Ce spun jucătorii",
					subtitle: "Feedback recent de la cumpărătorii Valorant Hacks",
					outOf: "din 5",
					countLabel: "recenzii",
				},
				common: {
					buyNow: "Cumpără acum",
					readGuide: "Citește ghidul",
					language: "Limbă",
					officialLanguageNote: "Engleza este limba oficială. Alte limbi sunt traduse pentru SEO global.",
					relatedPages: "Pagini related",
				},
				footer: {
					explore: "Explorează",
					help: "Ajutor și legal",
					tagline: "ESP, wallhack, radar și Aimbot undetected pentru Valorant — checkout via Zadeyo.",
				},
				images: {
					hero: "Valorant Hacks hero — ESP and aimbot overlay in Valorant",
					espWallhack: "Wallhack outlines showing agents and enemies through walls",
					aimbotCombat: "Soft aim assist overlay during a Valorant round",
					squadFight: "Valorant Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Valorant match",
					headerArt: "Aimbot view and bone priority controls for Valorant",
					cheatsPackage: "2D radar threat overlay for Valorant",
					rebootFight: "Aimbot assist during a Valorant firefight",
					battleRoyale: "Valorant Hacks in-match overview for Windows PC",
					battleRoyaleIsland: "ESP markers for agents and the spike in Valorant",
				},
			},
			pages: {
				home: {
					title: "Valorant Hacks | Official PC Site",
					description: "Cheats Valorant undetected pentru Valorant pe PC. ESP wallhack, radar hack, Aimbot, mentenanță Vanguard anti-cheat. Livrare digitală instantă.",
					h1: "Valorant Hacks",
					intro: "Pachet undetected Valorant pe Windows PC: ESP wallhack, radar, Aimbot cu mentenanță Vanguard anti-cheat.",
					imageAlt: "Valorant ESP player tags hack",
					galleryTitle: "Galerie Valorant Hacks — ESP, Aimbot, wallhack",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Cumpără Valorant Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "De ce Valorant Hacks în 2026",
							paragraphs: [
								"Valorant Hacks combină ESP wallhack, radar hack și valorant aimbot undetected pentru Valorant pe PC Windows. Ideal pentru citirea squad-urilor inamice în Competitive și Deathmatch.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard anti-cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar și Aimbot într-o licență",
							paragraphs: [
								"Valorant Hacks combină ESP wallhack, radar hack și valorant aimbot undetected pentru Valorant pe PC Windows. O licență în loc de instrumente separate.",
								"Verificați Updates după patch-uri Vanguard anti-cheat. Niciun cheat nu garantează undetected permanent.",
							],
						},
					],
				},
				"valorant-esp": {
					title: "ESP Valorant | Player Boxes & Wallhack",
					description: "ESP Valorant: player boxes, spike markers, and wallhack overlays. livrare digitală instantă. undetected — PC Windows.",
					h1: "ESP Valorant",
					intro: "Valorant Hacks combină ESP wallhack, radar hack și valorant aimbot undetected pentru Valorant pe PC Windows. ESP Valorant.",
					imageAlt: "Valorant ESP player boxes and distance readouts in a match",
					galleryTitle: "ESP Valorant",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Cumpără Valorant Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "ESP Valorant",
							paragraphs: [
								"Valorant Hacks combină ESP wallhack, radar hack și valorant aimbot undetected pentru Valorant pe PC Windows. player boxes, spike markers, and wallhack overlays.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Vanguard anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard anti-cheat.",
								"support@valoranthack.net pentru suport și legal.",
							],
						},
					],
				},
				"valorant-aimbot": {
					title: "Aimbot Valorant | Soft Aim Controls",
					description: "Aimbot Valorant: soft aim, FOV, and per-weapon Aimbot profiles. livrare digitală instantă. undetected — PC Windows.",
					h1: "Aimbot Valorant",
					intro: "Valorant Hacks combină ESP wallhack, radar hack și valorant aimbot undetected pentru Valorant pe PC Windows. Aimbot Valorant.",
					imageAlt: "Valorant aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Valorant",
					heroImage: "/images/valorant-hacks-aimbot.webp",
					ctaPrimary: "Cumpără Valorant Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Aimbot Valorant",
							paragraphs: [
								"Valorant Hacks combină ESP wallhack, radar hack și valorant aimbot undetected pentru Valorant pe PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Vanguard anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard anti-cheat.",
								"support@valoranthack.net pentru suport și legal.",
							],
						},
					],
				},
				features: {
					title: "Funcții | Full Feature List",
					description: "Funcții: ESP, soft aim, radar controls. livrare digitală instantă. undetected — PC Windows.",
					h1: "Funcții",
					intro: "Valorant Hacks combină ESP wallhack, radar hack și valorant aimbot undetected pentru Valorant pe PC Windows. Funcții.",
					imageAlt: "Valorant Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funcții",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Cumpără Valorant Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funcții",
							paragraphs: [
								"Valorant Hacks combină ESP wallhack, radar hack și valorant aimbot undetected pentru Valorant pe PC Windows. ESP, soft aim, radar controls.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Vanguard anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard anti-cheat.",
								"support@valoranthack.net pentru suport și legal.",
							],
						},
					],
				},
				pricing: {
					title: "Prețuri | Monthly & Lifetime",
					description: "Prețuri: $35 monthly or $150 lifetime licenses. livrare digitală instantă. undetected — PC Windows.",
					h1: "Prețuri",
					intro: "Valorant Hacks combină ESP wallhack, radar hack și valorant aimbot undetected pentru Valorant pe PC Windows. Prețuri.",
					imageAlt: "Valorant Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Prețuri",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Cumpără Valorant Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Prețuri",
							paragraphs: [
								"Valorant Hacks combină ESP wallhack, radar hack și valorant aimbot undetected pentru Valorant pe PC Windows. $35 monthly or $150 lifetime licenses.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Vanguard anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard anti-cheat.",
								"support@valoranthack.net pentru suport și legal.",
							],
						},
					],
				},
				setup: {
					title: "Instalare | PC Setup Guide",
					description: "Instalare: Windows PC activation and first-launch setup. livrare digitală instantă. undetected — PC Windows.",
					h1: "Instalare",
					intro: "Valorant Hacks combină ESP wallhack, radar hack și valorant aimbot undetected pentru Valorant pe PC Windows. Instalare.",
					imageAlt: "Valorant Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Instalare",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Cumpără Valorant Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalare",
							paragraphs: [
								"Valorant Hacks combină ESP wallhack, radar hack și valorant aimbot undetected pentru Valorant pe PC Windows. Windows PC activation and first-launch setup.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Vanguard anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard anti-cheat.",
								"support@valoranthack.net pentru suport și legal.",
							],
						},
					],
				},
				updates: {
					title: "Actualizări | Vanguard Maintenance Log",
					description: "Actualizări: Vanguard patch status and rebuild notes. livrare digitală instantă. undetected — PC Windows.",
					h1: "Actualizări",
					intro: "Valorant Hacks combină ESP wallhack, radar hack și valorant aimbot undetected pentru Valorant pe PC Windows. Actualizări.",
					imageAlt: "Valorant Hacks live status after Vanguard and game patches",
					galleryTitle: "Actualizări",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Cumpără Valorant Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "Actualizări",
							paragraphs: [
								"Valorant Hacks combină ESP wallhack, radar hack și valorant aimbot undetected pentru Valorant pe PC Windows. Vanguard patch status and rebuild notes.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Vanguard anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard anti-cheat.",
								"support@valoranthack.net pentru suport și legal.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and Vanguard questions. livrare digitală instantă. undetected — PC Windows.",
					h1: "FAQ",
					intro: "Valorant Hacks combină ESP wallhack, radar hack și valorant aimbot undetected pentru Valorant pe PC Windows. FAQ.",
					imageAlt: "Valorant Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Cumpără Valorant Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Valorant Hacks combină ESP wallhack, radar hack și valorant aimbot undetected pentru Valorant pe PC Windows. ESP, soft aim, delivery, and Vanguard questions.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Vanguard anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard anti-cheat.",
								"support@valoranthack.net pentru suport și legal.",
							],
						},
					],
				},
				support: {
					title: "Suport | Help & Contact",
					description: "Suport: order help and license support contact. livrare digitală instantă. undetected — PC Windows.",
					h1: "Suport",
					intro: "Valorant Hacks combină ESP wallhack, radar hack și valorant aimbot undetected pentru Valorant pe PC Windows. Suport.",
					imageAlt: "Valorant Hacks support page for license and setup help",
					galleryTitle: "Suport",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Cumpără Valorant Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Suport",
							paragraphs: [
								"Valorant Hacks combină ESP wallhack, radar hack și valorant aimbot undetected pentru Valorant pe PC Windows. order help and license support contact.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Vanguard anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard anti-cheat.",
								"support@valoranthack.net pentru suport și legal.",
							],
						},
					],
				},
				undetected: {
					title: "Cheats undetected | Vanguard Safe Status",
					description: "Cheats undetected: undetected maintenance after Vanguard anti-cheat patches. livrare digitală instantă. undetected — PC Windows.",
					h1: "Cheats undetected",
					intro: "Valorant Hacks combină ESP wallhack, radar hack și valorant aimbot undetected pentru Valorant pe PC Windows. Cheats undetected.",
					imageAlt: "Valorant Hacks undetected status overview for Windows PC",
					galleryTitle: "Cheats undetected",
					heroImage: "/images/valorant-hacks-wallhack.webp",
					ctaPrimary: "Cumpără Valorant Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "Cheats undetected",
							paragraphs: [
								"Valorant Hacks combină ESP wallhack, radar hack și valorant aimbot undetected pentru Valorant pe PC Windows. undetected maintenance after Vanguard anti-cheat patches.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Vanguard anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard anti-cheat.",
								"support@valoranthack.net pentru suport și legal.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Valorant | ESP Visibility",
					description: "Wallhack Valorant: wallhack ESP for players, spike, and distance. livrare digitală instantă. undetected — PC Windows.",
					h1: "Wallhack Valorant",
					intro: "Valorant Hacks combină ESP wallhack, radar hack și valorant aimbot undetected pentru Valorant pe PC Windows. Wallhack Valorant.",
					imageAlt: "Valorant wallhack visibility through walls in a match",
					galleryTitle: "Wallhack Valorant",
					heroImage: "/images/valorant-hacks-wallhack.webp",
					ctaPrimary: "Cumpără Valorant Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Wallhack Valorant",
							paragraphs: [
								"Valorant Hacks combină ESP wallhack, radar hack și valorant aimbot undetected pentru Valorant pe PC Windows. wallhack ESP for players, spike, and distance.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Vanguard anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard anti-cheat.",
								"support@valoranthack.net pentru suport și legal.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack Valorant | 2D Threat Overlay",
					description: "Radar hack Valorant: 2D radar cues for flanks and rotations. livrare digitală instantă. undetected — PC Windows.",
					h1: "Radar hack Valorant",
					intro: "Valorant Hacks combină ESP wallhack, radar hack și valorant aimbot undetected pentru Valorant pe PC Windows. Radar hack Valorant.",
					imageAlt: "Valorant 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack Valorant",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Cumpără Valorant Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Radar hack Valorant",
							paragraphs: [
								"Valorant Hacks combină ESP wallhack, radar hack și valorant aimbot undetected pentru Valorant pe PC Windows. 2D radar cues for flanks and rotations.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Vanguard anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard anti-cheat.",
								"support@valoranthack.net pentru suport și legal.",
							],
						},
					],
				},
				vanguard: {
					title: "Bypass Vanguard | Patch Maintenance",
					description: "Bypass Vanguard: how Vanguard updates are handled for Valorant hacks. livrare digitală instantă. undetected — PC Windows.",
					h1: "Bypass Vanguard",
					intro: "Valorant Hacks combină ESP wallhack, radar hack și valorant aimbot undetected pentru Valorant pe PC Windows. Bypass Vanguard.",
					imageAlt: "Valorant Hacks maintenance after a Vanguard patch",
					galleryTitle: "Bypass Vanguard",
					heroImage: "/images/valorant-hacks-aimbot.webp",
					ctaPrimary: "Cumpără Valorant Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Vanguard",
							paragraphs: [
								"Valorant Hacks combină ESP wallhack, radar hack și valorant aimbot undetected pentru Valorant pe PC Windows. how Vanguard updates are handled for Valorant hacks.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Vanguard anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard anti-cheat.",
								"support@valoranthack.net pentru suport și legal.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheats Valorant 2026 | Buyer Guide",
					description: "Cheats Valorant 2026: 2026 Valorant hacks checklist before checkout. livrare digitală instantă. undetected — PC Windows.",
					h1: "Cheats Valorant 2026",
					intro: "Valorant Hacks combină ESP wallhack, radar hack și valorant aimbot undetected pentru Valorant pe PC Windows. Cheats Valorant 2026.",
					imageAlt: "Valorant Hacks product overview for Valorant",
					galleryTitle: "Cheats Valorant 2026",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Cumpără Valorant Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "Cheats Valorant 2026",
							paragraphs: [
								"Valorant Hacks combină ESP wallhack, radar hack și valorant aimbot undetected pentru Valorant pe PC Windows. 2026 Valorant hacks checklist before checkout.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Vanguard anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard anti-cheat.",
								"support@valoranthack.net pentru suport și legal.",
							],
						},
					],
				},
				hacks: {
					title: "Cheats Valorant | ESP Aimbot Guide",
					description: "Cheats Valorant: the Valorant hacks pillar for ESP and Aimbot. livrare digitală instantă. undetected — PC Windows.",
					h1: "Cheats Valorant",
					intro: "Valorant Hacks combină ESP wallhack, radar hack și valorant aimbot undetected pentru Valorant pe PC Windows. Cheats Valorant.",
					imageAlt: "Valorant Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Cheats Valorant",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Cumpără Valorant Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheats Valorant",
							paragraphs: [
								"Valorant Hacks combină ESP wallhack, radar hack și valorant aimbot undetected pentru Valorant pe PC Windows. the Valorant hacks pillar for ESP and Aimbot.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Vanguard anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard anti-cheat.",
								"support@valoranthack.net pentru suport și legal.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Descărcare Valorant Hacks | Instant Access",
					description: "Descărcare Valorant Hacks: digital license download after payment. livrare digitală instantă. undetected — PC Windows.",
					h1: "Descărcare Valorant Hacks",
					intro: "Valorant Hacks combină ESP wallhack, radar hack și valorant aimbot undetected pentru Valorant pe PC Windows. Descărcare Valorant Hacks.",
					imageAlt: "Valorant Hacks download and install delivery flow",
					galleryTitle: "Descărcare Valorant Hacks",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Cumpără Valorant Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Descărcare Valorant Hacks",
							paragraphs: [
								"Valorant Hacks combină ESP wallhack, radar hack și valorant aimbot undetected pentru Valorant pe PC Windows. digital license download after payment.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Vanguard anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard anti-cheat.",
								"support@valoranthack.net pentru suport și legal.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Meniu mod Valorant | In-Game Toggles",
					description: "Meniu mod Valorant: in-client ESP and soft aim toggles. livrare digitală instantă. undetected — PC Windows.",
					h1: "Meniu mod Valorant",
					intro: "Valorant Hacks combină ESP wallhack, radar hack și valorant aimbot undetected pentru Valorant pe PC Windows. Meniu mod Valorant.",
					imageAlt: "Valorant Hacks in-game menu controls",
					galleryTitle: "Meniu mod Valorant",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Cumpără Valorant Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Meniu mod Valorant",
							paragraphs: [
								"Valorant Hacks combină ESP wallhack, radar hack și valorant aimbot undetected pentru Valorant pe PC Windows. in-client ESP and soft aim toggles.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Vanguard anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard anti-cheat.",
								"support@valoranthack.net pentru suport și legal.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Valorant | Smooth Aim Settings",
					description: "Soft aim Valorant: smooth soft aim settings for Windows PC. livrare digitală instantă. undetected — PC Windows.",
					h1: "Soft aim Valorant",
					intro: "Valorant Hacks combină ESP wallhack, radar hack și valorant aimbot undetected pentru Valorant pe PC Windows. Soft aim Valorant.",
					imageAlt: "Valorant soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Valorant",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Cumpără Valorant Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/valorant-aimbot/",
					sections: [
						{
							h2: "Soft aim Valorant",
							paragraphs: [
								"Valorant Hacks combină ESP wallhack, radar hack și valorant aimbot undetected pentru Valorant pe PC Windows. smooth soft aim settings for Windows PC.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Vanguard anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard anti-cheat.",
								"support@valoranthack.net pentru suport și legal.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cele mai bune cheats Valorant | Buyer Checklist",
					description: "Cele mai bune cheats Valorant: what to compare before buying Valorant hacks. livrare digitală instantă. undetected — PC Windows.",
					h1: "Cele mai bune cheats Valorant",
					intro: "Valorant Hacks combină ESP wallhack, radar hack și valorant aimbot undetected pentru Valorant pe PC Windows. Cele mai bune cheats Valorant.",
					imageAlt: "Valorant Hacks overview for Valorant on PC",
					galleryTitle: "Cele mai bune cheats Valorant",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Cumpără Valorant Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cele mai bune cheats Valorant",
							paragraphs: [
								"Valorant Hacks combină ESP wallhack, radar hack și valorant aimbot undetected pentru Valorant pe PC Windows. what to compare before buying Valorant hacks.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Vanguard anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard anti-cheat.",
								"support@valoranthack.net pentru suport și legal.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Valorant | Soft Aim Assist",
					description: "Hack aimbot Valorant: undetected Aimbot hack assist for Valorant. livrare digitală instantă. undetected — PC Windows.",
					h1: "Hack aimbot Valorant",
					intro: "Valorant Hacks combină ESP wallhack, radar hack și valorant aimbot undetected pentru Valorant pe PC Windows. Hack aimbot Valorant.",
					imageAlt: "Valorant aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Valorant",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Cumpără Valorant Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/valorant-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Valorant",
							paragraphs: [
								"Valorant Hacks combină ESP wallhack, radar hack și valorant aimbot undetected pentru Valorant pe PC Windows. undetected Aimbot hack assist for Valorant.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Vanguard anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard anti-cheat.",
								"support@valoranthack.net pentru suport și legal.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Valorant | Boxes & Spike",
					description: "Hack ESP Valorant: ESP hack boxes, spike markers, and distance. livrare digitală instantă. undetected — PC Windows.",
					h1: "Hack ESP Valorant",
					intro: "Valorant Hacks combină ESP wallhack, radar hack și valorant aimbot undetected pentru Valorant pe PC Windows. Hack ESP Valorant.",
					imageAlt: "Valorant ESP hack boxes and spike markers",
					galleryTitle: "Hack ESP Valorant",
					heroImage: "/images/valorant-hacks-wallhack.webp",
					ctaPrimary: "Cumpără Valorant Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Hack ESP Valorant",
							paragraphs: [
								"Valorant Hacks combină ESP wallhack, radar hack și valorant aimbot undetected pentru Valorant pe PC Windows. ESP hack boxes, spike markers, and distance.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Vanguard anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard anti-cheat.",
								"support@valoranthack.net pentru suport și legal.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Valorant | What It Means",
					description: "Unlock all Valorant: unlock-all searches vs real ESP and Aimbot tools. livrare digitală instantă. undetected — PC Windows.",
					h1: "Unlock all Valorant",
					intro: "Valorant Hacks combină ESP wallhack, radar hack și valorant aimbot undetected pentru Valorant pe PC Windows. Unlock all Valorant.",
					imageAlt: "Valorant Hacks license features overview",
					galleryTitle: "Unlock all Valorant",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Cumpără Valorant Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Valorant",
							paragraphs: [
								"Valorant Hacks combină ESP wallhack, radar hack și valorant aimbot undetected pentru Valorant pe PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Vanguard anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard anti-cheat.",
								"support@valoranthack.net pentru suport și legal.",
							],
						},
					],
				},
				privacy: {
					title: "Politica de confidențialitate | Valorant Hacks",
					description: "Politica de confidențialitate for Valorant Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politica de confidențialitate",
					intro: "Valorant Hacks combină ESP wallhack, radar hack și valorant aimbot undetected pentru Valorant pe PC Windows. Politica de confidențialitate for valoranthack.net and Valorant licenses.",
					imageAlt: "valorant hacks",
					galleryTitle: "valorant hacks",
					heroImage: "/images/valorant-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Valorant Hacks combină ESP wallhack, radar hack și valorant aimbot undetected pentru Valorant pe PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on valoranthack.net.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Valorant Hacks combină ESP wallhack, radar hack și valorant aimbot undetected pentru Valorant pe PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Verificați Updates după patch-uri Vanguard anti-cheat. Niciun cheat nu garantează undetected permanent.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@valoranthack.net pentru suport și legal.",
								"Email: support@valoranthack.net",
							],
						},
					],
				},
				refund: {
					title: "Politica de rambursare | Valorant Hacks",
					description: "Politica de rambursare for Valorant Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politica de rambursare",
					intro: "Valorant Hacks combină ESP wallhack, radar hack și valorant aimbot undetected pentru Valorant pe PC Windows. Politica de rambursare for valoranthack.net and Valorant licenses.",
					imageAlt: "valorant hacks",
					galleryTitle: "valorant hacks",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Valorant Hacks combină ESP wallhack, radar hack și valorant aimbot undetected pentru Valorant pe PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard anti-cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Valorant Hacks combină ESP wallhack, radar hack și valorant aimbot undetected pentru Valorant pe PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Verificați Updates după patch-uri Vanguard anti-cheat. Niciun cheat nu garantează undetected permanent.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@valoranthack.net pentru suport și legal.",
								"Email: support@valoranthack.net",
							],
						},
					],
				},
				terms: {
					title: "Termeni de utilizare | Valorant Hacks",
					description: "Termeni de utilizare for Valorant Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Termeni de utilizare",
					intro: "Valorant Hacks combină ESP wallhack, radar hack și valorant aimbot undetected pentru Valorant pe PC Windows. Termeni de utilizare for valoranthack.net and Valorant licenses.",
					imageAlt: "valorant hacks",
					galleryTitle: "valorant hacks",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Valorant Hacks combină ESP wallhack, radar hack și valorant aimbot undetected pentru Valorant pe PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard anti-cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Valorant Hacks combină ESP wallhack, radar hack și valorant aimbot undetected pentru Valorant pe PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Riot Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@valoranthack.net pentru suport și legal.",
								"Email: support@valoranthack.net",
							],
						},
					],
				},
			},
		},
		sv: {
			ui: {
				nav: {
					home: "Hem",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funktioner",
					pricing: "Priser",
					setup: "Installation",
					updates: "Uppdateringar",
					faq: "FAQ",
					buyNow: "Köp nu",
				},
				hero: {
					accent: "Undetected Valorant hacks",
					accentShort: "Valorant Hacks",
					subtitle: "ESP wallhack, radar hack och Aimbot för Valorant på Windows PC — Vanguard anti-cheat-underhåll ingår.",
					subtitleShort: "ESP, radar & Aimbot för Valorant PC",
					buyNow: "Köp nu",
					seeFeatures: "Se funktioner",
				},
				trust: {
					status: "Online",
					statusNote: "Valorant Hacks-paketet är live för Valorant på Windows PC.",
					statusShort: "Live",
					delivery: "Omedelbar digital leverans",
					platform: "Windows 10 & 11",
					antiCheat: "Vanguard anti-cheat-underhåll stöds",
					antiCheatShort: "Vanguard anti-cheat stöd",
				},
				product: {
					title: "Valorant Hacks",
					addToCart: "Lägg i varukorg",
					monthly: "Månadsvis",
					lifetime: "Lifetime",
					available: "Tillgänglig nu",
					gameBadge: "Valorant",
					platformBadge: "Windows PC",
					statusBadge: "Undetected paket",
				},
				reviews: {
					title: "Vad spelare säger",
					subtitle: "Senaste feedback från Valorant Hacks-köpare",
					outOf: "av 5",
					countLabel: "recensioner",
				},
				common: {
					buyNow: "Köp nu",
					readGuide: "Läs guide",
					language: "Språk",
					officialLanguageNote: "Engelska är det officiella språket. Andra språk är översatta för global SEO.",
					relatedPages: "Relaterade sidor",
				},
				footer: {
					explore: "Utforska",
					help: "Hjälp & juridik",
					tagline: "Undetected ESP, wallhack, radar och Aimbot för Valorant — checkout via Zadeyo.",
				},
				images: {
					hero: "Valorant Hacks hero — ESP and aimbot overlay in Valorant",
					espWallhack: "Wallhack outlines showing agents and enemies through walls",
					aimbotCombat: "Soft aim assist overlay during a Valorant round",
					squadFight: "Valorant Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Valorant match",
					headerArt: "Aimbot view and bone priority controls for Valorant",
					cheatsPackage: "2D radar threat overlay for Valorant",
					rebootFight: "Aimbot assist during a Valorant firefight",
					battleRoyale: "Valorant Hacks in-match overview for Windows PC",
					battleRoyaleIsland: "ESP markers for agents and the spike in Valorant",
				},
			},
			pages: {
				home: {
					title: "Valorant Hacks | Official PC Site",
					description: "Undetected Valorant hacks för Valorant på PC. ESP wallhack, radar hack, Aimbot, Vanguard anti-cheat-underhåll. Omedelbar digital leverans.",
					h1: "Valorant Hacks",
					intro: "Undetected paket för Valorant på Windows PC: ESP wallhack, radar, Aimbot med Vanguard anti-cheat-underhåll.",
					imageAlt: "Valorant ESP player tags hack",
					galleryTitle: "Valorant Hacks galleri — ESP, Aimbot, wallhack",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Köp Valorant Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Varför Valorant Hacks 2026",
							paragraphs: [
								"Valorant Hacks kombinerar ESP wallhack, radar hack och valorant aimbot som undetected paket för Valorant på Windows PC. Ideal för att läsa fiendesquads i Competitive och Deathmatch.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard anti-cheat-underhåll.",
							],
						},
						{
							h2: "ESP wallhack, radar och Aimbot i en licens",
							paragraphs: [
								"Valorant Hacks kombinerar ESP wallhack, radar hack och valorant aimbot som undetected paket för Valorant på Windows PC. En licens istället för separata verktyg.",
								"Kontrollera Updates efter Vanguard anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
							],
						},
					],
				},
				"valorant-esp": {
					title: "Valorant ESP | Player Boxes & Wallhack",
					description: "Valorant ESP: player boxes, spike markers, and wallhack overlays. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Valorant ESP",
					intro: "Valorant Hacks kombinerar ESP wallhack, radar hack och valorant aimbot som undetected paket för Valorant på Windows PC. Valorant ESP.",
					imageAlt: "Valorant ESP player boxes and distance readouts in a match",
					galleryTitle: "Valorant ESP",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Köp Valorant Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "Valorant ESP",
							paragraphs: [
								"Valorant Hacks kombinerar ESP wallhack, radar hack och valorant aimbot som undetected paket för Valorant på Windows PC. player boxes, spike markers, and wallhack overlays.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Vanguard anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard anti-cheat-underhåll.",
								"support@valoranthack.net för support och juridik.",
							],
						},
					],
				},
				"valorant-aimbot": {
					title: "Valorant Aimbot | Soft Aim Controls",
					description: "Valorant Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Valorant Aimbot",
					intro: "Valorant Hacks kombinerar ESP wallhack, radar hack och valorant aimbot som undetected paket för Valorant på Windows PC. Valorant Aimbot.",
					imageAlt: "Valorant aimbot and soft aim controls on Windows PC",
					galleryTitle: "Valorant Aimbot",
					heroImage: "/images/valorant-hacks-aimbot.webp",
					ctaPrimary: "Köp Valorant Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Valorant Aimbot",
							paragraphs: [
								"Valorant Hacks kombinerar ESP wallhack, radar hack och valorant aimbot som undetected paket för Valorant på Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Vanguard anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard anti-cheat-underhåll.",
								"support@valoranthack.net för support och juridik.",
							],
						},
					],
				},
				features: {
					title: "Funktioner | Full Feature List",
					description: "Funktioner: ESP, soft aim, radar controls. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Funktioner",
					intro: "Valorant Hacks kombinerar ESP wallhack, radar hack och valorant aimbot som undetected paket för Valorant på Windows PC. Funktioner.",
					imageAlt: "Valorant Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funktioner",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Köp Valorant Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funktioner",
							paragraphs: [
								"Valorant Hacks kombinerar ESP wallhack, radar hack och valorant aimbot som undetected paket för Valorant på Windows PC. ESP, soft aim, radar controls.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Vanguard anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard anti-cheat-underhåll.",
								"support@valoranthack.net för support och juridik.",
							],
						},
					],
				},
				pricing: {
					title: "Priser | Monthly & Lifetime",
					description: "Priser: $35 monthly or $150 lifetime licenses. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Priser",
					intro: "Valorant Hacks kombinerar ESP wallhack, radar hack och valorant aimbot som undetected paket för Valorant på Windows PC. Priser.",
					imageAlt: "Valorant Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Priser",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Köp Valorant Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Priser",
							paragraphs: [
								"Valorant Hacks kombinerar ESP wallhack, radar hack och valorant aimbot som undetected paket för Valorant på Windows PC. $35 monthly or $150 lifetime licenses.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Vanguard anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard anti-cheat-underhåll.",
								"support@valoranthack.net för support och juridik.",
							],
						},
					],
				},
				setup: {
					title: "Installation | PC Setup Guide",
					description: "Installation: Windows PC activation and first-launch setup. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Installation",
					intro: "Valorant Hacks kombinerar ESP wallhack, radar hack och valorant aimbot som undetected paket för Valorant på Windows PC. Installation.",
					imageAlt: "Valorant Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Installation",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Köp Valorant Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Installation",
							paragraphs: [
								"Valorant Hacks kombinerar ESP wallhack, radar hack och valorant aimbot som undetected paket för Valorant på Windows PC. Windows PC activation and first-launch setup.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Vanguard anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard anti-cheat-underhåll.",
								"support@valoranthack.net för support och juridik.",
							],
						},
					],
				},
				updates: {
					title: "Uppdateringar | Vanguard Maintenance Log",
					description: "Uppdateringar: Vanguard patch status and rebuild notes. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Uppdateringar",
					intro: "Valorant Hacks kombinerar ESP wallhack, radar hack och valorant aimbot som undetected paket för Valorant på Windows PC. Uppdateringar.",
					imageAlt: "Valorant Hacks live status after Vanguard and game patches",
					galleryTitle: "Uppdateringar",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Köp Valorant Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "Uppdateringar",
							paragraphs: [
								"Valorant Hacks kombinerar ESP wallhack, radar hack och valorant aimbot som undetected paket för Valorant på Windows PC. Vanguard patch status and rebuild notes.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Vanguard anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard anti-cheat-underhåll.",
								"support@valoranthack.net för support och juridik.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and Vanguard questions. omedelbar digital leverans. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Valorant Hacks kombinerar ESP wallhack, radar hack och valorant aimbot som undetected paket för Valorant på Windows PC. FAQ.",
					imageAlt: "Valorant Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Köp Valorant Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Valorant Hacks kombinerar ESP wallhack, radar hack och valorant aimbot som undetected paket för Valorant på Windows PC. ESP, soft aim, delivery, and Vanguard questions.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Vanguard anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard anti-cheat-underhåll.",
								"support@valoranthack.net för support och juridik.",
							],
						},
					],
				},
				support: {
					title: "Support | Help & Contact",
					description: "Support: order help and license support contact. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Support",
					intro: "Valorant Hacks kombinerar ESP wallhack, radar hack och valorant aimbot som undetected paket för Valorant på Windows PC. Support.",
					imageAlt: "Valorant Hacks support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Köp Valorant Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"Valorant Hacks kombinerar ESP wallhack, radar hack och valorant aimbot som undetected paket för Valorant på Windows PC. order help and license support contact.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Vanguard anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard anti-cheat-underhåll.",
								"support@valoranthack.net för support och juridik.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected cheats | Vanguard Safe Status",
					description: "Undetected cheats: undetected maintenance after Vanguard anti-cheat patches. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Undetected cheats",
					intro: "Valorant Hacks kombinerar ESP wallhack, radar hack och valorant aimbot som undetected paket för Valorant på Windows PC. Undetected cheats.",
					imageAlt: "Valorant Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected cheats",
					heroImage: "/images/valorant-hacks-wallhack.webp",
					ctaPrimary: "Köp Valorant Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "Undetected cheats",
							paragraphs: [
								"Valorant Hacks kombinerar ESP wallhack, radar hack och valorant aimbot som undetected paket för Valorant på Windows PC. undetected maintenance after Vanguard anti-cheat patches.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Vanguard anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard anti-cheat-underhåll.",
								"support@valoranthack.net för support och juridik.",
							],
						},
					],
				},
				wallhack: {
					title: "Valorant Wallhack | ESP Visibility",
					description: "Valorant Wallhack: wallhack ESP for players, spike, and distance. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Valorant Wallhack",
					intro: "Valorant Hacks kombinerar ESP wallhack, radar hack och valorant aimbot som undetected paket för Valorant på Windows PC. Valorant Wallhack.",
					imageAlt: "Valorant wallhack visibility through walls in a match",
					galleryTitle: "Valorant Wallhack",
					heroImage: "/images/valorant-hacks-wallhack.webp",
					ctaPrimary: "Köp Valorant Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Valorant Wallhack",
							paragraphs: [
								"Valorant Hacks kombinerar ESP wallhack, radar hack och valorant aimbot som undetected paket för Valorant på Windows PC. wallhack ESP for players, spike, and distance.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Vanguard anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard anti-cheat-underhåll.",
								"support@valoranthack.net för support och juridik.",
							],
						},
					],
				},
				radar: {
					title: "Valorant Radar Hack | 2D Threat Overlay",
					description: "Valorant Radar Hack: 2D radar cues for flanks and rotations. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Valorant Radar Hack",
					intro: "Valorant Hacks kombinerar ESP wallhack, radar hack och valorant aimbot som undetected paket för Valorant på Windows PC. Valorant Radar Hack.",
					imageAlt: "Valorant 2D radar overlay showing nearby threats",
					galleryTitle: "Valorant Radar Hack",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Köp Valorant Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Valorant Radar Hack",
							paragraphs: [
								"Valorant Hacks kombinerar ESP wallhack, radar hack och valorant aimbot som undetected paket för Valorant på Windows PC. 2D radar cues for flanks and rotations.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Vanguard anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard anti-cheat-underhåll.",
								"support@valoranthack.net för support och juridik.",
							],
						},
					],
				},
				vanguard: {
					title: "Vanguard Bypass | Patch Maintenance",
					description: "Vanguard Bypass: how Vanguard updates are handled for Valorant hacks. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Vanguard Bypass",
					intro: "Valorant Hacks kombinerar ESP wallhack, radar hack och valorant aimbot som undetected paket för Valorant på Windows PC. Vanguard Bypass.",
					imageAlt: "Valorant Hacks maintenance after a Vanguard patch",
					galleryTitle: "Vanguard Bypass",
					heroImage: "/images/valorant-hacks-aimbot.webp",
					ctaPrimary: "Köp Valorant Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Vanguard Bypass",
							paragraphs: [
								"Valorant Hacks kombinerar ESP wallhack, radar hack och valorant aimbot som undetected paket för Valorant på Windows PC. how Vanguard updates are handled for Valorant hacks.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Vanguard anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard anti-cheat-underhåll.",
								"support@valoranthack.net för support och juridik.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Valorant Hacks 2026 | Buyer Guide",
					description: "Valorant Hacks 2026: 2026 Valorant hacks checklist before checkout. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Valorant Hacks 2026",
					intro: "Valorant Hacks kombinerar ESP wallhack, radar hack och valorant aimbot som undetected paket för Valorant på Windows PC. Valorant Hacks 2026.",
					imageAlt: "Valorant Hacks product overview for Valorant",
					galleryTitle: "Valorant Hacks 2026",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Köp Valorant Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/valorant-hacks/",
					sections: [
						{
							h2: "Valorant Hacks 2026",
							paragraphs: [
								"Valorant Hacks kombinerar ESP wallhack, radar hack och valorant aimbot som undetected paket för Valorant på Windows PC. 2026 Valorant hacks checklist before checkout.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Vanguard anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard anti-cheat-underhåll.",
								"support@valoranthack.net för support och juridik.",
							],
						},
					],
				},
				hacks: {
					title: "Valorant Hacks | ESP Aimbot Guide",
					description: "Valorant Hacks: the Valorant hacks pillar for ESP and Aimbot. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Valorant Hacks",
					intro: "Valorant Hacks kombinerar ESP wallhack, radar hack och valorant aimbot som undetected paket för Valorant på Windows PC. Valorant Hacks.",
					imageAlt: "Valorant Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Valorant Hacks",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Köp Valorant Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Valorant Hacks",
							paragraphs: [
								"Valorant Hacks kombinerar ESP wallhack, radar hack och valorant aimbot som undetected paket för Valorant på Windows PC. the Valorant hacks pillar for ESP and Aimbot.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Vanguard anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard anti-cheat-underhåll.",
								"support@valoranthack.net för support och juridik.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Valorant Cheat Download | Instant Access",
					description: "Valorant Cheat Download: digital license download after payment. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Valorant Cheat Download",
					intro: "Valorant Hacks kombinerar ESP wallhack, radar hack och valorant aimbot som undetected paket för Valorant på Windows PC. Valorant Cheat Download.",
					imageAlt: "Valorant Hacks download and install delivery flow",
					galleryTitle: "Valorant Cheat Download",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Köp Valorant Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Valorant Cheat Download",
							paragraphs: [
								"Valorant Hacks kombinerar ESP wallhack, radar hack och valorant aimbot som undetected paket för Valorant på Windows PC. digital license download after payment.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Vanguard anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard anti-cheat-underhåll.",
								"support@valoranthack.net för support och juridik.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Valorant Mod-meny | In-Game Toggles",
					description: "Valorant Mod-meny: in-client ESP and soft aim toggles. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Valorant Mod-meny",
					intro: "Valorant Hacks kombinerar ESP wallhack, radar hack och valorant aimbot som undetected paket för Valorant på Windows PC. Valorant Mod-meny.",
					imageAlt: "Valorant Hacks in-game menu controls",
					galleryTitle: "Valorant Mod-meny",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Köp Valorant Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Valorant Mod-meny",
							paragraphs: [
								"Valorant Hacks kombinerar ESP wallhack, radar hack och valorant aimbot som undetected paket för Valorant på Windows PC. in-client ESP and soft aim toggles.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Vanguard anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard anti-cheat-underhåll.",
								"support@valoranthack.net för support och juridik.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Valorant Soft Aim | Smooth Aim Settings",
					description: "Valorant Soft Aim: smooth soft aim settings for Windows PC. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Valorant Soft Aim",
					intro: "Valorant Hacks kombinerar ESP wallhack, radar hack och valorant aimbot som undetected paket för Valorant på Windows PC. Valorant Soft Aim.",
					imageAlt: "Valorant soft aim FOV and smoothness settings",
					galleryTitle: "Valorant Soft Aim",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Köp Valorant Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/valorant-aimbot/",
					sections: [
						{
							h2: "Valorant Soft Aim",
							paragraphs: [
								"Valorant Hacks kombinerar ESP wallhack, radar hack och valorant aimbot som undetected paket för Valorant på Windows PC. smooth soft aim settings for Windows PC.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Vanguard anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard anti-cheat-underhåll.",
								"support@valoranthack.net för support och juridik.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Bästa Valorant Hacks | Buyer Checklist",
					description: "Bästa Valorant Hacks: what to compare before buying Valorant hacks. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Bästa Valorant Hacks",
					intro: "Valorant Hacks kombinerar ESP wallhack, radar hack och valorant aimbot som undetected paket för Valorant på Windows PC. Bästa Valorant Hacks.",
					imageAlt: "Valorant Hacks overview for Valorant on PC",
					galleryTitle: "Bästa Valorant Hacks",
					heroImage: "/images/valorant-hacks-esp.webp",
					ctaPrimary: "Köp Valorant Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Bästa Valorant Hacks",
							paragraphs: [
								"Valorant Hacks kombinerar ESP wallhack, radar hack och valorant aimbot som undetected paket för Valorant på Windows PC. what to compare before buying Valorant hacks.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Vanguard anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard anti-cheat-underhåll.",
								"support@valoranthack.net för support och juridik.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Valorant Aimbot Hack | Soft Aim Assist",
					description: "Valorant Aimbot Hack: undetected Aimbot hack assist for Valorant. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Valorant Aimbot Hack",
					intro: "Valorant Hacks kombinerar ESP wallhack, radar hack och valorant aimbot som undetected paket för Valorant på Windows PC. Valorant Aimbot Hack.",
					imageAlt: "Valorant aimbot hack controls and bone priority",
					galleryTitle: "Valorant Aimbot Hack",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Köp Valorant Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/valorant-aimbot/",
					sections: [
						{
							h2: "Valorant Aimbot Hack",
							paragraphs: [
								"Valorant Hacks kombinerar ESP wallhack, radar hack och valorant aimbot som undetected paket för Valorant på Windows PC. undetected Aimbot hack assist for Valorant.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Vanguard anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard anti-cheat-underhåll.",
								"support@valoranthack.net för support och juridik.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Valorant ESP Hack | Boxes & Spike",
					description: "Valorant ESP Hack: ESP hack boxes, spike markers, and distance. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Valorant ESP Hack",
					intro: "Valorant Hacks kombinerar ESP wallhack, radar hack och valorant aimbot som undetected paket för Valorant på Windows PC. Valorant ESP Hack.",
					imageAlt: "Valorant ESP hack boxes and spike markers",
					galleryTitle: "Valorant ESP Hack",
					heroImage: "/images/valorant-hacks-wallhack.webp",
					ctaPrimary: "Köp Valorant Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/valorant-esp/",
					sections: [
						{
							h2: "Valorant ESP Hack",
							paragraphs: [
								"Valorant Hacks kombinerar ESP wallhack, radar hack och valorant aimbot som undetected paket för Valorant på Windows PC. ESP hack boxes, spike markers, and distance.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Vanguard anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard anti-cheat-underhåll.",
								"support@valoranthack.net för support och juridik.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Valorant Unlock All | What It Means",
					description: "Valorant Unlock All: unlock-all searches vs real ESP and Aimbot tools. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Valorant Unlock All",
					intro: "Valorant Hacks kombinerar ESP wallhack, radar hack och valorant aimbot som undetected paket för Valorant på Windows PC. Valorant Unlock All.",
					imageAlt: "Valorant Hacks license features overview",
					galleryTitle: "Valorant Unlock All",
					heroImage: "/images/valorant-hacks-radar.webp",
					ctaPrimary: "Köp Valorant Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Valorant Unlock All",
							paragraphs: [
								"Valorant Hacks kombinerar ESP wallhack, radar hack och valorant aimbot som undetected paket för Valorant på Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Vanguard anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard anti-cheat-underhåll.",
								"support@valoranthack.net för support och juridik.",
							],
						},
					],
				},
				privacy: {
					title: "Integritetspolicy | Valorant Hacks",
					description: "Integritetspolicy for Valorant Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Integritetspolicy",
					intro: "Valorant Hacks kombinerar ESP wallhack, radar hack och valorant aimbot som undetected paket för Valorant på Windows PC. Integritetspolicy for valoranthack.net and Valorant licenses.",
					imageAlt: "valorant hacks",
					galleryTitle: "valorant hacks",
					heroImage: "/images/valorant-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Valorant Hacks kombinerar ESP wallhack, radar hack och valorant aimbot som undetected paket för Valorant på Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on valoranthack.net.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Valorant Hacks kombinerar ESP wallhack, radar hack och valorant aimbot som undetected paket för Valorant på Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Kontrollera Updates efter Vanguard anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@valoranthack.net för support och juridik.",
								"Email: support@valoranthack.net",
							],
						},
					],
				},
				refund: {
					title: "Återbetalningspolicy | Valorant Hacks",
					description: "Återbetalningspolicy for Valorant Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Återbetalningspolicy",
					intro: "Valorant Hacks kombinerar ESP wallhack, radar hack och valorant aimbot som undetected paket för Valorant på Windows PC. Återbetalningspolicy for valoranthack.net and Valorant licenses.",
					imageAlt: "valorant hacks",
					galleryTitle: "valorant hacks",
					heroImage: "/images/valorant-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Valorant Hacks kombinerar ESP wallhack, radar hack och valorant aimbot som undetected paket för Valorant på Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard anti-cheat-underhåll.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Valorant Hacks kombinerar ESP wallhack, radar hack och valorant aimbot som undetected paket för Valorant på Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Kontrollera Updates efter Vanguard anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@valoranthack.net för support och juridik.",
								"Email: support@valoranthack.net",
							],
						},
					],
				},
				terms: {
					title: "Användarvillkor | Valorant Hacks",
					description: "Användarvillkor for Valorant Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Användarvillkor",
					intro: "Valorant Hacks kombinerar ESP wallhack, radar hack och valorant aimbot som undetected paket för Valorant på Windows PC. Användarvillkor for valoranthack.net and Valorant licenses.",
					imageAlt: "valorant hacks",
					galleryTitle: "valorant hacks",
					heroImage: "/images/valorant-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Valorant Hacks kombinerar ESP wallhack, radar hack och valorant aimbot som undetected paket för Valorant på Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard anti-cheat-underhåll.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Valorant Hacks kombinerar ESP wallhack, radar hack och valorant aimbot som undetected paket för Valorant på Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Riot Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@valoranthack.net för support och juridik.",
								"Email: support@valoranthack.net",
							],
						},
					],
				},
			},
		},
	};
