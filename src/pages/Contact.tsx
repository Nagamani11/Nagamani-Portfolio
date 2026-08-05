import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

const contactMethods = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: 'Email',
    value: 'nagamani.gugulothu@gmail.com',
    href: 'mailto:nagamani.gugulothu@gmail.com',
    description: 'Best way to reach me for project inquiries',
    color: '#5b5cf6',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.6 13.06 19.79 19.79 0 0 1 1.52 4.5 2 2 0 0 1 3.5 2.3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    label: 'Phone',
    value: '+91 98765 43210',
    href: 'tel:+919876543210',
    description: 'Available Mon–Sat, 9 AM – 7 PM IST',
    color: '#22c55e',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
    label: 'LinkedIn',
    value: 'linkedin.com/in/nagamani-gugulothu',
    href: 'https://linkedin.com/in/nagamani-gugulothu',
    description: 'Connect for professional networking',
    color: '#0077b5',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
    ),
    label: 'GitHub',
    value: 'github.com/nagamanigugulothu',
    href: 'https://github.com/nagamanigugulothu',
    description: 'Browse my open-source work',
    color: '#080808',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
      </svg>
    ),
    label: 'Resume',
    value: 'Download my resume (PDF)',
    href: '#',
    description: 'Updated July 2024',
    color: '#f59e0b',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Location',
    value: 'Hyderabad, Telangana, India',
    href: 'https://maps.google.com/?q=Hyderabad+Telangana+India',
    description: 'Open to remote opportunities worldwide',
    color: '#ef4444',
  },
]

export default function Contact() {
  return (
    <div style={{ background: '#fff', paddingTop: 80 }}>
      {/* Hero */}
      <section style={{ padding: '80px 40px 100px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -100, right: -80, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(91,92,246,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -80, left: -60, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(167,139,250,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 100, alignItems: 'start' }}>
            {/* Left */}
            <div>
              <SectionHeading
                label="Contact"
                title={"Let's work<br /><em>together</em>"}
                subtitle="Whether you have a project in mind, want to discuss opportunities, or just want to say hi — my inbox is always open."
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
                style={{ background: '#fafafa', borderRadius: 20, padding: '28px', border: '1px solid rgba(0,0,0,0.07)', marginBottom: 32 }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                  <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#22c55e' }} />
                  <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 15, color: '#080808' }}>Available for Work</span>
                </div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: '#737373', lineHeight: 1.7, margin: 0 }}>
                  {"I'm currently available for freelance projects, technical consulting, and full-time remote positions. Typical response time is under 24 hours."}
                </p>
              </motion.div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  { icon: '⚡', text: 'Response within 24 hours' },
                  { icon: '🌍', text: 'Available for remote work globally' },
                  { icon: '🕐', text: 'Based in IST (UTC+5:30)' },
                  { icon: '💬', text: 'Fluent in English and Telugu' },
                ].map(item => (
                  <div key={item.text} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                    <span style={{ fontSize: 18 }}>{item.icon}</span>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: '#555' }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Contact methods */}
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
                {contactMethods.map((method, i) => (
                  <motion.a
                    key={method.label}
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    whileHover={{ y: -4, boxShadow: '0 16px 48px rgba(0,0,0,0.1)' }}
                    style={{
                      background: '#fff', border: '1px solid rgba(0,0,0,0.07)',
                      borderRadius: 20, padding: '24px', textDecoration: 'none',
                      display: 'block', transition: 'all 0.3s ease',
                    }}
                  >
                    <div style={{ width: 48, height: 48, borderRadius: 14, background: `${method.color}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: method.color, marginBottom: 16 }}>
                      {method.icon}
                    </div>
                    <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 14, color: '#080808', marginBottom: 4 }}>{method.label}</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: '#5b5cf6', marginBottom: 6, wordBreak: 'break-all' }}>{method.value}</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: '#aaa' }}>{method.description}</div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map-style location card */}
      <section style={{ padding: '0 40px 100px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ borderRadius: 28, overflow: 'hidden', border: '1px solid rgba(0,0,0,0.07)', position: 'relative', height: 300, background: 'linear-gradient(135deg, #f0f4ff 0%, #e8e0ff 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            {/* Decorative map-like background */}
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(91,92,246,0.05) 40px, rgba(91,92,246,0.05) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(91,92,246,0.05) 40px, rgba(91,92,246,0.05) 41px)' }} />
            <div style={{ position: 'relative', textAlign: 'center' }}>
              <div style={{ fontSize: 48, marginBottom: 12 }}>📍</div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 32, color: '#080808', margin: '0 0 8px' }}>Hyderabad, India</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: '#737373', margin: '0 0 20px' }}>Telangana · UTC+5:30 · Open to global remote work</p>
              <a
                href="https://maps.google.com/?q=Hyderabad+Telangana+India"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 14, color: '#fff', background: '#080808', padding: '10px 24px', borderRadius: 10, textDecoration: 'none', transition: 'all 0.2s' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = '#5b5cf6'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = '#080808'}
              >
                View on Google Maps →
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
