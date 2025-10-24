import { useState } from 'react';
import { Users, FileText, Calendar, Handshake, TrendingUp, MessageSquare, CheckCircle, Clock, Eye, ChevronRight, DollarSign } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { toast } from 'sonner';

export function AgentDashboardPage() {
  const [timeFilter, setTimeFilter] = useState('30days');

  // Mock data for charts
  const leadConversionData = [
    { month: 'Jan', leads: 12, converted: 4 },
    { month: 'Feb', leads: 15, converted: 6 },
    { month: 'Mar', leads: 18, converted: 7 },
    { month: 'Apr', leads: 14, converted: 5 },
    { month: 'May', leads: 22, converted: 9 },
    { month: 'Jun', leads: 25, converted: 11 },
    { month: 'Jul', leads: 20, converted: 8 },
    { month: 'Aug', leads: 28, converted: 12 },
    { month: 'Sep', leads: 24, converted: 10 },
    { month: 'Oct', leads: 30, converted: 14 },
  ];

  const inspectionActivityData = [
    { month: 'Jan', completed: 8, pending: 4 },
    { month: 'Feb', completed: 12, pending: 3 },
    { month: 'Mar', completed: 10, pending: 5 },
    { month: 'Apr', completed: 14, pending: 2 },
    { month: 'May', completed: 16, pending: 6 },
    { month: 'Jun', completed: 18, pending: 4 },
    { month: 'Jul', completed: 15, pending: 5 },
    { month: 'Aug', completed: 20, pending: 3 },
    { month: 'Sep', completed: 17, pending: 7 },
    { month: 'Oct', completed: 22, pending: 5 },
  ];

  const activeRequests = [
    {
      id: '1',
      clientName: 'Muhammad K.',
      clientAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
      request: '3-Bedroom Apartment in Wuse II',
      status: 'scheduled',
      statusLabel: 'Inspection Scheduled',
      date: 'Today, 2:30 PM',
      urgent: true,
    },
    {
      id: '2',
      clientName: 'Sarah Johnson',
      clientAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      request: 'Luxury Penthouse in Maitama',
      status: 'pending',
      statusLabel: 'Awaiting Response',
      date: 'Due: Tomorrow',
      urgent: false,
    },
    {
      id: '3',
      clientName: 'David Chen',
      clientAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      request: '4-Bedroom Duplex in Asokoro',
      status: 'scheduled',
      statusLabel: 'Inspection Scheduled',
      date: 'Oct 23, 10:00 AM',
      urgent: false,
    },
    {
      id: '4',
      clientName: 'Emma Davis',
      clientAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      request: '2-Bedroom Flat in Garki',
      status: 'overdue',
      statusLabel: 'Response Overdue',
      date: 'Due: 2 days ago',
      urgent: true,
    },
  ];

  const upcomingInspections = [
    {
      id: '1',
      property: 'Modern 3-Bedroom in Wuse II',
      client: 'Muhammad K.',
      date: 'Today',
      time: '2:30 PM',
      location: '12 Ahmadu Bello Way, Wuse II',
    },
    {
      id: '2',
      property: '4-Bedroom Duplex in Asokoro',
      client: 'David Chen',
      date: 'Oct 23',
      time: '10:00 AM',
      location: '23 Diplomatic Drive, Asokoro',
    },
    {
      id: '3',
      property: 'Luxury Penthouse',
      client: 'Sarah Johnson',
      date: 'Oct 24',
      time: '3:00 PM',
      location: '5 Maitama District',
    },
  ];

  const recentClients = [
    {
      name: 'Muhammad K.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
      property: '3-Bedroom Duplex',
      badge: '3 Inspections Completed',
      badgeType: 'success',
    },
    {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      property: 'Luxury Penthouse',
      badge: 'Closed Deal - ₦6.5M Property',
      badgeType: 'completed',
    },
    {
      name: 'David Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      property: '4-Bedroom Duplex',
      badge: '2 Inspections Completed',
      badgeType: 'success',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'scheduled':
        return 'bg-[#90CAF9] text-[#1565C0]';
      case 'pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'overdue':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const handleViewRequest = (id: string) => {
    toast.info('Opening Request Details', {
      description: 'Request details would load here...',
    });
  };

  const handleMessageClient = (name: string) => {
    toast.info(`Opening conversation with ${name}`, {
      description: 'Redirecting to messages...',
    });
  };

  const handleMarkComplete = (id: string) => {
    toast.success('Request Marked Complete', {
      description: 'The client has been notified.',
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#E3F2FD] to-white rounded-3xl p-10 mb-8 overflow-hidden animate-fadeIn">
        {/* Subtle decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#90CAF9]/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 flex items-center justify-between">
          <div className="animate-slideUp">
            <h2 className="text-3xl text-[#0D1B2A] mb-2" style={{ fontWeight: 600 }}>
              Welcome back, Sarah 👋
            </h2>
            <p className="text-base text-gray-600">
              Here's how your week is going:
            </p>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div
          className="relative bg-gradient-to-br from-[#E3F2FD] to-[#BBDEFB]/30 rounded-2xl p-6 border border-blue-100 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 group overflow-hidden cursor-pointer"
          onClick={() => scrollToSection('active-work')}
        >
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>

          <div className="relative z-10">
            {/* Icon */}
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center">
                <Users className="w-6 h-6 text-[#1565C0]" />
              </div>
            </div>

            {/* Value */}
            <div className="mb-1">
              <span className="text-3xl text-[#0D1B2A]" style={{ fontWeight: 600 }}>
                8
              </span>
            </div>

            {/* Description */}
            <div className="text-sm text-gray-700 mb-1">new leads this week</div>

            {/* Label */}
            <div className="text-xs text-gray-600 mb-4" style={{ fontWeight: 600, letterSpacing: '0.3px' }}>
              New Leads This Week
            </div>

            {/* Action Link */}
            <button className="flex items-center gap-1.5 text-xs text-[#1565C0] hover:text-[#0D47A1] transition-colors group-hover:gap-2 duration-300" style={{ fontWeight: 600 }}>
              <span>View all</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div
          className="relative bg-gradient-to-br from-[#E3F2FD] to-[#BBDEFB]/30 rounded-2xl p-6 border border-blue-100 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 group overflow-hidden cursor-pointer"
          onClick={() => scrollToSection('active-work')}
        >
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>

          <div className="relative z-10">
            {/* Icon */}
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center">
                <FileText className="w-6 h-6 text-[#1565C0]" />
              </div>
            </div>

            {/* Value */}
            <div className="mb-1">
              <span className="text-3xl text-[#0D1B2A]" style={{ fontWeight: 600 }}>
                5
              </span>
            </div>

            {/* Description */}
            <div className="text-sm text-gray-700 mb-1">ongoing property requests</div>

            {/* Label */}
            <div className="text-xs text-gray-600 mb-4" style={{ fontWeight: 600, letterSpacing: '0.3px' }}>
              Active Requests
            </div>

            {/* Action Link */}
            <button className="flex items-center gap-1.5 text-xs text-[#1565C0] hover:text-[#0D47A1] transition-colors group-hover:gap-2 duration-300" style={{ fontWeight: 600 }}>
              <span>View all</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div
          className="relative bg-gradient-to-br from-[#E3F2FD] to-[#BBDEFB]/30 rounded-2xl p-6 border border-blue-100 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 group overflow-hidden cursor-pointer"
          onClick={() => scrollToSection('upcoming-inspections')}
        >
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>

          <div className="relative z-10">
            {/* Icon */}
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center">
                <Calendar className="w-6 h-6 text-[#1565C0]" />
              </div>
            </div>

            {/* Value */}
            <div className="mb-1">
              <span className="text-3xl text-[#0D1B2A]" style={{ fontWeight: 600 }}>
                3
              </span>
            </div>

            {/* Description */}
            <div className="text-sm text-gray-700 mb-1">inspections scheduled</div>

            {/* Label */}
            <div className="text-xs text-gray-600 mb-4" style={{ fontWeight: 600, letterSpacing: '0.3px' }}>
              Inspections Today
            </div>

            {/* Action Link */}
            <button className="flex items-center gap-1.5 text-xs text-[#1565C0] hover:text-[#0D47A1] transition-colors group-hover:gap-2 duration-300" style={{ fontWeight: 600 }}>
              <span>View all</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div
          className="relative bg-gradient-to-br from-[#E3F2FD] to-[#BBDEFB]/30 rounded-2xl p-6 border border-blue-100 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 group overflow-hidden cursor-pointer"
        >
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>

          <div className="relative z-10">
            {/* Icon */}
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center">
                <Handshake className="w-6 h-6 text-[#1565C0]" />
              </div>
            </div>

            {/* Value */}
            <div className="mb-1">
              <span className="text-3xl text-[#0D1B2A]" style={{ fontWeight: 600 }}>
                2
              </span>
            </div>

            {/* Description */}
            <div className="text-sm text-gray-700 mb-1">deals closed this month</div>

            {/* Label */}
            <div className="text-xs text-gray-600 mb-4" style={{ fontWeight: 600, letterSpacing: '0.3px' }}>
              Closed Deals This Month
            </div>

            {/* Action Link */}
            <button className="flex items-center gap-1.5 text-xs text-[#1565C0] hover:text-[#0D47A1] transition-colors group-hover:gap-2 duration-300" style={{ fontWeight: 600 }}>
              <span>View all</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Performance Overview Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl text-gray-900" style={{ fontWeight: 600 }}>Performance Overview</h2>
          <Select value={timeFilter} onValueChange={setTimeFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Last 7 days</SelectItem>
              <SelectItem value="30days">Last 30 days</SelectItem>
              <SelectItem value="all">All Time</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Lead Conversion Chart */}
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <div className="p-6">
              <h3 className="text-lg text-gray-900 mb-4" style={{ fontWeight: 600 }}>Lead Conversion Over Time</h3>
              <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={leadConversionData}>
                  <defs>
                    <linearGradient id="colorLeads" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#90CAF9" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#90CAF9" stopOpacity={0.1}/>
                    </linearGradient>
                    <linearGradient id="colorConverted" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#1565C0" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#1565C0" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E3F2FD" />
                  <XAxis dataKey="month" stroke="#666" />
                  <YAxis stroke="#666" />
                  <Tooltip />
                  <Area type="monotone" dataKey="leads" stroke="#90CAF9" fillOpacity={1} fill="url(#colorLeads)" />
                  <Area type="monotone" dataKey="converted" stroke="#1565C0" fillOpacity={1} fill="url(#colorConverted)" />
                </AreaChart>
              </ResponsiveContainer>
              <div className="flex gap-4 mt-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#90CAF9' }}></div>
                  <span>Total Leads</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#1565C0' }}></div>
                  <span>Converted</span>
                </div>
              </div>
            </div>
          </div>

          {/* Inspection Activity Chart */}
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <div className="p-6">
              <h3 className="text-lg text-gray-900 mb-4" style={{ fontWeight: 600 }}>Inspection Activity</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={inspectionActivityData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E3F2FD" />
                  <XAxis dataKey="month" stroke="#666" />
                  <YAxis stroke="#666" />
                  <Tooltip />
                  <Bar dataKey="completed" fill="#1565C0" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="pending" fill="#90CAF9" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
              <div className="flex gap-4 mt-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#1565C0' }}></div>
                  <span>Completed</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#90CAF9' }}></div>
                  <span>Pending</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Two Column Layout for Active Work and Right Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Active Work Panel */}
        <div className="lg:col-span-2" id="active-work">
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <div className="p-6">
              <h3 className="text-lg text-gray-900 mb-6" style={{ fontWeight: 600 }}>Ongoing Requests & Inspections</h3>
              <div className="space-y-4">
                {activeRequests.map((request) => (
                  <div
                    key={request.id}
                    className="p-4 border border-gray-100 rounded-xl hover:shadow-md transition-all group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3 flex-1">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={request.clientAvatar} alt={request.clientName} />
                          <AvatarFallback>{request.clientName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span>{request.clientName}</span>
                            {request.urgent && (
                              <Badge className="bg-red-100 text-red-700 text-xs px-2 py-0.5">Urgent</Badge>
                            )}
                          </div>
                          <p className="text-sm text-gray-600">{request.request}</p>
                        </div>
                      </div>
                      <Badge className={`${getStatusColor(request.status)} text-xs px-3 py-1`}>
                        {request.statusLabel}
                      </Badge>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <Clock className="w-4 h-4" />
                      <span>{request.date}</span>
                    </div>

                    {/* Action Buttons - Hidden by default, shown on hover */}
                    <div className="grid grid-cols-3 gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleViewRequest(request.id)}
                      >
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleMessageClient(request.clientName)}
                      >
                        <MessageSquare className="w-4 h-4 mr-1" />
                        Message
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleMarkComplete(request.id)}
                        className="text-green-600 border-green-200 hover:bg-green-50"
                      >
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Complete
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Recent Clients & Earnings */}
        <div className="space-y-6">
          {/* Recent Clients */}
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <div className="p-6">
              <h4 className="text-lg text-gray-900 mb-4" style={{ fontWeight: 600 }}>Recent Clients You've Worked With</h4>
              <div className="space-y-3">
                {recentClients.map((client) => (
                  <div
                    key={client.name}
                    className="p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={client.avatar} alt={client.name} />
                        <AvatarFallback>{client.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="text-sm">{client.name}</div>
                        <div className="text-xs text-gray-500">{client.property}</div>
                      </div>
                    </div>
                    <Badge
                      className={`text-xs ${
                        client.badgeType === 'completed'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-[#E3F2FD] text-[#1565C0]'
                      }`}
                    >
                      {client.badge}
                    </Badge>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 text-sm flex items-center justify-center gap-1 text-gray-600 hover:text-[#1565C0] transition-colors">
                View All Clients <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Earnings Snapshot */}
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <div className="p-6">
              <h4 className="text-lg text-gray-900 mb-6" style={{ fontWeight: 600 }}>Earnings Overview</h4>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Total Earnings (This Month)</div>
                  <div className="text-3xl" style={{ color: '#1565C0' }}>₦520,000</div>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <div className="text-sm text-gray-500 mb-1">Pending Payouts</div>
                  <div className="text-xl">₦75,000</div>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <div className="text-sm text-gray-500 mb-1">Total Deals Closed</div>
                  <div className="text-xl">4 deals</div>
                </div>
              </div>
              <Button className="w-full mt-6 text-white" style={{ backgroundColor: '#90CAF9' }}>
                <DollarSign className="w-4 h-4 mr-2" />
                View Full Insights
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Inspections Preview */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm" id="upcoming-inspections">
        <div className="p-6">
          <h3 className="text-lg text-gray-900 mb-6" style={{ fontWeight: 600 }}>Upcoming Inspections</h3>
          <div className="space-y-4">
            {upcomingInspections.map((inspection) => (
              <div
                key={inspection.id}
                className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:shadow-md transition-all"
              >
                <div className="flex-1">
                  <div className="mb-1">{inspection.property}</div>
                  <p className="text-sm text-gray-600 mb-2">Client: {inspection.client}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{inspection.date} at {inspection.time}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    View Directions
                  </Button>
                  <Button variant="outline" size="sm">
                    Contact Client
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
