import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div style={{ minHeight: '100vh', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px', position: 'relative', overflow: 'hidden' }}>
      {/* Background decorations */}
      <div style={{ position: 'absolute', top: '10%', left: '5%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(91,92,246,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(167,139,250,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{ textAlign: 'center', maxWidth: 600, position: 'relative', zIndex: 1 }}
      >
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ fontFamily: 'var(--font-heading)', fontSize: 160, color: '#080808', lineHeight: 1, marginBottom: 0, letterSpacing: '-0.05em', display: 'block' }}
        >
          <span style={{ background: 'linear-gradient(135deg, #080808 0%, #5b5cf6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>404</span>
        </motion.div>

        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, color: '#080808', margin: '0 0 16px', letterSpacing: '-0.025em' }}>
          Page not found
        </h1>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, color: '#737373', lineHeight: 1.7, marginBottom: 48 }}>
          {"The page you're looking for doesn't exist or has been moved. Let's get you back on track."}
        </p>

        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 15, color: '#fff', background: '#080808', padding: '13px 28px', borderRadius: 14, textDecoration: 'none', transition: 'all 0.2s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#5b5cf6'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#080808'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}
          >
            ← Go Home
          </Link>
          <Link to="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15, color: '#080808', background: 'transparent', padding: '12px 28px', borderRadius: 14, textDecoration: 'none', border: '1.5px solid rgba(0,0,0,0.14)', transition: 'all 0.2s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,0,0,0.3)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,0,0,0.14)' }}
          >
            View Projects
          </Link>
        </div>

        <div style={{ marginTop: 64 }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: '#aaa', marginBottom: 16 }}>Popular pages</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { label: 'About', path: '/about' },
              { label: 'Experience', path: '/experience' },
              { label: 'Skills', path: '/skills' },
              { label: 'Contact', path: '/contact' },
            ].map(link => (
              <Link key={link.path} to={link.path} style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: '#5b5cf6', textDecoration: 'none', background: 'rgba(91,92,246,0.07)', padding: '6px 14px', borderRadius: 99, transition: 'background 0.2s' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(91,92,246,0.14)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'rgba(91,92,246,0.07)'}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
