import { TransactionCall } from "./transaction";

export function callFund(
  contractAddress: string,
  amount: string,
  asset: "ETH" | "USDC"
): TransactionCall {
  if (!contractAddress) {
    throw new Error("Contract address is required");
  }

  const numAmount = parseFloat(amount);

  if (asset === "ETH") {
    return {
      to: contractAddress as `0x${string}`,
      abi: [
        {
          type: "function",
          name: "donateETH",
          inputs: [] as const,
          outputs: [] as const,
          stateMutability: "payable" as const,
        },
      ],
      functionName: "donateETH",
      value: BigInt(numAmount * 10 ** 18), // Convert ETH to Wei
    };
  } else {
    return {
      to: contractAddress as `0x${string}`,
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
      ] as const,
      functionName: "donateERC20",
      args: [
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", // USDC address
        BigInt(numAmount * 10 ** 6), // Convert to USDC decimals
      ],
    };
  }
}
