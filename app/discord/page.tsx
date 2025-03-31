import { Hero } from "@/components/hero";

export default function Discord() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero
        imagePath="/image/ether-guild-quests.png"
        splashText="Join Our Discord"
      />

      <div className="container mx-auto px-4 -mt-[15%] relative z-10">
        <div className="bg-card rounded-xl shadow-xl p-8 md:p-12 space-y-8 max-w-3xl mx-auto">
          <section className="text-center">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary/80 to-primary bg-clip-text text-transparent">
              Join the Ether Guild Community
            </h2>
            <p className="text-xl leading-relaxed mb-8">
              Connect with fellow ETH supporters, participate in discussions, and stay updated on the latest Guild initiatives.
            </p>
            <a
              href="https://discord.gg/dAM6jwm9Ww"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors duration-300"
            >
              Join Discord Server
            </a>
          </section>

          <section className="bg-accent/20 rounded-xl p-8 mt-8">
            <h3 className="text-xl font-semibold mb-4 text-center">
              What You&apos;ll Find in Our Discord
            </h3>
            <ul className="space-y-4 text-lg">
              <li className="flex items-center">
                <span className="mr-2">💬</span>
                Active community discussions about ETH and Ethereum
              </li>
              <li className="flex items-center">
                <span className="mr-2">📢</span>
                Latest updates on Guild initiatives and quests
              </li>
              <li className="flex items-center">
                <span className="mr-2">🤝</span>
                Networking opportunities with fellow ETH supporters
              </li>
              <li className="flex items-center">
                <span className="mr-2">🎯</span>
                Direct access to Guild officers and team members
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
} 