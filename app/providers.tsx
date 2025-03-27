"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useEffect, useState } from "react";
import { OnchainKitProvider } from "@coinbase/onchainkit";
import { WagmiProvider, createConfig, http } from "wagmi";
import { sepolia } from "wagmi/chains";
import "@coinbase/onchainkit/styles.css";
import { coinbaseWallet } from "wagmi/connectors";

export function Providers({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [queryClient] = useState(() => new QueryClient());

  useEffect(() => {
    setMounted(true);
  }, []);

  const wagmiConfig = createConfig({
    chains: [sepolia],
    connectors: [
      coinbaseWallet({
        appName: "onchainkit",
      }),
    ],
    ssr: false,
    transports: {
      [sepolia.id]: http(),
    },
  });

  if (!mounted) {
    return null;
  }

  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <OnchainKitProvider
          apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY}
          chain={sepolia}
          config={{
            appearance: {
              mode: "auto",
              theme: "default",
            },
          }}
        >
          {children}
        </OnchainKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
