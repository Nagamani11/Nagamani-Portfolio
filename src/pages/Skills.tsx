import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import SkillCard from '../components/SkillCard'

const skillCategories = ['All', 'Frontend', 'Backend', 'Database', 'Tools'] as const
type Category = typeof skillCategories[number]

const skills = [
  { name: 'React Native (CLI)', level: 92, category: 'Frontend', icon: '📱' },
  { name: 'React.js', level: 90, category: 'Frontend', icon: '⚛️' },
  { name: 'HTML5 & CSS3', level: 85, category: 'Frontend', icon: '🎨' },
  { name: 'Python', level: 90, category: 'Backend', icon: '🐍' },
  { name: 'Django', level: 92, category: 'Backend', icon: '🎯' },
  { name: 'Django REST Framework', level: 88, category: 'Backend', icon: '🔌' },
  { name: 'PostgreSQL', level: 85, category: 'Database', icon: '🐘' },
  { name: 'MySQL', level: 80, category: 'Database', icon: '🐬' },
  { name: 'Git & GitHub', level: 85, category: 'Tools', icon: '📦' },
  { name: 'Power BI', level: 75, category: 'Tools', icon: '📊' },
]

export default function Skills() {
  const [activeTab, setActiveTab] = useState<Category>('All')

  const filteredSkills = activeTab === 'All' 
    ? skills 
    : skills.filter(s => s.category === activeTab)

  return (
    <div style={{ paddingTop: 100, paddingBottom: 100, background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 40px' }}>
        <SectionHeading label="Skills" title={"Technical<br /><em>Proficiency</em>"} subtitle="My toolkit for building modern, scalable, and high-performance digital solutions." />
        
        {/* Category Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
          style={{ display: 'flex', gap: 12, marginBottom: 48, flexWrap: 'wrap' }}
        >
          {skillCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              style={{
                fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 14,
                padding: '10px 24px', borderRadius: 99, border: 'none', cursor: 'pointer',
                transition: 'all 0.25s ease',
                background: activeTab === cat ? 'var(--accent)' : 'var(--bg-elevated)',
                color: activeTab === cat ? '#fff' : 'var(--text-secondary)',
                boxShadow: activeTab === cat ? 'var(--glow-accent)' : 'inset 0 0 0 1px var(--border)',
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 60 }}>
          
          {/* Left: Dynamic Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24, alignContent: 'start' }}
            >
              {filteredSkills.map((s, i) => (
                <SkillCard key={s.name} {...s} delay={i * 0.05} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Right: Domain Expertise Stats */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: 32, padding: 48, alignSelf: 'start' }}
          >
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 32, color: 'var(--text-primary)', marginBottom: 40 }}>Domain Expertise</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: 32 }}>
              {[
                { label: 'Frontend Development', level: 90, description: 'React Native (CLI), HTML5, CSS3' },
                { label: 'Backend Engineering', level: 92, description: 'Python, Django, Django REST Framework' },
                { label: 'Database Management', level: 85, description: 'PostgreSQL, MySQL' },
                { label: 'API Integrations', level: 88, description: 'Razorpay, Google Maps API' },
                { label: 'Tools & DevOps', level: 80, description: 'GitHub, Power BI, PyLint, ESLint' },
                { label: 'Cloud & Hosting', level: 78, description: 'Firebase, GoDaddy Project Hosting' },
              ].map((item, i) => (
                <div key={item.label}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                    <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 16, color: 'var(--text-primary)' }}>{item.label}</div>
                    <div style={{ fontFamily: 'var(--font-code)', fontSize: 13, color: 'var(--accent-light)', fontWeight: 600 }}>{item.level}%</div>
                  </div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-muted)', marginBottom: 12 }}>{item.description}</div>
                  <div style={{ height: 6, background: 'var(--bg-elevated)', borderRadius: 99, overflow: 'hidden', border: '1px solid var(--border)' }}>
                    <motion.div
                      initial={{ width: 0 }} whileInView={{ width: `${item.level}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: i * 0.1 }}
                      style={{ height: '100%', background: 'linear-gradient(90deg, var(--accent), var(--purple))', borderRadius: 99, boxShadow: '0 0 10px var(--accent)' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
        </div>
      </div>
    </div>
  )
}
