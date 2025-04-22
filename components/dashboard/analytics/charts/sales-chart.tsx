"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { name: "Jan", revenue: 1200000, profit: 420000 },
  { name: "Feb", revenue: 1800000, profit: 630000 },
  { name: "Mar", revenue: 1500000, profit: 525000 },
  { name: "Apr", revenue: 2200000, profit: 770000 },
  { name: "May", revenue: 2800000, profit: 980000 },
  { name: "Jun", revenue: 3200000, profit: 1120000 },
]

export function SalesChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis tickFormatter={(value) => `₹${(value / 100000).toFixed(1)}L`} />
        <Tooltip
          formatter={(value) => [`₹${(value as number).toLocaleString()}`, undefined]}
          labelFormatter={(label) => `Month: ${label}`}
        />
        <Legend />
        <Bar dataKey="revenue" name="Revenue" fill="#c9184a" />
        <Bar dataKey="profit" name="Profit" fill="#ff4d6d" />
      </BarChart>
    </ResponsiveContainer>
  )
}
