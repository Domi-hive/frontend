import { RequestsList } from './RequestsList';
import type { PropertyRequest } from '../../pages/RequestsPage';

interface RequestsTabsProps {
  activeTab: 'active' | 'pending' | 'history';
  onTabChange: (tab: 'active' | 'pending' | 'history') => void;
}

export function RequestsTabs({ activeTab, onTabChange }: RequestsTabsProps) {
  const tabs = [
    { id: 'active' as const, label: 'Active Requests', count: 2 },
    { id: 'pending' as const, label: 'Pending Requests', count: 1 },
    { id: 'history' as const, label: 'History', count: 3 },
  ];
  
  // Sample data for each tab
  const activeRequests: PropertyRequest[] = [
    {
      id: '1',
      title: '3-Bedroom Duplex in Maitama',
      dateCreated: '2024-02-10',
      status: 'active',
      summary: 'Looking for modern duplex, max ₦4.5M yearly',
      details: {
        propertyType: 'Duplex',
        location: 'Maitama, Abuja',
        budgetRange: '₦3.5M - ₦4.5M per year',
        preferredInspectionDate: 'Feb 20-25, 2024',
        bedrooms: '3',
        bathrooms: '4',
      },
      agentResponses: [
        {
          id: '1',
          agentName: 'Sarah Johnson',
          agentImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
          verified: true,
          message: 'I have a property that fits your request perfectly. It\'s in a prime location...',
          responseTime: '2h ago',
        },
        {
          id: '2',
          agentName: 'Mike Chen',
          agentImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
          verified: true,
          message: 'I can show you 2 options in Maitama that match your budget and requirements...',
          responseTime: '5h ago',
        },
      ],
    },
    {
      id: '2',
      title: '2-Bedroom Apartment in Wuse II',
      dateCreated: '2024-02-08',
      status: 'active',
      summary: 'Looking for 2-bedroom apartment, max ₦2.5M yearly',
      details: {
        propertyType: 'Apartment',
        location: 'Wuse II, Abuja',
        budgetRange: '₦2M - ₦2.5M per year',
        preferredInspectionDate: 'Feb 18-22, 2024',
        bedrooms: '2',
        bathrooms: '2',
      },
      agentResponses: [
        {
          id: '3',
          agentName: 'John Adeyemi',
          agentImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
          verified: true,
          message: 'I have 3 apartments in Wuse II within your budget. Would you like to schedule viewings?',
          responseTime: '1d ago',
        },
      ],
    },
  ];
  
  const pendingRequests: PropertyRequest[] = [
    {
      id: '3',
      title: 'Studio Apartment in Garki',
      dateCreated: '2024-02-14',
      status: 'pending',
      summary: 'Looking for studio apartment, max ₦1.5M yearly',
      details: {
        propertyType: 'Studio',
        location: 'Garki, Abuja',
        budgetRange: '₦1.2M - ₦1.5M per year',
        preferredInspectionDate: 'Feb 25-28, 2024',
        bedrooms: '1',
        bathrooms: '1',
      },
      agentResponses: [],
    },
  ];
  
  const historyRequests: PropertyRequest[] = [
    {
      id: '4',
      title: '4-Bedroom House in Asokoro',
      dateCreated: '2024-01-15',
      status: 'completed',
      summary: 'Completed: Found property through Sarah Johnson',
      details: {
        propertyType: 'House',
        location: 'Asokoro, Abuja',
        budgetRange: '₦5M - ₦6M per year',
        preferredInspectionDate: 'Jan 20-25, 2024',
        bedrooms: '4',
        bathrooms: '5',
      },
    },
    {
      id: '5',
      title: '3-Bedroom Flat in Jabi',
      dateCreated: '2024-01-10',
      status: 'cancelled',
      summary: 'Cancelled: Budget changed',
      details: {
        propertyType: 'Flat',
        location: 'Jabi, Abuja',
        budgetRange: '₦2.5M - ₦3M per year',
        preferredInspectionDate: 'Jan 15-20, 2024',
        bedrooms: '3',
        bathrooms: '3',
      },
    },
    {
      id: '6',
      title: 'Penthouse in Central District',
      dateCreated: '2023-12-20',
      status: 'completed',
      summary: 'Completed: Successful deal',
      details: {
        propertyType: 'Penthouse',
        location: 'Central District, Abuja',
        budgetRange: '₦8M - ₦10M per year',
        preferredInspectionDate: 'Dec 28-30, 2023',
        bedrooms: '3',
        bathrooms: '4',
      },
    },
  ];
  
  const getRequestsForTab = () => {
    switch (activeTab) {
      case 'active':
        return activeRequests;
      case 'pending':
        return pendingRequests;
      case 'history':
        return historyRequests;
      default:
        return [];
    }
  };
  
  return (
    <div>
      {/* Tabs Navigation */}
      <div className="flex items-center gap-2 mb-6 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`relative px-6 py-3 text-sm transition-all duration-200 ${
              activeTab === tab.id
                ? 'text-[#1565C0]'
                : 'text-gray-600 hover:text-gray-900'
            }`}
            style={{ fontWeight: activeTab === tab.id ? 600 : 500 }}
          >
            {tab.label}
            {tab.count > 0 && (
              <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                activeTab === tab.id
                  ? 'bg-[#E3F2FD] text-[#1565C0]'
                  : 'bg-gray-100 text-gray-600'
              }`}>
                {tab.count}
              </span>
            )}
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1565C0]"></div>
            )}
          </button>
        ))}
      </div>
      
      {/* Tab Content */}
      <RequestsList requests={getRequestsForTab()} isHistory={activeTab === 'history'} />
    </div>
  );
}
