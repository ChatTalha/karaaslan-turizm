"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const menuGroups = [
  {
    label: "Kurumsal",
    eyebrow: "Karaaslan'ı tanıyın",
    images: [
      { src: "/images/menu/corporate-building.webp", alt: "Karaaslan Turizm kurumsal yapı" },
      { src: "/images/menu/corporate-contract.webp", alt: "Kurumsal iş birliği sözleşmesi" },
    ],
    links: [
      ["Hakkımızda", "/kurumsal#hakkimizda"],
      ["Misyon ve Vizyon", "/kurumsal#misyon-vizyon"],
      ["Çevre Politikası", "/kurumsal#cevre"],
      ["Kalite Politikası", "/kurumsal#kalite"],
      ["İş Sağlığı ve Güvenliği", "/kurumsal#isg"],
      ["Bilgi Güvenliği", "/kurumsal#bilgi-guvenligi"],
    ],
  },
  {
    label: "Hizmetler",
    eyebrow: "Ulaşım çözümleri",
    images: [
      { src: "/images/menu/services-journey.webp", alt: "Karaaslan Turizm servis aracı" },
      { src: "/images/menu/services-overview.webp", alt: "Personel, okul ve etkinlik taşımacılığı" },
    ],
    links: [
      ["Personel Taşımacılığı", "/personel-tasimaciligi"],
      ["Okul Taşımacılığı", "/okul-tasimaciligi"],
      ["Etkinlik Hizmeti", "/etkinlik-tasimaciligi"],
    ],
  },
  {
    label: "Filomuz",
    eyebrow: "Modern araçlar",
    images: [
      { src: "/images/menu/fleet-night.webp", alt: "Karaaslan Turizm araç filosu" },
      { src: "/images/menu/fleet-sunset.webp", alt: "Mercedes ve Fiat servis araçları" },
    ],
    links: [
      ["Mercedes Sprinter 19+1", "/filomuz#mercedes-sprinter"],
      ["Fiat Ducato 16+1", "/filomuz#fiat-ducato"],
      ["Tüm araçları inceleyin", "/filomuz"],
    ],
  },
  {
    label: "İletişim",
    eyebrow: "Bize ulaşın",
    images: [
      { src: "/images/menu/contact-support.webp", alt: "Karaaslan Turizm iletişim desteği" },
      { src: "/images/menu/contact-route.webp", alt: "İstanbul yolunda servis aracı" },
    ],
    links: [
      ["Teklif ve iletişim", "/#iletisim"],
      ["Şoför başvurusu", "/sofor-basvuru"],
      ["WhatsApp", "https://wa.me/905011744166"],
    ],
  },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [pinnedMenu, setPinnedMenu] = useState<string | null>(null);
  const closeMenus = () => {
    setMobileOpen(false);
    setActiveMenu(null);
    setPinnedMenu(null);
  };
  const closeMobile = () => setMobileOpen(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenus();
    };

    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!(event.target as Element).closest(".mega-item")) {
        setActiveMenu(null);
        setPinnedMenu(null);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    window.addEventListener("pointerdown", closeOnOutsideClick);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("pointerdown", closeOnOutsideClick);
    };
  }, []);

  const handleMenuLink = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    closeMenus();
    if (pathname === "/kurumsal" && href.startsWith("/kurumsal#")) {
      event.preventDefault();
      const hash = href.split("#")[1];
      window.history.pushState(null, "", `#${hash}`);
      window.dispatchEvent(new HashChangeEvent("hashchange"));
      document.querySelector(".corporate-tabs-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="site-header">
      <div className="section-wrap header-inner">
        <Link href="/" aria-label="Karaaslan Turizm ana sayfa" className="logo-window" onClick={closeMobile}>
          <Image src="/karaaslan-logo-transparent.png" alt="Karaaslan Turizm" width={1536} height={1024} priority />
        </Link>

        <nav aria-label="Ana menü" className="desktop-nav">
          <Link href="/" className="desktop-home">Ana Sayfa</Link>
          {menuGroups.map((group) => (
            <div
              key={group.label}
              className={`mega-item ${activeMenu === group.label ? "is-open" : ""}`}
              onMouseEnter={() => setActiveMenu(group.label)}
              onMouseLeave={() => setActiveMenu(pinnedMenu)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node)) setActiveMenu(pinnedMenu);
              }}
            >
              <button
                type="button"
                aria-expanded={activeMenu === group.label}
                onFocus={() => setActiveMenu(group.label)}
                onClick={() => {
                  const shouldClose = pinnedMenu === group.label;
                  setPinnedMenu(shouldClose ? null : group.label);
                  setActiveMenu(shouldClose ? null : group.label);
                }}
              >
                {group.label}
              </button>
              <div className="mega-panel">
                <Image
                  src={group.images[0].src}
                  alt={group.images[0].alt}
                  fill
                  sizes="680px"
                  className="mega-panel-image"
                />
                <div className="mega-panel-shade" />
                <div className="mega-intro">
                  <div className="mega-intro-thumb">
                    <Image
                      src={group.images[1].src}
                      alt={group.images[1].alt}
                      fill
                      sizes="108px"
                    />
                  </div>
                  <div className="mega-intro-copy">
                    <span>{group.eyebrow}</span>
                    <strong>{group.label}</strong>
                  </div>
                </div>
                <div className="mega-links">
                  {group.links.map(([label, href], index) => (
                    <Link key={`${label}-${href}`} href={href} onClick={(event) => handleMenuLink(event, href)}>
                      <span>0{index + 1}</span>{label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </nav>

        <nav className="header-socials" aria-label="Sosyal medya hesapları">
          <a
            className="instagram-link"
            href="https://www.instagram.com/karaaslan.turizm/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Karaaslan Turizm Instagram hesabı"
          >
            <span className="instagram-mark" aria-hidden="true"><span /></span>
          </a>
          <a
            href="https://x.com/karaaslan_trzm"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Karaaslan Turizm X hesabı"
          >
            X
          </a>
        </nav>

        <a href="tel:+905011744166" className="header-call">
          <span className="header-call-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M7.2 3.5 9.6 7.8 7.9 9.5c.9 2.2 2.7 4 4.9 4.9l1.7-1.7 4.3 2.4c.3.2.5.5.4.9-.3 2.3-2.2 4-4.5 4C8.8 20 4 15.2 4 9.3 4 7 5.7 5.1 8 4.8c.4-.1.8.1.9.4Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="header-call-copy">
            <small>Bizi arayın</small>
            <strong>+90 501 174 41 66</strong>
          </span>
        </a>
        <button
          type="button"
          className={`menu-toggle ${mobileOpen ? "is-open" : ""}`}
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
        >
          <span /><span /><span />
        </button>
      </div>

      <div id="mobile-navigation" className={`mobile-navigation ${mobileOpen ? "is-open" : ""}`}>
        <div className="section-wrap mobile-navigation-inner">
          <Link href="/" onClick={closeMobile} className="mobile-home">Ana Sayfa</Link>
          {menuGroups.map((group) => (
            <details key={group.label} className="mobile-group">
              <summary>{group.label}<span aria-hidden="true">+</span></summary>
              <div>
                <div className="mobile-menu-visual">
                  <Image
                    src={group.images[0].src}
                    alt={group.images[0].alt}
                    fill
                    sizes="calc(100vw - 48px)"
                  />
                </div>
                {group.links.map(([label, href]) => (
                  <Link key={`${label}-${href}`} href={href} onClick={closeMobile}>{label}</Link>
                ))}
              </div>
            </details>
          ))}
          <div className="mobile-quick-actions">
            <a href="tel:+905011744166">Hemen arayın</a>
            <Link href="/sofor-basvuru" onClick={closeMobile}>Şoför başvurusu</Link>
          </div>
          <nav className="mobile-socials" aria-label="Sosyal medya hesapları">
            <span>Bizi takip edin</span>
            <a className="mobile-instagram-link" href="https://www.instagram.com/karaaslan.turizm/" target="_blank" rel="noopener noreferrer">
              <span className="instagram-mark" aria-hidden="true"><span /></span> Instagram
            </a>
            <a href="https://x.com/karaaslan_trzm" target="_blank" rel="noopener noreferrer">X</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
