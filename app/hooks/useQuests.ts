import { Quest } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";

type FetchQuestParams = {
  isMain?: boolean;
  isActive?: boolean;
};

async function fetchQuests(params: FetchQuestParams = {}): Promise<Quest[]> {
  const queryParams = new URLSearchParams();
  if (params.isMain !== undefined)
    queryParams.append("isMain", params.isMain.toString());
  if (params.isActive !== undefined)
    queryParams.append("isActive", params.isActive.toString());

  const response = await fetch(
    `/api/quests${queryParams.toString() ? `?${queryParams.toString()}` : ""}`
  );
  if (!response.ok) throw new Error("Failed to fetch quests");
  return response.json();
}

export function useQuests(params: FetchQuestParams = {}) {
  return useQuery({
    queryKey: ["quests", params],
    queryFn: () => fetchQuests(params),
  });
}

export function useQuest(id: string) {
  return useQuery({
    queryKey: ["quest", id],
    queryFn: async () => {
      const response = await fetch(`/api/quests/${id}`);
      if (!response.ok) throw new Error("Failed to fetch quest");
      return response.json();
    },
  });
}
