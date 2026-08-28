/**
 * Cloudflare Workers static assets parse dist/_redirects and cap dynamic
 * rules at 100. This site has more SEO 301s than that; src/worker.ts and
 * functions/_middleware.js already apply the full map.
 */
import { existsSync, unlinkSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const target = path.join(root, 'dist', '_redirects');
if (existsSync(target)) {
	unlinkSync(target);
	console.log('strip-worker-redirects: removed dist/_redirects');
} else {
	console.log('strip-worker-redirects: nothing to remove');
}
