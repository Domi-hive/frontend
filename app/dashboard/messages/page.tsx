import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Send, Paperclip, MoreVertical } from "lucide-react"

export default function MessagesPage() {
  return (
    <div className="flex h-screen flex-col">
      <div className="border-b border-border bg-background px-8 py-6">
        <h1 className="text-2xl font-bold text-foreground">Messages</h1>
        <p className="mt-1 text-sm text-muted-foreground">Communicate with verified agents</p>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Conversations List */}
        <div className="w-80 border-r border-border bg-background">
          <div className="border-b border-border p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search messages..." className="pl-9" />
            </div>
          </div>
          <div className="overflow-y-auto">
            <button className="w-full border-b border-border bg-blue-50 p-4 text-left transition-colors hover:bg-muted">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  AA
                </div>
                <div className="flex-1 overflow-hidden">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-foreground">Agent Ada</p>
                    <span className="text-xs text-muted-foreground">4h ago</span>
                  </div>
                  <p className="truncate text-sm text-muted-foreground">I have a perfect property that matches...</p>
                  <Badge className="mt-1 bg-blue-100 text-blue-700 hover:bg-blue-100">2 new</Badge>
                </div>
              </div>
            </button>

            <button className="w-full border-b border-border p-4 text-left transition-colors hover:bg-muted">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  JO
                </div>
                <div className="flex-1 overflow-hidden">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-foreground">Agent John</p>
                    <span className="text-xs text-muted-foreground">2h ago</span>
                  </div>
                  <p className="truncate text-sm text-muted-foreground">Confirmed for tomorrow at 5PM</p>
                </div>
              </div>
            </button>

            <button className="w-full border-b border-border p-4 text-left transition-colors hover:bg-muted">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  EM
                </div>
                <div className="flex-1 overflow-hidden">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-foreground">Agent Emmanuel</p>
                    <span className="text-xs text-muted-foreground">1d ago</span>
                  </div>
                  <p className="truncate text-sm text-muted-foreground">Thank you for your interest!</p>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex flex-1 flex-col">
          {/* Chat Header */}
          <div className="flex items-center justify-between border-b border-border bg-background p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                AA
              </div>
              <div>
                <p className="font-semibold text-foreground">Agent Ada</p>
                <p className="text-xs text-muted-foreground">Verified Agent • Lagos</p>
              </div>
            </div>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-5 w-5" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-4 overflow-y-auto p-6">
            <div className="flex justify-start">
              <div className="max-w-[70%] rounded-lg bg-muted p-3">
                <p className="text-sm text-foreground">
                  Hello! I saw your request for a 2-bedroom in Wuse II. I have a perfect property that matches your
                  requirements.
                </p>
                <p className="mt-1 text-xs text-muted-foreground">10:30 AM</p>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="max-w-[70%] rounded-lg bg-primary p-3 text-primary-foreground">
                <p className="text-sm">That sounds great! Can you share more details?</p>
                <p className="mt-1 text-xs text-primary-foreground/70">10:32 AM</p>
              </div>
            </div>

            <div className="flex justify-start">
              <div className="max-w-[70%] rounded-lg bg-muted p-3">
                <p className="text-sm text-foreground">
                  Of course! It's a newly renovated 2-bedroom apartment with modern fittings. The rent is ₦2.5M per
                  year. Would you like to schedule an inspection?
                </p>
                <p className="mt-1 text-xs text-muted-foreground">10:35 AM</p>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="max-w-[70%] rounded-lg bg-primary p-3 text-primary-foreground">
                <p className="text-sm">Yes, please! When are you available?</p>
                <p className="mt-1 text-xs text-primary-foreground/70">10:37 AM</p>
              </div>
            </div>

            <div className="flex justify-start">
              <div className="max-w-[70%] rounded-lg bg-muted p-3">
                <p className="text-sm text-foreground">
                  I'm available tomorrow afternoon. How about 3PM? I'll send you the location details.
                </p>
                <p className="mt-1 text-xs text-muted-foreground">4h ago</p>
              </div>
            </div>
          </div>

          {/* Message Input */}
          <div className="border-t border-border bg-background p-4">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Paperclip className="h-5 w-5" />
              </Button>
              <Input placeholder="Type your message..." className="flex-1" />
              <Button>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
