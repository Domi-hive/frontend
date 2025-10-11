import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeading } from "@/components/section-heading"
import {
  Shield,
  Target,
  Clock,
  CheckCircle2,
  Users,
  MapPin,
  Calendar,
  CreditCard,
  Search,
  FileText,
  Home,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-muted/50 to-background py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
                Find Your Home Faster & Safer
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">
                Connect with verified agents. Discover verified properties, and enjoy secure inspections. DomiHive makes
                home hunting transparent, efficient, and trustworthy.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/request">
                    <Search className="mr-2 h-5 w-5" />
                    Find Your Home
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/#how-it-works">Learn How It Works</Link>
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium">Verified Agents</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium">Secure Payments</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium">Live Tracking</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-2xl bg-muted">
                <img src="/modern-apartment-exterior.png" alt="Modern property" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Search Section */}
      <section className="border-y border-border bg-background py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground text-balance">Start Your Property Search</h2>
            <p className="mt-2 text-muted-foreground text-pretty">
              Tell us what you're looking for and we'll connect you with the right properties and verified agents
            </p>
          </div>
          <div className="mt-8 flex justify-center">
            <Button size="lg" asChild>
              <Link href="/request">Create Detailed Request</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose DomiHive Section */}
      <section id="features" className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Why Choose DomiHive?"
            subtitle="We've built the most comprehensive and secure property platform to make your house hunting experience seamless and trustworthy."
            centered
          />

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">Safety First</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  All agents are verified with KYC. Live inspections ensure your safety during viewings with real-time
                  location tracking.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">Smart Matching</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Our AI algorithm matches you with properties that meet your exact criteria and preferences, saving you
                  time.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">Verified Agents</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Connect with licensed, verified real estate professionals who have your best interests at heart.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">Real-Time Updates</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Get instant notifications about new properties, inspection schedules, and agent responses.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">Live Inspection Tracking</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Track your inspections in real-time and confirm safe meetings with agents through our platform.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <CreditCard className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">Secure Payments</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Pay inspection fees securely through our platform with full transaction protection and transparency.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-muted/30 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="How It Works"
            subtitle="Finding your perfect home is just a few simple steps away"
            centered
          />

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  1
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">Create Request</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Tell us your requirements: location, budget, property type, and preferences.
                </p>
                <FileText className="mt-4 h-12 w-12 text-muted-foreground/50" />
              </div>
            </div>

            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  2
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">Get Matched</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Our system connects you with verified agents and properties that match your criteria.
                </p>
                <Users className="mt-4 h-12 w-12 text-muted-foreground/50" />
              </div>
            </div>

            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  3
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">Schedule Inspection</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Book property viewings with agents and track inspections in real-time for safety.
                </p>
                <Calendar className="mt-4 h-12 w-12 text-muted-foreground/50" />
              </div>
            </div>

            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  4
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">Find Your Home</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Make secure payments and move into your perfect home with confidence.
                </p>
                <Home className="mt-4 h-12 w-12 text-muted-foreground/50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                title="About DomiHive"
                subtitle="We're on a mission to transform property hunting in Nigeria"
              />
              <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  DomiHive was born from a simple observation: finding a home shouldn't be stressful, unsafe, or filled
                  with uncertainty. We saw too many people struggle with unverified agents, unsafe inspections, and
                  opaque processes.
                </p>
                <p>
                  Our platform brings transparency, security, and efficiency to the property market. By verifying every
                  agent, tracking every inspection, and securing every payment, we're making home hunting the way it
                  should be: simple, safe, and successful.
                </p>
                <p>Join thousands of satisfied users who have found their perfect homes through DomiHive.</p>
              </div>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href="/request">Start Your Search Today</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
                <img src="/happy-family-moving-into-new-home.jpg" alt="Happy family" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-muted/30 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What Our Users Say"
            subtitle="Thousands of people have found their perfect homes through DomiHive. Here's what they have to say about their experience."
            centered
          />

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  "DomiHive made my house hunting so much easier! The agent verification gave me peace of mind, and I
                  found my dream apartment in just 2 weeks."
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-muted" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Sarah Okafor</p>
                    <p className="text-xs text-muted-foreground">New Home Owner - Ikeja</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  "The smart matching algorithm is incredible. Instead of scrolling through hundreds of listings, I got
                  matched with properties that actually met my exact criteria. Saved me so much time!"
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-muted" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Anthony Adeloye</p>
                    <p className="text-xs text-muted-foreground">Property Investor - Lagos</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  "Moving to a new city was stressful, but DomiHive connected me with a verified agent who understood
                  exactly what I needed. The live inspection tracking made me feel safe throughout the process."
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-muted" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Jennifer Eze</p>
                    <p className="text-xs text-muted-foreground">Relocating Professional - Port Harcourt</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm font-medium text-green-600">4,500+ average rating from 2,800+ users</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
              Ready to Find Your Perfect Home?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/90 leading-relaxed text-pretty">
              Join thousands of satisfied users who have found their dream homes through DomiHive
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" variant="secondary" asChild className="bg-white text-primary hover:bg-white/90">
                <Link href="/request">
                  <Search className="mr-2 h-5 w-5" />
                  Start Your Search
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                <Link href="/dashboard">Login to Dashboard</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
