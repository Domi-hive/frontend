import { useState } from 'react';
import { Search, Plus, TrendingUp, Clock, Target } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { LeadDetailsPanel } from './LeadDetailsPanel';
import { Card } from './ui/card';
import { toast } from 'sonner';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface Lead {
  id: string;
  clientName: string;
  clientAvatar: string;
  email: string;
  phone: string;
  propertyType: string;
  location: string;
  budgetRange: string;
  status: 'new' | 'contacted' | 'scheduled' | 'converted';
  statusLabel: string;
  lastContacted: string;
  notes: string;
}

export function AgentLeadsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [timeFilter, setTimeFilter] = useState('all');
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const [leads, setLeads] = useState<Lead[]>([
    {
      id: '1',
      clientName: 'Muhammad K.',
      clientAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
      email: 'muhammad.k@email.com',
      phone: '+234 801 234 5678',
      propertyType: '3-Bedroom Apartment',
      location: 'Wuse II, Abuja',
      budgetRange: '₦2.5M - ₦3M',
      status: 'new',
      statusLabel: 'New',
      lastContacted: '2 hours ago',
      notes: 'Interested in properties with modern amenities. Flexible on move-in date.',
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
      status: 'scheduled',
      statusLabel: 'Inspection Scheduled',
      lastContacted: 'Yesterday',
      notes: 'VIP client. Looking for penthouse with city views. Inspection scheduled for Oct 23.',
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
      status: 'contacted',
      statusLabel: 'Contacted',
      lastContacted: '3 days ago',
      notes: 'Relocating from Lagos. Needs property by end of month. Follow up needed.',
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
      status: 'converted',
      statusLabel: 'Converted',
      lastContacted: '1 week ago',
      notes: 'Deal closed! Property signed on Oct 15. Very satisfied with service.',
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
      status: 'contacted',
      statusLabel: 'Contacted',
      lastContacted: '5 days ago',
      notes: 'First-time renter. Needs guidance on rental process. Very responsive.',
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
      status: 'new',
      statusLabel: 'New',
      lastContacted: '1 hour ago',
      notes: '',
    },
  ]);

  // Lead insights data
  const conversionData = [
    { month: 'May', leads: 18, converted: 6 },
    { month: 'Jun', leads: 22, converted: 8 },
    { month: 'Jul', leads: 20, converted: 7 },
    { month: 'Aug', leads: 25, converted: 10 },
    { month: 'Sep', leads: 28, converted: 11 },
    { month: 'Oct', leads: 30, converted: 14 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new':
        return 'bg-purple-100 text-purple-700';
      case 'contacted':
        return 'bg-[#90CAF9] text-[#1565C0]';
      case 'scheduled':
        return 'bg-green-100 text-green-700';
      case 'converted':
        return 'bg-gray-100 text-gray-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch = 
      lead.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.propertyType.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || lead.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleViewDetails = (lead: Lead) => {
    setSelectedLead(lead);
    setIsPanelOpen(true);
  };

  const handleMessage = (id: string) => {
    toast.info('Opening Messages', {
      description: 'Redirecting to message thread...',
    });
  };

  const handleSchedule = (id: string) => {
    toast.success('Inspection Scheduled', {
      description: 'Client has been notified of the inspection date.',
    });
    setLeads(prev => prev.map(lead => 
      lead.id === id ? { ...lead, status: 'scheduled' as const, statusLabel: 'Inspection Scheduled' } : lead
    ));
    setIsPanelOpen(false);
  };

  const handleConvert = (id: string) => {
    toast.success('Lead Converted! 🎉', {
      description: 'Congratulations on closing the deal!',
    });
    setLeads(prev => prev.map(lead => 
      lead.id === id ? { ...lead, status: 'converted' as const, statusLabel: 'Converted' } : lead
    ));
    setIsPanelOpen(false);
  };

  const handleRemove = (id: string) => {
    toast.error('Lead Removed', {
      description: 'The lead has been removed from your list.',
    });
    setLeads(prev => prev.filter(lead => lead.id !== id));
  };

  const handleSaveNotes = (id: string, notes: string) => {
    setLeads(prev => prev.map(lead => 
      lead.id === id ? { ...lead, notes } : lead
    ));
    toast.success('Notes Saved', {
      description: 'Your notes have been updated.',
    });
  };

  const handleAddLead = () => {
    toast.info('Add New Lead', {
      description: 'Lead creation form would open here...',
    });
  };

  const totalLeads = leads.length;
  const convertedLeads = leads.filter(l => l.status === 'converted').length;
  const conversionRate = totalLeads > 0 ? ((convertedLeads / totalLeads) * 100).toFixed(1) : 0;

  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1>Your Leads</h1>
            <p className="text-gray-600 mt-2">Track and manage all your potential clients.</p>
          </div>
          <Button
            className="text-white"
            style={{ backgroundColor: '#90CAF9' }}
            onClick={handleAddLead}
          >
            <Plus className="w-4 h-4 mr-2" />
            Add New Lead
          </Button>
        </div>

        {/* Filters */}
        <div className="flex gap-4 items-center">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              placeholder="Search by name or property type..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Lead Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="new">New</SelectItem>
              <SelectItem value="contacted">Contacted</SelectItem>
              <SelectItem value="scheduled">Inspection Scheduled</SelectItem>
              <SelectItem value="converted">Converted</SelectItem>
            </SelectContent>
          </Select>
          <Select value={timeFilter} onValueChange={setTimeFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Time Period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Time</SelectItem>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Leads Table */}
      <Card className="mb-8 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100" style={{ backgroundColor: '#E3F2FD' }}>
                <th className="text-left p-4 text-sm" style={{ color: '#1565C0' }}>Client</th>
                <th className="text-left p-4 text-sm" style={{ color: '#1565C0' }}>Property Type</th>
                <th className="text-left p-4 text-sm" style={{ color: '#1565C0' }}>Location</th>
                <th className="text-left p-4 text-sm" style={{ color: '#1565C0' }}>Status</th>
                <th className="text-left p-4 text-sm" style={{ color: '#1565C0' }}>Last Contacted</th>
                <th className="text-left p-4 text-sm" style={{ color: '#1565C0' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredLeads.map((lead) => (
                <tr
                  key={lead.id}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors group cursor-pointer"
                  onClick={() => handleViewDetails(lead)}
                >
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={lead.clientAvatar} alt={lead.clientName} />
                        <AvatarFallback>{lead.clientName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="text-sm">{lead.clientName}</div>
                        <div className="text-xs text-gray-500">{lead.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-sm">{lead.propertyType}</td>
                  <td className="p-4 text-sm text-gray-600">{lead.location}</td>
                  <td className="p-4">
                    <Badge className={`${getStatusColor(lead.status)} text-xs px-3 py-1`}>
                      {lead.statusLabel}
                    </Badge>
                  </td>
                  <td className="p-4 text-sm text-gray-600">{lead.lastContacted}</td>
                  <td className="p-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleViewDetails(lead);
                      }}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      View Details
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredLeads.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <p>No leads found matching your criteria.</p>
          </div>
        )}
      </Card>

      {/* Lead Insights */}
      <div>
        <h2 className="mb-6">Lead Insights</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Total Leads Card */}
          <Card className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#E3F2FD' }}>
                <Target className="w-6 h-6" style={{ color: '#1565C0' }} />
              </div>
            </div>
            <div className="text-3xl mb-1" style={{ color: '#1565C0' }}>{totalLeads}</div>
            <div className="text-sm text-gray-600">Total Leads This Month</div>
          </Card>

          {/* Conversion Rate Card */}
          <Card className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#E3F2FD' }}>
                <TrendingUp className="w-6 h-6" style={{ color: '#1565C0' }} />
              </div>
            </div>
            <div className="text-3xl mb-1" style={{ color: '#1565C0' }}>{conversionRate}%</div>
            <div className="text-sm text-gray-600">Conversion Rate</div>
          </Card>

          {/* Average Response Time Card */}
          <Card className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#E3F2FD' }}>
                <Clock className="w-6 h-6" style={{ color: '#1565C0' }} />
              </div>
            </div>
            <div className="text-3xl mb-1" style={{ color: '#1565C0' }}>2.5h</div>
            <div className="text-sm text-gray-600">Average Response Time</div>
          </Card>
        </div>

        {/* Conversion Chart */}
        <Card className="p-6 mt-6">
          <h4 className="mb-4" style={{ color: '#1565C0' }}>Lead Conversion Trend</h4>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={conversionData}>
              <defs>
                <linearGradient id="colorConversion" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#1565C0" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#1565C0" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#E3F2FD" />
              <XAxis dataKey="month" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip />
              <Area type="monotone" dataKey="converted" stroke="#1565C0" fillOpacity={1} fill="url(#colorConversion)" />
            </AreaChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Lead Details Panel */}
      <LeadDetailsPanel
        lead={selectedLead}
        isOpen={isPanelOpen}
        onClose={() => setIsPanelOpen(false)}
        onMessage={handleMessage}
        onSchedule={handleSchedule}
        onConvert={handleConvert}
        onRemove={handleRemove}
        onSaveNotes={handleSaveNotes}
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
