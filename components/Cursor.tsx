'use client'
import { useEffect } from 'react'

// Custom cursor + scroll progress bar. The cursor only switches on for a real mouse
// (fine pointer with hover); touch devices keep the system behaviour.
export default function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById('cursor')
    if (!cursor) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    const root = document.documentElement
    root.classList.add('has-cursor')

    const move = (e: MouseEvent) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`
      cursor.classList.remove('hidden')
    }
    const leave = () => cursor.classList.add('hidden')
    const over = (e: MouseEvent) => {
      const t = e.target as Element | null
      cursor.classList.toggle('large', !!t?.closest('a, button'))
    }

    document.addEventListener('mousemove', move)
    document.addEventListener('mouseover', over)
    document.documentElement.addEventListener('mouseleave', leave)

    return () => {
      root.classList.remove('has-cursor')
      document.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', over)
      document.documentElement.removeEventListener('mouseleave', leave)
    }
  }, [])

  return (
    <>
      <div id="cursor" className="hidden" aria-hidden="true" />
      <div id="progress" aria-hidden="true">
        <div id="progress-fill" />
      </div>
    </>
  )
}
