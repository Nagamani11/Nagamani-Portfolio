import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost' | 'accent'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  href?: string
  target?: string
  icon?: ReactNode
  iconRight?: boolean
  fullWidth?: boolean
  type?: 'button' | 'submit'
}

export default function Button({
  children, variant = 'primary', size = 'md', onClick, href, target,
  icon, iconRight = false, fullWidth = false, type = 'button',
}: Props) {
  const sizes = {
    sm: { padding: '8px 16px', fontSize: 13, borderRadius: 8, gap: 6 },
    md: { padding: '11px 24px', fontSize: 15, borderRadius: 12, gap: 8 },
    lg: { padding: '14px 32px', fontSize: 16, borderRadius: 14, gap: 10 },
  }

  const variants = {
    primary: { background: '#080808', color: '#fff', border: '1.5px solid #080808' },
    secondary: { background: 'transparent', color: '#080808', border: '1.5px solid rgba(0,0,0,0.18)' },
    ghost: { background: 'transparent', color: '#555', border: '1.5px solid transparent' },
    accent: { background: '#5b5cf6', color: '#fff', border: '1.5px solid #5b5cf6' },
  }

  const hoverMap = {
    primary: { background: '#5b5cf6', borderColor: '#5b5cf6' },
    secondary: { background: 'rgba(0,0,0,0.04)', borderColor: 'rgba(0,0,0,0.25)' },
    ghost: { background: 'rgba(0,0,0,0.04)', color: '#080808' },
    accent: { background: '#4a4bdf', borderColor: '#4a4bdf' },
  }

  const style: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: sizes[size].gap,
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    letterSpacing: '-0.01em',
    cursor: 'pointer',
    textDecoration: 'none',
    width: fullWidth ? '100%' : 'auto',
    transition: 'all 0.22s cubic-bezier(0.22,1,0.36,1)',
    ...sizes[size],
    ...variants[variant],
  }

  const handleEnter = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget as HTMLElement
    Object.assign(el.style, hoverMap[variant])
    el.style.transform = 'translateY(-1px)'
    el.style.boxShadow = variant === 'primary' || variant === 'accent'
      ? '0 8px 24px rgba(91,92,246,0.25)'
      : '0 4px 16px rgba(0,0,0,0.08)'
  }

  const handleLeave = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget as HTMLElement
    Object.assign(el.style, variants[variant])
    el.style.transform = 'translateY(0)'
    el.style.boxShadow = 'none'
  }

  const content = (
    <>
      {icon && !iconRight && icon}
      {children}
      {icon && iconRight && icon}
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        style={style}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      style={style}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.button>
  )
}
