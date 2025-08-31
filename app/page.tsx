import { DashboardHeader } from "@/components/dashboard-header"
import { MetricCards } from "@/components/metric-cards"
import { ChartsSection } from "@/components/charts-section"
import { TransactionsTable } from "@/components/transactions-table"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <main className="container mx-auto px-4 py-6 space-y-6">
        <MetricCards />
        <ChartsSection />
        <TransactionsTable />
      </main>
    </div>
  )
}
