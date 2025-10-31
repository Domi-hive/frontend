import { Plus } from 'lucide-react';

interface RequestsHeaderProps {
  onCreateNew: () => void;
}

export function RequestsHeader({ onCreateNew }: RequestsHeaderProps) {
  return (
    <div className="flex items-center justify-end mb-8">
      <button
        onClick={onCreateNew}
        className="flex items-center gap-2 px-6 py-3 bg-[#90CAF9] text-white rounded-xl hover:bg-gradient-to-r hover:from-[#1565C0] hover:to-[#90CAF9] transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5"
        style={{ fontWeight: 600 }}
      >
        <Plus className="w-5 h-5" />
        <span>Create New Request</span>
      </button>
    </div>
  );
}
