#!/usr/bin/env node
/**
 * Purge Fortnite/Warzone/BR leftovers from EN page source and regenerate i18n.
 * Run: node scripts/seo-perfect-en.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PAGES_EN = path.join(ROOT, 'scripts', 'i18n-data', 'pages-en.mjs');

/** @type {Array<[RegExp|string, string]>} */
const replacements = [
	// Wrong publishers in prose (EXT.activision already links to escapefromvalorant.com)
	['published by ${EXT.activision}', 'published by Riot Games (${EXT.valorant})'],
	['from ${EXT.activision}', 'from ${EXT.valorant}'],
	['via ${EXT.activision}', 'via ${EXT.valorant}'],
	['belong with ${EXT.activision}', 'belong with Riot Games'],
	['${EXT.activision} terms', 'Riot Games terms'],
	['${EXT.activision} season updates', '${EXT.valorant} episode and map updates'],

	['PC & Controllers', 'Windows PC'],
	['PC & Controller Guide', 'Windows PC Guide'],
	['PC and controller cheats', 'Windows PC cheats'],

	// BR / Fortnite lexicon → Valorant
	['vehicles, loot', 'agents, enemies, loot'],
	['notice vehicles before they push your position', 'spot agents and enemies before they push your angle'],
	['Player, vehicle, and loot', 'Player, agent, and spike'],
	[
		'vehicle threat cues, supply-drop awareness markers, and loot or chest pins so only BR-critical',
		'agent markers, spike cues, and site pins so only match-critical',
	],
	['Vehicle and supply-drop threat cues', 'Agent and spike awareness cues'],
	['vehicle and supply-drop threat cues', 'agent and spike awareness cues'],
	['loot or chest pins', 'spike and ability pins'],
	['Loot and chest markers', 'Spike and ability markers'],
	['loot and chest markers', 'spike and ability markers'],
	['chests worth the detour', 'utility worth the rotate'],
	['vehicles, and chests', 'abilities, and the spike'],
	['loot, vehicles, and chests', 'agents, abilities, and the spike'],
	['players, loot, and vehicles', 'agents, enemies, and the spike'],
	['players, loot, vehicles', 'agents, enemies, spike'],
	['vehicle threat cues', 'flank threat cues'],
	['vehicle pushes', 'flank pushes'],
	['track vehicles and chests', 'track agents and the spike'],
	['full BR loop', 'full match loop'],
	['BR rotations', 'map rotations'],
	['BR-critical', 'round-critical'],
	['endgame circles', 'site holds'],
	['final circles', 'late-round retakes'],
	['final-circle scrims', 'site retake fights'],
	['before your first ranked block', 'before your first match'],
	['before ranked', 'before you queue'],
	['reboot rounds', 'close-range site fights'],
	['Battle Pass', 'Battle Pass'],
	[
		'long-range AR beams and close-quarters room clears without reopening menus every spawn',
		'long-range Operator fights and Haven clears without reopening menus every match',
	],
	['assault rifles, SMGs, and snipers', 'Vandal, Spectre, and Operator'],
	['AR / SMG / sniper', 'Vandal / Spectre / Operator'],
	['players, loot, and vehicles', 'agents, enemies, and the spike'],
	['for players, loot, and vehicles', 'for players, abilities, and the spike'],

	// Broken / truncated meta fragments
	['soft aim, and .', 'soft aim, and radar.'],
	['soft aim, and on Windows PC', 'soft aim, and radar on Windows PC'],
	['soft aim, and for Windows PC', 'soft aim, and radar for Windows PC'],
	['soft aim, and in our', 'soft aim, and radar in our'],
	['soft aim, and maintenance', 'soft aim, and radar maintenance'],
	['soft aim, boxes, and on Windows PC', 'soft aim, and radar on Windows PC'],
	['ESP, Soft Aim, ', 'ESP, Soft Aim & Radar'],
	['Best Hacks with ESP & ', 'ESP Soft Aim & Radar'],
	['ESP, Soft Aim & ', 'ESP, Soft Aim & Radar'],
	['with — learn', '— learn'],
	['RVanguard out for', 'Reach out for'],
	['an Vanguard', 'a Vanguard'],
	['After a Escape', 'After a Valorant'],
	['after a Escape', 'after a Valorant'],

	// Keyword stuffing / nonsense duplicates
	['valorant hacks & valorant hacks', 'valorant hacks'],
	[
		'covering both valorant hacks and valorant hacks search intent',
		'covering both “valorant hacks” and “valorant cheats” search intent',
	],
	[
		'also searched as valorant hacks and valorant hack.',
		'built for Valorant on Windows PC.',
	],
	[
		'Valorant hacks vs valorant hacks — same stack, clear pages',
		'How this Valorant hacks pillar fits nearby pages',
	],
	[
		'Searchers use valorant hacks and valorant hacks interchangeably. This pillar focuses on hacks language; the',
		'Use this pillar for the core product overview. For year-specific buying notes, see the',
	],

	// Point cannibal URLs at canonicals
	['/valorant-esp-hack/', '/valorant-esp/'],
	['/valorant-aimbot-hack/', '/valorant-aimbot/'],
	['/best-valorant-hacks/', '/valorant-hacks/'],
	['best Valorant hacks guide', 'Valorant hacks pillar'],
	['best Valorant hacks checklist', 'Valorant hacks checklist'],
	['best Valorant hacks', 'Valorant hacks'],
	[
		'Prefer softer tracking? Read the <a href="/valorant-soft-aim/">soft aim guide</a>. Want the search term most players use? See <a href="/valorant-aimbot/">aimbot hack</a>.',
		'Prefer softer tracking? Read the <a href="/valorant-soft-aim/">soft aim guide</a>.',
	],
	['Related landings: <a href="/valorant-hack-download/">cheat download</a>, <a href="/valorant-mod-menu/">mod menu</a>, <a href="/valorant-aimbot/">aimbot hack</a>, <a href="/valorant-esp/">ESP hack</a>.',
		'Related landings: <a href="/valorant-hack-download/">cheat download</a>, <a href="/valorant-mod-menu/">mod menu</a>, <a href="/valorant-aimbot/">aimbot</a>, <a href="/valorant-esp/">ESP</a>.'],
];

let src = readFileSync(PAGES_EN, 'utf8');
let hits = 0;
for (const [from, to] of replacements) {
	if (typeof from === 'string') {
		if (!src.includes(from)) continue;
		const count = src.split(from).length - 1;
		src = src.split(from).join(to);
		hits += count;
	} else {
		const next = src.replace(from, to);
		if (next !== src) hits += 1;
		src = next;
	}
}

writeFileSync(PAGES_EN, src);
console.log(`Replaced ${hits} occurrences in pages-en.mjs`);

const gen = spawnSync(process.execPath, [path.join(ROOT, 'scripts', 'generate-i18n-content.mjs')], {
	cwd: ROOT,
	stdio: 'inherit',
});
if (gen.status !== 0) process.exit(gen.status ?? 1);
console.log('Regenerated content.generated.ts');
