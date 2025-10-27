import { AgentSidebar } from '../components/agent/AgentSidebar';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';
import { Users, Search, Calendar, Handshake, Funnel, TrendingUp, MessageSquare, CheckCircle, Clock, Eye, ChevronRight, DollarSign, MapPin } from 'lucide-react';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function AgentAnalytics() {
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

  const earningsData = [
    { week: 'Week 1', earnings: 85000 },
    { week: 'Week 2', earnings: 92000 },
    { week: 'Week 3', earnings: 78000 },
    { week: 'Week 4', earnings: 124000 },
  ];

  return (
    <div className="flex min-h-screen bg-[#F5FAFF]">
      <AgentSidebar />
      <div className="flex-1 ml-64">
        <div className="p-8 max-w-[1400px]">
          <DashboardHeader />

          {/* Analytics Content */}
          <div className="space-y-8">
            {/* Lead Performance Chart */}
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
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
                  <button className="text-xs text-[#1565C0] hover:text-[#0D47A1] transition-colors" style={{ fontWeight: 600 }}>View Details</button>
                </div>
              </div>
            </div>

            {/* Inspection Activity Chart */}
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
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
                  <button className="text-xs text-[#1565C0] hover:text-[#0D47A1] transition-colors" style={{ fontWeight: 600 }}>View Details</button>
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
        </div>
      </div>
    </div>
  );
}