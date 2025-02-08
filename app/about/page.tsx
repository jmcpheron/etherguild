import { Hero } from "@/components/hero";
import Image from "next/image";
import { FAQ } from "@/components/about/faq";
import { GuildOfficers } from "../../components/about/guild-officers";

const guidingTenets = [
  {
    emoji: "⚔️",
    title: "Unite Support for ETH",
    description: "Bringing together builders, researchers, and advocates to reinforce ETH's role in securing Ethereum."
  },
  {
    emoji: "💰",
    title: "Fund Impactful Initiatives",
    description: "Directing resources toward projects that enhance ETH's utility, stability, and adoption."
  },
  {
    emoji: "🛡",
    title: "Engage the Community Through Quests",
    description: "Creating interactive challenges and incentives that encourage participation and amplify ETH's importance."
  }
];

export default function About() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero
        imagePath="/image/ether-guild-quests.png"
        splashText="About Ether Guild"
      />

      <div className="container mx-auto px-4 -mt-[15%] relative z-10">
        <div className="bg-card rounded-xl shadow-xl p-8 md:p-12 space-y-16 max-w-6xl mx-auto">
          {/* Mission Statement */}
          <section className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary/80 to-primary bg-clip-text text-transparent">
              Mission Statement
            </h2>
            <p className="text-xl leading-relaxed">
              The Ether Guild is a community-driven initiative to fund and support
              Ethereum-based projects and initiatives.
            </p>
          </section>

          {/* Guild Officers */}
          <GuildOfficers />

          {/* Guild Treasury */}
          <section className="bg-accent/20 rounded-xl p-8 hover:bg-accent/30 transition-colors duration-300">
            <h2 className="text-2xl font-bold mb-4 text-center">Guild Treasury</h2>
            <p className="text-lg max-w-3xl mx-auto text-center leading-relaxed">
              The Guild Treasury is a vault controlled by Guild officers with one purpose:
              Fund initiatives supporting the furtherance of ETH as an ecosystem.
            </p>
          </section>

          {/* Guild Strategy */}
          <section className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Guild Strategy</h2>
            <blockquote className="text-xl italic text-center mb-8 relative">
              <span className="absolute -left-4 -top-4 text-6xl text-primary/20">"</span>
              <p className="relative z-10">Alone we can do so little; together we can do so much.</p>
              <span className="absolute -right-4 bottom-0 text-6xl text-primary/20">"</span>
            </blockquote>
            <p className="text-lg leading-relaxed text-center mb-4">
              We have the tools to coordinate, it's time for us to use them. To achieve our mission,
              let's build a mechanism that incentivizes supporting ETH in a way that is both fun and rewarding.
            </p>
            <p className="text-lg leading-relaxed text-center mb-12">
                Guild Quests are an opportunity for the community to signal support through fine-grained,
                direct funding and achieve shared goals that support ETH, the money, in service of Ethereum, the computer.
              </p>
          </section>

          <section className="space-y-8">
            <div className="bg-gradient-to-b from-accent/10 to-transparent rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-8 text-center">Guiding Tenets</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {guidingTenets.map((tenet, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center p-6 rounded-lg
                             hover:bg-accent/20 transition-colors duration-300"
                  >
                    <span className="text-4xl mb-4">{tenet.emoji}</span>
                    <h4 className="font-semibold text-lg mb-2">{tenet.title}</h4>
                    <p className="text-muted-foreground">{tenet.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-lg text-center max-w-3xl mx-auto leading-relaxed">
              Through collaboration, funding, and action, Ether Guild ensures that ETH remains
              the economic backbone of Ethereum—because a strong foundation secures a lasting future.
            </p>
          </section>

          {/* FAQ */}
          <FAQ />
        </div>
      </div>
    </main>
  );
}
