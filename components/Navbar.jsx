'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    ['Home', '/'],
    ['Apps', '#services'],
    ['Why ZoFlowX', '#why-hire'],
    ['Process', '#process'],
    ['Case Studies', '#case-studies'],
    ['Engage', '#pricing'],
    ['FAQ', '#faq'],
  ]

  return (
    <nav style={{
      background: scrolled ? 'rgba(255,255,255,0.92)' : '#fff',
      backdropFilter: scrolled ? 'saturate(180%) blur(14px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'saturate(180%) blur(14px)' : 'none',
      borderBottom: '1px solid #e8e3dd',
      padding: '0.6rem 0',
      position: 'sticky', top: 0, zIndex: 1000,
      boxShadow: scrolled ? '0 8px 30px rgba(15,23,42,0.06)' : 'none',
      transition: 'all 0.3s',
    }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>

          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', flexShrink: 0 }}>
            <span style={{ fontFamily: 'inter Sans,sans-serif', fontSize: '1.4rem', fontWeight: 600, color: '#0f172a', letterSpacing: '-0.5px' }}>ZoFlowX</span>
            <div style={{ width: 1, height: 28, background: '#e8e3dd' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#f5f0eb', border: '1px solid #e8e3dd', borderRadius: 8, padding: '4px 10px' }}>
              <span style={{ fontSize: '1rem' }}>⭐</span>
              <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#334155', fontFamily: 'Inter,sans-serif', whiteSpace: 'nowrap' }}>Zoho Authorized Partner</span>
            </div>
          </Link>

          {/* Nav links - desktop */}
          <div className="d-none d-lg-flex align-items-center" style={{ gap: 2 }}>
            {links.map(([label, href]) => (
              <a key={label} href={href} style={{ fontFamily: 'Inter,sans-serif', fontWeight: 500, fontSize: '0.9rem', color: '#334155', padding: '7px 14px', borderRadius: 8, textDecoration: 'none', transition: 'all 0.2s', whiteSpace: 'nowrap' }}
                onMouseEnter={e => { e.target.style.color = '#0f172a'; e.target.style.background = '#f5f0eb' }}
                onMouseLeave={e => { e.target.style.color = '#334155'; e.target.style.background = 'transparent' }}>
                {label}
              </a>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="d-none d-lg-flex align-items-center" style={{ gap: 10, flexShrink: 0 }}>
            <a href="https://arul-zoflowx.zohobookings.in/#/Zoho_Consultation" target="_blank" rel="noreferrer" className="btn-gradient" style={{ padding: '0.55rem 1.3rem', fontSize: '0.85rem' }}>
              Book a Call <i className="bi bi-arrow-right" />
            </a>
            <a href="https://wa.me/918190009222" target="_blank" rel="noreferrer" style={{ width: 42, height: 42, borderRadius: '50%', background: '#25d366', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', boxShadow: '0 4px 12px rgba(37,211,102,0.35)', transition: 'all 0.2s', flexShrink: 0 }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.08)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = '' }}
            >
              <i className="bi bi-whatsapp" style={{ color: '#fff', fontSize: '1.15rem' }} />
            </a>
          </div>

          {/* Mobile toggle */}
          <button className="d-lg-none" onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'none', border: '1px solid #e8e3dd', borderRadius: 8, padding: '6px 10px', cursor: 'pointer' }}>
            <i className={`bi bi-${menuOpen ? 'x-lg' : 'list'}`} style={{ fontSize: '1.2rem', color: '#0f172a' }} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{ padding: '16px 0 8px', borderTop: '1px solid #e8e3dd', marginTop: 12 }}>
            {links.map(([label, href]) => (
              <a key={label} href={href} onClick={() => setMenuOpen(false)} style={{ display: 'block', padding: '10px 4px', fontFamily: 'Inter,sans-serif', fontWeight: 500, color: '#334155', textDecoration: 'none', borderBottom: '1px solid #f0ece8' }}>{label}</a>
            ))}
            <div style={{ marginTop: 12, display: 'flex', gap: 10 }}>
              <a href="https://arul-zoflowx.zohobookings.in/#/Zoho_Consultation" target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)} className="btn-gradient" style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}>Book a Call</a>
              <a href="https://wa.me/918190009222" target="_blank" rel="noreferrer" style={{ width: 42, height: 42, borderRadius: '50%', background: '#25d366', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
                <i className="bi bi-whatsapp" style={{ color: '#fff', fontSize: '1.1rem' }} />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
