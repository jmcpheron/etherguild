import { Hero } from "@/components/hero";
import { MainQuest } from "@/components/main-quest";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero
        imagePath="/image/ether-guild-hero.png"
        splashText="Fund ETH Initiatives"
      />
      <div className="-mt-24 relative z-10">
        <MainQuest />
      </div>
    </main>
  );
}
