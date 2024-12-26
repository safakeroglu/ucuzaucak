import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const dummyArticles = [
  {
    id: 1,
    title: "Hidden Gems of Southeast Asia",
    description: "Discover lesser-known destinations across Thailand, Vietnam, and Cambodia",
    date: "2024-03-15"
  },
  {
    id: 2,
    title: "Ultimate Guide to European Train Travel",
    description: "Everything you need to know about exploring Europe by rail",
    date: "2024-03-10"
  },
  {
    id: 3,
    title: "Budget Travel Tips for 2024",
    description: "Expert tips on how to travel more while spending less",
    date: "2024-03-05"
  }
]

export default function ArticlesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Travel Articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyArticles.map((article) => (
          <Link href={`/articles/${article.id}`} key={article.id}>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{article.title}</CardTitle>
                <CardDescription>{new Date(article.date).toLocaleDateString()}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{article.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
} 