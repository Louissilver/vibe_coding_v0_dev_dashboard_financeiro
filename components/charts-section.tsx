import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RevenueChart } from "@/components/revenue-chart"
import { ExpenseChart } from "@/components/expense-chart"
import { CategoryChart } from "@/components/category-chart"

export function ChartsSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="lg:col-span-2 bg-card border-border">
        <CardHeader>
          <CardTitle className="text-card-foreground">Receita vs Despesas</CardTitle>
          <CardDescription className="text-muted-foreground">Comparação mensal dos últimos 6 meses</CardDescription>
        </CardHeader>
        <CardContent>
          <RevenueChart />
        </CardContent>
      </Card>

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-card-foreground">Despesas por Categoria</CardTitle>
          <CardDescription className="text-muted-foreground">Distribuição das despesas do mês atual</CardDescription>
        </CardHeader>
        <CardContent>
          <CategoryChart />
        </CardContent>
      </Card>

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-card-foreground">Tendência de Gastos</CardTitle>
          <CardDescription className="text-muted-foreground">Evolução semanal das despesas</CardDescription>
        </CardHeader>
        <CardContent>
          <ExpenseChart />
        </CardContent>
      </Card>
    </div>
  )
}
