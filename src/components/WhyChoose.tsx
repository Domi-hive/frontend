import { Shield, Sparkles, MapPin, CreditCard } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function WhyChoose() {
  return (
    <section className="relative py-20 bg-white">
      <div className="container mx-auto px-16">
        <div className="grid grid-cols-2 gap-16 items-start">
          {/* Left Column - Image Only */}
          <div className="sticky top-24">
            <div className="relative rounded-2xl overflow-hidden shadow-xl group">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1631971866497-9cfe207fca74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmljayUyMGhvdXNlJTIwYmx1ZSUyMHNreXxlbnwxfHx8fDE3NjAwMTEwNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Beautiful brick house"
                className="w-full h-[700px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Column - Text and Feature Cards */}
          <div>
            <span className="inline-block px-4 py-2 bg-[#E3F2FD] text-[#1565C0] rounded-full text-sm mb-4" style={{ fontWeight: 500 }}>
              Why Choose Us
            </span>
            
            <h2 className="text-4xl mb-4 text-gray-900" style={{ fontWeight: 600 }}>
              Why Choose DomiHive?
            </h2>
            <p className="text-base text-gray-600 leading-relaxed mb-10">
              We've built the most comprehensive and secure property platform to make your house hunting experience seamless and trustworthy.
            </p>
            
            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-6">
              {/* Verified Agents */}
              <div className="group p-5 rounded-2xl bg-[#E3F2FD] hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1565C0] to-[#1976D2] flex items-center justify-center flex-shrink-0 mb-3 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-base mb-2 text-gray-900" style={{ fontWeight: 600 }}>Verified Agents</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Connect with licensed, verified real estate professionals.
                </p>
              </div>
              
              {/* Smart Matching */}
              <div className="group p-5 rounded-2xl bg-[#E3F2FD] hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1565C0] to-[#1976D2] flex items-center justify-center flex-shrink-0 mb-3 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-base mb-2 text-gray-900" style={{ fontWeight: 600 }}>Smart Matching</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  AI algorithm matches you with perfect properties.
                </p>
              </div>
              
              {/* Live Inspection Tracking */}
              <div className="group p-5 rounded-2xl bg-[#E3F2FD] hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1565C0] to-[#1976D2] flex items-center justify-center flex-shrink-0 mb-3 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-base mb-2 text-gray-900" style={{ fontWeight: 600 }}>Live Inspection Tracking</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Track inspections in real-time for safety.
                </p>
              </div>
              
              {/* Secure Payments */}
              <div className="group p-5 rounded-2xl bg-[#E3F2FD] hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1565C0] to-[#1976D2] flex items-center justify-center flex-shrink-0 mb-3 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-base mb-2 text-gray-900" style={{ fontWeight: 600 }}>Secure Payments</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Full transaction protection and transparency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
