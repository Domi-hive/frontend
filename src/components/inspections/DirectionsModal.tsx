import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';

interface DirectionsModalProps {
  open: boolean;
  onClose: () => void;
  location: string;
}

export function DirectionsModal({ open, onClose, location }: DirectionsModalProps) {
  const handleGetDirections = (service: string) => {
    const encodedLocation = encodeURIComponent(location);
    let url = '';

    switch (service) {
      case 'google':
        url = `https://www.google.com/maps/dir/?api=1&destination=${encodedLocation}`;
        break;
      case 'apple':
        url = `http://maps.apple.com/?daddr=${encodedLocation}`;
        break;
      case 'waze':
        url = `https://waze.com/ul?q=${encodedLocation}`;
        break;
    }

    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Get Directions</DialogTitle>
          <DialogDescription>
            Choose your preferred navigation app to get directions to: {location}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* Map Preview */}
          <div className="relative h-48 bg-gray-100 rounded-lg overflow-hidden">
            <ImageWithFallback
              src={`https://maps.googleapis.com/maps/api/staticmap?center=${encodeURIComponent(location)}&zoom=15&size=600x300&key=YOUR_API_KEY`}
              alt="Location map"
              className="w-full h-full object-cover"
              fallback={
                <div className="w-full h-full flex items-center justify-center bg-gray-200">
                  <MapPin className="w-12 h-12 text-gray-400" />
                </div>
              }
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white rounded-full p-2 shadow-lg">
                <MapPin className="w-6 h-6 text-red-500" />
              </div>
            </div>
          </div>

          {/* Navigation Options */}
          <div className="grid grid-cols-1 gap-3">
            <Button
              variant="outline"
              onClick={() => handleGetDirections('google')}
              className="flex items-center gap-3 h-12"
            >
              <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">G</span>
              </div>
              <div className="flex-1 text-left">
                <div className="font-medium">Google Maps</div>
                <div className="text-xs text-gray-500">Recommended</div>
              </div>
              <ExternalLink className="w-4 h-4" />
            </Button>

            <Button
              variant="outline"
              onClick={() => handleGetDirections('apple')}
              className="flex items-center gap-3 h-12"
            >
              <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
                <span className="text-white text-xs"></span>
              </div>
              <div className="flex-1 text-left">
                <div className="font-medium">Apple Maps</div>
                <div className="text-xs text-gray-500">iOS devices</div>
              </div>
              <ExternalLink className="w-4 h-4" />
            </Button>

            <Button
              variant="outline"
              onClick={() => handleGetDirections('waze')}
              className="flex items-center gap-3 h-12"
            >
              <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                <Navigation className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1 text-left">
                <div className="font-medium">Waze</div>
                <div className="text-xs text-gray-500">Crowd-sourced navigation</div>
              </div>
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>

          {/* Address */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
              <div>
                <div className="font-medium text-sm">Destination</div>
                <div className="text-sm text-gray-600">{location}</div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}