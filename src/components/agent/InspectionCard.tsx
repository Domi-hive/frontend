import { useState } from 'react';
import { ChevronDown, MapPin, Phone, Calendar, X, CheckCircle, XCircle } from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

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
    status: 'scheduled' | 'pending' | 'confirmed' | 'completed' | 'cancelled';
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
  const [isExpanded, setIsExpanded] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'scheduled':
      case 'confirmed':
        return 'bg-green-100 text-green-700';
      case 'pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'completed':
        return 'bg-blue-100 text-blue-700';
      case 'cancelled':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusIcon = (status: string) => {
    if (status === 'completed') return <CheckCircle className="w-4 h-4 mr-1" />;
    if (status === 'cancelled') return <XCircle className="w-4 h-4 mr-1" />;
    return null;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all hover:shadow-md">
      {/* Collapsed View */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-5 flex items-center justify-between text-left hover:bg-gray-50/50 transition-colors"
      >
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-medium pr-4">{inspection.property}</h3>
            <Badge className={`${getStatusColor(inspection.status)} flex items-center text-xs px-2 py-1`}>
              {getStatusIcon(inspection.status)}
              {inspection.status.charAt(0).toUpperCase() + inspection.status.slice(1)}
            </Badge>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{inspection.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <span>•</span>
              <span>{inspection.time}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2 mt-2">
            <Avatar className="w-6 h-6">
              <AvatarImage src={inspection.agent.avatar} alt={inspection.agent.name} />
              <AvatarFallback>{inspection.agent.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <span className="text-sm text-gray-700">{inspection.agent.name}</span>
            {inspection.agent.verified && (
              <CheckCircle className="w-4 h-4" style={{ color: '#90CAF9' }} />
            )}
          </div>
        </div>
        
        <ChevronDown
          className={`w-5 h-5 text-gray-400 transition-transform ${
            isExpanded ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Expanded View */}
      {isExpanded && (
        <div className="px-5 pb-5 border-t border-gray-100 pt-4 animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <div className="text-xs text-gray-500 mb-1">Property</div>
              <div className="text-sm">{inspection.propertyType}</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-1">Date</div>
              <div className="text-sm">{inspection.date}</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-1">Time</div>
              <div className="text-sm">{inspection.time}</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-1">Agent</div>
              <div className="text-sm flex items-center gap-1">
                {inspection.agent.name}
                {inspection.agent.verified && (
                  <CheckCircle className="w-3 h-3" style={{ color: '#90CAF9' }} />
                )}
              </div>
            </div>
          </div>

          <div className="mb-4">
            <div className="text-xs text-gray-500 mb-1">Location</div>
            <div className="text-sm">{inspection.location}</div>
          </div>

          <div className="mb-4">
            <div className="text-xs text-gray-500 mb-1">Agent Phone</div>
            <div className="text-sm">{inspection.agent.phone}</div>
          </div>

          {/* Status Timeline */}
          {!isHistory && (
            <div className="mb-4 p-3 rounded-lg" style={{ backgroundColor: '#E3F2FD' }}>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#1565C0' }}></div>
                <span className="text-sm" style={{ color: '#1565C0' }}>
                  {inspection.status === 'confirmed' ? 'Inspection confirmed and ready' : 'Awaiting confirmation'}
                </span>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          {!isHistory && inspection.status !== 'cancelled' && (
            <div className="grid grid-cols-2 gap-2">
              <Button
                variant="outline"
                className="w-full"
                onClick={() => onGetDirections?.(inspection.location)}
              >
                <MapPin className="w-4 h-4 mr-2" />
                Get Directions
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => window.open(`tel:${inspection.agent.phone}`, '_self')}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Agent
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => onReschedule?.(inspection.id)}
              >
                <Calendar className="w-4 h-4 mr-2" />
                Reschedule
              </Button>
              <Button
                variant="outline"
                className="w-full text-red-500 border-red-200 hover:bg-red-50"
                onClick={() => onCancel?.(inspection.id)}
              >
                <X className="w-4 h-4 mr-2" />
                Cancel
              </Button>
            </div>
          )}

          {isHistory && inspection.status === 'completed' && (
            <div className="p-3 rounded-lg bg-gray-50">
              <div className="text-xs text-gray-500 mb-1">Feedback Summary</div>
              <div className="text-sm text-gray-700">Property met all requirements. Excellent service by agent.</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
