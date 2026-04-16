import { useState } from 'react';
import { Settings, Edit2, MapPin, Star, Bookmark, MessageCircle, Crown, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '@/components/BottomNav';
import PlaceCard from '@/components/PlaceCard';
import { places } from '@/data/places';

const profileTabs = ['My Places', 'Saved Pins', 'Reviews'];

const ProfileScreen = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('My Places');

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header bar */}
      <div className="px-5 pt-6 pb-4 flex items-center justify-between">
        <h1 className="text-lg font-extrabold">Profile</h1>
        <button onClick={() => navigate('/settings')} className="w-9 h-9 rounded-full bg-muted flex items-center justify-center">
          <Settings size={16} />
        </button>
      </div>

      <div className="px-5">
        {/* Avatar + Name */}
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-3xl">🧑🏽</div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-extrabold">Ahmed Mostafa</h2>
              <span className="flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-gold/20 text-gold text-[10px] font-bold"><Crown size={10} /> Super User</span>
            </div>
            <p className="text-xs text-muted-foreground mt-0.5">Exploring Cairo one hidden gem at a time ✨</p>
            <p className="text-[10px] text-muted-foreground mt-0.5">Joined March 2024</p>
          </div>
        </div>

        {/* Stats */}
        <div className="flex gap-1 mt-4">
          {[
            { label: 'Places', value: '24', icon: MapPin },
            { label: 'Reviews', value: '67', icon: Star },
            { label: 'Pins', value: '142', icon: Bookmark },
            { label: 'Chats', value: '18', icon: MessageCircle },
          ].map((s) => (
            <div key={s.label} className="flex-1 py-3 rounded-xl bg-card shadow-card text-center">
              <s.icon size={14} className="text-primary mx-auto mb-1" />
              <p className="text-sm font-extrabold">{s.value}</p>
              <p className="text-[10px] text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        <button onClick={() => navigate('/edit-profile')} className="w-full mt-4 py-2.5 rounded-xl border border-border text-sm font-semibold flex items-center justify-center gap-2">
          <Edit2 size={14} /> Edit Profile
        </button>

        {/* Tabs */}
        <div className="flex gap-1 mt-5 bg-muted rounded-xl p-1">
          {profileTabs.map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`flex-1 py-2 rounded-lg text-xs font-semibold transition-all ${activeTab === tab ? 'bg-background shadow-sm' : 'text-muted-foreground'}`}>
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-4 space-y-3">
          {activeTab === 'My Places' && places.slice(0, 3).map((p) => <PlaceCard key={p.id} place={p} variant="wide" />)}
          {activeTab === 'Saved Pins' && places.filter((p) => p.saved).map((p) => <PlaceCard key={p.id} place={p} variant="wide" />)}
          {activeTab === 'Reviews' && (
            <div className="text-center py-8">
              <span className="text-4xl mb-3 block">📝</span>
              <h3 className="font-bold">Your reviews will appear here</h3>
              <p className="text-xs text-muted-foreground mt-1">Share your experiences with the community</p>
            </div>
          )}
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default ProfileScreen;
