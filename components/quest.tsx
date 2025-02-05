import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { QuestProps } from "@/types/quest";

export function Quest({
  title,
  description,
  //link,
  percent,
  isMain = false,
}: QuestProps) {
  const isComplete = percent === 100;

  return (
    <div className="relative">
      {isMain && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-full">
          <Image
            src="/image/ether-guild-logo.png"
            alt="EtherGuild Logo"
            width={16}
            height={16}
          />
          <span className="text-sm font-medium">Main Quest</span>
        </div>
      )}

      <Card className="p-6 flex flex-col h-full">
        <div className="flex-grow flex flex-col gap-6">
          <h2 className="text-2xl font-bold">{title}</h2>

          <div className="flex flex-col md:flex-row gap-8">
            <p className="text-slate-600 dark:text-slate-300 md:w-3/5">
              {description}
            </p>
            <div
              className={`md:w-2/5 flex flex-col gap-4 ${
                isMain ? "items-end" : ""
              }`}
            >
              {isMain ? (
                <>
                  <div className="w-full md:w-32 flex justify-end">
                    <Button
                      size="lg"
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      disabled={isComplete}
                    >
                      {isComplete ? "Quest Complete!" : "Fund"}
                    </Button>
                  </div>
                  <div className="w-full md:w-32 flex justify-end">
                    <Button variant="outline" size="lg" className="w-full">
                      Read More
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <Button
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    disabled={isComplete}
                  >
                    {isComplete ? "Quest Complete!" : "Fund"}
                  </Button>
                  <Button variant="outline" size="lg" className="w-full">
                    Read More
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="mt-6">
          <Progress
            value={percent}
            className="h-4 bg-slate-200 dark:bg-slate-800"
          >
            <div
              className="h-full bg-primary"
              style={{ width: `${percent}%` }}
            />
          </Progress>
        </div>
      </Card>
    </div>
  );
}
