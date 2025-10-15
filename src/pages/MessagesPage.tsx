import { DashboardSidebar } from '../components/dashboard/DashboardSidebar';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';
import { ChatList } from '../components/messages/ChatList';
import { ChatWindow } from '../components/messages/ChatWindow';
import { useState } from 'react';

export interface Message {
  id: string;
  senderId: string;
  senderName: string;
  text: string;
  timestamp: Date;
  isOwn: boolean;
}

export interface Conversation {
  id: string;
  agent: {
    name: string;
    image: string;
    isOnline: boolean;
  };
  lastMessage: string;
  timestamp: string;
  unread?: number;
}

export function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState<string>('1');
  
  const conversations: Conversation[] = [
    {
      id: '1',
      agent: {
        name: 'Sarah Johnson',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
        isOnline: true,
      },
      lastMessage: 'Inspection confirmed for Thursday at 3:00 PM',
      timestamp: '2m ago',
      unread: 2,
    },
    {
      id: '2',
      agent: {
        name: 'Mike Chen',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
        isOnline: true,
      },
      lastMessage: 'I found 2 more properties that match your criteria',
      timestamp: '1h ago',
    },
    {
      id: '3',
      agent: {
        name: 'Emma Davis',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
        isOnline: false,
      },
      lastMessage: 'Thanks for your interest! Let me know if you have questions',
      timestamp: '3h ago',
    },
    {
      id: '4',
      agent: {
        name: 'John Adeyemi',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
        isOnline: true,
      },
      lastMessage: 'The property is still available. Would you like to schedule?',
      timestamp: '1d ago',
    },
  ];
  
  return (
    <div className="flex min-h-screen bg-[#F5FAFF]">
      {/* Sidebar */}
      <DashboardSidebar />
      
      {/* Main Content */}
      <div className="flex-1 ml-64">
        <div className="p-8">
          {/* Header */}
          <DashboardHeader />
          
          {/* Messages Container */}
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden" style={{ height: 'calc(100vh - 180px)' }}>
            <div className="flex h-full">
              {/* Chat List */}
              <ChatList
                conversations={conversations}
                selectedId={selectedConversation}
                onSelect={setSelectedConversation}
              />
              
              {/* Chat Window */}
              <ChatWindow
                conversation={conversations.find(c => c.id === selectedConversation)!}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
