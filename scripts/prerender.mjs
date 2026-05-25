// Post-build pre-render. Starts `vite preview`, navigates a headless browser to
// every URL in public/sitemap.xml, waits for React to render, and writes the
// rendered HTML to dist/<route>/index.html. Vercel serves these static files
// directly, so AI crawlers and Bing (which don't execute JS) see real content.

import { spawn } from 'node:child_process'
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { resolve, dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import puppeteer from 'puppeteer'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')
const DIST = join(ROOT, 'dist')
const SITEMAP = join(ROOT, 'public', 'sitemap.xml')
const PORT = 4318
const HOST = `http://localhost:${PORT}`

async function getRoutes() {
  const xml = await readFile(SITEMAP, 'utf8')
  const matches = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1])
  // Strip origin to get just the path
  return matches.map(u => {
    try {
      return new URL(u).pathname
    } catch {
      return u
    }
  })
}

function startPreview() {
  return new Promise((res, rej) => {
    const proc = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], {
      cwd: ROOT,
      stdio: ['ignore', 'pipe', 'pipe'],
      shell: process.platform === 'win32',
    })
    let ready = false
    // Strip ANSI escape codes before matching (vite uses chalk colors).
    const stripAnsi = (s) => s.replace(/\[[0-9;]*m/g, '')
    proc.stdout.on('data', (chunk) => {
      const out = chunk.toString()
      process.stdout.write(`[vite preview] ${out}`)
      if (!ready && /localhost:\d+/.test(stripAnsi(out))) {
        ready = true
        setTimeout(() => res(proc), 500)
      }
    })
    proc.stderr.on('data', (chunk) => process.stderr.write(`[vite preview err] ${chunk}`))
    proc.on('error', rej)
    setTimeout(() => { if (!ready) rej(new Error('vite preview did not start in time')) }, 30000)
  })
}

async function prerender() {
  console.log('\n[prerender] starting...')
  if (!existsSync(DIST)) {
    console.error('[prerender] dist/ not found. Run `vite build` first.')
    process.exit(1)
  }

  const routes = await getRoutes()
  console.log(`[prerender] ${routes.length} routes from sitemap`)

  const preview = await startPreview()
  console.log('[prerender] preview server up at', HOST)

  let browser
  try {
    browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    })

    let succeeded = 0
    for (const route of routes) {
      const url = `${HOST}${route}`
      const page = await browser.newPage()
      page.setDefaultNavigationTimeout(45000)
      try {
        await page.goto(url, { waitUntil: 'networkidle0' })
        // Wait one more tick for any setTimeout-based schema injections
        await new Promise(r => setTimeout(r, 250))

        const html = await page.content()
        const outDir = join(DIST, route.replace(/^\//, '').replace(/\/$/, ''))
        const outFile = route === '/' ? join(DIST, 'index.html') : join(outDir, 'index.html')
        await mkdir(dirname(outFile), { recursive: true })
        await writeFile(outFile, html, 'utf8')

        succeeded++
        console.log(`[prerender]  ✓ ${route}  (${(html.length / 1024).toFixed(1)} KB)`)
      } catch (err) {
        console.error(`[prerender]  ✗ ${route}  ${err.message}`)
      } finally {
        await page.close()
      }
    }

    console.log(`[prerender] done: ${succeeded}/${routes.length} routes rendered`)
  } finally {
    if (browser) await browser.close()
    preview.kill()
  }
}

prerender().catch((err) => {
  console.error('[prerender] fatal:', err)
  process.exit(1)
})
