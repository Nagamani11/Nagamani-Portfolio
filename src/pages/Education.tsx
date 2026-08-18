import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

const education = [
  {
    degree: 'Bachelor of Technology',
    field: 'Computer Science',
    institution: 'Jawaharlal Nehru Technological University (GDMM College)',
    location: 'Hyderabad, Telangana, India',
    period: '2020 – 2024',
    cgpa: '7.5 / 10',
    grade: 'First Class',
    highlights: [
      'Specialized in Computer Science with focus on software development',
      'Gained strong foundation in programming, databases, and web technologies',
      'Developed interest in full-stack development and mobile applications',
    ],
    courses: ['Data Structures', 'Algorithms', 'DBMS', 'Computer Networks', 'Software Engineering', 'Operating Systems', 'Web Technologies', 'Python Programming'],
  },
  {
    degree: 'Intermediate (MPC)',
    field: 'Mathematics, Physics & Chemistry',
    institution: 'Chaitanya Junior College',
    location: 'Hyderabad, Telangana, India',
    period: '2018 – 2020',
    cgpa: '87.5%',
    grade: 'Distinction',
    highlights: [
      'Scored 87.5% in the Board Examinations',
      'Strong foundation in Mathematics, Physics, and Chemistry',
    ],
    courses: ['Mathematics', 'Physics', 'Chemistry', 'English'],
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    field: '10th Standard Board Examination',
    institution: 'Gemini English Medium High School',
    location: 'Telangana, India',
    period: 'Passed 2018',
    cgpa: '9.8 / 10',
    grade: 'Distinction',
    highlights: [
      "Scored 9.8 GPA — among the school's top performers",
    ],
    courses: ['Mathematics', 'Science', 'Social Studies', 'English', 'Telugu'],
  },
]

export default function Education() {
  return (
    <div style={{ background: '#fff', paddingTop: 80 }}>
      <section style={{ padding: '80px 40px 120px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading
            label="Education"
            title={"Academic<br /><em>Foundation</em>"}
            subtitle="A strong academic background that underpins every technical decision I make."
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.07)', borderRadius: 24, overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.04)' }}
              >
                {/* Header */}
                <div style={{ padding: '36px 40px 28px', borderBottom: '1px solid rgba(0,0,0,0.06)', background: i === 0 ? 'linear-gradient(135deg, rgba(91,92,246,0.04) 0%, rgba(167,139,250,0.06) 100%)' : '#fafafa' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, color: '#5b5cf6', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>{edu.period}</div>
                      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 28, color: '#080808', margin: '0 0 6px' }}>{edu.degree}</h3>
                      <div style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: '#555', marginBottom: 4 }}>{edu.field}</div>
                      <div style={{ fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 600, color: '#5b5cf6' }}>{edu.institution}</div>
                      <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: '#aaa', marginTop: 4, display: 'flex', alignItems: 'center', gap: 4 }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        {edu.location}
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontFamily: 'var(--font-heading)', fontSize: 40, color: '#080808', lineHeight: 1 }}>{edu.cgpa}</div>
                      <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: '#aaa', marginTop: 4 }}>{edu.grade}</div>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div style={{ padding: '28px 40px', display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 40 }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, color: '#aaa', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 14 }}>Highlights</div>
                    {edu.highlights.map((h, j) => (
                      <div key={j} style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
                        <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#5b5cf6', marginTop: 8, flexShrink: 0 }} />
                        <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: '#555', lineHeight: 1.7 }}>{h}</span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, color: '#aaa', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 14 }}>Key Subjects</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {edu.courses.map(course => (
                        <span key={course} style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: '#555', background: 'rgba(0,0,0,0.05)', padding: '4px 12px', borderRadius: 99 }}>{course}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications & Internships */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ marginTop: 60, background: 'linear-gradient(135deg, #fafafa 0%, #f0f0ff 100%)', borderRadius: 24, padding: '48px', border: '1px solid rgba(91,92,246,0.1)' }}
          >
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 28, color: '#080808', margin: '0 0 24px' }}>Certifications & Internships</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
              <div>
                <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 15, color: '#5b5cf6', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Certification</div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: 18, color: '#080808', marginBottom: 8 }}>Artificial Intelligence</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: '#737373', marginBottom: 4 }}>BIST Technologies Pvt. Ltd., Vijayawada</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: '#aaa' }}>2024</div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 15, color: '#5b5cf6', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Internship</div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: 18, color: '#080808', marginBottom: 8 }}>Artificial Intelligence</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: '#737373', marginBottom: 4 }}>BIST Technologies Pvt. Ltd., Vijayawada</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: '#aaa' }}>2024</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
