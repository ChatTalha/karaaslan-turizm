"use client";

import { useState } from "react";

const copyItems = [
  {
    label: "01 / Telefon",
    value: "+90 501 174 41 66",
    copyValue: "+905011744166",
    href: "tel:+905011744166",
    action: "Hemen arayın",
  },
  {
    label: "02 / E-posta",
    value: "info@karaaslanturizm.com",
    copyValue: "info@karaaslanturizm.com",
    href: "mailto:info@karaaslanturizm.com",
    action: "E-posta gönderin",
  },
];

export function ContactCards() {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = async (value: string) => {
    await navigator.clipboard.writeText(value);
    setCopied(value);
    window.setTimeout(() => setCopied(null), 1800);
  };

  return (
    <div className="contact-grid">
      {copyItems.map((item) => (
        <article className="contact-card" key={item.label}>
          <span>{item.label}</span>
          <strong>{item.value}</strong>
          <div className="contact-card-actions">
            <a href={item.href}>{item.action}</a>
            <button type="button" onClick={() => copy(item.copyValue)}>
              {copied === item.copyValue ? "Kopyalandı" : "Kopyala"}
            </button>
          </div>
        </article>
      ))}
      <a href="https://wa.me/905011744166" className="contact-card contact-card-red" target="_blank" rel="noopener noreferrer">
        <span>03 / WhatsApp</span>
        <strong>Hızlı iletişim</strong>
        <small>Mesaj gönderin →</small>
      </a>
    </div>
  );
}
