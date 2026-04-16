import { ArrowLeft, Crown, Trophy, Star, MessageCircle, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const badges = [
  { name: 'Verified Explorer', icon: '🧭', earned: true },
  { name: 'Local Legend', icon: '👑', earned: true },
  { name: 'Foodie Master', icon: '🍜', earned: false },
  { name: 'Night Owl', icon: '🦉', earned: false },
  { name: 'Art Lover', icon: '🎨', earned: true },
  { name: 'Nature Guide', icon: '🌿', earned: false },
];

const progressItems = [
  { label: 'Places Added', current: 24, target: 50, icon: MapPin },
  { label: 'Reviews Written', current: 67, target: 100, icon: Star },
  { label: 'Chats Completed', current: 18, target: 30, icon: MessageCircle },
];

const SuperUserScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-8">
      <div className="px-5 pt-6 pb-3 flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="w-9 h-9 rounded-full bg-muted flex items-center justify-center">
          <ArrowLeft size={18} />
        </button>
        <h1 className="text-lg font-extrabold">Super User</h1>
      </div>

      {/* Status Card */}
      <div className="mx-5 mt-2 p-5 rounded-2xl bg-gradient-to-br from-gold/20 to-primary/10 border border-gold/20">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
            <Crown size={24} className="text-gold" />
          </div>
          <div>
            <h2 className="font-extrabold">Super User Progress</h2>
            <p className="text-xs text-muted-foreground">68% complete</p>
          </div>
        </div>
        <div className="w-full h-2 rounded-full bg-muted">
          <div className="h-full rounded-full bg-gradient-to-r from-gold to-primary" style={{ width: '68%' }} />
        </div>
      </div>

      {/* Progress */}
      <div className="px-5 mt-6 space-y-3">
        <h2 className="font-bold text-sm">Progress Tracker</h2>
        {progressItems.map((item) => (
          <div key={item.label} className="p-3 rounded-xl bg-card shadow-card">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <item.icon size={14} className="text-primary" />
                <span className="text-sm font-semibold">{item.label}</span>
              </div>
              <span className="text-xs text-muted-foreground">{item.current}/{item.target}</span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-muted">
              <div className="h-full rounded-full bg-primary" style={{ width: `${(item.current / item.target) * 100}%` }} />
            </div>
          </div>
        ))}
      </div>

      {/* Badges */}
      <div className="px-5 mt-6">
        <h2 className="font-bold text-sm mb-3">Earned Badges</h2>
        <div className="grid grid-cols-3 gap-2">
          {badges.map((b) => (
            <div key={b.name} className={`p-3 rounded-xl text-center ${b.earned ? 'bg-card shadow-card' : 'bg-muted opacity-50'}`}>
              <span className="text-2xl">{b.icon}</span>
              <p className="text-[10px] font-semibold mt-1">{b.name}</p>
              {b.earned && <span className="text-[9px] text-primary font-bold">Earned ✓</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Leaderboard teaser */}
      <div className="mx-5 mt-6 p-4 rounded-2xl bg-secondary/10 border border-secondary/20">
        <div className="flex items-center gap-2 mb-1">
          <Trophy size={16} className="text-secondary" />
          <h3 className="text-sm font-bold">Leaderboard</h3>
        </div>
        <p className="text-xs text-muted-foreground">You're ranked #12 in Cairo. Keep contributing to climb!</p>
      </div>
    </div>
  );
};

export default SuperUserScreen;
