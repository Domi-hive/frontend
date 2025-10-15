import { Shield, Upload, Users, DollarSign } from 'lucide-react';

export function AgentProcess() {
  return (
    <section className="relative py-20 bg-white">
      <div className="container mx-auto px-16">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#E3F2FD] text-[#1565C0] rounded-full text-sm mb-4" style={{ fontWeight: 500 }}>
            Simple Process
          </span>
          <h2 className="text-5xl mb-4 text-gray-900" style={{ fontWeight: 600 }}>
            How It Works for Agents
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start earning with DomiHive in four simple steps
          </p>
        </div>

        <div className="grid grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="relative group">
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#1565C0] to-[#1976D2] flex items-center justify-center shadow-xl shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center" style={{ fontWeight: 600 }}>
                  1
                </div>
              </div>
              <h3 className="text-xl mb-3 text-gray-900" style={{ fontWeight: 600 }}>Sign Up & Verify</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Complete verification to become a trusted DomiHive agent.
              </p>
            </div>
            {/* Connector Line */}
            <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#90CAF9] to-transparent"></div>
          </div>

          {/* Step 2 */}
          <div className="relative group">
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#1565C0] to-[#1976D2] flex items-center justify-center shadow-xl shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                  <Upload className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center" style={{ fontWeight: 600 }}>
                  2
                </div>
              </div>
              <h3 className="text-xl mb-3 text-gray-900" style={{ fontWeight: 600 }}>List Properties</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Upload and manage property zones easily.
              </p>
            </div>
            {/* Connector Line */}
            <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#90CAF9] to-transparent"></div>
          </div>

          {/* Step 3 */}
          <div className="relative group">
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#1565C0] to-[#1976D2] flex items-center justify-center shadow-xl shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center" style={{ fontWeight: 600 }}>
                  3
                </div>
              </div>
              <h3 className="text-xl mb-3 text-gray-900" style={{ fontWeight: 600 }}>Receive Client Leads</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Get auto-matched to user property requests.
              </p>
            </div>
            {/* Connector Line */}
            <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#90CAF9] to-transparent"></div>
          </div>

          {/* Step 4 */}
          <div className="relative group">
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#1565C0] to-[#1976D2] flex items-center justify-center shadow-xl shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                  <DollarSign className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center" style={{ fontWeight: 600 }}>
                  4
                </div>
              </div>
              <h3 className="text-xl mb-3 text-gray-900" style={{ fontWeight: 600 }}>Earn Securely</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Get paid safely after inspections and successful deals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
