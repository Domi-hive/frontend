import { useState } from 'react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { ChevronDown, MapPin, Phone, Calendar, Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

interface InspectionCardProps {
  inspection: {
    id: string;
    property: string;
    propertyType: string;
    date: string;
    time: string;
    location: string;
    agent: {
      name: string;
      phone: string;
      avatar: string;
      verified: boolean;
    };
    status: 'confirmed' | 'scheduled' | 'pending' | 'completed' | 'cancelled';
  };
  onReschedule?: (id: string) => void;
  onCancel?: (id: string) => void;
  onGetDirections?: (location: string) => void;
  isHistory?: boolean;
}

export function InspectionCard({
  inspection,
  onReschedule,
  onCancel,
  onGetDirections,
  isHistory = false,
}: InspectionCardProps) {
  const [expanded, setExpanded] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'scheduled':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'completed':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      case 'cancelled':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <CheckCircle className="w-3 h-3" />;
      case 'scheduled':
        return <Calendar className="w-3 h-3" />;
      case 'pending':
        return <AlertCircle className="w-3 h-3" />;
      case 'completed':
        return <CheckCircle className="w-3 h-3" />;
      case 'cancelled':
        return <XCircle className="w-3 h-3" />;
      default:
        return <AlertCircle className="w-3 h-3" />;
    }
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">{inspection.property}</h3>
            <p className="text-gray-600 text-sm">{inspection.propertyType}</p>
          </div>
          <Badge className={`${getStatusColor(inspection.status)} flex items-center gap-1 text-xs px-2 py-1`}>
            {getStatusIcon(inspection.status)}
            {inspection.status.charAt(0).toUpperCase() + inspection.status.slice(1)}
          </Badge>
        </div>

        {/* Date and Time */}
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{inspection.date}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="w-4 h-4" />
            <span className="text-sm">{inspection.time}</span>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-start gap-2 mb-4">
          <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
          <span className="text-sm text-gray-600">{inspection.location}</span>
        </div>

        {/* Agent Info */}
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10">
            <AvatarImage src={inspection.agent.avatar} alt={inspection.agent.name} />
            <AvatarFallback>{inspection.agent.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-900">{inspection.agent.name}</span>
              {inspection.agent.verified && <CheckCircle className="w-4 h-4 text-green-600" />}
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Phone className="w-3 h-3" />
              <span className="text-xs">{inspection.agent.phone}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Expandable Actions */}
      {!isHistory && (
        <div className="border-t border-gray-100">
          <button
            onClick={() => setExpanded(!expanded)}
            className="w-full px-6 py-3 flex items-center justify-between text-sm text-gray-600 hover:bg-gray-50 transition-colors"
          >
            <span>Actions</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`} />
          </button>

          {expanded && (
            <div className="px-6 pb-4">
              <div className="grid grid-cols-2 gap-2">
                {onGetDirections && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onGetDirections(inspection.location)}
                    className="text-xs"
                  >
                    Get Directions
                  </Button>
                )}
                {onReschedule && inspection.status !== 'cancelled' && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onReschedule(inspection.id)}
                    className="text-xs"
                  >
                    Reschedule
                  </Button>
                )}
                {onCancel && inspection.status !== 'cancelled' && inspection.status !== 'completed' && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onCancel(inspection.id)}
                    className="text-xs text-red-600 border-red-200 hover:bg-red-50"
                  >
                    Cancel
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}