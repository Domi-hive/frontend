import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface DirectionsModalProps {
  open: boolean;
  onClose: () => void;
  location: string;
}

export function DirectionsModal({ open, onClose, location }: DirectionsModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Get Directions</DialogTitle>
          <DialogDescription>
            View location and get directions to the property
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {/* Location Address */}
          <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-50">
            <MapPin className="w-5 h-5 mt-0.5" style={{ color: '#1565C0' }} />
            <div>
              <div className="text-sm mb-1">Property Location</div>
              <div className="text-sm text-gray-600">{location}</div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="relative h-80 bg-gray-100 rounded-lg overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&h=400&fit=crop"
              alt="Map placeholder"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/10">
              <div className="bg-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2">
                <MapPin className="w-5 h-5" style={{ color: '#1565C0' }} />
                <span>Interactive map would load here</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <Button
              variant="outline"
              className="w-full"
              onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(location)}`, '_blank')}
            >
              <Navigation className="w-4 h-4 mr-2" />
              Open in Google Maps
            </Button>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => window.open(`https://maps.apple.com/?q=${encodeURIComponent(location)}`, '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Open in Apple Maps
            </Button>
          </div>
        </div>

        <div className="flex justify-end">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
