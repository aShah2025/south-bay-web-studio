import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://southbayweb.vercel.app"),
  title: {
    default: "South Bay Web Studio | Web Design for San Jose Small Businesses",
    template: "%s | South Bay Web Studio",
  },
  description:
    "Modern, mobile-first websites for San Jose small businesses. Fast turnaround, one-time pricing from $300, zero monthly fees.",
  openGraph: {
    title: "South Bay Web Studio",
    description: "Modern websites for San Jose small businesses. Zero monthly fees.",
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
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <body className="font-sans">
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
