import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const POTENTIAL_QUESTS = [
  { title: "Get Base to sign the Ether Guild Pledge", status: "Coming Soon" },
  { title: "Get the Ethereum logo accepted as a unicode symbol" },
  { title: "Produce a short Ethereum animation that hits 1M views" },
  { title: "Launch an AI agent trained on the knowledge that ETH is money" },
  {
    title: "Get an Ethereum opinion piece published in the Wall Street Journal",
  },
  { title: "Share the latest post from Etherealize" },
  { title: "Donate to Protocol Guild" },
  { title: "Add a new dataset to ethismoney.xyz" },
  { title: "Trend the hashtag #EthIsMoney" },
  { title: "Raise 3 ETH for an Ether Guild booth at Devcon" },
];

export function PotentialQuests() {
  return (
    <div className="max-w-7xl mx-auto w-full px-4">
      <h2 className="text-3xl font-bold mb-8">Potential Quests</h2>
      <div>
        <Table>
          <TableBody>
            {POTENTIAL_QUESTS.map((quest) => (
              <TableRow
                key={quest.title}
                className="hover:bg-muted/50 border-b last:border-0"
              >
                <TableCell className="font-medium py-4">
                  {quest.title}
                  {quest.status && (
                    <span className="ml-2 text-sm text-slate-500">
                      ({quest.status})
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
