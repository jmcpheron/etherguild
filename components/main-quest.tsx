import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

export function MainQuest() {
  return (
    <div className="relative px-4 max-w-7xl mx-auto w-full">
      {/* Label/Pill */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-full">
        <Image
          src="/image/ether-guild-logo.png"
          alt="EtherGuild Logo"
          width={16}
          height={16}
        />
        <span className="text-sm font-medium">Main Quest</span>
      </div>

      {/* Main Card */}
      <Card className="p-6">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Section */}
          <div className="md:w-3/5">
            <h2 className="text-2xl font-bold mb-4">Launch Ether Guild</h2>
            <p className="text-slate-600 dark:text-slate-300">
              Fund the initial development and launch of Ether Guild, a
              decentralized platform for coordinating Ethereum public goods
              initiatives.
            </p>
          </div>

          {/* Right Section */}
          <div className="md:w-2/5 flex items-center justify-center">
            <Button
              size="lg"
              className="w-full md:w-auto md:text-lg lg:text-xl lg:px-12 lg:py-6 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Fund
            </Button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-6">
          <Progress value={90} className="h-4 bg-slate-200 dark:bg-slate-800">
            <div className="h-full bg-primary" style={{ width: "90%" }} />
          </Progress>
        </div>
      </Card>
    </div>
  );
}
