"use client";

import Link from "next/link";
import type { FormEvent } from "react";

const fieldGroups = [
  {
    title: "Genel Bilgiler",
    fields: [
      ["fullName", "Ad Soyad", "text", true],
      ["phone", "Telefon", "tel", true],
      ["email", "E-posta Adresi", "email", true],
      ["address", "İletişim Adresi", "text", false],
      ["birthPlace", "Doğum Yeri", "text", false],
      ["birthDate", "Doğum Tarihi", "date", false],
      ["city", "Şehir", "text", true],
      ["district", "İlçe", "text", true],
    ],
  },
  {
    title: "Sürücü Bilgileri",
    fields: [
      ["licenseClass", "Ehliyet Sınıfı", "text", true],
      ["licenseYear", "Ehliyet Yılı", "number", true],
      ["srcCertificate", "SRC Belgesi", "text", false],
      ["psychotechnic", "Psikoteknik Belgesi", "text", false],
      ["militaryStatus", "Askerlik Durumu", "text", false],
      ["travelRestriction", "Seyahat Engeli", "text", false],
    ],
  },
  {
    title: "Eğitim ve Deneyim",
    fields: [
      ["education", "Eğitim Durumu", "text", false],
      ["graduationYear", "Mezuniyet Yılı", "number", false],
      ["experienceYears", "Şoförlük Tecrübesi (Yıl)", "number", true],
      ["lastEmployer", "En Son Çalışılan Kuruluş", "text", false],
      ["lastDuration", "Çalışma Süresi", "text", false],
      ["leavingReason", "Ayrılma Nedeni", "text", false],
    ],
  },
] as const;

export function DriverApplicationForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const lines = [
      "Karaaslan Turizm - Şoför Başvurusu",
      "====================================",
      ...fieldGroups.flatMap((group) => [
        "",
        group.title.toUpperCase(),
        "------------------------------------",
        ...group.fields.map(([name, label]) => `${label}: ${String(form.get(name) || "Belirtilmedi")}`),
      ]),
      "",
      "EK BİLGİLER",
      "------------------------------------",
      `Ek Not: ${String(form.get("note") || "Belirtilmedi")}`,
    ];
    const subject = `Şoför Başvurusu - ${String(form.get("fullName") || "Yeni Aday")}`;
    window.location.href = `mailto:info@karaaslanturizm.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
  };

  return (
    <form className="application-form" onSubmit={handleSubmit}>
      {fieldGroups.map((group) => (
        <fieldset key={group.title}>
          <legend>{group.title}</legend>
          <div className="application-fields">
            {group.fields.map(([name, label, type, required]) => (
              <label key={name}>
                <span>{label}{required ? " *" : ""}</span>
                <input name={name} type={type} required={required} min={type === "number" ? "0" : undefined} />
              </label>
            ))}
          </div>
        </fieldset>
      ))}

      <fieldset>
        <legend>Ek Bilgiler</legend>
        <label className="application-full-field">
          <span>Kendinizden ve çalışma tercihinizden kısaca bahsedin</span>
          <textarea name="note" rows={5} />
        </label>
        <label className="application-consent">
          <input type="checkbox" required />
          <span><Link href="/kvkk-aydinlatma-metni" target="_blank">KVKK Aydınlatma Metni&apos;ni</Link> okudum ve başvuru bilgilerimin değerlendirme amacıyla e-posta üzerinden Karaaslan Turizm&apos;e iletileceği konusunda bilgilendirildim.</span>
        </label>
      </fieldset>

      <div className="application-submit">
        <div>
          <strong>Başvurunuz hazır mı?</strong>
          <span>Gönder düğmesi e-posta uygulamanızı açar; bilgiler site üzerinde saklanmaz.</span>
        </div>
        <button type="submit">E-posta ile gönder <span aria-hidden="true">→</span></button>
      </div>
    </form>
  );
}
