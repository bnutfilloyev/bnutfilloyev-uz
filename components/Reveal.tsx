'use client'
import { useEffect, useRef, ReactNode, ElementType } from 'react'

interface Props {
  children: ReactNode
  delay?: number
  className?: string
  as?: ElementType
}

export default function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }: Props) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('in'); io.disconnect() } },
      { threshold: 0.1 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const props = {
    ref,
    className: `reveal ${className}`,
    ...(delay ? { style: { transitionDelay: `${delay}ms` } } : {}),
  }

  return <Tag {...props}>{children}</Tag>
}
