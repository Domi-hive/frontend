import Link from "next/link"
import { Logo } from "@/components/logo"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Making property hunting transparent, efficient, and trustworthy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/#about" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/#features"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/#how-it-works"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Contact Us</h3>
            <ul className="space-y-3">
              <li className="text-sm text-muted-foreground">+234 802 DOMIHIVE</li>
              <li className="text-sm text-muted-foreground">hello@domihive.com</li>
              <li className="flex gap-4 pt-2">
                <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} DomiHive. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
