import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { WhatsappButton } from "@/components/whatsapp-button";
import { BackToTop } from "@/components/back-to-top";
import { AccessibilityWidget } from "@/components/accessibility-widget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Studio Ido | מעצב אתרים ואפליקציות",
  description:
    "פורטפוליו פרילנסר לעיצוב אתרים, אפליקציות מובייל, אסטרטגיית מוצר וחוויות דיגיטליות מלוטשות.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        <div className="noise" />
        <Header />
        {children}
        <Footer />
        <AccessibilityWidget />
        <WhatsappButton />
        <BackToTop />
      </body>
    </html>
  );
}
