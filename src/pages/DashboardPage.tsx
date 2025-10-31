import { DashboardSidebar } from '../components/dashboard/DashboardSidebar';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';
import { DashboardHero } from '../components/dashboard/DashboardHero';
import { ProgressCards } from '../components/dashboard/ProgressCards';
import { ContinueSearching } from '../components/dashboard/ContinueSearching';
import { YourRequests } from '../components/dashboard/YourRequests';
import { CreateRequestModal } from '../components/requests/CreateRequestModal';
import { useState } from 'react';

interface DashboardPageProps {
  onLogout: () => void;
}

export function DashboardPage({ onLogout }: DashboardPageProps) {
  const [showCreateModal, setShowCreateModal] = useState(false);
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
          <DashboardHero onCreateRequest={() => setShowCreateModal(true)} />
          
          {/* Progress Cards */}
          <ProgressCards />
          
          {/* Main Content */}
          <div>
            {/* Matched Properties */}
            <ContinueSearching />
            
            {/* Your Requests Table */}
            <YourRequests />
          </div>
        </div>
      </div>

      {/* Create Request Modal */}
      {showCreateModal && (
        <CreateRequestModal onClose={() => setShowCreateModal(false)} />
      )}
    </div>
  );
}
