import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import { Button } from '../ui/button';
import { Calendar } from '../ui/calendar';
import { useState } from 'react';
import { toast } from 'sonner';

interface RescheduleModalProps {
  open: boolean;
  onClose: () => void;
  inspectionId: string;
  propertyName: string;
}

export function RescheduleModal({ open, onClose, inspectionId, propertyName }: RescheduleModalProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>('');

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const handleReschedule = () => {
    if (!selectedDate || !selectedTime) {
      toast.error('Please select both date and time');
      return;
    }

    toast.success('Inspection rescheduled', {
      description: `Your inspection for ${propertyName} has been rescheduled to ${selectedDate.toDateString()} at ${selectedTime}.`,
    });
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Reschedule Inspection</DialogTitle>
          <DialogDescription>
            Select a new date and time for your inspection of {propertyName}.
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

          {/* Actions */}
          <div className="flex gap-3 justify-end">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleReschedule}>
              Reschedule Inspection
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}