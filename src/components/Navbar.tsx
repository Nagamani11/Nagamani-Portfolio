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
  { label: 'Certificates', path: '/certificates' },
  { label: 'Achievements', path: '/achievements' },
  { label: 'GitHub', path: '/github' },
  { label: 'Testimonials', path: '/testimonials' },
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
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: scrolled ? '10px 0' : '18px 0',
          transition: 'padding 0.3s ease, background 0.3s ease, box-shadow 0.3s ease',
          background: scrolled ? 'rgba(255,255,255,0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          boxShadow: scrolled ? '0 1px 0 rgba(0,0,0,0.06)' : 'none',
        }}
      >
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 36, height: 36, borderRadius: 10,
              background: 'linear-gradient(135deg, #080808 0%, #5b5cf6 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              <span style={{ color: '#fff', fontFamily: 'var(--font-heading)', fontSize: 16, lineHeight: 1 }}>GN</span>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 14, color: '#080808', lineHeight: 1.2, letterSpacing: '-0.01em' }}>Gugulothu</div>
              <div style={{ fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: 11, color: '#737373', lineHeight: 1.2, letterSpacing: '0.04em' }}>NAGAMANI</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 2 }} className="hidden-mobile">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  fontSize: 14,
                  color: location.pathname === link.path ? '#080808' : '#737373',
                  textDecoration: 'none',
                  padding: '6px 14px',
                  borderRadius: 8,
                  background: location.pathname === link.path ? 'rgba(0,0,0,0.06)' : 'transparent',
                  transition: 'all 0.2s ease',
                  letterSpacing: '-0.01em',
                }}
                onMouseEnter={e => { if (location.pathname !== link.path) (e.currentTarget as HTMLElement).style.color = '#080808' }}
                onMouseLeave={e => { if (location.pathname !== link.path) (e.currentTarget as HTMLElement).style.color = '#737373' }}
              >
                {link.label}
              </Link>
            ))}

            {/* More dropdown */}
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => setMoreOpen(!moreOpen)}
                style={{
                  fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 14,
                  color: '#737373', background: 'transparent', border: 'none', cursor: 'pointer',
                  padding: '6px 14px', borderRadius: 8, display: 'flex', alignItems: 'center', gap: 4,
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#080808'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#737373'}
              >
                More
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ transform: moreOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
                  <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
                      position: 'absolute', top: 'calc(100% + 8px)', right: 0,
                      background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(0,0,0,0.08)', borderRadius: 14,
                      padding: '8px 0', minWidth: 180,
                      boxShadow: '0 8px 40px rgba(0,0,0,0.1)',
                    }}
                  >
                    {moreLinks.map(link => (
                      <Link
                        key={link.path}
                        to={link.path}
                        style={{
                          display: 'block', padding: '9px 18px',
                          fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 14,
                          color: location.pathname === link.path ? '#5b5cf6' : '#444',
                          textDecoration: 'none', transition: 'all 0.15s',
                        }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(91,92,246,0.06)'; (e.currentTarget as HTMLElement).style.color = '#5b5cf6' }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = location.pathname === link.path ? '#5b5cf6' : '#444' }}
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
                fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 14,
                color: '#fff', background: '#080808',
                padding: '8px 20px', borderRadius: 10,
                textDecoration: 'none', transition: 'all 0.2s ease',
                letterSpacing: '-0.01em',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#5b5cf6'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#080808'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="show-mobile"
            style={{
              background: 'transparent', border: 'none', cursor: 'pointer',
              padding: 8, borderRadius: 8, display: 'none',
            }}
            aria-label="Toggle menu"
          >
            <div style={{ width: 22, height: 16, position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <span style={{ display: 'block', height: 2, background: '#080808', borderRadius: 2, transition: 'all 0.3s', transform: mobileOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
              <span style={{ display: 'block', height: 2, background: '#080808', borderRadius: 2, transition: 'all 0.3s', opacity: mobileOpen ? 0 : 1 }} />
              <span style={{ display: 'block', height: 2, background: '#080808', borderRadius: 2, transition: 'all 0.3s', transform: mobileOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
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
              background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(20px)',
              paddingTop: 80, paddingLeft: 24, paddingRight: 24, overflowY: 'auto',
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
                    color: location.pathname === link.path ? '#5b5cf6' : '#080808',
                    textDecoration: 'none', borderBottom: '1px solid rgba(0,0,0,0.06)',
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
