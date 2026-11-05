import { execSync } from 'node:child_process'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const SITE_URL = 'https://medham.vercel.app/'

// Date of the last commit that touched the site itself, so README or config
// commits don't bump it. If the build has no git history, a deploy only happens
// because something was pushed, so the build date is the next best answer.
function lastContentChange() {
  try {
    const date = execSync('git log -1 --format=%cs -- src public index.html', {
      stdio: ['ignore', 'pipe', 'ignore'],
    })
      .toString()
      .trim()
    if (/^\d{4}-\d{2}-\d{2}$/.test(date)) return date
  } catch {
    // not a git checkout (or git missing): fall through
  }
  return new Date().toISOString().slice(0, 10)
}

// Emitted from inside `vite build` rather than a separate script, so it still runs
// if the host overrides the build command. Replaces a hand-edited public/sitemap.xml
// whose lastmod went stale on every content change.
const sitemap = () => ({
  name: 'generate-sitemap',
  apply: 'build',
  generateBundle() {
    this.emitFile({
      type: 'asset',
      fileName: 'sitemap.xml',
      source: `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}</loc>
    <lastmod>${lastContentChange()}</lastmod>
  </url>
</urlset>
`,
    })
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), sitemap()],
})
