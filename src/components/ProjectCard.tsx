import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

interface Props {
  title: string
  description: string
  tags: string[]
  image?: string
  slug: string
  featured?: boolean
  delay?: number
  status?: string
}

export default function ProjectCard({ title, description, tags, image, slug, featured = false, delay = 0, status }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      style={{
        background: '#fff', border: '1px solid rgba(0,0,0,0.07)',
        borderRadius: 24, overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
        transition: 'box-shadow 0.3s ease',
        position: 'relative',
      }}
    >
      {/* Image */}
      <div style={{
        height: featured ? 280 : 200,
        background: 'linear-gradient(135deg, #f0f0ff 0%, #e8e8ff 100%)',
        overflow: 'hidden', position: 'relative',
      }}>
        {image ? (
          <img
            src={image}
            alt={title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
            onMouseEnter={e => (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.05)'}
            onMouseLeave={e => (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'}
          />
        ) : (
          <div style={{
            width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'linear-gradient(135deg, rgba(91,92,246,0.08) 0%, rgba(167,139,250,0.12) 100%)',
          }}>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: 48, color: 'rgba(91,92,246,0.25)', letterSpacing: '-0.03em' }}>
              {title.charAt(0)}
            </div>
          </div>
        )}
        {status && (
          <div style={{
            position: 'absolute', top: 16, right: 16,
            background: status === 'Live' ? 'rgba(34,197,94,0.12)' : 'rgba(91,92,246,0.1)',
            border: `1px solid ${status === 'Live' ? 'rgba(34,197,94,0.25)' : 'rgba(91,92,246,0.2)'}`,
            color: status === 'Live' ? '#16a34a' : '#5b5cf6',
            fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 11,
            padding: '4px 10px', borderRadius: 99, letterSpacing: '0.04em',
            backdropFilter: 'blur(8px)',
          }}>
            {status === 'Live' && <span style={{ marginRight: 4 }}>●</span>}
            {status}
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: '24px' }}>
        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 22, color: '#080808', margin: '0 0 10px', lineHeight: 1.2 }}>{title}</h3>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: '#737373', lineHeight: 1.7, margin: '0 0 20px' }}>{description}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 22 }}>
          {tags.map(tag => (
            <span key={tag} style={{
              fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600, color: '#555',
              background: 'rgba(0,0,0,0.05)', padding: '3px 10px', borderRadius: 99,
              letterSpacing: '0.03em',
            }}>
              {tag}
            </span>
          ))}
        </div>
        <Link
          to={`/projects/${slug}`}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 14,
            color: '#080808', textDecoration: 'none', transition: 'all 0.2s',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#5b5cf6'; (e.currentTarget as HTMLElement).style.gap = '10px' }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#080808'; (e.currentTarget as HTMLElement).style.gap = '6px' }}
        >
          View Case Study
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 7h12M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </motion.div>
  )
}
