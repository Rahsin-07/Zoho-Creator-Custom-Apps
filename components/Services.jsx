'use client'
import { useEffect, useRef } from 'react'

const services = [
  {
    num: '01',
    icon: 'bi-check2-circle',
    title: 'Workflow & Approval Apps',
    desc: 'Say goodbye to email chains, paper forms, and chaos — and hello to clean approval flows for purchases, leaves, expenses, and more.',
    cta: 'Build my approval app',
    color: '#1a56db',
  },
  {
    num: '02',
    icon: 'bi-boxes',
    title: 'Inventory & Operations Apps',
    desc: 'Monitor stocks, jobs and assets in real-time. Integrate with Zoho Books, Inventory and your current CRM in a single click.',
    cta: 'Plan my ops app',
    color: '#8b5cf6',
  },
  {
    num: '03',
    icon: 'bi-person-vcard',
    title: 'HR & Employee Self-Service',
    desc: 'Onboarding, attendance, leave, payroll inputs, and helpdesks — all based on your policies, not generic templates.',
    cta: 'Get an HR app quote',
    color: '#10b981',
  },
  {
    num: '04',
    icon: 'bi-geo-alt',
    title: 'Field Service & Mobile Apps',
    desc: 'Provide your field team with an app that is phone-friendly, can take photos, sync jobs and update HQ live — even without an internet connection.',
    cta: 'Design my field app',
    color: '#f97316',
  },
  {
    num: '05',
    icon: 'bi-diagram-3',
    title: 'CRM Extensions & Add-ons',
    desc: 'Push Zoho CRM beyond its limits with custom modules, deal scoring, quote-to-cash flows, and partner portals.',
    cta: 'Extend my CRM',
    color: '#ef4444',
  },
  {
    num: '06',
    icon: 'bi-shield-lock',
    title: 'Customer & Partner Portals',
    desc: 'Secure, branded portals for your customers to log tickets, view orders, sign documents, and track projects 24/7.',
    cta: 'Launch my portal',
    color: '#0ea5e9',
  },
]

function AppCard({ s, delay }) {
  return (
    <div className="col-md-6 col-lg-4 fade-up" style={{ transitionDelay: `${delay}s` }}>
      <div className="svc-card" style={{
        background: '#fff', border: '1px solid #e8e3dd', borderRadius: 18,
        padding: '32px 28px', height: '100%', transition: 'all 0.35s cubic-bezier(.2,.7,.2,1)',
        cursor: 'default', position: 'relative', overflow: 'hidden',
        ['--svc-color']: s.color,
      }}
        onMouseEnter={e => {
          const el = e.currentTarget
          el.style.transform = 'translateY(-6px)'
          el.style.boxShadow = `0 24px 60px ${s.color}22`
          el.style.borderColor = s.color
          el.querySelector('.svc-glow').style.opacity = '1'
          el.querySelector('.svc-icon').style.background = s.color
          el.querySelector('.svc-icon').style.color = '#fff'
          el.querySelector('.svc-cta').style.color = s.color
          el.querySelector('.svc-cta').style.gap = '12px'
        }}
        onMouseLeave={e => {
          const el = e.currentTarget
          el.style.transform = ''
          el.style.boxShadow = ''
          el.style.borderColor = '#e8e3dd'
          el.querySelector('.svc-glow').style.opacity = '0'
          el.querySelector('.svc-icon').style.background = `${s.color}15`
          el.querySelector('.svc-icon').style.color = s.color
          el.querySelector('.svc-cta').style.color = '#0f172a'
          el.querySelector('.svc-cta').style.gap = '8px'
        }}
      >
        {/* corner glow */}
        <div className="svc-glow" aria-hidden style={{ position: 'absolute', top: -60, right: -60, width: 180, height: 180, borderRadius: '50%', background: `radial-gradient(circle, ${s.color}26, transparent 70%)`, opacity: 0, transition: 'opacity 0.35s', pointerEvents: 'none' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 18, position: 'relative' }}>
          <div className="svc-icon" style={{ width: 52, height: 52, borderRadius: 14, background: `${s.color}15`, color: s.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', transition: 'all 0.3s' }}>
            <i className={`bi ${s.icon}`} />
          </div>
          <div style={{ fontFamily: 'Plus Jakarta Sans,sans-serif', fontSize: '0.85rem', fontWeight: 800, color: '#cbd5e1', letterSpacing: 1.5 }}>{s.num}</div>
        </div>
        <h3 style={{ fontSize: '1.12rem', fontWeight: 700, marginBottom: 12, color: '#0f172a', fontFamily: 'Plus Jakarta Sans,sans-serif', lineHeight: 1.3 }}>{s.title}</h3>
        <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.7, marginBottom: 20, fontFamily: 'Inter,sans-serif' }}>{s.desc}</p>
        <a href="#consultation" className="svc-cta" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: '0.85rem', fontWeight: 700, color: '#0f172a', textDecoration: 'none', fontFamily: 'Plus Jakarta Sans,sans-serif', transition: 'all 0.25s' }}>
          {s.cta} <i className="bi bi-arrow-right" />
        </a>
      </div>
    </div>
  )
}

export default function Services() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target) } })
    }, { threshold: 0.1 })
    ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" style={{ background: '#faf9f7', position: 'relative' }} ref={ref}>
      <div className="container">
        <div className="row align-items-end mb-5 fade-up">
          <div className="col-lg-8">
            <div className="section-label">Custom Apps We Build</div>
            <h2 className="section-title">Tell us the problem. <span className="grad-purple-orange">We'll show you the app.</span></h2>
            <p className="section-sub">From simple internal tools to full-blown business systems, ZoFlowX builds Zoho Creator apps that fit your team — not the other way around. Here are the apps clients ask us for the most.</p>
          </div>
        </div>

        <div className="row g-4">
          {services.map((s, i) => <AppCard key={s.title} s={s} delay={i * 0.06} />)}
        </div>

        <div className="fade-up" style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          borderRadius: 24, padding: '44px 40px', marginTop: 40,
          position: 'relative', overflow: 'hidden',
        }}>
          <div aria-hidden style={{ position: 'absolute', inset: 0, opacity: 0.18 }} className="dot-grid-light" />
          <div aria-hidden style={{ position: 'absolute', top: '-30%', right: '-10%', width: 360, height: 360, background: 'radial-gradient(circle, rgba(249,115,22,0.3), transparent 65%)', filter: 'blur(40px)' }} />
          <div className="row align-items-center position-relative g-4">
            <div className="col-lg-8">
              <div style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#f97316', marginBottom: 12 }}>Not sure which app?</div>
              <h3 style={{ color: '#fff', fontFamily: 'Plus Jakarta Sans,sans-serif', fontSize: 'clamp(1.4rem,2.4vw,1.9rem)', marginBottom: 8, lineHeight: 1.2, letterSpacing: '-0.3px' }}>
                Not sure which app you need? Let's plan it together — free.
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.95rem', marginBottom: 0, fontFamily: 'Inter,sans-serif' }}>
                30 minutes. Zero pressure. Walk away with a written blueprint and fixed cost.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a href="#consultation" className="btn-accent ahover">Book My Free Workshop <i className="bi bi-arrow-right" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
