"use client"

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

interface ProductPerformanceChartProps {
  dateRange?: { from: Date; to: Date }
}

export function ProductPerformanceChart({ dateRange }: ProductPerformanceChartProps) {
  const data = [
    { name: "Designer Lehenga", sales: 245 },
    { name: "Formal Suit Set", sales: 189 },
    { name: "Cotton Kurti Set", sales: 156 },
    { name: "Silk Saree", sales: 132 },
    { name: "Denim Jacket", sales: 128 },
  ]

  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data} layout="vertical" margin={{ top: 10, right: 30, left: 100, bottom: 10 }}>
        <XAxis type="number" />
        <YAxis type="category" dataKey="name" />
        <Tooltip formatter={(value) => [`${value} units`, "Sales"]} />
        <Bar dataKey="sales" fill="#c9184a" radius={[0, 4, 4, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
