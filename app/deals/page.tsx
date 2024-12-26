import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const dummyDeals = [
  {
    id: 1,
    from: "London",
    to: "Bangkok",
    price: 499,
    airline: "Thai Airways",
    dates: "Apr 15 - May 30"
  },
  {
    id: 2,
    from: "New York",
    to: "Paris",
    price: 399,
    airline: "Air France",
    dates: "May 1 - Jun 15"
  },
  {
    id: 3,
    from: "Los Angeles",
    to: "Tokyo",
    price: 599,
    airline: "ANA",
    dates: "Jun 1 - Jul 30"
  }
]

export default function DealsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Flight Deals</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyDeals.map((deal) => (
          <Card key={deal.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{deal.from} → {deal.to}</span>
                <Badge variant="secondary">${deal.price}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">
                {deal.airline}
              </p>
              <p className="text-sm">
                Travel dates: {deal.dates}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
} 