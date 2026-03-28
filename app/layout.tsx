import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})
const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Bekhruz Nutfilloev — Machine Learning Engineer',
  description:
    'Machine Learning Engineer with 5+ years building production AI at scale. Led MyID biometric platform serving 10M+ monthly requests across 50+ banks in Uzbekistan.',
  authors: [{ name: 'Bekhruz Nutfilloev' }],
  keywords: ['Machine Learning', 'AI Engineer', 'Computer Vision', 'Biometrics', 'Tashkent', 'Uzbekistan'],
  openGraph: {
    title: 'Bekhruz Nutfilloev — Machine Learning Engineer',
    description: 'Building production AI at scale — biometric systems, computer vision, edge AI.',
    type: 'website',
    url: 'https://bnutfilloyev.uz',
  },
  twitter: {
    card: 'summary',
    site: '@bnutfilloyev',
    title: 'Bekhruz Nutfilloev — Machine Learning Engineer',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} ${mono.variable}`}>
      <body style={{ fontFamily: 'var(--font-sans)' }}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
