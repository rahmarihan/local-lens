import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Share2, Bookmark, Star, MapPin, Clock, Sparkles, MessageCircle, Edit2, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { places } from '@/data/places';

const tabs = ['Overview', 'Reviews', 'Tips', 'Dishes'];

const mockReviews = [
  { id: '1', user: 'Sara K.', avatar: '👩🏽', rating: 5, text: 'Absolutely magical! The atmosphere is unlike anything I\'ve experienced.', time: '2 days ago', isOwner: false },
  { id: '2', user: 'You', avatar: '🧑🏽', rating: 4, text: 'Great spot, loved the vibe. A bit crowded on weekends though.', time: '1 week ago', isOwner: true },
];

const PlaceDetailScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Overview');
  const [saved, setSaved] = useState(false);
  const [reviewText, setReviewText] = useState('');

  const place = places.find((p) => p.id === id);
  if (!place) return <div className="min-h-screen flex items-center justify-center">Place not found</div>;

  return (
    <div className="min-h-screen bg-background pb-8">
      {/* Hero */}
      <div className="relative h-64">
        <img src={place.image} alt={place.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        <div className="absolute top-4 left-4 right-4 flex justify-between">
          <button onClick={() => navigate(-1)} className="w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center">
            <ArrowLeft size={18} />
          </button>
          <div className="flex gap-2">
            <button className="w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center">
              <Share2 size={16} />
            </button>
            <button onClick={() => setSaved(!saved)} className="w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center">
              <Bookmark size={16} className={saved ? 'text-primary fill-primary' : ''} />
            </button>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="px-5 -mt-6 relative">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-2">{place.category}</span>
          <h1 className="text-2xl font-extrabold">{place.name}</h1>
          {place.nameAr && <p className="text-muted-foreground text-sm">{place.nameAr}</p>}
          <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1"><Star size={14} className="text-gold fill-gold" /> {place.rating} ({place.reviews})</span>
            <span className="flex items-center gap-1"><MapPin size={14} /> {place.distance}</span>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-1 mt-5 bg-muted rounded-xl p-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 rounded-lg text-xs font-semibold transition-all ${activeTab === tab ? 'bg-background shadow-sm' : 'text-muted-foreground'}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="mt-5">
          {activeTab === 'Overview' && (
            <div className="space-y-4">
              <p className="text-sm leading-relaxed text-muted-foreground">{place.description}</p>
              <div className="flex items-center gap-2 text-sm"><Clock size={14} className="text-primary" /><span>{place.hours}</span></div>
              <div className="flex items-center gap-2 text-sm"><MapPin size={14} className="text-primary" /><span>{place.address}</span></div>

              {/* AI Summary */}
              <div className="p-4 rounded-xl bg-secondary/10 border border-secondary/20">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles size={14} className="text-secondary" />
                  <span className="text-xs font-bold text-secondary">AI Summary</span>
                </div>
                <p className="text-xs leading-relaxed text-muted-foreground">Visitors love the authentic atmosphere and rich history. Best visited in the morning for a quieter experience. Highly rated for its unique character and friendly locals.</p>
              </div>

              {/* Photo Gallery */}
              <div>
                <h3 className="text-sm font-bold mb-2">Photos</h3>
                <div className="flex gap-2 overflow-x-auto scrollbar-hide">
                  {places.slice(0, 4).map((p) => (
                    <img key={p.id} src={p.image} className="w-24 h-24 rounded-lg object-cover flex-shrink-0" loading="lazy" />
                  ))}
                </div>
              </div>

              <button onClick={() => navigate(`/chat/${place.id}`)} className="w-full py-3 rounded-xl bg-secondary text-secondary-foreground font-semibold text-sm flex items-center justify-center gap-2">
                <MessageCircle size={16} /> Chat with Contributor
              </button>
            </div>
          )}

          {activeTab === 'Reviews' && (
            <div className="space-y-4">
              {mockReviews.map((r) => (
                <div key={r.id} className="p-3 rounded-xl bg-card shadow-card">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{r.avatar}</span>
                      <div>
                        <p className="text-sm font-bold">{r.user}</p>
                        <div className="flex items-center gap-1">
                          {Array.from({ length: r.rating }).map((_, i) => <Star key={i} size={10} className="text-gold fill-gold" />)}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">{r.time}</span>
                      {r.isOwner && (
                        <div className="flex gap-1">
                          <button className="p-1 text-muted-foreground"><Edit2 size={12} /></button>
                          <button className="p-1 text-destructive"><Trash2 size={12} /></button>
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">{r.text}</p>
                </div>
              ))}

              {/* Add review */}
              <div className="mt-4">
                <h3 className="text-sm font-bold mb-2">Add a Review</h3>
                <textarea
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  placeholder="Share your experience..."
                  className="w-full px-4 py-3 rounded-xl bg-muted text-sm border border-transparent focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none h-24"
                />
                <button className="mt-2 px-6 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold">Submit Review</button>
              </div>
            </div>
          )}

          {activeTab === 'Tips' && (
            <div className="space-y-3">
              {place.localTips.map((tip, i) => (
                <div key={i} className="flex gap-3 p-3 rounded-xl bg-card shadow-card">
                  <span className="text-lg">💡</span>
                  <p className="text-sm">{tip}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'Dishes' && (
            <div className="space-y-3">
              <div className="flex gap-3 p-3 rounded-xl bg-card shadow-card">
                <img src={places[0].image} className="w-16 h-16 rounded-lg object-cover" loading="lazy" />
                <div>
                  <h4 className="text-sm font-bold">Koshari El-Balad</h4>
                  <p className="text-xs text-muted-foreground">The classic Egyptian comfort dish — a must try!</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-xl bg-card shadow-card">
                <img src={places[1].image} className="w-16 h-16 rounded-lg object-cover" loading="lazy" />
                <div>
                  <h4 className="text-sm font-bold">Turkish Coffee</h4>
                  <p className="text-xs text-muted-foreground">Rich, thick, and served in a traditional finjan</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlaceDetailScreen;
