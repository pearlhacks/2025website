"use client";
import { useState } from "react";
import type { Metadata } from "next";
import "./globals.css";
import { ScrollToTopButton } from "@/components/Buttons/ScrollToTop";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Move metadata to a separate server component or separate file
// since we can't use 'use client' and export metadata from the same file

// Create a wrapper component for the client-side functionality
function RootLayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Create a new QueryClient instance for each session
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // Add some default options for better UX
            staleTime: 60 * 1000, // 1 minute
            retry: 1,
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <body>
          <main className="min-h-screen font-body font-light flex flex-col items-center bg-background-transition">
            <ScrollToTopButton />
            {children}
          </main>
        </body>
      </html>
    </QueryClientProvider>
  );
}

// Create a server component for the layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootLayoutClient>{children}</RootLayoutClient>;
}
