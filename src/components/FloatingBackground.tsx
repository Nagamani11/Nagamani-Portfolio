export default function FloatingBackground() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
      {/* Primary glow — top right */}
      <div style={{
        position: 'absolute', top: '-15%', right: '-10%',
        width: 800, height: 800, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(99,102,241,0.18) 0%, rgba(99,102,241,0.06) 40%, transparent 70%)',
        filter: 'blur(1px)',
      }} />
      {/* Secondary glow — bottom left */}
      <div style={{
        position: 'absolute', bottom: '-20%', left: '-12%',
        width: 700, height: 700, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(167,139,250,0.14) 0%, rgba(167,139,250,0.04) 40%, transparent 70%)',
      }} />
      {/* Cyan accent — center */}
      <div style={{
        position: 'absolute', top: '35%', left: '25%',
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 65%)',
      }} />
      {/* Dot grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
      }} />
      {/* Horizontal scan line gradient */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, transparent 0%, rgba(99,102,241,0.03) 50%, transparent 100%)',
      }} />
    </div>
  )
}
