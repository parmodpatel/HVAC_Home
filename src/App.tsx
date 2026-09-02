import { useState } from "react";
import { AuditModal, Expertise, Hero, Industries, Intro } from "./components";
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
      "/assets/Bq6i_uHI_Pa-6VmZm2EeQC-jYkXGBxPffKrjGA7rEILVDxYh7crMIhO5Iqn-4Q-S7FBWumeFQGmz0cPCtNA3OtPtt2yMmKjSZiC5t_6eqf7cpgKesGm5Rd8OawRbskRJcVgXGvoclAJFDb3SrS4VdF_UKbGi9UmR6ahrqocUF8A.jpeg",
  },
  {
    id: "local",
    number: "02",
    title: "Local SEO & Maps",
    text: "Own the map pack in every service area with optimized locations, profiles, and local authority.",
    image:
      "/assets/RgULuwNx4I2-yrVlF8qZxdOymsiyYMwmdIi1GluhLCZUFo3afGyFev8EOY4M_FyffRuKT0ul6stF0IaD_f6lV_dGTAaCfZfIZOqwwZLdKS9W_m0Qh9C46DJ5qGBzsT2cip84JS_Ey-p1jUtqY6X-h1Wz4Y8RtkPgyvDebh0xoD_TIMOtW5ffRMKEpVT05zyA.jpeg",
  },
  {
    id: "content",
    number: "03",
    title: "Content that converts",
    text: "Clear, useful pages that answer real homeowner questions and turn more qualified visits into calls.",
    image:
      "/assets/__feW9MmNrx8PrtAsWksLKu0KC8w1WrTGmVI3_k6rcTC8L3d98lV5qnWu4TRH7liQe9vxoX8_WY0jnKIX9-JMJezpgDdjSpdgWp5pI_FpgBh3DQpbcdNqTHEsHfz88d5Yg1rmQvFuCBFBwa_78IEXECX4mJX4OtxB1cheU69GeyrmSkxW-bpfcnHo9_M0CuP.jpeg",
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
