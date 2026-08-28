#!/usr/bin/env node
/** Fix remaining i18n key mismatches and ui-strings. */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const UI_REPLACEMENTS = [
	['Valorant Hacks', 'Valorant Hacks'],
	['Valorant hacks', 'Valorant hacks'],
	['Valorant Hacks', 'Valorant Hacks'],
	['Valorant', 'Valorant'],
	['Valorant', 'Valorant'],
	['Call of Duty', 'Valorant'],
	['Valorant PC', 'Valorant PC'],
	['for Valorant', 'for Valorant'],
	['Valorant ', 'Valorant '],
	['valorant ', 'valorant '],
	['Vanguard maintenance', 'Vanguard maintenance'],
	['Vanguard anti-cheat', 'Vanguard anti-cheat'],
	['Vanguard', 'Vanguard anti-cheat'],
	['operatorEsp', 'playerEsp'],
	['extractFight', 'rebootFight'],
	['alMazrah', 'battleRoyaleIsland'],
	['agents', 'players'],
	['operator', 'player'],
	['agents', 'Players'],
	['Operator', 'Player'],
	['Al Mazrah', 'Verdansk'],
	['Verdansk', 'Verdansk'],
	['deathmatch', 'deathmatch'],
	['extract', 'extract'],
	['valoranthack.net', 'valoranthack.net'],
	['Trucos Valorant', 'Trucos Valorant'],
	['Triches Valorant', 'Triches Valorant'],
	['Cheats Valorant', 'Cheats Valorant'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of UI_REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

// Rebuild ui-strings from clean source
for (const file of ['ui-strings-part1.mjs', 'ui-strings-part2.mjs']) {
	let content = await readFile(path.join(SRC, 'scripts/i18n-data', file), 'utf8');
	content = apply(content);
	await writeFile(path.join(ROOT, 'scripts/i18n-data', file), content);
	console.log('Fixed', file);
}

// Fix pages-en vanguard key
let pagesEn = await readFile(path.join(ROOT, 'scripts/i18n-data/pages-en.mjs'), 'utf8');
pagesEn = pagesEn.replace(/\tvanguard: \{/, "\t'vanguard': {");
pagesEn = pagesEn.replace(/Valorant Valorant/g, 'Valorant');
pagesEn = pagesEn.replace(/for Valorant Valorant/g, 'for Valorant');
await writeFile(path.join(ROOT, 'scripts/i18n-data/pages-en.mjs'), pagesEn);

// Fix pages-i18n
let pagesI18n = await readFile(path.join(ROOT, 'scripts/i18n-data/pages-i18n.mjs'), 'utf8');
pagesI18n = apply(pagesI18n);
pagesI18n = pagesI18n.replace(/'vanguard'/g, "'vanguard'");
pagesI18n = pagesI18n.replace(/vanguard:/g, "'vanguard':");
await writeFile(path.join(ROOT, 'scripts/i18n-data/pages-i18n.mjs'), pagesI18n);

// Fix generate-i18n pages count
let gen = await readFile(path.join(ROOT, 'scripts/generate-i18n-content.mjs'), 'utf8');
gen = gen.replace('Pages per locale: 25', 'Pages per locale: 17');
await writeFile(path.join(ROOT, 'scripts/generate-i18n-content.mjs'), gen);

console.log('Fixed i18n keys.');
