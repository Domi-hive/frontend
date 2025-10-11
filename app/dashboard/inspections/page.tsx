import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, User, Phone, Video, Navigation } from "lucide-react"

export default function InspectionsPage() {
  return (
    <div className="flex flex-col">
      <div className="border-b border-border bg-background px-8 py-6">
        <h1 className="text-2xl font-bold text-foreground">Inspections</h1>
        <p className="mt-1 text-sm text-muted-foreground">Manage your property viewing schedule</p>
      </div>

      <div className="flex-1 space-y-8 p-8">
        {/* Upcoming Inspections */}
        <div>
          <h2 className="mb-4 text-lg font-semibold text-foreground">Upcoming Inspections</h2>
          <div className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold text-foreground">2-Bedroom Apartment - Wuse II</h3>
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-100">confirmed</Badge>
                    </div>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>Tomorrow, May 16th 2024</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>5:00 PM - 6:00 PM</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>Plot 123, Wuse II, Abuja</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <User className="h-4 w-4" />
                          <span>Agent John Obi</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Phone className="h-4 w-4" />
                          <span>+234 802 123 4567</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Button size="sm">
                        <Navigation className="mr-2 h-4 w-4" />
                        Get Directions
                      </Button>
                      <Button size="sm" variant="outline">
                        <Phone className="mr-2 h-4 w-4" />
                        Call Agent
                      </Button>
                      <Button size="sm" variant="outline">
                        Reschedule
                      </Button>
                      <Button size="sm" variant="outline">
                        Cancel
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold text-foreground">Studio Apartment - Garki</h3>
                      <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">pending</Badge>
                    </div>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>May 18th 2024</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>2:00 PM - 3:00 PM</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>Area 11, Garki, Abuja</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <User className="h-4 w-4" />
                          <span>Agent Emmanuel Ade</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Phone className="h-4 w-4" />
                          <span>+234 803 987 6543</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 rounded-lg bg-yellow-50 p-3">
                      <p className="text-sm text-muted-foreground">Waiting for agent confirmation</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Past Inspections */}
        <div>
          <h2 className="mb-4 text-lg font-semibold text-foreground">Past Inspections</h2>
          <div className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold text-foreground">3-Bedroom House - Gwarimpa</h3>
                      <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-100">completed</Badge>
                    </div>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>May 10th 2024</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>4:00 PM</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <User className="h-4 w-4" />
                          <span>Agent Sarah Bello</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Safety Information */}
        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="pt-6">
            <div className="flex gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                <Video className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Live Inspection Tracking</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  For your safety, all inspections are tracked in real-time. Share your location with trusted contacts
                  and enable emergency alerts during property viewings.
                </p>
                <Button size="sm" className="mt-3 bg-transparent" variant="outline">
                  Learn More About Safety
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
