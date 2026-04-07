// Prepend basePath for all static asset references (images, fonts, etc.)
// In production on GitHub Pages the site lives under /ddp-catalog,
// so every public-folder asset needs that prefix.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export function getAssetPath(path: string): string {
  return `${basePath}${path}`;
}
