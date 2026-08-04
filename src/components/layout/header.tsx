import Image from "next/image";
import Link from "next/link";
import { navigationItems } from "@/lib/constants";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="section-wrap flex h-20 items-center justify-between gap-8">
        <Link href="/" aria-label="Karaaslan Turizm ana sayfa" className="logo-window">
          <Image src="/karaaslan-logo.jpeg" alt="Karaaslan Turizm" width={1536} height={1024} priority />
        </Link>
        <nav aria-label="Ana menü" className="hidden items-center gap-7 text-xs font-bold uppercase tracking-wide lg:flex">
          {navigationItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">{item.label}</Link>
          ))}
        </nav>
        <a href="tel:+905011744166" className="header-call">
          <span>Bizi arayın</span>
          <strong>+90 501 174 41 66</strong>
        </a>
      </div>
    </header>
  );
}
