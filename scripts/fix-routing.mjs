#!/usr/bin/env node
/** Rebuild routing.ts and constants.mjs from clean Valorant source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_IDS = [
	'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all',
];

const REPLACEMENTS = [
	['valorant-esp', 'valorant-esp'],
	['valorant-aimbot', 'valorant-aimbot'],
	['vanguard', 'vanguard'],
	['undetected-valorant-hacks', 'undetected-valorant-hacks'],
	['valorant-wallhack', 'valorant-wallhack'],
	['valorant-radar-hack', 'valorant-radar-hack'],
	['valorant-hacks-2026', 'valorant-hacks-2026'],
	['vanguard-bypass', 'vanguard-bypass'],
	['valoranthack.net', 'valoranthack.net'],
	['trucos-valorant', 'trucos-valorant'],
	['triche-valorant', 'triche-valorant'],
	['valorant-hacks', 'escape-from-valorant-hacks'],
	['cheats-valorant', 'cheats-valorant'],
	['trucchi-valorant', 'trucchi-valorant'],
	['cheaty-valorant', 'cheaty-valorant'],
	['chity-valorant', 'chity-valorant'],
	['chitov-valorant', 'chitov-valorant'],
	['chitiv-valorant', 'chitiv-valorant'],
	['cheatow-valorant', 'cheatow-valorant'],
	['hile-valorant', 'hile-valorant'],
	['valorant-hile', 'valorant-hile'],
	['valorant-esp-chity', 'valorant-esp-chity'],
	['valorant-aimbot-chity', 'valorant-aimbot-chity'],
	['unentdeckte-valorant-hacks', 'unentdeckte-escape-from-valorant-hacks'],
	['cheats-valorant-indetectaveis', 'cheats-valorant-indetectaveis'],
	['trucchi-valorant-indetectabili', 'trucchi-valorant-indetectabili'],
	['niewykrywalne-cheats-valorant', 'niewykrywalne-cheats-valorant'],
	['nedecektiruemye-chity-valorant', 'nedecektiruemye-chity-valorant'],
	['tespit-edilemeyen-valorant-hileleri', 'tespit-edilemeyen-valorant-hileleri'],
	['nedecektovani-chity-valorant', 'nedecektovani-chity-valorant'],
	['cheats-valorant-nedetectabile', 'cheats-valorant-nedetectabile'],
	['basta-valorant-hacks', 'basta-escape-from-valorant-hacks'],
	['vanguard-bypass-trucos-valorant', 'vanguard-bypass-trucos-valorant'],
	['vanguard-bypass-triche-valorant', 'vanguard-bypass-triche-valorant'],
	['vanguard-bypass-cheats-valorant', 'vanguard-bypass-cheats-valorant'],
	['vanguard-bypass-chity-valorant', 'vanguard-bypass-chity-valorant'],
	['vanguard-bypass-valorant', 'vanguard-bypass'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageBlocks(content, pageId) {
	const keyPatterns = [
		new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': \\{[\\s\\S]*?\\},\\n`, 'g'),
	];
	let r = content;
	for (const p of keyPatterns) r = r.replace(p, '');
	// Remove from PageId union
	r = r.replace(new RegExp(`\\s*\\|\\s*'${pageId}'`, 'g'), '');
	// Remove from englishPaths single line
	r = r.replace(new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: '[^']*',\\n`, 'g'), '');
	r = r.replace(new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': '[^']*',\\n`, 'g'), '');
	return r;
}

async function fixRouting() {
	let content = await readFile(path.join(SRC, 'src/data/i18n/routing.ts'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) content = removePageBlocks(content, id);
	// Fix vanguard key in englishPaths
	content = content.replace(/\tvanguard: '/, "\t'vanguard': '");
	await writeFile(path.join(ROOT, 'src/data/i18n/routing.ts'), content);
	console.log('Fixed routing.ts');
}

async function fixConstants() {
	const heroImages = `/** Hero image per page topic — keyword-rich escape-from-valorant-hacks paths. */
export const HERO_IMAGES = {
	home: '/images/escape-from-valorant-hacks-hero.webp',
	'valorant-esp': '/images/escape-from-valorant-hacks-esp-wallhack.webp',
	'valorant-aimbot': '/images/escape-from-valorant-hacks-aimbot-combat.webp',
	features: '/images/escape-from-valorant-hacks-package.webp',
	pricing: '/images/escape-from-valorant-hacks-cover.webp',
	setup: '/images/valorant-loadout-builder.webp',
	updates: '/images/valorant-header-art.webp',
	faq: '/images/valorant-squad-fight.webp',
	support: '/images/escape-from-valorant-hacks-package.webp',
	undetected: '/images/valorant-battle-royale-combat.webp',
	wallhack: '/images/escape-from-valorant-hacks-esp-wallhack.webp',
	radar: '/images/valorant-player-esp.webp',
	'vanguard': '/images/valorant-reboot-van-fight.webp',
	'cheats-2026': '/images/escape-from-valorant-hacks-hero.webp',
	privacy: '/images/escape-from-valorant-hacks-aimbot-combat.webp',
	refund: '/images/escape-from-valorant-hacks-cover.webp',
	terms: '/images/escape-from-valorant-hacks-package.webp',
};`;

	let content = await readFile(path.join(SRC, 'scripts/i18n-data/constants.mjs'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) {
		content = content.replace(new RegExp(`'${id}',\\s*`, 'g'), '');
	}
	content = content.replace(
		/export const PAGE_IDS = \[[\s\S]*?\];/,
		`export const PAGE_IDS = [\n\t'home', 'valorant-esp', 'valorant-aimbot', 'features', 'pricing', 'setup',\n\t'updates', 'faq', 'support', 'undetected', 'wallhack', 'radar', 'vanguard',\n\t'cheats-2026', 'privacy', 'refund', 'terms',\n];`,
	);
	content = content.replace(/\/\*\* Hero image[\s\S]*?};/, heroImages);
	content = content.replace(
		/export type PageId = [^;]+;/,
		"export type PageId = 'home' | 'valorant-esp' | 'valorant-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'vanguard' | 'cheats-2026' | 'privacy' | 'refund' | 'terms';",
	);
	content = content.replace(/operatorEsp/g, 'playerEsp');
	content = content.replace(/extractFight/g, 'rebootFight');
	content = content.replace(/alMazrah/g, 'battleRoyaleIsland');
	await writeFile(path.join(ROOT, 'scripts/i18n-data/constants.mjs'), content);
	console.log('Fixed constants.mjs');
}

await fixRouting();
await fixConstants();
