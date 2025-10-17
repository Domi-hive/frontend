import { DashboardSidebar } from '../components/dashboard/DashboardSidebar';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';
import { RecommendedPropertiesPage as PropertiesContent } from '../components/properties/RecommendedPropertiesPage';

export function RecommendedPropertiesPage() {
  return (
    <div className="flex min-h-screen bg-[#F5FAFF]">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main Content */}
      <div className="flex-1 ml-64">
        {/* Header */}
        <DashboardHeader />

        {/* Properties Content */}
        <PropertiesContent />
      </div>
    </div>
  );
}