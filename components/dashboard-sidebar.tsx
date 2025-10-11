"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Logo } from "@/components/logo"
import { cn } from "@/lib/utils"
import { Home, FileText, MessageSquare, Calendar, User, ThumbsUp } from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Requests", href: "/dashboard/requests", icon: FileText },
  { name: "Recommended", href: "/dashboard/recommended", icon: ThumbsUp },
  { name: "Messages", href: "/dashboard/messages", icon: MessageSquare },
  { name: "Inspections", href: "/dashboard/inspections", icon: Calendar },
  { name: "Profile", href: "/dashboard/profile", icon: User },
]

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-full w-64 flex-col border-r border-border bg-background">
      <div className="flex h-16 items-center border-b border-border px-6">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          )
        })}
      </nav>
      <div className="border-t border-border p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
            M
          </div>
          <div className="flex-1 overflow-hidden">
            <p className="truncate text-sm font-medium text-foreground">Muhammad</p>
            <button className="text-xs text-muted-foreground hover:text-foreground">View profile</button>
          </div>
        </div>
      </div>
    </div>
  )
}
