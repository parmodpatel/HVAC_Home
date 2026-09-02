type Service = {
  id: string;
  number: string;
  title: string;
  text: string;
  image: string;
};

const mono = "font-mono text-[10px] uppercase tracking-[1.6px]";
const buttonBase =
  "border-0 px-5 py-4 text-[11px] tracking-[.5px] transition-transform hover:-translate-y-0.5";

export function Hero({
  onScrollTo,
  onOpenAudit,
}: {
  onScrollTo: (id: string) => void;
  onOpenAudit: () => void;
}) {
  return (
    <section
      className="relative flex min-h-[720px] items-center overflow-hidden px-[12vw] pb-[90px] pt-[150px] max-[700px]:min-h-[700px] max-[700px]:px-[8vw] max-[700px]:pb-[100px] max-[700px]:pt-[130px]"
      id="top"
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1631545806609-4b7b2efc2f29?auto=format&fit=crop&w=2000&q=85')] bg-cover bg-center saturate-[.55] max-[700px]:bg-[position:63%_center]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,24,23,.96)_5%,rgba(16,24,23,.67)_52%,rgba(16,24,23,.2))]" />
      <div className="relative max-w-[730px]">
        <p className={`${mono} text-[#72e0f5]`}>
          <span className="mr-3 inline-block h-px w-[30px] bg-[#72e0f5] align-middle" />{" "}
          HVAC growth partner / Est. 2014
        </p>
        <h1 className="my-[30px] text-[clamp(48px,7vw,92px)] font-medium leading-[.98] tracking-[-2px] text-[#f1f0e9]">
          More calls.
          <br />
          <em className="not-italic text-[#8be9f5]">Less chasing.</em>
        </h1>
        <p className="max-w-[390px] text-sm leading-[1.7] text-[#c3cbc5]">
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
            className="border-0 border-b border-white/20 bg-transparent pb-2 text-left text-[11px] tracking-[.7px] text-[#f5fbff] hover:text-[#72e0f5]"
            onClick={onOpenAudit}
          >
            Get your free audit <span className="ml-3 text-base">↗</span>
          </button>
        </div>
      </div>
      <div className="absolute bottom-[100px] right-[7vw] flex items-center gap-3 font-mono text-[10px] uppercase tracking-[1px] text-[#f1f0e9] max-[700px]:bottom-[92px] max-[700px]:right-[8vw]">
        <span className="text-[30px] text-[#72e0f5]">+42%</span>
        <span>
          Average
          <br />
          qualified leads
        </span>
      </div>
      <div className="absolute bottom-7 left-[5vw] font-mono text-[10px] uppercase tracking-[1px] text-[#aab3ab]">
        Scroll to explore <span className="ml-5 text-[#f1f0e9]">↓</span>
      </div>
    </section>
  );
}

export function Intro({ onOpenAudit }: { onOpenAudit: () => void }) {
  return (
    <section
      className="grid grid-cols-[1fr_2.3fr] gap-[70px] bg-[#f1f0e9] px-[12vw] py-[130px] text-[#101817] max-[700px]:block max-[700px]:px-[8vw] max-[700px]:py-[85px]"
      id="about"
    >
      <p className={`${mono} text-[#ef806d] max-[700px]:mb-[45px]`}>
        01 / The Airside approach
      </p>
      <div>
        <h2 className="mb-8 text-[clamp(42px,5vw,70px)] font-medium leading-[.98] tracking-[-2px]">
          Marketing built for
          <br />
          <span className="text-[#176b87]">the service call.</span>
        </h2>
        <p className="mb-9 max-w-[545px] text-sm leading-[1.8] text-[#59635d]">
          Most agencies speak fluent marketing. We speak fluent HVAC. That means
          no vanity metrics, vague reports, or one-size-fits-all funnels. Just a
          focused system that puts your best services in front of ready-to-book
          customers.
        </p>
        <button
          className="border-0 border-b border-[#9fc2ce] bg-transparent pb-2 text-left text-[11px] tracking-[.7px] text-[#102a43] hover:text-[#ef806d]"
          onClick={onOpenAudit}
        >
          Why Airside <span className="ml-3 text-base">↗</span>
        </button>
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
          <p className={`${mono} text-[#72e0f5]`}>02 / What we do</p>
          <h2 className="mb-8 mt-0 text-[clamp(42px,5vw,70px)] font-medium leading-[.98] tracking-[-2px]">
            One partner.
            <br />
            <span className="text-[#8be9f5]">More booked jobs.</span>
          </h2>
        </div>
        <p className="max-w-[280px] text-[13px] leading-[1.7] text-[#aab3ab] max-[700px]:mt-5">
          A practical growth system that connects your website, local presence,
          and reputation.
        </p>
      </div>
      <div className="grid min-h-[310px] grid-cols-2 max-[700px]:block">
        <div className="border-t border-white/15">
          {services.map((service) => (
            <button
              className={`grid w-full grid-cols-[50px_1fr_30px] items-center border-0 border-b border-white/15 bg-transparent py-6 text-left ${activeService === service.id ? "border-l-2 border-l-[#ef806d] pl-3 text-[#f5fbff]" : "text-[#a8bfca]"} hover:text-[#f5fbff]`}
              key={service.id}
              onClick={() => onSelectService(service.id)}
            >
              <span className="font-mono text-[10px] text-[#72e0f5]">
                {service.number}
              </span>
              <strong className="text-base font-medium">{service.title}</strong>
              <i className="text-right not-italic opacity-40">↗</i>
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
            Explore service <span className="ml-3 text-base">↗</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export function Industries({ onOpenAudit }: { onOpenAudit: () => void }) {
  return (
    <section
      className="grid grid-cols-[1fr_1.15fr] bg-[#f1f0e9] pl-[12vw] text-[#101817] max-[700px]:block max-[700px]:px-[8vw]"
      id="industries"
    >
      <div className="pt-[165px] max-[700px]:pb-[85px] max-[700px]:pt-[85px]">
        <p className={`${mono} text-[#ef806d]`}>03 / Who we help</p>
        <h2 className="mb-[22px] mt-0 text-[clamp(42px,5vw,70px)] font-medium leading-[.98] tracking-[-2px]">
          Built for
          <br />
          <span className="text-[#176b87]">busy seasons.</span>
        </h2>
        <p className="mb-[38px] max-w-[280px] text-[13px] leading-[1.7] text-[#59635d]">
          Whether you run a two-truck operation or a multi-location team, your
          next customer is already searching.
        </p>
        <button
          className={`${buttonBase} bg-[#ef806d] text-[#102a43] shadow-[0_12px_24px_rgba(239,128,109,.22)]`}
          onClick={onOpenAudit}
        >
          Find your growth plan <span className="ml-3 text-base">↗</span>
        </button>
      </div>
      <div className="relative min-h-[500px] bg-[url('https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=1200&q=85')] bg-cover bg-center max-[700px]:mx-[-8vw] max-[700px]:min-h-[360px]">
        <div className="absolute bottom-[30px] left-[30px] right-[30px] flex justify-between border-t border-white/50 pt-3 font-mono text-[10px] uppercase text-[#f1f0e9]">
          <span>Residential & commercial HVAC</span>
          <span>Service area / USA</span>
        </div>
      </div>
    </section>
  );
}

export function Closing({ onOpenAudit }: { onOpenAudit: () => void }) {
  return (
    <section
      className="flex min-h-[490px] flex-col items-center justify-center bg-[#081c2d] px-[12vw] py-[130px] text-center text-[#f5fbff] max-[700px]:min-h-[430px] max-[700px]:px-[8vw] max-[700px]:py-[85px]"
      id="insights"
    >
      <p className={`${mono} text-[#72e0f5]`}>04 / Let's talk</p>
      <h2 className="mb-8 mt-0 text-[clamp(48px,6vw,84px)] font-medium leading-[.98] tracking-[-2px]">
        Ready to turn
        <br />
        <em className="not-italic text-[#8be9f5]">search into service?</em>
      </h2>
      <button
        className={`${buttonBase} bg-[#ef806d] text-[#102a43] shadow-[0_12px_24px_rgba(239,128,109,.22)]`}
        onClick={onOpenAudit}
      >
        Get my free audit <span className="ml-3 text-base">↗</span>
      </button>
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
        <p className="text-[13px] leading-[1.6] text-[#59635d]">
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
            Request my audit <span className="ml-3 text-base">↗</span>
          </button>
        </form>
      </div>
    </div>
  );
}
