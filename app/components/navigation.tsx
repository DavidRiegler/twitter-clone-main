import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Bell, Bookmark, Hash, Home, Mail, User } from "lucide-react"

interface NavigationProps {
  onLogout: () => void
}

export function Navigation({ onLogout }: NavigationProps) {
  return (
    <aside className="w-1/4 border-r p-4">
      <nav className="space-y-4">
        <Link href="/" passHref>
          <Button variant="ghost" className="w-full justify-start">
            <Home className="mr-2 h-4 w-4" />
            Home
          </Button>
        </Link>
        <Link href="/components/nav/explore" passHref>
          <Button variant="ghost" className="w-full justify-start">
            <Hash className="mr-2 h-4 w-4" />
            Explore
          </Button>
        </Link>
        <Link href="/components/nav/notifications" passHref>
          <Button variant="ghost" className="w-full justify-start">
            <Bell className="mr-2 h-4 w-4" />
            Notifications
          </Button>
        </Link>
        <Link href="/components/nav/messages" passHref>
          <Button variant="ghost" className="w-full justify-start">
            <Mail className="mr-2 h-4 w-4" />
            Messages
          </Button>
        </Link>
        <Link href="/components/nav/bookmarks" passHref>
          <Button variant="ghost" className="w-full justify-start">
            <Bookmark className="mr-2 h-4 w-4" />
            Bookmarks
          </Button>
        </Link>
        <Link href="/components/nav/profile" passHref>
          <Button variant="ghost" className="w-full justify-start">
            <User className="mr-2 h-4 w-4" />
            Profile
          </Button>
        </Link>
      </nav>
      <Button className="mt-4 w-full">Tweet</Button>
      <Button className="mt-4 w-full" variant="outline" onClick={onLogout}>
        Logout
      </Button>
    </aside>
  )
}