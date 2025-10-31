import { useEffect, useState } from 'react';
import { DashboardSidebar } from '../components/dashboard/DashboardSidebar';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';
import { ChatList } from '../components/messages/ChatList';
import { ChatWindow } from '../components/messages/ChatWindow';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

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
  requestTitle?: string;
  messages?: Message[];
}

interface PendingChatRequest {
  id: string;
  agent: {
    name: string;
    image: string;
    isOnline: boolean;
  };
  requestTitle: string;
  requestSummary: string;
  responseTime: string;
  introMessage: string;
  details: {
    propertyType: string;
    location: string;
    budget: string;
    inspectionWindow: string;
    matchesFound: string;
  };
}

const acceptedSeed: Conversation[] = [
  {
    id: 'conv-1',
    agent: {
      name: 'Sarah Johnson',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
      isOnline: true,
    },
    lastMessage: 'Inspection confirmed for Thursday at 3:00 PM',
    timestamp: '2m ago',
    unread: 2,
    requestTitle: '2-Bedroom Apartment in Wuse II',
    messages: [
      {
        id: 'conv-1-1',
        senderId: 'Sarah Johnson',
        senderName: 'Sarah Johnson',
        text: 'Hi Muhammad! Thanks for your interest in the 2-bedroom apartment in Wuse II.',
        timestamp: new Date(Date.now() - 3600000),
        isOwn: false,
      },
      {
        id: 'conv-1-2',
        senderId: 'me',
        senderName: 'Muhammad',
        text: 'Hi! I would love to schedule an inspection. What times are available?',
        timestamp: new Date(Date.now() - 3500000),
        isOwn: true,
      },
      {
        id: 'conv-1-3',
        senderId: 'Sarah Johnson',
        senderName: 'Sarah Johnson',
        text: "Great! I have availability on Thursday at 2:00 PM or 4:00 PM. Would either of those work for you?",
        timestamp: new Date(Date.now() - 3400000),
        isOwn: false,
      },
      {
        id: 'conv-1-4',
        senderId: 'me',
        senderName: 'Muhammad',
        text: 'Thursday at 2:00 PM would be perfect!',
        timestamp: new Date(Date.now() - 3300000),
        isOwn: true,
      },
      {
        id: 'conv-1-5',
        senderId: 'Sarah Johnson',
        senderName: 'Sarah Johnson',
        text: "Perfect! I've updated the inspection time to 3:00 PM tomorrow. I'll send you the exact location details shortly.",
        timestamp: new Date(Date.now() - 120000),
        isOwn: false,
      },
      {
        id: 'conv-1-6',
        senderId: 'me',
        senderName: 'Muhammad',
        text: 'Thanks, that works perfectly.',
        timestamp: new Date(Date.now() - 60000),
        isOwn: true,
      },
    ],
  },
  {
    id: 'conv-2',
    agent: {
      name: 'Mike Chen',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
      isOnline: true,
    },
    lastMessage: 'I found 2 more properties that match your criteria',
    timestamp: '1h ago',
    requestTitle: '3-Bedroom Duplex in Maitama',
    messages: [
      {
        id: 'conv-2-1',
        senderId: 'Mike Chen',
        senderName: 'Mike Chen',
        text: 'Hi Muhammad! I shortlisted a few duplexes in Maitama that match your budget.',
        timestamp: new Date(Date.now() - 7200000),
        isOwn: false,
      },
      {
        id: 'conv-2-2',
        senderId: 'me',
        senderName: 'Muhammad',
        text: 'That sounds great! Could you share the inspection windows?',
        timestamp: new Date(Date.now() - 7000000),
        isOwn: true,
      },
      {
        id: 'conv-2-3',
        senderId: 'Mike Chen',
        senderName: 'Mike Chen',
        text: 'Absolutely. Saturday morning or Sunday afternoon works best. Let me know which you prefer.',
        timestamp: new Date(Date.now() - 6900000),
        isOwn: false,
      },
      {
        id: 'conv-2-4',
        senderId: 'me',
        senderName: 'Muhammad',
        text: "Let's do Saturday morning.",
        timestamp: new Date(Date.now() - 6600000),
        isOwn: true,
      },
      {
        id: 'conv-2-5',
        senderId: 'Mike Chen',
        senderName: 'Mike Chen',
        text: 'Perfect. Loading up property details for you now.',
        timestamp: new Date(Date.now() - 3600000),
        isOwn: false,
      },
    ],
  },
];

const pendingSeed: PendingChatRequest[] = [
  {
    id: 'conv-3',
    agent: {
      name: 'Emma Davis',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
      isOnline: false,
    },
    requestTitle: 'Studio Apartment in Garki',
    requestSummary: 'Shared 3 studio options in Garki phase 2',
    responseTime: '5m ago',
    introMessage: 'Hi Muhammad! I have three studio apartments in Garki within your budget. Accept my request to go over the details together.',
    details: {
      propertyType: 'Studio Apartment',
      location: 'Garki, Abuja',
      budget: '₦1.2M - ₦1.5M / year',
      inspectionWindow: 'Preferred: Feb 25 - 28',
      matchesFound: '3 matches found',
    },
  },
  {
    id: 'conv-4',
    agent: {
      name: 'John Adeyemi',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
      isOnline: true,
    },
    requestTitle: 'Penthouse in Central District',
    requestSummary: 'Highlighted 2 luxury penthouses downtown',
    responseTime: '12m ago',
    introMessage: "Good afternoon! I spotted two penthouses that match what you're looking for. Accept to hop into a chat and review floor plans.",
    details: {
      propertyType: 'Penthouse',
      location: 'Central Business District, Abuja',
      budget: '₦8M - ₦10M / year',
      inspectionWindow: 'Preferred: Mar 2 - 6',
      matchesFound: '2 matches ready',
    },
  },
];

export function MessagesPage() {
  const [acceptedConversations, setAcceptedConversations] = useState<Conversation[]>(() =>
    acceptedSeed.map((conversation) => ({
      ...conversation,
      messages: conversation.messages?.map((message) => ({ ...message })),
    }))
  );
  const [pendingRequests, setPendingRequests] = useState<PendingChatRequest[]>(() =>
    pendingSeed.map((request) => ({
      ...request,
      details: { ...request.details },
    }))
  );
  const [selectedConversationId, setSelectedConversationId] = useState<string | null>(
    acceptedSeed.length ? acceptedSeed[0].id : null
  );
  const [activeTab, setActiveTab] = useState<'messages' | 'pending'>(
    acceptedSeed.length ? 'messages' : 'pending'
  );

  useEffect(() => {
    if (acceptedConversations.length === 0) {
      setSelectedConversationId(null);
      if (pendingRequests.length > 0 && activeTab === 'messages') {
        setActiveTab('pending');
      }
      return;
    }

    if (!selectedConversationId || !acceptedConversations.some((conv) => conv.id === selectedConversationId)) {
      setSelectedConversationId(acceptedConversations[0].id);
    }
  }, [acceptedConversations, pendingRequests.length, selectedConversationId, activeTab]);

  const selectedConversation = acceptedConversations.find((conv) => conv.id === selectedConversationId);

  const handleAcceptRequest = (requestId: string) => {
    const request = pendingRequests.find((pending) => pending.id === requestId);
    if (!request) {
      return;
    }

    const newConversation: Conversation = {
      id: request.id,
      agent: request.agent,
      lastMessage: request.introMessage,
      timestamp: 'Just now',
      requestTitle: request.requestTitle,
      messages: [
        {
          id: `${request.id}-welcome`,
          senderId: request.agent.name,
          senderName: request.agent.name,
          text: request.introMessage,
          timestamp: new Date(),
          isOwn: false,
        },
      ],
    };

    setAcceptedConversations((prev) => [newConversation, ...prev]);
    setPendingRequests((prev) => prev.filter((pending) => pending.id !== requestId));
    setSelectedConversationId(request.id);
    setActiveTab('messages');
  };

  const handleDeclineRequest = (requestId: string) => {
    setPendingRequests((prev) => prev.filter((pending) => pending.id !== requestId));
  };

  const handleMessageSent = (conversationId: string, message: Message) => {
    setAcceptedConversations((prev) =>
      prev.map((conversation) => {
        if (conversation.id !== conversationId) {
          return conversation;
        }
        const updatedMessages = [...(conversation.messages ?? []), message];
        return {
          ...conversation,
          messages: updatedMessages,
          lastMessage: message.text,
          timestamp: 'Just now',
          unread: 0,
        };
      })
    );
  };

  const pendingCount = pendingRequests.length;
  const acceptedCount = acceptedConversations.length;

  return (
    <div className="flex min-h-screen bg-[#F5FAFF]">
      <DashboardSidebar />

      <div className="flex-1 ml-64">
        <div className="p-8 max-w-[1400px]">
          <DashboardHeader />

          <div className="mt-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-xl text-gray-900" style={{ fontWeight: 600 }}>
                  Direct Messages
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Accepted chats appear under Messages. New agent responses wait in the Pending tab until you accept.
                </p>
              </div>

              <div className="flex items-center gap-2 bg-gray-50 p-1 rounded-xl self-start">
                <button
                  type="button"
                  onClick={() => setActiveTab('messages')}
                  className={`px-4 py-2 rounded-lg text-sm transition-all flex items-center gap-2 ${
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
                    {acceptedCount}
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('pending')}
                  className={`px-4 py-2 rounded-lg text-sm transition-all flex items-center gap-2 ${
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
            </div>

            {activeTab === 'messages' ? (
              acceptedCount === 0 ? (
                <div className="mt-10 flex flex-col items-center justify-center text-center bg-white border border-gray-100 rounded-2xl py-16 px-10">
                  <div className="max-w-sm">
                    <h3 className="text-lg text-gray-900" style={{ fontWeight: 600 }}>
                      No accepted chats yet
                    </h3>
                    <p className="text-sm text-gray-500 mt-3">
                      Agent responses that need your review will appear in the Pending tab. Accept a request to start chatting.
                    </p>
                    {pendingCount > 0 && (
                      <button
                        type="button"
                        onClick={() => setActiveTab('pending')}
                        className="mt-5 px-4 py-2 rounded-lg bg-gradient-to-r from-[#1565C0] to-[#90CAF9] text-white text-sm shadow-sm hover:shadow-lg transition-all"
                        style={{ fontWeight: 600 }}
                      >
                        Review pending requests
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                <div className="mt-6 flex gap-6 h-[calc(100vh-280px)] overflow-hidden">
                  <ChatList
                    conversations={acceptedConversations}
                    selectedId={selectedConversationId ?? undefined}
                    onSelect={setSelectedConversationId}
                    emptyStateMessage="No conversations match your search."
                  />

                  <ChatWindow conversation={selectedConversation} onMessageSent={handleMessageSent} />
                </div>
              )
            ) : (
              <div className="mt-6">
                {pendingCount === 0 ? (
                  <div className="flex flex-col items-center justify-center text-center bg-white border border-gray-100 rounded-2xl py-16 px-10">
                    <div className="max-w-sm">
                      <h3 className="text-lg text-gray-900" style={{ fontWeight: 600 }}>
                        No pending requests
                      </h3>
                      <p className="text-sm text-gray-500 mt-3">
                        When an agent responds to your property request, their message will appear here for approval.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {pendingRequests.map((request) => (
                      <div
                        key={request.id}
                        className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-start gap-4">
                          <div className="relative">
                            <ImageWithFallback
                              src={request.agent.image}
                              alt={request.agent.name}
                              className="w-14 h-14 rounded-full object-cover"
                            />
                            {request.agent.isOnline && (
                              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full" />
                            )}
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                              <div>
                                <div className="flex items-center gap-2">
                                  <h4 className="text-base text-gray-900" style={{ fontWeight: 600 }}>
                                    {request.agent.name}
                                  </h4>
                                  <span className="text-xs text-gray-500">Responded · {request.responseTime}</span>
                                </div>
                                <p className="text-sm text-gray-500">Request: {request.requestTitle}</p>
                              </div>
                              <span className="px-3 py-1 rounded-full text-xs bg-[#E3F2FD] text-[#1565C0]" style={{ fontWeight: 600 }}>
                                Awaiting approval
                              </span>
                            </div>

                            <div className="mt-4 p-4 rounded-xl bg-[#F5FAFF]">
                              <p className="text-sm text-gray-900" style={{ fontWeight: 500 }}>
                                {request.requestSummary}
                              </p>
                              <p className="text-sm text-gray-600 mt-2">{request.introMessage}</p>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 text-xs text-gray-500">
                                <div>
                                  <span className="text-gray-500">Property Type:</span>
                                  <span className="ml-2 text-gray-900" style={{ fontWeight: 600 }}>
                                    {request.details.propertyType}
                                  </span>
                                </div>
                                <div>
                                  <span className="text-gray-500">Location:</span>
                                  <span className="ml-2 text-gray-900" style={{ fontWeight: 600 }}>
                                    {request.details.location}
                                  </span>
                                </div>
                                <div>
                                  <span className="text-gray-500">Budget:</span>
                                  <span className="ml-2 text-gray-900" style={{ fontWeight: 600 }}>
                                    {request.details.budget}
                                  </span>
                                </div>
                                <div>
                                  <span className="text-gray-500">Inspection Window:</span>
                                  <span className="ml-2 text-gray-900" style={{ fontWeight: 600 }}>
                                    {request.details.inspectionWindow}
                                  </span>
                                </div>
                                <div className="md:col-span-2">
                                  <span className="text-gray-500">Match Summary:</span>
                                  <span className="ml-2 text-gray-900" style={{ fontWeight: 600 }}>
                                    {request.details.matchesFound}
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="mt-5 flex flex-col sm:flex-row gap-3">
                              <button
                                type="button"
                                onClick={() => handleDeclineRequest(request.id)}
                                className="px-4 py-2 rounded-lg text-sm text-red-600 border border-red-200 hover:bg-red-50 transition-all"
                                style={{ fontWeight: 600 }}
                              >
                                Decline
                              </button>
                              <button
                                type="button"
                                onClick={() => handleAcceptRequest(request.id)}
                                className="px-4 py-2 rounded-lg text-sm text-white bg-gradient-to-r from-[#1565C0] to-[#90CAF9] shadow-sm hover:shadow-lg transition-all"
                                style={{ fontWeight: 600 }}
                              >
                                Accept &amp; Start Chat
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
