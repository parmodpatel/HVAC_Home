import { useEffect, useState } from "react";
import heroAsset from "./assets/hero.png";

type Service = {
  id: string;
  number: string;
  title: string;
  text: string;
  image: string;
};

const mono = "font-mono text-[10px] uppercase tracking-[1.6px]";
const buttonBase =
  "rounded-full border border-[#72e0f5]/40 px-5 py-4 text-[11px] tracking-[.5px] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#ef806d] hover:shadow-[0_10px_24px_rgba(239,128,109,.18)]";

export function Hero({
  onScrollTo,
  onOpenAudit,
}: {
  onScrollTo: (id: string) => void;
  onOpenAudit: () => void;
}) {
  return (
    <section
      className="relative flex min-h-[100svh] items-center overflow-hidden px-[12vw] pb-[90px] pt-[150px] max-[700px]:min-h-[100svh] max-[700px]:px-[8vw] max-[700px]:pb-[100px] max-[700px]:pt-[130px]"
      id="top"
    >
      <div className="absolute inset-0 bg-[url('/assets/R7mgq17imfLe62s5970sqC7jp4GaliwnV1zy2dBKkPGjR9_BdTUM9Co7Sg6vsHHtjC7Lv6be8gPsCj8atv_Cz7kIYMW_Udj0M6xocWfin_KHvK3n10988w-ADHA2929_Ul6ELOfK29qZupnafMQgAtNgdYlmd2wxnURIBtZJJ7c.jpeg')] bg-cover bg-center saturate-[.65] max-[700px]:bg-[position:63%_center]" />
      <div className="absolute inset-0 bg-black/40" />
      <img
        className="pointer-events-none absolute right-[8vw] top-1/2 w-[min(28vw,330px)] -translate-y-1/2 opacity-35 mix-blend-screen max-[700px]:right-[-22vw] max-[700px]:top-[42%] max-[700px]:w-[75vw] max-[700px]:opacity-20"
        src={heroAsset}
        alt=""
      />
      <div className="relative max-w-[730px]">
        <p className={`${mono} text-[#72e0f5] max-[700px]:hidden`}>
          <span className="mr-3 inline-block h-px w-[30px] bg-[#72e0f5] align-middle" />{" "}
          HVAC growth partner / Est. 2014
        </p>
        <h1 className="my-[30px] text-[clamp(52px,7vw,96px)] font-medium leading-[.98] tracking-[-2px] text-[#f5fbff] max-[700px]:my-6 max-[700px]:max-w-[370px] max-[700px]:text-[52px] max-[700px]:leading-[1.02]">
          More calls.
          <br />
          <em className="not-italic text-[#8be9f5]">Less chasing.</em>
        </h1>
        <p className="max-w-[420px] text-xl leading-[1.65] text-[#c5d7de] max-[700px]:max-w-[340px] max-[700px]:text-[17px] max-[700px]:leading-[1.55]">
          The digital agency for HVAC companies ready to become the obvious
          choice in every market they serve.
        </p>
        <div className="mt-10 flex items-center gap-[30px] max-[700px]:flex-col max-[700px]:items-start max-[700px]:gap-6">
          <button
            className={`${buttonBase} bg-[#f5fbff] text-[#102a43] shadow-[0_12px_30px_rgba(0,0,0,.18)]`}
            onClick={() => onScrollTo("expertise")}
          >
            See how we grow HVAC <span className="ml-3 text-base">↓</span>
          </button>
          <button
            className="border-0 border-b border-white/20 bg-transparent pb-2 text-left text-[11px] tracking-[.7px] text-[#f5fbff] hover:text-[#72e0f5] max-[700px]:hidden"
            onClick={onOpenAudit}
          >
            Get your free audit
          </button>
        </div>
      </div>
      <div className="absolute bottom-[100px] right-[7vw] flex items-center gap-3 font-mono text-[10px] uppercase tracking-[1px] text-[#f5fbff] max-[700px]:hidden">
        <span className="text-[30px] text-[#72e0f5]">+42%</span>
        <span>
          Average
          <br />
          qualified leads
        </span>
      </div>
      {/* <div className="absolute bottom-7 left-[5vw] font-mono text-[10px] uppercase tracking-[1px] text-[#a8bfca]">
        Scroll to explore <span className="ml-5 text-[#f5fbff]">↓</span>
      </div> */}
    </section>
  );
}

export function Intro({ onOpenAudit }: { onOpenAudit: () => void }) {
  const slides = [
    {
      image:
        "/assets/upGm44GETjY3a1k_R3Bzk8gyCOpZllm8arrzKAc9nxxbKVbCHqUdmR9OLIXwh_Cl9VuwbKR6uE6kAcvHrHxP3pkQGhimhnm5C0MOlAQqTXXnnY_QQyHXtONBTn2LtOYOh3mOwXizT2q1v5mHj5XFkwfsMTa2ypZZpjBesVYpmdQ.jpeg",
      alt: "HVAC marketing planning session",
      label: "Strategy that converts",
    },
    {
      image:
        "/assets/6zzljXHMLFM720bX1MupGngVHcgFDI90CJDd77qzGZeTq6RFMsxEj2zmLzAIfVxE8HSAPKS6YpUumKRQVz8shv-qzKDhocT_p9DtArOUTrPDY0jhSZJkQ9oj5QuLUp_b74kpOlcA6yFIRaTX0JVh7KD5-lYW8KviNcMnWN6bHGE.jpeg",
      alt: "Modern residential HVAC system",
      label: "Comfort, made visible",
    },
    {
      image:
        "/assets/T4Tbhq229fcOaGIe9g4x7gCXKIhoXbRvMHMWwy3dxXpbUuEscMSSMbJpUC5Wa4dcYp6PQwUsftdC7sVcdmFo3VLX6_quMLSzcr6LvHbf-yJW23Xmj2s15qQhZeosSmJhEs3rZWBmr097kooVjWMr3dU-3pFvbVYnnPMdXKaDgLU.jpeg",
      alt: "Commercial HVAC technicians at work",
      label: "Built for the field",
    },
  ];
  const [activeSlide, setActiveSlide] = useState(0);
  const [isSliderPaused, setIsSliderPaused] = useState(false);
  const showSlide = (index: number) => {
    setActiveSlide((index + slides.length) % slides.length);
  };

  useEffect(() => {
    if (isSliderPaused) return;
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, [isSliderPaused, slides.length]);

  return (
    <section
      className="grid grid-cols-[1fr_1.35fr] items-center gap-[80px] border-t border-[#72e0f5]/30 bg-[#e8f7fa] px-[12vw] py-[130px] text-[#102a43] max-[700px]:block max-[700px]:px-[8vw] max-[700px]:py-[85px]"
      id="about"
    >
      <div>
        <p className="mb-8 text-xl font-medium uppercase tracking-[1.6px] text-[#ef806d]">
          The Airside approach
        </p>
        <h2 className="mb-8 text-[clamp(42px,5vw,70px)] font-medium leading-[.98] tracking-[-2px]">
          Marketing built for
          <br />
          <span className="text-[#176b87]">the service call.</span>
        </h2>
        <p className="mb-9 max-w-[545px] text-md leading-[1.8] text-[#4d6877]">
          Most agencies speak fluent marketing. We speak fluent HVAC. That means
          no vanity metrics, vague reports, or one-size-fits-all funnels. Just a
          focused system that puts your best services in front of ready-to-book
          customers.
        </p>
        <button
          className="border-0 border-b border-[#9fc2ce] bg-transparent pb-2 text-left text-[11px] tracking-[.7px] text-[#102a43] hover:text-[#ef806d]"
          onClick={onOpenAudit}
        >
          Why Airside
        </button>
      </div>
      <div className="min-w-0">
        <div
          className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-[#b8d4dc] bg-[#cfe8ee] shadow-[0_16px_32px_rgba(16,42,67,.12)]"
          onMouseEnter={() => setIsSliderPaused(true)}
          onMouseLeave={() => setIsSliderPaused(false)}
          onFocus={() => setIsSliderPaused(true)}
          onBlur={() => setIsSliderPaused(false)}
        >
          {slides.map((slide, index) => (
            <img
              className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${index === activeSlide ? "scale-100 opacity-100" : "scale-105 opacity-0"}`}
              src={slide.image}
              alt={index === activeSlide ? slide.alt : ""}
              key={slide.image}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-[#081c2d]/75 via-transparent to-transparent" />
          <span className="absolute bottom-4 left-4 rounded-full bg-[#102a43]/85 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[1px] text-[#8be9f5]">
            {slides[activeSlide].label}
          </span>
          <span className="absolute right-4 top-4 rounded-full border border-white/35 bg-[#102a43]/75 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[1px] text-[#f5fbff]">
            {String(activeSlide + 1).padStart(2, "0")} /{" "}
            {String(slides.length).padStart(2, "0")}
          </span>
          <div className="absolute bottom-3 right-3 flex items-center gap-2">
            <button
              className="grid h-8 w-8 place-items-center rounded-full border border-white/40 bg-[#102a43]/75 text-sm text-[#f5fbff] transition-colors hover:border-[#72e0f5] hover:text-[#72e0f5]"
              onClick={() => showSlide(activeSlide - 1)}
              aria-label="Previous image"
            >
              ←
            </button>
            <button
              className="grid h-8 w-8 place-items-center rounded-full border border-white/40 bg-[#102a43]/75 text-sm text-[#f5fbff] transition-colors hover:border-[#72e0f5] hover:text-[#72e0f5]"
              onClick={() => showSlide(activeSlide + 1)}
              aria-label="Next image"
            >
              →
            </button>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2">
          {slides.map((slide, index) => (
            <button
              className={`h-1.5 rounded-full transition-all ${index === activeSlide ? "w-9 bg-[#ef806d]" : "w-5 bg-[#9fc2ce] hover:bg-[#176b87]"}`}
              key={slide.label}
              onClick={() => showSlide(index)}
              aria-label={`Show image ${index + 1}: ${slide.label}`}
              aria-current={index === activeSlide}
            />
          ))}
          <span className="ml-2 font-mono text-[9px] uppercase tracking-[1px] text-[#4d6877]">
            {isSliderPaused ? "Paused" : "Auto"}
          </span>
        </div>
      </div>
    </section>
  );
}

export function Expertise({
  services,
  activeService,
  onSelectService,
  onOpenAudit,
}: {
  services: Service[];
  activeService: string;
  onSelectService: (id: string) => void;
  onOpenAudit: () => void;
}) {
  const selectedService =
    services.find((service) => service.id === activeService) ?? services[0];
  return (
    <section
      className="bg-[#102a43] px-[12vw] py-[130px] text-[#f5fbff] max-[700px]:px-[8vw] max-[700px]:py-[85px]"
      id="expertise"
    >
      <div className="mb-20 flex items-end justify-between max-[700px]:mb-[50px] max-[700px]:block">
        <div>
          <p className={`${mono} text-[#72e0f5]`}>What we do</p>
          <h2 className="mb-8 mt-0 text-[clamp(42px,5vw,70px)] font-medium leading-[.98] tracking-[-2px]">
            One partner.
            <br />
            <span className="text-[#8be9f5]">More booked jobs.</span>
          </h2>
        </div>
        <p className="max-w-[280px] text-[13px] leading-[1.7] text-[#a8bfca] max-[700px]:mt-5">
          A practical growth system that connects your website, local presence,
          and reputation.
        </p>
      </div>
      <div className="grid min-h-[310px] grid-cols-2 max-[700px]:block">
        <div className="border-t border-white/15">
          {services.map((service) => (
            <button
              className={`grid w-full grid-cols-[50px_1fr] items-center rounded-xl border border-transparent border-b-white/15 bg-transparent py-6 text-left transition-all ${activeService === service.id ? "border-l-2 border-l-[#ef806d] bg-white/5 pl-3 text-[#f5fbff]" : "text-[#a8bfca]"} hover:border-[#72e0f5]/20 hover:bg-white/5 hover:text-[#f5fbff]`}
              key={service.id}
              onClick={() => onSelectService(service.id)}
            >
              <span className="font-mono text-[10px] text-[#72e0f5]">
                {service.number}
              </span>
              <strong className="text-base font-medium">{service.title}</strong>
            </button>
          ))}
        </div>
        <div className="ml-[12vw] border-l border-white/15 px-0 pb-5 pl-[50px] pt-[34px] max-[700px]:ml-0 max-[700px]:mt-[45px] max-[700px]:border-l-0 max-[700px]:border-t max-[700px]:pl-0">
          <span className="font-mono text-[10px] text-[#72e0f5]">
            {selectedService.number}
          </span>
          <div className="relative mt-6 aspect-[16/9] max-w-[340px] overflow-hidden rounded-2xl border border-white/10 bg-[#0b2238]">
            <img
              className="h-full w-full object-cover saturate-[.85] transition-transform duration-500 hover:scale-105"
              src={selectedService.image}
              alt=""
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#081c2d]/65 via-transparent to-[#72e0f5]/10" />
          </div>
          <h3 className="mb-4 mt-[35px] text-[30px] font-medium">
            {selectedService.title}
          </h3>
          <p className="mb-[38px] max-w-[290px] text-[13px] leading-[1.7] text-[#a8bfca]">
            {selectedService.text}
          </p>
          <button
            className="border-0 border-b border-white/15 bg-transparent pb-2 text-left text-[11px] tracking-[.7px] text-[#f5fbff] hover:text-[#72e0f5]"
            onClick={onOpenAudit}
          >
            Explore service
          </button>
        </div>
      </div>
    </section>
  );
}

export function Industries({ onOpenAudit }: { onOpenAudit: () => void }) {
  const slides = [
    {
      image:
        "/assets/RUdJP3HkLHxCNVs0Xr74SMwLIzn0oKNMK8P99Y4TsSB_dq7W5Vo7KDS2IhOm1bKM6u25ZSzThvbAELHQYs90HdSL7HxYwoA7j9Dsn1ah4nwgdFYyDvhgRNic_9yXhKCDygc4gWZmWqAz_XSDBT4PbGDWHEYol3ROBW7umflnLHc.jpeg",
      alt: "Residential and commercial HVAC system",
    },
    {
      image:
        "/assets/DBNoxsPD0HukszBdMwT38bs-AFVpUhjKymOpmSUI9cghC3E0su8HddlMpGXSsbU31oYZq8neM5K1ewNMTv5kp8TapdMeXPW_PonrZF1SP2R51I8Vhdf962Evb3ParzTuNubQ72oGFRKeq6JWAURv1uK9SM8SKWiU8wQGpuRiaItq9CCfVeBTCh_70zK1YxGu.jpeg",
      alt: "HVAC equipment and service environment",
    },
  ];
  const [activeSlide, setActiveSlide] = useState(0);
  const [isSliderPaused, setIsSliderPaused] = useState(false);

  useEffect(() => {
    if (isSliderPaused) return;
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 4600);
    return () => window.clearInterval(timer);
  }, [isSliderPaused, slides.length]);

  return (
    <section
      className="grid grid-cols-[1fr_1.15fr] items-center border-t border-[#9fc2ce] bg-[#e8f7fa] pl-[12vw] text-[#102a43] max-[700px]:block max-[700px]:px-[8vw]"
      id="industries"
    >
      <div className="flex flex-col items-start justify-center py-[130px] pr-[8vw] max-[700px]:pb-[85px] max-[700px]:pt-[85px]">
        <p className={`${mono} text-[#ef806d] `}>Who we help</p>
        <h2 className="mb-[22px] mt-0 max-w-[560px] text-[clamp(42px,5vw,70px)] font-medium leading-[.98] tracking-[-2px] max-[700px]:text-[48px] max-[700px]:leading-[1]">
          Built for
          <br />
          <span className="text-[#176b87]">busy seasons.</span>
        </h2>
        <p className="mb-7 max-w-[330px] text-lg leading-[1.7] text-[#4d6877] max-[700px]:text-[15px]">
          Whether you run a two-truck operation or a multi-location team, your
          next customer is already searching.
        </p>
        <div className="mb-9 flex flex-wrap gap-2 font-mono text-lg uppercase tracking-[1px] text-[#176b87]">
          <span className="rounded-full border border-[#9fc2ce] bg-[#f5fbff]/70 px-3 py-2">
            Residential HVAC
          </span>
          <span className="rounded-full border border-[#9fc2ce] bg-[#f5fbff]/70 px-3 py-2">
            Commercial HVAC
          </span>
        </div>
        <button
          className={`${buttonBase} inline-flex items-center justify-center bg-[#176b87] text-[#f5fbff] shadow-[0_12px_24px_rgba(23,107,135,.25)] hover:border-[#ef806d] hover:bg-[#ef806d] hover:text-[#102a43] active:translate-y-0 active:scale-[.98] focus:outline-none focus:ring-2 focus:ring-[#72e0f5] focus:ring-offset-2 focus:ring-offset-[#e8f7fa]`}
          onClick={onOpenAudit}
        >
          Find your growth plan
        </button>
      </div>
      <div
        className="group relative mr-[5vw] h-[520px] min-h-0 overflow-hidden rounded-3xl border border-[#102a43]/15 bg-[#102a43] shadow-[inset_0_0_0_1px_rgba(16,42,67,.18)] max-[700px]:mx-[-8vw] max-[700px]:mr-[-8vw] max-[700px]:h-[360px]"
        onMouseEnter={() => setIsSliderPaused(true)}
        onMouseLeave={() => setIsSliderPaused(false)}
        onFocus={() => setIsSliderPaused(true)}
        onBlur={() => setIsSliderPaused(false)}
      >
        {slides.map((slide, index) => (
          <img
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${index === activeSlide ? "scale-100 opacity-100" : "scale-105 opacity-0"}`}
            src={slide.image}
            alt={index === activeSlide ? slide.alt : ""}
            key={slide.image}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-[#081c2d]/80 via-transparent to-[#102a43]/10" />
        <span className="absolute left-7 top-7 rounded-full border border-[#72e0f5]/60 bg-[#081c2d]/75 px-3 py-2 font-mono text-[9px] uppercase tracking-[1px] text-[#72e0f5] backdrop-blur-sm">
          Built for busy seasons
        </span>
        <div className="absolute bottom-[30px] left-[30px] right-[30px] flex justify-between border-t border-white/50 pt-3 pr-[150px] font-mono text-[10px] uppercase text-[#f5fbff] max-[700px]:pr-0">
          <span>Residential & commercial HVAC</span>
          <span>Service area / USA</span>
        </div>
        <span className="absolute right-7 top-7 rounded-full border border-white/35 bg-[#102a43]/75 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[1px] text-[#f5fbff]">
          {String(activeSlide + 1).padStart(2, "0")} /{" "}
          {String(slides.length).padStart(2, "0")}
        </span>
        <div className="absolute bottom-3 right-3 flex items-center gap-2">
          <button
            className="grid h-8 w-8 place-items-center rounded-full border border-white/40 bg-[#102a43]/80 text-sm text-[#f5fbff] transition-colors hover:border-[#72e0f5] hover:text-[#72e0f5]"
            onClick={() =>
              setActiveSlide((activeSlide + slides.length - 1) % slides.length)
            }
            aria-label="Previous industry image"
          >
            ←
          </button>
          {slides.map((slide, index) => (
            <button
              className={`h-1.5 rounded-full transition-all ${index === activeSlide ? "w-9 bg-[#ef806d]" : "w-5 bg-white/60 hover:bg-[#72e0f5]"}`}
              key={slide.image}
              onClick={() => setActiveSlide(index)}
              aria-label={`Show industry image ${index + 1}`}
              aria-current={index === activeSlide}
            />
          ))}
          <button
            className="grid h-8 w-8 place-items-center rounded-full border border-white/40 bg-[#102a43]/80 text-sm text-[#f5fbff] transition-colors hover:border-[#72e0f5] hover:text-[#72e0f5]"
            onClick={() => setActiveSlide((activeSlide + 1) % slides.length)}
            aria-label="Next industry image"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

export function AuditModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-20 grid place-items-center bg-[#061522]/85 p-5 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[550px] bg-[#f5fbff] p-[55px] text-[#102a43] shadow-[0_24px_80px_rgba(0,0,0,.35)] max-[700px]:px-[25px] max-[700px]:py-10"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="absolute right-[22px] top-[18px] border-0 bg-transparent text-[28px]"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <p className={`${mono} text-[#ef806d]`}>Free HVAC SEO audit</p>
        <h2 className="mb-5 mt-0 text-5xl font-medium leading-[.98] tracking-[-2px] max-[700px]:text-[39px]">
          Let's find your
          <br />
          <em className="not-italic text-[#176b87]">next 100 calls.</em>
        </h2>
        <p className="text-[13px] leading-[1.6] text-[#4d6877]">
          Share a few details and we'll send back the clearest opportunities we
          see in your market.
        </p>
        <form
          className="mt-7 grid gap-3"
          onSubmit={(event) => {
            event.preventDefault();
            onClose();
          }}
        >
          <input
            className="border border-[#a9cbd6] bg-white/60 p-[13px] outline-[#ef806d]"
            required
            placeholder="Your name"
          />
          <input
            className="border border-[#a9cbd6] bg-white/60 p-[13px] outline-[#ef806d]"
            required
            type="email"
            placeholder="Work email"
          />
          <input
            className="border border-[#a9cbd6] bg-white/60 p-[13px] outline-[#ef806d]"
            required
            placeholder="Company website"
          />
          <textarea
            className="resize-y border border-[#a9cbd6] bg-white/60 p-[13px] outline-[#ef806d]"
            required
            placeholder="What would you like to grow?"
            rows={3}
          />
          <button
            className={`${buttonBase} bg-[#ef806d] text-[#102a43]`}
            type="submit"
          >
            Request my audit
          </button>
        </form>
      </div>
    </div>
  );
}
