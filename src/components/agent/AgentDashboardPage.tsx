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
    { id: 1, name: 'Sarah Johnson', property: '3BR Apartment', status: 'Active', time: '2 hours ago' },
    { id: 2, name: 'Michael Chen', property: 'Villa', status: 'Pending', time: '4 hours ago' },
    { id: 3, name: 'Emma Davis', property: 'Office Space', status: 'Active', time: '6 hours ago' },
    { id: 4, name: 'James Wilson', property: '2BR Condo', status: 'Completed', time: '1 day ago' },
  ];

  const upcomingInspections = [
    { id: 1, property: 'Downtown Office Complex', date: 'Today, 2:00 PM', status: 'Scheduled' },
    { id: 2, property: 'Riverside Villa', date: 'Tomorrow, 10:00 AM', status: 'Scheduled' },
    { id: 3, property: 'City Center Apartment', date: 'Dec 15, 3:00 PM', status: 'Scheduled' },
    { id: 4, property: 'Suburban House', date: 'Dec 16, 11:00 AM', status: 'Pending' },
  ];

  const earningsData = [
    { week: 'Week 1', earnings: 85000 },
    { week: 'Week 2', earnings: 92000 },
    { week: 'Week 3', earnings: 78000 },
    { week: 'Week 4', earnings: 124000 },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto bg-gray-50 min-h-screen">
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

      {/* New Grid Layout - Phase 1 Foundation */}

      {/* Top Section: Quick Stats Cards - Horizontal Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 animate-fadeIn">
        {/* KPI Card 1: Leads This Week */}
        <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl text-[#0D1B2A] mb-1" style={{ fontWeight: 600 }}>8</div>
              <div className="text-sm text-gray-600">Leads this week</div>
            </div>
            <div className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">+12%</div>
          </div>
        </div>

        {/* KPI Card 2: Property Requests */}
        <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl text-[#0D1B2A] mb-1" style={{ fontWeight: 600 }}>5</div>
              <div className="text-sm text-gray-600">Ongoing requests</div>
            </div>
            <div className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">3 new</div>
          </div>
        </div>

        {/* KPI Card 3: Inspections Scheduled */}
        <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl text-[#0D1B2A] mb-1" style={{ fontWeight: 600 }}>3</div>
              <div className="text-sm text-gray-600">Inspections scheduled</div>
            </div>
            <div className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">+1</div>
          </div>
        </div>

        {/* KPI Card 4: Deals Closed */}
        <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl text-[#0D1B2A] mb-1" style={{ fontWeight: 600 }}>2</div>
              <div className="text-sm text-gray-600">Closed this month</div>
            </div>
            <div className="text-xs text-red-600 bg-red-50 px-2 py-1 rounded-full">-5%</div>
          </div>
        </div>
      </div>

      {/* Middle Section: Performance and Activity - Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 animate-slideUp">
        {/* Left Column: Lead Performance (Line Chart) */}
        <div className="lg:col-span-1 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200">
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

        {/* Right Column: Inspection Activity (Bar Chart) */}
        <div className="lg:col-span-1 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200">
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

        {/* Right Column: Client and Inspection Summaries */}
        <div className="lg:col-span-1 space-y-6">
          {/* Client Overview Card */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg text-gray-900" style={{ fontWeight: 600 }}>Client Overview</h3>
                <MessageSquare className="w-5 h-5 text-[#1565C0]" />
              </div>
              <div className="space-y-3 mb-4">
                {recentClients.slice(0, 3).map((client) => (
                  <div key={client.id} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-[#E3F2FD] rounded-full flex items-center justify-center">
                        <span className="text-xs text-[#1565C0]" style={{ fontWeight: 600 }}>
                          {client.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="text-sm text-gray-900" style={{ fontWeight: 500 }}>{client.name}</div>
                        <div className="text-xs text-gray-600">{client.property}</div>
                      </div>
                    </div>
                    <div className={`text-xs px-2 py-1 rounded-full ${
                      client.status === 'Active' ? 'bg-green-100 text-green-700' :
                      client.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-gray-100 text-gray-700'
                    }`} style={{ fontWeight: 500 }}>
                      {client.status}
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-right">
                <button className="text-xs text-[#1565C0] hover:text-[#0D47A1] transition-colors" style={{ fontWeight: 600 }}>View All Clients</button>
              </div>
            </div>
          </div>

          {/* Upcoming Inspections Card */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg text-gray-900" style={{ fontWeight: 600 }}>Upcoming Inspections</h3>
                <Calendar className="w-5 h-5 text-[#1565C0]" />
              </div>
              <div className="space-y-3 mb-4">
                {upcomingInspections.slice(0, 3).map((inspection) => (
                  <div key={inspection.id} className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-900" style={{ fontWeight: 500 }}>{inspection.property}</div>
                      <div className="text-xs text-gray-600">{inspection.date}</div>
                    </div>
                    <div className={`text-xs px-2 py-1 rounded-full ${
                      inspection.status === 'Scheduled' ? 'bg-blue-100 text-blue-700' :
                      inspection.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-green-100 text-green-700'
                    }`} style={{ fontWeight: 500 }}>
                      {inspection.status}
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

      {/* Bottom Section: Earnings Overview */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 animate-fadeIn">
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
  );
}
