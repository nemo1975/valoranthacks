#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const pages = readFileSync('scripts/i18n-data/pages-en.mjs', 'utf8');
const bad = [
	'supply-drop',
	'BR-critical',
	'BR loop',
	'vehicles',
	'ranked block',
	'Controllers',
	'Battle Pass',
	'reboot rounds',
	'endgame circles',
	'Verdansk',
	'Activision',
	'soft aim, and .',
	'ESP, Soft Aim,',
	'best-valorant-hacks',
	'valorant-esp-hack',
	'valorant-aimbot-hack',
];
console.log('--- pages-en leftovers ---');
for (const b of bad) {
	const n = pages.split(b).length - 1;
	if (n) console.log(`${b}: ${n}`);
}

const gen = readFileSync('src/data/i18n/content.generated.ts', 'utf8');
const enEnd = gen.indexOf('\n\t\tes:');
const en = enEnd > 0 ? gen.slice(0, enEnd) : gen.slice(0, 120000);
console.log('--- EN generated leftovers ---');
for (const b of [
	'supply-drop',
	'BR-critical',
	'full BR',
	'vehicles before',
	'Controllers',
	'Battle Pass',
	'RVanguard',
	'soft aim, and .',
	'best-valorant-hacks',
	'valorant-esp-hack',
]) {
	const n = en.split(b).length - 1;
	if (n) console.log(`${b}: ${n}`);
}

const blog = readFileSync('src/data/blog/posts.generated.ts', 'utf8');
const reps = [
	['V-Bucks', 'VP'],
	['Item Shop', 'Night Market'],
	['Battle Pass', 'Battle Pass'],
	['FNCS', 'Valorant Champions'],
	['Hammer AR', 'Vandal'],
	['mythics', 'meta guns'],
	['island codes', 'warmup maps'],
	['Creative 1v1s', 'aim training'],
	['creative 1v1s', 'aim training'],
	['Epic health', 'Riot Games status'],
	['Epic terms', 'Riot Games terms'],
	["Epic's Vanguard", 'Vanguard'],
	['Epic patch', 'Valorant patch'],
	['EliteFN', 'another Valorant cheat'],
	['GhostWare', 'a slim ESP tool'],
	['CheatVault', 'a budget cheat shop'],
	['Tarkov', 'Valorant'],
	['tarkov', 'valorant'],
	['loot routes', 'buy rounds'],
	['Loot Routes', 'Buy Rounds'],
	['/valorant-aimbot-hack/', '/valorant-aimbot/'],
	['/valorant-esp-hack/', '/valorant-esp/'],
	['/best-valorant-hacks/', '/valorant-hacks/'],
	['best Valorant hacks', 'Valorant hacks'],
	['hot drops', 'hot sites'],
	['ranked grinders', 'ranked grinders'],
	['before Ranked', 'before a match'],
];
let s = blog;
let n = 0;
for (const [a, b] of reps) {
	if (s.includes(a)) {
		s = s.split(a).join(b);
		n += 1;
	}
}
writeFileSync('src/data/blog/posts.generated.ts', s);
console.log('blog patterns fixed:', n);
