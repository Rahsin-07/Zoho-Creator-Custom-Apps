'use client'
import { useEffect, useRef } from 'react'

const reasons = [
  { num: '01', icon: 'bi-patch-check', title: 'Authorized Zoho Partner', desc: 'Direct access to Zoho engineering, faster issue resolution, and exclusive partner pricing for our clients.' },
  { num: '02', icon: 'bi-tools', title: 'Built by Operators', desc: "We've been in the real business world. We create apps from the user's seat — not from a developer's checklist." },
  { num: '03', icon: 'bi-tag', title: 'Fixed-Scope Pricing', desc: 'You can see the total cost before we write a single line of Deluge. No surprises, no scope creep.' },
  { num: '04', icon: 'bi-lightning-charge', title: 'Two-Week First Demo', desc: "We're not gone for months. A working version of your app will be available in the first 14 days." },
  { num: '05', icon: 'bi-file-earmark-text', title: 'Documented & Handover-Ready', desc: 'Each app includes admin documentation, video walkthroughs, and clean code your future team can learn.' },
  { num: '06', icon: 'bi-puzzle', title: 'Beyond Just Creator', desc: 'We connect Creator with CRM, Books, Desk, Analytics, and 50+ external tools. One stack, zero silos.' },
  { num: '07', icon: 'bi-globe2', title: 'Built to Scale Globally', desc: 'Applications that support expanding teams, multiple locations and changing requirements without starting from scratch.' },
  { num: '08', icon: 'bi-life-preserver', title: 'Long-Term Support', desc: "Our relationship doesn't end at launch. Free 30-day support keeps your apps healthy as you grow." },
]

export default function WhyHire() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target) } })
    }, { threshold: 0.1 })
    ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="why-hire" style={{ background: '#fff', position: 'relative' }} ref={ref}>
      <div className="container">
        <div className="text-center mb-5 fade-up" style={{ maxWidth: 760, margin: '0 auto 56px' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <span className="section-label">Why ZoFlowX</span>
          </div>
          <h2 className="section-title" style={{ fontWeight: 600 }}>Eight reasons teams pick us over <span className="grad-blue-red">"any" Zoho developer</span></h2>
          <p className="section-sub mx-auto">Any user can drag and drop a form. Creating a Zoho Creator app that scales with your business is another art. Here's what sets ZoFlowX apart.</p>
        </div>

        <div className="row g-4">
          {reasons.map((r, i) => (
            <div className="col-md-6 col-lg-3 fade-up" key={r.num} style={{ transitionDelay: `${i * 0.05}s` }}>
              <div style={{
                background: '#f5f0eb', border: '1px solid #e8e3dd', borderRadius: 16,
                padding: '28px 22px', height: '100%', transition: 'all 0.35s cubic-bezier(.2,.7,.2,1)',
                cursor: 'default', position: 'relative', overflow: 'hidden',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-6px)'
                  e.currentTarget.style.boxShadow = '0 18px 50px rgba(15,23,42,0.10)'
                  e.currentTarget.style.borderColor = '#1a56db'
                  e.currentTarget.style.background = '#fff'
                  e.currentTarget.querySelector('.r-icon').style.transform = 'rotate(-6deg) scale(1.08)'
                  e.currentTarget.querySelector('.r-num').style.opacity = '1'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = ''
                  e.currentTarget.style.boxShadow = ''
                  e.currentTarget.style.borderColor = '#e8e3dd'
                  e.currentTarget.style.background = '#f5f0eb'
                  e.currentTarget.querySelector('.r-icon').style.transform = ''
                  e.currentTarget.querySelector('.r-num').style.opacity = '0.5'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                  <div className="r-icon" style={{ width: 46, height: 46, borderRadius: 12, background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '1.15rem', boxShadow: '0 6px 18px rgba(59,130,246,0.3)', transition: 'transform 0.35s' }}>
                    <i className={`bi ${r.icon}`} />
                  </div>
                  <div className="r-num grad-num" style={{ fontSize: '1.1rem', opacity: 0.5, transition: 'opacity 0.3s' }}>{r.num}</div>
                </div>
                <h3 style={{ fontSize: '1.02rem', fontWeight: 700, color: '#0f172a', marginBottom: 8, fontFamily: 'inter Sans,sans-serif', lineHeight: 1.3 }}>{r.title}</h3>
                <p style={{ fontSize: '0.86rem', color: '#64748b', lineHeight: 1.65, marginBottom: 0, fontFamily: 'Inter,sans-serif' }}>{r.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5 fade-up">
          <a href="https://arul-zoflowx.zohobookings.in/#/Zoho_Consultation" target="_blank" rel="noreferrer" className="btn-gradient ahover" style={{ padding: '0.85rem 2rem' }}>
            Let's Plan Your App <i className="bi bi-arrow-right" />
          </a>
        </div>
      </div>
    </section>
  )
}
