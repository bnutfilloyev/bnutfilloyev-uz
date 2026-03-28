'use client'
import { useEffect } from 'react'

export default function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById('cursor')
    if (!cursor) return

    const move = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px'
      cursor.style.top  = e.clientY + 'px'
    }
    const enter = () => cursor.classList.remove('hidden')
    const leave = () => cursor.classList.add('hidden')

    document.addEventListener('mousemove', move)
    document.addEventListener('mouseenter', enter)
    document.addEventListener('mouseleave', leave)

    // Large on interactive elements
    const addLarge  = () => cursor.classList.add('large')
    const rmLarge   = () => cursor.classList.remove('large')
    const bindHover = () => {
      document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseenter', addLarge)
        el.addEventListener('mouseleave', rmLarge)
      })
    }
    bindHover()
    const obs = new MutationObserver(bindHover)
    obs.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', move)
      document.removeEventListener('mouseenter', enter)
      document.removeEventListener('mouseleave', leave)
      obs.disconnect()
    }
  }, [])

  return (
    <>
      <div id="cursor" aria-hidden="true" />
      <div id="progress" aria-hidden="true">
        <div id="progress-fill" />
      </div>
    </>
  )
}
