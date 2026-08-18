import { motion } from 'framer-motion'
import ExperienceCard from '../components/ExperienceCard'
import SectionHeading from '../components/SectionHeading'

export default function Experience() {
  return (
    <div style={{ background: '#fff', paddingTop: 80 }}>
      <section style={{ padding: '80px 40px 120px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading
            label="Career"
            title={"Professional<br /><em>Experience</em>"}
            subtitle="My professional journey and the impactful work I've delivered across roles."
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            <ExperienceCard
              company="AutoBrez"
              role="Full Stack Developer"
              period="May 2026 – Present"
              location="Hyderabad, Telangana, India"
              current={true}
              description={[
                "Developing and maintaining the AutoBrez company website, ensuring responsive design and optimal performance across devices.",
                "Developing a Trekking & Fitness application featuring activity tracking, workout logging, step counting, and personalized fitness goal management using React Native and Django.",
                "Implementing clean, scalable RESTful APIs using Django REST Framework, with PostgreSQL as the primary data store.",
              ]}
              technologies={['React Native', 'Django', 'Django REST Framework', 'PostgreSQL', 'React.js', 'HTML5', 'CSS3']}
              delay={0}
            />

            <ExperienceCard
              company="HiFix Innovatives"
              role="Full Stack Developer"
              period="2024 – February 2025"
              location="Hyderabad, Telangana, India"
              description={[
                "Contributed to the complete software lifecycle of multiple live applications under the HiFix brand web platforms and Android apps.",
                "Architected and developed 3 Android apps published live on Google Play Store: HiFix Partner, HiFix Experts, and Jawar.",
                "Built 2 live production websites: hifix.in (service marketplace) and rotiwala.org (food delivery platform).",
                "Integrated Stripe/Razorpay payment gateways, Google Maps service tracking, OTP authentication via AWS SNS, and Firebase push notifications.",
                "Developed full-featured Django REST API backends with role-based access control for customer, expert, and admin portals.",
                "Maintained code quality using PyLint and ESLint; managed source control and CI workflows on GitHub.",
              ]}
              technologies={['React Native', 'Django', 'Django REST Framework', 'PostgreSQL', 'MySQL', 'Razorpay', 'Stripe', 'Google Maps API', 'Firebase', 'AWS SNS', 'PyLint', 'ESLint', 'GitHub']}
              delay={0.1}
            />

            <ExperienceCard
              company="BIST Technologies Pvt. Ltd."
              role="AI Intern"
              period="2024"
              location="Vijayawada, India"
              description={[
                "Completed Certification in Artificial Intelligence training program.",
                "Gained hands-on experience with AI/ML concepts and practical implementations.",
                "Worked on real-world AI projects during internship period.",
              ]}
              technologies={['Python', 'Machine Learning', 'AI', 'Data Science']}
              delay={0.2}
            />
          </div>

          {/* Skills summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ marginTop: 60, background: 'linear-gradient(135deg, #fafafa 0%, #f0f0ff 100%)', borderRadius: 24, padding: '48px', border: '1px solid rgba(91,92,246,0.1)' }}
          >
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 28, color: '#080808', margin: '0 0 24px' }}>Core Competencies</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
              {[
                { title: 'Frontend Architecture', items: ['Component Design Systems', 'State Management (Context, Redux)', 'Performance Optimization', 'Responsive Design'] },
                { title: 'Backend Engineering', items: ['RESTful API Design', 'Database Schema Design', 'Authentication & Authorization', 'Third-party Integrations'] },
                { title: 'Mobile Development', items: ['React Native (iOS/Android)', 'Play Store Deployment', 'Push Notifications', 'Offline-first Architecture'] },
              ].map(section => (
                <div key={section.title}>
                  <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 14, color: '#5b5cf6', marginBottom: 14, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{section.title}</div>
                  {section.items.map(item => (
                    <div key={item} style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 10 }}>
                      <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#5b5cf6', flexShrink: 0 }} />
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: '#555' }}>{item}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
