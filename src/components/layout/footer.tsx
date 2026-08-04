import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0d12] py-10 text-slate-400">
      <div className="section-wrap flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
        <div className="logo-window logo-window-dark">
          <Image src="/karaaslan-logo-transparent.png" alt="Karaaslan Turizm" width={1536} height={1024} />
        </div>
        <p className="text-sm">© {new Date().getFullYear()} Karaaslan Turizm. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
}
