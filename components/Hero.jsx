'use client'
import { useEffect, useRef } from 'react'

const stats = [
  { num: 20, suffix: '+', label: 'Zoho Creator projects delivered' },
  { num: 15, suffix: '+', label: 'Years of hands-on Zoho experience' },
  { num: 100, suffix: '%', label: 'Transparency at every step' },
]

const reviewers = [
  { t: 'SV', c: '#2563eb' },
  { t: 'SS', c: '#dc2626' },
  { t: 'KP', c: '#f59e0b' },
]

const contactBtns = [
  { label: 'Call', icon: 'bi-telephone', href: 'tel:+918190009222' },
  { label: 'WhatsApp', icon: 'bi-whatsapp', href: 'https://wa.me/918190009222', accent: '#16a34a' },
  { label: 'Email', icon: 'bi-envelope', href: 'mailto:info@zoflowx.com' },
  { label: 'Schedule', icon: 'bi-calendar-check', href: 'https://arul-zoflowx.zohobookings.in/#/Zoho_Consultation' },
  { label: 'Live Chat', icon: 'bi-chat-dots', href: '#' },
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
    <section id="hero" style={{ background: 'linear-gradient(180deg,#fdfaf4 0%,#fcf3e6 55%,#fbeede 100%)', padding: '90px 0 80px', position: 'relative', overflow: 'hidden' }}>
      {/* gradient blobs */}
      <div aria-hidden style={{ position: 'absolute', width: 480, height: 480, top: -180, left: -120, background: 'radial-gradient(circle at center, rgba(59,130,246,0.14), transparent 60%)', animation: 'blob-drift 14s ease-in-out infinite', pointerEvents: 'none' }} />
      <div aria-hidden style={{ position: 'absolute', width: 520, height: 520, bottom: -220, right: -160, background: 'radial-gradient(circle at center, rgba(249,115,22,0.12), transparent 60%)', animation: 'blob-drift 18s ease-in-out infinite reverse', pointerEvents: 'none' }} />
      <div aria-hidden style={{ position: 'absolute', inset: 0, opacity: 0.5 }} className="dot-grid" />

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

        <p style={{ fontSize: '1.1rem', color: '#475569', maxWidth: 640, margin: '0 auto 30px', lineHeight: 1.75, fontFamily: 'Inter,sans-serif' }}>
          Don't force your team to use spreadsheets and off-the-shelf software. We create, develop and deploy custom Zoho Creator apps that fit your workflow - from concept to live in <strong style={{ color: '#0f172a' }}>weeks, not months</strong>.
        </p>

        {/* Review pill */}
        <div style={{ marginBottom: 34, display: 'flex', justifyContent: 'center' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 16,
            background: '#fff', border: '1px solid #ece6df', borderRadius: 999,
            padding: '10px 22px', boxShadow: '0 8px 24px rgba(15,23,42,0.06)',
          }}>
            {/* Avatars */}
            <div style={{ display: 'flex' }}>
              {reviewers.map((a, i) => (
                <span key={a.t} style={{
                  width: 34, height: 34, borderRadius: '50%', background: a.c,
                  color: '#fff', fontSize: '0.72rem', fontWeight: 700, fontFamily: 'Inter,sans-serif',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  border: '2px solid #fff', marginLeft: i === 0 ? 0 : -10,
                }}>{a.t}</span>
              ))}
            </div>
            {/* Stars + rating */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
              <span style={{ display: 'inline-flex', gap: 2, color: '#f59e0b' }}>
                {[...Array(5)].map((_, i) => <i key={i} className="bi bi-star-fill" style={{ fontSize: '0.95rem' }} />)}
              </span>
              <span style={{ fontFamily: 'Inter,sans-serif', fontWeight: 700, color: '#0f172a', fontSize: '0.98rem' }}>5/5</span>
            </div>
          </div>
        </div>

        {/* Primary CTAs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 20 }}>
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

        {/* Contact buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 64 }}>
          {contactBtns.map(b => (
            <a key={b.label} href={b.href}
              target={b.href.startsWith('http') ? '_blank' : undefined}
              rel={b.href.startsWith('http') ? 'noreferrer' : undefined}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: '#fff', border: '1px solid #e8e3dd', borderRadius: 10,
                padding: '0.6rem 1.15rem', fontFamily: 'Inter,sans-serif', fontWeight: 600,
                fontSize: '0.9rem', color: b.accent || '#334155', textDecoration: 'none',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = b.accent || '#0f172a'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 18px rgba(15,23,42,0.08)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#e8e3dd'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = 'none' }}
            >
              <i className={`bi ${b.icon}`} style={{ fontSize: '1rem', color: b.accent || '#2563eb' }} />
              {b.label}
            </a>
          ))}
        </div>

        {/* Stats - premium glass card */}
        <div ref={statsRef} style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 0,
          padding: '36px 32px', background: '#fff',
          border: '1px solid #e8e3dd', borderRadius: 24, maxWidth: 920, margin: '0 auto',
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