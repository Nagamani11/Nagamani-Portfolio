import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

const education = [
  {
    degree: 'B.Tech in Computer Science',
    institution: 'Vaageswari College Of Engineering (JNTUH)',
    period: '2020 - 2024',
    location: 'Karimnagar, India',
    gpa: '70%',
    description: 'Specialized in software engineering, database management systems, and object-oriented programming. Active participant in coding competitions and technical symposiums.',
    icon: '🎓'
  },
  {
    degree: 'Intermediate (MPC)',
    institution: 'Prathibha Junior College (TSBIE)',
    period: '2018 - 2020',
    location: 'Bhadrachalam, India',
    gpa: '89%',
    description: 'Focused on Mathematics, Physics, and Chemistry. Developed strong analytical and problem-solving skills which laid the foundation for computer science.',
    icon: '📚'
  },
  {
    degree: 'Secondary School (SSC)',
    institution: 'Gowtham Model School (BSEAP)',
    period: '2017 - 2018',
    location: 'Bhadrachalam, India',
    gpa: '9.3 CGPA',
    description: 'Consistently ranked among the top students. Actively participated in science fairs and mathematics olympiads.',
    icon: '🏫'
  }
]

export default function Education() {
  return (
    <div style={{ paddingTop: 100, paddingBottom: 100, background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 40px' }}>
        <SectionHeading label="Education" title={"Academic<br /><em>Background</em>"} subtitle="My formal education and academic achievements that built my foundational knowledge." center />
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32, marginTop: 60 }}>
          {education.map((item, i) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="card-dark"
              style={{
                padding: '40px 48px', display: 'flex', gap: 32, alignItems: 'flex-start',
              }}
            >
              <div style={{
                width: 72, height: 72, borderRadius: 20, flexShrink: 0,
                background: 'var(--accent-muted)', border: '1px solid var(--accent-border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 32, boxShadow: 'var(--glow-accent)',
              }}>
                {item.icon}
              </div>
              
              <div style={{ flexGrow: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 26, color: 'var(--text-primary)', margin: '0 0 6px' }}>{item.degree}</h3>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 700, color: 'var(--accent-light)' }}>{item.institution}</div>
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-code)', fontSize: 14, fontWeight: 700,
                    color: 'var(--green)', background: 'var(--green-glow)',
                    border: '1px solid rgba(34,197,94,0.3)',
                    padding: '6px 16px', borderRadius: 99,
                    boxShadow: '0 0 12px rgba(34,197,94,0.2)'
                  }}>
                    {item.gpa}
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: 20, marginBottom: 20 }}>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 6 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    {item.period}
                  </span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 6 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    {item.location}
                  </span>
                </div>
                
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
