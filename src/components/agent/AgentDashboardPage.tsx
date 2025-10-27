import { Users, Search, Calendar, Handshake, Funnel, TrendingUp, MessageSquare, CheckCircle, Clock, Eye, ChevronRight, DollarSign, MapPin } from 'lucide-react';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function AgentDashboardPage() {
  const userData = localStorage.getItem('userData');
  const user = userData ? JSON.parse(userData) : null;
  const userName = user?.fullName || 'Agent';

  const getTimeBasedGreeting = () => {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) return 'Good Morning';
    if (hour >= 12 && hour < 17) return 'Good Afternoon';
    if (hour >= 17 && hour < 22) return 'Good Evening';
    return 'Good Night';
  };

  const greeting = getTimeBasedGreeting();

  // Sample data for charts
  const leadPerformanceData = [
    { day: 'Mon', leads: 4 },
    { day: 'Tue', leads: 6 },
    { day: 'Wed', leads: 8 },
    { day: 'Thu', leads: 5 },
    { day: 'Fri', leads: 9 },
    { day: 'Sat', leads: 7 },
    { day: 'Sun', leads: 6 },
  ];

  const inspectionActivityData = [
    { day: 'Mon', inspections: 2 },
    { day: 'Tue', inspections: 3 },
    { day: 'Wed', inspections: 1 },
    { day: 'Thu', inspections: 4 },
    { day: 'Fri', inspections: 2 },
    { day: 'Sat', inspections: 1 },
    { day: 'Sun', inspections: 0 },
  ];

  const recentClients = [
    { id: 1, name: 'Muhammad K.', property: '3-Bedroom Apartment in Wuse II', status: 'Urgent', time: 'Today 2:30 PM' },
    { id: 2, name: 'Sarah Johnson', property: 'Luxury Penthouse in Maitama', status: 'Scheduled', time: 'Tomorrow' },
    { id: 3, name: 'David Chen', property: 'Office Space', status: 'Scheduled', time: 'Oct 23, 10:00 AM' },
    { id: 4, name: 'Emma Davis', property: 'Villa', status: 'Overdue', time: 'Over 2 days ago' },
  ];

  const upcomingInspections = [
    { id: 1, property: '3-Bedroom in Wuse II', date: 'Today, 2:30 PM', status: 'Urgent' },
    { id: 2, property: '4-Bedroom Duplex in Asokoro', date: 'Oct 24, 2:00 PM', status: 'Scheduled' },
    { id: 3, property: 'Luxury Penthouse', date: 'Oct 31, 2:30 PM', status: 'Scheduled' },
    { id: 4, property: 'Office Complex', date: 'Nov 2, 11:00 AM', status: 'Pending' },
  ];

  const newMessages = [
    { id: 1, from: 'Sarah Johnson', message: 'When can we schedule the inspection?', time: '5 min ago', unread: true },
    { id: 2, from: 'Michael Chen', message: 'Thanks for the property details', time: '1 hour ago', unread: true },
    { id: 3, from: 'Emma Davis', message: 'Is the villa still available?', time: '2 hours ago', unread: false },
  ];

  const earningsData = [
    { week: 'Week 1', earnings: 85000 },
    { week: 'Week 2', earnings: 92000 },
    { week: 'Week 3', earnings: 78000 },
    { week: 'Week 4', earnings: 124000 },
  ];

  return (
    <div className="p-8 max-w-[1400px]">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#E3F2FD] to-white rounded-3xl p-10 mb-8 overflow-hidden animate-fadeIn">
        {/* Subtle decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#90CAF9]/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 flex items-center justify-between">
          <div className="animate-slideUp">
            <h2 className="text-3xl text-[#0D1B2A] mb-2" style={{ fontWeight: 600 }}>
              {greeting}, {userName} 👋
            </h2>
            <p className="text-base text-gray-600">
              Here's how your week is going:
            </p>
          </div>
        </div>
      </div>

      {/* Progress Cards - copied from client dashboard */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="relative bg-gradient-to-br from-[#E3F2FD] to-[#BBDEFB]/30 rounded-2xl p-6 border border-blue-100 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 group overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
          <div className="relative z-10">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-lg text-[#0D1B2A] mb-1" style={{ fontWeight: 600 }}>Leads this week</div>
                <div className="text-3xl text-[#0D1B2A] mb-2" style={{ fontWeight: 600 }}>8</div>
                <button className="flex items-center gap-1.5 text-xs text-[#1565C0] hover:text-[#0D47A1] transition-colors group-hover:gap-2 duration-300" style={{ fontWeight: 600 }}>
                  <span>View all</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center">
                <Users className="w-6 h-6 text-[#1565C0]" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative bg-gradient-to-br from-[#E3F2FD] to-[#BBDEFB]/30 rounded-2xl p-6 border border-blue-100 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 group overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
          <div className="relative z-10">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-lg text-[#0D1B2A] mb-1" style={{ fontWeight: 600 }}>Ongoing requests</div>
                <div className="text-3xl text-[#0D1B2A] mb-2" style={{ fontWeight: 600 }}>5</div>
                <button className="flex items-center gap-1.5 text-xs text-[#1565C0] hover:text-[#0D47A1] transition-colors group-hover:gap-2 duration-300" style={{ fontWeight: 600 }}>
                  <span>View all</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center">
                <Search className="w-6 h-6 text-[#1565C0]" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative bg-gradient-to-br from-[#E3F2FD] to-[#BBDEFB]/30 rounded-2xl p-6 border border-blue-100 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 group overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
          <div className="relative z-10">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-lg text-[#0D1B2A] mb-1" style={{ fontWeight: 600 }}>Inspections scheduled</div>
                <div className="text-3xl text-[#0D1B2A] mb-2" style={{ fontWeight: 600 }}>3</div>
                <button className="flex items-center gap-1.5 text-xs text-[#1565C0] hover:text-[#0D47A1] transition-colors group-hover:gap-2 duration-300" style={{ fontWeight: 600 }}>
                  <span>View all</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center">
                <Calendar className="w-6 h-6 text-[#1565C0]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid - copied from client dashboard */}
      <div className="grid grid-cols-[1fr_340px] gap-6">
        {/* Left Column */}
        <div>
          {/* Lead Performance Chart */}
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm mb-6">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg text-gray-900" style={{ fontWeight: 600 }}>Lead Performance</h3>
                <TrendingUp className="w-5 h-5 text-[#1565C0]" />
              </div>
              <div className="h-64 mb-4">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={leadPerformanceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis
                      dataKey="day"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: '#6b7280' }}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: '#6b7280' }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'white',
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="leads"
                      stroke="#1565C0"
                      fill="#E3F2FD"
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-600">This week</div>
                  <div className="text-lg text-gray-900" style={{ fontWeight: 600 }}>39 leads</div>
                </div>
                <button className="text-xs text-[#1565C0] hover:text-[#0D47A1] transition-colors" style={{ fontWeight: 600 }}>View All</button>
              </div>
            </div>
          </div>

          {/* Inspection Activity Chart */}
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm mb-6">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg text-gray-900" style={{ fontWeight: 600 }}>Inspection Activity</h3>
                <Eye className="w-5 h-5 text-[#1565C0]" />
              </div>
              <div className="h-64 mb-4">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={inspectionActivityData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis
                      dataKey="day"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: '#6b7280' }}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: '#6b7280' }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'white',
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                      }}
                    />
                    <Bar
                      dataKey="inspections"
                      fill="#1565C0"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-600">This week</div>
                  <div className="text-lg text-gray-900" style={{ fontWeight: 600 }}>13 inspections</div>
                </div>
                <button className="text-xs text-[#1565C0] hover:text-[#0D47A1] transition-colors" style={{ fontWeight: 600 }}>View All</button>
              </div>
            </div>
          </div>

          {/* Earnings Overview */}
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg text-gray-900 mb-1" style={{ fontWeight: 600 }}>Earnings Overview</h3>
                  <div className="text-2xl text-[#0D1B2A]" style={{ fontWeight: 600 }}>₦124,000</div>
                  <div className="text-sm text-green-600">+8.2% since last month</div>
                </div>
                <DollarSign className="w-8 h-8 text-[#1565C0]" />
              </div>
              <div className="h-48 mb-6">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={earningsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis
                      dataKey="week"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: '#6b7280' }}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: '#6b7280' }}
                      tickFormatter={(value) => `₦${(value / 1000).toFixed(0)}k`}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'white',
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                      }}
                      formatter={(value) => [`₦${value.toLocaleString()}`, 'Earnings']}
                    />
                    <Area
                      type="monotone"
                      dataKey="earnings"
                      stroke="#1565C0"
                      fill="#E3F2FD"
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-sm text-gray-600 mb-1">Total Sales</div>
                  <div className="text-lg text-gray-900" style={{ fontWeight: 600 }}>₦98,500</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-sm text-gray-600 mb-1">Total Expenses</div>
                  <div className="text-lg text-gray-900" style={{ fontWeight: 600 }}>₦25,500</div>
                </div>
              </div>
              <div className="text-center mt-4">
                <button className="text-xs text-[#1565C0] hover:text-[#0D47A1] transition-colors" style={{ fontWeight: 600 }}>View Full Insights</button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div>
          {/* Recent Activity - Messages & Requests */}
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm mb-6">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg text-gray-900" style={{ fontWeight: 600 }}>Recent Messages</h3>
                <MessageSquare className="w-5 h-5 text-[#1565C0]" />
              </div>
              <div className="space-y-3 mb-4">
                {newMessages.map((message) => (
                  <div key={message.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-[#E3F2FD] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xs text-[#1565C0]" style={{ fontWeight: 600 }}>
                        {message.from.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <div className="text-sm text-gray-900" style={{ fontWeight: 500 }}>{message.from}</div>
                        <div className="text-xs text-gray-500">{message.time}</div>
                      </div>
                      <div className="text-xs text-gray-600 truncate">{message.message}</div>
                    </div>
                    {message.unread && (
                      <div className="w-2 h-2 bg-[#1565C0] rounded-full flex-shrink-0 mt-2"></div>
                    )}
                  </div>
                ))}
              </div>
              <div className="text-right">
                <button className="text-xs text-[#1565C0] hover:text-[#0D47A1] transition-colors" style={{ fontWeight: 600 }}>View All Messages</button>
              </div>
            </div>
          </div>

          {/* Upcoming Inspections */}
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg text-gray-900" style={{ fontWeight: 600 }}>Upcoming Inspections</h3>
                <Calendar className="w-5 h-5 text-[#1565C0]" />
              </div>
              <div className="space-y-3 mb-4">
                {upcomingInspections.slice(0, 3).map((inspection) => (
                  <div key={inspection.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <div className="text-sm text-gray-900" style={{ fontWeight: 500 }}>{inspection.property}</div>
                      <div className="text-xs text-gray-600">{inspection.date}</div>
                    </div>
                    <div className="flex flex-col items-end space-y-1">
                      <div className={`text-xs px-2 py-1 rounded-full ${
                        inspection.status === 'Urgent' ? 'bg-red-100 text-red-700' :
                        inspection.status === 'Scheduled' ? 'bg-blue-100 text-blue-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`} style={{ fontWeight: 500 }}>
                        {inspection.status}
                      </div>
                      <div className="flex space-x-1">
                        <button className="text-xs text-[#1565C0] hover:text-[#0D47A1] transition-colors underline" style={{ fontWeight: 500 }}>View Directions</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-right">
                <button className="text-xs text-[#1565C0] hover:text-[#0D47A1] transition-colors" style={{ fontWeight: 600 }}>See All</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
