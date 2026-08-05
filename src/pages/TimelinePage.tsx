import Timeline from '../components/Timeline'
import SectionHeading from '../components/SectionHeading'
import { motion } from 'framer-motion'

const timelineItems = [
  { year: '2024', title: 'Senior Full Stack Developer', subtitle: 'HiFix Innovatives, Hyderabad', description: 'Promoted to Senior Developer. Led architecture of HiFix 2.0 with multi-city support, real-time bidding for service requests, and revamped React Native apps.', type: 'work' as const },
  { year: '2023', title: 'HiFix Expert & Admin Apps', subtitle: 'React Native · Django · AWS', description: 'Shipped the Expert App to Google Play Store (4.3★). Built the React Admin Panel with Power BI embedded analytics for the operations team.', type: 'work' as const },
  { year: '2022', title: 'Full Stack Developer', subtitle: 'HiFix Innovatives, Hyderabad', description: 'Joined HiFix Innovatives. Rebuilt the customer-facing app from scratch in React Native. Migrated backend from monolith to modular Django REST structure.', type: 'work' as const },
  { year: '2021', title: 'Rotiwala Launched', subtitle: 'Freelance Project', description: 'Designed and launched Rotiwala — an on-demand food delivery app. Handled the complete stack: React Native frontend, Django backend, Google Maps integration, and Razorpay payments.', type: 'work' as const },
  { year: '2021', title: 'SP Consultancies Website', subtitle: 'Freelance Client', description: 'Delivered spconsultancies.in — a pharmaceutical engineering corporate website. Achieved Lighthouse score of 96. First project with full TypeScript + Tailwind CSS stack.', type: 'achievement' as const },
  { year: '2020', title: 'Python & Django Internship', subtitle: 'Hyderabad, India', description: 'Completed 5-month professional internship. Learned RESTful API design, Django admin customization, PostgreSQL, and Git workflows on real client projects.', type: 'education' as const },
  { year: '2019', title: 'B.Tech Graduation', subtitle: 'JNTU Hyderabad · CGPA 7.5', description: 'Graduated with a Bachelor of Technology in Computer Science and Engineering. Final year project: an online examination portal built with Django and React.', type: 'education' as const },
  { year: '2019', title: 'AI & ML Certificate', subtitle: 'Online Certification', description: 'Completed a certification course in Artificial Intelligence and Machine Learning, covering neural networks, data preprocessing, and model deployment.', type: 'achievement' as const },
  { year: '2015', title: 'Started B.Tech', subtitle: 'JNTU Hyderabad', description: "Enrolled in B.Tech Computer Science at JNTU Hyderabad. Discovered programming in C and fell in love with it. Started learning Python in the second year.", type: 'education' as const },
  { year: '2015', title: 'Intermediate (11th–12th)', subtitle: 'Score: 87.5%', description: 'Completed Intermediate education (MPC stream) with 87.5%, qualifying for engineering admissions with a strong foundation in Mathematics and Physics.', type: 'education' as const },
  { year: '2013', title: 'SSC (10th Grade)', subtitle: 'Score: 9.8 GPA', description: 'Completed Secondary School Certificate with 9.8 GPA — an early indicator of dedication and academic excellence.', type: 'education' as const },
]

export default function TimelinePage() {
  return (
    <div style={{ background: '#fff', paddingTop: 80 }}>
      <section style={{ padding: '80px 40px 120px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading
            label="Timeline"
            title={"My Journey<br /><em>Through Time</em>"}
            subtitle="A chronological view of my professional milestones, education, and key achievements."
          />

          {/* Legend */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            style={{ display: 'flex', gap: 24, marginBottom: 56, flexWrap: 'wrap' }}
          >
            {[
              { color: '#5b5cf6', label: 'Work Experience' },
              { color: '#22c55e', label: 'Education' },
              { color: '#f59e0b', label: 'Achievement' },
            ].map(item => (
              <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 12, height: 12, borderRadius: '50%', background: item.color }} />
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: '#555' }}>{item.label}</span>
              </div>
            ))}
          </motion.div>

          <Timeline items={timelineItems} />
        </div>
      </section>
    </div>
  )
}
