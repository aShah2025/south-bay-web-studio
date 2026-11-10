import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://southbayweb.vercel.app"),
  title: {
    default: "South Bay Web Studios | Web Design for San Jose Small Businesses",
    template: "%s | South Bay Web Studios",
  },
  description:
    "Modern, mobile-first websites for San Jose small businesses. Fast turnaround and one-time pricing from $300, with hosting included.",
  openGraph: {
    title: "South Bay Web Studios",
    description: "Modern websites for San Jose small businesses. One simple, one-time price.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2563eb",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <a
          href="#main"
          className="fixed left-4 top-[-80px] z-[60] rounded-lg bg-white p-3 font-semibold shadow focus:top-3"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
