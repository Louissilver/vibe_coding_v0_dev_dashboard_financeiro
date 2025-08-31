"use client"

import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"

const data = [
  { month: "Jan", receita: 35000, despesas: 12000 },
  { month: "Fev", receita: 42000, despesas: 15000 },
  { month: "Mar", receita: 38000, despesas: 11000 },
  { month: "Abr", receita: 51000, despesas: 18000 },
  { month: "Mai", receita: 49000, despesas: 14000 },
  { month: "Jun", receita: 45231, despesas: 12234 },
]

export function RevenueChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="receita" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="despesas" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--chart-5))" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(var(--chart-5))" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
          <YAxis
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickFormatter={(value) => `R$ ${(value / 1000).toFixed(0)}k`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--popover))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "6px",
              color: "hsl(var(--popover-foreground))",
            }}
            formatter={(value: number) => [`R$ ${value.toLocaleString("pt-BR")}`, ""]}
          />
          <Legend />
          <Area
            type="monotone"
            dataKey="receita"
            stroke="hsl(var(--chart-2))"
            fillOpacity={1}
            fill="url(#receita)"
            name="Receita"
          />
          <Area
            type="monotone"
            dataKey="despesas"
            stroke="hsl(var(--chart-5))"
            fillOpacity={1}
            fill="url(#despesas)"
            name="Despesas"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
