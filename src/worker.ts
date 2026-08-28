/**
 * Cloudflare Worker — host canonicalization + SEO redirects before static assets.
 * Canonical site: https://valoranthack.net (matches brand.url)
 *
 * Custom domains (wrangler.toml): valoranthack.net and www.valoranthack.net
 */
import PATH_REDIRECTS_JSON from '../functions/path-redirects.json';
import CANNIBAL_REDIRECTS_JSON from '../functions/cannibal-redirects.json';

const PATH_REDIRECTS = PATH_REDIRECTS_JSON as Record<string, string>;
const CANNIBAL_REDIRECTS = CANNIBAL_REDIRECTS_JSON as Record<string, string>;

const CANONICAL_ORIGIN = 'https://valoranthack.net';
const CANONICAL_HOST = 'valoranthack.net';
const WWW_HOST = 'www.valoranthack.net';

/** Old hosts still 301 → current canonical. Never put the live apex in this set. */
const LEGACY_HOSTS = new Set([
	'tarkovcheats.org',
	'www.tarkovcheats.org',
	'fortnitehack.net',
	'www.fortnitehack.net',
	'fortnitecheats.xyz',
	'www.fortnitecheats.xyz',
	'fortnitecheats.net',
	'www.fortnitecheats.net',
	'fortnitecheats.com',
	'www.fortnitecheats.com',
	'warzonehacks.net',
	'www.warzonehacks.net',
	'warzonescheats.net',
	'www.warzonescheats.net',
	'warzonescheats.com',
	'www.warzonescheats.com',
	'warzonescheats.xyz',
	'www.warzonescheats.xyz',
]);

const SECURITY_HEADERS: Record<string, string> = {
	'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
	'X-Content-Type-Options': 'nosniff',
	'Referrer-Policy': 'strict-origin-when-cross-origin',
	'X-Frame-Options': 'DENY',
	'Cross-Origin-Opener-Policy': 'same-origin',
	'Cross-Origin-Resource-Policy': 'same-origin',
	'Cross-Origin-Embedder-Policy': 'credentialless',
	'Origin-Agent-Cluster': '?1',
	'Permissions-Policy':
		'accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()',
	'Content-Security-Policy': [
		"default-src 'self'",
		"base-uri 'self'",
		"object-src 'none'",
		"frame-ancestors 'none'",
		"form-action 'self' https://zadeyo.com",
		"img-src 'self' data: blob: https:",
		"font-src 'self' data:",
		"style-src 'self' 'unsafe-inline'",
		"script-src 'self'",
		"connect-src 'self'",
		'upgrade-insecure-requests',
		'trusted-types default',
		"require-trusted-types-for 'script'",
	].join('; '),
};

function applySecurityHeaders(headers: Headers, { html = false } = {}) {
	for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
		headers.set(key, value);
	}
	if (html) {
		const contentType = headers.get('Content-Type') || '';
		if (!/charset=/i.test(contentType)) {
			headers.set('Content-Type', 'text/html; charset=utf-8');
		}
		headers.set('Cache-Control', 'public, max-age=0, must-revalidate');
		headers.set('CDN-Cache-Control', 'public, s-maxage=600, stale-while-revalidate=86400');
		headers.set('Cloudflare-CDN-Cache-Control', 'public, s-maxage=600, stale-while-revalidate=86400');
	}
}

function xmlTrailingSlashRedirect(pathname: string): string | null {
	if (!pathname.endsWith('.xml/')) return null;
	return pathname.slice(0, -1);
}

function trailingSlashRedirect(pathname: string): string | null {
	if (!pathname || pathname === '/' || pathname.includes('.') || pathname.endsWith('/')) {
		return null;
	}
	return `${pathname}/`;
}

function getClientProtocol(request: Request): string {
	const visitor = request.headers.get('cf-visitor');
	if (visitor) {
		try {
			const scheme = JSON.parse(visitor).scheme;
			if (scheme) return String(scheme).toLowerCase();
		} catch {
			// ignore malformed cf-visitor
		}
	}
	const forwarded = request.headers.get('x-forwarded-proto');
	if (forwarded) return forwarded.split(',')[0].trim().toLowerCase();
	return new URL(request.url).protocol.replace(':', '').toLowerCase();
}

function redirect(location: string): Response {
	const headers = new Headers({
		Location: location,
		'Cache-Control': 'no-store',
		'CDN-Cache-Control': 'no-store',
		'Cloudflare-CDN-Cache-Control': 'no-store',
	});
	applySecurityHeaders(headers);
	return new Response(null, { status: 301, headers });
}

export interface Env {
	ASSETS: Fetcher;
}

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const url = new URL(request.url);
		const host = (request.headers.get('host') || url.hostname).split(':')[0].toLowerCase();
		const proto = getClientProtocol(request);

		const isLegacyHost = LEGACY_HOSTS.has(host) && host !== CANONICAL_HOST;
		const isProductionHost = host === CANONICAL_HOST || host === WWW_HOST || isLegacyHost;
		const needsHostRedirect = host === WWW_HOST || isLegacyHost;
		const needsHttpsRedirect = isProductionHost && proto === 'http';

		if (
			url.pathname === '/brand-studio' ||
			url.pathname.startsWith('/brand-studio/') ||
			url.pathname === '/__brand' ||
			url.pathname.startsWith('/__brand/')
		) {
			return new Response('Not found', { status: 404, headers: new Headers({ 'Cache-Control': 'no-store' }) });
		}

		if (needsHostRedirect || needsHttpsRedirect) {
			const mappedPath = PATH_REDIRECTS[url.pathname] ?? url.pathname;
			return redirect(new URL(mappedPath + url.search, CANONICAL_ORIGIN).toString());
		}

		const pathRedirect =
			PATH_REDIRECTS[url.pathname] ??
			CANNIBAL_REDIRECTS[url.pathname] ??
			xmlTrailingSlashRedirect(url.pathname) ??
			trailingSlashRedirect(url.pathname);
		if (pathRedirect) {
			return redirect(new URL(pathRedirect + url.search, CANONICAL_ORIGIN).toString());
		}

		const response = await env.ASSETS.fetch(request);
		const headers = new Headers(response.headers);
		const contentType = headers.get('Content-Type') || '';
		const isHtml = contentType.includes('text/html');
		applySecurityHeaders(headers, { html: isHtml });

		return new Response(response.body, {
			status: response.status,
			statusText: response.statusText,
			headers,
		});
	},
};
