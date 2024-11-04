"use client";

import { useState } from "react";
import "../../public/globals.css";
import { ScrollToTopButton } from "@/components/Buttons/ScrollToTop";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function RootLayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
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
