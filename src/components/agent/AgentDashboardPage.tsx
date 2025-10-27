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
      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="relative bg-gradient-to-br from-[#E3F2FD] to-[#BBDEFB]/30 rounded-2xl p-6 border border-blue-100 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 group overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-[#0D1B2A] mb-1" style={{ fontWeight: 600 }}>Leads this week</div>
                <div className="text-2xl text-[#0D1B2A]" style={{ fontWeight: 600 }}>8</div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center">
                <Users className="w-5 h-5 text-[#1565C0]" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative bg-gradient-to-br from-[#E3F2FD] to-[#BBDEFB]/30 rounded-2xl p-6 border border-blue-100 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 group overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-[#0D1B2A] mb-1" style={{ fontWeight: 600 }}>Ongoing requests</div>
                <div className="text-2xl text-[#0D1B2A]" style={{ fontWeight: 600 }}>5</div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center">
                <Search className="w-5 h-5 text-[#1565C0]" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative bg-gradient-to-br from-[#E3F2FD] to-[#BBDEFB]/30 rounded-2xl p-6 border border-blue-100 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 group overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-[#0D1B2A] mb-1" style={{ fontWeight: 600 }}>Inspections scheduled</div>
                <div className="text-2xl text-[#0D1B2A]" style={{ fontWeight: 600 }}>3</div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center">
                <Calendar className="w-5 h-5 text-[#1565C0]" />
              </div>
            </div>
          </div>
        </div>

        {/* KPI Card 5: Monthly Revenue */}
        <div className="relative bg-gradient-to-br from-[#E3F2FD] to-[#BBDEFB]/30 rounded-2xl p-4 border border-blue-100 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 group overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-[#0D1B2A] mb-1" style={{ fontWeight: 600 }}>Monthly Revenue</div>
                <div className="text-2xl text-[#0D1B2A]" style={{ fontWeight: 600 }}>₦124k</div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-[#1565C0]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Activity Cards - Right below progress cards */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        {/* Upcoming Inspections */}
        <div className="bg-gradient-to-br from-[#E3F2FD] to-white rounded-xl border border-blue-100 shadow-sm hover:shadow-lg hover:bg-[#e6f0fa] transition-all duration-300">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div>
                  <h3 className="text-lg text-gray-900" style={{ fontWeight: 600 }}>Upcoming Inspections</h3>
                  <div className="text-sm text-[#1565C0]" style={{ fontWeight: 600 }}>3 Scheduled Inspections</div>
                </div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center">
                <Calendar className="w-5 h-5 text-[#1565C0]" />
              </div>
            </div>
            <div className="space-y-3 mb-4">
              {upcomingInspections.slice(0, 3).map((inspection) => (
                <div key={inspection.id} className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#E3F2FD] rounded-full flex items-center justify-center">
                      <span className="text-xs text-[#1565C0]" style={{ fontWeight: 600 }}>
                        {inspection.property.split(' ')[0][0]}{inspection.property.split(' ')[1]?.[0] || ''}
                      </span>
                    </div>
                    <div>
                      <div className="text-sm text-gray-900" style={{ fontWeight: 500 }}>{inspection.property}</div>
                      <div className="text-xs text-gray-600">{inspection.date}</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <div className={`text-xs px-2 py-1 rounded-full ${
                      inspection.status === 'Urgent' ? 'bg-red-100 text-red-700' :
                      inspection.status === 'Scheduled' ? 'bg-green-100 text-green-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`} style={{ fontWeight: 500 }}>
                      {inspection.status}
                    </div>
                    <button className="text-xs text-[#1565C0] hover:text-[#0D47A1] transition-colors hover:bg-blue-50 px-2 py-1 rounded" style={{ fontWeight: 500 }}>View Directions</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-right">
              <button className="text-xs text-[#1565C0] hover:text-[#0D47A1] transition-colors hover:bg-blue-50 px-3 py-1 rounded" style={{ fontWeight: 600 }}>See All</button>
            </div>
          </div>
        </div>

        {/* New Property Requests */}
        <div className="bg-gradient-to-br from-[#E3F2FD] to-white rounded-xl border border-blue-100 shadow-sm hover:shadow-lg hover:bg-[#e6f0fa] transition-all duration-300">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg text-gray-900" style={{ fontWeight: 600 }}>New Property Requests</h3>
                <div className="text-sm text-[#1565C0]" style={{ fontWeight: 600 }}>3 New Requests</div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center">
                <Search className="w-5 h-5 text-[#1565C0]" />
              </div>
            </div>
            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#E3F2FD] rounded-full flex items-center justify-center">
                    <span className="text-xs text-[#1565C0]" style={{ fontWeight: 600 }}>MK</span>
                  </div>
                  <div>
                    <div className="text-sm text-gray-900" style={{ fontWeight: 500 }}>3BR Apartment in Wuse II</div>
                    <div className="text-xs text-gray-600">Muhammad K. - Today 2:30 PM</div>
                  </div>
                </div>
                <div className="text-xs px-2 py-1 rounded-full bg-red-100 text-red-700" style={{ fontWeight: 500 }}>
                  Urgent
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#E3F2FD] rounded-full flex items-center justify-center">
                    <span className="text-xs text-[#1565C0]" style={{ fontWeight: 600 }}>SJ</span>
                  </div>
                  <div>
                    <div className="text-sm text-gray-900" style={{ fontWeight: 500 }}>Luxury Penthouse in Maitama</div>
                    <div className="text-xs text-gray-600">Sarah Johnson - Tomorrow</div>
                  </div>
                </div>
                <div className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700" style={{ fontWeight: 500 }}>
                  New
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#E3F2FD] rounded-full flex items-center justify-center">
                    <span className="text-xs text-[#1565C0]" style={{ fontWeight: 600 }}>DC</span>
                  </div>
                  <div>
                    <div className="text-sm text-gray-900" style={{ fontWeight: 500 }}>Office Space in CBD</div>
                    <div className="text-xs text-gray-600">David Chen - Oct 23, 10:00 AM</div>
                  </div>
                </div>
                <div className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700" style={{ fontWeight: 500 }}>
                  Matched
                </div>
              </div>
            </div>
            <div className="text-right">
              <button className="text-xs text-[#1565C0] hover:text-[#0D47A1] transition-colors hover:bg-blue-50 px-3 py-1 rounded" style={{ fontWeight: 600 }}>View All Requests</button>
            </div>
          </div>
        </div>

        {/* Recent Messages */}
        <div className="bg-gradient-to-br from-[#E3F2FD] to-white rounded-xl border border-blue-100 shadow-sm hover:shadow-lg hover:bg-[#e6f0fa] transition-all duration-300">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg text-gray-900" style={{ fontWeight: 600 }}>Recent Messages</h3>
                <div className="text-sm text-[#1565C0]" style={{ fontWeight: 600 }}>4 Recent Messages</div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-[#1565C0]" />
              </div>
            </div>
            <div className="space-y-3 mb-4">
              {newMessages.map((message) => (
                <div key={message.id} className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#E3F2FD] rounded-full flex items-center justify-center">
                      <span className="text-xs text-[#1565C0]" style={{ fontWeight: 600 }}>
                        {message.from.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm text-gray-900" style={{ fontWeight: 500 }}>{message.from}</div>
                      <div className="text-xs text-gray-600 truncate">{message.message}</div>
                      <div className="text-xs text-gray-500">{message.time}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {message.unread && (
                      <div className="w-2 h-2 bg-[#1565C0] rounded-full"></div>
                    )}
                    <button className="text-xs text-[#1565C0] hover:text-[#0D47A1] transition-colors hover:bg-blue-50 px-2 py-1 rounded" style={{ fontWeight: 500 }}>Respond</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-right">
              <button className="text-xs text-[#1565C0] hover:text-[#0D47A1] transition-colors hover:bg-blue-50 px-3 py-1 rounded" style={{ fontWeight: 600 }}>View All Messages</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
