import { useEffect, useState } from 'react'
import './App.css'

const services = [
  { id: 'engineering', number: '01', title: 'Engineering design', text: 'From thermal modeling to controls, we design systems around the mission, not a catalog.' },
  { id: 'manufacturing', number: '02', title: 'HVAC manufacturing', text: 'Rugged, efficient equipment built in-house for the environments where failure is not an option.' },
  { id: 'commissioning', number: '03', title: 'Commissioning & startup', text: 'Field-proven installation and startup that gets every system performing to its specification.' },
]

const navGroups = [
  { label: 'Services', items: ['HVAC SEO', 'Local SEO', 'Technical SEO', 'Content Marketing', 'Link Building', 'Google Business Profile', 'Reputation Management', 'CRO'] },
  { label: 'Industries', items: ['Residential HVAC', 'Commercial HVAC', 'HVAC Contractors', 'Heating & AC Companies', 'Emergency HVAC'] },
  { label: 'Locations', items: ['Texas', 'California', 'Florida', 'Arizona', 'Colorado', 'Georgia', 'North Carolina', 'Tennessee', 'View all states'] },
]

const footerColumns = [
  { title: 'Services', items: ['HVAC SEO', 'Local SEO', 'Technical SEO', 'Content Marketing', 'Link Building', 'Google Business Profile', 'Reputation Management', 'Conversion Rate Optimization'] },
  { title: 'Industries', items: ['Residential HVAC', 'Commercial HVAC', 'HVAC Contractors', 'Heating & AC Companies', 'Emergency HVAC'] },
  { title: 'Locations', items: ['Alabama', 'Arizona', 'California', 'Colorado', 'Florida', 'Georgia', 'North Carolina', 'Texas', 'View all states'] },
  { title: 'Company', items: ['About', 'Case Studies', 'Testimonials', 'Careers', 'Contact'] },
  { title: 'Resources', items: ['Blog', 'HVAC SEO Checklist', 'FAQ', 'Free Audit'] },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [activeService, setActiveService] = useState('engineering')
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    const revealItems = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')), { threshold: 0.12 })
    revealItems.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
    setOpenDropdown(null)
  }

  const openAudit = () => {
    setModalOpen(true)
    setMenuOpen(false)
    setOpenDropdown(null)
  }

  const selectedService = services.find((service) => service.id === activeService) ?? services[0]

  return (
    <main className="min-h-screen antialiased">
      <header className="site-header">
        <button className="brand" onClick={() => scrollTo('top')} aria-label="McIntyre Industries home"><span className="brand-mark">M</span><span>MCINTYRE <b>INDUSTRIES</b></span></button>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation"><span /> <span /></button>
        <nav className={`main-nav ${menuOpen ? 'nav-open' : ''}`}>
          {navGroups.map((group) => <div className="nav-group" key={group.label}><button className="nav-trigger" aria-expanded={openDropdown === group.label} onClick={() => setOpenDropdown(openDropdown === group.label ? null : group.label)}>{group.label}<span className="chevron">⌄</span></button><div className={`dropdown ${openDropdown === group.label ? 'dropdown-open' : ''}`}>{group.items.map((item) => <button key={item} onClick={() => item === 'View all states' ? scrollTo('industries') : setOpenDropdown(null)}>{item}{item === 'View all states' && <span>↗</span>}</button>)}</div></div>)}
          <button onClick={() => scrollTo('insights')}>Case Studies</button><button onClick={() => scrollTo('expertise')}>Pricing</button><button onClick={() => scrollTo('insights')}>Blog / Resources</button><button onClick={() => scrollTo('about')}>About</button><button className="nav-cta" onClick={openAudit}>Get a Free SEO Audit <span>↗</span></button>
        </nav>
      </header>

      <section className="hero" id="top"><div className="hero-image" /><div className="hero-overlay" /><div className="hero-content"><p className="eyebrow"><span /> Custom HVAC systems / Est. 1985</p><h1>Precision cooling<br /><em>for critical</em> environments.</h1><p className="hero-copy">We engineer, manufacture, and commission climate systems that keep the world's most demanding spaces operating.</p><div className="hero-actions"><button className="button button-light" onClick={() => scrollTo('expertise')}>Explore our expertise <span>↓</span></button><button className="text-link" onClick={() => setModalOpen(true)}>Talk to an engineer <span>↗</span></button></div></div><div className="hero-stamp"><span>01</span><span>Built for<br />what's next</span></div><div className="scroll-note">Scroll to explore <span>↓</span></div></section>

      <section className="intro reveal" id="about"><p className="section-label">01 / The McIntyre standard</p><div><h2>Not just climate control.<br /><span>Mission control.</span></h2><p className="intro-copy">For four decades, McIntyre has solved the problems that standard equipment cannot. Our team brings deep engineering rigor to every detail, delivering custom environmental systems for defense, aerospace, pharmaceutical, and advanced commercial facilities.</p><button className="arrow-link" onClick={() => setModalOpen(true)}>Meet the team <span>↗</span></button></div></section>

      <section className="expertise reveal" id="expertise"><div className="section-top"><div><p className="section-label">02 / What we do</p><h2>One partner.<br /><span>Every phase.</span></h2></div><p className="section-aside">From the first load calculation to the final commissioning report, our specialists stay close to the work.</p></div><div className="service-layout"><div className="service-list">{services.map((service) => <button key={service.id} className={activeService === service.id ? 'service active' : 'service'} onClick={() => setActiveService(service.id)}><span>{service.number}</span><strong>{service.title}</strong><i>↗</i></button>)}</div><div className="service-detail"><span className="detail-number">{selectedService.number}</span><h3>{selectedService.title}</h3><p>{selectedService.text}</p><button className="arrow-link" onClick={() => setModalOpen(true)}>View capability <span>↗</span></button></div></div></section>

      <section className="industries reveal" id="industries"><div className="industry-copy"><p className="section-label">03 / Where we work</p><h2>Built for<br /><span>high stakes.</span></h2><p>When the environment is mission-critical, performance is the only metric that matters.</p><button className="button button-copper" onClick={() => setModalOpen(true)}>See our industries <span>↗</span></button></div><div className="industry-image"><div className="image-caption">Defense & aerospace <span>04° 42' 55&quot; N</span></div></div></section>

      <section className="closing reveal" id="insights"><p className="section-label">04 / Let's talk</p><h2>Have a complex<br /><em>environment?</em></h2><button className="button button-copper" onClick={() => setModalOpen(true)}>Start a conversation <span>↗</span></button></section>
      <footer className="site-footer"><div className="footer-top"><div className="footer-brand"><button className="brand" onClick={() => scrollTo('top')}><span className="brand-mark">M</span><span>MCINTYRE <b>INDUSTRIES</b></span></button><p>Search visibility engineered<br />for the HVAC industry.</p></div><div className="footer-columns">{footerColumns.map((column) => <div className="footer-column" key={column.title}><h3>{column.title}</h3>{column.items.map((item) => <button key={item} onClick={() => item === 'Free Audit' || item === 'View all states' ? openAudit() : undefined}>{item}</button>)}</div>)}</div></div><div className="footer-bottom"><span>© 2025 McIntyre Industries</span><span>Rancho Cordova, CA</span><a href="tel:+14153142108">(415) 314-2108</a><span><a href="#top">Privacy Policy</a> <a href="#top">Terms of Service</a></span></div></footer>
      {modalOpen && <div className="modal-backdrop" onClick={() => setModalOpen(false)}><div className="modal" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setModalOpen(false)} aria-label="Close">×</button><p className="section-label">Project inquiry</p><h2>Let's make the<br /><em>impossible stable.</em></h2><p>Tell us a little about your environment and an engineer will be in touch.</p><form onSubmit={(event) => { event.preventDefault(); setModalOpen(false) }}><input required placeholder="Your name" /><input required type="email" placeholder="Work email" /><textarea required placeholder="What are you solving?" rows={3} /><button className="button button-copper" type="submit">Send inquiry <span>↗</span></button></form></div></div>}
    </main>
  )
}

export default App
