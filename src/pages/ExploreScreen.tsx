import { useState } from 'react';
import { Search, Mic, SlidersHorizontal, LayoutGrid, List } from 'lucide-react';
import BottomNav from '@/components/BottomNav';
import PlaceCard from '@/components/PlaceCard';
import { places, categories } from '@/data/places';

const atmosphereTags = ['Cozy', 'Lively', 'Quiet', 'Romantic', 'Historic', 'Artistic'];

const ExploreScreen = () => {
  const [query, setQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [activeCats, setActiveCats] = useState<string[]>([]);
  const [activeAtmos, setActiveAtmos] = useState<string[]>([]);
  const [budget, setBudget] = useState(50);

  const filtered = places.filter((p) => {
    if (query && !p.name.toLowerCase().includes(query.toLowerCase())) return false;
    if (activeCats.length > 0 && !activeCats.includes(p.category)) return false;
    return true;
  });

  const noResults = filtered.length === 0;

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="px-5 pt-6 pb-2">
        <h1 className="text-xl font-extrabold mb-3">Explore</h1>
        <div className="flex gap-2">
          <div className="flex-1 flex items-center bg-muted rounded-xl px-3 gap-2">
            <Search size={16} className="text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search places, cafés, gems..."
              className="flex-1 py-3 bg-transparent text-sm focus:outline-none"
            />
            <Mic size={16} className="text-muted-foreground" />
          </div>
          <button onClick={() => setShowFilters(!showFilters)} className={`w-11 h-11 rounded-xl flex items-center justify-center ${showFilters ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
            <SlidersHorizontal size={18} />
          </button>
        </div>
      </div>

      {showFilters && (
        <div className="px-5 py-4 border-b border-border space-y-4">
          <div>
            <label className="text-xs font-semibold text-muted-foreground">Budget</label>
            <input type="range" min={0} max={100} value={budget} onChange={(e) => setBudget(Number(e.target.value))} className="w-full mt-2 accent-primary" />
            <div className="flex justify-between text-xs text-muted-foreground"><span>Free</span><span>$$$</span></div>
          </div>
          <div>
            <label className="text-xs font-semibold text-muted-foreground">Category</label>
            <div className="flex flex-wrap gap-2 mt-2">
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveCats((prev) => prev.includes(c.label) ? prev.filter((x) => x !== c.label) : [...prev, c.label])}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold ${activeCats.includes(c.label) ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}
                >
                  {c.emoji} {c.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold text-muted-foreground">Atmosphere</label>
            <div className="flex flex-wrap gap-2 mt-2">
              {atmosphereTags.map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveAtmos((prev) => prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t])}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold ${activeAtmos.includes(t) ? 'bg-secondary text-secondary-foreground' : 'bg-muted text-muted-foreground'}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between px-5 mt-4 mb-3">
        <span className="text-xs text-muted-foreground">{filtered.length} places found</span>
        <div className="flex gap-1">
          <button onClick={() => setViewMode('list')} className={`p-1.5 rounded ${viewMode === 'list' ? 'bg-primary/10 text-primary' : 'text-muted-foreground'}`}><List size={16} /></button>
          <button onClick={() => setViewMode('grid')} className={`p-1.5 rounded ${viewMode === 'grid' ? 'bg-primary/10 text-primary' : 'text-muted-foreground'}`}><LayoutGrid size={16} /></button>
        </div>
      </div>

      {noResults ? (
        <div className="flex flex-col items-center justify-center px-5 mt-16 text-center">
          <span className="text-5xl mb-4">🔍</span>
          <h3 className="font-bold text-lg">No places found</h3>
          <p className="text-muted-foreground text-sm mt-1">Try adjusting your filters or search terms</p>
          <button onClick={() => { setQuery(''); setActiveCats([]); }} className="mt-4 px-6 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold">Clear Filters</button>
        </div>
      ) : viewMode === 'list' ? (
        <div className="px-5 space-y-3">
          {filtered.map((p) => <PlaceCard key={p.id} place={p} variant="wide" />)}
        </div>
      ) : (
        <div className="px-5 grid grid-cols-2 gap-3">
          {filtered.map((p) => <PlaceCard key={p.id} place={p} />)}
        </div>
      )}

      <BottomNav />
    </div>
  );
};

export default ExploreScreen;
