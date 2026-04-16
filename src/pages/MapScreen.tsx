import { MapPin, SlidersHorizontal, Navigation } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '@/components/BottomNav';
import { places, categories } from '@/data/places';

const categoryColors: Record<string, string> = {
  Food: 'bg-primary',
  'Cafés': 'bg-gold',
  'Hidden Gems': 'bg-secondary',
  Art: 'bg-terracotta-light',
  Nature: 'bg-olive',
  Nightlife: 'bg-teal-light',
};

const MapScreen = () => {
  const navigate = useNavigate();
  const [selectedPlace, setSelectedPlace] = useState<string | null>(null);
  const selected = places.find((p) => p.id === selectedPlace);

  return (
    <div className="min-h-screen bg-background relative pb-16">
      {/* Fake map */}
      <div className="relative w-full h-[calc(100vh-4rem)] bg-beige-warm overflow-hidden">
        {/* Grid lines for map feel */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(hsl(var(--foreground) / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground) / 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        {/* Category pins */}
        {places.map((p, i) => (
          <button
            key={p.id}
            onClick={() => setSelectedPlace(p.id)}
            className={`absolute flex items-center justify-center w-9 h-9 rounded-full shadow-elevated transition-transform ${selectedPlace === p.id ? 'scale-125 z-10' : ''} ${categoryColors[p.category] || 'bg-primary'}`}
            style={{
              top: `${15 + (i * 13) % 60}%`,
              left: `${10 + (i * 17) % 75}%`,
            }}
          >
            <MapPin size={16} className="text-background" fill="currentColor" />
          </button>
        ))}

        {/* Filter button */}
        <button className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-background shadow-elevated flex items-center justify-center">
          <SlidersHorizontal size={18} />
        </button>

        {/* Category legend */}
        <div className="absolute top-4 left-4 flex flex-col gap-1">
          {categories.slice(0, 4).map((c) => (
            <div key={c.id} className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-background/90 backdrop-blur-sm text-[10px] font-semibold">
              <span>{c.emoji}</span> {c.label}
            </div>
          ))}
        </div>

        {/* Near Me FAB */}
        <button className="absolute bottom-20 right-4 w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-elevated flex items-center justify-center animate-pulse-glow">
          <Navigation size={20} />
        </button>

        {/* Bottom sheet preview */}
        {selected && (
          <div
            onClick={() => navigate(`/place/${selected.id}`)}
            className="absolute bottom-4 left-4 right-4 p-3 bg-background rounded-2xl shadow-elevated flex gap-3 cursor-pointer"
          >
            <img src={selected.image} className="w-20 h-20 rounded-xl object-cover" />
            <div className="flex-1 flex flex-col justify-center">
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-primary/10 text-primary self-start">{selected.category}</span>
              <h3 className="font-bold text-sm mt-1">{selected.name}</h3>
              <div className="flex items-center gap-2 text-xs text-muted-foreground mt-0.5">
                <span>⭐ {selected.rating}</span>
                <span>📍 {selected.distance}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
};

export default MapScreen;
