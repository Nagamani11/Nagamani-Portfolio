import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

const projectData: Record<string, {
  title: string; subtitle: string; description: string; image: string;
  heroImage: string; tags: string[]; status: string; url?: string;
  overview: string; challenge: string; solution: string;
  architecture: string[]; features: string[]; lessons: string[];
  metrics: { label: string; value: string }[];
}> = {
  hifix: {
    title: 'HiFix Platform',
    subtitle: 'End-to-end home services marketplace',
    description: 'A full-stack marketplace connecting homeowners with verified service experts across India.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop&auto=format',
    heroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&h=600&fit=crop&auto=format',
    tags: ['React Native', 'Django', 'PostgreSQL', 'Firebase', 'AWS SNS', 'Google Maps', 'Razorpay', 'Redis', 'Docker'],
    status: 'Live',
    overview: "HiFix is a multi-sided marketplace that I architected and developed from the ground up. The platform connects homeowners who need home repair and maintenance services with a network of verified expert professionals. The ecosystem includes three distinct mobile applications, a web-based admin panel, and a robust Django REST API.",
    challenge: "The primary challenge was building a real-time system where customers could book experts, track their arrival via GPS, receive live status updates, and process payments — all while the backend maintained consistency across three separate client apps simultaneously. We also needed expert onboarding, background verification workflows, and a revenue analytics system for operations.",
    solution: "I designed the backend with Django REST Framework using a microservice-inspired architecture. Each domain (bookings, users, experts, payments) had its own Django app with clean interfaces. Firebase Cloud Messaging handled real-time push notifications, while WebSockets (Django Channels) powered the live GPS tracking feature. PostgreSQL with carefully designed indexes handled the query load.",
    architecture: [
      'React Native (Customer App, Expert App) — shared component library, platform-specific navigation',
      'React.js + TypeScript (Admin Panel) — custom dashboard with Power BI embedded analytics',
      'Django REST Framework — modular app structure, JWT authentication, rate limiting',
      'PostgreSQL + Redis — relational data + session caching and job queue',
      'Firebase Cloud Messaging — cross-platform push notifications',
      'Google Maps Platform — GPS tracking, address autocomplete, routing',
      'AWS SNS — SMS OTP verification and transactional notifications',
      'Razorpay + Stripe — domestic and international payment processing',
      'Docker + DigitalOcean — containerized deployment with automated backups',
    ],
    features: [
      'Real-time expert GPS tracking on the customer map',
      'Dynamic pricing engine with surge and discount support',
      'Expert onboarding with document upload and admin verification',
      'Ratings and reviews system with automated moderation',
      'Multi-payment support: UPI, cards, wallet, EMI',
      'In-app chat between customer and expert',
      'Power BI analytics embedded in the admin panel',
      'Automated SMS and push notification workflows',
    ],
    lessons: [
      'Designing for offline-first mobile apps using optimistic updates significantly improved perceived performance.',
      'Database query optimization (select_related, prefetch_related) was critical for the booking list endpoints.',
      'Using feature flags for gradual rollouts saved us from two potential major incidents.',
    ],
    metrics: [
      { label: 'Monthly Active Users', value: '8,000+' },
      { label: 'Bookings Processed', value: '50K+' },
      { label: 'Play Store Rating', value: '4.3 ★' },
      { label: 'API Uptime', value: '99.8%' },
    ],
  },
  rotiwala: {
    title: 'Rotiwala',
    subtitle: 'On-demand home-cooked food delivery',
    description: 'Connecting home chefs with food lovers. GPS-enabled delivery tracking and seamless payments.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=500&fit=crop&auto=format',
    heroImage: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1400&h=600&fit=crop&auto=format',
    tags: ['React Native', 'Django REST', 'PostgreSQL', 'Google Maps', 'Razorpay', 'Firebase'],
    status: 'Live',
    overview: 'Rotiwala brings authentic home-cooked meals to your doorstep by empowering local home chefs to list their daily menus and fulfil orders in their neighborhood. The platform handles everything from chef onboarding and menu management to real-time order tracking and payments.',
    challenge: 'The main challenge was building a marketplace where supply (chef availability and menu) changes daily, and demand is highly time-sensitive. We needed the order flow to be under 3 taps, payments to be instant, and delivery tracking to work without a dedicated delivery fleet.',
    solution: 'We implemented a chef-driven model where chefs publish their daily menu by 9 AM and orders close at noon. This predictability simplified inventory and reduced cancellations. GPS tracking used the Google Maps Directions API to estimate delivery times, and Razorpay handled all payment flows including UPI and wallet.',
    architecture: [
      'React Native — iOS/Android compatible app with shared codebase',
      'Django REST Framework — REST API with Celery for async order processing',
      'PostgreSQL — relational database with geo-spatial queries for nearby chef discovery',
      'Google Maps Platform — distance matrix, address autocomplete, delivery routing',
      'Razorpay — payments with UPI, cards, and net banking',
      'Firebase — push notifications for order status updates',
    ],
    features: [
      'Daily menu listing by home chefs',
      'Geo-based chef discovery (nearest 5km)',
      'Real-time order status tracking',
      'Multi-order cart across multiple chefs',
      'Review and rating system',
      'Chef earnings dashboard',
    ],
    lessons: [
      'Time-boxing the ordering window (orders close at noon) dramatically simplified the backend logic and chef preparation workflow.',
      'Geo-spatial queries in PostgreSQL using PostGIS were much more performant than calculating distances in Python.',
    ],
    metrics: [
      { label: 'Home Chefs Onboarded', value: '120+' },
      { label: 'Orders Delivered', value: '5,000+' },
      { label: 'Cities Covered', value: '2' },
      { label: 'Average Rating', value: '4.5 ★' },
    ],
  },
  spconsultancies: {
    title: 'SP Consultancies',
    subtitle: 'Global pharmaceutical engineering website',
    description: 'Enterprise website for Sneha and Prahar Consultancy Services — built for global visibility.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop&auto=format',
    heroImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1400&h=600&fit=crop&auto=format',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'SEO', 'Responsive'],
    status: 'Live',
    url: 'https://spconsultancies.in',
    overview: 'A premium corporate website for Sneha and Prahar Consultancy Services, a pharmaceutical engineering consultancy based in Hyderabad. The site serves as a global marketing and lead-generation platform, showcasing the firm\'s expertise, projects, and team to international pharmaceutical companies.',
    challenge: "The client needed a site that would perform well on Google India, Middle East, and Europe searches while projecting a world-class brand image. It had to be fast, fully responsive, and easy to maintain without developer intervention for content updates.",
    solution: 'Built with React + TypeScript + Vite for maximum performance. Tailwind CSS enabled rapid, consistent styling across all breakpoints. SEO was handled through semantic HTML, schema markup, Open Graph tags, and a sitemap. Lighthouse performance score of 96 was achieved through image optimization, code splitting, and lazy loading.',
    architecture: [
      'React 18 + TypeScript — strongly typed components for long-term maintainability',
      'Vite — fast development and optimized production builds',
      'Tailwind CSS v3 — utility-first styling with a custom design system',
      'Framer Motion — smooth page transitions and scroll animations',
      'Helmet — dynamic SEO meta tags per page',
      'Netlify — CDN deployment with automatic preview builds',
    ],
    features: [
      'Services catalog with detailed project showcases',
      'Team profiles with credentials and expertise',
      'Client testimonials section with structured data',
      'Contact form with email integration',
      'Mobile-first responsive design (320px to 4K)',
      'Core Web Vitals optimized (LCP < 1.8s, CLS < 0.05)',
    ],
    lessons: [
      'For corporate sites, perceived performance matters more than raw speed metrics — skeleton screens and image fade-ins made a huge UX difference.',
      'Semantic HTML and structured data schema markup had a measurable impact on Google search ranking within 6 weeks of launch.',
    ],
    metrics: [
      { label: 'Lighthouse Score', value: '96 / 100' },
      { label: 'LCP', value: '< 1.8s' },
      { label: 'Monthly Organic Visits', value: '800+' },
      { label: 'Bounce Rate', value: '32%' },
    ],
  },
}

export default function ProjectDetails() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? projectData[slug] : null

  if (!project) {
    return (
      <div style={{ paddingTop: 160, textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 36, color: '#080808' }}>Project not found</h2>
        <Link to="/projects" style={{ color: '#5b5cf6', fontFamily: 'var(--font-body)' }}>← Back to Projects</Link>
      </div>
    )
  }

  return (
    <div style={{ background: '#fff', paddingTop: 80 }}>
      {/* Hero */}
      <section style={{ padding: '60px 40px 0', position: 'relative' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <Link to="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-body)', fontSize: 14, color: '#737373', textDecoration: 'none', marginBottom: 40, transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#5b5cf6'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#737373'}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M13 7H1M6 3L2 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Back to Projects
          </Link>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center', marginBottom: 60 }}>
            <div>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 24 }}>
                <span style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)', color: '#16a34a', fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, padding: '4px 12px', borderRadius: 99, display: 'flex', alignItems: 'center', gap: 5 }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e' }} />
                  {project.status}
                </span>
              </div>
              <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
                style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(40px, 5vw, 68px)', color: '#080808', margin: '0 0 16px', lineHeight: 1.05, letterSpacing: '-0.025em' }}>
                {project.title}
              </motion.h1>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, color: '#737373', lineHeight: 1.7, marginBottom: 28 }}>{project.description}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32 }}>
                {project.tags.map(tag => (
                  <span key={tag} style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, color: '#5b5cf6', background: 'rgba(91,92,246,0.07)', border: '1px solid rgba(91,92,246,0.15)', padding: '5px 12px', borderRadius: 99 }}>{tag}</span>
                ))}
              </div>
              {project.url && (
                <a href={project.url} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 15, color: '#fff', background: '#080808', padding: '12px 28px', borderRadius: 12, textDecoration: 'none', transition: 'all 0.2s' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = '#5b5cf6'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = '#080808'}
                >
                  Visit Live Site <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </a>
              )}
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }}
              style={{ borderRadius: 24, overflow: 'hidden', boxShadow: '0 32px 80px rgba(0,0,0,0.12)' }}>
              <img src={project.image} alt={project.title} style={{ width: '100%', display: 'block' }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section style={{ padding: '0 40px 80px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {project.metrics.map((m, i) => (
              <motion.div key={m.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                style={{ background: '#fafafa', border: '1px solid rgba(0,0,0,0.07)', borderRadius: 20, padding: '28px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: 36, color: '#080808', marginBottom: 6 }}>{m.value}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.07em' }}>{m.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview / Challenge / Solution */}
      <section style={{ padding: '0 40px 80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 60 }}>
          {[
            { title: 'Overview', content: project.overview },
            { title: 'The Challenge', content: project.challenge },
            { title: 'The Solution', content: project.solution },
          ].map((section, i) => (
            <motion.div key={section.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, color: '#5b5cf6', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>{section.title}</div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, color: '#333', lineHeight: 1.85, margin: 0 }}>{section.content}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Architecture + Features */}
      <section style={{ padding: '60px 40px 100px', background: '#fafafa', borderTop: '1px solid rgba(0,0,0,0.06)', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
          <div>
            <SectionHeading label="Architecture" title={"Technical<br /><em>Stack</em>"} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {project.architecture.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                  style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '14px', background: '#fff', borderRadius: 12, border: '1px solid rgba(0,0,0,0.07)' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#5b5cf6', flexShrink: 0, marginTop: 6 }} />
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: '#555', lineHeight: 1.6 }}>{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading label="Features" title={"Key<br /><em>Capabilities</em>"} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {project.features.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                  style={{ display: 'flex', gap: 12, alignItems: 'center', padding: '14px', background: '#fff', borderRadius: 12, border: '1px solid rgba(0,0,0,0.07)' }}>
                  <span style={{ width: 24, height: 24, borderRadius: '50%', background: 'rgba(91,92,246,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1.5 5L4 7.5L8.5 2.5" stroke="#5b5cf6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: '#555' }}>{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lessons Learned */}
      <section style={{ padding: '80px 40px 100px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading label="Retrospective" title={"Lessons<br /><em>Learned</em>"} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {project.lessons.map((lesson, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                style={{ background: 'linear-gradient(135deg, rgba(91,92,246,0.04) 0%, rgba(167,139,250,0.06) 100%)', border: '1px solid rgba(91,92,246,0.1)', borderRadius: 16, padding: '24px 28px', display: 'flex', gap: 16 }}>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: 28, color: '#5b5cf6', lineHeight: 1, flexShrink: 0 }}>{i + 1}.</span>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: '#444', lineHeight: 1.8, margin: 0 }}>{lesson}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
