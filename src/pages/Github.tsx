import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

const pinnedRepos = [
  {
    name: 'hifix-customer-app',
    description: 'React Native customer-facing app for the HiFix home services platform. GPS tracking, real-time booking, Razorpay payments.',
    lang: 'TypeScript',
    stars: 12,
    forks: 3,
    color: '#3178c6',
    topics: ['react-native', 'typescript', 'razorpay', 'google-maps'],
  },
  {
    name: 'hifix-django-api',
    description: 'Production Django REST API for the HiFix platform. JWT auth, Celery tasks, Redis caching, PostgreSQL.',
    lang: 'Python',
    stars: 8,
    forks: 2,
    color: '#3572A5',
    topics: ['django', 'rest-api', 'postgresql', 'celery'],
  },
  {
    name: 'rotiwala-backend',
    description: 'Django REST backend for Rotiwala food delivery app. Order management, chef scheduling, payment integration.',
    lang: 'Python',
    stars: 6,
    forks: 1,
    color: '#3572A5',
    topics: ['django', 'razorpay', 'food-delivery'],
  },
  {
    name: 'portfolio-v2',
    description: 'Personal portfolio website built with React 19, TypeScript, Tailwind CSS v4, Framer Motion.',
    lang: 'TypeScript',
    stars: 24,
    forks: 7,
    color: '#3178c6',
    topics: ['react', 'typescript', 'tailwindcss', 'framer-motion'],
  },
  {
    name: 'react-native-boilerplate',
    description: 'Production-ready React Native boilerplate with navigation, state management, Firebase, and CI/CD setup.',
    lang: 'TypeScript',
    stars: 18,
    forks: 5,
    color: '#3178c6',
    topics: ['react-native', 'boilerplate', 'firebase', 'typescript'],
  },
  {
    name: 'django-rest-starter',
    description: 'Django REST Framework starter with JWT auth, CORS, Swagger docs, Docker setup, and GitHub Actions CI.',
    lang: 'Python',
    stars: 15,
    forks: 4,
    color: '#3572A5',
    topics: ['django', 'docker', 'jwt', 'swagger'],
  },
]

const contributions = [
  { month: 'Jan', count: 42 }, { month: 'Feb', count: 38 }, { month: 'Mar', count: 67 },
  { month: 'Apr', count: 55 }, { month: 'May', count: 79 }, { month: 'Jun', count: 61 },
  { month: 'Jul', count: 84 }, { month: 'Aug', count: 72 }, { month: 'Sep', count: 48 },
  { month: 'Oct', count: 93 }, { month: 'Nov', count: 86 }, { month: 'Dec', count: 58 },
]

export default function Github() {
  const maxCount = Math.max(...contributions.map(c => c.count))

  return (
    <div style={{ background: '#fff', paddingTop: 80 }}>
      <section style={{ padding: '80px 40px 120px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 0 }}>
            <SectionHeading
              label="Open Source"
              title={"GitHub<br /><em>Activity</em>"}
              subtitle="My open-source contributions and repositories — building in public."
            />
            <a
              href="https://github.com/nagamanigugulothu"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 14, color: '#fff', background: '#080808', padding: '11px 24px', borderRadius: 12, textDecoration: 'none', transition: 'all 0.2s', marginBottom: 20 }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = '#5b5cf6'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = '#080808'}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
              @nagamanigugulothu
            </a>
          </div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16, marginBottom: 56 }}
          >
            {[
              { label: 'Repositories', value: '28' },
              { label: 'Total Stars', value: '83' },
              { label: '2024 Contributions', value: '783' },
              { label: 'Followers', value: '47' },
              { label: 'Pull Requests', value: '124' },
            ].map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                style={{ background: '#fafafa', border: '1px solid rgba(0,0,0,0.07)', borderRadius: 16, padding: '22px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: 36, color: '#080808', lineHeight: 1, marginBottom: 6 }}>{s.value}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.07em' }}>{s.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contribution chart */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ background: '#fafafa', border: '1px solid rgba(0,0,0,0.07)', borderRadius: 24, padding: '36px', marginBottom: 40 }}
          >
            <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 16, color: '#080808', marginBottom: 24 }}>783 contributions in 2024</div>
            <div style={{ display: 'flex', gap: 12, alignItems: 'flex-end', height: 80 }}>
              {contributions.map((c, i) => (
                <div key={c.month} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                  <motion.div
                    initial={{ height: 0 }} whileInView={{ height: (c.count / maxCount) * 60 }} viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                    style={{ width: '100%', background: 'linear-gradient(180deg, #5b5cf6, #a78bfa)', borderRadius: 4 }}
                  />
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: '#aaa' }}>{c.month}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Pinned repos */}
          <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 16, color: '#080808', marginBottom: 20 }}>Pinned Repositories</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {pinnedRepos.map((repo, i) => (
              <motion.div
                key={repo.name}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4, boxShadow: '0 16px 48px rgba(0,0,0,0.1)' }}
                style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.09)', borderRadius: 20, padding: '24px', transition: 'box-shadow 0.3s', cursor: 'pointer' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#737373" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                  <span style={{ fontFamily: 'var(--font-code)', fontSize: 14, fontWeight: 600, color: '#5b5cf6' }}>{repo.name}</span>
                </div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: '#737373', lineHeight: 1.65, marginBottom: 16 }}>{repo.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
                  {repo.topics.map(t => (
                    <span key={t} style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: '#5b5cf6', background: 'rgba(91,92,246,0.08)', padding: '2px 8px', borderRadius: 99 }}>{t}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: 16 }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontFamily: 'var(--font-body)', fontSize: 13, color: '#737373' }}>
                    <span style={{ width: 12, height: 12, borderRadius: '50%', background: repo.color, flexShrink: 0 }} />
                    {repo.lang}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontFamily: 'var(--font-body)', fontSize: 13, color: '#737373' }}>
                    ⭐ {repo.stars}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontFamily: 'var(--font-body)', fontSize: 13, color: '#737373' }}>
                    🍴 {repo.forks}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
