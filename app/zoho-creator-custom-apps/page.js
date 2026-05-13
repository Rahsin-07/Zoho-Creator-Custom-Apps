import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import WhatWeDo from '../../components/WhatWeDo'
import Services from '../../components/Services'
import WhyHire from '../../components/WhyHire'
import Process from '../../components/Process'
import Industries from '../../components/Industries'
import CaseStudies from '../../components/CaseStudies'
import Testimonials from '../../components/Testimonials'
import Pricing from '../../components/Pricing'
import Resources from '../../components/Resources'
import Consultation from '../../components/Consultation'
import FAQ from '../../components/FAQ'
import Footer from '../../components/Footer'
import ScrollTop from '../../components/ScrollTop'

export const metadata = {
  title: 'Zoho Creator Custom Apps | ZoFlowX – India\'s Zoho Partner',
  description: 'Looking for custom Zoho Creator apps? ZoFlowX, the best Zoho partner in India, builds workflow, HR, CRM & field apps that fit your team. Book a call.',
}

export default function ZohoCreatorCustomApps() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatWeDo />
        <Services />
        <WhyHire />
        <Process />
        <Industries />
        <CaseStudies />
        <Testimonials />
        <Pricing />
        <Resources />
        <Consultation />
        <FAQ />
      </main>
      <Footer />
      <ScrollTop />
    </>
  )
}
