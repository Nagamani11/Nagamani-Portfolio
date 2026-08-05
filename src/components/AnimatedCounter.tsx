import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface Props {
  value: number
  suffix?: string
  prefix?: string
  duration?: number
  decimals?: number
}

export default function AnimatedCounter({ value, suffix = '', prefix = '', duration = 1800, decimals = 0 }: Props) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const start = 0
    const end = value
    const startTime = performance.now()

    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(start + (end - start) * eased)
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [inView, value, duration])

  const formatted = decimals > 0 ? count.toFixed(decimals) : Math.round(count).toString()

  return (
    <span ref={ref}>
      {prefix}{formatted}{suffix}
    </span>
  )
}
