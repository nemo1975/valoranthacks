#!/usr/bin/env node
/**
 * One-time migration: Tarkov Cheats → Valorant Hacks.
 * Domain: valoranthack.net
 * Run from project root: node scripts/adapt-valorant.mjs
 */
import { readFile, writeFile, readdir, rename } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const RENAME_PAGE_DIRS = [
	['undetected-tarkov-cheats', 'undetected-valorant-hacks'],
	['best-tarkov-cheats', 'best-valorant-hacks'],
	['tarkov-cheats-2026', 'valorant-hacks-2026'],
	['tarkov-cheat-download', 'valorant-hack-download'],
	['tarkov-aimbot-hack', 'valorant-aimbot-hack'],
	['tarkov-esp-hack', 'valorant-esp-hack'],
	['tarkov-radar-hack', 'valorant-radar-hack'],
	['tarkov-unlock-all', 'valorant-unlock-all'],
	['tarkov-mod-menu', 'valorant-mod-menu'],
	['tarkov-soft-aim', 'valorant-soft-aim'],
	['tarkov-wallhack', 'valorant-wallhack'],
	['tarkov-cheats', 'valorant-hacks'],
	['tarkov-aimbot', 'valorant-aimbot'],
	['tarkov-esp', 'valorant-esp'],
	['battleye-bypass', 'vanguard-bypass'],
];

/** Ordered replacements — longest / most specific first. */
const REPLACEMENTS = [
	['https://www.escapefromtarkov.com/support/', 'https://support-valorant.riotgames.com/'],
	['https://www.escapefromtarkov.com/support', 'https://support-valorant.riotgames.com/'],
	['https://www.escapefromtarkov.com/', 'https://playvalorant.com/'],
	['https://www.battleye.com/', 'https://www.riotgames.com/'],
	['https://tarkovcheats.org', 'https://valoranthack.net'],
	['https://www.tarkovcheats.org', 'https://www.valoranthack.net'],
	['www.tarkovcheats.org', 'www.valoranthack.net'],
	['tarkovcheats.org', 'valoranthack.net'],
	['support@tarkovcheats.org', 'support@valoranthack.net'],
	['/products/escape-from-tarkov', '/products/valorant'],
	['/products/tarkov', '/products/valorant'],
	['project-name=besttarkovcheats', 'project-name=valoranthacks'],
	['project-name=tarkovcheats', 'project-name=valoranthacks'],
	['name = "besttarkovcheats"', 'name = "valoranthacks"'],
	['name = "tarkovcheats"', 'name = "valoranthacks"'],
	['"name": "tarkov-cheats"', '"name": "valorant-hacks"'],
	['besttarkovcheats.com', 'valoranthack.net'],
	['besttarkovcheats', 'valoranthacks'],

	['undetected-tarkov-cheats', 'undetected-valorant-hacks'],
	['unentdeckte-tarkov-cheats', 'unentdeckte-valorant-hacks'],
	['best-tarkov-cheats', 'best-valorant-hacks'],
	['basta-tarkov-cheats', 'basta-valorant-hacks'],
	['tarkov-cheats-2026', 'valorant-hacks-2026'],
	['tarkov-cheat-download', 'valorant-hack-download'],
	['tarkov-aimbot-hack', 'valorant-aimbot-hack'],
	['tarkov-esp-hack', 'valorant-esp-hack'],
	['tarkov-radar-hack', 'valorant-radar-hack'],
	['tarkov-unlock-all', 'valorant-unlock-all'],
	['tarkov-mod-menu', 'valorant-mod-menu'],
	['tarkov-soft-aim', 'valorant-soft-aim'],
	['tarkov-wallhack', 'valorant-wallhack'],
	['tarkov-scav-run', 'valorant-deathmatch'],
	['tarkov-cheats-logo', 'valorant-hacks-logo'],
	['tarkov-cheats-hero', 'valorant-hacks-hero'],
	['tarkov-cheats-', 'valorant-hacks-'],
	['tarkov-cheats', 'valorant-hacks'],
	['tarkov-aimbot', 'valorant-aimbot'],
	['tarkov-esp', 'valorant-esp'],
	['tarkov-hero-', 'valorant-hero-'],
	['escape-from-tarkov-cheats', 'valorant-hacks'],
	['escape-from-tarkov', 'valorant'],
	['battleye-bypass', 'vanguard-bypass'],

	['trucos-tarkov', 'trucos-valorant'],
	['triche-tarkov', 'triche-valorant'],
	['cheats-tarkov', 'cheats-valorant'],
	['trucchi-tarkov', 'trucchi-valorant'],
	['cheaty-tarkov', 'cheaty-valorant'],
	['chity-tarkov', 'chity-valorant'],
	['chitov-tarkov', 'chitov-valorant'],
	['chitiv-tarkov', 'chitiv-valorant'],
	['cheatow-tarkov', 'cheatow-valorant'],
	['hile-tarkov', 'hile-valorant'],
	['tarkov-hile', 'valorant-hile'],
	['tarkov-esp-chity', 'valorant-esp-chity'],
	['tarkov-aimbot-chity', 'valorant-aimbot-chity'],
	['cheats-tarkov-indetectaveis', 'cheats-valorant-indetectaveis'],
	['trucchi-tarkov-indetectabili', 'trucchi-valorant-indetectabili'],
	['niewykrywalne-cheats-tarkov', 'niewykrywalne-cheats-valorant'],
	['nedecektiruemye-chity-tarkov', 'nedecektiruemye-chity-valorant'],
	['tespit-edilemeyen-tarkov-hileleri', 'tespit-edilemeyen-valorant-hileleri'],
	['nedecektovani-chity-tarkov', 'nedecektovani-chity-valorant'],
	['cheats-tarkov-nedetectabile', 'cheats-valorant-nedetectabile'],
	['tarkov-cheats-funktionen', 'valorant-hacks-funktionen'],
	['tarkov-cheats-functies', 'valorant-hacks-functies'],
	['caracteristicas-trucos-valorant', 'caracteristicas-trucos-valorant'],

	['Tarkov Cheats', 'Valorant Hacks'],
	['Tarkov cheats', 'Valorant hacks'],
	['Tarkov cheat', 'Valorant hack'],
	['tarkov cheats', 'valorant hacks'],
	['tarkov cheat', 'valorant hack'],
	['Tarkov Intel', 'Valorant Intel'],
	['TarkovCheatsSite', 'ValorantHacksSite'],
	['Buy Tarkov Hacks', 'Buy Valorant Hacks'],

	['Escape from Tarkov', 'Valorant'],
	['Battlestate Games', 'Riot Games'],
	['BattlEye anti-cheat', 'Vanguard anti-cheat'],
	['BattlEye maintenance', 'Vanguard maintenance'],
	['BattlEye bypass', 'Vanguard bypass'],
	['BattlEye Bypass', 'Vanguard Bypass'],
	['BattlEye patches', 'Vanguard patches'],
	['BattlEye patch', 'Vanguard patch'],
	['BattlEye updates', 'Vanguard updates'],
	['BattlEye update', 'Vanguard update'],
	['after BattlEye', 'after Vanguard'],
	['BattlEye', 'Vanguard'],
	['battleye', 'vanguard'],

	['Customs, Woods, and Streets of Tarkov', 'Bind, Haven, and Ascent'],
	['Customs, Woods and Streets of Tarkov', 'Bind, Haven and Ascent'],
	['Customs, Woods et Streets of Tarkov', 'Bind, Haven et Ascent'],
	['Customs, Woods e Streets of Tarkov', 'Bind, Haven e Ascent'],
	['Customs, Woods und Streets of Tarkov', 'Bind, Haven und Ascent'],
	['PMC raids and Scav runs', 'Competitive, Unrated, and Deathmatch'],
	['PMC raids and scav-runs', 'Competitive, Unrated, and Deathmatch'],
	['PMC raids and scav runs', 'Competitive, Unrated, and Deathmatch'],
	['PMC & Scav', 'Ranked & Unrated'],
	['PMC and Scav', 'agent and enemy'],
	['PMCs and Scavs', 'agents and enemies'],
	['PMCs, Scavs', 'agents, enemies'],
	['PMC raids', 'Competitive matches'],
	['Scav runs', 'Deathmatch games'],
	['Scav run', 'Deathmatch'],
	['scav-run', 'deathmatch'],
	['scav run', 'deathmatch'],
	['before you raid', 'before you queue'],
	['during a raid', 'during a match'],
	['in raids', 'in matches'],
	['Tarkov raids', 'Valorant matches'],
	['loot and extract markers', 'spike and ability markers'],
	['Loot and extract markers', 'Spike and ability markers'],
	['extract markers', 'spike site markers'],
	['near extracts', 'near spike sites'],
	['Extract approaches', 'Spike site approaches'],
	['extract fights', 'site fights'],
	['extract fight', 'site fight'],
	['loot ESP', 'spike ESP'],
	['Loot ESP', 'Spike ESP'],
	['loot markers', 'spike markers'],
	['Loot markers', 'Spike markers'],
	['Boss and Scav filters', 'Agent and ability filters'],
	['bosses, and loot', 'ultimates, and the spike'],
	['bosses and loot', 'ultimates and the spike'],
	['hotkeys mid-raid', 'hotkeys mid-round'],
	['Hotkeys mid-raid', 'Hotkeys mid-round'],
	['mid-raid', 'mid-round'],
	['you raid', 'you queue'],
	['every raid', 'every match'],
	['first raid', 'first match'],
	['early raids', 'early matches'],
	['In-raid look', 'In-match look'],
	['in-raid', 'in-match'],
	['a raid', 'a match'],
	['the raid', 'the match'],

	["pageId=\"vanguard\"", 'pageId="vanguard"'],
	["pageId: 'vanguard'", "pageId: 'vanguard'"],
	['tarkovImages', 'valorantImages'],
	["from './tarkov'", "from './valorant'"],
	["from '../data/tarkov'", "from '../data/valorant'"],
	["from '../../data/tarkov'", "from '../../data/valorant'"],
	['fetch-tarkov-images', 'fetch-valorant-images'],
	['tarkov-hack-overlays', 'valorant-hack-overlays'],
	['fix-tarkov-copy', 'fix-valorant-copy'],
	['/images/tarkov', '/images/valorant'],
	['tarkov-esp-player-tags', 'valorant-esp-player-tags'],
	['tarkov-wallhack-skeleton', 'valorant-wallhack-skeleton'],
	['tarkov-aimbot-sniper', 'valorant-aimbot-sniper'],
	['tarkov-aimbot-skeleton', 'valorant-aimbot-skeleton'],
	['tarkov-esp-radar', 'valorant-esp-radar'],

	['Streets of Tarkov', 'Sunset'],
	['Interchange', 'Icebox'],
	['Factory', 'Split'],
	['Woods', 'Breeze'],
	['Customs', 'Bind'],
	['dorms', 'Haven'],
	['Dorms', 'Haven'],
	['Scavs', 'enemies'],
	['Scav', 'Deathmatch'],
	['PMCs', 'agents'],
	['PMC', 'agent'],
	['Tarkov', 'Valorant'],
	['tarkov', 'valorant'],
];

const TEXT_EXTENSIONS = new Set([
	'.ts',
	'.tsx',
	'.js',
	'.mjs',
	'.astro',
	'.css',
	'.json',
	'.toml',
	'.txt',
	'.md',
	'.html',
	'.mdc',
]);

const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', '.astro']);
const SKIP_FILES = new Set([
	'adapt-warzone.mjs',
	'adapt-fortnite.mjs',
	'adapt-tarkov.mjs',
	'adapt-valorant.mjs',
	'package-lock.json',
	'content.generated.ts',
	'posts.generated.ts',
]);

async function walk(dir, files = []) {
	const entries = await readdir(dir, { withFileTypes: true });
	for (const entry of entries) {
		if (SKIP_DIRS.has(entry.name)) continue;
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			await walk(full, files);
		} else {
			files.push(full);
		}
	}
	return files;
}

function applyReplacements(content) {
	let result = content;
	for (const [from, to] of REPLACEMENTS) {
		if (from === to) continue;
		result = result.split(from).join(to);
	}
	return result;
}

async function transformTextFiles() {
	const files = await walk(ROOT);
	let changed = 0;
	for (const file of files) {
		const ext = path.extname(file);
		if (!TEXT_EXTENSIONS.has(ext)) continue;
		if (SKIP_FILES.has(path.basename(file))) continue;
		const original = await readFile(file, 'utf8');
		const updated = applyReplacements(original);
		if (updated !== original) {
			await writeFile(file, updated, 'utf8');
			changed++;
		}
	}
	console.log(`Transformed ${changed} text files`);
}

async function renamePageDirs() {
	for (const [from, to] of RENAME_PAGE_DIRS) {
		const src = path.join(ROOT, 'src', 'pages', from);
		const dest = path.join(ROOT, 'src', 'pages', to);
		try {
			await rename(src, dest);
			console.log(`Renamed page: ${from} → ${to}`);
		} catch (e) {
			console.warn(`Skip rename ${from}: ${e.message}`);
		}
	}
}

async function renameDataFile() {
	const from = path.join(ROOT, 'src', 'data', 'tarkov.ts');
	const to = path.join(ROOT, 'src', 'data', 'valorant.ts');
	try {
		await rename(from, to);
		console.log('Renamed tarkov.ts → valorant.ts');
	} catch (e) {
		console.warn(`tarkov.ts rename: ${e.message}`);
	}
}

async function renameScripts() {
	const pairs = [
		['fetch-tarkov-images.mjs', 'fetch-valorant-images.mjs'],
		['tarkov-hack-overlays.mjs', 'valorant-hack-overlays.mjs'],
		['fix-tarkov-copy.mjs', 'fix-valorant-copy.mjs'],
	];
	for (const [from, to] of pairs) {
		try {
			await rename(path.join(ROOT, 'scripts', from), path.join(ROOT, 'scripts', to));
			console.log(`Renamed script: ${from} → ${to}`);
		} catch (e) {
			console.warn(`Skip script rename ${from}: ${e.message}`);
		}
	}
}

async function updatePageAstroFiles() {
	const idMap = {
		'valorant-aimbot': 'valorant-aimbot',
		'valorant-esp': 'valorant-esp',
		'valorant-wallhack': 'wallhack',
		'valorant-radar-hack': 'radar',
		'undetected-valorant-hacks': 'undetected',
		'valorant-hacks-2026': 'cheats-2026',
		'vanguard-bypass': 'vanguard',
		'valorant-hacks': 'hacks',
		'valorant-hack-download': 'cheat-download',
		'valorant-mod-menu': 'mod-menu',
		'valorant-soft-aim': 'soft-aim',
		'best-valorant-hacks': 'best-cheats',
		'valorant-aimbot-hack': 'aimbot-hack',
		'valorant-esp-hack': 'esp-hack',
		'valorant-unlock-all': 'unlock-all',
	};

	for (const [dir, pageId] of Object.entries(idMap)) {
		const file = path.join(ROOT, 'src', 'pages', dir, 'index.astro');
		try {
			const content = `---
import LocalizedPage from '../../components/LocalizedPage.astro';
---

<LocalizedPage locale="en" pageId="${pageId}" />
`;
			await writeFile(file, content, 'utf8');
			console.log(`Wrote pageId ${pageId} → src/pages/${dir}/`);
		} catch {
			// ignore missing dirs
		}
	}
}

async function renameImages() {
	const imagesDir = path.join(ROOT, 'public', 'images');
	let files;
	try {
		files = await readdir(imagesDir);
	} catch {
		return;
	}
	for (const file of files) {
		if (!file.includes('tarkov')) continue;
		const newName = file.replace(/tarkov-cheats/g, 'valorant-hacks').replace(/tarkov/g, 'valorant');
		if (newName !== file) {
			try {
				await rename(path.join(imagesDir, file), path.join(imagesDir, newName));
				console.log(`Renamed image: ${file} → ${newName}`);
			} catch (e) {
				console.warn(`Skip image ${file}: ${e.message}`);
			}
		}
	}
}

async function main() {
	console.log('Adapting Tarkov Cheats → Valorant Hacks (valoranthack.net)...\n');
	await renamePageDirs();
	await renameDataFile();
	await renameScripts();
	await transformTextFiles();
	await updatePageAstroFiles();
	await renameImages();
	console.log('\nDone. Next: lock brand.ts, America hreflang, generate i18n/blog, sync:brand.');
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
