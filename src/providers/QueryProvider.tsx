"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export function QueryProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60 * 30, // never Cache patient statistics for  minutes before re-fetching
            refetchOnWindowFocus: false, // Prevents aggressive background flashing during testing
            gcTime: 1000 * 60 * 30, // Cache patient statistics for 30 minutes before garbage collection
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
