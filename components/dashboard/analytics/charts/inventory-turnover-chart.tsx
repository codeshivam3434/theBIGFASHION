"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { category: "Men's Wear", turnover: 4.5, industry: 3.8 },
  { category: "Women's Wear", turnover: 5.2, industry: 4.2 },
  { category: "Traditional", turnover: 3.8, industry: 3.5 },
  { category: "Seasonal", turnover: 2.5, industry: 2.8 },
]

export function InventoryTurnoverChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="turnover" name="Your Turnover" fill="#c9184a" />
        <Bar dataKey="industry" name="Industry Average" fill="#ff4d6d" />
      </BarChart>
    </ResponsiveContainer>
  )
}
