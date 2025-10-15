import { ArrowRight, CheckCircle } from 'lucide-react';

export function AgentCTA() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-[#0D47A1] via-[#1565C0] to-[#1976D2] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.05),transparent_50%)]"></div>
      
      <div className="container mx-auto px-16 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl mb-6 text-white leading-tight" style={{ fontWeight: 600 }}>
            Ready to grow your<br />real estate career?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of verified agents already earning with DomiHive. Start connecting with serious home seekers today.
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-12">
            <button className="group bg-white text-[#1565C0] px-10 py-5 rounded-xl shadow-2xl hover:shadow-white/30 transition-all duration-300 hover:-translate-y-1 flex items-center gap-3" style={{ fontWeight: 600, fontSize: '1.125rem' }}>
              Join DomiHive as an Agent
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
          
          {/* Benefits Quick List */}
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="flex items-center gap-2 text-blue-100">
              <CheckCircle className="w-5 h-5 text-blue-200" />
              <span className="text-sm">Free to join</span>
            </div>
            <div className="flex items-center gap-2 text-blue-100">
              <CheckCircle className="w-5 h-5 text-blue-200" />
              <span className="text-sm">No monthly fees</span>
            </div>
            <div className="flex items-center gap-2 text-blue-100">
              <CheckCircle className="w-5 h-5 text-blue-200" />
              <span className="text-sm">Instant verification</span>
            </div>
            <div className="flex items-center gap-2 text-blue-100">
              <CheckCircle className="w-5 h-5 text-blue-200" />
              <span className="text-sm">24/7 support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
