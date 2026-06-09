# ZoFlowX — Zoho Creator Custom Apps Page (v3)

A modern, premium iteration of the original ZoFlowX site, preserving the same brand identity and color system while delivering the new `/zoho-creator-custom-apps` page.

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000` — the root redirects to `/zoho-creator-custom-apps`.

## 📁 Project Structure

```
zoflowx/
├── app/
│   ├── layout.js                      ← Root layout (Bootstrap, fonts, metadata)
│   ├── page.js                        ← Redirects to /zoho-creator-custom-apps
│   └── zoho-creator-custom-apps/
│       └── page.js                    ← New page (assembles all sections)
├── components/
│   ├── Navbar.jsx                     ← Sticky nav w/ blur on scroll + Partner badge
│   ├── Hero.jsx                       ← Hero — workflow chip cloud + animated stats
│   ├── WhatWeDo.jsx                   ← NEW · "Sketch → App" split layout
│   ├── Services.jsx                   ← 6 custom app types (Approval/Inventory/HR/Field/CRM/Portals)
│   ├── WhyHire.jsx                    ← 8-reason gradient-icon grid
│   ├── Process.jsx                    ← 5-step horizontal timeline (dark)
│   ├── Industries.jsx                 ← 8 industries — icon cards w/ rotate hover
│   ├── CaseStudies.jsx                ← 3 case study cards w/ gradient headers
│   ├── Testimonials.jsx               ← 3 client voices w/ sweep-in top bar
│   ├── Pricing.jsx                    ← 3 engagement models (Single / Rollout / Partner)
│   ├── Resources.jsx                  ← 3 blog cards w/ dotted banner
│   ├── Consultation.jsx               ← Dark CTA w/ founder card + 3 contact options
│   ├── FAQ.jsx                        ← 10-Q accordion w/ rotating plus icon
│   ├── Footer.jsx                     ← Dark footer w/ social, links, contact
│   └── ScrollTop.jsx                  ← Back-to-top floating button
├── styles/
│   └── globals.css                    ← CSS variables, gradients, animations
└── next.config.js
```

## 🎨 Design System (preserved from v2)

| Token         | Value      | Use                           |
|---------------|------------|-------------------------------|
| `--primary`   | `#1a56db`  | Brand blue                    |
| `--accent`    | `#f97316`  | Orange accent                 |
| `--dark`      | `#0f172a`  | Dark sections / headings      |
| `--cream`     | `#f5f0eb`  | Warm card backgrounds         |
| `--light`     | `#faf9f7`  | Page background               |
| `--violet`    | `#8b5cf6`  | Mid-gradient stop             |

- **Heading font:** inter Sans 800
- **Body font:** Inter 400/500/600
- **Gradient signature:** `linear-gradient(90deg, #3b82f6, #8b5cf6, #f97316)`

## ✨ What's new vs v2

| Area              | Change                                                                 |
|-------------------|------------------------------------------------------------------------|
| Route             | `/hire-zoho-developer` → `/zoho-creator-custom-apps`                   |
| Content           | All sections reworked for Zoho Creator app development positioning     |
| New section       | `WhatWeDo` — "Sketch → App" visual                                     |
| Replaced section  | Pricing now shows **engagement models** (Single app / Rollout / Partner) |
| Hero              | Floating workflow chips + blob gradient + animated stat counter        |
| Process           | Horizontal 5-node timeline (was vertical) on desktop                   |
| FAQ               | Cleaner accordion with numbered prefix + rotating `+` toggle           |
| Navbar            | Adds backdrop blur on scroll                                           |
| Animations        | Added `blob-drift`, `float-y`, `pulse-ring`, `sweep-x` keyframes       |
| Backgrounds       | New `.dot-grid` and `.noise-overlay` utility classes                   |
| Buttons           | `.btn-gradient` now has a shimmer sweep on hover                       |

## 🛠️ Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **Bootstrap 5** (grid only)
- **Bootstrap Icons**
- **inter Sans + Inter** (Google Fonts)
- No additional dependencies — pure React hooks
