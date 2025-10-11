import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Bell, Shield } from "lucide-react"

export default function ProfilePage() {
  return (
    <div className="flex flex-col">
      <div className="border-b border-border bg-background px-8 py-6">
        <h1 className="text-2xl font-bold text-foreground">Profile Settings</h1>
        <p className="mt-1 text-sm text-muted-foreground">Manage your account information and preferences</p>
      </div>

      <div className="flex-1 space-y-6 p-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Profile Picture */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Profile Picture</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <div className="flex h-32 w-32 items-center justify-center rounded-full bg-primary text-4xl font-bold text-primary-foreground">
                M
              </div>
              <Button className="mt-4 bg-transparent" variant="outline">
                Change Photo
              </Button>
            </CardContent>
          </Card>

          {/* Personal Information */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="Muhammad" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Ibrahim" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input id="email" type="email" className="pl-9" defaultValue="muhammad@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input id="phone" type="tel" className="pl-9" defaultValue="+234 802 123 4567" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input id="location" className="pl-9" defaultValue="Abuja, Nigeria" />
                </div>
              </div>
              <Button>Save Changes</Button>
            </CardContent>
          </Card>
        </div>

        {/* Preferences */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Notification Preferences
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">New Agent Responses</p>
                <p className="text-sm text-muted-foreground">Get notified when agents respond to your requests</p>
              </div>
              <input type="checkbox" defaultChecked className="h-4 w-4" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">Inspection Reminders</p>
                <p className="text-sm text-muted-foreground">Receive reminders before scheduled inspections</p>
              </div>
              <input type="checkbox" defaultChecked className="h-4 w-4" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">Price Alerts</p>
                <p className="text-sm text-muted-foreground">Get notified about price changes on saved properties</p>
              </div>
              <input type="checkbox" defaultChecked className="h-4 w-4" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">Marketing Emails</p>
                <p className="text-sm text-muted-foreground">Receive updates about new features and promotions</p>
              </div>
              <input type="checkbox" className="h-4 w-4" />
            </div>
          </CardContent>
        </Card>

        {/* Security */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Security
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="currentPassword">Current Password</Label>
              <Input id="currentPassword" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="newPassword">New Password</Label>
              <Input id="newPassword" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm New Password</Label>
              <Input id="confirmPassword" type="password" />
            </div>
            <Button>Update Password</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
