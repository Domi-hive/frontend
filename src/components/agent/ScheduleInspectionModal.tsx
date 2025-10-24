import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Calendar } from './ui/calendar';
import { useState } from 'react';
import { MapPin } from 'lucide-react';

interface ScheduleInspectionModalProps {
  open: boolean;
  onClose: () => void;
  property: {
    id: string;
    title: string;
    location: string;
  } | null;
}

export function ScheduleInspectionModal({ open, onClose, property }: ScheduleInspectionModalProps) {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>('');

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const handleSchedule = () => {
    // Frontend only - just close the modal
    onClose();
  };

  if (!property) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Schedule Property Inspection</DialogTitle>
          <DialogDescription>
            Choose your preferred date and time to visit {property.title}
          </DialogDescription>
        </DialogHeader>

        {/* Property Info */}
        <div className="flex items-start gap-2 p-4 rounded-lg mb-4" style={{ backgroundColor: '#E3F2FD' }}>
          <MapPin className="w-5 h-5 mt-0.5" style={{ color: '#1565C0' }} />
          <div>
            <div className="text-sm mb-1">{property.title}</div>
            <div className="text-sm text-gray-600">{property.location}</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 py-4">
          <div>
            <h4 className="text-sm mb-3">Select Date</h4>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </div>

          <div>
            <h4 className="text-sm mb-3">Select Time</h4>
            <div className="grid grid-cols-2 gap-2 max-h-80 overflow-y-auto">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`p-3 rounded-lg border text-sm transition-colors ${
                    selectedTime === time
                      ? 'text-white'
                      : 'border-gray-200 hover:border-[#90CAF9] hover:bg-gray-50'
                  }`}
                  style={selectedTime === time ? { backgroundColor: '#90CAF9', borderColor: '#90CAF9' } : {}}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex gap-3 justify-end">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            onClick={handleSchedule}
            disabled={!date || !selectedTime}
            className="text-white"
            style={{ backgroundColor: '#90CAF9' }}
          >
            Confirm Inspection
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
