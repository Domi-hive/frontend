import { DashboardSidebar } from '../components/dashboard/DashboardSidebar';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';
import { RequestsHeader } from '../components/requests/RequestsHeader';
import { RequestsTabs } from '../components/requests/RequestsTabs';
import { CreateRequestModal } from '../components/requests/CreateRequestModal';
import { useState } from 'react';

export type RequestStatus = 'active' | 'pending' | 'completed' | 'cancelled';

export interface AgentResponse {
  id: string;
  agentName: string;
  agentImage: string;
  verified: boolean;
  message: string;
  responseTime: string;
}

export interface PropertyRequest {
  id: string;
  title: string;
  dateCreated: string;
  status: RequestStatus;
  summary: string;
  details: {
    propertyType: string;
    location: string;
    budgetRange: string;
    preferredInspectionDate: string;
    bedrooms?: string;
    bathrooms?: string;
  };
  agentResponses?: AgentResponse[];
}

export function RequestsPage() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [activeTab, setActiveTab] = useState<'active' | 'pending' | 'history'>('active');
  
  return (
    <div className="flex min-h-screen bg-[#F5FAFF]">
      {/* Sidebar */}
      <DashboardSidebar />
      
      {/* Main Content */}
      <div className="flex-1 ml-64">
        <div className="p-8">
          {/* Header */}
          <DashboardHeader />
          
          {/* Requests Header */}
          <RequestsHeader onCreateNew={() => setShowCreateModal(true)} />
          
          {/* Tabs & Content */}
          <RequestsTabs activeTab={activeTab} onTabChange={setActiveTab} />
        </div>
      </div>
      
      {/* Create Request Modal */}
      {showCreateModal && (
        <CreateRequestModal onClose={() => setShowCreateModal(false)} />
      )}
    </div>
  );
}
