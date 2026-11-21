import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const LIMITS = { name: 100, email: 200, subject: 150, message: 5000 } as const
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
   .replace(/"/g, '&quot;').replace(/'/g, '&#39;')

const fail = (error: string, status: number) => NextResponse.json({ error }, { status })

export async function POST(req: Request) {
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return fail('The form data could not be read.', 400)
  }

  // Honeypot filled in → a bot. Pretend success so it doesn't retry.
  if (typeof body.company === 'string' && body.company.trim() !== '') {
    return NextResponse.json({ ok: true })
  }

  const field = (k: keyof typeof LIMITS) => (typeof body[k] === 'string' ? (body[k] as string).trim() : '')
  const name = field('name'), email = field('email'), subject = field('subject'), message = field('message')

  if (!name || !email || !subject || !message) return fail('Fill in every field.', 400)
  if (!EMAIL_RE.test(email)) return fail('The email address looks incomplete.', 400)
  for (const k of Object.keys(LIMITS) as (keyof typeof LIMITS)[]) {
    if (field(k).length > LIMITS[k]) return fail(`The ${k} is too long.`, 400)
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('Contact form: RESEND_API_KEY is not set')
    return fail('The mail service is not configured.', 500)
  }

  const resend = new Resend(process.env.RESEND_API_KEY)
  // Resend returns { data, error } rather than throwing on API errors.
  const { error } = await resend.emails.send({
    from: 'Portfolio <noreply@bnutfilloyev.uz>',
    to: 'bnutfilloyev@gmail.com',
    replyTo: email,
    subject: `[Portfolio] ${subject.replace(/[\r\n]+/g, ' ')}`,
    text: `From: ${name} <${email}>\nSubject: ${subject}\n\n${message}`,
    html: `
      <div style="font-family:monospace;max-width:560px;color:#111">
        <p style="border-bottom:1px solid #eee;padding-bottom:12px;margin-bottom:20px;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:.08em">
          New message from bnutfilloyev.uz
        </p>
        <p><strong>From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <p style="margin-top:20px;padding:16px;background:#f8f8f8;border-left:3px solid #C8A96E;white-space:pre-wrap">${escapeHtml(message)}</p>
        <p style="margin-top:20px;font-size:11px;color:#aaa">Sent via bnutfilloyev.uz contact form</p>
      </div>
    `,
  })

  if (error) {
    console.error('Contact form: Resend error', error)
    return fail('The mail service rejected the message.', 502)
  }

  return NextResponse.json({ ok: true })
}
