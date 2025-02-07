import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function QuestSkeleton() {
  return (
    <div className="relative">
      <Card className="p-6 flex flex-col h-full">
        <div className="flex-grow flex flex-col gap-6">
          {/* Title */}
          <Skeleton className="h-8 w-2/3" />

          <div className="flex flex-col md:flex-row gap-8">
            {/* Description */}
            <div className="md:w-3/5 space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-4/6" />
            </div>

            {/* Buttons */}
            <div
              className={`grid grid-cols-2 gap-4 md:flex md:flex-col md:w-2/5 md:items-end`}
            >
              <div className="col-span-1 w-full md:w-32">
                <Skeleton className="h-10 w-full" />
              </div>
              <div className="col-span-1 w-full md:w-32">
                <Skeleton className="h-10 w-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-6">
          <Skeleton className="h-4 w-full" />
        </div>
      </Card>
    </div>
  );
}
