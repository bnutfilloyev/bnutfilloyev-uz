import { Resend } from 'resend'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json()

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: 'Portfolio <noreply@bnutfilloyev.uz>',
      to: 'bnutfilloyev@gmail.com',
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family:monospace;max-width:560px;color:#111">
          <p style="border-bottom:1px solid #eee;padding-bottom:12px;margin-bottom:20px;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:.08em">
            New message from bnutfilloyev.uz
          </p>
          <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p style="margin-top:20px;padding:16px;background:#f8f8f8;border-left:3px solid #C8A96E;white-space:pre-wrap">${message}</p>
          <p style="margin-top:20px;font-size:11px;color:#aaa">Sent via bnutfilloyev.uz contact form</p>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Send failed' }, { status: 500 })
  }
}
