'use client'
import { useEffect, useRef } from 'react'

const stats = [
  { num: 15, suffix: '+', label: 'Zoho Creator projects delivered' },
  { num: 14, suffix: '+', label: 'Years of hands-on Zoho experience' },
  { num: 100, suffix: '%', label: 'Transparency at every step' },
]

const workflowChips = [
  { label: 'Approvals', icon: 'bi-check2-circle', x: '6%',  y: '18%', delay: 0 },
  { label: 'Inventory', icon: 'bi-boxes',         x: '82%', y: '14%', delay: 0.4 },
  { label: 'HR & Onboarding', icon: 'bi-person-vcard', x: '3%', y: '62%', delay: 0.8 },
  { label: 'Field Service', icon: 'bi-geo-alt',   x: '86%', y: '60%', delay: 0.2 },
  { label: 'CRM Add-ons', icon: 'bi-diagram-3',   x: '14%', y: '82%', delay: 0.6 },
  { label: 'Partner Portals', icon: 'bi-shield-lock', x: '78%', y: '84%', delay: 1.0 },
  { label: 'Deluge', icon: 'bi-code-slash',       x: '92%', y: '38%', delay: 1.2 },
  { label: 'Zoho Books', icon: 'bi-journal-text', x: '0%',  y: '40%', delay: 1.4 },
]

export default function Hero() {
  const statsRef = useRef(null)
  const animated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animated.current) {
        animated.current = true
        statsRef.current?.querySelectorAll('.stat-num').forEach(el => {
          const target = parseInt(el.dataset.target)
          const suffix = el.dataset.suffix
          let start = 0
          const step = Math.max(1, Math.ceil(target / 40))
          const timer = setInterval(() => {
            start = Math.min(start + step, target)
            el.textContent = start + suffix
            if (start >= target) clearInterval(timer)
          }, 30)
        })
      }
    }, { threshold: 0.4 })
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="hero" style={{ background: 'linear-gradient(160deg,#faf9f7 0%,#f0ece8 100%)', padding: '90px 0 80px', position: 'relative', overflow: 'hidden' }}>
      {/* gradient blobs */}
      <div aria-hidden style={{ position: 'absolute', width: 480, height: 480, top: -180, left: -120, background: 'radial-gradient(circle at center, rgba(59,130,246,0.16), transparent 60%)', animation: 'blob-drift 14s ease-in-out infinite', pointerEvents: 'none' }} />
      <div aria-hidden style={{ position: 'absolute', width: 520, height: 520, bottom: -220, right: -160, background: 'radial-gradient(circle at center, rgba(249,115,22,0.12), transparent 60%)', animation: 'blob-drift 18s ease-in-out infinite reverse', pointerEvents: 'none' }} />
      <div aria-hidden style={{ position: 'absolute', inset: 0, opacity: 0.5 }} className="dot-grid" />

      {/* Floating workflow chips */}
      {/* <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        {workflowChips.map((c, i) => (
          <div key={c.label}
            className="d-none d-md-inline-flex"
            style={{
              position: 'absolute', left: c.x, top: c.y,
              background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(6px)',
              border: '1px solid #e8e3dd', borderRadius: 999, padding: '7px 14px',
              fontSize: '0.78rem', fontFamily: 'Inter,sans-serif', fontWeight: 600,
              color: '#334155', opacity: 0.92,
              boxShadow: '0 6px 20px rgba(15,23,42,0.06)',
              alignItems: 'center', gap: 8,
              animation: `float-y ${5 + (i % 3) * 1.2}s ease-in-out ${c.delay}s infinite`,
              whiteSpace: 'nowrap',
            }}>
            <i className={`bi ${c.icon}`} style={{ color: i % 2 ? '#f97316' : '#1a56db', fontSize: '0.9rem' }} />
            {c.label}
          </div>
        ))}
      </div> */}

      <div className="container position-relative text-center" style={{ zIndex: 2 }}>
        {/* Badge */}
        <div style={{ marginBottom: 28, display: 'flex', justifyContent: 'center' }}>
          <div className="pill">
            <span className="pill-dot" />
            <span>India's leading Zoho Creator partner</span>
            <span style={{ width: 1, height: 14, background: '#e8e3dd' }} />
            <span style={{ color: '#1a56db' }}>⭐ Authorized</span>
          </div>
        </div>

        {/* H1 */}
        <h1 style={{ fontFamily: 'inter Sans,sans-serif', fontSize: 'clamp(2.3rem,5.3vw,4rem)', fontWeight: 600, color: '#0f172a', marginBottom: 22, letterSpacing: '-1.1px', lineHeight: 1.08, maxWidth: 920, margin: '0 auto 22px' }}>
          Custom <span className="grad-blue-red">Zoho Creator</span> apps,<br />
          built for the way your <span className="grad-blue-red">business actually runs</span>
        </h1>

        <p style={{ fontSize: '1.1rem', color: '#475569', maxWidth: 640, margin: '0 auto 38px', lineHeight: 1.75, fontFamily: 'Inter,sans-serif' }}>
          Don't force your team to use spreadsheets and off-the-shelf software. We create, develop and deploy custom Zoho Creator apps that fit your workflow - from concept to live in <strong style={{ color: '#0f172a' }}>weeks, not months</strong>.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 64 }}>
          <a href="https://arul-zoflowx.zohobookings.in/#/Zoho_Consultation" target="_blank" rel="noreferrer" className="btn-gradient ahover" style={{ padding: '0.85rem 1.9rem', fontSize: '0.95rem' }}>
            Get Your Free App Blueprint <i className="bi bi-arrow-right" />
          </a>
          <a href="#services" style={{ background: '#fff', color: '#0f172a', border: '2px solid #e8e3dd', borderRadius: 10, padding: '0.78rem 1.9rem', fontFamily: 'inter Sans,sans-serif', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#0f172a'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#e8e3dd'; e.currentTarget.style.transform = '' }}
          >
            See What We Build <i className="bi bi-grid-3x3-gap" />
          </a>
        </div>

        {/* Stats - premium glass card */}
        <div ref={statsRef} style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 0,
          padding: '36px 32px', background: '#fff',
          border: '1px solid #e8e3dd', borderRadius: 24, maxWidth: 1320, margin: '0 auto',
          boxShadow: '0 24px 60px rgba(15,23,42,0.07), 0 1px 0 rgba(255,255,255,0.5) inset',
          position: 'relative', overflow: 'hidden',
        }}>
          <div aria-hidden style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'var(--grad-tri)' }} />
          {stats.map((s, i) => (
            <div key={s.label} style={{ textAlign: 'center', padding: '8px 12px', borderRight: i < stats.length - 1 ? '1px solid #e8e3dd' : 'none' }}>
              <div className="stat-num" data-target={s.num} data-suffix={s.suffix}
                style={{ fontFamily: 'inter Sans,sans-serif', fontSize: 'clamp(2rem,3vw,2.6rem)', fontWeight: 600, background: 'linear-gradient(135deg,#3b82f6,#8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1 }}>
                0{s.suffix}
              </div>
              <div style={{ fontSize: '0.82rem', color: '#64748b', marginTop: 8, fontFamily: 'Inter,sans-serif', lineHeight: 1.4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
