'use client'

export default function Footer() {
  return (
    <footer style={{ background: '#0a0f1d', color: 'rgba(255,255,255,0.65)', padding: '72px 0 32px', position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden style={{ position: 'absolute', top: -100, left: '50%', transform: 'translateX(-50%)', width: 600, height: 200, background: 'radial-gradient(ellipse, rgba(26,86,219,0.18), transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />
      <div className="container position-relative">
        <div className="row g-5">
          <div className="col-lg-4">
            <div style={{ fontFamily: 'Plus Jakarta Sans,sans-serif', fontSize: '1.6rem', fontWeight: 800, color: '#fff', marginBottom: 12, letterSpacing: '-0.5px' }}>ZoFlowX</div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, padding: '5px 12px', marginBottom: 18 }}>
              <span>⭐</span><span style={{ fontSize: '0.72rem', fontWeight: 600, color: 'rgba(255,255,255,0.75)', fontFamily: 'Inter,sans-serif' }}>Zoho Authorized Partner</span>
            </div>
            <p style={{ fontSize: '0.88rem', maxWidth: 320, lineHeight: 1.7, color: 'rgba(255,255,255,0.55)', fontFamily: 'Inter,sans-serif' }}>
              India's leading Zoho partner. We design and build custom Zoho Creator apps that fit your workflow — for clients across India, USA, UK, UAE, Singapore and Australia.
            </p>
            <div style={{ marginTop: 22, display: 'flex', gap: 10 }}>
              {[
                { icon: 'linkedin', color: '#0a66c2' },
                { icon: 'twitter-x', color: '#ffffff' },
                { icon: 'instagram', color: '#e4405f' },
                { icon: 'youtube', color: '#ff0000' },
              ].map(s => (
                <a key={s.icon} href="#" style={{ width: 38, height: 38, borderRadius: 10, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.6)', fontSize: '1rem', textDecoration: 'none', transition: 'all 0.25s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = s.color; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = s.color; e.currentTarget.style.transform = 'translateY(-2px)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = '' }}
                ><i className={`bi bi-${s.icon}`} /></a>
              ))}
            </div>
          </div>

          <div className="col-6 col-lg-2">
            <div style={{ fontFamily: 'Plus Jakarta Sans,sans-serif', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '1.8px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: 18 }}>Company</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {['About Us','Case Studies','Blog','Contact Us','Privacy Policy'].map(l => (
                <li key={l} style={{ marginBottom: 11 }}>
                  <a href="#" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontSize: '0.88rem', fontFamily: 'Inter,sans-serif', transition: 'all 0.2s', display: 'inline-block' }}
                    onMouseEnter={e => { e.target.style.color = '#fff'; e.target.style.transform = 'translateX(3px)' }}
                    onMouseLeave={e => { e.target.style.color = 'rgba(255,255,255,0.55)'; e.target.style.transform = '' }}
                  >{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-6 col-lg-3">
            <div style={{ fontFamily: 'Plus Jakarta Sans,sans-serif', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '1.8px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: 18 }}>Services</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {['Zoho Creator Custom Apps','Hire Zoho Creator Developer','Zoho Customization','Zoho Integration','Zoho One Setup'].map(l => (
                <li key={l} style={{ marginBottom: 11 }}>
                  <a href="#" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontSize: '0.88rem', fontFamily: 'Inter,sans-serif', transition: 'all 0.2s', display: 'inline-block' }}
                    onMouseEnter={e => { e.target.style.color = '#fff'; e.target.style.transform = 'translateX(3px)' }}
                    onMouseLeave={e => { e.target.style.color = 'rgba(255,255,255,0.55)'; e.target.style.transform = '' }}
                  >{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-3">
            <div style={{ fontFamily: 'Plus Jakarta Sans,sans-serif', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '1.8px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: 18 }}>Contact</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: 11 }}>
                <a href="mailto:info@zoflowx.com" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontSize: '0.88rem', fontFamily: 'Inter,sans-serif', display: 'inline-flex', alignItems: 'center', gap: 8, transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
                ><i className="bi bi-envelope" />info@zoflowx.com</a>
              </li>
              <li style={{ marginBottom: 11 }}>
                <a href="tel:+918190009222" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontSize: '0.88rem', fontFamily: 'Inter,sans-serif', display: 'inline-flex', alignItems: 'center', gap: 8, transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
                ><i className="bi bi-telephone" />+91 8190009222</a>
              </li>
              <li style={{ marginBottom: 11 }}>
                <a href="https://wa.me/918190009222" target="_blank" rel="noreferrer" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontSize: '0.88rem', fontFamily: 'Inter,sans-serif', display: 'inline-flex', alignItems: 'center', gap: 8, transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#25d366'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
                ><i className="bi bi-whatsapp" />WhatsApp us</a>
              </li>
              <li style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', lineHeight: 1.65, fontFamily: 'Inter,sans-serif', display: 'flex', gap: 8, marginTop: 6 }}>
                <i className="bi bi-geo-alt" style={{ marginTop: 3 }} />
                <span>No.99, Greeta Tech Park, Perungudi, Chennai, Tamil Nadu 600096</span>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', marginTop: 52, paddingTop: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12, fontSize: '0.8rem', fontFamily: 'Inter,sans-serif' }}>
          <div style={{ color: 'rgba(255,255,255,0.45)' }}>© {new Date().getFullYear()} ZoFlowX · An Inboxist company. All rights reserved.</div>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Terms & Conditions','Privacy Policy'].map(l => (
              <a key={l} href="#" style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none', fontSize: '0.8rem', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.45)'}
              >{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
