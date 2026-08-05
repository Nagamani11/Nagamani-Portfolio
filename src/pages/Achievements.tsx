import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import AnimatedCounter from '../components/AnimatedCounter'

const achievements = [
  {
    icon: '🏆',
    title: '4.3★ Play Store Rating',
    subtitle: 'HiFix Expert App',
    description: 'The HiFix Expert App I built achieved a 4.3-star rating on Google Play Store with 2,000+ reviews, placing it in the top 10% of home services apps in India.',
    impact: '2,000+ reviews',
    color: '#f59e0b',
  },
  {
    icon: '🚀',
    title: '10K+ App Downloads',
    subtitle: 'Combined Play Store Portfolio',
    description: "Three React Native applications I developed have collectively exceeded 10,000 downloads on the Google Play Store, with consistent 4+ star ratings across the portfolio.",
    impact: '10,000+ downloads',
    color: '#5b5cf6',
  },
  {
    icon: '⚡',
    title: '96/100 Lighthouse Score',
    subtitle: 'SP Consultancies Website',
    description: "Achieved a Lighthouse performance score of 96 for spconsultancies.in — placing it in the top percentile for corporate pharmaceutical websites. LCP under 1.8 seconds.",
    impact: '96 / 100 score',
    color: '#22c55e',
  },
  {
    icon: '📊',
    title: '99.8% API Uptime',
    subtitle: 'HiFix Django Backend',
    description: "Maintained 99.8% uptime on the HiFix production API across 18+ months, handling 50,000+ monthly requests with zero data loss incidents during that period.",
    impact: '99.8% uptime',
    color: '#06b6d4',
  },
  {
    icon: '💰',
    title: '₹10L+ in Transactions',
    subtitle: 'Payment Integration',
    description: 'The Razorpay and Stripe integrations I built have processed over ₹10 lakhs in transactions across the HiFix platform with a payment success rate exceeding 98%.',
    impact: '98% success rate',
    color: '#3395ff',
  },
  {
    icon: '👥',
    title: 'Team Leadership',
    subtitle: 'Led 3-person Dev Team',
    description: 'Successfully led a team of 3 junior developers at HiFix Innovatives. Established code review processes, Git workflows, and documentation standards still in use today.',
    impact: '3 devs mentored',
    color: '#a78bfa',
  },
  {
    icon: '⏱️',
    title: '70% Faster Deployments',
    subtitle: 'CI/CD Pipeline Implementation',
    description: 'Designed and implemented an automated CI/CD pipeline for the HiFix platform using GitHub Actions and Docker, reducing average deployment time from 45 minutes to 12 minutes.',
    impact: '70% time saved',
    color: '#f97316',
  },
  {
    icon: '🎓',
    title: 'NPTEL Elite + Silver',
    subtitle: 'AI & ML Certification',
    description: 'Earned the Elite + Silver badge from NPTEL/IIT Madras for the Artificial Intelligence and Machine Learning course — awarded to the top 5% of participants nationally.',
    impact: 'Top 5% nationally',
    color: '#ec4899',
  },
]

const stats = [
  { value: 50, suffix: 'K+', label: 'Total API Requests Served' },
  { value: 10, suffix: 'K+', label: 'App Downloads' },
  { value: 99, suffix: '%', label: 'Client Satisfaction' },
  { value: 4, suffix: '.3★', label: 'Play Store Rating' },
]

export default function Achievements() {
  return (
    <div style={{ background: '#fff', paddingTop: 80 }}>
      <section style={{ padding: '80px 40px 120px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <SectionHeading
            label="Achievements"
            title={"Impact &<br /><em>Milestones</em>"}
            subtitle="Measurable outcomes and recognition from real-world projects and professional work."
          />

          {/* Stats row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, marginBottom: 72 }}>
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                style={{ background: 'linear-gradient(135deg, #fafafa 0%, #f0f0ff 100%)', border: '1px solid rgba(91,92,246,0.1)', borderRadius: 20, padding: '32px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: 48, color: '#080808', lineHeight: 1, marginBottom: 8 }}>
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: '#737373', lineHeight: 1.4 }}>{s.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Achievement cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {achievements.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ y: -6, boxShadow: '0 20px 56px rgba(0,0,0,0.1)' }}
                style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.07)', borderRadius: 20, padding: '28px', transition: 'box-shadow 0.3s', position: 'relative', overflow: 'hidden' }}
              >
                <div style={{ position: 'absolute', top: -20, right: -20, width: 100, height: 100, borderRadius: '50%', background: `${a.color}08` }} />
                <div style={{ fontSize: 32, marginBottom: 16 }}>{a.icon}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 700, color: a.color, letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: 8, background: `${a.color}12`, padding: '3px 10px', borderRadius: 99, display: 'inline-block' }}>{a.impact}</div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 18, color: '#080808', margin: '12px 0 6px', lineHeight: 1.2 }}>{a.title}</h3>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: '#aaa', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{a.subtitle}</div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: '#737373', lineHeight: 1.7, margin: 0 }}>{a.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
