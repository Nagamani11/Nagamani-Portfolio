import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const footerLinks = [
  { label: 'About', path: '/about' },
  { label: 'Experience', path: '/experience' },
  { label: 'Projects', path: '/projects' },
  { label: 'Skills', path: '/skills' },
  { label: 'Technology', path: '/technology' },
  { label: 'Services', path: '/services' },
  { label: 'Education', path: '/education' },
  { label: 'Achievements', path: '/achievements' },
  { label: 'GitHub', path: '/github' },
  { label: 'Contact', path: '/contact' },
]

const socials = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/gugulothu-nagamani-203784285',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://github.com/nagamanigugulothu',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    name: 'Email',
    href: 'mailto:gugulothunagamani96@gmail.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', background: 'var(--bg-surface)', marginTop: 0 }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '60px 40px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', gap: 60, marginBottom: 56 }}>
          {/* Brand */}
          <div>
            <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <div style={{
                width: 40, height: 40, borderRadius: 12,
                background: 'linear-gradient(135deg, var(--accent) 0%, var(--purple) 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: 'var(--glow-accent)',
              }}>
                <span style={{ color: '#fff', fontFamily: 'var(--font-heading)', fontSize: 16 }}>GN</span>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 15, color: 'var(--text-primary)' }}>Gugulothu Nagamani</div>
                <div style={{ fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: 12, color: 'var(--text-secondary)' }}>Full Stack Developer</div>
              </div>
            </Link>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 240 }}>
              Building scalable web applications and enterprise systems from Hyderabad, India.
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
              {socials.map(s => (
                <motion.a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, scale: 1.05 }}
                  style={{
                    width: 40, height: 40, borderRadius: 10,
                    background: 'var(--bg-elevated)', border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--text-secondary)', textDecoration: 'none', transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.color = 'var(--accent-light)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent-border)';
                    (e.currentTarget as HTMLElement).style.background = 'var(--accent-muted)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                    (e.currentTarget as HTMLElement).style.background = 'var(--bg-elevated)';
                  }}
                  aria-label={s.name}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links grid */}
          <div>
            <div style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 12, color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>Navigation</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px 0' }}>
              {footerLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{
                    fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-secondary)',
                    textDecoration: 'none', transition: 'color 0.2s', padding: '2px 0',
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--accent-light)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)'}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div>
            <div style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 12, color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>Get in Touch</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { label: 'Email', value: 'gugulothunagamani96@gmail.com' },
                { label: 'Phone', value: '+91 91214 81902' },
                { label: 'Location', value: 'Hyderabad, Telangana, India' },
              ].map(item => (
                <div key={item.label}>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'var(--text-muted)', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 2 }}>{item.label}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-primary)' }}>{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-muted)', margin: 0 }}>
            © 2026 Gugulothu Nagamani. Crafted with precision in Hyderabad.
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-muted)', margin: 0 }}>
            React Native · Django · PostgreSQL
          </p>
        </div>
      </div>
    </footer>
  )
}
