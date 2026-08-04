import Link from "next/link";
import { navigationItems } from "@/lib/constants";

export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex min-h-18 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="text-xl font-bold tracking-tight text-brand">
          Karaaslan Turizm
        </Link>
        <nav aria-label="Ana menü" className="hidden gap-6 text-sm font-medium md:flex">
          {navigationItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-brand">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
