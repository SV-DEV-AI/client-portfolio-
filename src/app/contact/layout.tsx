import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Morphed Studios | Let's Collaborate",
  description: "Get in touch with Morphed Studios to discuss your next high-end live event, broadcast, or AV project.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
