import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

const contactInfo = [
  { 
    label: 'Email', 
    value: 'gugulothunagamani96@gmail.com', 
    link: 'mailto:gugulothunagamani96@gmail.com', 
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
    )
  },
  { 
    label: 'Phone', 
    value: '+91 91214 81902', 
    link: 'tel:+919121481902', 
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
    )
  },
  { 
    label: 'Location', 
    value: 'Hyderabad, Telangana, India', 
    link: 'https://maps.google.com/?q=Hyderabad', 
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
    )
  }
]

export default function Contact() {
  return (
    <div style={{ paddingTop: 100, paddingBottom: 100, background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 40px' }}>
        
        <SectionHeading label="Contact" title={"Let's build something<br /><em>together</em>"} subtitle="Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!" center />
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 60, marginBottom: 60 }}>
          {contactInfo.map((info, i) => (
            <motion.a
              key={info.label}
              href={info.link}
              target={info.label === 'Location' ? '_blank' : '_self'}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, borderColor: 'var(--border-hover)', boxShadow: '0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(99,102,241,0.2)' }}
              className="card-dark"
              style={{
                padding: '40px 32px', display: 'flex', flexDirection: 'column', alignItems: 'center',
                textAlign: 'center', textDecoration: 'none'
              }}
            >
              <div style={{
                width: 64, height: 64, borderRadius: 20, marginBottom: 24,
                background: 'var(--accent-muted)', border: '1px solid var(--accent-border)',
                color: 'var(--accent-light)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: 'var(--glow-accent)'
              }}>
                {info.icon}
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 22, color: 'var(--text-primary)', margin: '0 0 8px' }}>{info.label}</h3>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--text-secondary)' }}>{info.value}</div>
            </motion.a>
          ))}
        </div>
        
        {/* Resume Download CTA */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="card-dark"
          style={{
            padding: '60px', textAlign: 'center', background: 'linear-gradient(135deg, var(--bg-surface) 0%, rgba(99,102,241,0.05) 100%)',
            position: 'relative', overflow: 'hidden'
          }}
        >
          <div style={{ position: 'absolute', top: -100, right: -100, width: 300, height: 300, background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 60%)', borderRadius: '50%', pointerEvents: 'none' }} />
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 36, color: 'var(--text-primary)', margin: '0 0 16px' }}>Prefer a traditional resume?</h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--text-secondary)', maxWidth: 500, margin: '0 auto 32px', lineHeight: 1.7 }}>
            Download my complete resume in PDF format to view my full work history, education, and technical skills offline. Last updated in August 2026.
          </p>
          <a href="#" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 15,
            color: '#fff', background: 'var(--accent)',
            padding: '16px 36px', borderRadius: 14,
            textDecoration: 'none', transition: 'all 0.25s ease',
            boxShadow: 'var(--glow-accent)'
          }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'var(--accent-light)'; el.style.transform = 'translateY(-2px)'; el.style.boxShadow = '0 12px 32px rgba(99,102,241,0.4)' }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'var(--accent)'; el.style.transform = 'translateY(0)'; el.style.boxShadow = 'var(--glow-accent)' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download Resume (PDF)
          </a>
        </motion.div>
        
      </div>
    </div>
  )
}
