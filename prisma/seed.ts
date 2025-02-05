import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.quest.createMany({
    data: [
      {
        title: "Launch Ether Guild",
        description:
          "Fund the initial development and launch of Ether Guild, a decentralized platform for coordinating Ethereum public goods initiatives.",
        isMain: true,
        isActive: true,
        progress: 90,
      },
      {
        title: "Build ethismoney.xyz",
        description: "Build a website that makes the case that ETH is money.",
        isMain: false,
        isActive: true,
        progress: 100,
        link: "https://ethismoney.xyz",
      },
      {
        title: "Community funding event",
        description:
          "Host a community funding event to raise funds for the Ether Guild.",
        isMain: false,
        isActive: true,
        progress: 80,
      },
      {
        title: "Ether Guild Pledge",
        description:
          "Introduce a new pledge for Ethereum aligned projects to join the guild.",
        isMain: false,
        isActive: true,
        progress: 60,
      },
      {
        title: "Get Base to sign the Ether Guild Pledge",
        description:
          "Work with Base to support and sign the Ether Guild Pledge",
        isMain: false,
        isActive: false,
        progress: 0,
      },
      {
        title: "Get the Ethereum logo accepted as a unicode symbol",
        description:
          "Campaign for the Ethereum logo to be included in the Unicode standard",
        isMain: false,
        isActive: false,
        progress: 30,
      },
      {
        title: "Produce a short Ethereum animation that hits 1M views",
        description:
          "Create and promote an engaging animation about Ethereum to reach 1M views",
        isMain: false,
        isActive: false,
        progress: 0,
      },
      {
        title: "Launch an AI agent trained on the knowledge that ETH is money",
        description:
          "Develop and deploy an AI model focused on Ethereum as a monetary system",
        isMain: false,
        isActive: false,
        progress: 0,
      },
      {
        title:
          "Get an Ethereum opinion piece published in the Wall Street Journal",
        description:
          "Write and pitch an opinion piece about Ethereum to the WSJ",
        isMain: false,
        isActive: false,
        progress: 0,
      },
      {
        title: "Share the latest post from Etherealize",
        description: "Help spread awareness by sharing Etherealize content",
        isMain: false,
        isActive: false,
        progress: 0,
      },
      {
        title: "Donate to Protocol Guild",
        description:
          "Support Ethereum core development through Protocol Guild donations",
        isMain: false,
        isActive: false,
        progress: 0,
      },
      {
        title: "Add a new dataset to ethismoney.xyz",
        description: "Contribute data to support the ETH is money narrative",
        isMain: false,
        isActive: false,
        progress: 0,
      },
      {
        title: "Trend the hashtag #EthIsMoney",
        description: "Coordinate social media campaign to trend #EthIsMoney",
        isMain: false,
        isActive: false,
        progress: 0,
      },
      {
        title: "Raise 3 ETH for an Ether Guild booth at Devcon",
        description: "Fundraise to establish Ether Guild presence at Devcon",
        isMain: false,
        isActive: false,
        progress: 0,
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
