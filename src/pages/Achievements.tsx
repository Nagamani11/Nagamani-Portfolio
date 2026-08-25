import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import AnimatedCounter from '../components/AnimatedCounter'

const achievements = [
  { title: 'Google Play Apps', value: 3, suffix: '', description: 'Published and successfully maintaining production-ready Android applications on the Google Play Store.', color: '#22c55e' },
  { title: 'Live Platforms', value: 3, suffix: '', description: 'Developed and deployed high-performance corporate websites with enterprise-grade SEO.', color: '#3b82f6' },
  { title: 'Active Users', value: 10, suffix: 'K+', description: 'Combined active user base across deployed mobile applications and web portals.', color: '#8b5cf6' },
  { title: 'Lines of Code', value: 50, suffix: 'K+', description: 'Clean, documented, and production-tested code across full-stack applications.', color: '#f59e0b' },
  { title: 'Payment Processing', value: 100, suffix: '%', description: 'Secure transaction completion rate via Razorpay integrations across platforms.', color: '#ec4899' }
]

export default function Achievements() {
  return (
    <div style={{ paddingTop: 100, paddingBottom: 100, background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 40px' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64 }}>
          <SectionHeading label="Milestones" title={"Impact &<br /><em>Achievements</em>"} subtitle="Measurable results and key milestones from my professional journey." />
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, borderColor: `${a.color}50`, boxShadow: `0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px ${a.color}20` }}
              className="card-dark"
              style={{
                padding: '40px', display: 'flex', flexDirection: 'column',
                position: 'relative', overflow: 'hidden'
              }}
            >
              {/* Glow overlay */}
              <div style={{ position: 'absolute', top: 0, right: 0, width: 150, height: 150, background: `radial-gradient(circle at top right, ${a.color}25 0%, transparent 70%)` }} />
              
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: 56, color: 'var(--text-primary)', lineHeight: 1, marginBottom: 12 }}>
                <AnimatedCounter value={a.value} suffix={a.suffix} />
              </div>
              
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, color: a.color, margin: '0 0 16px' }}>{a.title}</h3>
              
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0, flexGrow: 1 }}>
                {a.description}
              </p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </div>
  )
}
