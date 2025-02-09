"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { OnchainKitProvider } from "@coinbase/onchainkit";
import { sepolia } from "viem/chains";
import "@coinbase/onchainkit/styles.css";

const queryClient = new QueryClient();

export function Providers({ children }: { children: ReactNode }) {
  return (
    <OnchainKitProvider
      apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY}
      chain={sepolia}
      config={{ appearance: { mode: "auto", theme: "default" } }}
    >
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </OnchainKitProvider>
  );
}
