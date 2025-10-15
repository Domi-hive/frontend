import { Send, Paperclip, Smile } from 'lucide-react';
import { useState, KeyboardEvent } from 'react';

interface MessageInputProps {
  onSend: (text: string) => void;
}

export function MessageInput({ onSend }: MessageInputProps) {
  const [message, setMessage] = useState('');
  
  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };
  
  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };
  
  return (
    <div className="p-5 border-t border-gray-100 bg-white">
      <div className="flex items-end gap-3">
        {/* Attachment Button */}
        <button className="w-10 h-10 rounded-lg hover:bg-gray-50 flex items-center justify-center transition-colors flex-shrink-0">
          <Paperclip className="w-5 h-5 text-gray-600" />
        </button>
        
        {/* Input Area */}
        <div className="flex-1 relative">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type a message..."
            rows={1}
            className="w-full px-4 py-3 pr-12 bg-gray-50 rounded-xl text-sm border border-gray-100 focus:outline-none focus:border-[#90CAF9] focus:ring-2 focus:ring-[#90CAF9]/20 transition-all resize-none"
            style={{ minHeight: '44px', maxHeight: '120px' }}
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center transition-colors">
            <Smile className="w-5 h-5 text-gray-600" />
          </button>
        </div>
        
        {/* Send Button */}
        <button
          onClick={handleSend}
          disabled={!message.trim()}
          className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all flex-shrink-0 ${
            message.trim()
              ? 'bg-gradient-to-r from-[#1565C0] to-[#90CAF9] text-white hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
