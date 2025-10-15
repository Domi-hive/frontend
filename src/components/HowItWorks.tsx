import { FileText, Users, Calendar, Home } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

export function HowItWorks() {
  return (
    <section className="relative h-screen bg-[#E3F2FD] flex items-center">
      <div className="container mx-auto px-16 relative">
        <div className="grid grid-cols-2 gap-12 items-center">
          {/* Left - Steps */}
          <div>
            <div className="text-center mb-6">
              <span className="inline-block px-4 py-2 bg-[#90CAF9]/20 text-[#1565C0] rounded-full text-sm mb-3" style={{ fontWeight: 500 }}>
                Simple Process
              </span>
              <h2 className="text-4xl mb-2 text-gray-900" style={{ fontWeight: 600 }}>How It Works</h2>
              <p className="text-gray-600 text-base">
                Finding your perfect home is just a few simple steps away
              </p>
            </div>

            <div className="space-y-4">
              {/* Step 1 */}
              <div className="group flex gap-3 p-3 rounded-2xl hover:bg-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-100">
                <div className="flex-shrink-0">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#1565C0] to-[#1976D2] flex items-center justify-center text-white shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300" style={{ fontWeight: 600 }}>
                    1
                  </div>
                </div>
                <div className="flex-1 pt-0.5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-base mb-1 text-gray-900" style={{ fontWeight: 600 }}>Create Request</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Tell us your requirements: location, budget, property type, and preferences.
                      </p>
                    </div>
                    <div className="w-9 h-9 rounded-lg bg-[#E3F2FD] flex items-center justify-center flex-shrink-0">
                      <FileText className="w-4 h-4 text-[#1565C0]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="group flex gap-3 p-3 rounded-2xl hover:bg-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-100">
                <div className="flex-shrink-0">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#1565C0] to-[#1976D2] flex items-center justify-center text-white shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300" style={{ fontWeight: 600 }}>
                    2
                  </div>
                </div>
                <div className="flex-1 pt-0.5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-base mb-1 text-gray-900" style={{ fontWeight: 600 }}>Get Matched</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Our system connects you with verified agents and properties that match your criteria.
                      </p>
                    </div>
                    <div className="w-9 h-9 rounded-lg bg-[#E3F2FD] flex items-center justify-center flex-shrink-0">
                      <Users className="w-4 h-4 text-[#1565C0]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="group flex gap-3 p-3 rounded-2xl hover:bg-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-100">
                <div className="flex-shrink-0">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#1565C0] to-[#1976D2] flex items-center justify-center text-white shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300" style={{ fontWeight: 600 }}>
                    3
                  </div>
                </div>
                <div className="flex-1 pt-0.5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-base mb-1 text-gray-900" style={{ fontWeight: 600 }}>Schedule Inspection</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Book property viewings with agents and track inspections in real-time for safety.
                      </p>
                    </div>
                    <div className="w-9 h-9 rounded-lg bg-[#E3F2FD] flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-4 h-4 text-[#1565C0]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="group flex gap-3 p-3 rounded-2xl hover:bg-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-100">
                <div className="flex-shrink-0">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#1565C0] to-[#1976D2] flex items-center justify-center text-white shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300" style={{ fontWeight: 600 }}>
                    4
                  </div>
                </div>
                <div className="flex-1 pt-0.5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-base mb-1 text-gray-900" style={{ fontWeight: 600 }}>Find Your Home</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Make secure payments and move into your perfect home with confidence.
                      </p>
                    </div>
                    <div className="w-9 h-9 rounded-lg bg-[#E3F2FD] flex items-center justify-center flex-shrink-0">
                      <Home className="w-4 h-4 text-[#1565C0]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="flex items-center">
            <div className="bg-white rounded-3xl shadow-xl border border-blue-100 p-6 w-full">
              <div className="flex items-center gap-2 text-[#1565C0] mb-4">
                <Home className="w-5 h-5" />
                <span className="text-base" style={{ fontWeight: 600 }}>Try it now</span>
              </div>
              
              <form className="space-y-3">
                <div>
                  <label className="text-sm text-gray-700 mb-1 block">Location</label>
                  <Input 
                    placeholder="Enter city or neighborhood" 
                    className="h-9 rounded-lg border-gray-200 focus:border-[#90CAF9] focus:ring-[#90CAF9]"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-2.5">
                  <div>
                    <label className="text-sm text-gray-700 mb-1 block">Property Type</label>
                    <Select>
                      <SelectTrigger className="h-9 rounded-lg border-gray-200">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="apartment">Apartment</SelectItem>
                        <SelectItem value="house">House</SelectItem>
                        <SelectItem value="villa">Villa</SelectItem>
                        <SelectItem value="condo">Condo</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm text-gray-700 mb-1 block">Budget Range</label>
                    <Select>
                      <SelectTrigger className="h-9 rounded-lg border-gray-200">
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1000-2000">$1K - $2K</SelectItem>
                        <SelectItem value="2000-3000">$2K - $3K</SelectItem>
                        <SelectItem value="3000-5000">$3K - $5K</SelectItem>
                        <SelectItem value="5000+">$5K+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2.5">
                  <div>
                    <label className="text-sm text-gray-700 mb-1 block">Bedrooms</label>
                    <Select>
                      <SelectTrigger className="h-9 rounded-lg border-gray-200">
                        <SelectValue placeholder="Any" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                        <SelectItem value="4+">4+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm text-gray-700 mb-1 block">Bathrooms</label>
                    <Select>
                      <SelectTrigger className="h-9 rounded-lg border-gray-200">
                        <SelectValue placeholder="Any" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                        <SelectItem value="4+">4+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-[#1565C0] to-[#1976D2] hover:from-[#0D47A1] hover:to-[#1565C0] text-white mt-1 h-10 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300">
                  Continue to Preferences
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
