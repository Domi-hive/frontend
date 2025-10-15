import { Phone, Video, MoreVertical } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { MessageInput } from './MessageInput';
import type { Conversation, Message } from '../../pages/MessagesPage';
import { useState, useRef, useEffect } from 'react';

interface ChatWindowProps {
  conversation: Conversation;
}

export function ChatWindow({ conversation }: ChatWindowProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      senderId: conversation.agent.name,
      senderName: conversation.agent.name,
      text: 'Hi Muhammad! Thanks for your interest in the 2-bedroom apartment in Wuse II.',
      timestamp: new Date(Date.now() - 3600000),
      isOwn: false,
    },
    {
      id: '2',
      senderId: 'me',
      senderName: 'Muhammad',
      text: 'Hi! I would love to schedule an inspection. What times are available?',
      timestamp: new Date(Date.now() - 3500000),
      isOwn: true,
    },
    {
      id: '3',
      senderId: conversation.agent.name,
      senderName: conversation.agent.name,
      text: 'Great! I have availability on Thursday at 2:00 PM or 4:00 PM. Would either of those work for you?',
      timestamp: new Date(Date.now() - 3400000),
      isOwn: false,
    },
    {
      id: '4',
      senderId: 'me',
      senderName: 'Muhammad',
      text: 'Thursday at 2:00 PM would be perfect!',
      timestamp: new Date(Date.now() - 3300000),
      isOwn: true,
    },
    {
      id: '5',
      senderId: conversation.agent.name,
      senderName: conversation.agent.name,
      text: "Perfect! I've updated the inspection time to 3:00 PM tomorrow. I'll send you the exact location details shortly.",
      timestamp: new Date(Date.now() - 120000),
      isOwn: false,
    },
    {
      id: '6',
      senderId: 'me',
      senderName: 'Muhammad',
      text: 'Thanks, that works perfectly.',
      timestamp: new Date(Date.now() - 60000),
      isOwn: true,
    },
  ]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      senderId: 'me',
      senderName: 'Muhammad',
      text,
      timestamp: new Date(),
      isOwn: true,
    };
    setMessages([...messages, newMessage]);
  };
  
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
  };
  
  return (
    <div className="flex-1 flex flex-col">
      {/* Chat Header */}
      <div className="flex items-center justify-between p-5 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="relative">
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
            <h3 className="text-base text-gray-900" style={{ fontWeight: 600 }}>{conversation.agent.name}</h3>
            <p className="text-xs text-gray-500">
              {conversation.agent.isOnline ? 'Active now' : 'Offline'}
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <button className="w-10 h-10 rounded-lg hover:bg-gray-50 flex items-center justify-center transition-colors">
            <Phone className="w-5 h-5 text-gray-600" />
          </button>
          <button className="w-10 h-10 rounded-lg hover:bg-gray-50 flex items-center justify-center transition-colors">
            <Video className="w-5 h-5 text-gray-600" />
          </button>
          <button className="w-10 h-10 rounded-lg hover:bg-gray-50 flex items-center justify-center transition-colors">
            <MoreVertical className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
      
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
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
      <MessageInput onSend={handleSendMessage} />
    </div>
  );
}
