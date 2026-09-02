type FooterColumn = { title: string; items: string[] }

type FooterProps = {
  footerColumns: FooterColumn[]
  onScrollTo: (id: string) => void
  onOpenAudit: () => void
}

function Brand({ onClick }: { onClick: () => void }) {
  return <button className="group flex items-center gap-3 border-0 bg-transparent p-0 text-left text-xs font-extrabold tracking-[1.8px] text-[#f1f0e9]" onClick={onClick} aria-label="Airside Digital home"><span className="grid h-[34px] w-[34px] place-items-center bg-[#f07a4f] text-[21px] italic text-[#101817] transition-transform duration-200 group-hover:rotate-[-8deg]">A</span><span className="transition-colors group-hover:text-[#f07a4f]">AIRSIDE <b className="mt-0.5 block text-[8px] tracking-[2.8px] text-[#aab3ab]">DIGITAL</b></span></button>
}

export function SiteFooter({ footerColumns, onScrollTo, onOpenAudit }: FooterProps) {
  return <footer className="border-t border-white/15 px-[5vw] pb-6 pt-20 font-mono text-[10px] uppercase tracking-[.6px] text-[#aab3ab]"><div className="grid grid-cols-[1fr_2.5fr] gap-[70px] border-b border-white/15 pb-[70px] max-[1100px]:grid-cols-1 max-[1100px]:gap-[45px] max-[700px]:pb-[45px]"><div><Brand onClick={() => onScrollTo('top')} /><p className="mt-7 font-sans text-[13px] normal-case leading-[1.7] tracking-normal text-[#aab3ab]">Search visibility built<br />for the HVAC industry.</p></div><div className="grid grid-cols-5 gap-[22px] max-[700px]:grid-cols-2 max-[700px]:gap-x-5 max-[700px]:gap-y-[38px]">{footerColumns.map((column) => <div className="flex flex-col items-start gap-[11px]" key={column.title}><h3 className="mb-2.5 text-[10px] tracking-[1px] text-[#f07a4f]">{column.title}</h3>{column.items.map((item) => <button className="group/link border-0 bg-transparent p-0 text-left font-mono text-[10px] leading-[1.45] text-[#c2c9c4] transition-all duration-150 hover:translate-x-1 hover:text-[#f1f0e9]" key={item} onClick={() => item === 'Free Audit' || item === 'View all states' ? onOpenAudit() : undefined}>{item}<span className="ml-1 inline-block text-[#f07a4f] opacity-0 transition-opacity group-hover/link:opacity-100">↗</span></button>)}</div>)}</div></div><div className="flex justify-between gap-5 pt-[22px] max-[700px]:flex-wrap max-[700px]:leading-[1.8]"><span>© 2026 Airside Digital</span><span>Serving HVAC teams nationwide</span><a className="transition-colors hover:text-[#f07a4f]" href="mailto:hello@airsidedigital.co">hello@airsidedigital.co</a><span><a className="transition-colors hover:text-[#f07a4f]" href="#top">Privacy Policy</a> <a className="ml-[18px] text-[#aab3ab] transition-colors hover:text-[#f07a4f]" href="#top">Terms of Service</a></span></div></footer>
}
