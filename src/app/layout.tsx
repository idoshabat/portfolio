import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { WhatsappButton } from "@/components/whatsapp-button";
import { BackToTop } from "@/components/back-to-top";
import { AccessibilityWidget } from "@/components/accessibility-widget";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["hebrew", "latin"],
  display: "swap",
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
    <html lang="he" dir="rtl" className={rubik.variable}>
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
