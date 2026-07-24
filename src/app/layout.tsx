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
    default: "Morphed Studio by Sajal Singh | Audio-Visual Director",
    template: "%s | Morphed Studio",
  },
  description: "Elite Audio-Visual Director and Broadcast Producer specializing in high-end live events, broadcast design, and immersive AV solutions.",
  keywords: ["Audio-Visual Director", "Broadcast Producer", "Live Events", "Morphed Studio", "Sajal Singh", "AV Solutions", "Broadcast Design"],
  metadataBase: new URL("https://morphed.studio"),
  openGraph: {
    type: "website",
    title: "Morphed Studio by Sajal Singh",
    description: "Elite Audio-Visual Director and Broadcast Producer specializing in high-end live events, broadcast design, and immersive AV solutions.",
    siteName: "Morphed Studio",
    url: "https://morphed.studio",
    images: [{ url: "/morphed-studio-logo.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Morphed Studio by Sajal Singh",
    description: "Elite Audio-Visual Director and Broadcast Producer specializing in high-end live events, broadcast design, and immersive AV solutions.",
    images: ["/morphed-studio-logo.png"],
  },
  alternates: {
    canonical: "https://morphed.studio",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Sajal Singh",
              "jobTitle": "Audio-Visual Director",
              "url": "https://morphed.studio",
              "worksFor": {
                "@type": "Organization",
                "name": "Morphed Studio"
              }
            })
          }}
        />
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
