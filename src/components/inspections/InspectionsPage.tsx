import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { InspectionCard } from './InspectionCard';
import { RescheduleModal } from './RescheduleModal';
import { DirectionsModal } from './DirectionsModal';
import { toast } from 'sonner';

export function InspectionsPage() {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [rescheduleModal, setRescheduleModal] = useState<{ open: boolean; id: string; property: string }>({
    open: false,
    id: '',
    property: '',
  });
  const [directionsModal, setDirectionsModal] = useState<{ open: boolean; location: string }>({
    open: false,
    location: '',
  });

  const [inspections, setInspections] = useState([
    {
      id: '1',
      property: 'Luxury Duplex in Maitama',
      propertyType: '3-Bedroom Apartment in Wuse II',
      date: 'Thursday, Oct 17',
      time: '2:30 PM',
      location: '12 Ahmadu Bello Way, Wuse II, Abuja',
      agent: {
        name: 'Sarah Johnson',
        phone: '+234 812 345 6789',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
        verified: true,
      },
      status: 'confirmed' as const,
    },
    {
      id: '2',
      property: 'Modern 2-Bedroom in Wuse II',
      propertyType: '2-Bedroom Apartment',
      date: 'Friday, Oct 18',
      time: '10:00 AM',
      location: '45 Gimbiya Street, Garki, Abuja',
      agent: {
        name: 'Mike Chen',
        phone: '+234 801 234 5678',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
        verified: true,
      },
      status: 'scheduled' as const,
    },
    {
      id: '3',
      property: 'Cozy Studio in Garki',
      propertyType: 'Studio Apartment',
      date: 'Monday, Oct 21',
      time: '3:00 PM',
      location: '78 Ladoke Akintola Boulevard, Garki II, Abuja',
      agent: {
        name: 'Emma Davis',
        phone: '+234 803 456 7890',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
        verified: true,
      },
      status: 'pending' as const,
    },
  ]);

  const historyInspections = [
    {
      id: '4',
      property: '4-Bedroom House in Asokoro',
      propertyType: '4-Bedroom Detached House',
      date: 'Monday, Oct 14',
      time: '11:00 AM',
      location: '23 Diplomatic Drive, Asokoro, Abuja',
      agent: {
        name: 'Sarah Johnson',
        phone: '+234 812 345 6789',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
        verified: true,
      },
      status: 'completed' as const,
    },
    {
      id: '5',
      property: '3-Bedroom Flat in Jabi',
      propertyType: '3-Bedroom Apartment',
      date: 'Friday, Oct 11',
      time: '2:00 PM',
      location: '12 Jabi Lake Mall Road, Jabi, Abuja',
      agent: {
        name: 'Mike Chen',
        phone: '+234 801 234 5678',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
        verified: true,
      },
      status: 'cancelled' as const,
    },
    {
      id: '6',
      property: 'Penthouse in Central District',
      propertyType: 'Luxury Penthouse',
      date: 'Wednesday, Sep 25',
      time: '4:30 PM',
      location: '5 Central Business District, Abuja',
      agent: {
        name: 'Emma Davis',
        phone: '+234 803 456 7890',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
        verified: true,
      },
      status: 'completed' as const,
    },
  ];

  const handleReschedule = (id: string) => {
    const inspection = inspections.find((i) => i.id === id);
    if (inspection) {
      setRescheduleModal({ open: true, id, property: inspection.property });
    }
  };

  const handleCancel = (id: string) => {
    setInspections((prev) =>
      prev.map((inspection) =>
        inspection.id === id ? { ...inspection, status: 'cancelled' as const } : inspection
      )
    );
    toast.error('Inspection cancelled', {
      description: 'The inspection has been cancelled successfully.',
    });
  };

  const handleGetDirections = (location: string) => {
    setDirectionsModal({ open: true, location });
  };

  return (
    <div>
      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div role="tablist" aria-orientation="horizontal" className="text-muted-foreground h-7 w-fit items-center justify-start rounded-xl p-[2px] flex mb-6 bg-[#F5FAFF]" tabIndex={0} data-orientation="horizontal" style={{ outline: 'currentcolor' }}>
          <button type="button" role="tab" aria-selected={activeTab === 'upcoming'} aria-controls="radix-:r0:-content-upcoming" data-state={activeTab === 'upcoming' ? 'active' : 'inactive'} id="radix-:r0:-trigger-upcoming" className={`${activeTab === 'upcoming' ? 'bg-white' : ''} dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex items-center justify-center gap-1.5 rounded-xl border border-transparent px-3 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 hover:bg-white/50`} tabIndex={-1} data-orientation="horizontal" onClick={() => setActiveTab('upcoming')}>
            Upcoming Inspections
          </button>
          <button type="button" role="tab" aria-selected={activeTab === 'history'} aria-controls="radix-:r0:-content-history" data-state={activeTab === 'history' ? 'active' : 'inactive'} id="radix-:r0:-trigger-history" className={`${activeTab === 'history' ? 'bg-white' : ''} dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex items-center justify-center gap-1.5 rounded-xl border border-transparent px-3 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 hover:bg-white/50`} tabIndex={-1} data-orientation="horizontal" onClick={() => setActiveTab('history')}>
            Inspection History
          </button>
        </div>

        <TabsContent value="upcoming" className="space-y-4 animate-in fade-in-50 duration-300">
          {inspections.filter((i) => i.status !== 'cancelled').length === 0 ? (
            <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
              <p className="text-gray-600">No upcoming inspections</p>
            </div>
          ) : (
            inspections
              .filter((i) => i.status !== 'cancelled')
              .map((inspection) => (
                <InspectionCard
                  key={inspection.id}
                  inspection={inspection}
                  onReschedule={handleReschedule}
                  onCancel={handleCancel}
                  onGetDirections={handleGetDirections}
                />
              ))
          )}
        </TabsContent>

        <TabsContent value="history" className="space-y-4 animate-in fade-in-50 duration-300">
          {historyInspections.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
              <p className="text-gray-600">No inspection history</p>
            </div>
          ) : (
            historyInspections.map((inspection) => (
              <InspectionCard key={inspection.id} inspection={inspection} isHistory />
            ))
          )}
        </TabsContent>
      </Tabs>

      {/* Modals */}
      <RescheduleModal
        open={rescheduleModal.open}
        onClose={() => setRescheduleModal({ open: false, id: '', property: '' })}
        inspectionId={rescheduleModal.id}
        propertyName={rescheduleModal.property}
      />

      <DirectionsModal
        open={directionsModal.open}
        onClose={() => setDirectionsModal({ open: false, location: '' })}
        location={directionsModal.location}
      />
    </div>
  );
}