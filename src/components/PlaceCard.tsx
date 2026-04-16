import { Star, Bookmark, MapPin } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Place } from '@/data/places';

interface PlaceCardProps {
  place: Place;
  variant?: 'horizontal' | 'vertical' | 'wide';
}

const PlaceCard = ({ place, variant = 'horizontal' }: PlaceCardProps) => {
  const [saved, setSaved] = useState(place.saved);
  const navigate = useNavigate();

  if (variant === 'wide') {
    return (
      <div
        onClick={() => navigate(`/place/${place.id}`)}
        className="flex gap-3 p-3 bg-card rounded-xl shadow-card cursor-pointer active:scale-[0.98] transition-transform"
      >
        <img src={place.image} alt={place.name} className="w-24 h-24 rounded-lg object-cover" loading="lazy" />
        <div className="flex-1 flex flex-col justify-between min-w-0">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-primary/10 text-primary">{place.category}</span>
            </div>
            <h3 className="font-bold text-sm mt-1 truncate">{place.name}</h3>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="flex items-center gap-0.5"><Star size={12} className="text-gold fill-gold" /> {place.rating}</span>
              <span className="flex items-center gap-0.5"><MapPin size={12} /> {place.distance}</span>
            </div>
            <button onClick={(e) => { e.stopPropagation(); setSaved(!saved); }} className="p-1">
              <Bookmark size={16} className={saved ? 'text-primary fill-primary' : 'text-muted-foreground'} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={() => navigate(`/place/${place.id}`)}
      className="flex-shrink-0 w-44 cursor-pointer active:scale-[0.97] transition-transform"
    >
      <div className="relative">
        <img src={place.image} alt={place.name} className="w-44 h-32 rounded-xl object-cover" loading="lazy" />
        <button
          onClick={(e) => { e.stopPropagation(); setSaved(!saved); }}
          className="absolute top-2 right-2 w-7 h-7 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center"
        >
          <Bookmark size={14} className={saved ? 'text-primary fill-primary' : 'text-foreground'} />
        </button>
        <span className="absolute bottom-2 left-2 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-background/80 backdrop-blur-sm">
          {place.category}
        </span>
      </div>
      <div className="mt-2 px-0.5">
        <h3 className="font-bold text-sm truncate">{place.name}</h3>
        <div className="flex items-center gap-2 mt-0.5 text-xs text-muted-foreground">
          <span className="flex items-center gap-0.5"><Star size={11} className="text-gold fill-gold" /> {place.rating}</span>
          <span className="flex items-center gap-0.5"><MapPin size={11} /> {place.distance}</span>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
