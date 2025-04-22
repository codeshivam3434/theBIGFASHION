"use client"

import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { name: "Loyal Customers", value: 36.3, count: 1245 },
  { name: "High Spenders", value: 25.6, count: 876 },
  { name: "Occasional Buyers", value: 19.1, count: 654 },
  { name: "New Customers", value: 19.0, count: 652 },
]

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#8b5cf6"]

export function CustomerSegmentationChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={120}
          fill="#8884d8"
          paddingAngle={2}
          dataKey="value"
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip
          formatter={(value, name, props) => {
            const entry = data.find((item) => item.name === props.payload.name)
            return [`${value}% (${entry?.count} customers)`, "Percentage"]
          }}
        />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  )
}
