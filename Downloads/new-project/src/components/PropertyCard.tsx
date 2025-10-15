import { Bed, Bath, Ruler } from 'lucide-react';

interface PropertyCardProps {
  image: string;
  price: string;
  period: string;
  title: string;
  address: string;
  beds: number;
  baths: number;
  area: string;
  className?: string;
  featured?: boolean;
}

export function PropertyCard({ 
  image, 
  price, 
  period, 
  title, 
  address, 
  beds, 
  baths, 
  area, 
  className,
  featured = false
}: PropertyCardProps) {
  const cardSize = featured ? 'w-80' : 'w-64';
  const imageHeight = featured ? 'h-48' : 'h-36';
  
  return (
    <div className={`bg-white rounded-2xl shadow-2xl overflow-hidden ${cardSize} ${className}`}>
      <div className="relative overflow-hidden group">
        <img 
          src={image} 
          alt={title}
          className={`w-full ${imageHeight} object-cover group-hover:scale-110 transition-transform duration-700`}
        />
        {featured && (
          <div className="absolute top-3 right-3 bg-gradient-to-r from-[#1565C0] to-[#1976D2] text-white px-3 py-1 rounded-full text-xs shadow-lg" style={{ fontWeight: 600 }}>
            ⭐ Featured
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      <div className={`${featured ? 'p-6' : 'p-5'}`}>
        <div className="mb-3">
          <span className={`text-[#1565C0] ${featured ? 'text-2xl' : 'text-xl'}`} style={{ fontWeight: 600 }}>{price}</span>
          <span className="text-gray-500 text-sm">{period}</span>
        </div>
        <h3 className={`${featured ? 'text-lg' : 'text-base'} mb-1 text-gray-900`} style={{ fontWeight: 600 }}>{title}</h3>
        <p className="text-xs text-gray-500 mb-4 line-clamp-1">{address}</p>
        <div className="flex items-center gap-4 text-xs text-gray-600">
          <div className="flex items-center gap-1.5">
            <Bed className="w-4 h-4 text-[#1565C0]" />
            <span>{beds}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bath className="w-4 h-4 text-[#1565C0]" />
            <span>{baths}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Ruler className="w-4 h-4 text-[#1565C0]" />
            <span>{area}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
