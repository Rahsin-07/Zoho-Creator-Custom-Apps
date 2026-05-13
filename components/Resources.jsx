'use client'
import { useEffect, useRef } from 'react'

const articles = [
  {
    tag: 'Guide',
    tagColor: '#1a56db',
    readTime: '6 min read',
    title: 'When to Use Zoho Creator vs Zoho CRM: A Practical Decision Tree',
    desc: 'CRM is for sales pipelines. Creator is for everything else your team touches. Here\'s the simple test we use with clients to pick the right tool — and avoid an expensive rewrite.',
  },
  {
    tag: 'Playbook',
    tagColor: '#8b5cf6',
    readTime: '8 min read',
    title: '5 Workflows Every Mid-Sized Business Should Move Off Spreadsheets',
    desc: 'Purchase approvals, leave management, vendor onboarding, asset tracking, and project sign-offs — the five workflows that quietly cost teams hours every week.',
  },
  {
    tag: 'Tutorial',
    tagColor: '#f97316',
    readTime: '10 min read',
    title: 'Deluge Patterns: Writing Maintainable Zoho Creator Code',
    desc: 'A walkthrough of the conventions we use across every ZoFlowX build — so the next developer (or future you) can read what was written six months ago.',
  },
]

export default function Resources() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target) } })
    }, { threshold: 0.1 })
    ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="resources" style={{ background: '#faf9f7' }} ref={ref}>
      <div className="container">
        <div className="row align-items-end mb-5 fade-up">
          <div className="col-lg-8">
            <div className="section-label">From Our Blog</div>
            <h2 className="section-title">Insights & <span className="grad-blue-purple">Articles</span></h2>
            <p className="section-sub">Practical insights on Zoho, automation, and business operations — focused on simplifying workflows, improving efficiency, and helping teams build better systems.</p>
          </div>
          <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
            <a href="#" className="btn-outline-custom ahover">Browse all articles <i className="bi bi-arrow-right" /></a>
          </div>
        </div>

        <div className="row g-4">
          {articles.map((a, i) => (
            <div className="col-md-6 col-lg-4 fade-up" key={a.title} style={{ transitionDelay: `${i * 0.08}s` }}>
              <a href="#" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                <div style={{
                  background: '#fff', border: '1px solid #e8e3dd', borderRadius: 18,
                  padding: 0, height: '100%', transition: 'all 0.35s cubic-bezier(.2,.7,.2,1)',
                  overflow: 'hidden', display: 'flex', flexDirection: 'column',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-6px)'
                    e.currentTarget.style.boxShadow = '0 24px 60px rgba(15,23,42,0.10)'
                    e.currentTarget.style.borderColor = a.tagColor
                    e.currentTarget.querySelector('.art-banner').style.opacity = '1'
                    e.currentTarget.querySelector('.art-arrow').style.transform = 'translateX(4px)'
                    e.currentTarget.querySelector('.art-arrow').style.color = a.tagColor
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = ''
                    e.currentTarget.style.boxShadow = ''
                    e.currentTarget.style.borderColor = '#e8e3dd'
                    e.currentTarget.querySelector('.art-banner').style.opacity = '0.5'
                    e.currentTarget.querySelector('.art-arrow').style.transform = ''
                    e.currentTarget.querySelector('.art-arrow').style.color = '#94a3b8'
                  }}
                >
                  {/* Decorative banner */}
                  <div className="art-banner" style={{ height: 110, background: `linear-gradient(135deg, ${a.tagColor}22, ${a.tagColor}08)`, position: 'relative', opacity: 0.5, transition: 'opacity 0.35s', overflow: 'hidden' }}>
                    <div aria-hidden style={{ position: 'absolute', inset: 0, opacity: 0.4 }} className="dot-grid" />
                    <div style={{ position: 'absolute', bottom: 14, left: 20, display: 'inline-flex', alignItems: 'center', gap: 8, background: a.tagColor, color: '#fff', fontSize: '0.7rem', fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', padding: '5px 12px', borderRadius: 50, fontFamily: 'Inter,sans-serif' }}>
                      {a.tag}
                    </div>
                    <div style={{ position: 'absolute', top: 14, right: 20, fontSize: '0.75rem', color: '#64748b', fontFamily: 'Inter,sans-serif', display: 'inline-flex', alignItems: 'center', gap: 5 }}>
                      <i className="bi bi-clock" /> {a.readTime}
                    </div>
                  </div>
                  <div style={{ padding: 26, flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', marginBottom: 12, lineHeight: 1.4, fontFamily: 'Plus Jakarta Sans,sans-serif' }}>{a.title}</h3>
                    <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.65, marginBottom: 18, fontFamily: 'Inter,sans-serif', flex: 1 }}>{a.desc}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.85rem', fontWeight: 700, color: '#0f172a', fontFamily: 'Plus Jakarta Sans,sans-serif', marginTop: 'auto' }}>
                      Read article <i className="bi bi-arrow-right art-arrow" style={{ color: '#94a3b8', transition: 'all 0.25s' }} />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
