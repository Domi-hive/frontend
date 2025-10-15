import { RequestCard } from './RequestCard';
import type { PropertyRequest } from '../../pages/RequestsPage';

interface RequestsListProps {
  requests: PropertyRequest[];
  isHistory?: boolean;
}

export function RequestsList({ requests, isHistory }: RequestsListProps) {
  if (requests.length === 0) {
    return (
      <div className="bg-white rounded-2xl p-12 border border-gray-100 text-center">
        <p className="text-gray-500">No requests found in this category.</p>
      </div>
    );
  }
  
  return (
    <div className="space-y-4">
      {requests.map((request) => (
        <RequestCard key={request.id} request={request} isHistory={isHistory} />
      ))}
    </div>
  );
}
