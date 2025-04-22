"use client"

import * as React from "react"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import type { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export function DateRangePicker({
  className,
  dateRange,
  setDateRange,
}: {
  className?: string
  dateRange?: { from: Date; to: Date }
  setDateRange?: (dateRange: { from: Date; to: Date }) => void
}) {
  const defaultDateRange = {
    from: new Date(2024, 0, 1),
    to: new Date(),
  }

  const [date, setDate] = React.useState<DateRange | undefined>({
    from: dateRange?.from || defaultDateRange.from,
    to: dateRange?.to || defaultDateRange.to,
  })

  React.useEffect(() => {
    if (dateRange) {
      setDate({
        from: dateRange.from,
        to: dateRange.to,
      })
    }
  }, [dateRange])

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn("w-[300px] justify-start text-left font-normal", !date && "text-muted-foreground")}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} - {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={(newDate) => {
              setDate(newDate)
              if (newDate?.from && newDate?.to && setDateRange) {
                setDateRange({ from: newDate.from, to: newDate.to })
              }
            }}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}

// Add the missing DatePickerWithRange export that's being referenced elsewhere
export function DatePickerWithRange({ className }: React.HTMLAttributes<HTMLDivElement>) {
  const [dateRange, setDateRange] = React.useState<{ from: Date; to: Date }>({
    from: new Date(2024, 0, 1),
    to: new Date(),
  })

  return <DateRangePicker className={className} dateRange={dateRange} setDateRange={setDateRange} />
}
