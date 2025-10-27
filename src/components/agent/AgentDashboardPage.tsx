import { Users, Search, Calendar, Handshake, Funnel, TrendingUp, MessageSquare, CheckCircle, Clock, Eye, ChevronRight, DollarSign, MapPin, ArrowUp, ArrowDown, Bell, Plus, Building2, Phone, Mail } from 'lucide-react';
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
    <div className="p-8 max-w-7xl mx-auto">

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

      {/* KPI Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-50 rounded-lg">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <span className="flex items-center gap-1 text-sm font-semibold text-green-600">
              <ArrowUp className="w-4 h-4" />
              12%
            </span>
          </div>
          <div className="text-4xl font-bold text-gray-800 mb-1">8</div>
          <div className="text-sm text-gray-500 mb-3">New Leads</div>
          <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full w-3/4 bg-blue-600 rounded-full"></div>
          </div>
          <div className="text-xs text-gray-400 mt-2">6 from last week</div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-50 rounded-lg">
              <Search className="w-6 h-6 text-purple-600" />
            </div>
            <span className="flex items-center gap-1 text-sm font-semibold text-green-600">
              <ArrowUp className="w-4 h-4" />
              25%
            </span>
          </div>
          <div className="text-4xl font-bold text-gray-800 mb-1">5</div>
          <div className="text-sm text-gray-500 mb-3">Active Requests</div>
          <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full w-1/2 bg-purple-600 rounded-full"></div>
          </div>
          <div className="text-xs text-gray-400 mt-2">4 from last week</div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-orange-50 rounded-lg">
              <Calendar className="w-6 h-6 text-orange-600" />
            </div>
            <span className="flex items-center gap-1 text-sm font-semibold text-red-600">
              <ArrowDown className="w-4 h-4" />
              8%
            </span>
          </div>
          <div className="text-4xl font-bold text-gray-800 mb-1">3</div>
          <div className="text-sm text-gray-500 mb-3">Scheduled Inspections</div>
          <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full w-1/4 bg-orange-600 rounded-full"></div>
          </div>
          <div className="text-xs text-gray-400 mt-2">1 urgent today</div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-50 rounded-lg">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
            <span className="flex items-center gap-1 text-sm font-semibold text-green-600">
              <ArrowUp className="w-4 h-4" />
              18%
            </span>
          </div>
          <div className="text-4xl font-bold text-gray-800 mb-1">₦124k</div>
          <div className="text-sm text-gray-500 mb-3">Monthly Revenue</div>
          <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full w-4/5 bg-green-600 rounded-full"></div>
          </div>
          <div className="text-xs text-gray-400 mt-2">₦105k last month</div>
        </div>
      </div>

      {/* Action Required Section */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 rounded-xl p-6 mb-8 animate-fadeIn">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <Clock className="w-5 h-5 text-red-600" />
              Action Required
            </h2>
            <p className="text-sm text-gray-600 mt-1">Items that need your immediate attention</p>
          </div>
          <span className="px-3 py-1 bg-red-500 text-white text-sm font-semibold rounded-full">2 Urgent</span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
            <div className="flex items-start justify-between mb-2">
              <div>
                <span className="text-xs font-semibold text-red-600 uppercase">Urgent</span>
                <h3 className="font-semibold text-gray-800 mt-1">3BR Apartment in Wuse II</h3>
                <p className="text-sm text-gray-600">Muhammad K. - Today 2:30 PM</p>
              </div>
              <Calendar className="w-5 h-5 text-red-600" />
            </div>
            <button className="mt-3 w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm font-medium">
              View Details
            </button>
          </div>
          <div className="bg-white rounded-lg p-4 border-l-4 border-orange-500">
            <div className="flex items-start justify-between mb-2">
              <div>
                <span className="text-xs font-semibold text-orange-600 uppercase">5 min ago</span>
                <h3 className="font-semibold text-gray-800 mt-1">When can we schedule?</h3>
                <p className="text-sm text-gray-600">Sarah Johnson - Inspection inquiry</p>
              </div>
              <MessageSquare className="w-5 h-5 text-orange-600" />
            </div>
            <button className="mt-3 w-full px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 text-sm font-medium">
              Respond Now
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-3 gap-6">
        {/* Upcoming Inspections */}
        <div className="col-span-1 bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-800">Upcoming Inspections</h2>
            <span className="text-sm text-blue-600 font-medium">3 Scheduled</span>
          </div>
          <div className="space-y-4">
            <div className="border-l-4 border-red-500 bg-red-50 rounded-lg p-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-1 bg-red-500 text-white text-xs font-semibold rounded">URGENT</span>
                    <span className="text-xs text-gray-500">Today, 2:30 PM</span>
                  </div>
                  <h3 className="font-semibold text-gray-800">3-Bedroom in Wuse II</h3>
                  <p className="text-sm text-gray-600 flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3" />
                    Wuse II, Abuja
                  </p>
                </div>
              </div>
              <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">View Directions →</button>
            </div>

            <div className="border-l-4 border-blue-500 bg-blue-50 rounded-lg p-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-1 bg-blue-500 text-white text-xs font-semibold rounded">SCHEDULED</span>
                    <span className="text-xs text-gray-500">Oct 24, 2:00 PM</span>
                  </div>
                  <h3 className="font-semibold text-gray-800">4-Bedroom Duplex in Asokoro</h3>
                  <p className="text-sm text-gray-600 flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3" />
                    Asokoro, Abuja
                  </p>
                </div>
              </div>
              <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">View Directions →</button>
            </div>

            <div className="border-l-4 border-blue-500 bg-blue-50 rounded-lg p-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-1 bg-blue-500 text-white text-xs font-semibold rounded">SCHEDULED</span>
                    <span className="text-xs text-gray-500">Oct 31, 2:30 PM</span>
                  </div>
                  <h3 className="font-semibold text-gray-800">Luxury Penthouse</h3>
                  <p className="text-sm text-gray-600 flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3" />
                    Maitama, Abuja
                  </p>
                </div>
              </div>
              <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">View Directions →</button>
            </div>
          </div>
          <button className="w-full mt-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg font-medium text-sm">
            See All Inspections →
          </button>
        </div>

        {/* Property Requests */}
        <div className="col-span-1 bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-800">Property Requests</h2>
            <span className="text-sm text-purple-600 font-medium">3 New</span>
          </div>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded">URGENT</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 text-sm">3BR Apartment in Wuse II</h3>
                  <p className="text-xs text-gray-500 mt-1">Muhammad K. - Today 2:30 PM</p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-xs text-gray-600">Budget: ₦2.5M/yr</span>
                  </div>
                </div>
              </div>
              <button className="w-full mt-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium">
                View Request
              </button>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded">NEW</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 text-sm">Luxury Penthouse in Maitama</h3>
                  <p className="text-xs text-gray-500 mt-1">Sarah Johnson - Tomorrow</p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-xs text-gray-600">Budget: ₦8M/yr</span>
                  </div>
                </div>
              </div>
              <button className="w-full mt-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium">
                View Request
              </button>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded">MATCHED</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 text-sm">Office Space in CBD</h3>
                  <p className="text-xs text-gray-500 mt-1">David Chen - Oct 23, 10:00 AM</p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-xs text-gray-600">Budget: ₦5M/yr</span>
                  </div>
                </div>
              </div>
              <button className="w-full mt-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium">
                View Request
              </button>
            </div>
          </div>
          <button className="w-full mt-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg font-medium text-sm">
            View All Requests →
          </button>
        </div>

        {/* Recent Messages */}
        <div className="col-span-1 bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-800">Recent Messages</h2>
            <span className="text-sm text-orange-600 font-medium">4 Unread</span>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer border-l-4 border-orange-500">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 font-semibold text-sm">
                SJ
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-gray-800 text-sm">Sarah Johnson</h3>
                  <span className="text-xs text-gray-400">5 min ago</span>
                </div>
                <p className="text-sm text-gray-600 truncate">When can we schedule the inspection?</p>
                <button className="text-xs text-blue-600 hover:text-blue-700 font-medium mt-1">Respond →</button>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer border-l-4 border-gray-200">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 text-purple-600 font-semibold text-sm">
                MC
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-gray-800 text-sm">Michael Chen</h3>
                  <span className="text-xs text-gray-400">1 hour ago</span>
                </div>
                <p className="text-sm text-gray-600 truncate">Thanks for the property details</p>
                <button className="text-xs text-blue-600 hover:text-blue-700 font-medium mt-1">Respond →</button>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer border-l-4 border-gray-200">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 text-green-600 font-semibold text-sm">
                ED
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-gray-800 text-sm">Emma Davis</h3>
                  <span className="text-xs text-gray-400">2 hours ago</span>
                </div>
                <p className="text-sm text-gray-600 truncate">Is the villa still available?</p>
                <button className="text-xs text-blue-600 hover:text-blue-700 font-medium mt-1">Respond →</button>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer border-l-4 border-gray-200">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 text-orange-600 font-semibold text-sm">
                JW
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-gray-800 text-sm">John Williams</h3>
                  <span className="text-xs text-gray-400">3 hours ago</span>
                </div>
                <p className="text-sm text-gray-600 truncate">Great working with you!</p>
                <button className="text-xs text-blue-600 hover:text-blue-700 font-medium mt-1">Respond →</button>
              </div>
            </div>
          </div>
          <button className="w-full mt-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg font-medium text-sm">
            View All Messages →
          </button>
        </div>
      </div>
    </div>
  );
}
