import { PropertyCard } from '../components/PropertyCard';
import { HowItWorks } from '../components/HowItWorks';
import { WhyChoose } from '../components/WhyChoose';
import { ForAgents } from '../components/ForAgents';
import { Footer } from '../components/Footer';
import { SectionDivider } from '../components/SectionDivider';
import { AnimatedSection } from '../components/AnimatedSection';
import mapImage from 'figma:asset/c2aa20b342c0acc9571cf818b990b9f23f31f2d9.png';
import { Home, Check, Search } from 'lucide-react';

export function HomePage() {
  return (
    <>
      {/* Hero Section - Immersive Split Screen */}
      <section className="relative min-h-screen bg-gradient-to-br from-[#0D47A1] via-[#1565C0] to-[#1976D2] overflow-hidden pt-[72px]">
        <div className="absolute top-[72px] bottom-0 left-0 right-0 flex">
          {/* Left Side - Gradient Background */}
          <div className="w-1/2 bg-gradient-to-br from-[#0D47A1] via-[#1565C0] to-[#1976D2]"></div>
          
          {/* Right Side - Map extending to edge */}
          <div className="w-1/2 relative">
            <img 
              src={mapImage} 
              alt="Map" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content Container */}
        <div className="relative min-h-[calc(100vh-72px)] flex items-center">
          <div className="container mx-auto px-16 py-16">
            <div className="grid grid-cols-2 gap-20 items-start">
              {/* Left Content */}
              <div className="relative z-10 pt-8">
                <AnimatedSection animation="fade" delay={200}>
                  <div className="inline-block px-4 py-2 bg-[#90CAF9]/20 rounded-full border border-[#90CAF9]/30 mb-6">
                    <span className="text-sm text-blue-100">🏡 Trusted by 10,000+ home seekers</span>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection animation="slide-up" delay={400}>
                  <h1 className="text-6xl leading-[1.1] mb-6 text-white" style={{ fontWeight: 600 }}>
                    We Take Your<br />
                    <span className="bg-gradient-to-r from-[#90CAF9] to-[#BBDEFB] bg-clip-text text-transparent">Dream Home</span><br />
                    & It's Easy Peasy.
                  </h1>
                </AnimatedSection>
                
                <AnimatedSection animation="slide-up" delay={600}>
                  <p className="text-blue-50 text-lg mb-10 max-w-lg leading-relaxed">
                    Connect with verified agents. Discover verified properties, and enjoy secure inspections. DomiHive makes home hunting transparent, efficient, and trustworthy.
                  </p>
                </AnimatedSection>
                
                <AnimatedSection animation="slide-up" delay={800}>
                  <div className="flex items-center gap-4 mb-12">
                    <button className="group bg-white text-[#1565C0] px-8 py-4 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2" style={{ fontWeight: 600 }}>
                      <Search className="w-5 h-5" />
                      Find Your Home
                    </button>
                    <button className="px-8 py-4 rounded-xl border-2 border-[#90CAF9]/30 text-white hover:bg-white/10 transition-all duration-300" style={{ fontWeight: 500 }}>
                      Learn More
                    </button>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection animation="fade" delay={1000}>
                  <div className="flex items-center gap-8 mb-16">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-[#90CAF9] flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" strokeWidth={3} />
                      </div>
                      <span className="text-sm text-blue-100">Verified Agents</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-[#90CAF9] flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" strokeWidth={3} />
                      </div>
                      <span className="text-sm text-blue-100">Secure Payments</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-[#90CAF9] flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" strokeWidth={3} />
                      </div>
                      <span className="text-sm text-blue-100">Live Tracking</span>
                    </div>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection animation="slide-up" delay={1200}>
                  <div className="pt-8 border-t border-white/10">
                    <p className="text-sm text-blue-200 mb-4">Our milestone</p>
                    <div className="flex items-end gap-16">
                      <div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-5xl text-white" style={{ fontWeight: 600 }}>300</span>
                          <span className="text-[#90CAF9] text-3xl">+</span>
                        </div>
                        <p className="text-sm text-blue-100 mt-1">Verified Agents</p>
                      </div>
                      <div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-5xl text-white" style={{ fontWeight: 600 }}>2000</span>
                          <span className="text-[#90CAF9] text-3xl">+</span>
                        </div>
                        <p className="text-sm text-blue-100 mt-1">Homes Listed</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>

              {/* Right Side - Property Cards Overlay */}
              <div className="relative pt-8">
                {/* Large Featured Card - Aligned with headline */}
                <AnimatedSection animation="slide-left" delay={600}>
                  <div className="relative z-30 mb-6">
                    <PropertyCard
                      image="figma:asset/a47b85d26a369d6b6e56edbe687c0453a4ef0a14.png"
                      price="$2,700"
                      period="/month"
                      title="Beverly Springfield"
                      address="2621 Lake Sevilla, Palm Harbor, TX"
                      beds={4}
                      baths={2}
                      area="8x75 m²"
                      className="hover:scale-105 transition-all duration-500 shadow-2xl"
                      featured
                    />
                  </div>
                </AnimatedSection>
                
                {/* Secondary Card - Top Right Diagonal Offset */}
                <AnimatedSection animation="slide-left" delay={900}>
                  <div className="absolute top-0 right-0 z-20">
                    <PropertyCard
                      image="figma:asset/a47b85d26a369d6b6e56edbe687c0453a4ef0a14.png"
                      price="$1,600"
                      period="/month"
                      title="Tarpon Bay"
                      address="Palm Harbor, TX"
                      beds={4}
                      baths={7}
                      area="6x8 m²"
                      className="hover:scale-105 transition-all duration-500 opacity-90 hover:opacity-100"
                    />
                  </div>
                </AnimatedSection>
                
                {/* Tertiary Card - Bottom Left Diagonal Offset */}
                <AnimatedSection animation="slide-right" delay={1100}>
                  <div className="relative z-10 ml-0 mt-4">
                    <PropertyCard
                      image="figma:asset/a47b85d26a369d6b6e56edbe687c0453a4ef0a14.png"
                      price="$3,200"
                      period="/month"
                      title="Sunset Villa"
                      address="Downtown, TX"
                      beds={3}
                      baths={2}
                      area="7x10 m²"
                      className="hover:scale-105 transition-all duration-500 opacity-80 hover:opacity-100"
                    />
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clean Divider */}
      <SectionDivider 
        fromColor="from-[#1976D2]" 
        toColor="to-[#E3F2FD]" 
        height="md"
      />

      {/* How It Works Section - Light */}
      <HowItWorks />

      {/* Clean Divider */}
      <SectionDivider 
        fromColor="from-[#E3F2FD]" 
        toColor="to-white" 
        height="sm"
      />

      {/* Why Choose Section */}
      <WhyChoose />

      {/* Clean Divider */}
      <SectionDivider 
        fromColor="from-white" 
        toColor="to-[#1565C0]" 
        height="md"
      />

      {/* For Agents Section - Mid-dark */}
      <ForAgents />
      
      {/* Clean Divider */}
      <SectionDivider 
        fromColor="from-[#1565C0]" 
        toColor="to-[#0D47A1]" 
        height="sm"
      />
      
      {/* Footer - Deepest */}
      <Footer />
    </>
  );
}
