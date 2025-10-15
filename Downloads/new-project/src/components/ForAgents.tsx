import { ArrowRight, TrendingUp, Users, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ForAgents() {
  const handleNavigate = () => {
    window.history.pushState({}, '', '/agents');
    window.dispatchEvent(new Event('popstate'));
    window.scrollTo(0, 0);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0D47A1] via-[#1565C0] to-[#1976D2] py-20">
      
      <div className="container mx-auto px-16 relative">
        <div className="grid grid-cols-2 gap-20 items-start">
          {/* Left Content */}
          <div className="text-white">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm mb-6 border border-white/20">
              💼 For Real Estate Professionals
            </span>
            
            <h2 className="text-5xl mb-6 leading-tight" style={{ fontWeight: 600 }}>
              Work as a Verified<br />Agent on DomiHive
            </h2>
            
            <p className="text-xl mb-10 leading-relaxed text-blue-50">
              Join hundreds of licensed agents already using DomiHive to connect with verified clients, manage property inspections, and close deals faster — all in one platform.
            </p>
            
            {/* Benefits */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              <div className="text-center p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                <TrendingUp className="w-8 h-8 mx-auto mb-2 text-blue-200" />
                <div className="text-2xl mb-1" style={{ fontWeight: 600 }}>3x</div>
                <div className="text-xs text-blue-100">More Leads</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                <Users className="w-8 h-8 mx-auto mb-2 text-blue-200" />
                <div className="text-2xl mb-1" style={{ fontWeight: 600 }}>100%</div>
                <div className="text-xs text-blue-100">Verified Clients</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                <Clock className="w-8 h-8 mx-auto mb-2 text-blue-200" />
                <div className="text-2xl mb-1" style={{ fontWeight: 600 }}>50%</div>
                <div className="text-xs text-blue-100">Faster Deals</div>
              </div>
            </div>
            
            <button 
              onClick={handleNavigate}
              className="group inline-flex items-center gap-3 bg-white text-[#1565C0] px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:-translate-y-1"
              style={{ fontWeight: 600 }}
            >
              Become an Agent
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Right Image */}
          <div className="relative sticky top-24">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhZ2VudCUyMGxhcHRvcCUyMHBob25lfGVufDF8fHx8MTc2MDAxMTM1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional real estate agent"
                className="w-full h-[700px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Floating stats card */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-2xl p-6 z-10">
              <div className="flex items-center gap-6">
                <div>
                  <div className="text-3xl text-[#1565C0] mb-1" style={{ fontWeight: 600 }}>300+</div>
                  <p className="text-xs text-gray-600">Active Agents</p>
                </div>
                <div className="h-16 w-px bg-gray-200"></div>
                <div>
                  <div className="text-3xl text-[#1565C0] mb-1" style={{ fontWeight: 600 }}>95%</div>
                  <p className="text-xs text-gray-600">Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
