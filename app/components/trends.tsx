import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MoreHorizontal } from "lucide-react"

export function Trends() {
  return (
    <aside className="w-1/4 p-4">
      <div className="mb-4">
        <Input placeholder="Search Twitter" />
      </div>
      <Card>
        <CardHeader>
          <h2 className="text-lg font-semibold">Trends for you</h2>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {[1, 2, 3, 4, 5].map((trend) => (
              <li key={trend} className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Trending in Tech</p>
                  <p className="font-semibold">#{`Trend${trend}`}</p>
                  <p className="text-sm text-gray-500">10.5K Tweets</p>
                </div>
                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </aside>
  )
}