import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import { Button } from '../ui/button';
import { Calendar } from '../ui/calendar';
import { useState } from 'react';
import { toast } from 'sonner';

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
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>('');

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const handleSchedule = () => {
    if (!selectedDate || !selectedTime) {
      toast.error('Please select both date and time');
      return;
    }

    toast.success('Inspection scheduled', {
      description: `Your inspection for ${property?.title} has been scheduled for ${selectedDate.toDateString()} at ${selectedTime}.`,
    });
    onClose();
  };

  if (!property) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Schedule Property Inspection</DialogTitle>
          <DialogDescription>
            Schedule an inspection for {property.title} located at {property.location}.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Date Selection */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Select Date
            </label>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              disabled={(date) => date < new Date()}
              className="rounded-md border border-gray-200"
            />
          </div>

          {/* Time Selection */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-3 block">
              Select Time
            </label>
            <div className="grid grid-cols-3 gap-2">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`p-3 text-sm border rounded-lg transition-colors ${
                    selectedTime === time
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* Property Info */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-medium text-sm mb-2">Property Details</h4>
            <div className="space-y-1 text-sm text-gray-600">
              <div><strong>Title:</strong> {property.title}</div>
              <div><strong>Location:</strong> {property.location}</div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 justify-end">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleSchedule}>
              Schedule Inspection
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}