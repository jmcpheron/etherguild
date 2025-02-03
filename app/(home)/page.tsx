import { Hero } from "@/components/hero";
import { MainQuest } from "@/components/home/main-quest";
import { ActiveQuests } from "@/components/home/active-quests";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero
        imagePath="/image/ether-guild-hero.png"
        splashText="Fund ETH Initiatives"
      />
      <div className="-mt-28 relative z-10">
        <MainQuest />
      </div>
      <div className="mt-16">
        <ActiveQuests />
      </div>
    </main>
  );
}
