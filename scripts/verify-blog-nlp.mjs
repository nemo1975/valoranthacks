#!/usr/bin/env node
import { blogPosts } from '../src/data/blog/posts.generated.ts';

console.log('posts', blogPosts.length);
console.log('sample title', blogPosts[0].translations.en.title);
console.log('sample para', blogPosts[0].translations.en.sections[0].paragraphs[0].slice(0, 140));

const all = blogPosts.flatMap((p) =>
	p.translations.en.sections.flatMap((s) => s.paragraphs).concat([
		p.translations.en.intro,
		p.translations.en.title,
		p.translations.en.metaDescription,
	]),
);

const needles = [
	'${EXT',
	'V-Bucks',
	'Hammer AR',
	'FNCS',
	'Verdansk',
	'EliteFN',
	'GhostWare',
	'CheatVault',
	'Item Shop',
	'Tarkov',
	'tarkov',
	'Escape from',
	'Flea',
	'scav',
	'PMC',
	'loot route',
	'Loot Routes',
	'extract',
	'raid',
	'Fortnite',
	'Warzone',
	'Battle Royale',
];
for (const n of needles) {
	const hits = all.filter((t) => t.includes(n));
	if (hits.length) console.log('LEFTOVER', n, hits.length);
}
console.log('ok');
