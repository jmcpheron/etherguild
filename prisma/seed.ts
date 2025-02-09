import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.quest.createMany({
    data: [
      {
        title: "Launch etherguild.xyz",
        summary:
          "Build and launch the Ether Guild website, a platform for funding and supporting the Ethereum commons.",
        description: "TBD",
        isMain: true,
        isActive: true,
        progress: 90,
      },
      {
        title: "Launch ethismoney.xyz",
        summary: "Build a website that makes the case that ETH is money.",
        description: "TBD",
        isMain: false,
        isActive: true,
        progress: 100,
        link: "https://ethismoney.xyz",
      },
      {
        title: "Funding Event",
        summary: "Host a community funding event to raise ETH for Ether Guild.",
        description: "TBD",
        isMain: false,
        isActive: true,
        progress: 80,
      },
      {
        title: "Ether Guild Pledge",
        summary:
          "Announce a new pledge for Ethereum projects to signal ETH support.",
        description: "TBD",
        isMain: false,
        isActive: true,
        progress: 60,
      },
      {
        title: "Get Base to sign the Ether Guild Pledge",
        summary: "Work with Base to support and sign the Ether Guild Pledge",
        description: "TBD",
        isMain: false,
        isActive: false,
        progress: 0,
      },
      // {
      //   title: "Get the Ethereum logo accepted as a unicode symbol",
      //   summary:
      //     "Campaign for the Ethereum logo to be included in the Unicode standard",
      //   description: "TBD",
      //   isMain: false,
      //   isActive: false,
      //   progress: 30,
      // },
      {
        title: "Produce a short Ethereum animation that hits 1M views",
        summary:
          "Create and promote an engaging animation about Ethereum to reach 1M views",
        description: "TBD",
        isMain: false,
        isActive: false,
        progress: 0,
      },
      {
        title: "Launch an AI agent trained on the knowledge that ETH is money",
        summary:
          "Develop and deploy an AI model focused on Ethereum as a monetary system",
        description: "TBD",
        isMain: false,
        isActive: false,
        progress: 0,
      },
      {
        title:
          "Get an Ethereum opinion piece published in the Wall Street Journal",
        summary: "Write and pitch an opinion piece about Ethereum to the WSJ",
        description: "TBD",
        isMain: false,
        isActive: false,
        progress: 0,
      },
      {
        title: "Share the latest post from Etherealize",
        summary: "Help spread awareness by sharing Etherealize content",
        description: "TBD",
        isMain: false,
        isActive: false,
        progress: 0,
      },
      {
        title: "Donate to Protocol Guild",
        summary:
          "Support Ethereum core development through Protocol Guild donations",
        description: "TBD",
        isMain: false,
        isActive: false,
        progress: 0,
      },
      {
        title: "Add a new dataset to ethismoney.xyz",
        summary: "Contribute data to support the ETH is money narrative",
        description: "TBD",
        isMain: false,
        isActive: false,
        progress: 0,
      },
      {
        title: "Trend the hashtag #EthIsMoney",
        summary: "Coordinate social media campaign to trend #EthIsMoney",
        description: "TBD",
        isMain: false,
        isActive: false,
        progress: 0,
      },
      {
        title: "Raise 3 ETH for an Ether Guild booth at Devcon",
        summary: "Fundraise to establish Ether Guild presence at Devcon",
        description: "TBD",
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
