import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work & Projects",
  description: "View the portfolio of Morphed Studios showcasing our premium broadcast design and AV production projects.",
  alternates: {
    canonical: "/work",
  },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
