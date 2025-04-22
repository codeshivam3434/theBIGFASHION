"use client"

import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { month: "Jan", "Men's Wear": 2500, "Women's Wear": 3200, Traditional: 1800, Seasonal: 1200 },
  { month: "Feb", "Men's Wear": 3000, "Women's Wear": 2800, Traditional: 2000, Seasonal: 1500 },
  { month: "Mar", "Men's Wear": 2800, "Women's Wear": 3500, Traditional: 2200, Seasonal: 1000 },
  { month: "Apr", "Men's Wear": 3200, "Women's Wear": 3800, Traditional: 2500, Seasonal: 800 },
  { month: "May", "Men's Wear": 3500, "Women's Wear": 4000, Traditional: 2800, Seasonal: 1800 },
  { month: "Jun", "Men's Wear": 3800, "Women's Wear": 4200, Traditional: 3000, Seasonal: 2500 },
]

export function InventoryLevelChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorMens" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#c9184a" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#c9184a" stopOpacity={0.1} />
          </linearGradient>
          <linearGradient id="colorWomens" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#ff4d6d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#ff4d6d" stopOpacity={0.1} />
          </linearGradient>
          <linearGradient id="colorTraditional" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#ffccd5" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#ffccd5" stopOpacity={0.1} />
          </linearGradient>
          <linearGradient id="colorSeasonal" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#fff0f3" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#fff0f3" stopOpacity={0.1} />
          </linearGradient>
        </defs>
        <XAxis dataKey="month" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="Men's Wear" stroke="#c9184a" fillOpacity={1} fill="url(#colorMens)" />
        <Area type="monotone" dataKey="Women's Wear" stroke="#ff4d6d" fillOpacity={1} fill="url(#colorWomens)" />
        <Area type="monotone" dataKey="Traditional" stroke="#ffccd5" fillOpacity={1} fill="url(#colorTraditional)" />
        <Area type="monotone" dataKey="Seasonal" stroke="#fff0f3" fillOpacity={1} fill="url(#colorSeasonal)" />
      </AreaChart>
    </ResponsiveContainer>
  )
}
