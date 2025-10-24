import { AgentSidebar } from '../components/agent/AgentSidebar';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';

export function AgentAnalytics() {
  return (
    <div className="flex min-h-screen bg-[#F5FAFF]">
      <AgentSidebar />
      <div className="flex-1 ml-64">
        <div className="p-8 max-w-[1400px]">
          <DashboardHeader />
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Analytics Coming Soon</h2>
            <p className="text-gray-600">Agent analytics dashboard is under development.</p>
          </div>
        </div>
      </div>
    </div>
  );
}