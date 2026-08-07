import type { MetadataRoute } from "next";

const siteUrl = "https://www.karaaslanturizm.com";
const lastModified = new Date("2026-08-08");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/kurumsal`, lastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteUrl}/filomuz`, lastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteUrl}/personel-tasimaciligi`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/okul-tasimaciligi`, lastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteUrl}/etkinlik-tasimaciligi`, lastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteUrl}/sofor-basvuru`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/gizlilik-politikasi`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/kvkk-aydinlatma-metni`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/cerez-politikasi`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/site-kullanim-kosullari`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
