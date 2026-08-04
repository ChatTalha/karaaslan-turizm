import Link from "next/link";

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-brand-dark text-white">
      <div className="mx-auto flex min-h-[70vh] max-w-6xl items-center px-5 py-20">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-red-300">
            Güvenli ve konforlu yolculuk
          </p>
          <h1 className="text-4xl font-bold leading-tight sm:text-6xl">
            Türkiye&apos;nin dört bir yanına güvenle ulaşın.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Karaaslan Turizm ile seyahatinizi kolayca planlayın. Modern araçlar,
            deneyimli ekip ve misafir odaklı hizmet anlayışı.
          </p>
          <Link
            href="#iletisim"
            className="mt-8 inline-flex rounded-full bg-brand px-6 py-3 font-semibold transition hover:bg-red-700"
          >
            Bize Ulaşın
          </Link>
        </div>
      </div>
    </section>
  );
}
