import { useState } from 'react';
import { PropertyCard, type VisibilityLevel } from './PropertyCard';
import { PropertyDetailsModal } from './PropertyDetailsModal';
import { ScheduleInspectionModal } from './ScheduleInspectionModal';
import { DashboardHeader } from '../dashboard/DashboardHeader';
import { toast } from 'sonner';
import { Search } from 'lucide-react';

interface Property {
  id: string;
  title: string;
  price: string;
  location: string;
  image: string;
  images: string[];
  agent: {
    name: string;
    avatar: string;
    verified: boolean;
    phone?: string;
  };
  visibilityLevel: VisibilityLevel;
  features: string[];
  description: string;
  bedrooms?: number;
  bathrooms?: number;
  size?: string;
}

interface PropertyRequest {
  id: string;
  title: string;
  budget: string;
  properties: Property[];
}

export function RecommendedPropertiesPage() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [inspectionProperty, setInspectionProperty] = useState<{
    id: string;
    title: string;
    location: string;
  } | null>(null);

  const propertyRequests: PropertyRequest[] = [
    {
      id: '1',
      title: '3-Bedroom Apartment in Wuse II',
      budget: '₦2.5M – ₦3M',
      properties: [
        {
          id: 'p1',
          title: 'Modern 3-Bedroom in Wuse II',
          price: '₦2,700,000/month',
          location: 'Wuse II, Abuja',
          image: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjA1OTI1NTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
          images: [
            'https://images.unsplash.com/photo-1515263487990-61b07816b324?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjA1OTI1NTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
            'https://images.unsplash.com/photo-1564078516393-cf04bd966897?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3VzZSUyMGludGVyaW9yfGVufDF8fHx8MTc2MDUxNTQ1M3ww&ixlib=rb-4.1.0&q=80&w=1080',
            'https://images.unsplash.com/photo-1662454419622-a41092ecd245?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcGFydG1lbnQlMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc2MDU2MTEyMnww&ixlib=rb-4.1.0&q=80&w=1080',
          ],
          agent: {
            name: 'Sarah Johnson',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
            verified: true,
            phone: '+234 812 345 6789',
          },
          visibilityLevel: 'available',
          features: [
            'Fully Furnished',
            'Air Conditioning',
            '24/7 Security',
            'Backup Generator',
            'Parking Space',
            'Swimming Pool',
            'Gym Access',
            'High-Speed Internet',
          ],
          description: 'Stunning modern apartment in the heart of Wuse II. This spacious 3-bedroom unit features contemporary finishes, abundant natural light, and premium amenities. Perfect for families or professionals seeking comfort and convenience.',
          bedrooms: 3,
          bathrooms: 3,
          size: '1,800 sq ft',
        },
        {
          id: 'p2',
          title: 'Luxury 3-Bedroom Apartment',
          price: '₦2,900,000/month',
          location: 'Wuse II, Abuja',
          image: 'https://images.unsplash.com/photo-1564078516393-cf04bd966897?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3VzZSUyMGludGVyaW9yfGVufDF8fHx8MTc2MDUxNTQ1M3ww&ixlib=rb-4.1.0&q=80&w=1080',
          images: [
            'https://images.unsplash.com/photo-1564078516393-cf04bd966897?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3VzZSUyMGludGVyaW9yfGVufDF8fHx8MTc2MDUxNTQ1M3ww&ixlib=rb-4.1.0&q=80&w=1080',
            'https://images.unsplash.com/photo-1662454419622-a41092ecd245?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcGFydG1lbnQlMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc2MDU2MTEyMnww&ixlib=rb-4.1.0&q=80&w=1080',
          ],
          agent: {
            name: 'Mike Chen',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
            verified: true,
          },
          visibilityLevel: 'active',
          features: [
            'Modern Kitchen',
            'Marble Flooring',
            'Balcony',
            'Security',
            'Parking',
            'Smart Home Features',
          ],
          description: 'Elegant luxury apartment with premium finishes throughout. Recently updated with modern amenities and smart home technology.',
          bedrooms: 3,
          bathrooms: 2,
          size: '1,600 sq ft',
        },
        {
          id: 'p3',
          title: 'Spacious 3-Bedroom Unit',
          price: '₦2,500,000/month',
          location: 'Wuse II, Abuja',
          image: 'https://images.unsplash.com/photo-1662454419622-a41092ecd245?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcGFydG1lbnQlMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc2MDU2MTEyMnww&ixlib=rb-4.1.0&q=80&w=1080',
          images: [
            'https://images.unsplash.com/photo-1662454419622-a41092ecd245?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcGFydG1lbnQlMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc2MDU2MTEyMnww&ixlib=rb-4.1.0&q=80&w=1080',
          ],
          agent: {
            name: 'Emma Davis',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
            verified: true,
          },
          visibilityLevel: 'locked',
          features: [
            'Open Floor Plan',
            'Natural Lighting',
            'Quiet Neighborhood',
            'Gated Community',
          ],
          description: 'Comfortable and spacious apartment in a quiet area. Great for families looking for peace and security.',
          bedrooms: 3,
          bathrooms: 2,
          size: '1,500 sq ft',
        },
      ],
    },
    {
      id: '2',
      title: 'Luxury Penthouse or Duplex',
      budget: '₦5M – ₦8M',
      properties: [
        {
          id: 'p4',
          title: 'Premium Penthouse with City Views',
          price: '₦6,500,000/month',
          location: 'Maitama, Abuja',
          image: 'https://images.unsplash.com/photo-1568115286680-d203e08a8be6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW50aG91c2UlMjB2aWV3fGVufDF8fHx8MTc2MDU4NzQ3MXww&ixlib=rb-4.1.0&q=80&w=1080',
          images: [
            'https://images.unsplash.com/photo-1568115286680-d203e08a8be6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW50aG91c2UlMjB2aWV3fGVufDF8fHx8MTc2MDU4NzQ3MXww&ixlib=rb-4.1.0&q=80&w=1080',
            'https://images.unsplash.com/photo-1564078516393-cf04bd966897?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3VzZSUyMGludGVyaW9yfGVufDF8fHx8MTc2MDUxNTQ1M3ww&ixlib=rb-4.1.0&q=80&w=1080',
          ],
          agent: {
            name: 'Sarah Johnson',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
            verified: true,
            phone: '+234 812 345 6789',
          },
          visibilityLevel: 'available',
          features: [
            'Panoramic City Views',
            'Private Elevator',
            'Rooftop Terrace',
            'Wine Cellar',
            'Home Theater',
            'Smart Home System',
            'Concierge Service',
            'Private Parking',
          ],
          description: 'Exclusive penthouse offering unparalleled luxury and breathtaking city views. This magnificent residence features top-of-the-line finishes and state-of-the-art amenities.',
          bedrooms: 4,
          bathrooms: 5,
          size: '3,500 sq ft',
        },
        {
          id: 'p5',
          title: 'Modern Duplex in Asokoro',
          price: '₦7,200,000/month',
          location: 'Asokoro, Abuja',
          image: 'https://images.unsplash.com/photo-1643297551340-19d8ad4f20ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdXBsZXglMjBob3VzZXxlbnwxfHx8fDE3NjA2MTYzMTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
          images: [
            'https://images.unsplash.com/photo-1643297551340-19d8ad4f20ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdXBsZXglMjBob3VzZXxlbnwxfHx8fDE3NjA2MTYzMTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
          ],
          agent: {
            name: 'Mike Chen',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
            verified: true,
          },
          visibilityLevel: 'active',
          features: [
            'Private Garden',
            'Double Garage',
            'Home Office',
            'Premium Finishes',
            'Gated Estate',
            'Generator',
          ],
          description: 'Stunning duplex in prestigious Asokoro district. Perfect blend of modern architecture and comfortable living spaces.',
          bedrooms: 5,
          bathrooms: 4,
          size: '4,000 sq ft',
        },
      ],
    },
  ];

  const handleExpressInterest = (id: string) => {
    toast.success('Interest Expressed', {
      description: 'Agent has been notified of your interest in this property.',
    });
  };

  const handleScheduleInspection = (id: string) => {
    const property = propertyRequests
      .flatMap((req) => req.properties)
      .find((p) => p.id === id);

    if (property) {
      setInspectionProperty({
        id: property.id,
        title: property.title,
        location: property.location,
      });
    }
  };

  const handleMessageAgent = () => {
    toast.info('Redirecting to Messages', {
      description: 'Opening your message thread with the agent...',
    });
  };

  const handleSaveWishlist = (id: string) => {
    toast.success('Saved to Wishlist', {
      description: 'Property has been added to your wishlist.',
    });
  };

  const handleViewDetails = (id: string) => {
    const property = propertyRequests
      .flatMap((req) => req.properties)
      .find((p) => p.id === id);

    if (property) {
      setSelectedProperty(property);
    }
  };

  const totalProperties = propertyRequests.reduce(
    (sum, req) => sum + req.properties.length,
    0
  );

  return (
    <div className="p-8 max-w-[1400px]">
      {/* Header */}
      <DashboardHeader />

      {/* Page Title */}
      <div className="mb-8">
        <h1 className="text-3xl text-gray-900 mb-2" style={{ fontWeight: 600 }}>Recommended Properties</h1>
        <p className="text-gray-600">Here are properties that match your recent request preferences.</p>
      </div>

      {/* Content */}
      {totalProperties === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 bg-white rounded-xl border border-gray-200">
          <div className="w-20 h-20 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#E3F2FD' }}>
            <Search className="w-10 h-10" style={{ color: '#90CAF9' }} />
          </div>
          <h3 className="mb-2">No Recommendations Yet</h3>
          <p className="text-gray-600 text-center max-w-md">
            We're curating personalized recommendations for your request. Check back shortly!
          </p>
        </div>
      ) : (
        <div className="space-y-12">
          {propertyRequests.map((request) => (
            <div key={request.id}>
              {/* Request Header */}
              <div className="mb-6">
                <div className="flex items-baseline gap-3 mb-1">
                  <h3>Request: {request.title}</h3>
                  <span className="text-gray-600">Budget {request.budget}</span>
                </div>
                <div className="text-sm text-gray-600">
                  {request.properties.length} {request.properties.length === 1 ? 'property' : 'properties'} found
                </div>
              </div>

              {/* Property Grid */}
              <div className="grid grid-cols-3 gap-6">
                {request.properties.map((property) => (
                  <PropertyCard
                    key={property.id}
                    property={property}
                    onExpressInterest={handleExpressInterest}
                    onScheduleInspection={handleScheduleInspection}
                    onMessageAgent={handleMessageAgent}
                    onSaveWishlist={handleSaveWishlist}
                    onViewDetails={handleViewDetails}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modals */}
      <PropertyDetailsModal
        open={!!selectedProperty}
        onClose={() => setSelectedProperty(null)}
        property={selectedProperty}
        onScheduleInspection={handleScheduleInspection}
        onMessageAgent={handleMessageAgent}
        onExpressInterest={handleExpressInterest}
      />

      <ScheduleInspectionModal
        open={!!inspectionProperty}
        onClose={() => setInspectionProperty(null)}
        property={inspectionProperty}
      />
    </div>
  );
}