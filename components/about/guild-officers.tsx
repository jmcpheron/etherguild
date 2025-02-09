import Image from "next/image";

// Define the interface
export interface Officer {
  name: string;
  house: string;
  logo: string;
}

// Export the officers array with type
export const officers: Officer[] = [
  {
    name: "Ryan Sean Adams",
    house: "Bankless",
    logo: "/image/bankless-logo.png",
  },
  {
    name: "Anthony Sassano",
    house: "The Daily Gwei",
    logo: "/image/gwei-logo.png",
  },
  {
    name: "Tobias Schreier",
    house: "growthepie",
    logo: "/image/growthepie-logo.png",
  },
  {
    name: "Grant Hummer",
    house: "Etherealize",
    logo: "/image/etheralize-logo.png",
  },
  {
    name: "Everdred",
    house: "Metal",
    logo: "/image/metal-logo.png",
  },
];

export function GuildOfficers() {
  return (
    <section className="py-12">
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-center">Guild Officers</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto">
          Our officers guide the Guild&apos;s mission and strategy.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-7xl mx-auto px-4">
        {officers.map((officer, index) => (
          <div
            key={index}
            className="group relative flex flex-col items-center text-center p-6 rounded-xl
                     transition-all duration-300 hover:bg-accent/50
                     hover:shadow-lg hover:-translate-y-1"
          >
            <div className="relative mb-4 transition-transform duration-300 group-hover:scale-105">
              <Image
                src={officer.logo}
                alt={`${officer.house} logo`}
                width={120}
                height={120}
                className="rounded-full shadow-md"
              />
              <div
                className="absolute inset-0 rounded-full ring-2 ring-primary/20
                            group-hover:ring-primary/40 transition-all duration-300"
              />
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-lg tracking-tight">
                {officer.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                of house{" "}
                <span className="font-medium text-primary">
                  {officer.house}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
