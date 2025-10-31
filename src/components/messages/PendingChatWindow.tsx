import { Phone, MoreVertical } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import type { PendingChatRequest } from '../../pages/MessagesPage';

interface PendingChatWindowProps {
  request?: PendingChatRequest;
  onAccept?: (requestId: string) => void;
  onDecline?: (requestId: string) => void;
}

export function PendingChatWindow({ request, onAccept, onDecline }: PendingChatWindowProps) {
  if (!request) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center text-center px-12 bg-white h-full rounded-r-2xl overflow-hidden">
        <div className="max-w-sm">
          <h3 className="text-lg text-gray-900" style={{ fontWeight: 600 }}>
            Select a pending request
          </h3>
          <p className="text-sm text-gray-500 mt-3">
            Choose a pending request from the list to review the agent's response and property matches.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col h-full bg-white rounded-r-2xl overflow-hidden">
      {/* Chat Header */}
      <div className="flex items-center justify-between p-5 border-b border-gray-100 flex-shrink-0">
        <div className="flex items-start gap-3">
          <div className="relative cursor-pointer">
            <ImageWithFallback
              src={request.agent.image}
              alt={request.agent.name}
              className="w-11 h-11 rounded-full object-cover"
            />
            {request.agent.isOnline && (
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></div>
            )}
          </div>
          <div>
            <h3 className="text-base text-gray-900" style={{ fontWeight: 600 }}>
              {request.agent.name}
            </h3>
            <p className="text-xs text-gray-500">
              {request.agent.isOnline ? 'Active now' : 'Offline'}
            </p>
            {request.requestTitle && (
              <span
                className="inline-flex mt-3 px-3 py-1 rounded-full bg-[#E3F2FD] text-[#1565C0] text-[11px] uppercase tracking-wide"
                style={{ fontWeight: 700 }}
              >
                {request.requestTitle}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="w-10 h-10 rounded-lg hover:bg-gray-50 flex items-center justify-center transition-colors cursor-pointer">
            <Phone className="w-5 h-5 text-gray-600" />
          </button>
          <button className="w-10 h-10 rounded-lg hover:bg-gray-50 flex items-center justify-center transition-colors cursor-pointer">
            <MoreVertical className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Message Area with Pending Request Card */}
      <div className="flex-1 overflow-y-auto min-h-0 p-6">
        {/* Awaiting approval label */}
        <div className="flex justify-start mb-4">
          <span className="px-3 py-1 rounded-full text-xs bg-[#E3F2FD] text-[#1565C0]" style={{ fontWeight: 600 }}>
            Awaiting approval
          </span>
        </div>

        {/* Pending request content as a message bubble */}
        <div className="flex justify-start">
          <div className="max-w-[85%]">
            <div className="rounded-2xl bg-gray-50 border border-gray-100 p-5">
              <p className="text-sm text-gray-900 mb-3" style={{ fontWeight: 600 }}>
                {request.requestSummary}
              </p>
              <p className="text-sm text-gray-700 mb-4 leading-relaxed">{request.introMessage}</p>

              {/* Property Details */}
              <div className="grid grid-cols-1 gap-2.5 text-xs">
                <div className="flex items-start">
                  <span className="text-gray-500 min-w-[140px]">Property Type:</span>
                  <span className="text-gray-900" style={{ fontWeight: 600 }}>
                    {request.details.propertyType}
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-500 min-w-[140px]">Location:</span>
                  <span className="text-gray-900" style={{ fontWeight: 600 }}>
                    {request.details.location}
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-500 min-w-[140px]">Budget:</span>
                  <span className="text-gray-900" style={{ fontWeight: 600 }}>
                    {request.details.budget}
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-500 min-w-[140px]">Inspection Window:</span>
                  <span className="text-gray-900" style={{ fontWeight: 600 }}>
                    {request.details.inspectionWindow}
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-500 min-w-[140px]">Match Summary:</span>
                  <span className="text-gray-900" style={{ fontWeight: 600 }}>
                    {request.details.matchesFound}
                  </span>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              {request.responseTime}
            </p>
          </div>
        </div>
      </div>

      {/* Accept/Decline Buttons */}
      <div className="flex-shrink-0 p-5 border-t border-gray-100 bg-white">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => onDecline?.(request.id)}
            className="flex-1 px-4 py-3 rounded-lg text-sm text-red-600 border border-red-200 hover:bg-red-50 transition-all cursor-pointer"
            style={{ fontWeight: 600 }}
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => onAccept?.(request.id)}
            className="flex-1 px-4 py-3 rounded-lg text-sm text-white bg-gradient-to-r from-[#1565C0] to-[#90CAF9] shadow-sm hover:shadow-lg transition-all cursor-pointer"
            style={{ fontWeight: 600 }}
          >
            Accept &amp; Start Chat
          </button>
        </div>
      </div>
    </div>
  );
}
