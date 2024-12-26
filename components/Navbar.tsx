import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ModeToggle } from "./mode-toggle"

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Travel Blog
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/articles">
            <Button variant="ghost">Articles</Button>
          </Link>
          <Link href="/deals">
            <Button variant="ghost">Flight Deals</Button>
          </Link>
          <ModeToggle />
        </div>
      </div>
    </nav>
  )
} 