import { X } from 'lucide-react';

interface CreateRequestModalProps {
  onClose: () => void;
}

export function CreateRequestModal({ onClose }: CreateRequestModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-8">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-fadeIn">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-2xl text-gray-900" style={{ fontWeight: 600 }}>Create New Request</h2>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-lg hover:bg-gray-50 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <div className="text-center py-12">
            <div className="w-16 h-16 rounded-full bg-[#E3F2FD] flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🏡</span>
            </div>
            <h3 className="text-lg text-gray-900 mb-2" style={{ fontWeight: 600 }}>
              Request Form Coming Soon
            </h3>
            <p className="text-sm text-gray-600">
              This feature will allow you to create detailed property requests with your specific requirements.
            </p>
          </div>
        </div>
        
        {/* Footer */}
        <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-100">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-lg border border-gray-200 text-gray-700 text-sm hover:bg-gray-50 transition-colors"
            style={{ fontWeight: 600 }}
          >
            Close
          </button>
          <button
            className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-[#1565C0] to-[#90CAF9] text-white text-sm hover:shadow-lg hover:shadow-blue-500/30 transition-all"
            style={{ fontWeight: 600 }}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
