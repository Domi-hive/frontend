import { TrendingUp, DollarSign, PieChart, BarChart3 } from 'lucide-react';

export function AgentEarnings() {
  return (
    <section className="relative py-20 bg-white">
      <div className="container mx-auto px-16">
        <div className="grid grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-5xl mb-6 text-gray-900" style={{ fontWeight: 600 }}>
              How much can<br />you earn?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Earn commissions for every inspection and successful deal. DomiHive ensures transparent payouts and automatic income tracking.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#E3F2FD] flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-6 h-6 text-[#1565C0]" />
                </div>
                <div>
                  <h4 className="text-lg mb-1 text-gray-900" style={{ fontWeight: 600 }}>Inspection Fees</h4>
                  <p className="text-sm text-gray-600">
                    Earn ₦5,000 - ₦20,000 per property inspection
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#E3F2FD] flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-[#1565C0]" />
                </div>
                <div>
                  <h4 className="text-lg mb-1 text-gray-900" style={{ fontWeight: 600 }}>Deal Commissions</h4>
                  <p className="text-sm text-gray-600">
                    Earn 2.5% - 5% commission on successful property deals
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#E3F2FD] flex items-center justify-center flex-shrink-0">
                  <PieChart className="w-6 h-6 text-[#1565C0]" />
                </div>
                <div>
                  <h4 className="text-lg mb-1 text-gray-900" style={{ fontWeight: 600 }}>Referral Bonuses</h4>
                  <p className="text-sm text-gray-600">
                    Earn 10% of inspection fees for referred clients
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Earnings Visualization */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#E3F2FD] to-white rounded-3xl p-8 border border-blue-100">
              <div className="mb-6">
                <h3 className="text-sm text-gray-600 mb-2">Average Monthly Earnings</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl text-gray-900" style={{ fontWeight: 600 }}>₦2.5M</span>
                  <span className="text-xl text-[#1565C0] flex items-center gap-1">
                    <TrendingUp className="w-5 h-5" />
                    +35%
                  </span>
                </div>
              </div>
              
              {/* Earnings Breakdown */}
              <div className="space-y-4 mb-8">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Inspections</span>
                    <span className="text-sm" style={{ fontWeight: 600 }}>₦800K</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#1565C0] to-[#1976D2] rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Deal Commissions</span>
                    <span className="text-sm" style={{ fontWeight: 600 }}>₦1.5M</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#1565C0] to-[#1976D2] rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Referrals & Bonuses</span>
                    <span className="text-sm" style={{ fontWeight: 600 }}>₦200K</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#1565C0] to-[#1976D2] rounded-full" style={{ width: '25%' }}></div>
                  </div>
                </div>
              </div>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-4 border border-blue-100">
                  <BarChart3 className="w-8 h-8 text-[#1565C0] mb-2" />
                  <div className="text-2xl text-gray-900 mb-1" style={{ fontWeight: 600 }}>25</div>
                  <p className="text-xs text-gray-600">Avg. deals/month</p>
                </div>
                <div className="bg-white rounded-2xl p-4 border border-blue-100">
                  <TrendingUp className="w-8 h-8 text-[#1565C0] mb-2" />
                  <div className="text-2xl text-gray-900 mb-1" style={{ fontWeight: 600 }}>92%</div>
                  <p className="text-xs text-gray-600">Success rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
