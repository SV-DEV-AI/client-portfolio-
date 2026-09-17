import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Sajal Singh & Morphed Studios",
  description: "Learn more about Morphed Studios, our leadership under Sajal Singh, and our creative team.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
