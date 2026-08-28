import { mkdir, readdir, unlink, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import { buildOverlaySvg } from './valorant-hack-overlays.mjs';

const imagesDir = path.resolve('public/images');
const publicDir = path.resolve('public');

/** IGN Valorant screenshot CDN (Valorant gallery paths only). */
const IGN = 'https://sm.ign.com/t/ign_in/screenshot/v/valorant';
const IGN_G = 'https://sm.ign.com/t/ign_in/gallery/v/valorant';

/**
 * Valorant hacks image pipeline:
 * 1. Download real Valorant gameplay from IGN
 * 2. Composite ESP / aimbot / radar / mod-menu overlays
 */
const KEYWORD_ASSETS = [
	{
		file: 'valorant-hacks-hero.webp',
		url: `${IGN_G}/valorant-screenshots_wjkx.1400.jpg`,
		overlay: 'hero',
	},
	{
		file: 'valorant-hacks-aimbot.webp',
		url: `${IGN}/valorant-screenshots_wjb1.1400.jpg`,
		overlay: 'aimbot',
	},
	{
		file: 'valorant-hacks-wallhack.webp',
		url: `${IGN}/valorant-screenshots_55fp.1400.jpg`,
		overlay: 'wallhack',
	},
	{
		file: 'valorant-hacks-esp.webp',
		url: `${IGN}/valorant-screenshots_67cp.1400.jpg`,
		overlay: 'esp',
	},
	{
		file: 'valorant-hacks-package.webp',
		url: `${IGN}/valorant-screenshots_anf4.1400.jpg`,
		overlay: 'menu',
	},
	{
		file: 'valorant-hacks-cover.webp',
		url: `${IGN}/valorant-screenshots_7pr8.1400.jpg`,
		overlay: 'esp',
	},
	{
		file: 'valorant-hacks-radar.webp',
		url: `${IGN}/valorant-screenshots_rb92.1400.jpg`,
		overlay: 'spike',
	},
	{
		file: 'valorant-hacks-combat.webp',
		url: `${IGN}/valorant-screenshots_4h92.1400.jpg`,
		overlay: 'deathmatch',
	},
];

const REMOVE_PATTERNS = [
	/-\d+w\.webp$/i,
	/^valorant-hacks-logo/,
];

async function fetchBase(url) {
	const res = await fetch(url, {
		headers: { 'User-Agent': 'Mozilla/5.0 (compatible; ValorantHacksSite/1.0)' },
	});
	if (!res.ok) throw new Error(`HTTP ${res.status}`);
	return Buffer.from(await res.arrayBuffer());
}

async function composeHackImage(baseBuffer, overlayPreset) {
	const base = sharp(baseBuffer).resize({ width: 1920, withoutEnlargement: true });
	const meta = await base.metadata();
	const width = meta.width ?? 1920;
	const height = meta.height ?? 1080;

	const overlaySvg = Buffer.from(buildOverlaySvg(width, height, overlayPreset));
	const darkened = await base.modulate({ brightness: 0.92, saturation: 1.08 }).toBuffer();

	return sharp(darkened)
		.composite([{ input: overlaySvg, top: 0, left: 0 }])
		.webp({ quality: 86 })
		.toBuffer();
}

async function cleanImagesDir() {
	const files = await readdir(imagesDir).catch(() => []);
	for (const file of files) {
		if (file.includes('valorant-hacks-logo')) continue;
		if (REMOVE_PATTERNS.some((pattern) => pattern.test(file))) {
			await unlink(path.join(imagesDir, file));
			console.log(`Removed ${file}`);
		}
	}
}

async function generateBrandAssets(heroBuffer) {
	const logoBuffer = await sharp(heroBuffer)
		.extract({ left: 420, top: 180, width: 520, height: 520 })
		.resize(512, 512, { fit: 'cover' })
		.webp({ quality: 88 })
		.toBuffer();

	await writeFile(path.join(imagesDir, 'valorant-hacks-logo.webp'), logoBuffer);

	for (const { name, size } of [
		{ name: 'favicon-16x16.png', size: 16 },
		{ name: 'favicon-32x32.png', size: 32 },
		{ name: 'apple-touch-icon.png', size: 180 },
		{ name: 'favicon.png', size: 192 },
	]) {
		await writeFile(path.join(publicDir, name), await sharp(logoBuffer).resize(size, size).png().toBuffer());
	}
	await writeFile(path.join(publicDir, 'favicon.ico'), await sharp(logoBuffer).resize(32, 32).png().toBuffer());
}

await mkdir(imagesDir, { recursive: true });
await cleanImagesDir();

let heroBuffer = null;
let saved = 0;

for (const asset of KEYWORD_ASSETS) {
	console.log(`Fetching ${asset.file} (${asset.overlay} overlay)`);
	try {
		const base = await fetchBase(asset.url);
		const webp = await composeHackImage(base, asset.overlay);
		await writeFile(path.join(imagesDir, asset.file), webp);
		console.log(`  ✓ ${asset.file} (${webp.length} bytes)`);
		saved++;
		if (asset.file === 'valorant-hacks-hero.webp') heroBuffer = webp;
	} catch (err) {
		console.warn(`  ✗ Skip ${asset.file}: ${err.message}`);
	}
}

if (heroBuffer) {
	await generateBrandAssets(heroBuffer);
	console.log('Generated logo + favicons from hero.');
}

console.log(`\nDone — ${saved}/${KEYWORD_ASSETS.length} Valorant hacks images (IGN base + ESP/aimbot overlays).`);
