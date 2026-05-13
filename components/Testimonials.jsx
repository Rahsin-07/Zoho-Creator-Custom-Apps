'use client'
import { useEffect, useRef } from 'react'

const testimonials = [
  {
    initials: 'KS', color: '#1a56db', name: 'Karthik S.', role: 'Operations Director, Chennai Mfg Group',
    text: "ZoFlowX didn't just deliver an app — they understood our shop-floor reality. Our QC checklist now runs on phones across 4 plants, and the back-office finally trusts the numbers.",
  },
  {
    initials: 'AM', color: '#8b5cf6', name: 'Aisha M.', role: 'COO, Real Estate Developer',
    text: "The two-week demo set the tone. Every Friday Loom kept me in the loop, and we never got the 'we need more time' email. Our site visit flow is now the envy of competitors.",
  },
  {
    initials: 'RV', color: '#f97316', name: 'Rohit V.', role: 'Founder, Logistics Startup',
    text: "Arul's team treats Zoho Creator like a craft, not a checkbox. They wrote Deluge I can actually read, documented every workflow, and stuck around past launch.",
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target) } })
    }, { threshold: 0.1 })
    ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="testimonials" style={{ background: '#faf9f7', position: 'relative' }} ref={ref}>
      <div className="container">
        <div className="text-center mb-5 fade-up" style={{ maxWidth: 720, margin: '0 auto 56px' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <span className="section-label">What Clients Say</span>
          </div>
          <h2 className="section-title">Trusted by founders, <span className="grad-purple-orange">not just their IT teams</span></h2>
          <p className="section-sub mx-auto">We measure ourselves on one thing: would you recommend us to a friend? Here's what our clients have said.</p>
        </div>

        <div className="row g-4">
          {testimonials.map((t, i) => (
            <div className="col-md-6 col-lg-4 fade-up" key={t.name} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div style={{
                background: '#fff', border: '1px solid #e8e3dd', borderRadius: 20,
                padding: '36px 32px', height: '100%', position: 'relative',
                transition: 'all 0.35s cubic-bezier(.2,.7,.2,1)', overflow: 'hidden',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-6px)'
                  e.currentTarget.style.boxShadow = '0 24px 60px rgba(15,23,42,0.10)'
                  e.currentTarget.querySelector('.t-bar').style.transform = 'scaleX(1)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = ''
                  e.currentTarget.style.boxShadow = ''
                  e.currentTarget.querySelector('.t-bar').style.transform = 'scaleX(0)'
                }}
              >
                <div className="t-bar" aria-hidden style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'var(--grad-tri)', transform: 'scaleX(0)', transformOrigin: 'left', transition: 'transform 0.4s ease-out' }} />
                <div aria-hidden style={{ position: 'absolute', top: 20, right: 28, fontSize: '5.5rem', fontFamily: 'Georgia,serif', color: '#eff6ff', lineHeight: 1, pointerEvents: 'none' }}>"</div>
                <div style={{ color: '#f59e0b', marginBottom: 18, fontSize: '0.95rem', letterSpacing: 1 }}>★★★★★</div>
                <p style={{ fontSize: '0.95rem', color: '#334155', lineHeight: 1.75, marginBottom: 28, fontFamily: 'Inter,sans-serif', position: 'relative' }}>{t.text}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, paddingTop: 20, borderTop: '1px solid #f1ece6' }}>
                  <div style={{ width: 48, height: 48, borderRadius: '50%', background: `linear-gradient(135deg, ${t.color}, ${t.color}cc)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 700, color: '#fff', fontSize: '0.95rem', boxShadow: `0 6px 18px ${t.color}55` }}>{t.initials}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.92rem', color: '#0f172a', fontFamily: 'Plus Jakarta Sans,sans-serif' }}>{t.name}</div>
                    <div style={{ fontSize: '0.78rem', color: '#64748b', fontFamily: 'Inter,sans-serif' }}>{t.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
