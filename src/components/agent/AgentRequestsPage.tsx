import { useState } from 'react';
import { Search, Building2, Home, TrendingUp, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { RequestDetailsPanel } from './RequestDetailsPanel';
import { Card } from './ui/card';
import { toast } from 'sonner';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface PropertyMatch {
  id: string;
  image: string;
  name: string;
  location: string;
  price: string;
  type: string;
}

interface ClientRequest {
  id: string;
  clientName: string;
  clientAvatar: string;
  email: string;
  phone: string;
  propertyType: string;
  location: string;
  budgetRange: string;
  preferredDates: string[];
  additionalNotes: string;
  status: 'pending' | 'responded' | 'completed';
  statusLabel: string;
  dateCreated: string;
  matchingProperties: PropertyMatch[];
}

export function AgentRequestsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [propertyTypeFilter, setPropertyTypeFilter] = useState('all');
  const [selectedRequest, setSelectedRequest] = useState<ClientRequest | null>(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const [requests, setRequests] = useState<ClientRequest[]>([
    {
      id: '1',
      clientName: 'Muhammad K.',
      clientAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
      email: 'muhammad.k@email.com',
      phone: '+234 801 234 5678',
      propertyType: '3-Bedroom Apartment',
      location: 'Wuse II, Abuja',
      budgetRange: '₦2.5M - ₦3M',
      preferredDates: ['Oct 23', 'Oct 24', 'Oct 25'],
      additionalNotes: 'Looking for properties near schools and shopping centers. Needs parking space for 2 cars.',
      status: 'pending',
      statusLabel: 'Pending',
      dateCreated: 'Oct 20, 2025',
      matchingProperties: [
        {
          id: 'p1',
          image: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjA5OTU2NTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
          name: 'Modern 3-Bedroom Apartment',
          location: 'Wuse II, Abuja',
          price: '₦2.8M/year',
          type: '3-Bedroom',
        },
        {
          id: 'p2',
          image: 'https://images.unsplash.com/photo-1635108199460-3b4e3ebc6d44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9wZXJ0eSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2MTA0NDM2Mnww&ixlib=rb-4.1.0&q=80&w=1080',
          name: 'Spacious 3-Bedroom with Parking',
          location: 'Wuse District, Abuja',
          price: '₦2.7M/year',
          type: '3-Bedroom',
        },
      ],
    },
    {
      id: '2',
      clientName: 'Aisha Bello',
      clientAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      email: 'aisha.b@email.com',
      phone: '+234 802 345 6789',
      propertyType: 'Luxury Penthouse',
      location: 'Maitama, Abuja',
      budgetRange: '₦6M - ₦8M',
      preferredDates: ['Oct 22', 'Oct 23'],
      additionalNotes: 'VIP client. Looking for penthouse with city views and modern amenities.',
      status: 'responded',
      statusLabel: 'Responded',
      dateCreated: 'Oct 18, 2025',
      matchingProperties: [
        {
          id: 'p3',
          image: 'https://images.unsplash.com/photo-1568115286680-d203e08a8be6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW50aG91c2UlMjBjaXR5JTIwdmlld3xlbnwxfHx8fDE3NjA5NjE1MDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
          name: 'Luxury Penthouse Suite',
          location: 'Maitama District, Abuja',
          price: '₦7.5M/year',
          type: 'Penthouse',
        },
      ],
    },
    {
      id: '3',
      clientName: 'David Chen',
      clientAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      email: 'david.chen@email.com',
      phone: '+234 803 456 7890',
      propertyType: '4-Bedroom Duplex',
      location: 'Asokoro, Abuja',
      budgetRange: '₦5M - ₦7M',
      preferredDates: ['Oct 26', 'Oct 27'],
      additionalNotes: 'Relocating from Lagos. Looking for family-friendly neighborhood.',
      status: 'pending',
      statusLabel: 'Pending',
      dateCreated: 'Oct 19, 2025',
      matchingProperties: [
        {
          id: 'p4',
          image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdXBsZXglMjBob3VzZXxlbnwxfHx8fDE3NjEwNDQzNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
          name: 'Elegant 4-Bedroom Duplex',
          location: 'Asokoro, Abuja',
          price: '₦6.2M/year',
          type: '4-Bedroom',
        },
        {
          id: 'p5',
          image: 'https://images.unsplash.com/photo-1706808849780-7a04fbac83ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2MDk2OTUyOXww&ixlib=rb-4.1.0&q=80&w=1080',
          name: 'Luxury 4-Bedroom Family Home',
          location: 'Asokoro District, Abuja',
          price: '₦6.8M/year',
          type: '4-Bedroom',
        },
      ],
    },
    {
      id: '4',
      clientName: 'Emma Davis',
      clientAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      email: 'emma.davis@email.com',
      phone: '+234 804 567 8901',
      propertyType: '2-Bedroom Flat',
      location: 'Garki, Abuja',
      budgetRange: '₦1.5M - ₦2M',
      preferredDates: ['Oct 25'],
      additionalNotes: 'First-time renter. Looking for affordable and secure property.',
      status: 'completed',
      statusLabel: 'Completed',
      dateCreated: 'Oct 15, 2025',
      matchingProperties: [],
    },
    {
      id: '5',
      clientName: 'Chidi Okafor',
      clientAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
      email: 'chidi.o@email.com',
      phone: '+234 805 678 9012',
      propertyType: 'Studio Apartment',
      location: 'Jabi, Abuja',
      budgetRange: '₦800K - ₦1.2M',
      preferredDates: ['Oct 24', 'Oct 25'],
      additionalNotes: 'Single professional. Needs something compact and modern.',
      status: 'responded',
      statusLabel: 'Responded',
      dateCreated: 'Oct 17, 2025',
      matchingProperties: [
        {
          id: 'p6',
          image: 'https://images.unsplash.com/photo-1702014861449-202805baa272?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkaW8lMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjA5NTIyMzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
          name: 'Modern Studio Apartment',
          location: 'Jabi, Abuja',
          price: '₦950K/year',
          type: 'Studio',
        },
      ],
    },
    {
      id: '6',
      clientName: 'Fatima Ahmed',
      clientAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
      email: 'fatima.a@email.com',
      phone: '+234 806 789 0123',
      propertyType: '3-Bedroom Duplex',
      location: 'Gwarinpa, Abuja',
      budgetRange: '₦3M - ₦4M',
      preferredDates: ['Oct 28', 'Oct 29'],
      additionalNotes: 'Looking for quiet neighborhood with good security.',
      status: 'pending',
      statusLabel: 'Pending',
      dateCreated: 'Oct 21, 2025',
      matchingProperties: [
        {
          id: 'p7',
          image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdXBsZXglMjBob3VzZXxlbnwxfHx8fDE3NjEwNDQzNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
          name: '3-Bedroom Duplex in Gwarinpa',
          location: 'Gwarinpa, Abuja',
          price: '₦3.5M/year',
          type: '3-Bedroom',
        },
      ],
    },
  ]);

  // Weekly response data
  const weeklyResponseData = [
    { day: 'Mon', responded: 2 },
    { day: 'Tue', responded: 3 },
    { day: 'Wed', responded: 1 },
    { day: 'Thu', responded: 4 },
    { day: 'Fri', responded: 3 },
    { day: 'Sat', responded: 2 },
    { day: 'Sun', responded: 1 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-purple-100 text-purple-700';
      case 'responded':
        return 'bg-green-100 text-green-700';
      case 'completed':
        return 'bg-gray-100 text-gray-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getPropertyIcon = (type: string) => {
    if (type.toLowerCase().includes('duplex') || type.toLowerCase().includes('house')) {
      return Home;
    }
    return Building2;
  };

  const filteredRequests = requests.filter((request) => {
    const matchesSearch = 
      request.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || request.status === statusFilter;
    const matchesType = propertyTypeFilter === 'all' || request.propertyType.toLowerCase().includes(propertyTypeFilter.toLowerCase());
    return matchesSearch && matchesStatus && matchesType;
  });

  const handleViewDetails = (request: ClientRequest) => {
    setSelectedRequest(request);
    setIsPanelOpen(true);
  };

  const handleSendResponse = (id: string, message: string) => {
    toast.success('Response Sent', {
      description: 'Your message has been sent to the client.',
    });
    setRequests(prev => prev.map(req => 
      req.id === id ? { ...req, status: 'responded' as const, statusLabel: 'Responded' } : req
    ));
  };

  const handleMarkResponded = (id: string) => {
    toast.success('Request Marked as Responded', {
      description: 'Status updated successfully.',
    });
    setRequests(prev => prev.map(req => 
      req.id === id ? { ...req, status: 'responded' as const, statusLabel: 'Responded' } : req
    ));
    setIsPanelOpen(false);
  };

  const handleSendRecommendation = (requestId: string, propertyId: string) => {
    toast.success('Property Recommendation Sent', {
      description: 'The client has been notified of your recommendation.',
    });
  };

  const activeRequests = requests.filter(r => r.status !== 'completed').length;
  const respondedThisWeek = weeklyResponseData.reduce((sum, day) => sum + day.responded, 0);
  const completionRate = requests.length > 0 
    ? ((requests.filter(r => r.status === 'completed').length / requests.length) * 100).toFixed(0)
    : 0;

  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="mb-6">
          <h1>Client Requests</h1>
          <p className="text-gray-600 mt-2">View and respond to new property requests from clients.</p>
        </div>

        {/* Filters */}
        <div className="flex gap-4 items-center">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              placeholder="Search by location or client name..."
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
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="responded">Responded</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>
          <Select value={propertyTypeFilter} onValueChange={setPropertyTypeFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Property Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="duplex">Duplex</SelectItem>
              <SelectItem value="studio">Studio</SelectItem>
              <SelectItem value="penthouse">Penthouse</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Request Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {filteredRequests.map((request) => {
          const PropertyIcon = getPropertyIcon(request.propertyType);
          return (
            <Card
              key={request.id}
              className="p-6 bg-white hover:shadow-lg transition-all cursor-pointer group border border-gray-100"
              onClick={() => handleViewDetails(request)}
              style={{
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(144, 202, 249, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '';
              }}
            >
              {/* Client Info */}
              <div className="flex items-center gap-3 mb-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={request.clientAvatar} alt={request.clientName} />
                  <AvatarFallback>{request.clientName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="text-sm">{request.clientName}</div>
                  <div className="text-xs text-gray-500">{request.dateCreated}</div>
                </div>
                <Badge className={`${getStatusColor(request.status)} text-xs px-2 py-1`}>
                  {request.statusLabel}
                </Badge>
              </div>

              {/* Property Details */}
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#E3F2FD' }}>
                    <PropertyIcon className="w-4 h-4" style={{ color: '#1565C0' }} />
                  </div>
                  <span>{request.propertyType}</span>
                </div>
                <div className="text-sm text-gray-600">
                  📍 {request.location}
                </div>
                <div className="text-sm" style={{ color: '#1565C0' }}>
                  {request.budgetRange}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  className="flex-1 py-2 px-3 text-sm rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleViewDetails(request);
                  }}
                >
                  View Details
                </button>
                {request.status === 'pending' && (
                  <button
                    className="flex-1 py-2 px-3 text-sm rounded-lg text-white transition-colors"
                    style={{ backgroundColor: '#90CAF9' }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleViewDetails(request);
                    }}
                  >
                    Respond
                  </button>
                )}
              </div>
            </Card>
          );
        })}
      </div>

      {filteredRequests.length === 0 && (
        <Card className="p-12 text-center">
          <div className="text-gray-500">No requests found matching your criteria.</div>
        </Card>
      )}

      {/* Requests Summary Section */}
      <div>
        <h2 className="mb-6">Requests Summary</h2>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
          {/* Active Requests */}
          <Card className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#E3F2FD' }}>
                <AlertCircle className="w-6 h-6" style={{ color: '#1565C0' }} />
              </div>
            </div>
            <div className="text-3xl mb-1" style={{ color: '#1565C0' }}>{activeRequests}</div>
            <div className="text-sm text-gray-600">Active Requests</div>
          </Card>

          {/* Responded This Week */}
          <Card className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#E3F2FD' }}>
                <CheckCircle2 className="w-6 h-6" style={{ color: '#1565C0' }} />
              </div>
            </div>
            <div className="text-3xl mb-1" style={{ color: '#1565C0' }}>{respondedThisWeek}</div>
            <div className="text-sm text-gray-600">Responded This Week</div>
          </Card>

          {/* Average Response Time */}
          <Card className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#E3F2FD' }}>
                <Clock className="w-6 h-6" style={{ color: '#1565C0' }} />
              </div>
            </div>
            <div className="text-3xl mb-1" style={{ color: '#1565C0' }}>2h 45m</div>
            <div className="text-sm text-gray-600">Avg. Response Time</div>
          </Card>

          {/* Completion Rate */}
          <Card className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#E3F2FD' }}>
                <TrendingUp className="w-6 h-6" style={{ color: '#1565C0' }} />
              </div>
            </div>
            <div className="text-3xl mb-1" style={{ color: '#1565C0' }}>{completionRate}%</div>
            <div className="text-sm text-gray-600">Completion Rate</div>
          </Card>
        </div>

        {/* Weekly Response Chart */}
        <Card className="p-6">
          <h4 className="mb-4" style={{ color: '#1565C0' }}>Response Activity This Week</h4>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={weeklyResponseData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E3F2FD" />
              <XAxis dataKey="day" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip />
              <Bar dataKey="responded" fill="#1565C0" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Request Details Panel */}
      <RequestDetailsPanel
        request={selectedRequest}
        isOpen={isPanelOpen}
        onClose={() => setIsPanelOpen(false)}
        onSendResponse={handleSendResponse}
        onMarkResponded={handleMarkResponded}
        onSendRecommendation={handleSendRecommendation}
      />

      {/* Overlay */}
      {isPanelOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 animate-in fade-in duration-300"
          onClick={() => setIsPanelOpen(false)}
        />
      )}
    </div>
  );
}
