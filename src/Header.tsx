import { useState } from 'react'

type NavGroup = { label: string; items: string[] }

type HeaderProps = {
  navGroups: NavGroup[]
  menuOpen: boolean
  onMenuToggle: () => void
  onScrollTo: (id: string) => void
  onOpenAudit: () => void
}

const buttonBase = 'border-0 px-5 py-4 text-[11px] tracking-[.5px] transition-all duration-200 hover:-translate-y-0.5'

function Brand({ onClick }: { onClick: () => void }) {
  return <button className="group flex items-center gap-3 border-0 bg-transparent p-0 text-left text-xs font-extrabold tracking-[1.8px] text-[#f1f0e9]" onClick={onClick} aria-label="Airside Digital home"><span className="grid h-[34px] w-[34px] place-items-center bg-[#f07a4f] text-[21px] italic text-[#101817] transition-transform duration-200 group-hover:rotate-[-8deg]">A</span><span className="transition-colors group-hover:text-[#f07a4f]">AIRSIDE <b className="mt-0.5 block text-[8px] tracking-[2.8px] text-[#aab3ab]">DIGITAL</b></span></button>
}

export function SiteHeader({ navGroups, menuOpen, onMenuToggle, onScrollTo, onOpenAudit }: HeaderProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const toggleDropdown = (label: string) => setOpenDropdown(openDropdown === label ? null : label)
  const closeMenu = () => { setOpenDropdown(null); onMenuToggle() }

  return <header className="absolute z-10 flex h-[82px] w-full items-center justify-between border-b border-white/15 px-[5vw] max-[700px]:h-[70px] max-[700px]:px-[6vw]">
    <Brand onClick={() => onScrollTo('top')} />
    <button className="group hidden border-0 bg-transparent max-[1100px]:block" onClick={onMenuToggle} aria-label="Toggle navigation"><span className="my-1.5 block h-px w-[25px] bg-[#f1f0e9] transition-colors group-hover:bg-[#f07a4f]" /><span className="my-1.5 block h-px w-[25px] bg-[#f1f0e9] transition-colors group-hover:bg-[#f07a4f]" /></button>
    <nav className={`${menuOpen ? 'flex' : 'hidden'} absolute right-[5vw] top-[82px] w-[340px] flex-col items-stretch gap-1 border border-white/15 bg-[#101817]/95 p-[18px] backdrop-blur-md min-[1101px]:static min-[1101px]:flex min-[1101px]:w-auto min-[1101px]:flex-row min-[1101px]:items-center min-[1101px]:gap-[22px] min-[1101px]:border-0 min-[1101px]:bg-transparent min-[1101px]:p-0 max-[700px]:left-0 max-[700px]:right-0 max-[700px]:top-[70px] max-[700px]:w-auto max-[700px]:px-[6vw] max-[700px]:py-5`}>
      {navGroups.map((group) => {
        const dropdownClass = openDropdown === group.label ? 'block' : 'hidden'
        const serviceGridClass = group.label === 'Services' ? 'min-[701px]:grid min-[701px]:w-[430px] min-[701px]:grid-cols-2' : ''
        return <div className="group relative border-b border-white/15 min-[701px]:border-0" key={group.label}><button className="flex w-full items-center gap-1.5 border-0 bg-transparent py-2.5 text-left text-[11px] tracking-[.6px] text-[#f1f0e9] transition-colors hover:text-[#f07a4f]" onClick={() => toggleDropdown(group.label)} aria-expanded={openDropdown === group.label}>{group.label}<span className="text-sm text-[#f07a4f] transition-transform group-hover:rotate-180">⌄</span></button><div className={`${dropdownClass} static w-full border-0 bg-transparent p-0 shadow-none min-[701px]:absolute min-[701px]:left-[-20px] min-[701px]:top-[calc(100%+18px)] min-[701px]:w-[245px] min-[701px]:border min-[701px]:border-white/15 min-[701px]:bg-[#202a26] min-[701px]:p-3 min-[701px]:shadow-2xl min-[701px]:group-hover:block ${serviceGridClass}`}>{group.items.map((item) => <button className="group/item flex w-full justify-between border-0 bg-transparent px-2.5 py-2.5 text-left text-[11px] text-[#c9d0ca] transition-all duration-150 hover:translate-x-1 hover:bg-white/10 hover:text-[#f1f0e9]" key={item} onClick={() => item === 'View all states' ? onScrollTo('industries') : closeMenu()}>{item}{item === 'View all states' && <span className="text-[#f07a4f] transition-transform group-hover/item:translate-x-1">↗</span>}</button>)}</div></div>
      })}
      {['Case Studies', 'Pricing', 'Blog / Resources', 'About'].map((item) => <button className="border-0 bg-transparent py-2.5 text-left text-[11px] tracking-[.6px] text-[#f1f0e9] transition-colors hover:text-[#f07a4f]" key={item} onClick={() => onScrollTo(item === 'Pricing' ? 'pricing' : item === 'Blog / Resources' ? 'resources' : item === 'About' ? 'about' : 'testimonials')}>{item}</button>)}
      <button className={`${buttonBase} border border-[#f1f0e9] text-left text-[#f1f0e9] hover:bg-[#f1f0e9] hover:text-[#101817] min-[701px]:text-center`} onClick={onOpenAudit}>Get a Free SEO Audit <span className="ml-3 inline-block text-base transition-transform hover:translate-x-1">↗</span></button>
    </nav>
  </header>
}
