import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { MapPin, ExternalLink } from 'lucide-react';

interface DirectionsMapModalProps {
  open: boolean;
  onClose: () => void;
  address: string;
  propertyName: string;
}

export function DirectionsMapModal({
  open,
  onClose,
  address,
  propertyName,
}: DirectionsMapModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Directions to Property</DialogTitle>
          <p className="text-sm text-gray-600 mt-2">{propertyName}</p>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {/* Map Placeholder */}
          <div 
            className="w-full h-80 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: '#E3F2FD' }}
          >
            <div className="text-center">
              <MapPin className="w-16 h-16 mx-auto mb-4" style={{ color: '#1565C0' }} />
              <p className="text-gray-600 mb-2">Map Preview</p>
              <p className="text-sm text-gray-500 max-w-md mx-auto">
                Interactive map would display here. In production, this would integrate with Google Maps or similar service.
              </p>
            </div>
          </div>

          {/* Address Info */}
          <div className="p-4 rounded-xl border border-gray-200">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 mt-1" style={{ color: '#1565C0' }} />
              <div className="flex-1">
                <div className="text-sm mb-1">Property Address</div>
                <p className="text-gray-600">{address}</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`, '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Open in Google Maps
            </Button>
            <Button
              className="flex-1 text-white"
              style={{ backgroundColor: '#90CAF9' }}
              onClick={onClose}
            >
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
