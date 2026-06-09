'use client'
import { useEffect, useRef } from 'react'

const steps = [
  { num: '01', icon: 'bi-telephone', title: 'Discovery Call', desc: 'A 30-minute discussion to get to know your team, your pain, and what success will look like. No pitch, no pressure.' },
  { num: '02', icon: 'bi-file-earmark-ruled', title: 'Solution Blueprint', desc: 'You receive a written plan: screens, fields, automations, integrations, timeline, and fixed cost. All before you sign.' },
  { num: '03', icon: 'bi-hammer', title: 'Build & Customize', desc: 'Our team builds in weekly sprints. A Loom walkthrough is provided each Friday to keep you up to date on what is going on.' },
  { num: '04', icon: 'bi-bug', title: 'Test & Train', desc: 'We take your team through the app, collect feedback, resolve issues, and record training videos for new hires.' },
  { num: '05', icon: 'bi-rocket-takeoff', title: 'Launch & Support', desc: 'Go-live day with full support. Then you decide: take it over entirely or continue with ongoing care.' },
]

export default function Process() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target) } })
    }, { threshold: 0.1 })
    ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="process" style={{ background: 'linear-gradient(135deg,#0f172a 0%,#1e3a8a 100%)', position: 'relative', overflow: 'hidden', color: '#fff' }} ref={ref}>
      <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 20%,rgba(99,179,237,0.18) 0%,transparent 55%), radial-gradient(ellipse at 10% 80%,rgba(249,115,22,0.12) 0%,transparent 50%)', pointerEvents: 'none' }} />
      <div aria-hidden style={{ position: 'absolute', inset: 0, opacity: 0.3 }} className="dot-grid-light" />

      <div className="container position-relative">
        <div className="text-center mb-5 fade-up">
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: '0.72rem', fontWeight: 600, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#f97316', marginBottom: 14 }}>
              <span style={{ width: 24, height: 1.5, background: 'currentColor' }} />
              How It Works
            </span>
          </div>
          <h2 style={{ fontFamily: 'inter Sans,sans-serif', fontSize: 'clamp(1.95rem,4.2vw,3rem)', fontWeight: 600, color: '#fff', marginBottom: 16, letterSpacing: '-0.6px', lineHeight: 1.12 }}>
            From first call to live app - <span style={{ background: 'linear-gradient(90deg,#93c5fd,#f97316)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>in 5 steps</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.02rem', maxWidth: 640, margin: '0 auto', fontFamily: 'Inter,sans-serif', lineHeight: 1.7 }}>
            Most agencies use Zoho Creator as a black box. We see it as an open discussion. Here's exactly how a project flows when you work with India's leading Zoho partner.
          </p>
        </div>

        {/* Desktop horizontal timeline */}
        <div className="d-none d-lg-block fade-up" style={{ position: 'relative', marginTop: 60 }}>
          {/* connector line */}
          <div aria-hidden style={{ position: 'absolute', top: 32, left: '8%', right: '8%', height: 2, background: 'linear-gradient(90deg, rgba(147,197,253,0.3) 0%, rgba(249,115,22,0.5) 50%, rgba(255,255,255,0.1) 100%)' }} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16 }}>
            {steps.map((s, i) => (
              <div key={s.num} className="step-cell" style={{ textAlign: 'center', position: 'relative', cursor: 'default' }}>
                <div className="step-node" style={{
                  width: 64, height: 64, margin: '0 auto 18px',
                  borderRadius: '50%', background: 'linear-gradient(135deg,#1a56db,#3b82f6)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', fontSize: '1.4rem',
                  boxShadow: '0 8px 24px rgba(26,86,219,0.45), 0 0 0 6px rgba(15,23,42,1), 0 0 0 7px rgba(99,179,237,0.3)',
                  transition: 'transform 0.3s', position: 'relative', zIndex: 2,
                }}>
                  <i className={`bi ${s.icon}`} />
                </div>
                <div style={{ fontFamily: 'inter Sans,sans-serif', fontSize: '0.72rem', fontWeight: 600, color: '#f97316', letterSpacing: 2, marginBottom: 6 }}>STEP {s.num}</div>
                <h3 style={{ fontFamily: 'inter Sans,sans-serif', fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: 8, lineHeight: 1.3 }}>{s.title}</h3>
                <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.65, fontFamily: 'Inter,sans-serif', padding: '0 6px', marginBottom: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <style>{`
            .step-cell:hover .step-node { transform: translateY(-4px) scale(1.06); }
          `}</style>
        </div>

        {/* Mobile vertical timeline */}
        <div className="d-lg-none fade-up">
          {steps.map((s, i) => (
            <div key={s.num} style={{ display: 'flex', gap: 20, padding: '20px 0', position: 'relative' }}>
              {i < steps.length - 1 && <div aria-hidden style={{ position: 'absolute', left: 27, top: 70, width: 2, height: 'calc(100% - 40px)', background: 'rgba(99,179,237,0.25)' }} />}
              <div style={{ width: 56, height: 56, minWidth: 56, borderRadius: '50%', background: 'linear-gradient(135deg,#1a56db,#3b82f6)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '1.2rem', boxShadow: '0 6px 20px rgba(26,86,219,0.4)', zIndex: 1 }}>
                <i className={`bi ${s.icon}`} />
              </div>
              <div style={{ paddingTop: 8 }}>
                <div style={{ fontFamily: 'inter Sans,sans-serif', fontSize: '0.7rem', fontWeight: 600, color: '#f97316', letterSpacing: 2, marginBottom: 4 }}>STEP {s.num}</div>
                <h3 style={{ fontFamily: 'inter Sans,sans-serif', fontSize: '1.05rem', fontWeight: 700, color: '#fff', marginBottom: 6 }}>{s.title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6, fontFamily: 'Inter,sans-serif' }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
