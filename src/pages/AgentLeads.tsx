import { AgentSidebar } from '../components/agent/AgentSidebar';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';
import { AgentLeadsPage } from '../components/agent/AgentLeadsPage';

export function AgentLeads() {
  return (
    <div className="flex min-h-screen bg-[#F5FAFF]">
      <AgentSidebar />
      <div className="flex-1 ml-64">
        <div className="p-8 max-w-[1400px]">
          <DashboardHeader />
          <AgentLeadsPage />
        </div>
      </div>
    </div>
  );
}