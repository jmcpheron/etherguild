import { ActiveQuest } from "./active-quest";

const QUESTS = [
  {
    title: "Build ethismoney.xyz",
    description: "Build a website that makes the case that ETH is money.",
    link: "/quest/gitcoin",
    percent: 100,
  },
  {
    title: "Launch community funding event",
    description:
      "Host a community funding event to raise funds for the Ether Guild.",
    link: "/quest/protocol-guild",
    percent: 90,
  },
  {
    title: "Announce the Ether Guild Pledge",
    description:
      "Introduce a new pledge for Ethereum aligned projects to join the guild.",
    link: "/quest/pgn",
    percent: 60,
  },
];

export function ActiveQuests() {
  return (
    <div className="max-w-7xl mx-auto w-full px-4">
      <h2 className="text-3xl font-bold mb-8">Active Quests</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {QUESTS.map((quest) => (
          <ActiveQuest key={quest.link} {...quest} />
        ))}
      </div>
    </div>
  );
}
