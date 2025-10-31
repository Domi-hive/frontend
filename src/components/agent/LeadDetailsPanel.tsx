import { X, MessageSquare, Calendar, CheckCircle, Trash2 } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Textarea } from './ui/textarea';
import { useState } from 'react';

interface Lead {
  id: string;
  clientName: string;
  clientAvatar: string;
  email: string;
  phone: string;
  propertyType: string;
  location: string;
  budgetRange: string;
  status: 'new' | 'contacted' | 'scheduled' | 'converted';
  lastContacted: string;
  notes: string;
}

interface LeadDetailsPanelProps {
  lead: Lead | null;
  isOpen: boolean;
  onClose: () => void;
  onMessage: (id: string) => void;
  onSchedule: (id: string) => void;
  onConvert: (id: string) => void;
  onRemove: (id: string) => void;
  onSaveNotes: (id: string, notes: string) => void;
}

export function LeadDetailsPanel({
  lead,
  isOpen,
  onClose,
  onMessage,
  onSchedule,
  onConvert,
  onRemove,
  onSaveNotes,
}: LeadDetailsPanelProps) {
  const [notes, setNotes] = useState(lead?.notes || '');

  if (!lead || !isOpen) return null;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new':
        return 'bg-purple-100 text-purple-700';
      case 'contacted':
        return 'bg-[#90CAF9] text-[#1565C0]';
      case 'scheduled':
        return 'bg-green-100 text-green-700';
      case 'converted':
        return 'bg-gray-100 text-gray-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'new':
        return 'New';
      case 'contacted':
        return 'Contacted';
      case 'scheduled':
        return 'Inspection Scheduled';
      case 'converted':
        return 'Converted';
      default:
        return status;
    }
  };

  const handleSaveNotes = () => {
    onSaveNotes(lead.id, notes);
  };

  return (
    <div
      className="fixed right-0 top-0 h-full w-96 bg-white shadow-2xl border-l border-gray-200 z-50 overflow-y-auto animate-in slide-in-from-right duration-300"
    >
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
        <h3>Lead Details</h3>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Client Info */}
        <div className="text-center pb-6 border-b border-gray-100">
          <Avatar className="w-20 h-20 mx-auto mb-4">
            <AvatarImage src={lead.clientAvatar} alt={lead.clientName} />
            <AvatarFallback>{lead.clientName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <h3 className="mb-2">{lead.clientName}</h3>
          <Badge className={`${getStatusColor(lead.status)} text-xs px-3 py-1 mb-4`}>
            {getStatusLabel(lead.status)}
          </Badge>
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <span>📧</span>
              <span>{lead.email}</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <span>📱</span>
              <span>{lead.phone}</span>
            </div>
          </div>
        </div>

        {/* Property Request Details */}
        <div>
          <h4 className="mb-4" style={{ color: '#1565C0' }}>Requested Property</h4>
          <div className="space-y-3">
            <div className="p-3 rounded-lg" style={{ backgroundColor: '#E3F2FD' }}>
              <div className="text-xs text-black mb-1">Property Type</div>
              <div className="text-sm">{lead.propertyType}</div>
            </div>
            <div className="p-3 rounded-lg" style={{ backgroundColor: '#E3F2FD' }}>
              <div className="text-xs text-black mb-1">Location</div>
              <div className="text-sm">{lead.location}</div>
            </div>
            <div className="p-3 rounded-lg" style={{ backgroundColor: '#E3F2FD' }}>
              <div className="text-xs text-black mb-1">Budget Range</div>
              <div className="text-sm">{lead.budgetRange}</div>
            </div>
            <div className="p-3 rounded-lg" style={{ backgroundColor: '#E3F2FD' }}>
              <div className="text-xs text-black mb-1">Last Contacted</div>
              <div className="text-sm">{lead.lastContacted}</div>
            </div>
          </div>
        </div>

        {/* Notes */}
        <div>
          <h4 className="mb-3">Internal Notes</h4>
          <Textarea
            placeholder="Add notes about this lead..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="min-h-32 mb-2"
          />
          <Button
            variant="outline"
            size="sm"
            onClick={handleSaveNotes}
            className="w-full"
          >
            Save Notes
          </Button>
        </div>

        {/* Quick Actions */}
        <div className="space-y-2">
          <h4 className="mb-3">Quick Actions</h4>
          <Button
            className="w-full text-white"
            style={{ backgroundColor: '#90CAF9' }}
            onClick={() => onMessage(lead.id)}
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            Message Client
          </Button>
          <Button
            variant="outline"
            className="w-full"
            onClick={() => onSchedule(lead.id)}
          >
            <Calendar className="w-4 h-4 mr-2" />
            Schedule Inspection
          </Button>
          {lead.status !== 'converted' && (
            <Button
              variant="outline"
              className="w-full text-green-600 border-green-200 hover:bg-green-50"
              onClick={() => onConvert(lead.id)}
            >
              <CheckCircle className="w-4 h-4 mr-2" />
              Mark as Converted
            </Button>
          )}
          <Button
            variant="outline"
            className="w-full text-red-600 border-red-200 hover:bg-red-50"
            onClick={() => {
              onRemove(lead.id);
              onClose();
            }}
          >
            <Trash2 className="w-4 h-4 mr-2" />
            Remove Lead
          </Button>
        </div>
      </div>
    </div>
  );
}
