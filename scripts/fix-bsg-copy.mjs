#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const files = ['scripts/i18n-data/pages-en.mjs', 'scripts/generate-blog-posts.mjs'];
const pairs = [
	["Activision's", "Riot Games'"],
	['Activision\u2019', "Riot Games'"],
	['Activision services', 'Riot Games services'],
	['Activision service', 'Riot Games service'],
	['Activision platform', 'Riot Games platform'],
	['Activision outages', 'launcher outages'],
	['Activision bans', 'Riot Games bans'],
	['Activision security', 'Vanguard security'],
	['Activision Status', 'Valorant Support'],
	['Activision Valorant', 'Valorant'],
	['Activision Support', 'Valorant Support'],
	['Activision', 'Riot Games'],
	['EAC guide', 'Vanguard guide'],
	['undetected EAC notes', 'undetected Vanguard notes'],
	['status.epicgames.com', 'www.escapefromvalorant.com/support'],
	['www.epicgames.com/valorant', 'www.escapefromvalorant.com'],
	['www.valorant.com/competitive', 'www.escapefromvalorant.com'],
	['https://www.valorant.com/', 'https://playvalorant.com/'],
	['Valorant.com', 'Valorant'],
	['Valorant Competitive', 'Valorant'],
];

for (const f of files) {
	let c = readFileSync(f, 'utf8');
	const orig = c;
	for (const [a, b] of pairs) c = c.split(a).join(b);
	if (c !== orig) {
		writeFileSync(f, c);
		console.log('updated', f);
	} else {
		console.log('no change', f);
	}
}
