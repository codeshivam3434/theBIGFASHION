"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

interface SalesByBrandChartProps {
  dateRange?: { from: Date; to: Date }
}

export function SalesByBrandChart({ dateRange }: SalesByBrandChartProps) {
  const data = [
    { name: "Brand A", sales: 4500000 },
    { name: "Brand B", sales: 3800000 },
    { name: "Brand C", sales: 3200000 },
    { name: "Brand D", sales: 2800000 },
    { name: "Brand E", sales: 2200000 },
    { name: "Others", sales: 7500000 },
  ]

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis tickFormatter={(value) => `₹${(value / 100000).toFixed(1)}L`} />
        <Tooltip formatter={(value) => [`₹${(value as number).toLocaleString()}`, "Sales"]} />
        <Legend />
        <Bar dataKey="sales" name="Sales" fill="#c9184a" />
      </BarChart>
    </ResponsiveContainer>
  )
}
