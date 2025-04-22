"use client"

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

interface CustomerSegmentChartProps {
  dateRange?: { from: Date; to: Date }
}

const data = [
  { name: "Loyal Customers", value: 36.3 },
  { name: "High Spenders", value: 25.6 },
  { name: "Occasional Buyers", value: 19.1 },
  { name: "New Customers", value: 19.0 },
]

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#8b5cf6"]

export function CustomerSegmentChart({ dateRange }: CustomerSegmentChartProps = {}) {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={40}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={2}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => [`${value}%`, "Percentage"]} />
      </PieChart>
    </ResponsiveContainer>
  )
}
