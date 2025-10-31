import { AgentSidebar } from '../components/agent/AgentSidebar';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';
import { ChatList } from '../components/messages/ChatList';
import { ChatWindow } from '../components/messages/ChatWindow';
import { useState } from 'react';

export function AgentMessages() {
  const [selectedConversationId, setSelectedConversationId] = useState('1');

  // Mock conversations for agents
  const conversations = [
    {
      id: '1',
      agent: {
        name: 'Muhammad K.',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
        isOnline: true,
      },
      lastMessage: 'Hi! I would love to schedule an inspection. What times are available?',
      timestamp: '2 min ago',
      unread: 2,
    },
    {
      id: '2',
      agent: {
        name: 'Sarah Johnson',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
        isOnline: false,
      },
      lastMessage: 'Thanks for the property recommendations!',
      timestamp: '1 hour ago',
      unread: 0,
    },
    {
      id: '3',
      agent: {
        name: 'David Chen',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
        isOnline: true,
      },
      lastMessage: 'When can we schedule the inspection?',
      timestamp: '3 hours ago',
      unread: 1,
    },
  ];

  const selectedConversation = conversations.find(conv => conv.id === selectedConversationId) || conversations[0];

  return (
    <div className="flex min-h-screen bg-[#F5FAFF]">
      <AgentSidebar activeItem="messages" />
      <div className="flex-1 ml-64">
        <div className="p-8 max-w-[1400px]">
          <DashboardHeader />
          <div className="mt-6 flex gap-6 h-[calc(100vh-280px)] overflow-hidden">
            <ChatList
              conversations={conversations}
              selectedId={selectedConversationId}
              onSelect={setSelectedConversationId}
            />
            <ChatWindow conversation={selectedConversation} />
          </div>
        </div>
      </div>
    </div>
  );
}