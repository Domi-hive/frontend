import { Home, Mail, BookOpen, CheckSquare, Users } from 'lucide-react';

interface MobileDashboardNavProps {
  navigate: (path: string, label: string) => void;
  activeItem: string;
}

export function MobileDashboardNav({ navigate, activeItem }: MobileDashboardNavProps) {
  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/dashboard' },
    { icon: BookOpen, label: 'Requests', path: '/dashboard/requests' },
    { icon: Mail, label: 'Messages', path: '/dashboard/messages' },
    { icon: CheckSquare, label: 'Inspections', path: '/dashboard' },
    { icon: Users, label: 'Agents', path: '/dashboard' },
  ];
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 md:hidden">
      <div className="grid grid-cols-5 gap-1 p-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.label;
          
          return (
            <button
              key={item.label}
              onClick={() => navigate(item.path, item.label)}
              className={`flex flex-col items-center gap-1 py-2 px-1 rounded-lg transition-colors ${
                isActive 
                  ? 'text-[#1565C0]' 
                  : 'text-gray-600'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs truncate w-full text-center" style={{ fontWeight: isActive ? 600 : 400 }}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
