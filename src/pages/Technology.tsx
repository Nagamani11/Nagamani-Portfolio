import TechnologyCard from '../components/TechnologyCard'
import SectionHeading from '../components/SectionHeading'
import { motion } from 'framer-motion'

const techStack = [
  { name: 'React.js', icon: '⚛️', category: 'Frontend', color: '#61dafb' },
  { name: 'React Native', icon: '📱', category: 'Mobile', color: '#61dafb' },
  { name: 'TypeScript', icon: '🔷', category: 'Language', color: '#3178c6' },
  { name: 'JavaScript', icon: '🟨', category: 'Language', color: '#f7df1e' },
  { name: 'HTML5', icon: '🌐', category: 'Markup', color: '#e34f26' },
  { name: 'CSS3', icon: '🎨', category: 'Styling', color: '#1572b6' },
  { name: 'Tailwind CSS', icon: '💨', category: 'Styling', color: '#06b6d4' },
  { name: 'Python', icon: '🐍', category: 'Backend', color: '#3776ab' },
  { name: 'Django', icon: '🎯', category: 'Backend', color: '#092e20' },
  { name: 'Django REST', icon: '🔌', category: 'Backend', color: '#a30000' },
  { name: 'PostgreSQL', icon: '🐘', category: 'Database', color: '#336791' },
  { name: 'MySQL', icon: '🗄️', category: 'Database', color: '#4479a1' },
  { name: 'Firebase', icon: '🔥', category: 'BaaS', color: '#ffca28' },
  { name: 'Redis', icon: '⚡', category: 'Cache', color: '#dc382d' },
  { name: 'Git', icon: '🔀', category: 'Version Control', color: '#f05032' },
  { name: 'GitHub', icon: '🐙', category: 'VCS Hosting', color: '#080808' },
  { name: 'VS Code', icon: '💻', category: 'Editor', color: '#007acc' },
  { name: 'Android Studio', icon: '🤖', category: 'Mobile IDE', color: '#3ddc84' },
  { name: 'Postman', icon: '📬', category: 'API Testing', color: '#ff6c37' },
  { name: 'Power BI', icon: '📊', category: 'Analytics', color: '#f2c811' },
  { name: 'AWS SNS', icon: '☁️', category: 'Cloud', color: '#ff9900' },
  { name: 'Docker', icon: '🐳', category: 'DevOps', color: '#2496ed' },
  { name: 'Google Maps', icon: '🗺️', category: 'API', color: '#4285f4' },
  { name: 'Razorpay', icon: '💳', category: 'Payments', color: '#3395ff' },
  { name: 'Stripe', icon: '💰', category: 'Payments', color: '#635bff' },
  { name: 'Vite', icon: '⚡', category: 'Build Tool', color: '#646cff' },
]

const groups = [
  { label: 'Frontend & Mobile', items: techStack.filter(t => ['Frontend', 'Mobile', 'Styling', 'Markup', 'Language'].includes(t.category)) },
  { label: 'Backend & Database', items: techStack.filter(t => ['Backend', 'Database', 'BaaS', 'Cache'].includes(t.category)) },
  { label: 'Tools & Infrastructure', items: techStack.filter(t => ['Version Control', 'VCS Hosting', 'Editor', 'Mobile IDE', 'API Testing', 'Analytics', 'DevOps', 'Build Tool', 'Cloud', 'API', 'Payments'].includes(t.category)) },
]

export default function Technology() {
  return (
    <div style={{ background: '#fff', paddingTop: 80 }}>
      <section style={{ padding: '80px 40px 120px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <SectionHeading
            label="Technology"
            title={"My complete<br /><em>tech stack</em>"}
            subtitle="Every tool, framework, and platform I use to build modern digital products."
            center
          />

          {groups.map((group, gi) => (
            <div key={group.label} style={{ marginBottom: 72 }}>
              <motion.div
                initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}
              >
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: 22, color: '#080808' }}>{group.label}</span>
                <div style={{ flex: 1, height: 1, background: 'rgba(0,0,0,0.08)' }} />
                <span style={{ fontFamily: 'var(--font-code)', fontSize: 12, color: '#aaa' }}>{group.items.length} technologies</span>
              </motion.div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 16 }}>
                {group.items.map((t, i) => (
                  <TechnologyCard key={t.name} {...t} delay={gi * 0.05 + i * 0.04} />
                ))}
              </div>
            </div>
          ))}

          {/* Featured technology highlight */}
          <motion.div
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            style={{ background: 'linear-gradient(135deg, #080808 0%, #1a1040 100%)', borderRadius: 28, padding: '56px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40 }}
          >
            {[
              { title: 'React Ecosystem', desc: 'React, React Native, TypeScript — my primary stack for building scalable, type-safe UIs across web and mobile.', icon: '⚛️' },
              { title: 'Django Stack', desc: 'Python, Django REST Framework, PostgreSQL — battle-tested backend stack that powers all my server-side applications.', icon: '🐍' },
              { title: 'Cloud & Payments', desc: 'AWS SNS, Firebase, Razorpay, Stripe — the infrastructure layer that makes modern apps real-time, reliable, and monetizable.', icon: '☁️' },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{item.icon}</div>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, color: '#fff', margin: '0 0 12px' }}>{item.title}</h4>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
