"use client"

import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

interface SalesByCategoryChartProps {
  dateRange?: { from: Date; to: Date }
}

export function SalesByCategoryChart({ dateRange }: SalesByCategoryChartProps) {
  const data = [
    { name: "Men's Wear", value: 35 },
    { name: "Women's Wear", value: 30 },
    { name: "Traditional", value: 20 },
    { name: "Seasonal", value: 15 },
  ]

  const COLORS = ["#c9184a", "#ff4d6d", "#ffccd5", "#fff0f3"]

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
        <Tooltip formatter={(value) => [`${value}%`, "Sales Percentage"]} />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  )
}
