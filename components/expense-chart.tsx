"use client"

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"

const data = [
  { week: "Sem 1", gastos: 2800 },
  { week: "Sem 2", gastos: 3200 },
  { week: "Sem 3", gastos: 2900 },
  { week: "Sem 4", gastos: 3400 },
]

export function ExpenseChart() {
  return (
    <div className="h-[250px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="week" stroke="hsl(var(--muted-foreground))" fontSize={12} />
          <YAxis
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickFormatter={(value) => `R$ ${(value / 1000).toFixed(1)}k`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--popover))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "6px",
              color: "hsl(var(--popover-foreground))",
            }}
            formatter={(value: number) => [`R$ ${value.toLocaleString("pt-BR")}`, "Gastos"]}
          />
          <Line
            type="monotone"
            dataKey="gastos"
            stroke="hsl(var(--chart-1))"
            strokeWidth={3}
            dot={{ fill: "hsl(var(--chart-1))", strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: "hsl(var(--chart-1))", strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
