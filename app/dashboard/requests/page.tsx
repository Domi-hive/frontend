import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Calendar, Clock, MapPin, DollarSign, Bed, Bath } from "lucide-react"
import Link from "next/link"

export default function RequestsPage() {
  return (
    <div className="flex flex-col">
      <div className="border-b border-border bg-background px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Your Requests</h1>
            <p className="mt-1 text-sm text-muted-foreground">Track and manage all your property search requests</p>
          </div>
          <Button asChild>
            <Link href="/request">Create New Request</Link>
          </Button>
        </div>
      </div>

      <div className="flex-1 space-y-6 p-8">
        {/* Active Requests */}
        <div>
          <h2 className="mb-4 text-lg font-semibold text-foreground">Active Requests</h2>
          <div className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold text-foreground">2-Bedroom in Wuse II</h3>
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-100">active</Badge>
                    </div>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>Wuse II, Abuja</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <DollarSign className="h-4 w-4" />
                        <span>₦2M - ₦3M</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Bed className="h-4 w-4" />
                        <span>2 Bedrooms</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Bath className="h-4 w-4" />
                        <span>2 Bathrooms</span>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-4 rounded-lg bg-muted/50 p-4">
                      <div className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-sm font-medium text-foreground">3 Agent Responses</p>
                          <p className="text-xs text-muted-foreground">View agent profiles</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-orange-600" />
                        <div>
                          <p className="text-sm font-medium text-foreground">1 Inspection Booked</p>
                          <p className="text-xs text-muted-foreground">Tomorrow at 5PM</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="text-sm font-medium text-foreground">Updated 3h ago</p>
                          <p className="text-xs text-muted-foreground">Last activity</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" asChild>
                    <Link href="/dashboard/requests/1">View Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold text-foreground">Studio Apartment in Garki</h3>
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-100">active</Badge>
                    </div>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>Garki, Abuja</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <DollarSign className="h-4 w-4" />
                        <span>₦800K - ₦1.2M</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Bed className="h-4 w-4" />
                        <span>Studio</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Bath className="h-4 w-4" />
                        <span>1 Bathroom</span>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-4 rounded-lg bg-muted/50 p-4">
                      <div className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-sm font-medium text-foreground">5 Agent Responses</p>
                          <p className="text-xs text-muted-foreground">View agent profiles</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-orange-600" />
                        <div>
                          <p className="text-sm font-medium text-foreground">2 Inspections Booked</p>
                          <p className="text-xs text-muted-foreground">This week</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="text-sm font-medium text-foreground">Updated 5h ago</p>
                          <p className="text-xs text-muted-foreground">Last activity</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" asChild>
                    <Link href="/dashboard/requests/2">View Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Pending Requests */}
        <div>
          <h2 className="mb-4 text-lg font-semibold text-foreground">Pending Requests</h2>
          <div className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold text-foreground">3-Bedroom Duplex in Maitama</h3>
                      <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">pending</Badge>
                    </div>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>Maitama, Abuja</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <DollarSign className="h-4 w-4" />
                        <span>₦40M - ₦50M</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Bed className="h-4 w-4" />
                        <span>3 Bedrooms</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Bath className="h-4 w-4" />
                        <span>3 Bathrooms</span>
                      </div>
                    </div>
                    <div className="mt-4 rounded-lg bg-yellow-50 p-4">
                      <p className="text-sm text-muted-foreground">
                        Waiting for agent responses. We're matching you with verified agents in this area.
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" asChild>
                    <Link href="/dashboard/requests/3">View Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
