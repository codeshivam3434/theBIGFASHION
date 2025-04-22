import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MoreHorizontal, RefreshCw } from "lucide-react"

interface ChartCardProps {
  title: string
  description?: string
  filter?: boolean
  children: React.ReactNode
}

export default function ChartCard({ title, description, filter = false, children }: ChartCardProps) {
  return (
    <Card className="big-fashion-card border-none shadow-lg overflow-hidden">
      <CardHeader className="pb-2 bg-gradient-to-r from-fashion-primary/5 to-fashion-primary/10">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>{title}</CardTitle>
            {description && <CardDescription>{description}</CardDescription>}
          </div>
          {filter && (
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <RefreshCw className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}
