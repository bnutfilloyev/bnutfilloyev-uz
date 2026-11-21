import Cursor  from '@/components/Cursor'
import Nav     from '@/components/Nav'
import Hero    from '@/components/Hero'
import Work    from '@/components/Work'
import About   from '@/components/About'
import Skills  from '@/components/Skills'
import Resume  from '@/components/Resume'
import Contact from '@/components/Contact'
import Footer  from '@/components/Footer'

// Fetched straight from GitHub (not via our own /api route, which isn't reachable at build time).
async function getGitHubStats() {
  try {
    const headers: Record<string, string> = {
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
    }
    if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`
    const res = await fetch('https://api.github.com/users/bnutfilloyev', { headers, next: { revalidate: 3600 } })
    if (!res.ok) return null
    const data = await res.json()
    return { repos: data.public_repos as number, followers: data.followers as number }
  } catch {
    return null
  }
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Bekhruz Nutfilloev',
  url: 'https://bnutfilloyev.uz',
  jobTitle: 'Machine Learning Engineer',
  worksFor: { '@type': 'Organization', name: 'AI Implementation Group' },
  address: { '@type': 'PostalAddress', addressLocality: 'Tashkent', addressCountry: 'UZ' },
  sameAs: [
    'https://www.instagram.com/bnutfilloyev/',
    'https://x.com/bnutfilloyev',
    'https://t.me/bnutfilloyev',
    'https://linkedin.com/in/bnutfilloyev',
    'https://github.com/bnutfilloyev',
  ],
}

export default async function Home() {
  const stats = await getGitHubStats()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, '\\u003c') }}
      />
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Work />
        <About stats={stats} />
        <Skills />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
