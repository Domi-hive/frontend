import { Bell, Mail } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function DashboardHeader() {
  return (
    <div className="flex items-center justify-end mb-6">
      {/* Right Actions */}
      <div className="flex items-center gap-4">
        <button className="relative w-11 h-11 rounded-xl bg-white border border-gray-100 flex items-center justify-center hover:bg-gray-50 transition-colors">
          <Mail className="w-5 h-5 text-gray-600" />
        </button>
        <button className="relative w-11 h-11 rounded-xl bg-white border border-gray-100 flex items-center justify-center hover:bg-gray-50 transition-colors">
          <Bell className="w-5 h-5 text-gray-600" />
        </button>
        <div className="flex items-center gap-3 pl-4">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100"
            alt="Muhammad"
            className="w-11 h-11 rounded-xl object-cover"
          />
          <span className="text-sm text-gray-900" style={{ fontWeight: 600 }}>Muhammad</span>
        </div>
      </div>
    </div>
  );
}
