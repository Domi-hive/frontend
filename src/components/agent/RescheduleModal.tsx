import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Calendar } from './ui/calendar';
import { useState } from 'react';

interface RescheduleModalProps {
  open: boolean;
  onClose: () => void;
  inspectionId: string;
  propertyName: string;
}

export function RescheduleModal({ open, onClose, inspectionId, propertyName }: RescheduleModalProps) {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>('');

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const handleReschedule = () => {
    // Frontend only - just close the modal
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Reschedule Inspection</DialogTitle>
          <DialogDescription>
            Choose a new date and time for your inspection at {propertyName}
          </DialogDescription>
        </DialogHeader>

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
                      ? 'border-[#90CAF9] bg-[#E3F2FD] text-[#1565C0]'
                      : 'border-gray-200 hover:border-[#90CAF9] hover:bg-gray-50'
                  }`}
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
            onClick={handleReschedule}
            disabled={!date || !selectedTime}
            className="text-white"
            style={{ backgroundColor: '#90CAF9' }}
          >
            Confirm Reschedule
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
