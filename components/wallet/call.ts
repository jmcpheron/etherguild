import { encodeFunctionData, type Address, type Hex } from "viem";
import { MAIN_QUEST_ADDRESS } from "@/app/constants";

export type Call = {
  to: Address;
  data: Hex;
  value: bigint;
};

export function callFund(
  contractAddress: string = MAIN_QUEST_ADDRESS,
  amount: string,
  asset: "ETH" | "USDC"
): Call {
  const address = contractAddress || MAIN_QUEST_ADDRESS;
  if (!address) {
    throw new Error("Contract address is required");
  }

  const numAmount = parseFloat(amount || "0");

  if (asset === "ETH") {
    const data = encodeFunctionData({
      abi: [
        {
          type: "function",
          name: "donateETH",
          inputs: [],
          outputs: [],
          stateMutability: "payable",
        },
      ],
      functionName: "donateETH",
    });

    const tx = {
      to: address as Address,
      data,
      value: BigInt(numAmount * 10 ** 18),
    };
    return tx;
  } else {
    const data = encodeFunctionData({
      abi: [
        {
          type: "function",
          name: "donateERC20",
          inputs: [
            { name: "token", type: "address" },
            { name: "amount", type: "uint256" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
      ],
      functionName: "donateERC20",
      args: [
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48" as Address,
        BigInt(numAmount * 10 ** 6),
      ],
    });

    return {
      to: address as Address,
      data,
      value: BigInt(0),
    };
  }
}
