import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, FileText, Calendar, CheckCircle2, Clock, AlertCircle, TrendingUp, Users } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="flex flex-col">
      <div className="border-b border-border bg-background px-8 py-6">
        <h1 className="text-2xl font-bold text-foreground">Good afternoon, Muhammad!</h1>
        <p className="mt-1 text-sm text-muted-foreground">2 agents have responded to your requests today.</p>
      </div>

      <div className="flex-1 space-y-8 p-8">
        {/* Stats Overview */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Messages</p>
                  <p className="mt-2 text-3xl font-bold text-foreground">2</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                  <MessageSquare className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Active Requests</p>
                  <p className="mt-2 text-3xl font-bold text-foreground">3</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                  <FileText className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Upcoming Inspections</p>
                  <p className="mt-2 text-3xl font-bold text-foreground">1</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                  <Calendar className="h-6 w-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Your Requests */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Your Requests</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start justify-between rounded-lg border border-border p-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-foreground">2-Bedroom in Wuse II</h3>
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-100">active</Badge>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>3 Agent Responses</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>1 Inspection Booked</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>Updated 3h ago</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/dashboard/requests">See Details</Link>
                  </Button>
                </div>

                <div className="flex items-start justify-between rounded-lg border border-border p-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-foreground">3-Bedroom Duplex in Maitama</h3>
                      <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">pending</Badge>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>Updated 1d ago</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/dashboard/requests">See Details</Link>
                  </Button>
                </div>

                <div className="flex items-start justify-between rounded-lg border border-border p-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-foreground">Studio Apartment in Garki</h3>
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-100">active</Badge>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>5 Agent Responses</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>2 Inspection Booked</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>Updated 5h ago</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/dashboard/requests">See Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <p className="text-sm text-muted-foreground">Common tasks at your fingertips</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" asChild>
                  <Link href="/request">
                    <FileText className="mr-2 h-4 w-4" />
                    Create New Request
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                  <Link href="/dashboard/messages">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    View Messages
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                  <Link href="/dashboard/inspections">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule Inspection
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                  <Link href="/dashboard/recommended">
                    <TrendingUp className="mr-2 h-4 w-4" />
                    View Activity
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">
                  Agent John confirmed availability for your Wuse II request.
                </p>
                <p className="text-xs text-muted-foreground">2h ago</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                <MessageSquare className="h-5 w-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">New message from Agent Ada.</p>
                <p className="text-xs text-muted-foreground">4h ago</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                <Calendar className="h-5 w-5 text-orange-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">
                  Your inspection at Gwarimpa scheduled for 5PM tomorrow.
                </p>
                <p className="text-xs text-muted-foreground">6h ago</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100">
                <AlertCircle className="h-5 w-5 text-yellow-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">Price drop on 3-Bedroom in Maitama — now ₦45M.</p>
                <p className="text-xs text-muted-foreground">1d ago</p>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-blue-50 p-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-blue-600" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">
                    2 agents haven't updated their listings in over 24 hours — we'll refresh your matches soon.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>
                  Last viewed: <span className="font-medium text-foreground">3-Bedroom Duplex in Maitama</span> —
                  Awaiting confirmation.
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
