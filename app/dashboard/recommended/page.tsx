import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Bed, Bath, Home, Heart, Eye } from "lucide-react"

export default function RecommendedPage() {
  return (
    <div className="flex flex-col">
      <div className="border-b border-border bg-background px-8 py-6">
        <h1 className="text-2xl font-bold text-foreground">Recommended Properties</h1>
        <p className="mt-1 text-sm text-muted-foreground">Properties matched to your preferences and search history</p>
      </div>

      <div className="flex-1 space-y-6 p-8">
        {/* Filters */}
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm">
            All Properties
          </Button>
          <Button variant="outline" size="sm">
            Best Match
          </Button>
          <Button variant="outline" size="sm">
            Recently Added
          </Button>
          <Button variant="outline" size="sm">
            Price: Low to High
          </Button>
        </div>

        {/* Property Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="overflow-hidden">
            <div className="relative aspect-[4/3] bg-muted">
              <img src="/placeholder.svg?height=300&width=400" alt="Property" className="h-full w-full object-cover" />
              <Badge className="absolute left-3 top-3 bg-green-600 text-white hover:bg-green-600">New</Badge>
              <button className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm transition-colors hover:bg-white">
                <Heart className="h-4 w-4" />
              </button>
            </div>
            <CardContent className="pt-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-foreground">Modern 2-Bedroom Apartment</h3>
                  <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Wuse II, Abuja</span>
                  </div>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Bed className="h-4 w-4" />
                  <span>2</span>
                </div>
                <div className="flex items-center gap-1">
                  <Bath className="h-4 w-4" />
                  <span>2</span>
                </div>
                <div className="flex items-center gap-1">
                  <Home className="h-4 w-4" />
                  <span>Apartment</span>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-xl font-bold text-foreground">₦2.5M/year</p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Eye className="mr-1 h-4 w-4" />
                    View
                  </Button>
                </div>
              </div>
              <div className="mt-3 rounded-lg bg-blue-50 p-2 text-center">
                <p className="text-xs font-medium text-blue-700">95% match with your preferences</p>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="relative aspect-[4/3] bg-muted">
              <img src="/placeholder.svg?height=300&width=400" alt="Property" className="h-full w-full object-cover" />
              <button className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm transition-colors hover:bg-white">
                <Heart className="h-4 w-4" />
              </button>
            </div>
            <CardContent className="pt-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-foreground">Cozy Studio in Garki</h3>
                  <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Garki, Abuja</span>
                  </div>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Bed className="h-4 w-4" />
                  <span>Studio</span>
                </div>
                <div className="flex items-center gap-1">
                  <Bath className="h-4 w-4" />
                  <span>1</span>
                </div>
                <div className="flex items-center gap-1">
                  <Home className="h-4 w-4" />
                  <span>Apartment</span>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-xl font-bold text-foreground">₦1M/year</p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Eye className="mr-1 h-4 w-4" />
                    View
                  </Button>
                </div>
              </div>
              <div className="mt-3 rounded-lg bg-blue-50 p-2 text-center">
                <p className="text-xs font-medium text-blue-700">88% match with your preferences</p>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="relative aspect-[4/3] bg-muted">
              <img src="/placeholder.svg?height=300&width=400" alt="Property" className="h-full w-full object-cover" />
              <Badge className="absolute left-3 top-3 bg-orange-600 text-white hover:bg-orange-600">Price Drop</Badge>
              <button className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm transition-colors hover:bg-white">
                <Heart className="h-4 w-4" />
              </button>
            </div>
            <CardContent className="pt-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-foreground">Spacious 3-Bedroom Duplex</h3>
                  <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Maitama, Abuja</span>
                  </div>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Bed className="h-4 w-4" />
                  <span>3</span>
                </div>
                <div className="flex items-center gap-1">
                  <Bath className="h-4 w-4" />
                  <span>3</span>
                </div>
                <div className="flex items-center gap-1">
                  <Home className="h-4 w-4" />
                  <span>Duplex</span>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-xl font-bold text-foreground">₦45M</p>
                  <p className="text-xs text-muted-foreground line-through">₦50M</p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Eye className="mr-1 h-4 w-4" />
                    View
                  </Button>
                </div>
              </div>
              <div className="mt-3 rounded-lg bg-blue-50 p-2 text-center">
                <p className="text-xs font-medium text-blue-700">82% match with your preferences</p>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="relative aspect-[4/3] bg-muted">
              <img src="/placeholder.svg?height=300&width=400" alt="Property" className="h-full w-full object-cover" />
              <button className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm transition-colors hover:bg-white">
                <Heart className="h-4 w-4" />
              </button>
            </div>
            <CardContent className="pt-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-foreground">Luxury 4-Bedroom Villa</h3>
                  <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Asokoro, Abuja</span>
                  </div>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Bed className="h-4 w-4" />
                  <span>4</span>
                </div>
                <div className="flex items-center gap-1">
                  <Bath className="h-4 w-4" />
                  <span>4</span>
                </div>
                <div className="flex items-center gap-1">
                  <Home className="h-4 w-4" />
                  <span>Villa</span>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-xl font-bold text-foreground">₦75M</p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Eye className="mr-1 h-4 w-4" />
                    View
                  </Button>
                </div>
              </div>
              <div className="mt-3 rounded-lg bg-blue-50 p-2 text-center">
                <p className="text-xs font-medium text-blue-700">78% match with your preferences</p>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="relative aspect-[4/3] bg-muted">
              <img src="/placeholder.svg?height=300&width=400" alt="Property" className="h-full w-full object-cover" />
              <Badge className="absolute left-3 top-3 bg-green-600 text-white hover:bg-green-600">New</Badge>
              <button className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm transition-colors hover:bg-white">
                <Heart className="h-4 w-4" />
              </button>
            </div>
            <CardContent className="pt-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-foreground">Renovated 1-Bedroom Flat</h3>
                  <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Jabi, Abuja</span>
                  </div>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Bed className="h-4 w-4" />
                  <span>1</span>
                </div>
                <div className="flex items-center gap-1">
                  <Bath className="h-4 w-4" />
                  <span>1</span>
                </div>
                <div className="flex items-center gap-1">
                  <Home className="h-4 w-4" />
                  <span>Flat</span>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-xl font-bold text-foreground">₦1.5M/year</p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Eye className="mr-1 h-4 w-4" />
                    View
                  </Button>
                </div>
              </div>
              <div className="mt-3 rounded-lg bg-blue-50 p-2 text-center">
                <p className="text-xs font-medium text-blue-700">90% match with your preferences</p>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="relative aspect-[4/3] bg-muted">
              <img src="/placeholder.svg?height=300&width=400" alt="Property" className="h-full w-full object-cover" />
              <button className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm transition-colors hover:bg-white">
                <Heart className="h-4 w-4" />
              </button>
            </div>
            <CardContent className="pt-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-foreground">Family Home in Gwarimpa</h3>
                  <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Gwarimpa, Abuja</span>
                  </div>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Bed className="h-4 w-4" />
                  <span>3</span>
                </div>
                <div className="flex items-center gap-1">
                  <Bath className="h-4 w-4" />
                  <span>2</span>
                </div>
                <div className="flex items-center gap-1">
                  <Home className="h-4 w-4" />
                  <span>House</span>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-xl font-bold text-foreground">₦3.5M/year</p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Eye className="mr-1 h-4 w-4" />
                    View
                  </Button>
                </div>
              </div>
              <div className="mt-3 rounded-lg bg-blue-50 p-2 text-center">
                <p className="text-xs font-medium text-blue-700">85% match with your preferences</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
