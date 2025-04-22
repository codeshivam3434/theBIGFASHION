"use client"

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

interface SalesByTimeChartProps {
  timeframe: string
  dateRange?: { from: Date; to: Date }
}

export function SalesByTimeChart({ timeframe }: SalesByTimeChartProps) {
  // Generate data based on timeframe
  const data =
    timeframe === "daily"
      ? [
          { name: "Mon", sales: 450000 },
          { name: "Tue", sales: 380000 },
          { name: "Wed", sales: 520000 },
          { name: "Thu", sales: 490000 },
          { name: "Fri", sales: 600000 },
          { name: "Sat", sales: 750000 },
          { name: "Sun", sales: 580000 },
        ]
      : timeframe === "weekly"
        ? [
            { name: "Week 1", sales: 2800000 },
            { name: "Week 2", sales: 3200000 },
            { name: "Week 3", sales: 2900000 },
            { name: "Week 4", sales: 3500000 },
          ]
        : [
            { name: "Jan", sales: 12000000 },
            { name: "Feb", sales: 18000000 },
            { name: "Mar", sales: 15000000 },
            { name: "Apr", sales: 22000000 },
            { name: "May", sales: 28000000 },
            { name: "Jun", sales: 32000000 },
          ]

  return (
    <ResponsiveContainer width="100%" height={350}>
      <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#c9184a" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#c9184a" stopOpacity={0.1} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis
          tickFormatter={(value) =>
            timeframe === "daily"
              ? `₹${(value / 1000).toFixed(0)}K`
              : timeframe === "weekly"
                ? `₹${(value / 100000).toFixed(1)}L`
                : `₹${(value / 1000000).toFixed(1)}M`
          }
        />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip formatter={(value) => [`₹${(value as number).toLocaleString()}`, "Sales"]} />
        <Area type="monotone" dataKey="sales" stroke="#c9184a" fillOpacity={1} fill="url(#colorSales)" />
      </AreaChart>
    </ResponsiveContainer>
  )
}
