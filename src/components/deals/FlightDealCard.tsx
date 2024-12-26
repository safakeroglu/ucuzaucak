import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { CalendarDays, Plane } from 'lucide-react'

interface FlightDealProps {
  from: string
  to: string
  price: number
  currency: string
  availableMonths: string[]
  postedAt: Date
  href: string
}

export function FlightDealCard({
  from,
  to,
  price,
  currency,
  availableMonths,
  postedAt,
  href
}: FlightDealProps) {
  const timeAgo = (date: Date) => {
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000)
    const intervals = {
      year: 31536000,
      month: 2592000,
      week: 604800,
      day: 86400,
      hour: 3600,
      minute: 60,
      second: 1
    }

    for (const [unit, secondsInUnit] of Object.entries(intervals)) {
      const interval = Math.floor(seconds / secondsInUnit)
      if (interval >= 1) {
        return `${interval} ${unit}${interval === 1 ? '' : 's'} ago`
      }
    }
    return 'just now'
  }

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Plane className="h-5 w-5" />
          <span className="text-lg">{from} - {to}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-primary mb-4">
          {price.toLocaleString()} {currency}
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <CalendarDays className="h-4 w-4" />
          <span>{availableMonths.join(', ')}</span>
        </div>
      </CardContent>
      <CardFooter className="text-xs text-muted-foreground">
        Posted {timeAgo(postedAt)}
      </CardFooter>
    </Card>
  )
}