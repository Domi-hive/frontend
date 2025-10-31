import { Phone, MoreVertical } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { MessageInput } from './MessageInput';
import type { Conversation, Message } from '../../pages/MessagesPage';
import { useEffect, useRef, useState } from 'react';

interface ChatWindowProps {
  conversation?: Conversation;
  onMessageSent?: (conversationId: string, message: Message) => void;
}

const createFallbackMessages = (conversation: Conversation): Message[] => {
  const agentName = conversation.agent.name;

  return [
    {
      id: `${conversation.id}-fallback-1`,
      senderId: agentName,
      senderName: agentName,
      text: `Hi Muhammad! Thanks for your interest in ${conversation.requestTitle ?? 'this property.'}`,
      timestamp: new Date(Date.now() - 3600000),
      isOwn: false,
    },
    {
      id: `${conversation.id}-fallback-2`,
      senderId: 'me',
      senderName: 'Muhammad',
      text: 'Hi! I would love to schedule an inspection. What times are available?',
      timestamp: new Date(Date.now() - 3500000),
      isOwn: true,
    },
    {
      id: `${conversation.id}-fallback-3`,
      senderId: agentName,
      senderName: agentName,
      text: 'Great! I have availability later this week. Would that work for you?',
      timestamp: new Date(Date.now() - 3300000),
      isOwn: false,
    },
  ];
};

const getInitialMessages = (conversation?: Conversation): Message[] => {
  if (!conversation) {
    return [];
  }

  if (conversation.messages && conversation.messages.length > 0) {
    return conversation.messages.map((message) => ({ ...message }));
  }

  return createFallbackMessages(conversation);
};

export function ChatWindow({ conversation, onMessageSent }: ChatWindowProps) {
  const [messages, setMessages] = useState<Message[]>(() => getInitialMessages(conversation));
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const prevMessagesLengthRef = useRef(0);

  useEffect(() => {
    setMessages(getInitialMessages(conversation));
    prevMessagesLengthRef.current = 0;
  }, [conversation]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (messages.length > prevMessagesLengthRef.current) {
      scrollToBottom();
    }
    prevMessagesLengthRef.current = messages.length;
  }, [messages]);

  const handleSendMessage = (text: string) => {
    if (!conversation) {
      return;
    }

    const newMessage: Message = {
      id: `${conversation.id}-${Date.now()}`,
      senderId: 'me',
      senderName: 'Muhammad',
      text,
      timestamp: new Date(),
      isOwn: true,
    };

    setMessages((prev) => [...prev, newMessage]);
    onMessageSent?.(conversation.id, newMessage);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
  };

  if (!conversation) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center text-center px-12 bg-white h-full rounded-r-2xl overflow-hidden">
        <div className="max-w-sm">
          <h3 className="text-lg text-gray-900" style={{ fontWeight: 600 }}>
            Select a chat to get started
          </h3>
          <p className="text-sm text-gray-500 mt-3">
            Accepted agent conversations will appear here. Head to the Pending tab to approve a new chat request.
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
              src={conversation.agent.image}
              alt={conversation.agent.name}
              className="w-11 h-11 rounded-full object-cover"
            />
            {conversation.agent.isOnline && (
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></div>
            )}
          </div>
          <div>
            <h3 className="text-base text-gray-900" style={{ fontWeight: 600 }}>
              {conversation.agent.name}
            </h3>
            <p className="text-xs text-gray-500">
              {conversation.agent.isOnline ? 'Active now' : 'Offline'}
            </p>
            {conversation.requestTitle && (
              <span
                className="inline-flex mt-3 px-3 py-1 rounded-full bg-[#E3F2FD] text-[#1565C0] text-[11px] uppercase tracking-wide"
                style={{ fontWeight: 700 }}
              >
                {conversation.requestTitle}
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

      {/* Messages */}
      <div className="flex-1 overflow-y-auto min-h-0 p-6 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[70%] ${message.isOwn ? 'order-2' : 'order-1'}`}>
              <div
                className={`rounded-2xl px-4 py-3 ${
                  message.isOwn
                    ? 'bg-gradient-to-r from-[#1565C0] to-[#90CAF9] text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}
              >
                <p className="text-sm leading-relaxed">{message.text}</p>
              </div>
              <p className={`text-xs text-gray-500 mt-1 ${message.isOwn ? 'text-right' : 'text-left'}`}>
                {formatTime(message.timestamp)}
              </p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <div className="flex-shrink-0">
        <MessageInput onSend={handleSendMessage} />
      </div>
    </div>
  );
}
