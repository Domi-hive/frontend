import { X, MessageSquare, Send, CheckCircle, Building2 } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Textarea } from './ui/textarea';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

interface PropertyMatch {
  id: string;
  image: string;
  name: string;
  location: string;
  price: string;
  type: string;
}

interface ClientRequest {
  id: string;
  clientName: string;
  clientAvatar: string;
  email: string;
  phone: string;
  propertyType: string;
  location: string;
  budgetRange: string;
  preferredDates: string[];
  additionalNotes: string;
  status: 'pending' | 'responded' | 'completed';
  dateCreated: string;
  matchingProperties: PropertyMatch[];
}

interface RequestDetailsPanelProps {
  request: ClientRequest | null;
  isOpen: boolean;
  onClose: () => void;
  onSendResponse: (id: string, message: string) => void;
  onMarkResponded: (id: string) => void;
  onSendRecommendation: (requestId: string, propertyId: string) => void;
}

export function RequestDetailsPanel({
  request,
  isOpen,
  onClose,
  onSendResponse,
  onMarkResponded,
  onSendRecommendation,
}: RequestDetailsPanelProps) {
  const [message, setMessage] = useState('');

  if (!request || !isOpen) return null;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-purple-100 text-purple-700';
      case 'responded':
        return 'bg-green-100 text-green-700';
      case 'completed':
        return 'bg-gray-100 text-gray-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'pending':
        return 'Pending';
      case 'responded':
        return 'Responded';
      case 'completed':
        return 'Completed';
      default:
        return status;
    }
  };

  const handleSendResponse = () => {
    if (message.trim()) {
      onSendResponse(request.id, message);
      setMessage('');
    }
  };

  return (
    <div
      className="fixed right-0 top-0 h-full w-[480px] bg-white shadow-2xl border-l border-gray-200 z-50 overflow-y-auto animate-in slide-in-from-right duration-300"
    >
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between z-10">
        <h3>Request Details</h3>
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
            <AvatarImage src={request.clientAvatar} alt={request.clientName} />
            <AvatarFallback>{request.clientName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <h3 className="mb-2">{request.clientName}</h3>
          <Badge className={`${getStatusColor(request.status)} text-xs px-3 py-1 mb-4`}>
            {getStatusLabel(request.status)}
          </Badge>
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <span>📧</span>
              <span>{request.email}</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <span>📱</span>
              <span>{request.phone}</span>
            </div>
          </div>
        </div>

        {/* Request Info */}
        <div>
          <h4 className="mb-4" style={{ color: '#1565C0' }}>Property Request Details</h4>
          <div className="space-y-3">
            <div className="p-3 rounded-lg" style={{ backgroundColor: '#E3F2FD' }}>
              <div className="text-xs text-gray-500 mb-1">Property Type</div>
              <div className="text-sm">{request.propertyType}</div>
            </div>
            <div className="p-3 rounded-lg" style={{ backgroundColor: '#E3F2FD' }}>
              <div className="text-xs text-gray-500 mb-1">Location</div>
              <div className="text-sm">{request.location}</div>
            </div>
            <div className="p-3 rounded-lg" style={{ backgroundColor: '#E3F2FD' }}>
              <div className="text-xs text-gray-500 mb-1">Budget Range</div>
              <div className="text-sm">{request.budgetRange}</div>
            </div>
            <div className="p-3 rounded-lg" style={{ backgroundColor: '#E3F2FD' }}>
              <div className="text-xs text-gray-500 mb-1">Preferred Inspection Dates</div>
              <div className="text-sm">{request.preferredDates.join(', ')}</div>
            </div>
            {request.additionalNotes && (
              <div className="p-3 rounded-lg" style={{ backgroundColor: '#E3F2FD' }}>
                <div className="text-xs text-gray-500 mb-1">Additional Notes</div>
                <div className="text-sm">{request.additionalNotes}</div>
              </div>
            )}
            <div className="p-3 rounded-lg" style={{ backgroundColor: '#E3F2FD' }}>
              <div className="text-xs text-gray-500 mb-1">Request Date</div>
              <div className="text-sm">{request.dateCreated}</div>
            </div>
          </div>
        </div>

        {/* Matching Properties */}
        <div>
          <h4 className="mb-4" style={{ color: '#1565C0' }}>
            Matching Properties ({request.matchingProperties.length})
          </h4>
          <div className="space-y-3">
            {request.matchingProperties.map((property) => (
              <div
                key={property.id}
                className="border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-all group"
              >
                <div className="aspect-video relative overflow-hidden">
                  <ImageWithFallback
                    src={property.image}
                    alt={property.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3">
                  <div className="text-sm mb-1">{property.name}</div>
                  <div className="text-xs text-gray-500 mb-2">{property.location}</div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm" style={{ color: '#1565C0' }}>{property.price}</span>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => onSendRecommendation(request.id, property.id)}
                    >
                      <Send className="w-3 h-3 mr-1" />
                      Send
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Response Tools */}
        <div>
          <h4 className="mb-3">Response Tools</h4>
          <div className="space-y-3">
            <div>
              <label className="text-sm text-gray-600 mb-2 block">Add Message or Proposal</label>
              <Textarea
                placeholder="Write your response to the client..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="min-h-32"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Button
                className="text-white"
                style={{ backgroundColor: '#90CAF9' }}
                onClick={handleSendResponse}
                disabled={!message.trim()}
              >
                <Send className="w-4 h-4 mr-2" />
                Send Response
              </Button>
              <Button
                variant="outline"
                onClick={() => onMarkResponded(request.id)}
                className="text-green-600 border-green-200 hover:bg-green-50"
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                Mark Responded
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Contact */}
        <div className="pt-4 border-t border-gray-100">
          <Button
            variant="outline"
            className="w-full"
            onClick={() => {}}
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            Open Chat with {request.clientName}
          </Button>
        </div>
      </div>
    </div>
  );
}
