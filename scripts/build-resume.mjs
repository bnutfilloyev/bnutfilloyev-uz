// Renders resume/resume.html to public/resume.pdf with headless Chrome.
// Usage: npm run resume   (set CHROME_PATH if Chrome lives somewhere else)
import { execFileSync } from 'node:child_process'
import { existsSync, mkdtempSync, rmSync, statSync } from 'node:fs'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const root = path.resolve(import.meta.dirname, '..')
const src = path.join(root, 'resume', 'resume.html')
const out = path.join(root, 'public', 'resume.pdf')

const chrome = [
  process.env.CHROME_PATH,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].find(p => p && existsSync(p))

if (!chrome) {
  console.error('Chrome not found. Set CHROME_PATH to a Chrome/Chromium binary.')
  process.exit(1)
}

// Throwaway profile so the user's own Chrome session is never touched.
const profile = mkdtempSync(path.join(tmpdir(), 'resume-chrome-'))
try {
  execFileSync(chrome, [
    '--headless=new',
    '--disable-gpu',
    '--no-first-run',
    `--user-data-dir=${profile}`,
    '--no-pdf-header-footer',
    '--virtual-time-budget=3000',
    `--print-to-pdf=${out}`,
    pathToFileURL(src).href,
  ], { stdio: 'pipe' })
} finally {
  rmSync(profile, { recursive: true, force: true })
}

console.log(`Wrote ${path.relative(root, out)} (${Math.round(statSync(out).size / 1024)} KB)`)
