import { Home, MessageSquare, FileText, ClipboardCheck, TrendingUp, Settings, LogOut, Building } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface AgentSidebarProps {
  onLogout: () => void;
}

export function AgentSidebar({ onLogout }: AgentSidebarProps) {
  const currentPath = window.location.pathname;
  const [activeItem, setActiveItem] = useState(
    currentPath === '/agent/messages' ? 'Messages' :
    currentPath === '/agent/properties' ? 'My Properties' :
    currentPath === '/agent/requests' ? 'Client Requests' :
    currentPath === '/agent/inspections' ? 'Inspections' :
    currentPath === '/agent/analytics' ? 'Analytics' :
    'Dashboard'
  );

  const navigate = (path: string, label: string) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new Event('popstate'));
    setActiveItem(label);
  };

  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/agent' },
    { icon: MessageSquare, label: 'Messages', path: '/agent/messages' },
    { icon: Building, label: 'My Properties', path: '/agent/properties' },
    { icon: FileText, label: 'Client Requests', path: '/agent/requests' },
    { icon: ClipboardCheck, label: 'Inspections', path: '/agent/inspections' },
    { icon: TrendingUp, label: 'Analytics', path: '/agent/analytics' },
  ];

  const connections = [
    { name: 'Muhammad K.', role: 'Client', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100' },
    { name: 'Sarah Johnson', role: 'Client', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100' },
    { name: 'David Chen', role: 'Client', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100' },
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-white flex flex-col">
      {/* Logo */}
      <div className="px-6 py-6">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-[#1565C0] to-[#90CAF9] rounded-xl flex items-center justify-center">
            <Home className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl text-gray-900" style={{ fontWeight: 600 }}>DomiHive</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4">
        <div className="text-xs text-gray-400 mb-3 px-3" style={{ fontWeight: 600, letterSpacing: '0.5px' }}>
          OVERVIEW
        </div>
        <div className="space-y-1 mb-8">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.label;

            return (
              <button
                key={item.label}
                onClick={() => navigate(item.path, item.label)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#1565C0] to-[#1976D2] text-white shadow-lg shadow-blue-500/20'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm" style={{ fontWeight: isActive ? 600 : 500 }}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Connections */}
        <div>
          <div className="text-xs text-gray-400 mb-3 px-3" style={{ fontWeight: 600, letterSpacing: '0.5px' }}>
            RECENT CLIENTS
          </div>
          <div className="space-y-2">
            {connections.map((connection, index) => (
              <button
                key={index}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <ImageWithFallback
                  src={connection.image}
                  alt={connection.name}
                  className="w-9 h-9 rounded-full object-cover"
                />
                <div className="flex-1 text-left">
                  <div className="text-sm text-gray-900" style={{ fontWeight: 600 }}>{connection.name}</div>
                  <div className="text-xs text-gray-500">{connection.role}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Settings */}
      <div className="px-4 pb-6 space-y-1 border-t border-gray-100 pt-4">
        <div className="text-xs text-gray-400 mb-3 px-3" style={{ fontWeight: 600, letterSpacing: '0.5px' }}>
          SETTINGS
        </div>
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-50 transition-colors">
          <Settings className="w-5 h-5" />
          <span className="text-sm" style={{ fontWeight: 500 }}>Setting</span>
        </button>
        <button onClick={onLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-colors">
          <LogOut className="w-5 h-5" />
          <span className="text-sm" style={{ fontWeight: 500 }}>Logout</span>
        </button>
      </div>
    </div>
  );
}
