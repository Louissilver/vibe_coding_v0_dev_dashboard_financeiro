import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react"

const transactions = [
  {
    id: "1",
    description: "Salário - Empresa XYZ",
    amount: 8500,
    type: "receita" as const,
    category: "Salário",
    date: "2024-01-15",
  },
  {
    id: "2",
    description: "Supermercado ABC",
    amount: -450,
    type: "despesa" as const,
    category: "Alimentação",
    date: "2024-01-14",
  },
  {
    id: "3",
    description: "Freelance - Projeto Web",
    amount: 2500,
    type: "receita" as const,
    category: "Freelance",
    date: "2024-01-13",
  },
  {
    id: "4",
    description: "Combustível",
    amount: -180,
    type: "despesa" as const,
    category: "Transporte",
    date: "2024-01-12",
  },
  {
    id: "5",
    description: "Aluguel",
    amount: -1200,
    type: "despesa" as const,
    category: "Moradia",
    date: "2024-01-10",
  },
]

export function TransactionsTable() {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-card-foreground">Transações Recentes</CardTitle>
        <CardDescription className="text-muted-foreground">Suas últimas movimentações financeiras</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div
                  className={`p-2 rounded-full ${
                    transaction.type === "receita" ? "bg-chart-2/20 text-chart-2" : "bg-chart-5/20 text-chart-5"
                  }`}
                >
                  {transaction.type === "receita" ? (
                    <ArrowUpIcon className="h-4 w-4" />
                  ) : (
                    <ArrowDownIcon className="h-4 w-4" />
                  )}
                </div>
                <div>
                  <p className="font-medium text-card-foreground">{transaction.description}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <Badge variant="secondary" className="text-xs">
                      {transaction.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {new Date(transaction.date).toLocaleDateString("pt-BR")}
                    </span>
                  </div>
                </div>
              </div>
              <div
                className={`text-lg font-semibold ${transaction.type === "receita" ? "text-chart-2" : "text-chart-5"}`}
              >
                {transaction.type === "receita" ? "+" : ""}R$ {Math.abs(transaction.amount).toLocaleString("pt-BR")}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
