import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpIcon, ArrowDownIcon, DollarSign, TrendingUp, CreditCard, PiggyBank } from "lucide-react"

const metrics = [
  {
    title: "Receita Total",
    value: "R$ 45.231,89",
    change: "+20.1%",
    changeType: "positive" as const,
    icon: DollarSign,
  },
  {
    title: "Despesas",
    value: "R$ 12.234,56",
    change: "-4.3%",
    changeType: "negative" as const,
    icon: CreditCard,
  },
  {
    title: "Lucro Líquido",
    value: "R$ 32.997,33",
    change: "+12.5%",
    changeType: "positive" as const,
    icon: TrendingUp,
  },
  {
    title: "Economia",
    value: "R$ 8.450,00",
    change: "+8.2%",
    changeType: "positive" as const,
    icon: PiggyBank,
  },
]

export function MetricCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric) => {
        const Icon = metric.icon
        return (
          <Card key={metric.title} className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{metric.title}</CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-card-foreground">{metric.value}</div>
              <div className="flex items-center space-x-1 text-xs">
                {metric.changeType === "positive" ? (
                  <ArrowUpIcon className="h-3 w-3 text-chart-2" />
                ) : (
                  <ArrowDownIcon className="h-3 w-3 text-chart-5" />
                )}
                <span className={metric.changeType === "positive" ? "text-chart-2" : "text-chart-5"}>
                  {metric.change}
                </span>
                <span className="text-muted-foreground">vs mês anterior</span>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
