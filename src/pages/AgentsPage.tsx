import { AgentHero } from '../components/agents/AgentHero';
import { AgentProcess } from '../components/agents/AgentProcess';
import { AgentBenefits } from '../components/agents/AgentBenefits';
import { AgentEarnings } from '../components/agents/AgentEarnings';
import { AgentCTA } from '../components/agents/AgentCTA';
import { Footer } from '../components/Footer';
import { SectionDivider } from '../components/SectionDivider';

export function AgentsPage() {
  return (
    <>
      {/* Hero Section */}
      <AgentHero />

      {/* Clean Divider */}
      <SectionDivider 
        fromColor="from-white" 
        toColor="to-white" 
        height="sm"
      />

      {/* How It Works Section */}
      <AgentProcess />

      {/* Clean Divider */}
      <SectionDivider 
        fromColor="from-white" 
        toColor="to-[#E3F2FD]" 
        height="sm"
      />

      {/* Benefits Section */}
      <AgentBenefits />

      {/* Clean Divider */}
      <SectionDivider 
        fromColor="from-white" 
        toColor="to-white" 
        height="sm"
      />

      {/* Earnings Section */}
      <AgentEarnings />

      {/* Clean Divider */}
      <SectionDivider 
        fromColor="from-white" 
        toColor="to-[#1565C0]" 
        height="md"
      />

      {/* CTA Section */}
      <AgentCTA />
      
      {/* Clean Divider */}
      <SectionDivider 
        fromColor="from-[#1976D2]" 
        toColor="to-[#0D47A1]" 
        height="sm"
      />
      
      {/* Footer */}
      <Footer />
    </>
  );
}
