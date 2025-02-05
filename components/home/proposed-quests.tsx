"use client";

import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { type Quest } from "@/types/quest";

interface ProposedQuestsProps {
  quests: Quest[];
}

export function ProposedQuests({ quests }: ProposedQuestsProps) {
  return (
    <div className="max-w-7xl mx-auto w-full px-4">
      <h2 className="text-3xl font-bold mb-8">Proposed Quests</h2>
      <div>
        <Table>
          <TableBody>
            {quests.map((quest) => (
              <TableRow
                key={quest.id}
                className="hover:bg-muted/50 border-b last:border-0"
              >
                <TableCell className="font-medium py-4">
                  {quest.title}
                  {!quest.isActive && (
                    <span className="ml-2 text-sm text-slate-500">
                      (Coming Soon)
                    </span>
                  )}
                </TableCell>
                <TableCell className="text-right py-4">
                  <Button variant="outline" size="sm">
                    Read More
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
