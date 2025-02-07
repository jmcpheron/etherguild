import { Skeleton } from "@/components/ui/skeleton";

export function ProposedQuestsSkeleton() {
  const randomWidth = () => `${Math.floor(Math.random() * 40 + 40)}%`;

  return (
    <div className="max-w-7xl mx-auto w-full px-4">
      <h2 className="text-3xl font-bold mb-8">Proposed Quests</h2>
      <div className="space-y-4">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="flex items-center justify-between p-4 border-b border-slate-800"
          >
            <Skeleton
              className="h-5 rounded"
              style={{ width: randomWidth() }}
            />
            <Skeleton className="h-8 w-24 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}
