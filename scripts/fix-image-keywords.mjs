#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const SIMPLE =
	"images: { hero: 'valorant hacks', espWallhack: 'valorant hacks wallhack', aimbotCombat: 'valorant hacks aimbot', squadFight: 'valorant hacks', playerEsp: 'valorant hacks esp', headerArt: 'valorant hacks aimbot', cheatsPackage: 'valorant hacks radar', rebootFight: 'valorant hacks aimbot', battleRoyale: 'valorant hacks', battleRoyaleIsland: 'valorant hacks esp' }";

const re =
	/images: \{ hero: '[^']+', espWallhack: '[^']+', aimbotCombat: '[^']+', squadFight: '[^']+', playerEsp: '[^']+', headerArt: '[^']+', cheatsPackage: '[^']+', rebootFight: '[^']+', battleRoyale: '[^']+', battleRoyaleIsland: '[^']+' \}/g;

for (const f of ['scripts/i18n-data/ui-strings-part1.mjs', 'scripts/i18n-data/ui-strings-part2.mjs']) {
	const c = readFileSync(f, 'utf8');
	const n = c.replace(re, SIMPLE);
	writeFileSync(f, n);
	console.log(f, (c.match(re) || []).length, 'image blocks simplified');
}

const altMap = [
	["imageAlt: 'Valorant ESP player tags hack'", "imageAlt: 'valorant hacks esp'"],
	["imageAlt: 'Valorant ESP radar hack'", "imageAlt: 'valorant hacks radar'"],
	["imageAlt: 'Valorant aimbot sniper kill'", "imageAlt: 'valorant hacks aimbot'"],
	["imageAlt: 'Valorant aimbot skeleton targeting'", "imageAlt: 'valorant hacks aimbot'"],
	["imageAlt: 'Valorant hacks ADS combat'", "imageAlt: 'valorant hacks'"],
	["imageAlt: 'Valorant hacks setup PC activation'", "imageAlt: 'valorant hacks'"],
	["imageAlt: 'Valorant hacks updates Vanguard maintenance'", "imageAlt: 'valorant hacks'"],
	["imageAlt: 'Valorant hacks FAQ ESP aimbot'", "imageAlt: 'valorant hacks'"],
	["imageAlt: 'Valorant hacks support license help'", "imageAlt: 'valorant hacks'"],
	["imageAlt: 'Undetected valorant hacks ESP wallhack'", "imageAlt: 'undetected valorant hacks'"],
	["imageAlt: 'Valorant wallhack skeleton ESP'", "imageAlt: 'valorant hacks wallhack'"],
	["imageAlt: 'Vanguard bypass valorant ESP aimbot'", "imageAlt: 'valorant hacks vanguard'"],
	["imageAlt: 'Valorant hacks 2026 ESP aimbot'", "imageAlt: 'valorant hacks'"],
	["imageAlt: 'Valorant hacks combat aimbot'", "imageAlt: 'valorant hacks'"],
	["imageAlt: 'Valorant hack download ESP aimbot'", "imageAlt: 'valorant hacks download'"],
	["imageAlt: 'Valorant mod menu ESP aimbot'", "imageAlt: 'valorant hacks mod menu'"],
	["imageAlt: 'Valorant soft aim aimbot settings'", "imageAlt: 'valorant hacks soft aim'"],
	["imageAlt: 'Best valorant hacks 2026 ESP'", "imageAlt: 'best valorant hacks'"],
	["imageAlt: 'Valorant aimbot hack combat'", "imageAlt: 'valorant hacks aimbot'"],
	["imageAlt: 'Valorant ESP hack wallhack'", "imageAlt: 'valorant hacks esp'"],
	["imageAlt: 'Valorant unlock all ESP aimbot guide'", "imageAlt: 'valorant hacks'"],
	["imageAlt: 'Valorant hacks privacy policy'", "imageAlt: 'valorant hacks'"],
	["imageAlt: 'Valorant hacks refund policy'", "imageAlt: 'valorant hacks'"],
	["imageAlt: 'Valorant hacks terms of use'", "imageAlt: 'valorant hacks'"],
];

let pages = readFileSync('scripts/i18n-data/pages-en.mjs', 'utf8');
for (const [from, to] of altMap) pages = pages.split(from).join(to);
writeFileSync('scripts/i18n-data/pages-en.mjs', pages);
console.log('pages-en imageAlts simplified');

// productPage() imageAlt template in pages-i18n
let i18n = readFileSync('scripts/i18n-data/pages-i18n.mjs', 'utf8');
i18n = i18n
	.split("imageAlt: `Valorant ${meta.altKeyword}`")
	.join("imageAlt: 'valorant hacks'")
	.split("galleryTitle: `Valorant Hacks ${topicName}`")
	.join("galleryTitle: 'valorant hacks'")
	.split("imageAlt: `Valorant hacks ${kind} policy`")
	.join("imageAlt: 'valorant hacks'")
	.split("galleryTitle: `Valorant Hacks ${kind} resources`")
	.join("galleryTitle: 'valorant hacks'");
writeFileSync('scripts/i18n-data/pages-i18n.mjs', i18n);
console.log('pages-i18n image alts simplified');
