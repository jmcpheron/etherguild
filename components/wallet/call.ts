export function callFund(contractAddress: string | null) {
  if (!contractAddress) return null;

  return {
    to: contractAddress as `0x${string}`,
    abi: [
      {
        type: "function",
        name: "click",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable",
      },
    ] as const,
    functionName: "click",
    args: [],
  };
}
