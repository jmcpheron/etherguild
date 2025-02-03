import { Quest } from "@/components/quest";

export function MainQuest() {
  return (
    <div className="relative px-4 max-w-7xl mx-auto w-full">
      <Quest
        isMain
        title="Launch Ether Guild"
        description="Fund the initial development and launch of Ether Guild, a decentralized platform for coordinating Ethereum public goods initiatives."
        link="/quest/main"
        percent={90}
      />
    </div>
  );
}
