import { Home, MessageSquare, FileText, ClipboardCheck, Building2, Settings, LogOut, Mail, Bell } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface SidebarProps {
  activeItem?: string;
}

export function Sidebar({ activeItem = 'inspections' }: SidebarProps) {
  const navItems = [
    { id: 'dashboard', icon: Home, label: 'Dashboard' },
    { id: 'messages', icon: MessageSquare, label: 'Messages' },
    { id: 'requests', icon: FileText, label: 'Requests' },
    { id: 'inspections', icon: ClipboardCheck, label: 'Inspections' },
    { id: 'properties', icon: Building2, label: 'Recommended Properties' },
  ];

  const connections = [
    {
      name: 'Sarah Johnson',
      role: 'Agent',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      initials: 'SJ',
    },
    {
      name: 'Mike Chen',
      role: 'Agent',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      initials: 'MC',
    },
    {
      name: 'Emma Davis',
      role: 'Consultant',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      initials: 'ED',
    },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6 flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#90CAF9' }}>
          <Home className="w-5 h-5 text-white" />
        </div>
        <span className="font-semibold">DomiHive</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3">
        <div className="space-y-1">
          <div className="text-xs text-gray-500 px-3 mb-2">OVERVIEW</div>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.id === activeItem;
            return (
              <button
                key={item.id}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                  isActive
                    ? 'text-white'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                style={isActive ? { backgroundColor: '#90CAF9' } : {}}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Connections */}
        <div className="mt-8">
          <div className="text-xs text-gray-500 px-3 mb-3">CONNECTIONS</div>
          <div className="space-y-1">
            {connections.map((connection) => (
              <button
                key={connection.name}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Avatar className="w-8 h-8">
                  <AvatarImage src={connection.avatar} alt={connection.name} />
                  <AvatarFallback>{connection.initials}</AvatarFallback>
                </Avatar>
                <div className="flex-1 text-left">
                  <div className="text-sm">{connection.name}</div>
                  <div className="text-xs text-gray-500">{connection.role}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Settings */}
      <div className="p-3 border-t border-gray-200 space-y-1">
        <div className="text-xs text-gray-500 px-3 mb-2">SETTINGS</div>
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
          <Settings className="w-5 h-5" />
          <span>Setting</span>
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-red-500 hover:bg-red-50 transition-colors">
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}
