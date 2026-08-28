#!/usr/bin/env node
/** Final pass: fix remaining Valorant references in src/. */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'src');
const REMOVE_PAGE_IDS = ['hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats', 'aimbot-hack', 'esp-hack', 'unlock-all'];

const REPLACEMENTS = [
	['valorantImages', 'valorantImages'],
	["from '../data/valorant'", "from '../data/valorant'"],
	["from './valorant'", "from './valorant'"],
	['/undetected-valorant-hacks/', '/undetected-valorant-hacks/'],
	['/valorant-wallhack/', '/valorant-wallhack/'],
	['/valorant-radar-hack/', '/valorant-radar-hack/'],
	['/vanguard-bypass/', '/vanguard-bypass/'],
	['/valorant-hacks-2026/', '/valorant-hacks-2026/'],
	['/valorant-aimbot/', '/valorant-aimbot/'],
	['/valorant-esp/', '/valorant-esp/'],
	['/valorant-hacks/', '/valorant-esp/'],
	['Valorant Hacks', 'Valorant Hacks'],
	['Valorant hacks', 'Valorant hacks'],
	['Valorant wallhack', 'Valorant wallhack'],
	['Valorant radar', 'Valorant radar'],
	['Valorant Aimbot', 'Valorant Aimbot'],
	['Valorant ESP', 'Valorant ESP'],
	['Valorant', 'Valorant'],
	['Vanguard', 'Vanguard anti-cheat'],
	['vanguard', 'vanguard'],
	['valoranthack.net', 'valoranthack.net'],
	['operatorEsp', 'playerEsp'],
	['extractFight', 'rebootFight'],
	['alMazrah', 'battleRoyaleIsland'],
];

async function walk(dir, files = []) {
	for (const entry of await readdir(dir, { withFileTypes: true })) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) await walk(full, files);
		else if (/\.(ts|astro|js)$/.test(entry.name)) files.push(full);
	}
	return files;
}

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	for (const id of REMOVE_PAGE_IDS) {
		r = r.replace(new RegExp(`\\t'${id}':[^\\n]*\\n`, 'g'), '');
		r = r.replace(new RegExp(`\\{ label:[^}]*href: '/[^']*${id}[^']*/' \\},\\n`, 'g'), '');
	}
	return r;
}

for (const file of await walk(ROOT)) {
	const orig = await readFile(file, 'utf8');
	const updated = apply(orig);
	if (updated !== orig) {
		await writeFile(file, updated);
		console.log('Fixed', path.relative(ROOT, file));
	}
}
