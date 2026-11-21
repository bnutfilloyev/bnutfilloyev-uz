import { createReadStream } from 'node:fs'
import { Readable } from 'node:stream'
import { SLIDES_FILE, slidesAvailable } from '@/lib/mlgap'

// Decided per request: locked before SLIDES_UNLOCK_AT, served after it.
export const dynamic = 'force-dynamic'

export function GET(req: Request) {
  if (!slidesAvailable()) {
    // Too early (or no file yet): send people to the talk page instead of a 404.
    return new Response(null, {
      status: 307,
      headers: { Location: new URL('/mlgap', req.url).toString(), 'Cache-Control': 'no-store' },
    })
  }

  // Streamed, so decks larger than the 4.5 MB function response limit still work on Vercel.
  const body = Readable.toWeb(createReadStream(SLIDES_FILE)) as ReadableStream<Uint8Array>
  return new Response(body, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'inline; filename="Bekhruz_Nutfilloev_ML_Gap_slides.pdf"',
      'Cache-Control': 'public, max-age=300',
    },
  })
}
