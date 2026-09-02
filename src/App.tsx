import { useState } from "react";
import {
  AuditModal,
  Closing,
  Expertise,
  Hero,
  Industries,
  Intro,
} from "./components";
import { SiteFooter } from "./Footer";
import { SiteHeader } from "./Header";
import {
  Contact,
  FAQ,
  Pricing,
  Proof,
  Resources,
  Testimonials,
} from "./HomepageSections";

const services = [
  {
    id: "search",
    number: "01",
    title: "HVAC SEO strategy",
    text: "A search strategy built around the services, markets, and high-intent calls that grow your business.",
    image:
      "https://images.unsplash.com/photo-1631545806609-4b7b2efc2f29?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "local",
    number: "02",
    title: "Local SEO & Maps",
    text: "Own the map pack in every service area with optimized locations, profiles, and local authority.",
    image:
      "https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "content",
    number: "03",
    title: "Content that converts",
    text: "Clear, useful pages that answer real homeowner questions and turn more qualified visits into calls.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=85",
  },
];

const navGroups = [
  {
    label: "Services",
    items: [
      "HVAC SEO",
      "Local SEO",
      "Technical SEO",
      "Content Marketing",
      "Link Building",
      "Google Business Profile",
      "Reputation Management",
      "CRO",
    ],
  },
  {
    label: "Industries",
    items: [
      "Residential HVAC",
      "Commercial HVAC",
      "HVAC Contractors",
      "Heating & AC Companies",
      "Emergency HVAC",
    ],
  },
  {
    label: "Locations",
    items: [
      "Texas",
      "California",
      "Florida",
      "Arizona",
      "Colorado",
      "Georgia",
      "North Carolina",
      "Tennessee",
      "View all states",
    ],
  },
];

const footerColumns = [
  {
    title: "Services",
    items: [
      "HVAC SEO",
      "Local SEO",
      "Technical SEO",
      "Content Marketing",
      "Link Building",
      "Google Business Profile",
      "Reputation Management",
      "Conversion Rate Optimization",
    ],
  },
  {
    title: "Industries",
    items: [
      "Residential HVAC",
      "Commercial HVAC",
      "HVAC Contractors",
      "Heating & AC Companies",
      "Emergency HVAC",
    ],
  },
  {
    title: "Locations",
    items: [
      "Alabama",
      "Arizona",
      "California",
      "Colorado",
      "Florida",
      "Georgia",
      "North Carolina",
      "Texas",
      "View all states",
    ],
  },
  {
    title: "Company",
    items: ["About", "Case Studies", "Testimonials", "Careers", "Contact"],
  },
  {
    title: "Resources",
    items: ["Blog", "HVAC SEO Checklist", "FAQ", "Free Audit"],
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState("search");
  const [modalOpen, setModalOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const openAudit = () => {
    setModalOpen(true);
    setMenuOpen(false);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#101817] antialiased">
      <SiteHeader
        navGroups={navGroups}
        menuOpen={menuOpen}
        onMenuToggle={() => setMenuOpen(!menuOpen)}
        onScrollTo={scrollTo}
        onOpenAudit={openAudit}
      />
      <Hero onScrollTo={scrollTo} onOpenAudit={openAudit} />
      <Intro onOpenAudit={openAudit} />
      <Expertise
        services={services}
        activeService={activeService}
        onSelectService={setActiveService}
        onOpenAudit={openAudit}
      />
      <Industries onOpenAudit={openAudit} />
      <Proof />
      <Pricing onOpenAudit={openAudit} />
      <Testimonials />
      <Resources />
      <FAQ />
      <Contact onOpenAudit={openAudit} />
      <Closing onOpenAudit={openAudit} />
      <SiteFooter
        footerColumns={footerColumns}
        onScrollTo={scrollTo}
        onOpenAudit={openAudit}
      />
      {modalOpen && <AuditModal onClose={() => setModalOpen(false)} />}
    </main>
  );
}

export default App;
