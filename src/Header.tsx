import { useRef, useState } from "react";

type NavGroup = { label: string; items: string[] };

type HeaderProps = {
  navGroups: NavGroup[];
  menuOpen: boolean;
  onMenuToggle: () => void;
  onScrollTo: (id: string) => void;
  onOpenAudit: () => void;
};

const buttonBase =
  "border rounded-full px-5 py-4 text-[11px] tracking-[.5px] transition-all duration-200 hover:-translate-y-0.5";

function Brand({ onClick }: { onClick: () => void }) {
  return (
    <button
      className="group flex items-center gap-3 border-0 bg-transparent p-0 text-left text-xs font-extrabold tracking-[1.8px] text-[#f5fbff]"
      onClick={onClick}
      aria-label="Airside Digital home"
    >
      <span className="grid h-[34px] w-[34px] place-items-center rounded-xl bg-[#72e0f5] text-[21px] italic text-[#102a43] shadow-[0_7px_20px_rgba(114,224,245,.2)] transition-transform duration-200 group-hover:rotate-[-8deg]">
        A
      </span>
      <span className="transition-colors group-hover:text-[#72e0f5]">
        AIRSIDE{" "}
        <b className="mt-0.5 block text-[8px] tracking-[2.8px] text-[#a8bfca]">
          DIGITAL
        </b>
      </span>
    </button>
  );
}

export function SiteHeader({
  navGroups,
  menuOpen,
  onMenuToggle,
  onScrollTo,
  onOpenAudit,
}: HeaderProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeDropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );
  const cancelDropdownClose = () => {
    if (closeDropdownTimeout.current) {
      clearTimeout(closeDropdownTimeout.current);
      closeDropdownTimeout.current = null;
    }
  };
  const toggleDropdown = (label: string) => {
    cancelDropdownClose();
    setOpenDropdown((current) => (current === label ? null : label));
  };
  const scheduleDropdownClose = () => {
    cancelDropdownClose();
    closeDropdownTimeout.current = setTimeout(() => {
      setOpenDropdown(null);
      closeDropdownTimeout.current = null;
    }, 220);
  };
  const closeMenu = () => {
    cancelDropdownClose();
    setOpenDropdown(null);
    onMenuToggle();
  };

  return (
    <header className="absolute z-10 flex h-[82px] w-full items-center justify-between border rounded-4xl border-white/15 bg-[#081c2d]/90 px-[5vw] shadow-[0_8px_30px_rgba(0,0,0,.12)] backdrop-blur-xl max-[700px]:h-[70px] max-[700px]:rounded-b-3xl max-[700px]:px-[6vw]">
      <Brand onClick={() => onScrollTo("top")} />
      <button
        className="group relative hidden h-11 w-11 rounded-full border border-white/15 bg-white/5 transition-colors hover:border-[#72e0f5]/60 hover:bg-[#72e0f5]/10 focus:outline-none focus:ring-2 focus:ring-[#72e0f5]/40 max-[1100px]:block"
        onClick={onMenuToggle}
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
      >
        <span className={`absolute left-1/2 top-1/2 block h-px w-5 -translate-x-1/2 bg-[#f5fbff] transition-all duration-200 group-hover:bg-[#72e0f5] ${menuOpen ? "-translate-y-1/2 rotate-45" : "-translate-y-[5px]"}`} />
        <span className={`absolute left-1/2 top-1/2 block h-px w-5 -translate-x-1/2 bg-[#f5fbff] transition-all duration-200 group-hover:bg-[#72e0f5] ${menuOpen ? "-translate-y-1/2 rotate-[-45deg]" : "translate-y-[5px]"}`} />
      </button>
      <nav
        className={`${menuOpen ? "flex" : "hidden"} absolute right-[5vw] top-[82px] z-20 w-[340px] flex-col items-stretch gap-1 border border-white/15 bg-[#0b2238] p-[18px] shadow-[0_24px_60px_rgba(0,0,0,.3)] min-[1101px]:static min-[1101px]:z-auto min-[1101px]:flex min-[1101px]:w-auto min-[1101px]:flex-row min-[1101px]:items-center min-[1101px]:gap-[22px] min-[1101px]:border-0 min-[1101px]:bg-transparent min-[1101px]:p-0 min-[1101px]:shadow-none max-[1100px]:left-0 max-[1100px]:right-0 max-[1100px]:top-[82px] max-[1100px]:w-auto max-[1100px]:max-h-[calc(100vh-94px)] max-[1100px]:overflow-y-auto max-[1100px]:rounded-b-3xl max-[1100px]:border-t max-[1100px]:border-[#72e0f5]/20 max-[1100px]:px-[6vw] max-[1100px]:py-6 max-[700px]:top-[70px]`}
      >
        <div className="mb-3 hidden items-center justify-between border-b border-white/10 pb-5 max-[1100px]:flex">
          <div>
            <p className="mb-1 font-mono text-[9px] uppercase tracking-[1.5px] text-[#72e0f5]">
              Airside / Digital
            </p>
            <p className="text-[13px] text-[#a8bfca]">HVAC growth, made clear.</p>
          </div>
          <span className="rounded-full border border-[#ef806d]/40 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[1px] text-[#ef806d]">
            Menu
          </span>
        </div>
        {navGroups.map((group) => {
          const dropdownClass =
            openDropdown === group.label
              ? "visible opacity-100 pointer-events-auto max-[1100px]:block"
              : "invisible opacity-0 pointer-events-none max-[1100px]:hidden";
          const serviceGridClass =
            group.label === "Services"
              ? "min-[701px]:grid min-[701px]:w-[430px] min-[701px]:grid-cols-2"
              : "";
          const dropdownWidthClass =
            group.label === "Services"
              ? "min-[701px]:w-[520px]"
              : "min-[701px]:w-[245px]";
          return (
            <div
              className="group relative border-b border-white/10 min-[701px]:border-0"
              key={group.label}
              onMouseEnter={cancelDropdownClose}
              onMouseLeave={scheduleDropdownClose}
            >
              <button
                className={`flex w-full items-center justify-between gap-1.5 border-0 bg-transparent py-3 text-left text-[11px] tracking-[.6px] text-[#f5fbff] transition-colors hover:text-[#72e0f5] max-[1100px]:min-h-12 ${openDropdown === group.label ? "text-[#72e0f5]" : ""}`}
                onClick={() => toggleDropdown(group.label)}
                aria-expanded={openDropdown === group.label}
              >
                {group.label}
                <span className={`text-sm text-[#72e0f5] transition-transform duration-200 ${openDropdown === group.label ? "rotate-180" : ""}`}>
                  ⌄
                </span>
              </button>
              <div
                className={`${dropdownClass} static w-full border-0 bg-transparent p-0 shadow-none transition-[opacity,transform] duration-200 min-[701px]:absolute min-[701px]:left-[-26px] min-[701px]:top-[calc(100%+4px)] ${dropdownWidthClass} min-[701px]:rounded-2xl min-[701px]:border min-[701px]:border-[#72e0f5]/20 min-[701px]:bg-[#0b2238] min-[701px]:p-3 min-[701px]:shadow-[0_22px_55px_rgba(0,0,0,.35)] min-[701px]:backdrop-blur-xl min-[701px]:group-hover:visible min-[701px]:group-hover:opacity-100 min-[701px]:group-hover:pointer-events-auto ${serviceGridClass}`}
              >
                {group.label === "Services" && (
                  <div className="col-span-full mb-2 rounded-xl border border-[#72e0f5]/15 bg-[#102a43] px-4 py-3.5">
                    <p className="mb-1 font-mono text-[9px] uppercase tracking-[1.4px] text-[#72e0f5]">
                      Built for booked calls
                    </p>
                    <p className="max-w-[340px] text-[12px] leading-[1.55] text-[#a8bfca]">
                      The growth systems behind a stronger HVAC service area.
                    </p>
                  </div>
                )}
                {group.items.map((item) => (
                  <button
                    className="group/item flex w-full items-center justify-between rounded-xl border border-transparent bg-transparent px-3 py-3 text-left text-[11px] text-[#c5d7de] transition-all duration-150 hover:-translate-y-0.5 hover:border-white/10 hover:bg-[#163b55] hover:text-[#f5fbff] max-[1100px]:min-h-12"
                    key={item}
                    onClick={() =>
                      item === "View all states"
                        ? onScrollTo("industries")
                        : closeMenu()
                    }
                  >
                    <span>{item}</span>
                  </button>
                ))}
              </div>
            </div>
          );
        })}
        {["Case Studies", "Pricing", "Blog / Resources", "About"].map(
          (item) => (
            <button
              className="border-0 bg-transparent py-3 text-left text-[11px] tracking-[.6px] text-[#f5fbff] transition-colors hover:text-[#72e0f5] max-[1100px]:min-h-12"
              key={item}
              onClick={() =>
                onScrollTo(
                  item === "Pricing"
                    ? "pricing"
                    : item === "Blog / Resources"
                      ? "resources"
                      : item === "About"
                        ? "about"
                        : "testimonials",
                )
              }
            >
              {item}
            </button>
          ),
        )}
        <button
          className={`${buttonBase} border border-[#72e0f5] bg-[#72e0f5]/10 text-left text-[#f5fbff] hover:bg-[#72e0f5] hover:text-[#102a43] min-[701px]:text-center max-[1100px]:mt-4 max-[1100px]:min-h-12`}
          onClick={onOpenAudit}
        >
          Get a Free SEO Audit{" "}
        </button>
      </nav>
    </header>
  );
}
