'use client'
import { useEffect, useRef } from 'react'

const industries = [
  { icon: 'bi-gear-wide-connected', title: 'Manufacturing', desc: 'Production tracking, QC checklists, vendor portals, and dispatch apps.' },
  { icon: 'bi-heart-pulse', title: 'Healthcare', desc: 'Patient onboarding, appointment apps, and clinic operations.' },
  { icon: 'bi-building', title: 'Real Estate', desc: 'Lead-to-sale pipelines, site visits, and owner portals.' },
  { icon: 'bi-truck', title: 'Logistics', desc: 'Trip sheets, POD capture, and live driver tracking.' },
  { icon: 'bi-mortarboard', title: 'Education', desc: 'Admissions, fee tracking, and student lifecycle apps.' },
  { icon: 'bi-bag', title: 'Retail & E-Comm', desc: 'Store ops, returns, and franchise dashboards.' },
  { icon: 'bi-bank', title: 'Financial Services', desc: 'KYC apps, loan workflows, and advisor portals.' },
  { icon: 'bi-briefcase', title: 'Professional Services', desc: 'Project tracking, time sheets, and client billing.' },
]

export default function Industries() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target) } })
    }, { threshold: 0.1 })
    ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="industries" style={{ background: '#faf9f7', position: 'relative' }} ref={ref}>
      <div className="container">
        <div className="text-center mb-5 fade-up" style={{ maxWidth: 740, margin: '0 auto 56px' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <span className="section-label">Who We Work With</span>
          </div>
          <h2 className="section-title">Industries we support with <span className="grad-blue-purple">custom apps</span></h2>
          <p className="section-sub mx-auto">We create Zoho Creator applications for various industries. If your business is built on processes, people and paperwork — we can help streamline it.</p>
        </div>

        <div className="row g-4">
          {industries.map((ind, i) => (
            <div className="col-md-6 col-lg-3 fade-up" key={ind.title} style={{ transitionDelay: `${i * 0.05}s` }}>
              <div style={{
                background: '#fff', border: '1px solid #e8e3dd', borderRadius: 16,
                padding: '28px 24px', height: '100%', transition: 'all 0.35s cubic-bezier(.2,.7,.2,1)',
                cursor: 'default', position: 'relative', overflow: 'hidden',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-5px)'
                  e.currentTarget.style.boxShadow = '0 18px 50px rgba(15,23,42,0.10)'
                  e.currentTarget.style.borderColor = '#1a56db'
                  e.currentTarget.querySelector('.ind-icon').style.background = 'linear-gradient(135deg,#1a56db,#8b5cf6)'
                  e.currentTarget.querySelector('.ind-icon').style.color = '#fff'
                  e.currentTarget.querySelector('.ind-icon').style.transform = 'rotate(-6deg) scale(1.05)'
                  e.currentTarget.querySelector('.ind-arrow').style.transform = 'translate(4px,-4px)'
                  e.currentTarget.querySelector('.ind-arrow').style.color = '#1a56db'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = ''
                  e.currentTarget.style.boxShadow = ''
                  e.currentTarget.style.borderColor = '#e8e3dd'
                  e.currentTarget.querySelector('.ind-icon').style.background = '#eff6ff'
                  e.currentTarget.querySelector('.ind-icon').style.color = '#1a56db'
                  e.currentTarget.querySelector('.ind-icon').style.transform = ''
                  e.currentTarget.querySelector('.ind-arrow').style.transform = ''
                  e.currentTarget.querySelector('.ind-arrow').style.color = '#cbd5e1'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 18 }}>
                  <div className="ind-icon" style={{ width: 52, height: 52, borderRadius: 12, background: '#eff6ff', color: '#1a56db', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.35rem', transition: 'all 0.35s' }}>
                    <i className={`bi ${ind.icon}`} />
                  </div>
                  <i className="bi bi-arrow-up-right ind-arrow" style={{ color: '#cbd5e1', fontSize: '1.1rem', transition: 'all 0.3s' }} />
                </div>
                <h3 style={{ fontSize: '1.02rem', fontWeight: 700, color: '#0f172a', marginBottom: 6, fontFamily: 'Plus Jakarta Sans,sans-serif' }}>{ind.title}</h3>
                <p style={{ fontSize: '0.86rem', color: '#64748b', lineHeight: 1.6, marginBottom: 0, fontFamily: 'Inter,sans-serif' }}>{ind.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="fade-up text-center" style={{ marginTop: 44 }}>
          <a href="#consultation" className="link-reveal" style={{ fontSize: '0.95rem' }}>
            Don't see your industry? Talk to us <i className="bi bi-arrow-right" />
          </a>
        </div>
      </div>
    </section>
  )
}
