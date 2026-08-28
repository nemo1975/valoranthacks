#!/usr/bin/env node
/** Adapt pages-en.mjs and pages-i18n.mjs from Valorant source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_PAGE_KEYS = [
	'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all',
];

const REPLACEMENTS = [
	['valorant-esp', 'valorant-esp'],
	['valorant-aimbot', 'valorant-aimbot'],
	["'vanguard'", "'vanguard'"],
	['vanguard-bypass', 'vanguard-bypass'],
	['undetected-valorant-hacks', 'undetected-valorant-hacks'],
	['valorant-wallhack', 'valorant-wallhack'],
	['valorant-radar-hack', 'valorant-radar-hack'],
	['valorant-hacks-2026', 'valorant-hacks-2026'],
	['escape-from-valorant-hacks', 'escape-from-valorant-hacks'],
	['valorant', 'valorant'],
	['Valorant', 'Valorant'],
	['Valorant', 'Valorant'],
	['Valorant Hacks', 'Valorant Hacks'],
	['Valorant hacks', 'Valorant hacks'],
	['Valorant hack', 'Valorant hack'],
	['Valorant ESP', 'Valorant ESP'],
	['Valorant Aimbot', 'Valorant Aimbot'],
	['Valorant wallhack', 'Valorant wallhack'],
	['Valorant radar', 'Valorant radar'],
	['Valorant firefights', 'Valorant firefights'],
	['Valorant combat', 'Valorant combat'],
	['Valorant patches', 'Valorant patches'],
	['Valorant updates', 'Valorant updates'],
	['Valorant setup', 'Valorant setup'],
	['Valorant license', 'Valorant license'],
	['Valorant licenses', 'Valorant licenses'],
	['Valorant sessions', 'Valorant sessions'],
	['in Valorant', 'in Valorant'],
	['for Valorant', 'for Valorant'],
	['Valorant on', 'Valorant on'],
	['Valorant or', 'Valorant or'],
	['Valorant\'s', 'Valorant\'s'],
	['Valorant ', 'Valorant '],
	['Vanguard anti-cheat', 'Vanguard anti-cheat'],
	['Vanguard maintenance', 'Vanguard maintenance'],
	['Vanguard bypass', 'Vanguard bypass'],
	['Vanguard Bypass', 'Vanguard Bypass'],
	['Vanguard', 'Vanguard anti-cheat'],
	['vanguard', 'vanguard'],
	['support@valoranthack.net', 'support@valoranthack.net'],
	['Bind, Haven, and Ascent', 'Bind, Haven, and Ascent'],
	['Bind, Haven and Ascent', 'Bind, Haven and Ascent'],
	['site fights', 'site fights'],
	['site fight', 'site fight'],
	['raid rounds', 'raid rounds'],
	['extract', 'extract'],
	['agents', 'players'],
	['operator', 'player'],
	['agents', 'Players'],
	['Operator', 'Player'],
	['extract timer', 'extract timer'],
	['Competitive, Unrated, and Deathmatch', 'Competitive, Unrated, and Deathmatch'],
	['Competitive, Unrated, and Deathmatch', 'Competitive, Unrated, and Deathmatch'],
	['Ranked & Unrated', 'Ranked & Unrated'],
	['high-value loot', 'high-value loot'],
	['high-value loot', 'high-value loot'],
	['contracts', 'chests'],
	['contract', 'chest'],
	['Activision\'s', 'Epic Games\''],
	['Call of Duty combat pace', 'Valorant combat pace'],
	['COD', 'Valorant'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageObjectBlocks(content) {
	let r = content;
	for (const key of REMOVE_PAGE_KEYS) {
		const quoted = `'${key}'`;
		const patterns = [
			new RegExp(`\\t${quoted}: \\{[\\s\\S]*?\\},\\n`, 'g'),
			new RegExp(`\\t${key.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		];
		for (const p of patterns) r = r.replace(p, '');
	}
	return r;
}

async function adaptFile(rel) {
	let content = await readFile(path.join(SRC, rel), 'utf8');
	content = apply(content);
	content = removePageObjectBlocks(content);
	await writeFile(path.join(ROOT, rel), content);
	console.log('Adapted', rel);
}

await adaptFile('scripts/i18n-data/pages-en.mjs');
await adaptFile('scripts/i18n-data/pages-i18n.mjs');
await adaptFile('scripts/i18n-data/phrases.mjs');

// Patch phrases KW object
let phrases = await readFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), 'utf8');
phrases = phrases.replace(
	/const KW = \{[\s\S]*?\};/,
	`const KW = {
	esp: 'ESP wallhack',
	radar: 'radar hack',
	aimbot: 'Aimbot',
	product: 'Valorant Hacks',
	game: 'Valorant',
	checkout: 'Zadeyo',
	vanguard: 'Vanguard anti-cheat',
};`,
);
phrases = phrases.replace(/KW\.vanguard/g, 'KW.vanguard');
phrases = phrases.replace(/maps: '[^']*'/g, "maps: 'Bind, Haven, and Ascent'");
await writeFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), phrases);

console.log('Done adapting i18n pages.');
