'use client'
import { useEffect, useRef } from 'react'

const plans = [
  {
    type: 'Single App',
    price: 'From ₹75,000',
    period: 'Fixed scope · 3–6 weeks',
    desc: 'One app, one outcome. Perfect for a focused team that needs to replace spreadsheets, fix a broken process, or pilot Zoho Creator in one department.',
    features: ['Fixed-scope pricing','First demo in 14 days','Admin documentation','30 days free post-launch support'],
    featured: false,
    cta: 'Plan my single app',
    icon: 'bi-app',
  },
  {
    type: 'Full Zoho Rollout',
    price: 'Custom Quote',
    period: 'Multi-app · 6–12 weeks',
    desc: 'Creator + CRM + Books + Desk + Analytics, wired together with the integrations and Deluge that hold them up. For teams scaling past their tooling.',
    features: ['Multi-app architecture','50+ integrations available','Role-based access & data security','Training & change management'],
    featured: true,
    popular: 'Most Popular',
    cta: 'Quote my full rollout',
    icon: 'bi-diagram-3',
  },
  {
    type: 'Tech Partner',
    price: 'Retainer',
    period: 'Ongoing · Monthly',
    desc: 'A dedicated Zoho team on tap. Monthly hours for new builds, enhancements, and the quiet maintenance that keeps your operations running.',
    features: ['Dedicated PM + developer','Flexible monthly hours','Priority Zoho escalation','Quarterly tech reviews'],
    featured: false,
    cta: 'Become my tech partner',
    icon: 'bi-handshake',
  },
]

export default function Pricing() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target) } })
    }, { threshold: 0.1 })
    ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="pricing" style={{ background: '#fff', position: 'relative' }} ref={ref}>
      <div className="container">
        <div className="text-center mb-5 fade-up" style={{ maxWidth: 720, margin: '0 auto 56px' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <span className="section-label">Ways to Work With Us</span>
          </div>
          <h2 className="section-title">Pick the model that <span className="grad-blue-purple">fits your stage</span></h2>
          <p className="section-sub mx-auto">Whether you need one app, a full Zoho rollout, or a long-term tech partner, we have a way to work together that won't burn your budget.</p>
        </div>

        <div className="row g-4 justify-content-center">
          {plans.map((plan, i) => (
            <div className="col-md-6 col-lg-4 fade-up" key={plan.type} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div style={{
                background: plan.featured ? '#0f172a' : '#fff',
                border: `2px solid ${plan.featured ? '#0f172a' : '#e8e3dd'}`,
                borderRadius: 22, padding: '40px 32px 36px', height: '100%',
                position: 'relative', transition: 'all 0.35s cubic-bezier(.2,.7,.2,1)',
                overflow: 'hidden',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.boxShadow = plan.featured
                    ? '0 30px 70px rgba(15,23,42,0.4)'
                    : '0 24px 60px rgba(15,23,42,0.12)'
                  if (!plan.featured) e.currentTarget.style.borderColor = '#1a56db'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = ''
                  e.currentTarget.style.boxShadow = ''
                  e.currentTarget.style.borderColor = plan.featured ? '#0f172a' : '#e8e3dd'
                }}
              >
                {plan.featured && <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 80% 0%, rgba(139,92,246,0.25), transparent 50%)', pointerEvents: 'none' }} />}
                {plan.popular && (
                  <div style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', background: 'var(--grad-tri)', color: '#fff', fontSize: '0.7rem', fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', padding: '6px 18px', borderRadius: 50, whiteSpace: 'nowrap', boxShadow: '0 8px 20px rgba(139,92,246,0.4)' }}>
                    ⚡ {plan.popular}
                  </div>
                )}

                <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 18 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: plan.featured ? 'rgba(255,255,255,0.1)' : '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: plan.featured ? '#93c5fd' : '#1a56db', fontSize: '1.3rem' }}>
                    <i className={`bi ${plan.icon}`} />
                  </div>
                </div>

                <div style={{ position: 'relative', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: plan.featured ? 'rgba(255,255,255,0.5)' : '#64748b', marginBottom: 8, fontFamily: 'Inter,sans-serif' }}>{plan.type}</div>

                <div style={{ position: 'relative', fontFamily: 'Plus Jakarta Sans,sans-serif', fontSize: '2.2rem', fontWeight: 800, color: plan.featured ? '#fff' : '#0f172a', lineHeight: 1.1, marginBottom: 6, letterSpacing: '-0.5px' }}>
                  {plan.price}
                </div>
                <div style={{ position: 'relative', fontSize: '0.82rem', color: plan.featured ? 'rgba(255,255,255,0.55)' : '#64748b', marginBottom: 18, fontFamily: 'Inter,sans-serif' }}>{plan.period}</div>

                <p style={{ position: 'relative', fontSize: '0.88rem', color: plan.featured ? 'rgba(255,255,255,0.7)' : '#64748b', lineHeight: 1.7, fontFamily: 'Inter,sans-serif', marginBottom: 22 }}>{plan.desc}</p>

                <div style={{ position: 'relative', borderTop: `1px solid ${plan.featured ? 'rgba(255,255,255,0.1)' : '#f0ece8'}`, paddingTop: 20, marginBottom: 24 }}>
                  {plan.features.map(f => (
                    <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10, fontSize: '0.88rem', color: plan.featured ? 'rgba(255,255,255,0.8)' : '#334155', fontFamily: 'Inter,sans-serif' }}>
                      <div style={{ width: 18, height: 18, minWidth: 18, borderRadius: '50%', background: plan.featured ? 'rgba(16,185,129,0.2)' : 'rgba(16,185,129,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <i className="bi bi-check" style={{ color: '#10b981', fontSize: '0.72rem', fontWeight: 700 }} />
                      </div>
                      {f}
                    </div>
                  ))}
                </div>

                {plan.featured ? (
                  <a href="#consultation" className="btn-gradient ahover" style={{ position: 'relative', width: '100%', justifyContent: 'center', padding: '0.85rem 1.5rem' }}>{plan.cta} <i className="bi bi-arrow-right" /></a>
                ) : (
                  <a href="#consultation" style={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', gap: 8, background: 'transparent', color: '#0f172a', border: '2px solid #e8e3dd', borderRadius: 10, padding: '0.82rem 1.5rem', fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none', transition: 'all 0.2s' }}
                    className="ahover"
                    onMouseEnter={e => { e.currentTarget.style.borderColor = '#0f172a'; e.currentTarget.style.background = '#0f172a'; e.currentTarget.style.color = '#fff' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = '#e8e3dd'; e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#0f172a' }}
                  >{plan.cta} <i className="bi bi-arrow-right" /></a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="fade-up text-center" style={{ marginTop: 36, fontSize: '0.88rem', color: '#64748b', fontFamily: 'Inter,sans-serif' }}>
          <i className="bi bi-info-circle me-2" style={{ color: '#1a56db' }} />
          Not sure where you fit? Tell us your situation and we'll recommend the right model — honestly.
        </div>
      </div>
    </section>
  )
}
