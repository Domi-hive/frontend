import { DashboardSidebar } from '../components/dashboard/DashboardSidebar';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';
import { DashboardHero } from '../components/dashboard/DashboardHero';
import { ProgressCards } from '../components/dashboard/ProgressCards';
import { ContinueSearching } from '../components/dashboard/ContinueSearching';
import { YourRequests } from '../components/dashboard/YourRequests';
import { AgentsList } from '../components/dashboard/AgentsList';

interface DashboardPageProps {
  onLogout: () => void;
}

export function DashboardPage({ onLogout }: DashboardPageProps) {
  return (
    <div className="flex min-h-screen bg-[#F5FAFF]">
      {/* Sidebar */}
      <DashboardSidebar onLogout={onLogout} />
      
      {/* Main Content */}
      <div className="flex-1 ml-64">
        <div className="p-8 max-w-[1400px]">
          {/* Header */}
          <DashboardHeader />
          
          {/* Hero Banner - Greeting & Quick Action */}
          <DashboardHero />
          
          {/* Progress Cards */}
          <ProgressCards />
          
          {/* Main Content Grid */}
          <div className="grid grid-cols-[1fr_340px] gap-6">
            {/* Left Column */}
            <div>
              {/* Matched Properties */}
              <ContinueSearching />
              
              {/* Your Requests Table */}
              <YourRequests />
            </div>
            
            {/* Right Column */}
            <div>
              {/* Agents List */}
              <AgentsList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
