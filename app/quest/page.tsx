"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import TransactionComponents from "@/components/wallet/transaction";
import { callFund } from "@/components/wallet/call";

export default function QuestPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section with Fade */}
      <div className="w-full h-[50vh] relative">
        <Image
          src="/image/ether-guild-tavern.png"
          alt="Ether Guild Tavern"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="flex gap-[20px] flex-wrap -mt-[15%] relative z-10 container mx-auto px-4">
        {/* Full Width Quest Info */}
        <div className="w-full"></div>

        {/* Two Equal Columns */}
        <div className="grow">
          <Card className="p-6 border-slate-800/20 dark:border-slate-700/30">
            <h1 className="text-4xl font-bold mb-4">Launch etherguild.xyz</h1>
            <p className=" mb-8">
              Build and launch the Ether Guild website, a platform for funding
              and supporting the Ethereum commons.
            </p>
            <div className="flex justify-end mb-4">
              <div className="col-span-2 sm:col-span-1 lg:w-1/3 xl:w-1/4">
                <TransactionComponents
                  text="Fund"
                  call={callFund}
                  contractAddress={"0xFd843f5158401a48a7689BbAe1976689c6582cdf"}
                />
              </div>
            </div>
            <Progress value={90} className="h-2" />
          </Card>
        </div>

        <div className="grow">
          <Card className="p-6 h-full border-slate-800/20 dark:border-slate-700/30">
            <h2 className="text-2xl font-bold mb-4">Milestones</h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-2  line-through">
                <CheckIcon className="h-4 w-4" />
                Phase 1: Planning & Team Assembly
              </li>
              <li className="flex items-center gap-2  line-through">
                <CheckIcon className="h-4 w-4" />
                Phase 2: Initial Development
              </li>
              <li className="flex items-center gap-2">
                Phase 3: Launch & Community Engagement
              </li>
            </ul>

            <Progress value={66} className="h-2 mt-6" />
          </Card>
        </div>

        {/* Full Width Section */}
        <div className="w-full">
          <Card className="p-6 border-slate-800/20 dark:border-slate-700/30">
            <h2 className="text-2xl font-bold mb-4">Details</h2>
            <div className="">
              <p>
                Ether Guild is a group of hyper-focused ETH supporters, working
                to elevate ETH, the money, in service of Ethereum, the computer.
                <br />
                <br />
                Our first mission is to build a mechanism that encourages
                supporting ETH in a way that is both fun and rewarding. Guild
                Quests are an opportunity for the community to signal support
                through fine-grained, direct funding and participation to
                achieve shared goals that support ETH, the money, in service of
                Ethereum, the computer.
                <br />
                <br />
                For ETH Global, we built a prototype Quest platform with three
                main components:
              </p>
              <br />
              <ul>
                <li>
                  •{" "}
                  <strong>
                    <Link href="https://github.com/its-everdred/etherguild">
                      etherguild.xyz
                    </Link>
                  </strong>{" "}
                  - A Next.js app to visualize quests, store data, and track
                  progress.
                </li>
                <li>
                  •{" "}
                  <strong>
                    <Link href="https://github.com/its-everdred/etherguild-agent">
                      @GuildOfficerEthan
                    </Link>
                  </strong>{" "}
                  - an onchain agent that can create and modify quests based on
                  discussion and requests from other officers.
                </li>
                <li>
                  •{" "}
                  <strong>
                    <Link href="https://github.com/its-everdred/etherguild-protocol">
                      etherguild-protocol
                    </Link>
                  </strong>{" "}
                  - A set of MVP contracts that enable anonymous donations while
                  meeting non-profit legal requirements.
                </li>
              </ul>
            </div>
          </Card>
        </div>

        {/* Two Equal Columns */}
        <div className="grow">
          <Card className="p-6 h-full border-slate-800/20 dark:border-slate-700/30">
            <h2 className="text-2xl font-bold mb-4">Contributors</h2>
            <ul className="space-y-2">
              <li>
                <Link href="https://x.com/its_everdred">everdred</Link>
              </li>
              <li>
                <Link href="https://unifiedesign.com">Adam</Link>
              </li>
              <li>
                <Link href="http://abhinil.in/">Abhinil</Link>
              </li>
              <li>
                <Link href="https://leinss.xyz/about">Tobias</Link>
              </li>
            </ul>
          </Card>
        </div>

        <div className="grow">
          <Card className="p-6 h-full border-slate-800/20 dark:border-slate-700/30">
            <h2 className="text-2xl font-bold mb-4">Rewards</h2>
            <ul className="space-y-2 ">
              <li>• Guild badges for community channel access.</li>
              <li>• Unique NFTs marking early guild involvement.</li>
              <li>• Possible Hackathon prizes?</li>
            </ul>
          </Card>
        </div>
      </div>
      <div className="mb-32"></div>
    </main>
  );
}
