import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="hero-section text-white">
      <Image
        src="/images/home/hero-personnel.webp"
        alt="Karaaslan Turizm servis araçları İstanbul'da"
        fill
        priority
        sizes="100vw"
        className="hero-photo"
      />
      <div className="hero-shade" />
      <div className="section-wrap relative z-10 flex min-h-[680px] items-center py-24">
        <div className="max-w-3xl">
          <p className="eyebrow text-red-400">Karaaslan Turizm</p>
          <h1 className="mt-5 text-5xl font-extrabold leading-[1.04] tracking-tight sm:text-7xl">
            Güvenli ulaşım,
            <br /> zamanında hizmet.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
            Personel, öğrenci ve etkinlik taşımacılığında şehir içi güvenilir çözüm ortağınız.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="#iletisim" className="button-primary">Teklif alın</Link>
            <a href="https://wa.me/905011744166" className="button-outline-dark">WhatsApp</a>
            <a href="tel:+905011744166" className="button-outline-dark">Bizi arayın</a>
          </div>
        </div>
      </div>
    </section>
  );
}
