import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore the comprehensive services offered by Morphed Studios including brand identity, film production, and broadcast design.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
