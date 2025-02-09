"use client";

import { Suspense } from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useQuest } from "@/app/hooks/useQuests";
import { QuestSkeleton } from "@/components/skeletons/quest-skeleton";
import TransactionComponents from "./wallet/transaction";
import { call } from "./wallet/call";
import type { Quest } from "@prisma/client";

type QuestProps = Pick<Quest, "id"> & Partial<Omit<Quest, "id">>;

export function Quest({ id }: QuestProps) {
  return (
    <Suspense fallback={<QuestSkeleton />}>
      <QuestContent id={id} />
    </Suspense>
  );
}

function QuestContent({ id }: QuestProps) {
  const { data: quest, isLoading, error } = useQuest(id);

  if (isLoading) return <QuestSkeleton />;
  if (error) return <div>Error loading quest</div>;
  if (!quest) return null;

  const { title, summary, progress, isMain, link } = quest;
  const isComplete = progress === 100;

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

      <Card className="p-6 flex flex-col h-full border-slate-800/20 dark:border-slate-700/30">
        <div className="flex-grow flex flex-col gap-6">
          <h2 className="text-2xl font-bold">{title}</h2>

          <div className="flex flex-col md:flex-row gap-8">
            <p className="text-slate-600 dark:text-slate-300 md:w-3/5">
              {summary}
            </p>
            <div
              className={`grid grid-cols-2 gap-4 md:flex md:flex-col md:w-2/5 ${
                isMain ? "md:items-end" : ""
              }`}
            >
              {isMain ? (
                <>
                  <div className="col-span-1 w-full md:w-32 md:flex md:justify-end">
                    {isComplete ? (
                      link ? (
                        <Button
                          size="lg"
                          className="w-full bg-aa482f text-primary-foreground hover:bg-primary/90"
                          asChild
                        >
                          <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Complete! ↗
                          </a>
                        </Button>
                      ) : (
                        <Button size="lg" className="w-full" disabled>
                          Complete!
                        </Button>
                      )
                    ) : (
                      <TransactionComponents text="Fund" call={call} />
                    )}
                  </div>
                  <div className="col-span-1 w-full md:w-32 md:flex md:justify-end">
                    <Button variant="outline" size="lg" className="w-full">
                      Read More
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <div className="col-span-1">
                    {isComplete ? (
                      link ? (
                        <Button
                          size="lg"
                          className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                          asChild
                        >
                          <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Complete!
                          </a>
                        </Button>
                      ) : (
                        <Button size="lg" className="w-full" disabled>
                          Complete!
                        </Button>
                      )
                    ) : (
                      <TransactionComponents text="Fund" call={call} />
                    )}
                  </div>
                  <div className="col-span-1">
                    <Button variant="outline" size="lg" className="w-full">
                      Read More
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="mt-6">
          <Progress
            value={progress}
            className="h-4 bg-slate-200 dark:bg-slate-800"
          >
            <div
              className="h-full bg-primary"
              style={{ width: `${progress}%` }}
            />
          </Progress>
        </div>
      </Card>
    </div>
  );
}
