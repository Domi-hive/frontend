import { useState } from 'react';
import { Search, Plus, ChevronDown, ChevronUp, Phone, MessageSquare, MapPin, CheckCircle, Calendar as CalendarIcon, XCircle, Clock, TrendingUp } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { RescheduleInspectionModal } from './RescheduleInspectionModal';
import { DirectionsMapModal } from './DirectionsMapModal';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from './ui/alert-dialog';
import { toast } from 'sonner';

interface Inspection {
  id: string;
  propertyName: string;
  propertyImage: string;
  propertyType: string;
  address: string;
  location: string;
  clientName: string;
  clientAvatar: string;
  clientPhone: string;
  date: string;
  time: string;
  status: 'scheduled' | 'awaiting_confirmation' | 'in_progress' | 'completed' | 'canceled';
  statusLabel: string;
  notes?: string;
}

export function AgentInspectionsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('all');
  const [activeTab, setActiveTab] = useState('upcoming');
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [rescheduleModal, setRescheduleModal] = useState<{ open: boolean; id: string; propertyName: string }>({
    open: false,
    id: '',
    propertyName: '',
  });
  const [directionsModal, setDirectionsModal] = useState<{ open: boolean; address: string; propertyName: string }>({
    open: false,
    address: '',
    propertyName: '',
  });
  const [cancelDialog, setCancelDialog] = useState<{ open: boolean; id: string }>({ open: false, id: '' });

  const [inspections, setInspections] = useState<Inspection[]>([
    {
      id: '1',
      propertyName: 'Luxury 3-Bedroom Apartment',
      propertyImage: 'https://images.unsplash.com/photo-1611095210561-67f0832b1ca3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBsaXZpbmd8ZW58MXx8fHwxNzYxMDQ3MjEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      propertyType: '3-Bedroom Apartment',
      address: '12 Ahmadu Bello Way, Wuse II, Abuja',
      location: 'Wuse II, Abuja',
      clientName: 'Muhammad K.',
      clientAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
      clientPhone: '+234 801 234 5678',
      date: 'Oct 23, 2025',
      time: '2:30 PM',
      status: 'scheduled',
      statusLabel: 'Scheduled',
      notes: 'Client is particularly interested in the kitchen and balcony views.',
    },
    {
      id: '2',
      propertyName: 'Modern 4-Bedroom Duplex',
      propertyImage: 'https://images.unsplash.com/photo-1744094982586-c70f736bda12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZSUyMGZyb250JTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzYxMDQ3MjEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      propertyType: '4-Bedroom Duplex',
      address: '23 Diplomatic Drive, Asokoro, Abuja',
      location: 'Asokoro, Abuja',
      clientName: 'David Chen',
      clientAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      clientPhone: '+234 803 456 7890',
      date: 'Oct 24, 2025',
      time: '10:00 AM',
      status: 'awaiting_confirmation',
      statusLabel: 'Awaiting Confirmation',
      notes: 'Client mentioned they need parking space for 2 cars.',
    },
    {
      id: '3',
      propertyName: 'Luxury Penthouse Suite',
      propertyImage: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWRyb29tJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzYxMDEyNzMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      propertyType: 'Penthouse',
      address: '5 Maitama District, Abuja',
      location: 'Maitama, Abuja',
      clientName: 'Aisha Bello',
      clientAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      clientPhone: '+234 802 345 6789',
      date: 'Oct 25, 2025',
      time: '3:00 PM',
      status: 'scheduled',
      statusLabel: 'Scheduled',
      notes: 'VIP client. Ensure property is pristine for viewing.',
    },
    {
      id: '4',
      propertyName: 'Cozy 2-Bedroom Flat',
      propertyImage: 'https://images.unsplash.com/photo-1641823911769-c55f23c25143?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYwOTM3OTc5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      propertyType: '2-Bedroom Flat',
      address: '45 Gimbiya Street, Garki, Abuja',
      location: 'Garki, Abuja',
      clientName: 'Emma Davis',
      clientAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      clientPhone: '+234 804 567 8901',
      date: 'Oct 21, 2025',
      time: '11:00 AM',
      status: 'in_progress',
      statusLabel: 'In Progress',
    },
  ]);

  const [historyInspections] = useState<Inspection[]>([
    {
      id: '5',
      propertyName: 'Spacious 3-Bedroom Apartment',
      propertyImage: 'https://images.unsplash.com/photo-1611095210561-67f0832b1ca3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBsaXZpbmd8ZW58MXx8fHwxNzYxMDQ3MjEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      propertyType: '3-Bedroom Apartment',
      address: '78 Ladoke Akintola Boulevard, Garki II, Abuja',
      location: 'Garki II, Abuja',
      clientName: 'Chidi Okafor',
      clientAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
      clientPhone: '+234 805 678 9012',
      date: 'Oct 18, 2025',
      time: '2:00 PM',
      status: 'completed',
      statusLabel: 'Completed',
    },
    {
      id: '6',
      propertyName: 'Studio Apartment in Jabi',
      propertyImage: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWRyb29tJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzYxMDEyNzMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      propertyType: 'Studio Apartment',
      address: '12 Jabi Lake Mall Road, Jabi, Abuja',
      location: 'Jabi, Abuja',
      clientName: 'Fatima Ahmed',
      clientAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
      clientPhone: '+234 806 789 0123',
      date: 'Oct 15, 2025',
      time: '10:30 AM',
      status: 'completed',
      statusLabel: 'Completed',
    },
    {
      id: '7',
      propertyName: '4-Bedroom House in Gwarinpa',
      propertyImage: 'https://images.unsplash.com/photo-1744094982586-c70f736bda12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZSUyMGZyb250JTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzYxMDQ3MjEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      propertyType: '4-Bedroom House',
      address: '56 Gwarinpa Estate, Abuja',
      location: 'Gwarinpa, Abuja',
      clientName: 'James Wilson',
      clientAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      clientPhone: '+234 807 890 1234',
      date: 'Oct 10, 2025',
      time: '4:00 PM',
      status: 'canceled',
      statusLabel: 'Canceled',
    },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'scheduled':
        return 'bg-[#90CAF9] text-[#1565C0]';
      case 'awaiting_confirmation':
        return 'bg-yellow-100 text-yellow-700';
      case 'in_progress':
        return 'bg-purple-100 text-purple-700';
      case 'completed':
        return 'bg-green-100 text-green-700';
      case 'canceled':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const filteredInspections = inspections.filter((inspection) => {
    const matchesSearch = 
      inspection.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inspection.propertyName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || inspection.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const filteredHistory = historyInspections.filter((inspection) => {
    const matchesSearch = 
      inspection.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inspection.propertyName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || inspection.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleMarkCompleted = (id: string) => {
    setInspections(prev => prev.map(insp => 
      insp.id === id ? { ...insp, status: 'completed' as const, statusLabel: 'Completed' } : insp
    ));
    toast.success('Inspection Marked as Completed', {
      description: 'The inspection status has been updated.',
    });
    setExpandedCard(null);
  };

  const handleReschedule = (id: string) => {
    const inspection = inspections.find(i => i.id === id);
    if (inspection) {
      setRescheduleModal({ open: true, id, propertyName: inspection.propertyName });
    }
  };

  const handleConfirmReschedule = (date: Date, time: string) => {
    const formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    setInspections(prev => prev.map(insp => 
      insp.id === rescheduleModal.id ? { ...insp, date: formattedDate, time } : insp
    ));
    toast.success('Inspection Rescheduled', {
      description: 'The client has been notified of the new date and time.',
    });
  };

  const handleCancel = (id: string) => {
    setCancelDialog({ open: true, id });
  };

  const handleConfirmCancel = () => {
    setInspections(prev => prev.map(insp => 
      insp.id === cancelDialog.id ? { ...insp, status: 'canceled' as const, statusLabel: 'Canceled' } : insp
    ));
    toast.error('Inspection Canceled', {
      description: 'The client has been notified of the cancellation.',
    });
    setCancelDialog({ open: false, id: '' });
    setExpandedCard(null);
  };

  const handleGetDirections = (address: string, propertyName: string) => {
    setDirectionsModal({ open: true, address, propertyName });
  };

  const handleCallClient = (phone: string, name: string) => {
    toast.info(`Calling ${name}`, {
      description: `Opening phone dialer for ${phone}`,
    });
  };

  const handleMessageClient = (name: string) => {
    toast.info(`Opening Messages`, {
      description: `Starting conversation with ${name}`,
    });
  };

  const handleAddInspection = () => {
    toast.info('Add New Inspection', {
      description: 'Inspection creation form would open here...',
    });
  };

  const toggleExpand = (id: string) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const completedCount = [...inspections, ...historyInspections].filter(i => i.status === 'completed').length;
  const canceledCount = [...inspections, ...historyInspections].filter(i => i.status === 'canceled').length;
  const upcomingToday = inspections.filter(i => i.date.includes('Oct 21')).length;

  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1>Inspections Management</h1>
            <p className="text-gray-600 mt-2">View, schedule, and manage all your client property inspections.</p>
          </div>
          <Button
            className="text-white"
            style={{ 
              background: 'linear-gradient(135deg, #90CAF9 0%, #1565C0 100%)',
              transition: 'all 0.3s ease',
            }}
            onClick={handleAddInspection}
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Inspection
          </Button>
        </div>

        {/* Filters */}
        <div className="flex gap-4 items-center">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              placeholder="Search by client or property..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="scheduled">Scheduled</SelectItem>
              <SelectItem value="awaiting_confirmation">Awaiting Confirmation</SelectItem>
              <SelectItem value="in_progress">In Progress</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="canceled">Canceled</SelectItem>
            </SelectContent>
          </Select>
          <Select value={dateFilter} onValueChange={setDateFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Date Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Time</SelectItem>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="custom">Custom Range</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mb-8">
        <TabsList className="mb-6" style={{ backgroundColor: '#E3F2FD' }}>
          <TabsTrigger 
            value="upcoming" 
            className="data-[state=active]:bg-white"
            style={{ 
              borderRadius: '8px',
            }}
          >
            Upcoming Inspections
          </TabsTrigger>
          <TabsTrigger 
            value="history"
            className="data-[state=active]:bg-white"
            style={{ 
              borderRadius: '8px',
            }}
          >
            Inspection History
          </TabsTrigger>
        </TabsList>

        {/* Upcoming Inspections Tab */}
        <TabsContent value="upcoming" className="space-y-4 animate-in fade-in-50 duration-300">
          {filteredInspections.length === 0 ? (
            <Card className="p-12 text-center">
              <p className="text-gray-500">No upcoming inspections found.</p>
            </Card>
          ) : (
            filteredInspections.map((inspection) => {
              const isExpanded = expandedCard === inspection.id;
              return (
                <Card
                  key={inspection.id}
                  className="overflow-hidden border border-gray-100 hover:shadow-lg transition-all"
                >
                  {/* Collapsed View */}
                  <div
                    className="p-6 cursor-pointer"
                    onClick={() => toggleExpand(inspection.id)}
                  >
                    <div className="flex items-start gap-4">
                      {/* Property Image */}
                      <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                        <ImageWithFallback
                          src={inspection.propertyImage}
                          alt={inspection.propertyName}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Main Info */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="mb-1">{inspection.propertyName}</h4>
                            <p className="text-sm text-gray-600">{inspection.location}</p>
                          </div>
                          <Badge className={`${getStatusColor(inspection.status)} text-xs px-3 py-1`}>
                            {inspection.statusLabel}
                          </Badge>
                        </div>

                        <div className="flex items-center gap-6 text-sm text-gray-600">
                          <div className="flex items-center gap-2">
                            <Avatar className="w-6 h-6">
                              <AvatarImage src={inspection.clientAvatar} alt={inspection.clientName} />
                              <AvatarFallback>{inspection.clientName[0]}</AvatarFallback>
                            </Avatar>
                            <span>{inspection.clientName}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <CalendarIcon className="w-4 h-4" />
                            <span>{inspection.date} at {inspection.time}</span>
                          </div>
                        </div>
                      </div>

                      {/* Expand Button */}
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-gray-600" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-600" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Expanded View */}
                  {isExpanded && (
                    <div 
                      className="border-t border-gray-100 p-6 animate-in fade-in-50 duration-300"
                      style={{ backgroundColor: '#F9FAFB' }}
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Property Details */}
                        <div>
                          <h4 className="mb-3" style={{ color: '#1565C0' }}>Property Details</h4>
                          <div className="space-y-2">
                            <div className="flex items-start gap-2 text-sm">
                              <span className="text-gray-500 min-w-24">Type:</span>
                              <span>{inspection.propertyType}</span>
                            </div>
                            <div className="flex items-start gap-2 text-sm">
                              <span className="text-gray-500 min-w-24">Address:</span>
                              <span>{inspection.address}</span>
                            </div>
                            {inspection.notes && (
                              <div className="flex items-start gap-2 text-sm mt-3">
                                <span className="text-gray-500 min-w-24">Notes:</span>
                                <span className="text-gray-600 italic">{inspection.notes}</span>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Client Details */}
                        <div>
                          <h4 className="mb-3" style={{ color: '#1565C0' }}>Client Details</h4>
                          <div className="flex items-center gap-3 mb-4">
                            <Avatar className="w-12 h-12">
                              <AvatarImage src={inspection.clientAvatar} alt={inspection.clientName} />
                              <AvatarFallback>{inspection.clientName[0]}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="text-sm">{inspection.clientName}</div>
                              <div className="text-sm text-gray-500">{inspection.clientPhone}</div>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleCallClient(inspection.clientPhone, inspection.clientName);
                              }}
                            >
                              <Phone className="w-4 h-4 mr-1" />
                              Call
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleMessageClient(inspection.clientName);
                              }}
                            >
                              <MessageSquare className="w-4 h-4 mr-1" />
                              Message
                            </Button>
                          </div>
                        </div>
                      </div>

                      {/* Inspection Controls */}
                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <h4 className="mb-3">Inspection Controls</h4>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                          <Button
                            className="text-white"
                            style={{ backgroundColor: '#90CAF9' }}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleMarkCompleted(inspection.id);
                            }}
                          >
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Mark Completed
                          </Button>
                          <Button
                            variant="outline"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleReschedule(inspection.id);
                            }}
                          >
                            <CalendarIcon className="w-4 h-4 mr-2" />
                            Reschedule
                          </Button>
                          <Button
                            variant="outline"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleGetDirections(inspection.address, inspection.propertyName);
                            }}
                          >
                            <MapPin className="w-4 h-4 mr-2" />
                            Get Directions
                          </Button>
                          <Button
                            variant="outline"
                            className="text-red-600 border-red-200 hover:bg-red-50"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCancel(inspection.id);
                            }}
                          >
                            <XCircle className="w-4 h-4 mr-2" />
                            Cancel
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              );
            })
          )}
        </TabsContent>

        {/* History Tab */}
        <TabsContent value="history" className="space-y-4 animate-in fade-in-50 duration-300">
          {filteredHistory.length === 0 ? (
            <Card className="p-12 text-center">
              <p className="text-gray-500">No inspection history found.</p>
            </Card>
          ) : (
            filteredHistory.map((inspection) => (
              <Card
                key={inspection.id}
                className="p-6 border border-gray-100 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-4">
                  {/* Property Image */}
                  <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <ImageWithFallback
                      src={inspection.propertyImage}
                      alt={inspection.propertyName}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Main Info */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="mb-1">{inspection.propertyName}</h4>
                        <p className="text-sm text-gray-600">{inspection.location}</p>
                      </div>
                      <Badge className={`${getStatusColor(inspection.status)} text-xs px-3 py-1 flex items-center gap-1`}>
                        {inspection.status === 'completed' ? (
                          <CheckCircle className="w-3 h-3" />
                        ) : (
                          <XCircle className="w-3 h-3" />
                        )}
                        {inspection.statusLabel}
                      </Badge>
                    </div>

                    <div className="flex items-center gap-6 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Avatar className="w-6 h-6">
                          <AvatarImage src={inspection.clientAvatar} alt={inspection.clientName} />
                          <AvatarFallback>{inspection.clientName[0]}</AvatarFallback>
                        </Avatar>
                        <span>{inspection.clientName}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <CalendarIcon className="w-4 h-4" />
                        <span>{inspection.date} at {inspection.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))
          )}
        </TabsContent>
      </Tabs>

      {/* Insights Section */}
      <div>
        <h2 className="mb-6">Inspection Insights</h2>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Completed This Month */}
          <Card className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#E3F2FD' }}>
                <CheckCircle className="w-6 h-6" style={{ color: '#1565C0' }} />
              </div>
            </div>
            <div className="text-3xl mb-1" style={{ color: '#1565C0' }}>{completedCount}</div>
            <div className="text-sm text-gray-600">Inspections Completed (This Month)</div>
          </Card>

          {/* Average Response Time */}
          <Card className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#E3F2FD' }}>
                <Clock className="w-6 h-6" style={{ color: '#1565C0' }} />
              </div>
            </div>
            <div className="text-3xl mb-1" style={{ color: '#1565C0' }}>2h 10m</div>
            <div className="text-sm text-gray-600">Average Response Time</div>
          </Card>

          {/* Canceled Inspections */}
          <Card className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#E3F2FD' }}>
                <XCircle className="w-6 h-6" style={{ color: '#1565C0' }} />
              </div>
            </div>
            <div className="text-3xl mb-1" style={{ color: '#1565C0' }}>{canceledCount}</div>
            <div className="text-sm text-gray-600">Canceled Inspections</div>
          </Card>

          {/* Upcoming Today */}
          <Card className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#E3F2FD' }}>
                <TrendingUp className="w-6 h-6" style={{ color: '#1565C0' }} />
              </div>
            </div>
            <div className="text-3xl mb-1" style={{ color: '#1565C0' }}>{upcomingToday}</div>
            <div className="text-sm text-gray-600">Upcoming Today</div>
          </Card>
        </div>
      </div>

      {/* Modals */}
      <RescheduleInspectionModal
        open={rescheduleModal.open}
        onClose={() => setRescheduleModal({ open: false, id: '', propertyName: '' })}
        onConfirm={handleConfirmReschedule}
        propertyName={rescheduleModal.propertyName}
      />

      <DirectionsMapModal
        open={directionsModal.open}
        onClose={() => setDirectionsModal({ open: false, address: '', propertyName: '' })}
        address={directionsModal.address}
        propertyName={directionsModal.propertyName}
      />

      <AlertDialog open={cancelDialog.open} onOpenChange={(open) => setCancelDialog({ open, id: '' })}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Cancel Inspection</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to cancel this inspection? The client will be notified of the cancellation.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Keep Inspection</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleConfirmCancel}
              className="bg-red-500 hover:bg-red-600 text-white"
            >
              Yes, Cancel
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
