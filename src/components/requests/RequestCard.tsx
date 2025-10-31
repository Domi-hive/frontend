import { ChevronDown, ChevronUp, ShieldCheck, MessageSquare, X, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import type { PropertyRequest } from '../../pages/RequestsPage';
import { useState } from 'react';

interface RequestCardProps {
  request: PropertyRequest;
  isHistory?: boolean;
}

export function RequestCard({ request, isHistory }: RequestCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'active':
        return { bg: 'bg-blue-50', text: 'text-[#1565C0]', label: 'Active' };
      case 'pending':
        return { bg: 'bg-gray-100', text: 'text-gray-600', label: 'Pending' };
      case 'completed':
        return { bg: 'bg-emerald-50', text: 'text-emerald-700', label: 'Completed' };
      case 'cancelled':
        return { bg: 'bg-red-50', text: 'text-red-600', label: 'Cancelled' };
      default:
        return { bg: 'bg-gray-100', text: 'text-gray-600', label: status };
    }
  };
  
  const statusConfig = getStatusConfig(request.status);
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };
  
  return (
    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-100/50">
      {/* Collapsed View */}
      <button
        onClick={() => !isHistory && setIsExpanded(!isExpanded)}
        className="w-full p-6 text-left"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-lg text-gray-900" style={{ fontWeight: 600 }}>
                {request.title}
              </h3>
              <span className={`px-3 py-1 rounded-lg text-xs ${statusConfig.bg} ${statusConfig.text}`} style={{ fontWeight: 600 }}>
                {statusConfig.label}
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-2">{request.summary}</p>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span>Created: {formatDate(request.dateCreated)}</span>
              {request.agentResponses && request.agentResponses.length > 0 && (
                <span className="flex items-center gap-1">
                  <MessageSquare className="w-3 h-3" />
                  {request.agentResponses.length} Agent {request.agentResponses.length === 1 ? 'Response' : 'Responses'}
                </span>
              )}
            </div>
          </div>
          
          {!isHistory && (
            <div className="flex-shrink-0">
              {isExpanded ? (
                <ChevronUp className="w-5 h-5 text-gray-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              )}
            </div>
          )}
        </div>
      </button>
      
      {/* Expanded View */}
      {isExpanded && !isHistory && (
        <div className="border-t border-gray-100 p-6 bg-gray-50 animate-slideDown">
          {/* Request Details */}
          <div className="mb-6">
            <h4 className="text-sm text-gray-900 mb-4" style={{ fontWeight: 600 }}>Request Details</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-black">Property Type:</span>
                <span className="ml-2 text-gray-900" style={{ fontWeight: 500 }}>{request.details.propertyType}</span>
              </div>
              <div>
                <span className="text-black">Location:</span>
                <span className="ml-2 text-gray-900" style={{ fontWeight: 500 }}>{request.details.location}</span>
              </div>
              <div>
                <span className="text-black">Budget Range:</span>
                <span className="ml-2 text-gray-900" style={{ fontWeight: 500 }}>{request.details.budgetRange}</span>
              </div>
              <div>
                <span className="text-black">Preferred Inspection:</span>
                <span className="ml-2 text-gray-900" style={{ fontWeight: 500 }}>{request.details.preferredInspectionDate}</span>
              </div>
              {request.details.bedrooms && (
                <div>
                  <span className="text-black">Bedrooms:</span>
                  <span className="ml-2 text-gray-900" style={{ fontWeight: 500 }}>{request.details.bedrooms}</span>
                </div>
              )}
              {request.details.bathrooms && (
                <div>
                  <span className="text-black">Bathrooms:</span>
                  <span className="ml-2 text-gray-900" style={{ fontWeight: 500 }}>{request.details.bathrooms}</span>
                </div>
              )}
            </div>
          </div>
          
          {/* Agent Responses */}
          {request.agentResponses && request.agentResponses.length > 0 && (
            <div className="mb-6">
              <h4 className="text-sm text-gray-900 mb-4" style={{ fontWeight: 600 }}>Agent Responses</h4>
              <div className="space-y-3">
                {request.agentResponses.map((response) => (
                  <div
                    key={response.id}
                    className="bg-white rounded-xl p-4 border border-gray-100 hover:border-[#90CAF9] transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <ImageWithFallback
                        src={response.agentImage}
                        alt={response.agentName}
                        className="w-11 h-11 rounded-full object-cover flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm text-gray-900" style={{ fontWeight: 600 }}>{response.agentName}</span>
                          {response.verified && (
                            <ShieldCheck className="w-4 h-4 text-[#1565C0]" />
                          )}
                          <span className="text-xs text-gray-500">{response.responseTime}</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{response.message}</p>
                        <button className="text-xs text-[#1565C0] hover:text-[#0D47A1] transition-colors flex items-center gap-1" style={{ fontWeight: 600 }}>
                          <MessageSquare className="w-3 h-3" />
                          View Conversation
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Actions */}
          <div className="flex items-center gap-3">
            {request.status === 'active' && (
              <button className="px-4 py-2 rounded-lg border border-emerald-200 text-emerald-700 text-sm hover:bg-emerald-50 transition-colors flex items-center gap-2" style={{ fontWeight: 600 }}>
                <CheckCircle className="w-4 h-4" />
                Mark as Completed
              </button>
            )}
            {(request.status === 'active' || request.status === 'pending') && (
              <button className="px-4 py-2 rounded-lg border border-red-200 text-red-600 text-sm hover:bg-red-50 transition-colors flex items-center gap-2" style={{ fontWeight: 600 }}>
                <X className="w-4 h-4" />
                Cancel Request
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
