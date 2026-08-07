import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.karaaslanturizm.com"),
  title: {
    default: "Karaaslan Turizm | İstanbul Personel Servisi",
    template: "%s | Karaaslan Turizm",
  },
  description:
    "İstanbul'da personel servisi, okul taşımacılığı ve etkinlik transferi için güvenli, planlı ve zamanında ulaşım hizmetleri.",
  applicationName: "Karaaslan Turizm",
  category: "transportation",
  alternates: { canonical: "/" },
  keywords: [
    "İstanbul personel servisi",
    "personel taşımacılığı",
    "okul servisi",
    "öğrenci taşımacılığı",
    "etkinlik transferi",
    "kurumsal taşımacılık",
    "Karaaslan Turizm",
  ],
  creator: "Karaaslan Turizm",
  publisher: "Karaaslan Turizm",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Karaaslan Turizm",
    title: "Karaaslan Turizm | İstanbul Personel Servisi",
    description:
      "Personel, okul ve etkinlik taşımacılığında güvenli, planlı ve zamanında ulaşım.",
    images: ["/images/home/hero-personnel.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Karaaslan Turizm | İstanbul Personel Servisi",
    description:
      "Personel, okul ve etkinlik taşımacılığında güvenli, planlı ve zamanında ulaşım.",
    images: ["/images/home/hero-personnel.webp"],
  },
};

const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "Organization"],
      "@id": "https://www.karaaslanturizm.com/#business",
      name: "Karaaslan Turizm",
      url: "https://www.karaaslanturizm.com",
      logo: "https://www.karaaslanturizm.com/karaaslan-logo-transparent.png",
      image: "https://www.karaaslanturizm.com/images/home/about-company-team.png",
      description:
        "İstanbul'da personel servisi, okul taşımacılığı ve etkinlik transferi hizmetleri sunan kurumsal ulaşım firması.",
      email: "info@karaaslanturizm.com",
      telephone: "+90 501 174 41 66",
      priceRange: "₺₺",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pendik",
        addressRegion: "İstanbul",
        addressCountry: "TR",
      },
      areaServed: { "@type": "City", name: "İstanbul" },
      sameAs: [
        "https://www.instagram.com/karaaslan.turizm/",
        "https://x.com/karaaslan_trzm",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+90 501 174 41 66",
        email: "info@karaaslanturizm.com",
        contactType: "customer service",
        areaServed: "TR",
        availableLanguage: "Turkish",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Taşımacılık Hizmetleri",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Personel Taşımacılığı", url: "https://www.karaaslanturizm.com/personel-tasimaciligi" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Okul Taşımacılığı", url: "https://www.karaaslanturizm.com/okul-tasimaciligi" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Etkinlik Transferi", url: "https://www.karaaslanturizm.com/etkinlik-tasimaciligi" } },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.karaaslanturizm.com/#website",
      url: "https://www.karaaslanturizm.com",
      name: "Karaaslan Turizm",
      inLanguage: "tr-TR",
      publisher: { "@id": "https://www.karaaslanturizm.com/#business" },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr">
      <body className="flex min-h-screen flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
