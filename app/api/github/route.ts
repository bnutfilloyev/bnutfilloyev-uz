import { NextResponse } from 'next/server'

export const revalidate = 3600 // Refresh every hour

export async function GET() {
  try {
    const headers: Record<string, string> = {
      'Accept': 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
    }
    if (process.env.GITHUB_TOKEN) {
      headers['Authorization'] = `Bearer ${process.env.GITHUB_TOKEN}`
    }

    const res = await fetch('https://api.github.com/users/bnutfilloyev', { headers })
    if (!res.ok) throw new Error('GitHub API error')

    const data = await res.json()
    return NextResponse.json({
      repos:     data.public_repos as number,
      followers: data.followers    as number,
    })
  } catch {
    // Fallback to known values
    return NextResponse.json({ repos: 73, followers: 87 })
  }
}
