"use client";

import { ETH } from "@/components/svg/eth";
import { USDC } from "../svg/usdc";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import type { LifecycleStatus } from "@coinbase/onchainkit/transaction";
import {
  Transaction,
  TransactionButton,
  TransactionStatus,
  TransactionStatusAction,
  TransactionStatusLabel,
} from "@coinbase/onchainkit/transaction";
import {
  ConnectWallet,
  ConnectWalletText,
  Wallet,
} from "@coinbase/onchainkit/wallet";
import { useCallback, useState, useId } from "react";
import { useAccount } from "wagmi";

const SEPOLIA_CHAIN_ID = 11155111;
//const BASE_SEPOLIA_CHAIN_ID = 84532;

export default function TransactionComponents({
  text,
  call,
  className,
}: {
  text: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  call: any;
  className?: string;
}) {
  const { address } = useAccount();
  const [isEditing, setIsEditing] = useState(false);
  const [amount, setAmount] = useState("0.0");
  const [selectedToken, setSelectedToken] = useState({
    symbol: "ETH",
    icon: ETH,
  });
  const transactionId = useId();

  const handleOnStatus = useCallback((status: LifecycleStatus) => {
    console.log("LifecycleStatus", status);
  }, []);

  const buttonStyle =
    "!h-12 !px-8 !py-3 !rounded-md !text-base !font-medium !bg-primary hover:!bg-primary/90 !text-white [&_.ock-text-inverse]:!text-white !min-w-[153px] !inline-flex !items-center !justify-center w-full";

  return address ? (
    <>
      <Transaction
        className="gap-0"
        chainId={SEPOLIA_CHAIN_ID}
        calls={[call]}
        onStatus={handleOnStatus}
      >
        {!isEditing && (
          <Button
            className={cn(buttonStyle, "text-base font-normal", className)}
            onClick={() => setIsEditing(true)}
          >
            Fund
          </Button>
        )}
        {isEditing && (
          <div className="inline-flex items-center rounded-md h-12 border border-input">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-16 min-w-16 px-2 py-2 bg-transparent focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
            <div className="grow"></div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center gap-2 p-2 mr-1 py-2 bg-muted rounded-md cursor-pointer">
                  <div className="w-6 h-6">
                    <selectedToken.icon />
                  </div>
                  <span>{selectedToken.symbol}</span>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem
                  onClick={() => setSelectedToken({ symbol: "ETH", icon: ETH })}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6">
                      <ETH />
                    </div>
                    <span>ETH</span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() =>
                    setSelectedToken({ symbol: "USDC", icon: USDC })
                  }
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6">
                      <USDC />
                    </div>
                    <span>USDC</span>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <div className="flex flex-col gap-0.5 ml-1 mr-2">
              <TransactionButton
                className="!h-5 !w-5 !p-0 !min-w-0 !rounded-none !bg-transparent hover:!bg-transparent !inline-flex !items-center !justify-center"
                text={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 text-green-500"
                  >
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                }
                disabled={false}
                data-transaction-button={transactionId}
              />
              <button
                className="h-5 w-5 flex items-center justify-center text-red-500 hover:text-red-600"
                onClick={() => setIsEditing(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
                </svg>
              </button>
            </div>
          </div>
        )}
        <TransactionStatus>
          <TransactionStatusLabel />
          <TransactionStatusAction />
        </TransactionStatus>
      </Transaction>
    </>
  ) : (
    <Wallet>
      <ConnectWallet className={cn(buttonStyle, className)}>
        <ConnectWalletText className="text-base font-normal">
          Fund
        </ConnectWalletText>
      </ConnectWallet>
    </Wallet>
  );
}
