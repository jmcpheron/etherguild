import { Avatar, Name } from "@coinbase/onchainkit/identity";
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
import { useCallback } from "react";
import { useAccount } from "wagmi";
import { cn } from "@/lib/utils";

const BASE_SEPOLIA_CHAIN_ID = 84532;

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

  const handleOnStatus = useCallback((status: LifecycleStatus) => {
    console.log("LifecycleStatus", status);
  }, []);

  const buttonStyle =
    "!h-12 !px-8 !py-3 !rounded-md !text-base !font-medium !bg-primary hover:!bg-primary/90 !text-white [&_.ock-text-inverse]:!text-white !min-w-[153px] !inline-flex !items-center !justify-center";

  return address ? (
    <Transaction
      className="gap-0"
      chainId={BASE_SEPOLIA_CHAIN_ID}
      calls={[call]}
      onStatus={handleOnStatus}
    >
      <TransactionButton
        className={cn(buttonStyle, "text-base font-normal", className)}
        text={text}
      />
      <TransactionStatus>
        <TransactionStatusLabel />
        <TransactionStatusAction />
      </TransactionStatus>
    </Transaction>
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
