'use client'
import { useState, useEffect, useRef } from 'react'

const faqs = [
  { q: 'What exactly does ZoFlowX do with Zoho Creator?', a: 'ZoFlowX designs and builds custom apps on the Zoho Creator platform. Anything from a simple internal tool to a full multi-department system — we plan it, build it, train your team, and support it long-term.' },
  { q: 'Why should I pick ZoFlowX over a freelance Zoho developer?', a: 'Freelancers can be great for small fixes. For anything mission-critical, ZoFlowX provides you with a full team — a project manager, designer, Deluge developer, and a tester — for a similar price. You also receive partner-level Zoho support and clean documentation that a freelancer seldom gives.' },
  { q: 'How long does a typical ZoFlowX project take?', a: 'The majority of ZoFlowX Zoho Creator apps go live in 3–6 weeks. Multiple integrations in larger systems can take 8–10 weeks. We always set a clear time frame before you sign anything.' },
  { q: 'How much does a custom Zoho Creator app from ZoFlowX cost?', a: 'Pricing depends on scope. Smaller ZoFlowX projects start at around ₹75,000, while larger end-to-end Zoho rollouts run higher. After a 30-minute call, we send you a fixed-price proposal with no hidden charges.' },
  { q: 'I already have Zoho. Can ZoFlowX still help?', a: "Absolutely. One of the major components of ZoFlowX's work is to fix or extend current Zoho configurations. We'll audit what you have, point out what's working, fix what isn't, and add the custom apps you actually need." },
  { q: 'Do I need to know coding to work with ZoFlowX?', a: 'Not at all. Most ZoFlowX clients are business owners and operations leads — not developers. You bring the business knowledge; we bring every line of Deluge, every form, every workflow.' },
  { q: 'Is ZoFlowX an authorized Zoho partner?', a: "Yes. ZoFlowX is a recognized Zoho partner, which means you also get partner pricing on Zoho licenses and direct escalation paths if anything ever goes wrong on Zoho's side." },
  { q: 'What happens after my app goes live with ZoFlowX?', a: 'All ZoFlowX projects come with 1 month of free post-launch support. From there, you can either own it or continue with us on a monthly support plan — which includes updates, bug fixes, and minor improvements.' },
  { q: 'Will ZoFlowX integrate Zoho Creator with my other tools?', a: 'Yes. ZoFlowX regularly integrates Zoho Creator with Zoho CRM, Books, Desk, Analytics, Tally, payment gateways, WhatsApp, Razorpay, Shopify, Stripe and more — through native APIs and custom Deluge code.' },
  { q: 'Do I have to be in India to work with ZoFlowX?', a: "Not at all. We are India's top Zoho partner and serve clients in the US, UK, UAE, Singapore and Australia. Communication is async-friendly and demos are held weekly, making remote work easy." },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target) } })
    }, { threshold: 0.1 })
    ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="faq" style={{ background: '#fff' }} ref={ref}>
      <div className="container">
        <div className="text-center mb-5 fade-up" style={{ maxWidth: 720, margin: '0 auto 56px' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <span className="section-label">FAQ</span>
          </div>
          <h2 className="section-title">Common questions about <span className="grad-blue-purple">ZoFlowX</span></h2>
          <p className="section-sub mx-auto">Quick answers to what most people ask before working with ZoFlowX. Don't see your question? Just reach out — a real human will reply within one business day.</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="fade-up">
              {faqs.map((faq, i) => {
                const isOpen = open === i
                return (
                  <div key={i} style={{
                    border: `1px solid ${isOpen ? '#1a56db' : '#e8e3dd'}`,
                    borderRadius: 14, marginBottom: 12, overflow: 'hidden',
                    background: isOpen ? '#fff' : '#fff',
                    boxShadow: isOpen ? '0 12px 32px rgba(26,86,219,0.10)' : 'none',
                    transition: 'all 0.3s',
                  }}>
                    <button onClick={() => setOpen(isOpen ? -1 : i)} style={{
                      width: '100%', textAlign: 'left', background: 'transparent',
                      border: 'none', padding: '22px 26px',
                      fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 600,
                      fontSize: '0.97rem', color: isOpen ? '#1a56db' : '#0f172a',
                      cursor: 'pointer', display: 'flex', justifyContent: 'space-between',
                      alignItems: 'center', gap: 16, transition: 'color 0.2s',
                    }}
                      onMouseEnter={e => { if (!isOpen) e.currentTarget.style.color = '#1a56db' }}
                      onMouseLeave={e => { if (!isOpen) e.currentTarget.style.color = '#0f172a' }}
                    >
                      <span style={{ display: 'flex', alignItems: 'center', gap: 14, flex: 1 }}>
                        <span style={{ fontFamily: 'Plus Jakarta Sans,sans-serif', fontSize: '0.78rem', fontWeight: 800, color: isOpen ? '#1a56db' : '#94a3b8', letterSpacing: 1, minWidth: 22 }}>
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        {faq.q}
                      </span>
                      <div style={{
                        width: 32, height: 32, borderRadius: '50%',
                        background: isOpen ? '#1a56db' : '#f5f0eb',
                        color: isOpen ? '#fff' : '#334155',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '0.85rem', flexShrink: 0, transition: 'all 0.3s',
                        transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
                      }}>
                        <i className="bi bi-plus-lg" />
                      </div>
                    </button>
                    <div style={{
                      maxHeight: isOpen ? 400 : 0,
                      overflow: 'hidden',
                      transition: 'max-height 0.4s ease',
                    }}>
                      <div style={{ padding: '0 26px 24px 62px', fontSize: '0.92rem', color: '#475569', lineHeight: 1.75, fontFamily: 'Inter,sans-serif' }}>{faq.a}</div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="fade-up text-center" style={{ marginTop: 32, padding: '24px', background: '#f5f0eb', borderRadius: 14 }}>
              <div style={{ fontSize: '0.92rem', color: '#475569', marginBottom: 14, fontFamily: 'Inter,sans-serif' }}>Still have questions?</div>
              <a href="#consultation" className="btn-gradient ahover">Ask ZoFlowX a Question <i className="bi bi-arrow-right" /></a>
            </div>

            {/* Related pages */}
            <div className="fade-up" style={{ marginTop: 40 }}>
              <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#64748b', marginBottom: 16, fontFamily: 'Inter,sans-serif', letterSpacing: 1.5, textTransform: 'uppercase' }}>Related Pages</h4>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                {['Hire Zoho Creator Developer', 'Zoho Customization Services', 'Zoho Integration Services'].map(page => (
                  <a key={page} href="#" style={{ background: '#eff6ff', color: '#1a56db', padding: '10px 20px', borderRadius: 50, fontSize: '0.86rem', fontWeight: 600, textDecoration: 'none', transition: 'all 0.25s', fontFamily: 'Inter,sans-serif', display: 'inline-flex', alignItems: 'center', gap: 6 }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#1a56db'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                    onMouseLeave={e => { e.currentTarget.style.background = '#eff6ff'; e.currentTarget.style.color = '#1a56db'; e.currentTarget.style.transform = '' }}
                  >{page} <i className="bi bi-arrow-up-right" style={{ fontSize: '0.75rem' }} /></a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
