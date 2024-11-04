import RootLayoutClient from "@/components/RootLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pearl Hacks",
  description: "Sprout with Pearl Hacks on Feb 15th-16th, 2025!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootLayoutClient>{children}</RootLayoutClient>;
}
