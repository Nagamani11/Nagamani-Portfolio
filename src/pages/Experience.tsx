import SectionHeading from '../components/SectionHeading'
import ExperienceCard from '../components/ExperienceCard'

const experiences = [
  {
    company: 'AutoBrez',
    role: 'Full Stack Developer',
    period: 'Mar 2024 - Present',
    location: 'Hyderabad',
    current: true,
    description: [
      'Spearheading the development of production-grade digital platforms including the AutoBrez motors and curtain blinds website.',
      'Architecting and building a comprehensive Trekking & Fitness application featuring live activity tracking, workout logging, and dynamic route management.',
      'Implementing secure PostgreSQL databases and optimizing Django backend performance to handle large datasets.',
      'Collaborating directly with stakeholders to translate business requirements into technical solutions while ensuring strict adherence to performance metrics.'
    ],
    technologies: ['React Native', 'Django', 'PostgreSQL', 'Python', 'REST API']
  },
  {
    company: 'HiFix Innovatives',
    role: 'Full Stack Developer',
    period: 'Oct 2022 - Feb 2024',
    location: 'Hyderabad',
    description: [
      'Developed and successfully launched multiple enterprise applications including HiFix Customer App, HiFix Experts App, and Jawar Community App on the Google Play Store.',
      'Engineered robust backend systems using Django REST Framework and PostgreSQL, supporting thousands of concurrent real-time transactions.',
      'Integrated complex third-party services including Razorpay for secure payments, AWS SNS for OTP authentication, and Google Maps API for live service tracking.',
      'Designed and developed the HiFix Innovatives marketing website with React, optimizing for SEO and user conversion.'
    ],
    technologies: ['React Native (CLI)', 'Django', 'React.js', 'Razorpay', 'AWS SNS', 'Google Maps API']
  }
]

export default function Experience() {
  return (
    <div style={{ paddingTop: 100, paddingBottom: 100, background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 40px' }}>
        <SectionHeading label="Experience" title={"Professional<br /><em>Journey</em>"} subtitle="Building scalable applications and leading development across full-stack ecosystems." center />
        
        <div style={{ position: 'relative', marginTop: 60 }}>
          {/* Vertical Timeline Line */}
          <div style={{
            position: 'absolute', top: 0, bottom: 0, left: 40, width: 2,
            background: 'linear-gradient(to bottom, var(--accent) 0%, rgba(99,102,241,0.1) 100%)',
            zIndex: 0
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 60, position: 'relative', zIndex: 1 }}>
            {experiences.map((exp, i) => (
              <div key={exp.company} style={{ display: 'flex', gap: 40 }}>
                {/* Timeline dot */}
                <div style={{
                  width: 24, height: 24, borderRadius: '50%', background: 'var(--bg-surface)',
                  border: `4px solid ${exp.current ? 'var(--green)' : 'var(--accent)'}`,
                  boxShadow: `0 0 16px ${exp.current ? 'var(--green)' : 'var(--accent)'}`,
                  marginTop: 36, flexShrink: 0, position: 'relative', left: 29
                }} />
                
                {/* Content */}
                <div style={{ flexGrow: 1 }}>
                  <ExperienceCard {...exp} delay={i * 0.2} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
