import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SkillCard from '../components/SkillCard'
import SectionHeading from '../components/SectionHeading'

const allSkills = [
  { name: 'React.js', level: 95, category: 'Frontend', icon: '⚛️' },
  { name: 'TypeScript', level: 90, category: 'Frontend', icon: '🔷' },
  { name: 'JavaScript', level: 95, category: 'Frontend', icon: '🟨' },
  { name: 'Tailwind CSS', level: 92, category: 'Frontend', icon: '💨' },
  { name: 'HTML5 / CSS3', level: 96, category: 'Frontend', icon: '🌐' },
  { name: 'Redux / Context', level: 85, category: 'Frontend', icon: '🔄' },
  { name: 'React Native', level: 90, category: 'Mobile', icon: '📱' },
  { name: 'Android Studio', level: 78, category: 'Mobile', icon: '🤖' },
  { name: 'Expo', level: 82, category: 'Mobile', icon: '📦' },
  { name: 'Python', level: 88, category: 'Backend', icon: '🐍' },
  { name: 'Django', level: 90, category: 'Backend', icon: '🎯' },
  { name: 'Django REST', level: 92, category: 'Backend', icon: '🔌' },
  { name: 'PostgreSQL', level: 85, category: 'Database', icon: '🐘' },
  { name: 'MySQL', level: 80, category: 'Database', icon: '🗄️' },
  { name: 'Firebase', level: 82, category: 'Database', icon: '🔥' },
  { name: 'Redis', level: 72, category: 'Database', icon: '⚡' },
  { name: 'AWS SNS', level: 75, category: 'Cloud', icon: '☁️' },
  { name: 'Docker', level: 70, category: 'Cloud', icon: '🐳' },
  { name: 'Razorpay', level: 88, category: 'APIs', icon: '💳' },
  { name: 'Stripe', level: 78, category: 'APIs', icon: '💰' },
  { name: 'Google Maps', level: 85, category: 'APIs', icon: '🗺️' },
  { name: 'REST APIs', level: 95, category: 'APIs', icon: '🔗' },
  { name: 'Git / GitHub', level: 92, category: 'Tools', icon: '🐙' },
  { name: 'VS Code', level: 96, category: 'Tools', icon: '💻' },
  { name: 'Postman', level: 90, category: 'Tools', icon: '📬' },
  { name: 'Power BI', level: 72, category: 'Tools', icon: '📊' },
  { name: 'Figma', level: 68, category: 'Design', icon: '🎨' },
  { name: 'UI/UX Design', level: 70, category: 'Design', icon: '✨' },
]

const categories = ['All', 'Frontend', 'Mobile', 'Backend', 'Database', 'Cloud', 'APIs', 'Tools', 'Design']

export default function Skills() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? allSkills : allSkills.filter(s => s.category === active)

  return (
    <div style={{ background: '#fff', paddingTop: 80 }}>
      <section style={{ padding: '80px 40px 120px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <SectionHeading
            label="Skills"
            title={"Technical<br /><em>Proficiency</em>"}
            subtitle="A comprehensive view of my skills across frontend, backend, mobile, and cloud."
          />

          {/* Category filter */}
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 56 }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                style={{
                  fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 13,
                  padding: '8px 20px', borderRadius: 99, border: 'none', cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  background: active === cat ? '#080808' : 'rgba(0,0,0,0.05)',
                  color: active === cat ? '#fff' : '#737373',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}
            >
              {filtered.map((s, i) => (
                <SkillCard key={s.name} {...s} delay={i * 0.04} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Summary radar alternative: category summary bars */}
          <motion.div
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            style={{ marginTop: 80, background: '#fafafa', borderRadius: 28, padding: '56px', border: '1px solid rgba(0,0,0,0.06)' }}
          >
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 32, color: '#080808', marginBottom: 40 }}>Domain Expertise</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px 60px' }}>
              {[
                { label: 'Frontend Development', level: 93, description: 'React, TypeScript, Tailwind, responsive design' },
                { label: 'Mobile Development', level: 88, description: 'React Native, Play Store deployment, offline UX' },
                { label: 'Backend Engineering', level: 90, description: 'Django, REST APIs, authentication, integrations' },
                { label: 'Database Design', level: 83, description: 'PostgreSQL, MySQL, Firebase, Redis caching' },
                { label: 'Cloud & DevOps', label2: '', level: 72, description: 'AWS SNS, Docker, CI/CD pipelines' },
                { label: 'API Integrations', level: 88, description: 'Payments, maps, notifications, third-party services' },
              ].map((item, i) => (
                <div key={item.label}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                    <div>
                      <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 15, color: '#080808' }}>{item.label}</span>
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: '#aaa', marginLeft: 10 }}>{item.description}</span>
                    </div>
                    <span style={{ fontFamily: 'var(--font-code)', fontSize: 14, color: '#5b5cf6', fontWeight: 600 }}>{item.level}%</span>
                  </div>
                  <div style={{ height: 6, background: 'rgba(0,0,0,0.07)', borderRadius: 99, overflow: 'hidden' }}>
                    <motion.div
                      initial={{ width: 0 }} whileInView={{ width: `${item.level}%` }} viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                      style={{ height: '100%', borderRadius: 99, background: 'linear-gradient(90deg, #5b5cf6, #a78bfa)' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
