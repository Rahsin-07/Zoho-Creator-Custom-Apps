'use client'
import { useEffect, useRef } from 'react'

export default function WhatWeDo() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target) } })
    }, { threshold: 0.15 })
    ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="what-we-do" style={{ background: '#fff', position: 'relative' }} ref={ref}>
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 fade-up">
            <div className="section-label">What We Do</div>
            <h2 className="section-title">If you can sketch your workflow, <span className="grad-blue-purple">we can build the app</span></h2>
            <p style={{ fontSize: '1.02rem', color: '#475569', lineHeight: 1.8, marginBottom: 20, fontFamily: 'Inter,sans-serif' }}>
              Zoho Creator is one of the most flexible low-code platforms in the world — but only when it's set up right. Most teams hit a wall the moment they need real automation, complex permissions, or systems that talk to each other.
            </p>
            <p style={{ fontSize: '1.02rem', color: '#475569', lineHeight: 1.8, marginBottom: 28, fontFamily: 'Inter,sans-serif' }}>
              That's where working with the right team matters. When you're looking to hire a Zoho Creator developer, we transform your messy processes into clean, easy-to-use apps that your team will use every day.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 28 }}>
              {['Low-code build', 'Deluge scripting', 'Native integrations', 'Mobile-ready', 'Role-based access'].map(t => (
                <span key={t} style={{ background: '#f5f0eb', border: '1px solid #e8e3dd', borderRadius: 50, padding: '6px 14px', fontSize: '0.82rem', fontWeight: 600, color: '#334155', fontFamily: 'Inter,sans-serif' }}>{t}</span>
              ))}
            </div>

            <a href="#consultation" className="btn-primary-custom ahover">
              Book a free 30-min discovery call <i className="bi bi-arrow-right" />
            </a>
          </div>

          <div className="col-lg-6 fade-up" style={{ transitionDelay: '0.15s' }}>
            {/* Workflow → App visual */}
            <div style={{ position: 'relative', padding: 28 }}>
              <div aria-hidden style={{ position: 'absolute', inset: 0, opacity: 0.5, borderRadius: 24, background: 'linear-gradient(135deg,#eff6ff 0%,#f5f0eb 100%)' }} />
              <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: 16, alignItems: 'center' }}>
                {/* sketch card */}
                <div style={{ background: '#fff', border: '1px dashed #94a3b8', borderRadius: 14, padding: 20, transform: 'rotate(-2deg)', boxShadow: '0 8px 24px rgba(15,23,42,0.06)' }}>
                  <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: 1.5, color: '#94a3b8', fontWeight: 700, marginBottom: 10, fontFamily: 'Inter,sans-serif' }}>Your sketch</div>
                  <div style={{ height: 8, background: '#e2e8f0', borderRadius: 4, marginBottom: 8 }} />
                  <div style={{ height: 8, width: '75%', background: '#e2e8f0', borderRadius: 4, marginBottom: 8 }} />
                  <div style={{ height: 8, width: '60%', background: '#e2e8f0', borderRadius: 4, marginBottom: 16 }} />
                  <div style={{ display: 'flex', gap: 6 }}>
                    <div style={{ width: 26, height: 26, background: '#fde68a', borderRadius: 6 }} />
                    <div style={{ width: 26, height: 26, background: '#bfdbfe', borderRadius: 6 }} />
                    <div style={{ width: 26, height: 26, background: '#fecaca', borderRadius: 6 }} />
                  </div>
                  <div style={{ marginTop: 14, fontSize: '0.7rem', color: '#64748b', fontStyle: 'italic', fontFamily: 'Inter,sans-serif' }}>"Approval flow for purchase orders"</div>
                </div>

                {/* arrow */}
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--grad-tri)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '1.2rem', boxShadow: '0 8px 24px rgba(139,92,246,0.35)' }}>
                  <i className="bi bi-arrow-right" />
                </div>

                {/* app preview */}
                <div style={{ background: '#0f172a', borderRadius: 14, padding: 18, boxShadow: '0 16px 40px rgba(15,23,42,0.25)', transform: 'rotate(2deg)' }}>
                  <div style={{ display: 'flex', gap: 5, marginBottom: 12 }}>
                    <div style={{ width: 8, height: 8, background: '#ef4444', borderRadius: '50%' }} />
                    <div style={{ width: 8, height: 8, background: '#f59e0b', borderRadius: '50%' }} />
                    <div style={{ width: 8, height: 8, background: '#10b981', borderRadius: '50%' }} />
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 8, padding: 10, marginBottom: 8 }}>
                    <div style={{ fontSize: '0.65rem', color: '#93c5fd', fontWeight: 700, marginBottom: 4, fontFamily: 'Inter,sans-serif', letterSpacing: 1 }}>APPROVAL #4821</div>
                    <div style={{ fontSize: '0.78rem', color: '#fff', fontFamily: 'Inter,sans-serif', fontWeight: 600 }}>PO-2026-091 · $4,200</div>
                  </div>
                  <div style={{ display: 'flex', gap: 6 }}>
                    <div style={{ flex: 1, background: '#10b981', borderRadius: 6, padding: '6px 8px', fontSize: '0.7rem', color: '#fff', fontWeight: 700, textAlign: 'center', fontFamily: 'Inter,sans-serif' }}>Approve</div>
                    <div style={{ flex: 1, background: 'rgba(239,68,68,0.2)', border: '1px solid rgba(239,68,68,0.4)', borderRadius: 6, padding: '5px 8px', fontSize: '0.7rem', color: '#fca5a5', fontWeight: 700, textAlign: 'center', fontFamily: 'Inter,sans-serif' }}>Reject</div>
                  </div>
                  <div style={{ marginTop: 10, fontSize: '0.65rem', color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter,sans-serif' }}>Auto-routed · CFO · 2 of 3</div>
                </div>
              </div>

              {/* annotation */}
              <div style={{ position: 'relative', textAlign: 'center', marginTop: 24, fontSize: '0.82rem', color: '#64748b', fontFamily: 'Inter,sans-serif', fontStyle: 'italic' }}>
                <i className="bi bi-stopwatch" style={{ color: '#1a56db', marginRight: 6 }} />
                14 days from blueprint to working demo
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
