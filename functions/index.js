// Cloudflare Pages Function — runs only for the root path "/".
// Replaces the former next-intl middleware: detects the visitor's preferred
// language from the Accept-Language header and redirects to /zh or /en.
// All other paths are served as static files (this function does not touch them).

const SUPPORTED = ['zh', 'en'];
const DEFAULT_LOCALE = 'zh';

export function onRequest({ request }) {
  const url = new URL(request.url);
  const accept = (request.headers.get('accept-language') || '').toLowerCase();

  // Pick the first supported locale that appears in Accept-Language; else default.
  let locale = DEFAULT_LOCALE;
  for (const tag of accept.split(',')) {
    const code = tag.trim().split(';')[0].split('-')[0]; // "en-US;q=0.9" -> "en"
    if (SUPPORTED.includes(code)) {
      locale = code;
      break;
    }
  }

  return Response.redirect(`${url.origin}/${locale}`, 302);
}
