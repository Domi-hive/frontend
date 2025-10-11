"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, Home } from "lucide-react"
import Link from "next/link"
import { Logo } from "@/components/logo"

export default function RequestPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    // Step 1: Basic Requirements
    location: "",
    propertyType: "",
    minPrice: "",
    maxPrice: "",
    bedrooms: "",
    bathrooms: "",
    condition: "",
    tenure: "",
    // Step 2: Preferences
    parking: "",
    furnishing: "",
    amenities: [] as string[],
    moveInDate: "",
    // Step 3: Details
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    additionalInfo: "",
  })

  const updateFormData = (field: string, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4))
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1))

  const handleSubmit = () => {
    // Handle form submission
    nextStep()
  }

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/">
            <Logo />
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {step < 4 ? (
          <>
            {/* Progress Header */}
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold text-foreground text-balance">Find Your Perfect Property</h1>
              <p className="mt-2 text-muted-foreground text-pretty">
                Tell us what you're looking for and we'll match you with the best options
              </p>
            </div>

            {/* Progress Indicator */}
            <div className="mb-12">
              <div className="flex items-center justify-center gap-4">
                <div className="flex flex-col items-center">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold ${
                      step >= 1 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    1
                  </div>
                  <span className="mt-2 text-sm font-medium text-foreground">Basic Requirements</span>
                </div>
                <div className={`h-1 w-24 ${step >= 2 ? "bg-primary" : "bg-muted"}`} />
                <div className="flex flex-col items-center">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold ${
                      step >= 2 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    2
                  </div>
                  <span className="mt-2 text-sm font-medium text-foreground">Preferences</span>
                </div>
                <div className={`h-1 w-24 ${step >= 3 ? "bg-primary" : "bg-muted"}`} />
                <div className="flex flex-col items-center">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold ${
                      step >= 3 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    3
                  </div>
                  <span className="mt-2 text-sm font-medium text-foreground">Details</span>
                </div>
              </div>
            </div>

            {/* Form Card */}
            <Card>
              <CardContent className="pt-6">
                {/* Step 1: Basic Requirements */}
                {step === 1 && (
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 text-primary">
                      <Home className="h-5 w-5" />
                      <h2 className="text-xl font-semibold text-foreground">Basic Requirements</h2>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Let's start with the essentials to help us find your perfect property
                    </p>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input
                          id="location"
                          placeholder="Enter city, neighborhood, or area"
                          value={formData.location}
                          onChange={(e) => updateFormData("location", e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="propertyType">Property Type</Label>
                        <Select
                          value={formData.propertyType}
                          onValueChange={(value) => updateFormData("propertyType", value)}
                        >
                          <SelectTrigger id="propertyType">
                            <SelectValue placeholder="Select property type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="apartment">Apartment</SelectItem>
                            <SelectItem value="house">House</SelectItem>
                            <SelectItem value="duplex">Duplex</SelectItem>
                            <SelectItem value="villa">Villa</SelectItem>
                            <SelectItem value="studio">Studio</SelectItem>
                            <SelectItem value="flat">Flat</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="minPrice">Minimum Price (₦)</Label>
                          <Input
                            id="minPrice"
                            type="number"
                            placeholder="0"
                            value={formData.minPrice}
                            onChange={(e) => updateFormData("minPrice", e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="maxPrice">Maximum Price (₦)</Label>
                          <Input
                            id="maxPrice"
                            type="number"
                            placeholder="10000000"
                            value={formData.maxPrice}
                            onChange={(e) => updateFormData("maxPrice", e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="bedrooms">Bedrooms</Label>
                          <Select
                            value={formData.bedrooms}
                            onValueChange={(value) => updateFormData("bedrooms", value)}
                          >
                            <SelectTrigger id="bedrooms">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="studio">Studio</SelectItem>
                              <SelectItem value="1">1</SelectItem>
                              <SelectItem value="2">2</SelectItem>
                              <SelectItem value="3">3</SelectItem>
                              <SelectItem value="4">4</SelectItem>
                              <SelectItem value="5+">5+</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="bathrooms">Bathrooms</Label>
                          <Select
                            value={formData.bathrooms}
                            onValueChange={(value) => updateFormData("bathrooms", value)}
                          >
                            <SelectTrigger id="bathrooms">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1</SelectItem>
                              <SelectItem value="2">2</SelectItem>
                              <SelectItem value="3">3</SelectItem>
                              <SelectItem value="4">4</SelectItem>
                              <SelectItem value="5+">5+</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="condition">Property Condition</Label>
                        <Select
                          value={formData.condition}
                          onValueChange={(value) => updateFormData("condition", value)}
                        >
                          <SelectTrigger id="condition">
                            <SelectValue placeholder="Select condition" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="new">New/Newly Built</SelectItem>
                            <SelectItem value="renovated">Renovated</SelectItem>
                            <SelectItem value="good">Good Condition</SelectItem>
                            <SelectItem value="fair">Fair Condition</SelectItem>
                            <SelectItem value="any">Any Condition</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="tenure">Tenure</Label>
                        <Select value={formData.tenure} onValueChange={(value) => updateFormData("tenure", value)}>
                          <SelectTrigger id="tenure">
                            <SelectValue placeholder="Select tenure" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="rent">Rent</SelectItem>
                            <SelectItem value="buy">Buy</SelectItem>
                            <SelectItem value="lease">Lease</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button onClick={nextStep} size="lg">
                        Continue to Preferences
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 2: Preferences */}
                {step === 2 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-semibold text-foreground">Preferences</h2>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Help us refine your search with additional preferences
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="parking">Parking</Label>
                        <Select value={formData.parking} onValueChange={(value) => updateFormData("parking", value)}>
                          <SelectTrigger id="parking">
                            <SelectValue placeholder="Select parking requirement" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="none">No Parking Needed</SelectItem>
                            <SelectItem value="1">1 Space</SelectItem>
                            <SelectItem value="2">2 Spaces</SelectItem>
                            <SelectItem value="3+">3+ Spaces</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="furnishing">Furnishing</Label>
                        <Select
                          value={formData.furnishing}
                          onValueChange={(value) => updateFormData("furnishing", value)}
                        >
                          <SelectTrigger id="furnishing">
                            <SelectValue placeholder="Select furnishing preference" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="furnished">Fully Furnished</SelectItem>
                            <SelectItem value="semi-furnished">Semi-Furnished</SelectItem>
                            <SelectItem value="unfurnished">Unfurnished</SelectItem>
                            <SelectItem value="any">Any</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label>Amenities (Select all that apply)</Label>
                        <div className="grid gap-3 sm:grid-cols-2">
                          {[
                            "24/7 Security",
                            "Swimming Pool",
                            "Gym/Fitness Center",
                            "Generator",
                            "Air Conditioning",
                            "Balcony/Terrace",
                            "Garden",
                            "Elevator",
                          ].map((amenity) => (
                            <label key={amenity} className="flex items-center gap-2">
                              <input
                                type="checkbox"
                                checked={formData.amenities.includes(amenity)}
                                onChange={(e) => {
                                  if (e.target.checked) {
                                    updateFormData("amenities", [...formData.amenities, amenity])
                                  } else {
                                    updateFormData(
                                      "amenities",
                                      formData.amenities.filter((a) => a !== amenity),
                                    )
                                  }
                                }}
                                className="h-4 w-4"
                              />
                              <span className="text-sm text-foreground">{amenity}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="moveInDate">Preferred Move-in Date</Label>
                        <Input
                          id="moveInDate"
                          type="date"
                          value={formData.moveInDate}
                          onChange={(e) => updateFormData("moveInDate", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <Button onClick={prevStep} variant="outline" size="lg">
                        Back
                      </Button>
                      <Button onClick={nextStep} size="lg">
                        Continue to Details
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 3: Details */}
                {step === 3 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-semibold text-foreground">Contact Details</h2>
                      <p className="mt-1 text-sm text-muted-foreground">
                        How should verified agents contact you about matching properties?
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input
                            id="firstName"
                            placeholder="Enter your first name"
                            value={formData.firstName}
                            onChange={(e) => updateFormData("firstName", e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            placeholder="Enter your last name"
                            value={formData.lastName}
                            onChange={(e) => updateFormData("lastName", e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={(e) => updateFormData("email", e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+234 800 000 0000"
                          value={formData.phone}
                          onChange={(e) => updateFormData("phone", e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="additionalInfo">Additional Information (Optional)</Label>
                        <Textarea
                          id="additionalInfo"
                          placeholder="Any specific requirements or preferences we should know about?"
                          rows={4}
                          value={formData.additionalInfo}
                          onChange={(e) => updateFormData("additionalInfo", e.target.value)}
                        />
                      </div>

                      <div className="rounded-lg bg-blue-50 p-4">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          By submitting this request, you agree to be contacted by verified agents on our platform. Your
                          information is secure and will only be shared with agents matching your criteria.
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <Button onClick={prevStep} variant="outline" size="lg">
                        Back
                      </Button>
                      <Button onClick={handleSubmit} size="lg">
                        Submit Request
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </>
        ) : (
          /* Success Screen */
          <Card>
            <CardContent className="py-12 text-center">
              <div className="flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle2 className="h-10 w-10 text-green-600" />
                </div>
              </div>
              <h2 className="mt-6 text-2xl font-bold text-foreground">Request Submitted Successfully!</h2>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                We're now matching you with verified agents who have properties that meet your criteria. You'll receive
                notifications as agents respond to your request.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Button asChild size="lg">
                  <Link href="/dashboard">Go to Dashboard</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/">Back to Home</Link>
                </Button>
              </div>
              <div className="mt-8 rounded-lg bg-muted p-4">
                <h3 className="font-semibold text-foreground">What happens next?</h3>
                <ul className="mt-3 space-y-2 text-left text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-600" />
                    <span>Verified agents will review your request and respond with matching properties</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-600" />
                    <span>You'll receive notifications via email and in your dashboard</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-600" />
                    <span>Schedule inspections with agents directly through the platform</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-600" />
                    <span>Track all your requests and communications in one place</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
