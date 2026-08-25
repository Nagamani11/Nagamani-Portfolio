import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Experience', path: '/experience' },
  { label: 'Projects', path: '/projects' },
  { label: 'Skills', path: '/skills' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
]

const moreLinks = [
  { label: 'Technology', path: '/technology' },
  { label: 'Timeline', path: '/timeline' },
  { label: 'Education', path: '/education' },
  { label: 'Achievements', path: '/achievements' },
  { label: 'GitHub', path: '/github' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setMoreOpen(false)
  }, [location])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          padding: scrolled ? '10px 0' : '18px 0',
          transition: 'padding 0.3s ease, background 0.3s ease, box-shadow 0.3s ease',
          background: scrolled
            ? 'rgba(7,7,15,0.85)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
          boxShadow: scrolled ? '0 4px 40px rgba(0,0,0,0.5)' : 'none',
        }}
      >
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{
              width: 38, height: 38, borderRadius: 11,
              background: 'linear-gradient(135deg, #6366f1 0%, #a78bfa 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
              boxShadow: '0 0 20px rgba(99,102,241,0.4)',
            }}>
              <span style={{ color: '#fff', fontFamily: 'var(--font-heading)', fontSize: 16, lineHeight: 1 }}>GN</span>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 14, color: 'var(--text-primary)', lineHeight: 1.2, letterSpacing: '-0.01em' }}>Gugulothu</div>
              <div style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 10, color: 'var(--text-muted)', lineHeight: 1.2, letterSpacing: '0.08em' }}>NAGAMANI</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 2 }} className="hidden-mobile">
            {navLinks.map(link => {
              const isActive = location.pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{
                    fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 14,
                    color: isActive ? 'var(--accent-light)' : 'var(--text-secondary)',
                    textDecoration: 'none',
                    padding: '6px 14px', borderRadius: 8,
                    background: isActive ? 'rgba(99,102,241,0.1)' : 'transparent',
                    transition: 'all 0.2s ease',
                    letterSpacing: '-0.01em',
                    position: 'relative',
                  }}
                  onMouseEnter={e => { if (!isActive) (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)' }}
                  onMouseLeave={e => { if (!isActive) (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)' }}
                >
                  {link.label}
                  {isActive && (
                    <span style={{
                      position: 'absolute', bottom: -1, left: '50%', transform: 'translateX(-50%)',
                      width: 18, height: 2, borderRadius: 99,
                      background: 'linear-gradient(90deg, var(--accent), var(--purple))',
                    }} />
                  )}
                </Link>
              )
            })}

            {/* More dropdown */}
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => setMoreOpen(!moreOpen)}
                style={{
                  fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 14,
                  color: 'var(--text-secondary)', background: 'transparent',
                  border: 'none', cursor: 'pointer',
                  padding: '6px 14px', borderRadius: 8,
                  display: 'flex', alignItems: 'center', gap: 4,
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)'}
              >
                More
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ transform: moreOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
                  <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <AnimatePresence>
                {moreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      position: 'absolute', top: 'calc(100% + 10px)', right: 0,
                      background: 'rgba(13,13,26,0.95)',
                      backdropFilter: 'blur(24px)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: 16, padding: '8px 0', minWidth: 190,
                      boxShadow: '0 16px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(99,102,241,0.1)',
                    }}
                  >
                    {moreLinks.map(link => (
                      <Link
                        key={link.path}
                        to={link.path}
                        style={{
                          display: 'block', padding: '10px 18px',
                          fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 14,
                          color: location.pathname === link.path ? 'var(--accent-light)' : 'var(--text-secondary)',
                          textDecoration: 'none', transition: 'all 0.15s',
                        }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(99,102,241,0.08)'; (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)' }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = location.pathname === link.path ? 'var(--accent-light)' : 'var(--text-secondary)' }}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/contact"
              style={{
                marginLeft: 8,
                fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13,
                color: '#fff',
                background: 'linear-gradient(135deg, var(--accent), var(--purple))',
                padding: '9px 22px', borderRadius: 10,
                textDecoration: 'none', transition: 'all 0.2s ease',
                letterSpacing: '-0.01em',
                boxShadow: '0 0 20px rgba(99,102,241,0.3)',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 32px rgba(99,102,241,0.55)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 20px rgba(99,102,241,0.3)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="show-mobile"
            style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: 8, borderRadius: 8, display: 'none' }}
            aria-label="Toggle menu"
          >
            <div style={{ width: 22, height: 16, position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <span style={{ display: 'block', height: 2, background: 'var(--text-primary)', borderRadius: 2, transition: 'all 0.3s', transform: mobileOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
              <span style={{ display: 'block', height: 2, background: 'var(--text-primary)', borderRadius: 2, transition: 'all 0.3s', opacity: mobileOpen ? 0 : 1 }} />
              <span style={{ display: 'block', height: 2, background: 'var(--text-primary)', borderRadius: 2, transition: 'all 0.3s', transform: mobileOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 90,
              background: 'rgba(7,7,15,0.97)',
              backdropFilter: 'blur(24px)',
              paddingTop: 80, paddingLeft: 28, paddingRight: 28, overflowY: 'auto',
            }}
          >
            {[...navLinks, ...moreLinks].map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  to={link.path}
                  style={{
                    display: 'block', padding: '16px 0',
                    fontFamily: 'var(--font-heading)', fontSize: 28,
                    color: location.pathname === link.path ? 'var(--accent-light)' : 'var(--text-primary)',
                    textDecoration: 'none',
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </>
  )
}
