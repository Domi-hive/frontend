import { useState, useEffect } from 'react';
import { Search, Building2, Home, TrendingUp, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { RequestDetailsPanel } from './RequestDetailsPanel';
import { Card } from './ui/card';
import { toast } from 'sonner';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { apiService, ApiRequest } from '../../services/api';

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
  const [requests, setRequests] = useState<ClientRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch requests from API on component mount
  useEffect(() => {
    const fetchRequests = async () => {
      try {
        setLoading(true);
        setError(null);
        const apiRequests = await apiService.getRequests();

        // Map API response to component interface
        const mappedRequests: ClientRequest[] = apiRequests.map((apiReq, index) => ({
          id: (index + 1).toString(),
          clientName: 'Client', // API doesn't provide client name, using placeholder
          clientAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
          email: 'client@email.com', // API doesn't provide email
          phone: '+234 000 000 0000', // API doesn't provide phone
          propertyType: `${apiReq.bedrooms}-Bedroom ${apiReq.propertyType}`,
          location: apiReq.location,
          budgetRange: apiReq.budgetRange,
          preferredDates: [apiReq.preferredInspectionDate], // API provides single date
          additionalNotes: '', // API doesn't provide notes
          status: 'pending' as const,
          statusLabel: 'Pending',
          dateCreated: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
          matchingProperties: [], // API doesn't provide matching properties
        }));

        setRequests(mappedRequests);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch requests');
        console.error('Error fetching requests:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

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


  if (loading) {
    return (
      <div className="p-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading requests...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Failed to Load Requests</h2>
            <p className="text-gray-600 mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

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
