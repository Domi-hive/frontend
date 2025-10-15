import { Home, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#0D47A1] to-[#01579B] text-white">
      <div className="container mx-auto px-16 py-16 relative">
        <div className="grid grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[#90CAF9] to-[#1565C0] rounded-lg flex items-center justify-center">
                <Home className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg" style={{ fontWeight: 600 }}>DomiHive</span>
            </div>
            <p className="text-sm text-blue-100 leading-relaxed mb-6">
              Making home hunting transparent, efficient, and trustworthy for everyone.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#90CAF9] flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#90CAF9] flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#90CAF9] flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#90CAF9] flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h4 className="text-sm mb-4" style={{ fontWeight: 600 }}>Product</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-blue-100 hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-sm text-blue-100 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-sm text-blue-100 hover:text-white transition-colors">For Agents</a></li>
              <li><a href="#" className="text-sm text-blue-100 hover:text-white transition-colors">Partnerships</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-sm mb-4" style={{ fontWeight: 600 }}>Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-blue-100 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm text-blue-100 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-sm text-blue-100 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-sm text-blue-100 hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-sm mb-4" style={{ fontWeight: 600 }}>Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-blue-100">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>hello@domihive.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-blue-100">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>+234 800 123 4567</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-blue-100">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex items-center justify-between">
            <p className="text-sm text-blue-100">
              © 2025 DomiHive. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-blue-100 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-blue-100 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-sm text-blue-100 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
