import { HERO_IMAGES, clampTitle, clampDesc, section, stripZadeyoFromMeta, EXT } from './constants.mjs';

/** Richest English page content — source of truth for structure. */
export const enPages = {
	home: {
		title: 'Valorant Hacks | Official Windows PC Site',
		description:
			'Official Valorant Hacks site for Windows PC. Compare ESP, aimbot, and radar — then buy. Built for NA, LATAM, Brazil, and worldwide.',
		h1: 'Valorant Hacks',
		intro:
			'Valorant Hacks is the official Windows PC site for Valorant. Check features, plans, and live Vanguard status before you buy — for NA, LATAM, and every Riot region.',
		imageAlt: "Valorant Hacks homepage hero — ESP and aimbot for Valorant",
		galleryTitle: 'In-game look',
		ctaPrimary: 'Get Access',
		ctaSecondary: 'See all features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'Built for every Riot region',
				'Valorant Hacks is the official Windows PC site. Compare features, store, and status — then buy on the product page.',
				'English is first for NA and Canada. Spanish and Portuguese cover LATAM and Brazil. All 22 locales stay live for worldwide search.',
				`Official seasons, patches, and anti-cheat updates come from ${EXT.valorant} and ${EXT.vanguard}. We rebuild ESP, radar, and Aimbot modules when those patches require maintenance — then post status on the <a href="/updates/">Status page</a>.`,
				'Start with the <a href="/valorant-hacks/">Valorant Hacks overview</a>, <a href="/valorant-esp/">ESP guide</a>, and <a href="/valorant-aimbot/">Aimbot controls</a> if you are comparing tools before checkout.',
			),
			section(
				'ESP, aimbot, and radar in one license',
				'Instead of stacking separate tools, Valorant Hacks bundles player ESP, spike markers, 2D radar overlays, and Aimbot profiles in one package built for Competitive, Unrated, and Deathmatch.',
				'Browse the <a href="/valorant-esp/">ESP</a>, <a href="/valorant-aimbot/">Aimbot</a>, and <a href="/valorant-radar-hack/">radar</a> pages for control details — or jump to <a href="/pricing/">Store</a> for monthly and lifetime options.',
				`Before patch days, check ${EXT.status} for Riot Games service health, then confirm our maintenance notes so you are not queueing on an outdated build.`,
				'Ready to buy? Open <a href="/pricing/">Store</a>, follow <a href="/setup/">Setup</a> after delivery, and keep <a href="/faq/">FAQ</a> / <a href="/support/">Support</a> bookmarked for license questions.',
			),
		],
	},
	'valorant-esp': {
		title: 'Valorant ESP Overlay | Valorant Hacks',
		description:
			'Valorant ESP and wallhack for Windows PC — player boxes, distance, and spike filters in matches. Included in Valorant Hacks with Vanguard updates.',
		h1: 'ESP',
		intro:
			'Valorant ESP shows agents through walls with boxes and distance. Part of the same Valorant Hacks license.',
		imageAlt: "Valorant ESP player boxes and distance readouts in a match",
		galleryTitle: 'ESP in match',
		ctaPrimary: 'Get Access',
		ctaSecondary: 'Valorant Hacks overview',
		ctaSecondaryHref: '/valorant-hacks/',
		sections: [
			section(
				'What Valorant ESP shows',
				'Boxes, distance, and filters for agents, enemies, ultimates, and the spike. Toggle categories so overlays stay clear on Haven, Split, and Deathmatch.',
				'On Competitive, Unrated, and Deathmatch, that visibility gap is often the difference between a clean site take and a lost round. ESP ships with radar and Aimbot in one license.',
				`Valorant’s live seasons and map updates are published by Riot Games (${EXT.valorant}). When sites or agents rotate, ESP categories stay useful because they track players and the spike — not a single static landmark.`,
			),
			section(
				'Player, spike, and ability overlays',
				'Toggle enemy player outlines, spike markers, and ability cues so only match-critical overlays stay active during rotations.',
				'Distance readouts and snapline options help you control engagement range. Team and enemy colour coding supports Competitive, Unrated, and Deathmatch.',
				'Compare category detail on this page and pair visibility with the <a href="/valorant-radar-hack/">radar hack</a> for flanks outside your FOV.',
				[
					'Enemy player ESP outlines with distance',
					'Spike markers for site holds',
					'Agent and ability filters',
					'Toggleable categories to reduce overlay noise',
				],
			),
			section(
				'Undetected ESP with Vanguard maintenance',
				'Valorant Hacks ESP is maintained for Valorant with rebuilds after Vanguard patches. Check the <a href="/updates/">Status page</a> before you queue — no cheat guarantees permanent undetected status.',
				`Read ${EXT.vanguard} for how anti-cheat updates ship, then cross-check our <a href="/updates/">Vanguard maintenance notes</a> after major patches.`,
				'Checkout includes instant digital delivery for Windows 10 and 11. After purchase, follow the <a href="/setup/">Setup guide</a> and tune overlays before your first match.',
			),
			section(
				'ESP next steps',
				'ESP wins information; Aimbot covers the firefight. Review <a href="/valorant-aimbot/">Aimbot controls</a> if you want one license for visibility and assist.',
				'Compare monthly ($35) and lifetime ($150) on <a href="/pricing/">Store</a>, then keep <a href="/support/">Support</a> ready if activation needs a human reply.',
				'Still researching? The <a href="/valorant-hacks/">Valorant Hacks overview</a> summarizes the full stack.',
			),
		],
	},
	'valorant-aimbot': {
		title: 'Valorant Aimbot | Valorant Hacks',
		description:
			'Valorant aimbot and soft aim for Windows PC — FOV, smoothness, and bone priority you can tune. Included in Valorant Hacks with Vanguard updates.',
		h1: 'Aimbot',
		intro:
			'Valorant aimbot and soft aim you can tune per weapon. Included in the same Valorant Hacks license.',
		imageAlt: "Valorant aimbot and soft aim controls on Windows PC",
		galleryTitle: 'Aimbot view',
		ctaPrimary: 'Get Access',
		ctaSecondary: 'See ESP wallhack',
		ctaSecondaryHref: '/valorant-esp/',
		sections: [
			section(
				'Aimbot controls',
				'Valorant mixes long-range Operator fights with close-range SMG pushes. Valorant Hacks Aimbot includes smoothness, FOV, and sensitivity controls — with hotkey toggles mid-match.',
				'Bone priority and target selection options cover closest player, lowest health, or highest-threat targets during site takes and retakes.',
				`Weapon balance and season rules change via ${EXT.valorant}. Revisit Aimbot FOV and smoothness after major combat patches so assist still matches the live TTK windows.`,
			),
			section(
				'Per-weapon Aimbot profiles',
				'Save separate Aimbot profiles for rifles, SMGs, and Operator. Switch between long-range fights and Haven clears without reopening menus every match.',
				'Prefer softer tracking? Keep smoothness high and FOV tight. Aimbot ships alongside <a href="/valorant-esp/">ESP</a> and <a href="/valorant-radar-hack/">2D radar</a> in the same license.',
				'Use in-client hotkeys to toggle assist mid-round.',
				[
					'Smoothness, FOV, and sensitivity sliders',
					'Bone priority and threat-based targeting',
					'Hotkeys to toggle Aimbot mid-match',
					'Per-weapon profile slots',
				],
			),
			section(
				'Vanguard maintenance for Aimbot',
				'Valorant Hacks rebuilds Aimbot behavior when Vanguard or major Valorant patches land. Maintenance notes appear on the <a href="/updates/">Status page</a> so you know when a new build is live.',
				`Cross-check service health on ${EXT.status} and anti-cheat context on ${EXT.vanguard}, then follow our <a href="/updates/">Vanguard maintenance notes</a> before queueing on patch day.`,
				'Responsible settings matter — undetected status requires ongoing maintenance, not set-and-forget configs. Start with conservative smoothness, then tune.',
			),
			section(
				'Buy Aimbot with ESP',
				'Every plan includes Aimbot plus ESP and radar. Compare options on <a href="/pricing/">Store</a>, then activate with the <a href="/setup/">Setup guide</a>.',
				'Questions about delivery or profiles? Use <a href="/faq/">FAQ</a> or email <a href="/support/">Support</a> with your order ID.',
				'Want the full control list first? Open <a href="/features/">Features</a> before checkout.',
			),
		],
	},
	features: {
		title: 'Valorant Features | Valorant Hacks',
		description:
			'Everything in one Valorant license for Windows PC — ESP, soft aim, radar, spike tools, and patch updates after Vanguard. See what is included.',
		h1: 'Features',
		intro:
			'Everything included in one license for Valorant on Windows PC.',
		imageAlt: "Valorant Hacks features — ESP, soft aim, and radar screenshots",
		galleryTitle: 'In-game look',
		ctaPrimary: 'Get Access',
		ctaSecondary: 'View store',
		ctaSecondaryHref: '/pricing/',
		sections: [
			section(
				'ESP and wallhack',
				'Enemy player ESP, spike markers, distance readouts, snaplines, and toggleable categories so overlays stay clear on Haven, Split, and Deathmatch.',
				'Team and enemy colour coding supports Competitive, Unrated, and Deathmatch. Deep-dive the <a href="/valorant-esp/">ESP page</a> for category-level detail.',
				`Map and agent rotations evolve with ${EXT.valorant} updates — toggleable ESP categories keep overlays useful when sites change.`,
			),
			section(
				'Radar and Aimbot controls',
				'2D radar overlay with directional threat cues, configurable range for site holds, plus Aimbot smoothness, FOV, bone priority, hotkeys, and per-weapon profiles.',
				'All tools share in-client toggles so you can adjust ESP, radar, and Aimbot during live Valorant sessions. See <a href="/valorant-radar-hack/">radar</a> and <a href="/valorant-aimbot/">Aimbot</a> for settings walkthroughs.',
				'Prefer a menu-first workflow? Use hotkeys mid-round without alt-tabbing.',
			),
			section(
				'Licensing, delivery, and Vanguard maintenance',
				'Monthly ($35) and lifetime ($150) licenses with instant digital delivery. Vanguard maintenance rebuilds publish on the <a href="/updates/">Status page</a> after anti-cheat or game patches.',
				`Monitor ${EXT.status} on patch days, then confirm rebuild notes before you queue. Setup and billing help lives on <a href="/support/">Support</a> and support@valoranthack.net.`,
				'Next step: compare plans on <a href="/pricing/">Store</a> or read <a href="/valorant-hacks/">the product overview</a>.',
			),
		],
	},
	pricing: {
		title: 'Valorant Hacks Pricing | $35/mo or $150 Life',
		description:
			'Valorant hacks pricing: $35/month or $150 lifetime for ESP, soft aim, and radar on Windows PC. Instant delivery — pick a plan.',
		h1: 'Valorant Hacks Pricing — Monthly & Lifetime',
		intro:
			'Choose monthly or lifetime access to undetected Valorant Hacks — ESP wallhack, radar hack, and Aimbot for Valorant on Windows PC. Instant digital delivery after payment.',
		imageAlt: "Valorant Hacks store plans for monthly and lifetime licenses",
		galleryTitle: 'Valorant Hacks package visuals',
		ctaPrimary: 'Buy Valorant Hacks',
		ctaSecondary: 'Read setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'Monthly and lifetime Valorant Hacks plans',
				'Monthly license: $35 USD for 30 days of full ESP wallhack, radar hack, and Aimbot access with Vanguard maintenance included during your term.',
				'Lifetime license: $150 USD for long-term access to the same undetected Valorant Hacks package — ideal if you play Valorant regularly across seasons.',
				'Both plans unlock the same feature stack described on <a href="/features/">Features</a>. Choose monthly to test, or lifetime if you already know you want the full toolkit.',
			),
			section(
				'What every plan includes',
				'Player ESP wallhack, spike markers, 2D radar overlays, Aimbot controls, in-client toggles, and maintenance rebuilds after Vanguard anti-cheat or major Valorant patches.',
				`Season calendars and client updates come from ${EXT.valorant}. Active licenses receive rebuild access when we publish maintenance on <a href="/updates/">Updates</a>.`,
				'Digital delivery starts after payment confirmation. Keep your order reference for <a href="/support/">Support</a> requests and follow <a href="/setup/">Setup</a> for first launch.',
			),
			section(
				'Refund, billing, and buying checklist',
				'Review the <a href="/refund-policy/">Refund Policy</a> before purchase. For billing or delivery issues, contact Support with your order details.',
				'Prices are listed in USD. Availability is worldwide for Windows 10 and 11 PCs.',
				'Still comparing tools? Read <a href="/valorant-hacks/">Valorant hacks</a>, <a href="/valorant-hacks/">undetected status</a>, and <a href="/faq/">FAQ</a> before you checkout.',
			),
		],
	},
	setup: {
		title: 'Valorant Hacks Setup | Windows PC Guide',
		description:
			'Set up valorant hacks on Windows PC — activate ESP boxes, soft aim profiles, and . Check Vanguard updates before your first queue.',
		h1: 'Valorant Hacks Setup — Windows PC Guide',
		intro:
			'Install and configure Valorant Hacks for Valorant on Windows 10 or 11. Activate your license, load ESP wallhack and Aimbot profiles, and verify Vanguard maintenance status before queueing.',
		imageAlt: "Valorant Hacks setup guide screenshot for Windows PC",
		galleryTitle: 'Valorant Hacks setup visuals',
		ctaPrimary: 'Buy Valorant Hacks',
		ctaSecondary: 'Contact support',
		ctaSecondaryHref: '/support/',
		sections: [
			section(
				'Before you install Valorant Hacks',
				'Confirm your order email and license details. Check the <a href="/updates/">Updates page</a> for the latest Vanguard maintenance build before launching Valorant.',
				`Also glance at ${EXT.status} if Riot Games services look unstable on patch day — a platform outage is not a license fault.`,
				'Valorant Hacks requires Windows 10 or 11. Close conflicting overlay software that may interfere with ESP wallhack or Aimbot toggles.',
			),
			section(
				'Activate ESP wallhack and Aimbot profiles',
				'Follow the delivery instructions in your license email. Load default Valorant Hacks ESP categories for agents, enemies, and the spike — then tune radar range and Aimbot smoothness to your playstyle.',
				'Use in-client hotkeys to toggle ESP, radar, and Aimbot mid-match. Details for Vanguard module live on <a href="/valorant-esp/">ESP</a>, <a href="/valorant-aimbot/">Aimbot</a>, and <a href="/valorant-hacks/">mod menu</a>.',
				'Prefer a soft tracking feel? Start with the <a href="/valorant-aimbot/">soft aim</a> recommendations before raising aggressiveness.',
			),
			section(
				'After Valorant or Vanguard anti-cheat patches',
				'When Riot Games ships a major Valorant update or Vanguard anti-cheat patch, revisit Updates before queueing. Download maintenance rebuilds when posted.',
				`Official anti-cheat background: ${EXT.vanguard}. Our practical workflow is documented on the <a href="/updates/">Vanguard bypass page</a> and <a href="/valorant-hacks/">undetected guide</a>.`,
				'Contact <a href="/support/">Support</a> with your order ID if activation fails after a patch — include Windows version and error details for faster replies.',
			),
		],
	},
	updates: {
		title: 'Valorant Hacks Updates | Vanguard Maintenance Log',
		description:
			'Valorant hacks update log: Vanguard rebuilds for ESP boxes, soft aim, and radar on Windows PC. Check status before queueing after patches.',
		h1: 'Valorant Hacks Updates — Maintenance Log',
		intro:
			'Track Vanguard maintenance and Valorant patch rebuilds for the undetected ESP wallhack, radar hack, and Aimbot package. Check here before queueing after major updates.',
		imageAlt: "Valorant Hacks live status after Vanguard and game patches",
		galleryTitle: 'Valorant patch and maintenance visuals',
		ctaPrimary: 'Buy Valorant Hacks',
		ctaSecondary: 'Undetected status guide',
		ctaSecondaryHref: '/valorant-hacks/',
		sections: [
			section(
				'Why the Updates page matters',
				'Valorant and Vanguard anti-cheat receive frequent patches. Valorant Hacks publishes maintenance notes when ESP wallhack, radar, or Aimbot behavior needs a rebuild.',
				`Use ${EXT.status} for Riot Games platform health and this page for Valorant Hacks build status — both matter on big update days.`,
				'Checking this log before you queue reduces surprises after game days or seasonal launches on Competitive and Deathmatch.',
			),
			section(
				'What maintenance entries cover',
				'Entries note Vanguard anti-cheat compatibility status, rebuilt ESP wallhack overlays, radar range fixes, Aimbot tuning after weapon balance changes, and digital delivery of new builds to active licenses.',
				'Lifetime and monthly subscribers receive rebuild access during active license terms. See <a href="/pricing/">Pricing</a> if you need to renew.',
				'For context on why rebuilds happen, read the <a href="/updates/">Vanguard bypass guide</a> and <a href="/valorant-hacks/">undetected Valorant hacks</a> explainer.',
			),
			section(
				'Staying undetected after patches',
				'No cheat guarantees permanent undetected status. Combine maintenance updates with responsible in-game settings and patch awareness.',
				`Follow season notes from ${EXT.valorant}, then confirm our rebuild is live before you queue.`,
				'For urgent status questions after a Vanguard update, contact <a href="/support/">Support</a> with your license tier and last played build version.',
			),
		],
	},
	faq: {
		title: 'Valorant Hacks FAQ | ESP, Soft Aim & Radar Answers',
		description:
			'Valorant hacks FAQ: ESP boxes, soft aim, Vanguard maintenance, and pricing for PC. Clear answers before you buy.',
		h1: 'Valorant Hacks FAQ — Common Questions',
		intro:
			'Answers about undetected Valorant Hacks — ESP wallhack, radar hack, Aimbot, Vanguard maintenance, checkout, and Valorant compatibility on Windows PC.',
		imageAlt: "Valorant Hacks FAQ — delivery, setup, and update answers",
		galleryTitle: 'Valorant Hacks FAQ visuals',
		ctaPrimary: 'Buy Valorant Hacks',
		ctaSecondary: 'Contact support',
		ctaSecondaryHref: '/support/',
		sections: [
			section(
				'What is Valorant Hacks?',
				'Valorant Hacks is an undetected cheat package for Valorant on Windows PC. It includes ESP wallhack, 2D radar-style awareness, and Aimbot controls with Vanguard maintenance updates.',
				'Packages cover Competitive, Unrated, and Deathmatch. Explore <a href="/features/">Features</a> for the full control list and <a href="/valorant-esp/">ESP</a> / <a href="/valorant-aimbot/">Aimbot</a> for module detail.',
				`Valorant itself is published by Riot Games (${EXT.valorant}). Cheats are third-party tools and may violate Riot Games' rules — use is at your own risk.`,
			),
			section(
				'Are Valorant Hacks undetected in 2026?',
				'Valorant Hacks is maintained with rebuilds after Vanguard anti-cheat and game patches. Check the <a href="/updates/">Updates page</a> for current status — no cheat can guarantee permanent undetected operation.',
				'Read <a href="/valorant-hacks/">undetected Valorant hacks</a> and the <a href="/updates/">Vanguard guide</a> for the maintenance workflow.',
				'Responsible settings and reading maintenance notes before queueing are essential.',
			),
			section(
				'Delivery, pricing, and support',
				'Licenses deliver digitally after payment confirmation. Monthly is $35; lifetime is $150 USD — see <a href="/pricing/">Pricing</a>.',
				'Contact support@valoranthack.net or the <a href="/support/">Support page</a> with order details for setup or billing help. First launch steps are on <a href="/setup/">Setup</a>.',
				'Refund eligibility is covered in the <a href="/refund-policy/">Refund Policy</a>.',
			),
		],
	},
	support: {
		title: 'Valorant Hacks Support | Help & Contact',
		description:
			'Contact valorant hacks support for licenses, ESP setup, soft aim profiles, and on Windows PC. Include your order ID for faster help.',
		h1: 'Valorant Hacks Support — Contact Us',
		intro:
			'Get help with Valorant Hacks licenses, checkout, ESP wallhack setup, Aimbot profiles, and Vanguard maintenance for Valorant on Windows PC.',
		imageAlt: "Valorant Hacks support page for license and setup help",
		galleryTitle: 'Valorant Hacks support resources',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'When to contact support',
				'Reach out for order issues, license activation failures, ESP wallhack or Aimbot setup questions, and post-patch problems after Vanguard maintenance rebuilds.',
				'Include your order ID, license tier (monthly or lifetime), Windows version, and a clear description of the issue.',
				'Many answers already live in <a href="/faq/">FAQ</a>, <a href="/setup/">Setup</a>, and <a href="/updates/">Updates</a> — check those first for faster resolution.',
			),
			section(
				'Response times and scope',
				'Support requests are reviewed daily. Valorant Hacks support covers delivery, billing, setup, and maintenance — not in-game coaching or account recovery for Riot Games bans.',
				`Account and game policy questions belong with Riot Games. We can help with license delivery and product configuration only.`,
				'Check the Updates page and FAQ before opening a ticket — many post-patch questions are answered there.',
			),
			section(
				'Self-service resources',
				'Setup guide, Features list, Updates log, Refund Policy, and Terms of Use are linked from the footer. Vanguard bypass notes live on the dedicated <a href="/updates/">Vanguard anti-cheat page</a>.',
				'Email: support@valoranthack.net',
				'Ready to purchase or renew? Open <a href="/pricing/">Pricing</a>. Need feature detail first? See <a href="/features/">Features</a>.',
			),
		],
	},
	undetected: {
		title: 'Undetected Valorant Hacks 2026 | Vanguard Maintenance',
		description:
			'Undetected valorant hacks with Vanguard maintenance for ESP boxes, soft aim, and radar on Windows PC. Check status before you queue.',
		h1: 'Undetected Valorant Hacks — Vanguard Maintenance',
		intro:
			'How Valorant Hacks stays maintained for Valorant after Vanguard anti-cheat patches — ESP wallhack, radar hack, and Aimbot rebuilds for Windows PC.',
		imageAlt: "Valorant Hacks undetected status overview for Windows PC",
		galleryTitle: 'Undetected Valorant Hacks visuals',
		ctaPrimary: 'Buy Valorant Hacks',
		ctaSecondary: 'Vanguard bypass guide',
		ctaSecondaryHref: '/updates/',
		sections: [
			section(
				'What undetected means for Valorant Hacks',
				'Undetected Valorant Hacks means the package is actively maintained against Vanguard anti-cheat and major Valorant patches — not that detection is impossible forever.',
				'Rebuilds target ESP wallhack overlays, radar behavior, and Aimbot signatures after Vanguard security updates.',
				`Anti-cheat technology is documented by ${EXT.vanguard}; Valorant client updates ship through ${EXT.valorant}. Undetected status is an ongoing process tied to those releases.`,
			),
			section(
				'Vanguard maintenance workflow',
				'When Vanguard anti-cheat or Valorant updates ship, the team assesses ESP, radar, and Aimbot modules, publishes status on the <a href="/updates/">Updates page</a>, and delivers rebuilt builds to active licenses.',
				`On patch mornings, also check ${EXT.status} for launcher outages that can look like product failures.`,
				'Deep technical workflow: <a href="/updates/">Vanguard bypass Valorant guide</a>. Feature stack: <a href="/features/">Features</a>.',
			),
			section(
				'Responsible use and next steps',
				'Combine maintenance with conservative in-game settings. Read the <a href="/faq/">FAQ</a> and Updates log regularly — undetected status is not a one-time promise.',
				'Lifetime and monthly plans include rebuild access during active terms — see <a href="/pricing/">Pricing</a>.',
				'New buyers should also read <a href="/valorant-hacks/">Valorant hacks 2026</a> and complete <a href="/setup/">Setup</a> after delivery.',
			),
		],
	},
	wallhack: {
		title: 'Valorant Wallhack 2026 | ESP Boxes & Visibility',
		description:
			'Valorant wallhack ESP with player boxes and spike markers for Windows PC. Undetected valorant hacks — learn overlays and buy.',
		h1: 'Valorant Wallhack — ESP Boxes & Visibility',
		intro:
			'Valorant wallhack ESP for Valorant — see players, abilities, and the spike through toggleable wallhack overlays built for Competitive, Unrated, and Deathmatch.',
		imageAlt: "Valorant wallhack visibility through walls in a match",
		galleryTitle: 'Valorant wallhack ESP gallery',
		ctaPrimary: 'Buy Valorant Hacks',
		ctaSecondary: 'Valorant ESP page',
		ctaSecondaryHref: '/valorant-esp/',
		sections: [
			section(
				'Wallhack ESP vs raw aim tools',
				'A Valorant wallhack focuses on information — player outlines, spike markers, ability cues — rather than automatic aiming. Valorant Hacks bundles wallhack ESP with radar and optional Aimbot in one license.',
				'Toggle categories so only the Valorant Hacks wallhack overlays you need stay active during rotations and site holds.',
				'For the broader ESP keyword page see <a href="/valorant-esp/">Valorant ESP</a>; for combat assist see <a href="/valorant-aimbot/">Aimbot</a>.',
			),
			section(
				'Map coverage for wallhack ESP',
				'Wallhack overlays support Competitive, Unrated, and Deathmatch with distance readouts and snaplines for engagement control.',
				`Season maps and POI changes are announced via ${EXT.valorant}. Wallhack remains useful because it tracks entities, not fixed landmarks alone.`,
				'Pair wallhack awareness with <a href="/valorant-radar-hack/">radar hack</a> cues for flanks during building and rooftop fights.',
			),
			section(
				'Undetected wallhack maintenance',
				'ESP wallhack modules rebuild after Vanguard anti-cheat patches. Follow the <a href="/updates/">Updates page</a> and complete checkout for instant license delivery on Windows PC.',
				'Learn the full maintenance story on <a href="/valorant-hacks/">undetected Valorant hacks</a> and <a href="/updates/">Vanguard bypass</a>.',
				'Ready to buy? Compare <a href="/pricing/">Pricing</a> or continue to the <a href="/valorant-esp/">ESP hack</a> landing for alternate search wording.',
			),
		],
	},
	radar: {
		title: 'Valorant Radar Hack | Valorant Hacks',
		description:
			'Valorant radar hack for Windows PC — flank cues near spike sites without filling the screen. Included in Valorant Hacks with ESP and Vanguard updates.',
		h1: 'Radar',
		intro:
			'A Valorant radar hack for threats outside your view. Included in the same Valorant Hacks license.',
		imageAlt: "Valorant 2D radar overlay showing nearby threats",
		galleryTitle: 'Radar overlay',
		ctaPrimary: 'Get Access',
		ctaSecondary: 'See ESP wallhack',
		ctaSecondaryHref: '/valorant-esp/',
		sections: [
			section(
				'What the radar shows',
				'Site fights happen around corners, windows, and flanks. A 2D radar overlay shows nearby player threats outside direct line of sight so you can reposition before a rotate.',
				'Valorant Hacks radar complements <a href="/valorant-esp/">ESP</a> markers during site takes and retakes.',
				`Mode rules and seasonal changes come from ${EXT.valorant}. Radar range remains configurable when map scale or agent mobility shifts.`,
			),
			section(
				'Configurable radar range',
				'Adjust radar range for early rotations versus tight site holds. Directional cues highlight flanks during building clears on Competitive, Unrated, and Deathmatch.',
				'Toggle radar alongside ESP and Aimbot with in-client hotkeys during live matches.',
				'Combat follow-up lives on <a href="/valorant-aimbot/">Aimbot</a> when you convert radar info into a fight.',
			),
			section(
				'Maintenance and licensing',
				'Radar modules receive Vanguard maintenance rebuilds with the full Valorant Hacks package. Monthly and lifetime licenses include digital delivery — see <a href="/pricing/">Store</a>.',
				'Check <a href="/updates/">Status</a> after major Valorant patches before relying on previous radar configs.',
				'New to the stack? Start at <a href="/features/">Features</a> or the <a href="/valorant-hacks/">product overview</a>.',
			),
		],
	},
	'vanguard': {
		title: 'Vanguard Bypass Valorant | Valorant Hacks Maintenance',
		description:
			'How valorant hacks rebuild after Vanguard patches — ESP boxes, soft aim, and radar maintenance for Windows PC. Read before queueing.',
		h1: 'Vanguard Bypass — Valorant Hacks Maintenance',
		intro:
			'Understand Vanguard anti-cheat maintenance for Valorant Hacks — how ESP wallhack, radar hack, and Aimbot rebuild after Valorant security updates.',
		imageAlt: "Valorant Hacks maintenance after a Vanguard patch",
		galleryTitle: 'Vanguard maintenance visuals',
		ctaPrimary: 'Buy Valorant Hacks',
		ctaSecondary: 'Check updates',
		ctaSecondaryHref: '/updates/',
		sections: [
			section(
				'Vanguard anti-cheat overview',
				`Vanguard anti-cheat is Riot Games' anti-cheat for Valorant on PC (see ${EXT.vanguard}). Security updates can affect ESP wallhack, radar, and Aimbot behavior — requiring maintenance rebuilds for undetected packages.`,
				`Valorant Hacks monitors Vanguard patch notes and Valorant seasonal updates from ${EXT.valorant} to schedule module reviews.`,
				'“Vanguard bypass” in our wording means timely maintenance — not a permanent free pass around anti-cheat.',
			),
			section(
				'What happens after a Vanguard patch',
				'The team tests ESP overlays, radar signatures, and Aimbot profiles against the new build, publishes status on <a href="/updates/">Updates</a>, and ships rebuilt packages to active licenses.',
				`Confirm Riot Games service health on ${EXT.status} if the launcher or matchmaking fails during the same window.`,
				'Avoid queueing on old builds after major patch days until maintenance notes confirm a new release. Related reading: <a href="/valorant-hacks/">undetected Valorant hacks</a>.',
			),
			section(
				'No permanent bypass guarantee',
				'Vanguard bypass in practice means timely maintenance. Read the undetected guide, <a href="/faq/">FAQ</a>, and Updates log before every session.',
				'Contact <a href="/support/">Support</a> if activation fails immediately after a posted rebuild.',
				'Buying for the first time? Compare <a href="/pricing/">Pricing</a> and finish <a href="/setup/">Setup</a> only after Updates shows a live build.',
			),
		],
	},
	'cheats-2026': {
		title: 'Valorant Hacks 2026 | ESP Soft Aim & Radar',
		description:
			'Best valorant hacks 2026: ESP boxes, soft aim, and radar for Windows PC. Undetected valorant hacks with Vanguard maintenance — compare and buy.',
		h1: 'Valorant Hacks 2026 — ESP, Soft Aim & Radar',
		intro:
			'The 2026 Valorant Hacks package for Valorant — undetected ESP wallhack, radar hack, and Aimbot with Vanguard maintenance, instant delivery, and Windows PC support.',
		imageAlt: "Valorant Hacks product overview for Valorant",
		galleryTitle: 'Valorant Hacks 2026 gallery',
		ctaPrimary: 'Buy Valorant Hacks',
		ctaSecondary: 'Compare features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'Why valorant hacks buyers choose Valorant Hacks in 2026',
				'2026 seasons bring new maps, weapons, and Vanguard anti-cheat updates. Valorant Hacks bundles ESP wallhack, radar hack, and Aimbot with active maintenance — not a stale prior-year build.',
				`Track official season messaging on ${EXT.valorant}, then use our <a href="/updates/">Updates log</a> for product rebuild timing.`,
				'Monthly ($35) and lifetime ($150) Valorant Hacks plans cover Competitive, Unrated, and Deathmatch — see <a href="/pricing/">Store</a>.',
			),
			section(
				'Full feature stack for 2026 buyers',
				'Player ESP wallhack, spike markers, 2D radar overlays, Aimbot profiles, in-client toggles, and post-patch rebuilds — one license instead of stacking separate tools.',
				'Deep links: <a href="/valorant-hacks/">Valorant hacks pillar</a>, <a href="/valorant-esp/">ESP</a>, <a href="/valorant-aimbot/">Aimbot</a>, <a href="/valorant-esp/">wallhack</a>, <a href="/valorant-radar-hack/">radar</a>, <a href="/valorant-hacks/">undetected</a>.',
				'Instant digital delivery after checkout confirmation worldwide.',
			),
			section(
				'Before you buy in 2026',
				'Read the <a href="/valorant-hacks/">Valorant hacks</a> pillar, Features, Pricing, Setup, and Updates pages. Check undetected status notes after every major patch — responsible use and maintenance awareness matter.',
				'Also compare the <a href="/valorant-hacks/">Valorant hacks</a> checklist, <a href="/blog/valorant-hacks-2026-whats-new/">2026 blog guide</a>, and <a href="/faq/">FAQ</a>.',
				'Support is available at support@valoranthack.net via the <a href="/support/">Support page</a>.',
			),
		],
	},
	hacks: {
		title: 'Valorant Hacks | Undetected ESP and Aimbot for PC',
		description:
			'Buy undetected valorant hacks for Windows PC. ESP, aimbot, and radar with Vanguard updates. Instant delivery across NA, LATAM, Brazil, and worldwide.',
		h1: 'Valorant Hacks',
		intro:
			'Buy undetected valorant hacks for Windows PC. ESP, aimbot, and radar in one license, with Vanguard rebuilds after patches.',
		imageAlt: "Valorant Hacks product page — ESP, aimbot, and radar",
		galleryTitle: 'In-game look',
		ctaPrimary: 'Get Access',
		ctaSecondary: 'View features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'ESP, aimbot, and radar',
				'Players searching for Valorant hacks usually want visibility and combat tools without stacking separate downloads. Valorant Hacks bundles player ESP, spike markers, 2D radar overlays, and configurable Aimbot in one maintained package.',
				'Coverage spans Competitive, Unrated, and Deathmatch with in-client toggles for live matches. Monthly ($35) and lifetime ($150) licenses unlock the full stack.',
				`Official game updates come from ${EXT.valorant}; our package tracks those releases via the <a href="/updates/">Status page</a>. Cross-check platform health on ${EXT.status} before patch-day queues.`,
			),
			section(
				'Competitive, Unrated, and Deathmatch',
				'Use this page for the core product overview. Deep-dive modules: <a href="/valorant-esp/">Valorant ESP</a>, <a href="/valorant-aimbot/">Valorant Aimbot</a>, and <a href="/valorant-radar-hack/">radar hack</a>.',
				'Read agents before you push, mark the spike, and stay aware near sites. Tune soft aim per weapon for Haven, Split, and long-range maps.',
				'Blog guides: <a href="/blog/valorant-hacks-complete-guide-2026/">complete guide</a> and <a href="/blog/valorant-hacks-buyers-guide/">buyers guide</a>.',
			),
			section(
				'How to start',
				'Buy a plan, get your license by email, then follow setup. Check Status after every major patch.',
				'Compare the <a href="/valorant-esp/">ESP</a>, <a href="/valorant-aimbot/">Aimbot</a>, and <a href="/features/">Features</a> pages — or review <a href="/pricing/">Store</a> for monthly and lifetime licenses.',
				'Digital delivery runs after checkout for Windows 10 and 11 PCs worldwide. After purchase, follow <a href="/setup/">Setup</a> and keep <a href="/support/">Support</a> ready with your order ID.',
			),
			section(
				'Undetected status with Vanguard maintenance',
				'Undetected Valorant hacks require rebuilds after Vanguard and major Valorant patches. Check Status before queueing — maintenance notes confirm when a new build is live. No package can promise permanent undetected status.',
				`See ${EXT.vanguard} for anti-cheat background and our <a href="/updates/">Vanguard maintenance notes</a> for the practical workflow.`,
				'Responsible settings and reading Status before you queue are essential.',
			),
		],
	},
	'cheat-download': {
		title: 'Valorant Hack Download 2026 | Instant Access',
		description:
			'Valorant hack download with instant license delivery — ESP boxes, soft aim, and radar for Windows PC. Buy, activate, and play.',
		h1: 'Valorant Hack Download — Instant License Delivery',
		intro:
			'How Valorant hack download works for Valorant — digital license delivery after payment confirmation, with ESP wallhack, radar hack, and Aimbot access on Windows PC.',
		imageAlt: "Valorant Hacks download and install delivery flow",
		galleryTitle: 'Valorant hack download visuals',
		ctaPrimary: 'Buy Valorant Hacks',
		ctaSecondary: 'Setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'How Valorant hack download delivery works',
				'After checkout confirms payment, Valorant Hacks license details arrive digitally by email. No physical shipment — access begins once activation instructions are delivered.',
				'Keep your order confirmation and license email ready for the <a href="/setup/">Setup guide</a> and Support requests.',
				`If Riot Games services are down, check ${EXT.status} before assuming a download failure.`,
			),
			section(
				'What your download unlocks',
				'Every Valorant Hacks download includes player ESP, spike markers, 2D radar overlays, Aimbot profiles, and in-client toggles for Competitive, Unrated, and Deathmatch.',
				'Monthly ($35) and lifetime ($150) plans share the same feature stack — compare options on the <a href="/pricing/">Pricing page</a>.',
				'Feature detail: <a href="/features/">Features</a>. Module pages: <a href="/valorant-esp/">ESP</a>, <a href="/valorant-aimbot/">Aimbot</a>.',
			),
			section(
				'After purchase — setup and updates',
				'Follow Setup to activate ESP wallhack and Aimbot on Windows 10 or 11. When Valorant or Vanguard anti-cheat patches ship, check the <a href="/updates/">Updates page</a> for maintenance rebuilds.',
				'Contact <a href="/support/">Support</a> with your order ID if delivery or activation fails within 24 hours of purchase.',
				'Also read <a href="/valorant-hacks/">undetected status</a> so you know what “download ready” means after a patch.',
			),
		],
	},
	'mod-menu': {
		title: 'Valorant Mod Menu 2026 | ESP & Soft Aim Toggles',
		description:
			'Valorant mod menu for in-match toggles — ESP boxes, soft aim, radar, and on Windows PC. Undetected valorant hacks package.',
		h1: 'Valorant Mod Menu — In-Client Control Panel',
		intro:
			'Valorant mod menu controls for Valorant — toggle ESP wallhack categories, radar range, and Aimbot profiles mid-match without leaving your Valorant session on Windows PC.',
		imageAlt: "Valorant Hacks in-game menu controls",
		galleryTitle: 'Valorant mod menu gallery',
		ctaPrimary: 'Buy Valorant Hacks',
		ctaSecondary: 'Full feature list',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'What a Valorant mod menu controls',
				'A Valorant mod menu is the in-client panel where you enable ESP wallhack overlays, adjust radar range, and switch Aimbot profiles during live matches. Valorant Hacks keeps those toggles accessible with hotkeys.',
				'Toggle player outlines, spike markers, ability cues, and per-weapon Aimbot settings without alt-tabbing out of Valorant.',
				'Control deep-dives: <a href="/valorant-esp/">ESP</a>, <a href="/valorant-aimbot/">Aimbot</a>, <a href="/valorant-radar-hack/">radar</a>.',
			),
			section(
				'Mod menu categories for Competitive, Unrated, and Deathmatch',
				'Separate Valorant Hacks ESP categories for players, the spike, and abilities let you reduce overlay noise during rotations and site holds.',
				'Radar hack range and Aimbot smoothness adjust from the same mod menu — useful when ${EXT.valorant} seasons change fight distances and mobility.',
				'Soft tracking players should start with <a href="/valorant-aimbot/">soft aim</a> profiles before aggressive FOV.',
			),
			section(
				'Maintained mod menu after Vanguard patches',
				'Valorant mod menu behavior is rebuilt when Vanguard anti-cheat or major Valorant updates land. Follow the <a href="/updates/">Updates page</a> and <a href="/updates/">Vanguard bypass guide</a> before queueing on patch days.',
				'Checkout with instant digital delivery for monthly and lifetime licenses — see <a href="/pricing/">Pricing</a>.',
				'Need install steps? Open <a href="/setup/">Setup</a> after your license email arrives.',
			),
		],
	},
	'soft-aim': {
		title: 'Valorant Soft Aim 2026 | Smooth Aimbot Settings',
		description:
			'Valorant soft aim settings for natural tracking on Windows PC. Smoothness, FOV, and bone priority — included in our valorant hacks with ESP boxes.',
		h1: 'Valorant Soft Aim — Smooth Aimbot Controls',
		intro:
			'Valorant soft aim settings for Valorant — configurable Aimbot smoothness, FOV, bone priority, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: "Valorant soft aim FOV and smoothness settings",
		galleryTitle: 'Valorant soft aim gallery',
		ctaPrimary: 'Buy Valorant Hacks',
		ctaSecondary: 'Aimbot controls',
		ctaSecondaryHref: '/valorant-aimbot/',
		sections: [
			section(
				'What Valorant soft aim means',
				'Valorant Hacks soft aim refers to Aimbot behavior tuned for smooth, natural-looking tracking rather than instant snap. Smoothness, FOV, and sensitivity sliders control how assist feels in Valorant fights.',
				'Bone priority and target selection cover closest player, lowest health, or highest-threat targets during squad fights.',
				'Full Aimbot documentation: <a href="/valorant-aimbot/">Valorant Aimbot</a>. Alternate wording: <a href="/valorant-aimbot/">aimbot hack</a>.',
			),
			section(
				'Soft aim profiles per weapon class',
				'Save separate soft aim profiles for ARs, SMGs, and bolt-actions. Switch between long-range AR beams and close-quarters room clears with hotkeys mid-match.',
				`Weapon TTKs shift with ${EXT.valorant} balance patches — retune smoothness after major combat updates.`,
				'Soft aim ships alongside <a href="/valorant-esp/">ESP wallhack</a> and <a href="/valorant-radar-hack/">2D radar</a> overlays.',
			),
			section(
				'Undetected soft aim with Vanguard maintenance',
				'Aimbot modules rebuild after Vanguard anti-cheat patches. Check the <a href="/updates/">Updates page</a> before queueing — responsible settings and maintenance awareness matter for undetected play.',
				'Monthly and lifetime licenses checkout with digital delivery on Windows PC — <a href="/pricing/">Pricing</a>.',
				'Activation help: <a href="/setup/">Setup</a> · status questions: <a href="/support/">Support</a>.',
			),
		],
	},
	'best-cheats': {
		title: 'Best Valorant Hacks 2026 | Buyer Guide',
		description:
			'Best valorant hacks for 2026: ESP boxes, soft aim, and Vanguard maintenance on Windows PC. Use this checklist before checkout.',
		h1: 'Best Valorant Hacks — 2026 Buyer Guide',
		intro:
			'Compare the Valorant hacks for Valorant in 2026 — undetected ESP wallhack, radar hack, and Aimbot in one maintained package with Vanguard anti-cheat rebuilds and instant delivery.',
		imageAlt: "Valorant Hacks overview for Valorant on PC",
		galleryTitle: 'Best Valorant hacks gallery',
		ctaPrimary: 'Buy Valorant Hacks',
		ctaSecondary: 'Compare pricing',
		ctaSecondaryHref: '/pricing/',
		sections: [
			section(
				'What makes the Valorant hacks in 2026',
				'The Valorant hacks combine active Vanguard maintenance, a full ESP wallhack and radar stack, configurable Aimbot, and clear update communication — not a stale build from a prior season.',
				'Valorant Hacks covers Competitive, Unrated, and Deathmatch with in-client toggles and post-patch rebuilds.',
				`Verify the live game is healthy via ${EXT.status}, then confirm our <a href="/updates/">Updates</a> note before you judge any package “best.”`,
			),
			section(
				'Best Valorant hacks feature checklist',
				'Look for player ESP wallhack, spike markers, 2D radar overlays, Aimbot profiles, hotkey toggles, and documented maintenance after Valorant patches.',
				'Review <a href="/features/">Features</a>, <a href="/valorant-hacks/">undetected status</a>, and <a href="/valorant-hacks/">Valorant hacks 2026</a> before checkout — monthly ($35) and lifetime ($150) plans available.',
				'Module pages worth opening: <a href="/valorant-esp/">ESP</a>, <a href="/valorant-aimbot/">Aimbot</a>, <a href="/valorant-hacks/">hacks</a>.',
			),
			section(
				'Buying the Valorant hacks safely',
				'Purchase through secure checkout for instant digital delivery. Read Setup, FAQ, and Updates pages before your first queue — and contact Support with order details if activation needs help.',
				'No cheat guarantees permanent undetected status — combine maintenance with responsible in-game settings.',
				`Remember: using cheats can violate Riot Games terms. Proceed only if you accept that risk.`,
			),
		],
	},
	'aimbot-hack': {
		title: 'Valorant Aimbot Hack 2026 | Soft Aim Assist',
		description:
			'Valorant aimbot hack with soft aim for Windows PC. FOV, bone priority, and hotkeys — bundled with ESP boxes in our valorant hacks package.',
		h1: 'Valorant Aimbot Hack — Soft Aim Assist',
		intro:
			'Valorant aimbot hack tools for Valorant — smoothness, FOV, bone priority, per-weapon profiles, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: "Valorant aimbot hack controls and bone priority",
		galleryTitle: 'Valorant aimbot hack gallery',
		ctaPrimary: 'Buy Valorant Hacks',
		ctaSecondary: 'Aimbot settings',
		ctaSecondaryHref: '/valorant-aimbot/',
		sections: [
			section(
				'Valorant aimbot hack vs visibility tools',
				'A Valorant aimbot hack focuses on assisted targeting during firefights — while ESP wallhack and radar handle map awareness. Valorant Hacks bundles aimbot hack modules with visibility overlays in one license.',
				'Smoothness, FOV, and sensitivity controls tune assist for Valorant combat pace across Competitive, Unrated, and Deathmatch.',
				'Prefer softer tracking language? See <a href="/valorant-aimbot/">soft aim</a>. Full settings: <a href="/valorant-aimbot/">Aimbot page</a>.',
			),
			section(
				'Aimbot hack controls and hotkeys',
				'Bone priority options cover head, chest, or dynamic targets. Hotkeys enable or disable Valorant Hacks aimbot mid-match without opening menus during rotations or site holds.',
				'Per-weapon profile slots separate long-range AR tuning from close-quarters SMG settings.',
				`Balance patches from ${EXT.valorant} can change ideal FOV — retune after major weapon updates.`,
			),
			section(
				'Undetected aimbot hack maintenance',
				'Aimbot hack signatures rebuild after Vanguard anti-cheat updates. Follow the <a href="/updates/">Updates page</a> and <a href="/updates/">Vanguard bypass guide</a> before queueing after patch days.',
				'Checkout with instant digital delivery for Windows 10 and 11 — <a href="/pricing/">Pricing</a>.',
				'Pair with <a href="/valorant-esp/">ESP</a> for the full information + assist loop.',
			),
		],
	},
	'esp-hack': {
		title: 'Valorant ESP Hack 2026 | Player Boxes & Spike',
		description:
			'Valorant ESP hack with player boxes and spike markers for Windows PC. Undetected valorant hacks with — see overlays and buy.',
		h1: 'Valorant ESP Hack — Player Boxes Guide',
		intro:
			'Valorant Hacks ESP overlays for Valorant — player outlines, ability cues, and spike markers with distance readouts across Competitive, Unrated, and Deathmatch.',
		imageAlt: "Valorant ESP hack boxes and spike markers",
		galleryTitle: 'Valorant ESP hack gallery',
		ctaPrimary: 'Buy Valorant Hacks',
		ctaSecondary: 'ESP controls',
		ctaSecondaryHref: '/valorant-esp/',
		sections: [
			section(
				'What a Valorant ESP hack shows',
				'A Valorant Hacks ESP overlay renders enemy player outlines, ability cues, and spike markers through walls — closing the information gap before you commit to a fight.',
				'Distance readouts and snapline options help control engagement range during squad pushes and third-party scenarios.',
				'Canonical visibility guide: <a href="/valorant-esp/">Valorant ESP</a>. Wallhack wording: <a href="/valorant-esp/">wallhack</a>.',
			),
			section(
				'ESP hack categories',
				'Toggle player ESP, spike markers, and ability cues independently so only match-critical overlays stay active during rotations.',
				'Team and enemy colour coding supports Competitive, Unrated, and Deathmatch.',
				`Map and agent updates publish through ${EXT.valorant} — keep categories toggled to what the current map rewards.`,
			),
			section(
				'Undetected ESP hack with Vanguard maintenance',
				'ESP hack modules rebuild after Vanguard anti-cheat and Valorant patches. Check the <a href="/updates/">Updates page</a> before queueing — pair ESP hack awareness with <a href="/valorant-radar-hack/">radar hack</a> for flank reads.',
				'Licenses deliver digitally after checkout on Windows PC — see <a href="/pricing/">Pricing</a>.',
				'Install steps: <a href="/setup/">Setup</a>. Status questions: <a href="/valorant-hacks/">undetected guide</a>.',
			),
		],
	},
	'unlock-all': {
		title: 'Valorant Unlock All 2026 | What It Really Means',
		description:
			'Valorant unlock all explained vs real valorant hacks — ESP boxes, soft aim, and radar for Windows PC. Know what you are buying.',
		h1: 'Valorant Unlock All — What Players Search For',
		intro:
			'Valorant unlock all is a common search term for Valorant — this page clarifies what unlock-all tools claim versus the ESP wallhack, radar hack, and Aimbot tools Valorant Hacks actually provides on Windows PC.',
		imageAlt: "Valorant Hacks license features overview",
		galleryTitle: 'Valorant unlock all guide visuals',
		ctaPrimary: 'Buy Valorant Hacks',
		ctaSecondary: 'See features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'What Valorant unlock all usually means',
				'Valorant unlock all searches often refer to instant access to weapons, camos, skins, or battle pass tiers. Those claims differ from visibility and combat-assist tools like ESP wallhack and Aimbot.',
				'Valorant Hacks focuses on in-match awareness — player ESP, spike markers, radar overlays, and configurable Aimbot — not account-wide cosmetic unlocks.',
				`Skins and battle pass items are sold through ${EXT.valorant}. Be wary of unlock-all downloads that promise free skins — they are often scams.`,
			),
			section(
				'Visibility tools vs unlock-all claims',
				'Valorant Hacks ESP helps you spot enemy agents, abilities, and the spike during live matches. Radar adds flank awareness; Aimbot covers combat assist with smoothness and hotkey controls.',
				'For site takes during a match, spike markers speed rotations — see the <a href="/valorant-esp/">ESP</a> and <a href="/features/">Features</a> pages for the full Valorant Hacks tool list.',
				'Related: <a href="/valorant-hacks/">Valorant hacks</a> and <a href="/valorant-hacks/">Valorant hacks</a>.',
			),
			section(
				'Buying Valorant Hacks for the right reasons',
				'If you need undetected ESP wallhack, radar hack, and Aimbot for Valorant on Windows PC, compare <a href="/pricing/">Pricing</a> and read the <a href="/setup/">Setup guide</a> before checkout.',
				'Check the <a href="/updates/">Updates page</a> after Vanguard anti-cheat patches — maintenance rebuilds publish for active licenses.',
				'Questions? <a href="/faq/">FAQ</a> and <a href="/support/">Support</a> cover delivery and configuration — not cosmetic unlocks.',
			),
		],
	},
	privacy: {
		title: 'Privacy Policy | Valorant Hacks',
		description:
			'Privacy policy for Valorant Hacks. How we handle support emails, order data, and checkout for valorant hacks licenses on valoranthack.net.',
		h1: 'Privacy Policy',
		intro: 'How Valorant Hacks handles information when you browse valoranthack.net or contact support about a Valorant license.',
		imageAlt: "Valorant Hacks privacy policy page",
		galleryTitle: 'Valorant Hacks legal resources',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read terms of use',
		ctaSecondaryHref: '/terms/',
		sections: [
			section(
				'Information we may collect',
				'We may collect contact details you send by email, order references needed to resolve support requests, and basic technical data used to operate and secure the website.',
				'We do not sell personal data. Checkout payment details are processed by the checkout provider — review their privacy terms for transaction data.',
				['Contact details you send by email', 'Order references for support requests', 'Basic technical data for site security'],
			),
			section(
				'How information is used',
				'Information is used to respond to support requests, process order issues, improve site reliability, and meet legal obligations when required.',
				'Analytics may use aggregated traffic data without identifying individual Valorant Hacks customers.',
			),
			section(
				'Your choices and contact',
				'You may request correction or deletion of support email data by contacting support@valoranthack.net with your request details.',
				'Policy updates publish on this page. Continued use of valoranthack.net after updates means you accept the revised policy. Also see <a href="/terms/">Terms of Use</a> and <a href="/refund-policy/">Refund Policy</a>.',
			),
		],
	},
	refund: {
		title: 'Refund Policy | Valorant Hacks',
		description:
			'Refund policy for Valorant Hacks. Digital delivery terms and eligibility for valorant hacks packages with ESP, soft aim, and radar.',
		h1: 'Refund Policy',
		intro:
			'Refund terms for Valorant Hacks licenses — ESP wallhack, radar hack, and Aimbot packages purchased through checkout for Valorant.',
		imageAlt: "Valorant Hacks refund policy page",
		galleryTitle: 'Valorant Hacks billing resources',
		ctaPrimary: 'Contact support',
		ctaSecondary: 'Read privacy policy',
		ctaSecondaryHref: '/privacy-policy/',
		sections: [
			section(
				'Digital delivery and eligibility',
				'Valorant Hacks licenses deliver digitally after payment confirmation. Because access begins immediately, refunds are limited to cases outlined below.',
				'Submit refund requests within 24 hours of purchase with your order ID and reason.',
			),
			section(
				'When refunds may be approved',
				'Duplicate charges, failed delivery despite confirmed payment, or technical activation failures verified by support may qualify for review.',
				'Refund decisions are final. Chargebacks without contacting support first may result in license revocation. See also <a href="/terms/">Terms of Use</a>.',
			),
			section(
				'How to request a refund',
				'Email support@valoranthack.net with subject "Refund Request", your order ID, purchase date, and issue summary — or use the <a href="/support/">Support page</a>.',
				'Approved refunds process back to the original payment method when possible. Pricing details live on <a href="/pricing/">Pricing</a>.',
			),
		],
	},
	terms: {
		title: 'Terms of Use 2026 | Valorant Hacks Rules',
		description:
			'Terms of use for valoranthack.net and Valorant Hacks licenses. Usage rules, anti-cheat risk, and liability for Windows PC cheats.',
		h1: 'Terms of Use',
		intro: 'Terms governing use of valoranthack.net and Valorant Hacks licenses for Valorant on Windows PC.',
		imageAlt: "Valorant Hacks terms of use page",
		galleryTitle: 'Valorant Hacks legal pages',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read privacy policy',
		ctaSecondaryHref: '/privacy-policy/',
		sections: [
			section(
				'Acceptance and license scope',
				'By purchasing or using Valorant Hacks you agree to these terms. Licenses grant personal use of ESP wallhack, radar, and Aimbot tools for Valorant on Windows PC only.',
				'Sharing, reselling, or reverse-engineering the package violates these terms and may revoke access.',
			),
			section(
				'Risk and anti-cheat disclaimer',
				`Using cheats in Valorant may violate Riot Games terms and result in account penalties. Valorant Hacks provides maintenance but does not guarantee undetected status or account safety.`,
				'You assume all risk. We are not liable for bans, data loss, or damages arising from product use. See also <a href="/valorant-hacks/">undetected status</a>.',
			),
			section(
				'Changes and governing law',
				'We may update these terms by posting revisions on this page. Continued use after changes constitutes acceptance.',
				'Contact support@valoranthack.net for questions. Related policies: <a href="/privacy-policy/">Privacy</a> and <a href="/refund-policy/">Refunds</a>.',
			),
		],
	},
};

/** Attach heroImage paths and clamp meta lengths. */
export function finalizePage(pageId, page) {
	return {
		...page,
		title: clampTitle(stripZadeyoFromMeta(page.title)),
		description: clampDesc(stripZadeyoFromMeta(page.description)),
		heroImage: HERO_IMAGES[pageId],
	};
}

export function finalizePages(pages) {
	const out = {};
	for (const [id, page] of Object.entries(pages)) {
		out[id] = finalizePage(id, page);
	}
	return out;
}

export const englishPagesFinal = finalizePages(enPages);
