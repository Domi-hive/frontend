import { Search } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import type { Conversation } from '../../pages/MessagesPage';
import { useMemo, useState } from 'react';

interface ChatListProps {
  conversations: Conversation[];
  selectedId?: string | null;
  onSelect: (id: string) => void;
  title?: string;
  emptyStateMessage?: string;
  activeTab?: 'messages' | 'pending';
  onTabChange?: (tab: 'messages' | 'pending') => void;
  messagesCount?: number;
  pendingCount?: number;
}

export function ChatList({
  conversations,
  selectedId,
  onSelect,
  title,
  emptyStateMessage,
  activeTab,
  onTabChange,
  messagesCount = 0,
  pendingCount = 0,
}: ChatListProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredConversations = useMemo(
    () =>
      conversations.filter((conv) =>
        conv.agent.name.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [conversations, searchQuery]
  );

  const titleText = title ?? 'Messages';
  const noResultsMessage = emptyStateMessage ?? 'No conversations found.';

  return (
    <div className="w-80 flex-shrink-0 border-r border-gray-100 flex flex-col h-full bg-white rounded-l-2xl overflow-hidden">
      {/* Header */}
      <div className="p-5 border-b border-gray-100 flex-shrink-0">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search conversations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-3 py-2 bg-gray-50 rounded-lg text-sm border border-gray-100 focus:outline-none focus:border-[#90CAF9] focus:ring-2 focus:ring-[#90CAF9]/20 transition-all"
          />
        </div>

        {/* Tab Switcher - only show if activeTab and onTabChange are provided */}
        {activeTab && onTabChange && (
          <div className="flex items-center gap-2 bg-gray-50 p-1 rounded-xl mt-4">
            <button
              type="button"
              onClick={() => onTabChange('messages')}
              className={`flex-1 px-3 py-2 rounded-lg text-sm transition-all flex items-center justify-center gap-2 ${
                activeTab === 'messages'
                  ? 'bg-white text-[#1565C0] shadow-sm border border-[#90CAF9]/40'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Messages
              <span
                className={`px-2 py-0.5 text-xs rounded-full ${
                  activeTab === 'messages' ? 'bg-[#E3F2FD] text-[#1565C0]' : 'bg-gray-100 text-gray-600'
                }`}
                style={{ fontWeight: 600 }}
              >
                {messagesCount}
              </span>
            </button>
            <button
              type="button"
              onClick={() => onTabChange('pending')}
              className={`flex-1 px-3 py-2 rounded-lg text-sm transition-all flex items-center justify-center gap-2 ${
                activeTab === 'pending'
                  ? 'bg-white text-[#1565C0] shadow-sm border border-[#90CAF9]/40'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Pending
              <span
                className={`px-2 py-0.5 text-xs rounded-full ${
                  activeTab === 'pending' ? 'bg-[#E3F2FD] text-[#1565C0]' : 'bg-gray-100 text-gray-600'
                }`}
                style={{ fontWeight: 600 }}
              >
                {pendingCount}
              </span>
            </button>
          </div>
        )}
      </div>

      {/* Conversations List */}
      <div className="flex-1 overflow-y-auto min-h-0">
        {filteredConversations.length === 0 ? (
          <div className="px-5 py-10 text-center text-sm text-gray-500">
            {noResultsMessage}
          </div>
        ) : (
          filteredConversations.map((conversation) => (
            <button
              key={conversation.id}
              onClick={() => onSelect(conversation.id)}
              className={`w-full flex items-start gap-3 p-4 hover:bg-gray-50 transition-colors border-b border-gray-50 ${
                selectedId === conversation.id ? 'bg-[#E3F2FD]' : ''
              }`}
            >
              {/* Avatar */}
              <div className="relative flex-shrink-0">
                <ImageWithFallback
                  src={conversation.agent.image}
                  alt={conversation.agent.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                {conversation.agent.isOnline && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0 text-left">
                <div className="flex items-start justify-between mb-1">
                  <span className="text-sm text-gray-900 truncate" style={{ fontWeight: 600 }}>
                    {conversation.agent.name}
                  </span>
                  <span className="text-xs text-gray-500 ml-2 flex-shrink-0">{conversation.timestamp}</span>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-sm text-gray-600 truncate flex-1">{conversation.lastMessage}</p>
                  {conversation.unread && (
                    <span
                      className="w-5 h-5 rounded-full bg-[#1565C0] text-white text-xs flex items-center justify-center flex-shrink-0"
                      style={{ fontWeight: 600 }}
                    >
                      {conversation.unread}
                    </span>
                  )}
                </div>
              </div>
            </button>
          ))
        )}
      </div>
    </div>
  );
}
