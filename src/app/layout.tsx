import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import CustomCursor from "@/components/layout/CustomCursor";
import PageTransition from "@/components/layout/PageTransition";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Sajal Singh | Audio-Visual Director & Broadcast Producer",
    template: "%s | Sajal Singh",
  },
  description: "Elite solo Audio-Visual Director and Broadcast Producer specializing in high-end live events, broadcast design, and immersive AV solutions.",
  openGraph: {
    type: "website",
    title: "Sajal Singh | Audio-Visual Director",
    description: "Elite solo Audio-Visual Director and Broadcast Producer specializing in high-end live events, broadcast design, and immersive AV solutions.",
    siteName: "Sajal Singh Portfolio",
    url: "https://morphed.studio", // Update with actual domain
  },
  twitter: {
    card: "summary_large_image",
    title: "Sajal Singh | Audio-Visual Director",
    description: "Elite solo Audio-Visual Director and Broadcast Producer specializing in high-end live events, broadcast design, and immersive AV solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} dark`}>
      <body className="antialiased font-sans bg-background text-foreground overflow-x-hidden selection:bg-accent-primary selection:text-background">
        <SmoothScroll>
          <CustomCursor />
          <Navbar />
          <PageTransition>
            <main className="min-h-screen">
              {children}
            </main>
          </PageTransition>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
