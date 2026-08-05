export default function FloatingBackground() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
      {/* Large soft blobs */}
      <div style={{
        position: 'absolute', top: '-20%', right: '-10%',
        width: 700, height: 700, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(91,92,246,0.07) 0%, transparent 70%)',
      }} />
      <div style={{
        position: 'absolute', bottom: '-20%', left: '-10%',
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(167,139,250,0.06) 0%, transparent 70%)',
      }} />
      <div style={{
        position: 'absolute', top: '40%', left: '30%',
        width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(91,92,246,0.04) 0%, transparent 70%)',
      }} />
      {/* Fine dot grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.08) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        opacity: 0.5,
      }} />
    </div>
  )
}
