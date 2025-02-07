import { Avatar, Name } from "@coinbase/onchainkit/identity";
import type { LifecycleStatus } from "@coinbase/onchainkit/transaction";
import {
  Transaction,
  TransactionButton,
  TransactionStatus,
  TransactionStatusAction,
  TransactionStatusLabel,
} from "@coinbase/onchainkit/transaction";
import { ConnectWallet, Wallet } from "@coinbase/onchainkit/wallet";
import { useCallback } from "react";
import { useAccount } from "wagmi";

const BASE_SEPOLIA_CHAIN_ID = 84532;

export default function TransactionComponents({
  text,
  call,
}: {
  text: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  call: any;
}) {
  const { address } = useAccount();

  const handleOnStatus = useCallback((status: LifecycleStatus) => {
    console.log("LifecycleStatus", status);
  }, []);

  return address ? (
    <Transaction
      chainId={BASE_SEPOLIA_CHAIN_ID}
      calls={[call]}
      onStatus={handleOnStatus}
    >
      <TransactionButton className="py-2" text={text} />
      <TransactionStatus>
        <TransactionStatusLabel />
        <TransactionStatusAction />
      </TransactionStatus>
    </Transaction>
  ) : (
    <Wallet>
      <ConnectWallet>
        <Avatar className="h-6 w-6" />
        <Name />
      </ConnectWallet>
    </Wallet>
  );
}
