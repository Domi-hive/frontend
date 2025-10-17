import { DashboardSidebar } from '../components/dashboard/DashboardSidebar';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';
import { InspectionsPage as InspectionsContent } from '../components/inspections/InspectionsPage';

export function InspectionsPage() {
  return (
    <div className="flex min-h-screen bg-[#F5FAFF]">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main Content */}
      <div className="flex-1 ml-64">
        {/* Header */}
        <DashboardHeader />

        {/* Inspections Content */}
        <InspectionsContent />
      </div>
    </div>
  );
}