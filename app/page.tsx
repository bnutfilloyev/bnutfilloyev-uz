import Cursor  from '@/components/Cursor'
import Nav     from '@/components/Nav'
import Hero    from '@/components/Hero'
import Work    from '@/components/Work'
import About   from '@/components/About'
import Skills  from '@/components/Skills'
import Resume  from '@/components/Resume'
import Contact from '@/components/Contact'
import Footer  from '@/components/Footer'

async function getGitHubStats() {
  try {
    const base = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000'
    const res  = await fetch(`${base}/api/github`, { next: { revalidate: 3600 } })
    if (!res.ok) return null
    return res.json() as Promise<{ repos: number; followers: number }>
  } catch {
    return null
  }
}

export default async function Home() {
  const stats = await getGitHubStats()

  return (
    <>
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
