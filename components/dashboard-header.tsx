"use client"

import { Button } from "@/components/ui/button"
import { Bell, Plus } from "lucide-react"
import Link from "next/link"

interface DashboardHeaderProps {
  title: string
  subtitle?: string
  action?: {
    label: string
    href: string
  }
}

export function DashboardHeader({ title, subtitle, action }: DashboardHeaderProps) {
  return (
    <div className="flex items-center justify-between border-b border-border bg-background px-8 py-4">
      <div>
        <h1 className="text-2xl font-bold text-foreground">{title}</h1>
        {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
      </div>
      <div className="flex items-center gap-3">
        <button className="relative rounded-lg p-2 hover:bg-muted">
          <Bell className="h-5 w-5 text-muted-foreground" />
          <span className="absolute right-1 top-1 flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
          </span>
        </button>
        {action && (
          <Button asChild>
            <Link href={action.href}>
              <Plus className="mr-2 h-4 w-4" />
              {action.label}
            </Link>
          </Button>
        )}
      </div>
    </div>
  )
}
