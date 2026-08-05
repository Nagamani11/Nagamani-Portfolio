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
              company="HiFix Innovatives"
              role="Senior Full Stack Developer"
              period="Jan 2021 – Present · 4 years"
              location="Hyderabad, Telangana, India"
              current={true}
              description={[
                "Architected and developed the complete HiFix platform — a multi-sided marketplace connecting homeowners with verified service experts across Hyderabad and Bangalore.",
                "Built three React Native mobile applications (Customer App, Expert App, Admin App) deployed to the Google Play Store with 10K+ combined downloads.",
                "Designed and implemented a Django REST Framework backend serving 50K+ monthly API requests with 99.8% uptime, backed by PostgreSQL and Redis.",
                "Integrated Firebase for real-time notifications, Google Maps Platform for location tracking, and Razorpay for seamless payment processing.",
                "Implemented AWS SNS for push notifications and set up a CI/CD pipeline for automated deployments, reducing deployment time by 70%.",
                "Led a team of 3 junior developers, conducting code reviews, setting technical standards, and mentoring on React Native and Django best practices.",
                "Designed and maintained the Power BI analytics dashboard used by the operations team to monitor expert performance and customer satisfaction.",
                "Reduced app load time by 40% through code splitting, image optimization, and API response caching strategies.",
              ]}
              technologies={['React Native', 'React.js', 'Django', 'Django REST Framework', 'PostgreSQL', 'Firebase', 'AWS SNS', 'Redis', 'Google Maps', 'Razorpay', 'Stripe', 'Power BI', 'Docker', 'TypeScript']}
              delay={0}
            />

            <ExperienceCard
              company="Freelance"
              role="Full Stack Developer"
              period="Jun 2020 – Dec 2020 · 7 months"
              location="Remote, India"
              description={[
                "Designed and developed Rotiwala, an on-demand home-cooked food delivery platform connecting home chefs with nearby customers.",
                "Built complete mobile app in React Native with real-time order tracking using Google Maps Platform and Socket.IO.",
                "Integrated Razorpay payment gateway with support for UPI, debit/credit cards, and net banking.",
                "Developed Django REST API with PostgreSQL backend handling order management, real-time driver tracking, and automated SMS notifications.",
                "Delivered the entire project end-to-end within a 3-month timeline with zero critical bugs at launch.",
              ]}
              technologies={['React Native', 'Django', 'PostgreSQL', 'Google Maps API', 'Razorpay', 'Socket.IO', 'Firebase', 'Android Studio']}
              delay={0.1}
            />

            <ExperienceCard
              company="Internship"
              role="Python Django Developer Intern"
              period="Jan 2020 – May 2020 · 5 months"
              location="Hyderabad, Telangana, India"
              description={[
                "Completed intensive training in Python, Django, and REST API development under senior developer mentorship.",
                "Built CRUD REST APIs for an internal HR management system using Django REST Framework and PostgreSQL.",
                "Developed custom Django admin interfaces for content management and data reporting.",
                "Learned version control workflows using Git and GitHub, contributing to a shared codebase with 5+ developers.",
              ]}
              technologies={['Python', 'Django', 'PostgreSQL', 'Git', 'GitHub', 'Linux', 'VS Code']}
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
