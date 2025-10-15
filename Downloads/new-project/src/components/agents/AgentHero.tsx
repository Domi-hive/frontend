import { ArrowRight, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function AgentHero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#E3F2FD] to-white overflow-hidden pt-[72px] flex items-center">
      <div className="container mx-auto px-16 py-20">
        <div className="grid grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block px-4 py-2 bg-[#E3F2FD] text-[#1565C0] rounded-full text-sm mb-6" style={{ fontWeight: 500 }}>
              💼 For Real Estate Professionals
            </div>
            
            <h1 className="text-6xl leading-[1.1] mb-6 text-gray-900" style={{ fontWeight: 600 }}>
              Grow Your Real Estate<br />
              <span className="bg-gradient-to-r from-[#1565C0] to-[#90CAF9] bg-clip-text text-transparent">Career</span> with DomiHive
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-lg">
              Connect with clients actively searching for homes. Get verified, receive leads instantly, and manage inspections securely — all in one place.
            </p>
            
            <div className="flex items-center gap-4 mb-12">
              <button className="group bg-gradient-to-r from-[#1565C0] to-[#1976D2] text-white px-8 py-4 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2" style={{ fontWeight: 600 }}>
                Join as an Agent
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="px-8 py-4 rounded-xl border-2 border-[#1565C0] text-[#1565C0] hover:bg-[#E3F2FD] transition-all duration-300" style={{ fontWeight: 500 }}>
                Learn More
              </button>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl text-[#1565C0]" style={{ fontWeight: 600 }}>3x</span>
                  <TrendingUp className="w-5 h-5 text-[#1565C0]" />
                </div>
                <p className="text-sm text-gray-600">More client leads</p>
              </div>
              <div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl text-[#1565C0]" style={{ fontWeight: 600 }}>100%</span>
                </div>
                <p className="text-sm text-gray-600">Verified clients</p>
              </div>
              <div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl text-[#1565C0]" style={{ fontWeight: 600 }}>50%</span>
                </div>
                <p className="text-sm text-gray-600">Faster deals</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhZ2VudCUyMGxhcHRvcCUyMHBob25lfGVufDF8fHx8MTc2MDAxMTM1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional real estate agent"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1565C0]/20 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute top-8 right-8 bg-white rounded-2xl shadow-xl p-4 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1565C0] to-[#1976D2] flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl text-gray-900" style={{ fontWeight: 600 }}>₦2.5M+</div>
                  <p className="text-xs text-gray-600">Average monthly earnings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
