import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Karaaslan Turizm",
    template: "%s | Karaaslan Turizm",
  },
  description: "Güvenli ve konforlu yolculukların adresi Karaaslan Turizm.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr">
      <body className="flex min-h-screen flex-col antialiased">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
