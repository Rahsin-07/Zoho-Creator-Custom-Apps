'use client'
import { useEffect, useRef } from 'react'

const plans = [
  {
    type: 'Single App',
    price: 'From ₹75,000',
    period: 'Fixed scope · 3–6 weeks',
    desc: 'One app, one outcome. Perfect for a focused team replacing spreadsheets, fixing a broken process, or piloting Zoho Creator in one department.',
    features: ['Fixed-scope pricing', 'First demo in 14 days', 'Admin documentation', '30 days free post-launch support'],
    featured: false,
    cta: 'Plan my single app',
    icon: 'bi-window',
  },
  {
    type: 'Full Zoho Rollout',
    price: 'Custom Quote',
    period: 'Multi-app · 6–12 weeks',
    desc: 'Creator + CRM + Books + Desk + Analytics, wired together with the integrations and Deluge that hold them up. For teams scaling past their tooling.',
    features: ['Multi-app architecture', '50+ integrations available', 'Role-based access & data security', 'Training & change management'],
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
    features: ['Dedicated PM + developer', 'Flexible monthly hours', 'Priority Zoho escalation', 'Quarterly tech reviews'],
    featured: false,
    cta: 'Become my tech partner',
    icon: 'bi-people',
  },
]

export default function Pricing() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.fade-up').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .pricing-card {
          transition: transform 0.28s cubic-bezier(.2,.7,.2,1), box-shadow 0.28s cubic-bezier(.2,.7,.2,1), border-color 0.2s;
        }
        .pricing-card:hover {
          transform: translateY(-7px);
        }
        .pricing-card.card-light:hover {
          box-shadow: 0 22px 55px rgba(15,23,42,0.11);
          border-color: #1a56db !important;
        }
        .pricing-card.card-dark:hover {
          box-shadow: 0 26px 65px rgba(15,23,42,0.38);
        }
        .btn-red-solid {
          display: flex; align-items: center; justify-content: center; gap: 8px;
          width: 100%; padding: 13px 20px; border-radius: 10px;
          background: #dc2626; color: #fff; border: 1.5px solid #dc2626;
          font-family: 'inter Sans', sans-serif; font-weight: 700;
          font-size: 0.875rem; text-decoration: none;
          transition: background 0.18s, border-color 0.18s;
        }
        .btn-red-solid:hover {
          background: #b91c1c; border-color: #b91c1c; color: #fff;
        }
        .btn-gradient-full {
          display: flex; align-items: center; justify-content: center; gap: 8px;
          width: 100%; padding: 13px 20px; border-radius: 10px;
          background: linear-gradient(135deg, #1a56db, #7c3aed);
          color: #fff; border: none;
          font-family: 'inter Sans', sans-serif; font-weight: 700;
          font-size: 0.875rem; text-decoration: none;
          transition: opacity 0.18s;
        }
        .btn-gradient-full:hover { opacity: 0.88; color: #fff; }
      ` }} />

      <section
        id="pricing"
        ref={ref}
        style={{ background: '#f8f7f5', padding: '88px 0', position: 'relative' }}
      >
        <div className="container">

          {/* Header */}
          <div className="text-center fade-up" style={{ maxWidth: 680, margin: '0 auto 56px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
              <span
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  background: '#eff6ff', color: '#1a56db',
                  fontSize: '0.68rem', fontWeight: 700, letterSpacing: '2px',
                  textTransform: 'uppercase', padding: '6px 16px', borderRadius: 20,
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                Ways to Work With Us
              </span>
            </div>
            <h2
              style={{
                fontFamily: 'inter Sans, sans-serif',
                fontSize: 'clamp(2rem, 4vw, 2.65rem)',
                fontWeight: 800, color: '#0f172a',
                lineHeight: 1.15, letterSpacing: '-0.5px', marginBottom: 14,
              }}
            >
              Pick the model that{' '}
              <span style={{ background: 'linear-gradient(135deg, #1a56db, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                fits your stage
              </span>
            </h2>
            <p style={{ fontSize: '0.94rem', color: '#64748b', lineHeight: 1.75, fontFamily: 'Inter, sans-serif', margin: 0 }}>
              Whether you need one app, a full Zoho rollout, or a long-term tech partner, we have a way to work together that won't burn your budget.
            </p>
          </div>

          {/* Cards */}
          <div className="row g-4 justify-content-center align-items-start" style={{ paddingTop: 14 }}>
            {plans.map((plan, i) => (
              <div
                key={plan.type}
                className="col-md-6 col-lg-4 fade-up"
                style={{ transitionDelay: `${i * 0.09}s` }}
              >
                <div
                  className={`pricing-card ${plan.featured ? 'card-dark' : 'card-light'}`}
                  style={{
                    background: plan.featured ? '#0f172a' : '#fff',
                    border: `1.5px solid ${plan.featured ? '#0f172a' : '#e8e3dd'}`,
                    borderRadius: 20,
                    padding: plan.popular ? '48px 28px 32px' : '36px 28px 32px',
                    height: '100%',
                    position: 'relative',
                    overflow: 'visible',
                  }}
                >
                  {/* Popular badge */}
                  {plan.popular && (
                    <div
                      aria-label={plan.popular}
                      style={{
                        position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)',
                        background: 'linear-gradient(135deg, #1a56db, #7c3aed)',
                        color: '#fff', fontSize: '0.68rem', fontWeight: 800,
                        letterSpacing: '1.5px', textTransform: 'uppercase',
                        padding: '5px 18px', borderRadius: 50, whiteSpace: 'nowrap',
                        fontFamily: 'Inter, sans-serif',
                      }}
                    >
                      ⚡ {plan.popular}
                    </div>
                  )}

                  {/* Icon */}
                  <div
                    style={{
                      width: 44, height: 44, borderRadius: 11,
                      background: plan.featured ? 'rgba(255,255,255,0.1)' : '#eff6ff',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: plan.featured ? '#93c5fd' : '#1a56db',
                      fontSize: '1.25rem', marginBottom: 20,
                    }}
                  >
                    <i className={`bi ${plan.icon}`} />
                  </div>

                  {/* Type label */}
                  <div
                    style={{
                      fontSize: '0.68rem', fontWeight: 700, letterSpacing: '2px',
                      textTransform: 'uppercase', marginBottom: 8,
                      color: plan.featured ? 'rgba(255,255,255,0.45)' : '#64748b',
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    {plan.type}
                  </div>

                  {/* Price */}
                  <div
                    style={{
                      fontFamily: 'inter Sans, sans-serif',
                      fontSize: '2rem', fontWeight: 800, lineHeight: 1.1,
                      color: plan.featured ? '#fff' : '#0f172a',
                      marginBottom: 5, letterSpacing: '-0.5px',
                    }}
                  >
                    {plan.price}
                  </div>

                  {/* Period */}
                  <div
                    style={{
                      fontSize: '0.78rem', marginBottom: 16,
                      color: plan.featured ? 'rgba(255,255,255,0.45)' : '#94a3b8',
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    {plan.period}
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: '0.86rem', lineHeight: 1.75, marginBottom: 22,
                      color: plan.featured ? 'rgba(255,255,255,0.65)' : '#64748b',
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    {plan.desc}
                  </p>

                  {/* Divider */}
                  <div
                    style={{
                      height: 1,
                      background: plan.featured ? 'rgba(255,255,255,0.1)' : '#f0ece8',
                      marginBottom: 20,
                    }}
                  />

                  {/* Features */}
                  <div style={{ marginBottom: 28, display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {plan.features.map((f) => (
                      <div
                        key={f}
                        style={{
                          display: 'flex', alignItems: 'center', gap: 10,
                          fontSize: '0.84rem',
                          color: plan.featured ? 'rgba(255,255,255,0.75)' : '#334155',
                          fontFamily: 'Inter, sans-serif',
                        }}
                      >
                        <div
                          style={{
                            width: 18, height: 18, minWidth: 18, borderRadius: '50%',
                            background: plan.featured ? 'rgba(52,211,153,0.2)' : 'rgba(16,185,129,0.12)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                          }}
                        >
                          <i
                            className="bi bi-check"
                            style={{
                              color: plan.featured ? '#34d399' : '#10b981',
                              fontSize: '0.72rem', fontWeight: 700,
                            }}
                          />
                        </div>
                        {f}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  {plan.featured ? (
                    <a
                      href="https://arul-zoflowx.zohobookings.in/#/Zoho_Consultation"
                      target="_blank"
                      rel="noreferrer"
                      className="btn-gradient-full"
                    >
                      {plan.cta} <i className="bi bi-arrow-right" />
                    </a>
                  ) : (
                    <a
                      href="https://arul-zoflowx.zohobookings.in/#/Zoho_Consultation"
                      target="_blank"
                      rel="noreferrer"
                      className="btn-red-solid"
                    >
                      {plan.cta} <i className="bi bi-arrow-right" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <div
            className="fade-up text-center"
            style={{
              marginTop: 36, fontSize: '0.84rem',
              color: '#94a3b8', fontFamily: 'Inter, sans-serif',
            }}
          >
            <i className="bi bi-info-circle me-2" style={{ color: '#1a56db' }} />
            Not sure where you fit? Tell us your situation and we'll recommend the right model — honestly.
          </div>
        </div>
      </section>
    </>
  )
}