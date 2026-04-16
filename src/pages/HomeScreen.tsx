import { useState } from 'react';
import { Bell, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import BottomNav from '@/components/BottomNav';
import PlaceCard from '@/components/PlaceCard';
import { places, categories } from '@/data/places';

const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const navigate = useNavigate();

  const nearMe = places.slice(0, 4);
  const trending = places.slice(2, 5);
  const recommended = places.slice(1, 4);

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="px-5 pt-6 pb-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-lg">🧑🏽</div>
          <div>
            <p className="text-xs text-muted-foreground">Good morning</p>
            <h1 className="text-lg font-extrabold">Ahmed 👋</h1>
          </div>
        </div>
        <button onClick={() => navigate('/notifications')} className="w-10 h-10 rounded-full bg-muted flex items-center justify-center relative">
          <Bell size={18} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-primary" />
        </button>
      </div>

      {/* Category chips */}
      <div className="px-5 mt-2">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeCategory === cat.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground'
              }`}
            >
              {cat.emoji} {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Near Me */}
      <motion.section initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-5">
        <div className="flex items-center justify-between px-5 mb-3">
          <h2 className="font-extrabold text-base">Near Me</h2>
          <button className="text-xs text-primary font-semibold">See all</button>
        </div>
        <div className="flex gap-3 overflow-x-auto scrollbar-hide px-5">
          {nearMe.map((p) => <PlaceCard key={p.id} place={p} />)}
        </div>
      </motion.section>

      {/* Trending */}
      <motion.section initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-7">
        <div className="flex items-center justify-between px-5 mb-3">
          <h2 className="font-extrabold text-base">🔥 Trending This Week</h2>
          <button className="text-xs text-primary font-semibold">See all</button>
        </div>
        <div className="flex gap-3 overflow-x-auto scrollbar-hide px-5">
          {trending.map((p) => <PlaceCard key={p.id} place={p} />)}
        </div>
      </motion.section>

      {/* AI Recommended */}
      <motion.section initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-7 px-5">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles size={16} className="text-primary" />
          <h2 className="font-extrabold text-base">Recommended For You</h2>
        </div>
        <div className="space-y-3">
          {recommended.map((p) => <PlaceCard key={p.id} place={p} variant="wide" />)}
        </div>
      </motion.section>

      <BottomNav />
    </div>
  );
};

export default HomeScreen;
