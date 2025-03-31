import { Hero } from "@/components/hero";

const discordBenefits = [
  {
    emoji: "🗣️",
    title: "Community Discussion",
    description:
      "Join a vibrant community of ETH supporters and engage in meaningful discussions about Ethereum.",
  },
  {
    emoji: "📢",
    title: "Guild Announcements",
    description:
      "Stay up-to-date with the latest Guild updates, quests, and community initiatives.",
  },
  {
    emoji: "🤝",
    title: "Networking Opportunities",
    description:
      "Connect with fellow ETH enthusiasts, builders, and researchers to expand your network.",
  },
];

export default function Discord() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero
        imagePath="/image/ether-guild-discord.png"
        splashText="Join Our Discord"
      />

      <div className="container mx-auto px-4 -mt-[15%] relative z-10">
        <div className="bg-card rounded-xl shadow-xl p-8 md:p-12 space-y-16 max-w-6xl mx-auto">
          {/* Join Our Community */}
          <section className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary/80 to-primary bg-clip-text text-transparent">
              Join the Ether Guild Community
            </h2>
            <p className="text-xl leading-relaxed">
              Connect with like-minded ETH supporters, participate in discussions, 
              and stay informed about Guild activities and quests.
            </p>
          </section>

          {/* Discord Invitation */}
          <section className="bg-accent/20 rounded-xl p-8 hover:bg-accent/30 transition-colors duration-300 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Join Our Discord Server
            </h2>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed mb-8">
              Our Discord server is the central hub for all Ether Guild activities. 
              Join us to participate in discussions, learn about upcoming events, 
              and connect with the community.
            </p>
            <a 
              href="https://discord.gg/dAM6jwm9Ww" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
            >
              Join Discord
            </a>
          </section>

          {/* What to Expect */}
          <section className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">
              What to Expect
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Our Discord server is organized into various channels to facilitate different types of interactions and discussions. 
              You&apos;ll find dedicated spaces for general chat, announcements, quests, and technical discussions.
            </p>
            <p className="text-lg leading-relaxed mb-12">
              Community members are encouraged to actively participate, share ideas, and collaborate on initiatives that support ETH 
              and the broader Ethereum ecosystem.
            </p>
          </section>

          <section className="space-y-8">
            <div className="bg-gradient-to-b from-accent/10 to-transparent rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-8 text-center">
                Discord Benefits
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                {discordBenefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center p-6 rounded-lg
                             hover:bg-accent/20 transition-colors duration-300"
                  >
                    <span className="text-4xl mb-4">{benefit.emoji}</span>
                    <h4 className="font-semibold text-lg mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Community Guidelines */}
          <section className="bg-accent/10 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Community Guidelines
            </h2>
            <ul className="space-y-3 max-w-3xl mx-auto">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <p>Be respectful and considerate of other community members.</p>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <p>Stay on topic in dedicated channels.</p>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <p>No spam, inappropriate content, or harassment will be tolerated.</p>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <p>Follow the guidance of moderators and Guild officers.</p>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
} 