import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

const certificates = [
  {
    title: 'Artificial Intelligence & Machine Learning',
    issuer: 'NPTEL / IIT Madras',
    date: 'August 2019',
    id: 'NPTEL19CS17S41100015',
    category: 'AI / ML',
    color: '#5b5cf6',
    icon: '🤖',
    description: 'Comprehensive course covering supervised and unsupervised learning, neural networks, deep learning fundamentals, and model evaluation techniques. Completed with an Elite + Silver badge.',
    skills: ['Machine Learning', 'Neural Networks', 'Python (NumPy, Pandas)', 'Scikit-learn', 'Data Preprocessing'],
  },
  {
    title: 'Python Django Development',
    issuer: 'Udemy',
    date: 'March 2020',
    id: 'UC-DJANGO-2020-GN',
    category: 'Web Development',
    color: '#22c55e',
    icon: '🐍',
    description: 'Advanced Django course covering class-based views, REST API design with Django REST Framework, authentication with JWT and OAuth2, PostgreSQL integration, and production deployment.',
    skills: ['Django', 'Django REST Framework', 'PostgreSQL', 'JWT Auth', 'API Design'],
  },
  {
    title: 'React Native — The Practical Guide',
    issuer: 'Udemy / Maximilian Schwarzmüller',
    date: 'January 2021',
    id: 'UC-REACTNATIVE-2021-GN',
    category: 'Mobile Development',
    color: '#61dafb',
    icon: '📱',
    description: 'Hands-on React Native course covering navigation, state management, native APIs, camera, location services, push notifications, and Play Store / App Store submission processes.',
    skills: ['React Native', 'Navigation', 'Firebase Integration', 'Play Store Deployment', 'Native APIs'],
  },
  {
    title: 'Professional Python Internship',
    issuer: 'ExcelR Solutions, Hyderabad',
    date: 'May 2020',
    id: 'EXCELR-INT-2020-GN',
    category: 'Internship',
    color: '#f59e0b',
    icon: '🎓',
    description: 'Successfully completed a 5-month professional internship in Python backend development. Worked on real client projects including an HR management system and inventory management API.',
    skills: ['Python', 'Django', 'REST APIs', 'PostgreSQL', 'Git', 'Linux'],
  },
  {
    title: 'AWS Cloud Practitioner Essentials',
    issuer: 'Amazon Web Services',
    date: 'June 2022',
    id: 'AWS-CLF-2022-GN',
    category: 'Cloud',
    color: '#ff9900',
    icon: '☁️',
    description: 'Foundational AWS certification covering core services including EC2, S3, RDS, SNS, SQS, Lambda, and IAM. Foundation for the AWS solutions architect path.',
    skills: ['AWS EC2', 'AWS SNS', 'AWS S3', 'IAM', 'Cloud Architecture'],
  },
  {
    title: 'TypeScript — Complete Developer\'s Guide',
    issuer: 'Udemy / Stephen Grider',
    date: 'November 2022',
    id: 'UC-TYPESCRIPT-2022-GN',
    category: 'Programming',
    color: '#3178c6',
    icon: '🔷',
    description: 'Comprehensive TypeScript course covering type system fundamentals, generics, decorators, and TypeScript integration with React and Node.js applications.',
    skills: ['TypeScript', 'Generics', 'Decorators', 'React + TypeScript', 'Type System'],
  },
]

export default function Certificates() {
  return (
    <div style={{ background: '#fff', paddingTop: 80 }}>
      <section style={{ padding: '80px 40px 120px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <SectionHeading
            label="Certificates"
            title={"Continuous<br /><em>Learning</em>"}
            subtitle="Professional certifications and training that keep my skills sharp and current."
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {certificates.map((cert, i) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                whileHover={{ y: -6, boxShadow: '0 20px 56px rgba(0,0,0,0.1)' }}
                style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.07)', borderRadius: 24, overflow: 'hidden', transition: 'box-shadow 0.3s' }}
              >
                {/* Header bar */}
                <div style={{ height: 4, background: `linear-gradient(90deg, ${cert.color}, ${cert.color}88)` }} />
                <div style={{ padding: '28px 28px 24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                    <div style={{ fontSize: 36 }}>{cert.icon}</div>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600, color: cert.color, background: `${cert.color}12`, padding: '4px 10px', borderRadius: 99, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{cert.category}</span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 20, color: '#080808', margin: '0 0 8px', lineHeight: 1.25 }}>{cert.title}</h3>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600, color: '#555', marginBottom: 4 }}>{cert.issuer}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: '#aaa', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 6 }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    Issued {cert.date}
                  </div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: '#737373', lineHeight: 1.7, marginBottom: 20 }}>{cert.description}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
                    {cert.skills.map(skill => (
                      <span key={skill} style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600, color: '#555', background: 'rgba(0,0,0,0.05)', padding: '3px 10px', borderRadius: 99 }}>{skill}</span>
                    ))}
                  </div>
                  <div style={{ fontFamily: 'var(--font-code)', fontSize: 11, color: '#bbb' }}>ID: {cert.id}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ marginTop: 60, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}
          >
            {[
              { value: '6+', label: 'Certifications Earned' },
              { value: '500+', label: 'Hours of Learning' },
              { value: '4', label: 'Technology Domains' },
              { value: '2024', label: 'Last Certification' },
            ].map((stat, i) => (
              <div key={stat.label} style={{ background: '#fafafa', border: '1px solid rgba(0,0,0,0.07)', borderRadius: 20, padding: '28px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: 40, color: '#080808', marginBottom: 8 }}>{stat.value}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.07em' }}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
