import { Shield, Zap, CreditCard, Users, Handshake, Building2 } from 'lucide-react';

export function AgentBenefits() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-[#E3F2FD] to-white">
      <div className="container mx-auto px-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-4 text-gray-900" style={{ fontWeight: 600 }}>
            Why Join DomiHive?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to succeed as a real estate professional
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {/* Verified Credibility */}
          <div className="group p-8 rounded-3xl bg-white hover:shadow-xl hover:shadow-blue-100 transition-all duration-300 border border-blue-100">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1565C0] to-[#1976D2] flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl mb-3 text-gray-900" style={{ fontWeight: 600 }}>Verified Credibility</h3>
            <p className="text-base text-gray-600 leading-relaxed">
              Stand out with verified agent status. Build trust with clients through our rigorous verification process.
            </p>
          </div>

          {/* Smart Matching */}
          <div className="group p-8 rounded-3xl bg-white hover:shadow-xl hover:shadow-blue-100 transition-all duration-300 border border-blue-100">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1565C0] to-[#1976D2] flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl mb-3 text-gray-900" style={{ fontWeight: 600 }}>Smart Matching Algorithm</h3>
            <p className="text-base text-gray-600 leading-relaxed">
              Get matched with clients who are actively searching for properties in your areas of expertise.
            </p>
          </div>

          {/* Secure Processing */}
          <div className="group p-8 rounded-3xl bg-white hover:shadow-xl hover:shadow-blue-100 transition-all duration-300 border border-blue-100">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1565C0] to-[#1976D2] flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
              <CreditCard className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl mb-3 text-gray-900" style={{ fontWeight: 600 }}>Secure Fee Processing</h3>
            <p className="text-base text-gray-600 leading-relaxed">
              Receive inspection fees securely through our platform with automatic payment tracking.
            </p>
          </div>

          {/* Collaboration */}
          <div className="group p-8 rounded-3xl bg-white hover:shadow-xl hover:shadow-blue-100 transition-all duration-300 border border-blue-100">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1565C0] to-[#1976D2] flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl mb-3 text-gray-900" style={{ fontWeight: 600 }}>Agent Network</h3>
            <p className="text-base text-gray-600 leading-relaxed">
              Connect with other verified agents for referrals, co-listings, and knowledge sharing.
            </p>
          </div>

          {/* Referral Bonuses */}
          <div className="group p-8 rounded-3xl bg-white hover:shadow-xl hover:shadow-blue-100 transition-all duration-300 border border-blue-100">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1565C0] to-[#1976D2] flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
              <Handshake className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl mb-3 text-gray-900" style={{ fontWeight: 600 }}>Referral Bonuses</h3>
            <p className="text-base text-gray-600 leading-relaxed">
              Earn additional income by referring clients and properties to other agents on the platform.
            </p>
          </div>

          {/* Co-listing */}
          <div className="group p-8 rounded-3xl bg-white hover:shadow-xl hover:shadow-blue-100 transition-all duration-300 border border-blue-100">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1565C0] to-[#1976D2] flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl mb-3 text-gray-900" style={{ fontWeight: 600 }}>Co-listing Opportunities</h3>
            <p className="text-base text-gray-600 leading-relaxed">
              Collaborate with other agents to co-list properties and expand your reach in the market.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
