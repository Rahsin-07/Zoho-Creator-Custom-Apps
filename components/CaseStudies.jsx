'use client'
import { useEffect, useRef } from 'react'

const cases = [
  {
    industry: 'Manufacturing',
    icon: 'bi-gear-wide-connected',
    title: 'QC Checklist App for Multi-Plant Operations',
    gradient: 'linear-gradient(135deg,#1a56db,#3b82f6)',
    metrics: [{ num: '70%', label: 'Faster batch sign-off' }, { num: '4', label: 'Plants live in 8 weeks' }],
    desc: 'Replaced a maze of paper checklists with a mobile-first Zoho Creator app for QC inspectors, with offline capture and Books integration for material variance.',
  },
  {
    industry: 'Real Estate',
    icon: 'bi-building',
    title: 'Lead-to-Sale Pipeline + Site Visit App',
    gradient: 'linear-gradient(135deg,#7c3aed,#a855f7)',
    metrics: [{ num: '2.4×', label: 'Site visits per agent' }, { num: '38%', label: 'Faster deal closure' }],
    desc: 'Built a connected Creator + CRM workflow with WhatsApp routing, geo-tagged site visits, and an owner portal for live status - replacing five disconnected tools.',
  },
  {
    industry: 'Logistics',
    icon: 'bi-truck',
    title: 'Trip Sheet & POD Capture App for Fleet',
    gradient: 'linear-gradient(135deg,#f97316,#fb923c)',
    metrics: [{ num: '90%', label: 'Less paperwork' }, { num: '24h', label: 'Faster invoicing' }],
    desc: 'Drivers capture trip data, fuel, and signed PODs on mobile. The back office sees live dashboards and triggers Books invoices automatically on POD upload.',
  },
]

export default function CaseStudies() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target) } })
    }, { threshold: 0.1 })
    ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="case-studies" style={{ background: '#fff' }} ref={ref}>
      <div className="container">
        <div className="row align-items-end mb-5 fade-up">
          <div className="col-lg-8">
            <div className="section-label">Case Studies</div>
            <h2 className="section-title" style={{ fontWeight: 600 }}>Real outcomes from <span className="grad-blue-red">our work</span></h2>
            <p className="section-sub">Real numbers from real clients. The kind of results that make finance teams smile and operations teams sleep better at night.</p>
          </div>
          <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
            <a href="#" className="btn-outline-custom ahover">Read More Case Studies <i className="bi bi-arrow-right" /></a>
          </div>
        </div>

        <div className="row g-4">
          {cases.map((c, i) => (
            <div className="col-md-6 col-lg-4 fade-up" key={c.title} style={{ transitionDelay: `${i * 0.08}s` }}>
              <div style={{ background: '#fff', border: '1px solid #e8e3dd', borderRadius: 20, overflow: 'hidden', transition: 'all 0.35s cubic-bezier(.2,.7,.2,1)', height: '100%', display: 'flex', flexDirection: 'column' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 24px 60px rgba(15,23,42,0.10)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '' }}
              >
                <div style={{ background: c.gradient, padding: '28px 30px', color: '#fff', position: 'relative', overflow: 'hidden' }}>
                  <div aria-hidden style={{ position: 'absolute', top: -40, right: -40, width: 160, height: 160, borderRadius: '50%', background: 'rgba(255,255,255,0.12)' }} />
                  <div aria-hidden style={{ position: 'absolute', bottom: -30, left: -30, width: 120, height: 120, borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
                  <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                    <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <i className={`bi ${c.icon}`} />
                    </div>
                    <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', opacity: 0.85, fontFamily: 'Inter,sans-serif' }}>{c.industry}</div>
                  </div>
                  <h3 style={{ position: 'relative', fontSize: '1.12rem', fontWeight: 700, fontFamily: 'inter Sans,sans-serif', lineHeight: 1.35, marginBottom: 0 }}>{c.title}</h3>
                </div>
                <div style={{ padding: '28px 30px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginBottom: 18, paddingBottom: 18, borderBottom: '1px dashed #e8e3dd' }}>
                    {c.metrics.map(m => (
                      <div key={m.label}>
                        <div className="grad-num" style={{ fontSize: '1.7rem', lineHeight: 1 }}>{m.num}</div>
                        <div style={{ fontSize: '0.74rem', color: '#64748b', marginTop: 4, fontFamily: 'Inter,sans-serif' }}>{m.label}</div>
                      </div>
                    ))}
                  </div>
                  <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.65, marginBottom: 16, fontFamily: 'Inter,sans-serif', flex: 1 }}>{c.desc}</p>
                  <a href="#" className="link-reveal" style={{ marginTop: 'auto' }}>
                    Read the full story <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
