import { Skeleton } from "@/components/ui/skeleton";

export function ProposedQuestsSkeleton() {
  // Use fixed widths instead of random
  const widths = [
    "60%",
    "75%",
    "45%",
    "80%",
    "65%",
    "70%",
    "50%",
    "85%",
    "55%",
    "40%",
  ];

  return (
    <div className="max-w-7xl mx-auto w-full px-4">
      <h2 className="text-3xl font-bold mb-8">Proposed Quests</h2>
      <div className="space-y-4">
        {widths.map((width, i) => (
          <div
            key={i}
            className="flex items-center justify-between p-4 border-b border-slate-800"
          >
            <Skeleton className="h-5 rounded" style={{ width }} />
            <Skeleton className="h-8 w-24 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}
