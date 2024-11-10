"use client";

import { useState, useEffect } from "react";
import "../../public/globals.css";
import { ScrollToTopButton } from "@/components/Buttons/ScrollToTop";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { persistQueryClient } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";

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
            staleTime: 60 * 60 * 1000, // 1 hour for freshness
            retry: 1,
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  useEffect(() => {
    const persister = createSyncStoragePersister({
      storage: window.localStorage, // Using localStorage to persist cache data
    });

    persistQueryClient({
      queryClient,
      persister,
    });
  }, [queryClient]);

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
