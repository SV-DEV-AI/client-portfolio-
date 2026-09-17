import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creative Services & Capabilities",
  description: "Explore the comprehensive services offered by Morphed Studios including brand identity, film production, and broadcast design.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
