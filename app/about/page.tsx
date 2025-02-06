import { Hero } from "@/components/hero";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero
        imagePath="/image/ether-guild-quests.png"
        splashText="About Ether Guild"
      />
      <div className="container mx-auto px-4 -mt-[15%] relative z-10">
        <div className="bg-card rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-6">About Us</h1>
          <p className="text-lg mb-4">
            The Ether Guild is a community-driven initiative to fund and support
            Ethereum-based projects and initiatives.
          </p>
          {/* You can add more content sections here */}
        </div>
      </div>
    </main>
  );
}
