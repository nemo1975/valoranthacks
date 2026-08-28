#!/usr/bin/env node
/**
 * Completes escape-from-valorant-hacks SEO audit: add missing pages, fix leftovers, strip Zadeyo from meta.
 * Run: node scripts/complete-seo-audit.mjs
 */
import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const NODE = 'C:\\Program Files\\nodejs\\node.exe';

const EXTRA_PAGES = [
	{ id: 'hacks', dir: 'valorant-hacks', pageId: 'hacks' },
	{ id: 'cheat-download', dir: 'valorant-hack-download', pageId: 'cheat-download' },
	{ id: 'mod-menu', dir: 'valorant-mod-menu', pageId: 'mod-menu' },
	{ id: 'soft-aim', dir: 'valorant-soft-aim', pageId: 'soft-aim' },
	{ id: 'best-cheats', dir: 'best-valorant-hacks', pageId: 'best-cheats' },
	{ id: 'aimbot-hack', dir: 'valorant-aimbot-hack', pageId: 'aimbot-hack' },
	{ id: 'esp-hack', dir: 'valorant-esp-hack', pageId: 'esp-hack' },
	{ id: 'unlock-all', dir: 'valorant-unlock-all', pageId: 'unlock-all' },
];

const GLOBAL_REPLACEMENTS = [
	[/valorant-valorant/g, 'valorant'],
	[/vanguard-bypass-valorant/g, 'vanguard-bypass'],
	[/Valorant/g, 'Valorant'],
	[/Valorant/g, 'Valorant'],
	[/Call of Duty/g, 'Valorant'],
	[/Valorant Wallhack/g, 'Valorant Wallhack'],
	[/Valorant Radar Hack/g, 'Valorant Radar Hack'],
	[/Valorant Cheat Features/g, 'Valorant Cheat Features'],
	[/Valorant Cheat Pricing/g, 'Valorant Cheat Pricing'],
	[/Valorant Cheat Setup/g, 'Valorant Cheat Setup'],
	[/Valorant Cheat Status/g, 'Valorant Cheat Status'],
	[/Valorant Cheat Support/g, 'Valorant Cheat Support'],
	[/Valorant squad fight/g, 'Valorant squad fight'],
	[/Valorant squad builder/g, 'Valorant loadout builder'],
	[/Valorant store header/g, 'Valorant header'],
	[/Valorant wasteland combat/g, 'Valorant battle royale combat'],
	[/Valorant loadout builder/g, 'Valorant loadout builder'],
	[/Valorant pricing/g, 'Valorant pricing'],
	[/Valorant Vanguard anti-cheat/g, 'Valorant Vanguard anti-cheat'],
	[/on Valorant/g, 'on Valorant'],
	[/for Valorant/g, 'for Valorant'],
	[/Valorant guides/g, 'Valorant guides'],
	[/Valorant guide/g, 'Valorant guide'],
	[/Valorant hileleri/g, 'Valorant hileleri'],
	[/Valorant hile/g, 'Valorant hile'],
	[/Valorant hileleri/g, 'Valorant hileleri'],
	[/cheatów Valorant/g, 'cheatów Valorant'],
	[/cheat Valorant/g, 'cheat Valorant'],
	[/cheats Valorant/g, 'cheats Valorant'],
	[/trucos Valorant/g, 'trucos Valorant'],
	[/triche Valorant/g, 'triche Valorant'],
	[/trucchi Valorant/g, 'trucchi Valorant'],
	[/Wallhack Valorant/g, 'Valorant Wallhack'],
	[/cheat Valorant undetected/g, 'cheat Valorant undetected'],
	[/cheats Valorant undetected/g, 'cheats Valorant undetected'],
	[/Verdansk beams/g, 'long-range AR beams'],
	[/deathmatch room clears/g, 'close-quarters room clears'],
	[/Verdansk and Urzikstan/g, 'Verdansk and deathmatch'],
	[/Verdansk, Urzikstan/g, 'Verdansk, deathmatch'],
	[/raid and deathmatch/g, 'raid and deathmatch'],
	[/Activision's anti-cheat/g, "Epic Games' anti-cheat"],
	[/Activision anti-cheat/g, 'Epic Games anti-cheat'],
	[/Activision ships/g, 'Epic Games ships'],
	[/Activision security/g, 'Epic Games security'],
	[/Activision bans/g, 'Epic Games bans'],
	[/Activision/g, 'Epic Games'],
	[/vanguard/gi, 'vanguard'],
	[/Vanguard/g, 'Vanguard anti-cheat'],
	[/escape-from-valorant-hacks/g, 'escape-from-valorant-hacks'],
	[/valorant/g, 'valorant'],
	[/Undetected Wallhack for Call of Duty/g, 'Undetected Wallhack for Valorant'],
	[/How ESP wallhack, radar, and Aimbot rebuild after Call of Duty anti-cheat/g,
		'How ESP wallhack, radar, and Aimbot rebuild after Valorant anti-cheat'],
];

/** Remove Zadeyo from meta description/title strings only */
function stripZadeyoFromMeta(text) {
	return text
		.replace(/\s*[—–-]\s*checkout via Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout en Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout via Zadeyo\.?/gi, '.')
		.replace(/\s*with Zadeyo checkout\.?/gi, '.')
		.replace(/\s*via Zadeyo checkout\.?/gi, '.')
		.replace(/\s*Checkout via Zadeyo\.?/gi, '')
		.replace(/\s*Zadeyo checkout,?\s*/gi, ' ')
		.replace(/\s*Zadeyo delivery\.?/gi, 'instant digital delivery.')
		.replace(/\s*and Zadeyo delivery\.?/gi, ' and instant digital delivery.')
		.replace(/\|\s*Instant Zadeyo Delivery/g, '| Instant Digital Delivery')
		.replace(/Buy on Zadeyo/g, 'Buy Valorant Hacks')
		.replace(/\s{2,}/g, ' ')
		.trim();
}

async function walkFiles(dir, exts, files = []) {
	const entries = await import('node:fs/promises').then((fs) => fs.readdir(dir, { withFileTypes: true }));
	for (const e of entries) {
		if (e.name === 'node_modules' || e.name === 'dist' || e.name === '.git') continue;
		const full = path.join(dir, e.name);
		if (e.isDirectory()) await walkFiles(full, exts, files);
		else if (exts.some((x) => e.name.endsWith(x))) files.push(full);
	}
	return files;
}

async function applyGlobalFixes() {
	const targets = await walkFiles(path.join(ROOT, 'src'), ['.ts', '.astro']);
	targets.push(
		path.join(ROOT, 'scripts', 'i18n-data', 'pages-en.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'pages-i18n.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'ui-strings-part1.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'ui-strings-part2.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'phrases.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'gallery-ui.ts'),
		path.join(ROOT, 'src', 'data', 'i18n', 'gallery-ui.ts'),
		path.join(ROOT, 'functions', '_middleware.js'),
	);

	for (const file of targets) {
		try {
			await access(file);
		} catch {
			continue;
		}
		let content = await readFile(file, 'utf8');
		const original = content;
		for (const [pattern, replacement] of GLOBAL_REPLACEMENTS) {
			content = content.replace(pattern, replacement);
		}
		if (file.endsWith('pages-en.mjs')) {
			// Strip Zadeyo from description: and title: lines
			content = content.replace(/(description:\s*['"])([^'"]+)(['"])/g, (_, pre, body, post) =>
				pre + stripZadeyoFromMeta(body) + post,
			);
			content = content.replace(/(title:\s*['"])([^'"]+)(['"])/g, (_, pre, body, post) =>
				pre + stripZadeyoFromMeta(body) + post,
			);
		}
		if (content !== original) {
			await writeFile(file, content, 'utf8');
			console.log(`Fixed: ${path.relative(ROOT, file)}`);
		}
	}
}

async function createExtraPages() {
	const template = `---
import LocalizedPage from '../../components/LocalizedPage.astro';
---

<LocalizedPage locale="en" pageId="PAGE_ID" />
`;
	for (const page of EXTRA_PAGES) {
		const dir = path.join(ROOT, 'src', 'pages', page.dir);
		await mkdir(dir, { recursive: true });
		const file = path.join(dir, 'index.astro');
		try {
			await access(file);
		} catch {
			await writeFile(file, template.replace('PAGE_ID', page.pageId), 'utf8');
			console.log(`Created page: src/pages/${page.dir}/index.astro`);
		}
	}
}

async function fixLocalesBlogUi() {
	const file = path.join(ROOT, 'src', 'data', 'i18n', 'locales.ts');
	let content = await readFile(file, 'utf8');
	content = content.replace(/Valorant guides/g, 'Valorant guides');
	content = content.replace(/Valorant guide/g, 'Valorant guide');
	content = content.replace(/Valorant hileleri/g, 'Valorant hileleri');
	content = content.replace(/Valorant hile/g, 'Valorant hile');
	content = content.replace(/cheat Valorant/g, 'cheat Valorant');
	content = content.replace(/cheats Valorant/g, 'cheats Valorant');
	content = content.replace(/trucos Valorant/g, 'trucos Valorant');
	content = content.replace(/triche Valorant/g, 'triche Valorant');
	content = content.replace(/trucchi Valorant/g, 'trucchi Valorant');
	content = content.replace(/cheatów Valorant/g, 'cheatów Valorant');
	content = content.replace(/читов Valorant/g, 'читов Valorant');
	content = content.replace(/читів Valorant/g, 'читів Valorant');
	content = content.replace(/Valorantチート/g, 'Valorantチート');
	content = content.replace(/Valorant 치트/g, 'Valorant 치트');
	content = content.replace(/Valorant作弊/g, 'Valorant作弊');
	content = content.replace(/Valorant rehberleri/g, 'Valorant rehberleri');
	content = content.replace(/Valorant gidsen/g, 'Valorant gidsen');
	content = content.replace(/Valorant průvodce/g, 'Valorant průvodce');
	content = content.replace(/Valorant guider/g, 'Valorant guider');
	content = content.replace(/Valorant related/g, 'Valorant related');
	content = content.replace(/Valorant ガイド/g, 'Valorant ガイド');
	content = content.replace(/Valorant 가이드/g, 'Valorant 가이드');
	content = content.replace(/Valorant指南/g, 'Valorant指南');
	content = content.replace(/Valorant गाइड/g, 'Valorant गाइड');
	content = content.replace(/Valorant panduan/g, 'Valorant panduan');
	content = content.replace(/Valorant คู่มือ/g, 'Valorant คู่มือ');
	content = content.replace(/Valorant hướng dẫn/g, 'Valorant hướng dẫn');
	await writeFile(file, content, 'utf8');
	console.log('Fixed locales.ts blogUi');
}

console.log('=== Valorant Hacks SEO completion ===\n');
await applyGlobalFixes();
await createExtraPages();
await fixLocalesBlogUi();
console.log('\nDone. Next: update routing.ts manually, then run generate:i18n, fetch:images, build:validate');
