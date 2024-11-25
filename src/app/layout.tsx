import RootLayoutClient from "@/components/RootLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pearl Hacks",
  description:
    "Pearl Hacks is an inclusive hackathon for women and gender-nonconforming students to explore tech, build projects, and gain mentorship at UNC-Chapel Hill.",
  keywords:
    "Pearl Hacks, hackathon, UNC, women in tech, diversity, mentorship, technology, coding, university hackathon",
  openGraph: {
    title: "Pearl Hacks",
    description:
      "Join Pearl Hacks at UNC-Chapel Hill for a weekend of coding, mentorship, and community for women and gender-nonconforming students in tech.",
    url: "https://pearlhacks.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootLayoutClient>{children}</RootLayoutClient>;
}
