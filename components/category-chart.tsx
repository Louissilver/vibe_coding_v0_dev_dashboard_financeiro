"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts"

const data = [
  { name: "Alimentação", value: 4500, color: "hsl(var(--chart-1))" },
  { name: "Transporte", value: 2800, color: "hsl(var(--chart-2))" },
  { name: "Moradia", value: 3200, color: "hsl(var(--chart-3))" },
  { name: "Lazer", value: 1734, color: "hsl(var(--chart-4))" },
]

export function CategoryChart() {
  return (
    <div className="h-[250px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={5} dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--popover))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "6px",
              color: "hsl(var(--popover-foreground))",
            }}
            formatter={(value: number) => [`R$ ${value.toLocaleString("pt-BR")}`, ""]}
          />
          <Legend
            wrapperStyle={{ color: "hsl(var(--foreground))" }}
            formatter={(value) => <span style={{ color: "hsl(var(--foreground))" }}>{value}</span>}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
