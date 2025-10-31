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
        <div className="p-8 max-w-[1400px]">
          {/* Header */}
          <DashboardHeader title="My Inspections" />

          {/* Inspections Content */}
          <InspectionsContent />
        </div>
      </div>
    </div>
  );
}