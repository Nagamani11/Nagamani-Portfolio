import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { Link } from 'react-router-dom'

const values = [
  { icon: '🎯', title: 'Precision', description: 'Every line of code is intentional. I build systems that are clean, maintainable, and built to last.' },
  { icon: '⚡', title: 'Performance', description: "Speed matters. From optimized queries to lazy-loaded bundles — I don't ship slow software." },
  { icon: '🤝', title: 'Collaboration', description: 'Great software is built with great communication. I keep clients informed every step of the way.' },
  { icon: '🚀', title: 'Innovation', description: 'I stay current with the latest tools and approaches to bring modern solutions to every project.' },
]

const highlights = [
  { number: '2+', label: 'Years of professional experience' },
  { number: '5+', label: 'Projects shipped across web and mobile' },
  { number: '3', label: 'Apps live on Google Play Store' },
  { number: '3', label: 'Production websites currently live' },
]

export default function About() {
  return (
    <div style={{ background: '#fff', paddingTop: 80 }}>
      {/* Hero */}
      <section style={{ padding: '80px 40px 100px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -100, right: -100, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(91,92,246,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 100, alignItems: 'center' }}>
            <div>
              <SectionHeading label="About Me" title={"Crafting software<br /><em>with purpose</em>"} subtitle="I'm Gugulothu Nagamani — a Full Stack Developer from Hyderabad, India, passionate about building software that makes a real difference." />
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: '#555', lineHeight: 1.8, marginBottom: 20 }}>
                With 2 years of professional experience spanning React Native, Django, and PostgreSQL, I specialize in building end-to-end digital products that scale. My journey started with a B.Tech in Computer Science from JNTU Hyderabad, and since then I've shipped everything from real-time booking platforms to pharmaceutical engineering websites.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: '#555', lineHeight: 1.8, marginBottom: 32 }}>
                Currently working as a Full Stack Developer at AutoBrez, I'm developing the company website and a Trekking & Fitness application. Previously at HiFix Innovatives, I architected and built a multi-sided marketplace serving thousands of users across India, including React Native apps on the Play Store and a Django REST backend.
              </p>
              <div style={{ display: 'flex', gap: 16 }}>
                <Link to="/experience" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 15, color: '#fff', background: '#080808', padding: '12px 26px', borderRadius: 12, textDecoration: 'none', transition: 'all 0.2s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#5b5cf6' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#080808' }}
                >
                  View Experience
                </Link>
                <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15, color: '#080808', background: 'transparent', padding: '11px 26px', borderRadius: 12, textDecoration: 'none', border: '1.5px solid rgba(0,0,0,0.14)', transition: 'all 0.2s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,0,0,0.3)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,0,0,0.14)' }}
                >
                  Get In Touch
                </Link>
              </div>
            </div>

            {/* Photo card */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} style={{ position: 'relative' }}>
              <div style={{ borderRadius: 28, overflow: 'hidden', height: 540, background: '#f0f0f8', boxShadow: '0 32px 80px rgba(91,92,246,0.12)' }}>
                <img
                  src="/assets/Developer.jpeg"
                  alt="Gugulothu Nagamani - Full Stack Developer"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ position: 'absolute', bottom: -24, left: -24, background: '#fff', borderRadius: 20, padding: '20px 24px', boxShadow: '0 16px 48px rgba(0,0,0,0.1)', border: '1px solid rgba(0,0,0,0.07)' }}>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>Location</div>
                <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 16, color: '#080808' }}>📍 Hyderabad, India</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: '#737373', marginTop: 2 }}>Telangana · UTC+5:30</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Career highlights */}
      <section style={{ padding: '80px 40px', background: '#fafafa', borderTop: '1px solid rgba(0,0,0,0.06)', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
            {highlights.map((h, i) => (
              <motion.div key={h.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                style={{ textAlign: 'center', padding: '32px 24px', borderRight: i < highlights.length - 1 ? '1px solid rgba(0,0,0,0.07)' : 'none' }}
              >
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: 52, color: '#080808', lineHeight: 1, marginBottom: 8 }}>{h.number}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: '#737373', maxWidth: 140, margin: '0 auto', lineHeight: 1.5 }}>{h.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section style={{ padding: '100px 40px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, marginBottom: 80 }}>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              style={{ background: '#080808', borderRadius: 28, padding: '48px', position: 'relative', overflow: 'hidden' }}
            >
              <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, borderRadius: '50%', background: 'rgba(91,92,246,0.2)' }} />
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, color: '#5b5cf6', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20, position: 'relative' }}>Mission</div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 32, color: '#fff', margin: '0 0 20px', lineHeight: 1.2, position: 'relative' }}>To build software that solves real problems elegantly</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, margin: 0, position: 'relative' }}>
                Every product I build starts with understanding the problem deeply. I believe the best software is invisible — it just works, and delights the people who use it.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
              style={{ background: 'linear-gradient(135deg, rgba(91,92,246,0.06) 0%, rgba(167,139,250,0.08) 100%)', borderRadius: 28, padding: '48px', border: '1px solid rgba(91,92,246,0.12)' }}
            >
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, color: '#5b5cf6', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>Vision</div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 32, color: '#080808', margin: '0 0 20px', lineHeight: 1.2 }}>To become a world-class engineer and technical leader</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: '#737373', lineHeight: 1.8, margin: 0 }}>
                {"I'm on a journey to build systems that scale to millions, lead technical teams, and contribute meaningfully to the global developer ecosystem."}
              </p>
            </motion.div>
          </div>

          <SectionHeading label="Values" title={"What I bring to<br /><em>every project</em>"} center />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6, boxShadow: '0 20px 48px rgba(0,0,0,0.09)' }}
                style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.07)', borderRadius: 20, padding: '32px', transition: 'box-shadow 0.3s' }}
              >
                <div style={{ fontSize: 32, marginBottom: 16 }}>{v.icon}</div>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: 22, color: '#080808', margin: '0 0 10px' }}>{v.title}</h4>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: '#737373', lineHeight: 1.7, margin: 0 }}>{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal details */}
      <section style={{ padding: '80px 40px 100px', background: '#fafafa', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
            <div>
              <SectionHeading label="Background" title={"The story<br />so far"} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {[
                  { label: 'Full Name', value: 'Gugulothu Nagamani' },
                  { label: 'Location', value: 'Hyderabad, Telangana, India' },
                  { label: 'Education', value: 'B.Tech, JNTU Hyderabad (CGPA: 7.5)' },
                  { label: 'Experience', value: '2+ years in Full Stack Development' },
                  { label: 'Specialization', value: 'React Native, Django, PostgreSQL' },
                  { label: 'Languages', value: 'Telugu (Native), English (Professional), Hindi (Conversational)' },
                  { label: 'Interests', value: 'Listening to Music, Gardening, Exploring New Technologies' },
                ].map(item => (
                  <div key={item.label} style={{ display: 'flex', gap: 24, padding: '16px 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
                    <div style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 13, color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.07em', minWidth: 140 }}>{item.label}</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: '#333' }}>{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionHeading label="Journey" title={"How I got<br /><em>here</em>"} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                {[
                  { year: '2020–2024', title: 'B.Tech in Computer Science', detail: 'Studied at JNTU Hyderabad (GDMM College). Discovered a passion for web development and built my first full-stack applications during final year.' },
                  { year: '2024', title: 'AI Certification & Internship', detail: 'Completed Certification in Artificial Intelligence at BIST Technologies Pvt. Ltd., Vijayawada. Gained hands-on experience with AI/ML concepts.' },
                  { year: '2024–Feb 2025', title: 'HiFix Innovatives', detail: 'Worked as Full Stack Developer. Built 3 Android apps published on Google Play Store and 2 live production websites (hifix.in and rotiwala.org).' },
                  { year: 'May 2026–Present', title: 'AutoBrez', detail: 'Currently working as Full Stack Developer. Developing company website and Trekking & Fitness application with activity tracking and personalized fitness goals.' },
                ].map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    style={{ display: 'flex', gap: 20 }}
                  >
                    <div style={{ fontFamily: 'var(--font-code)', fontSize: 12, color: '#5b5cf6', background: 'rgba(91,92,246,0.08)', padding: '4px 10px', borderRadius: 99, height: 'fit-content', whiteSpace: 'nowrap', marginTop: 2 }}>{item.year}</div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-heading)', fontSize: 18, color: '#080808', marginBottom: 6 }}>{item.title}</div>
                      <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: '#737373', lineHeight: 1.7 }}>{item.detail}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
