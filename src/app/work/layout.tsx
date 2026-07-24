import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work",
  description: "View the portfolio of Morphed Studios showcasing our premium broadcast design and AV production projects.",
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
