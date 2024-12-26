import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to Travel Blog</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Discover amazing destinations and the best travel deals
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/articles">
            <Button size="lg">Read Articles</Button>
          </Link>
          <Link href="/deals">
            <Button size="lg" variant="outline">View Deals</Button>
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Featured Content</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Latest Articles</CardTitle>
              <CardDescription>Explore our newest travel guides</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>Hidden Gems of Southeast Asia</li>
                <li>Ultimate Guide to European Train Travel</li>
                <li>Budget Travel Tips for 2024</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Hot Deals</CardTitle>
              <CardDescription>Current flight offers</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>London → Bangkok from $499</li>
                <li>New York → Paris from $399</li>
                <li>Los Angeles → Tokyo from $599</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
} 