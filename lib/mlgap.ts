import { existsSync } from 'node:fs'
import path from 'node:path'

/**
 * When the ML Gap slides become public: the end of the session, Tashkent time.
 * This is the only place to change it.
 */
export const SLIDES_UNLOCK_AT = new Date('2026-11-24T13:30:00+05:00')

/** Kept outside public/ so nothing serves it before the unlock time. */
export const SLIDES_FILE = path.join(process.cwd(), 'content', 'mlgap', 'slides.pdf')

/** True only after the unlock time AND when the PDF is actually there. */
export function slidesAvailable(now: number = Date.now()): boolean {
  return now >= SLIDES_UNLOCK_AT.getTime() && existsSync(SLIDES_FILE)
}
