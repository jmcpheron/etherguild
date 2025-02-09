"use client";
import { WalletDefault } from "@coinbase/onchainkit/wallet";

export function WalletComponents() {
  // const buttonStyle =
  //   "!h-12 !px-8 !py-3 !rounded-md !text-base !font-medium !bg-primary hover:!bg-primary/90 !text-white [&_.ock-text-inverse]:!text-white !min-w-[153px] !inline-flex !items-center !justify-center";

  return (
    <>
      <WalletDefault />
      {/* <ConnectWallet className={buttonStyle}>
        <ConnectWalletText className="text-base font-normal">
          Connect
        </ConnectWalletText>
      </ConnectWallet>
      <WalletDropdown>
        <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
          <Avatar />
          <Name />
          <Address />
          <EthBalance />
        </Identity>
        <WalletDropdownBasename />
        <WalletDropdownLink icon="wallet" href="https://keys.coinbase.com">
          Wallet
        </WalletDropdownLink>
        <WalletDropdownFundLink />
        <WalletDropdownDisconnect />
      </WalletDropdown>
    </Wallet> */}
    </>
  );
}
