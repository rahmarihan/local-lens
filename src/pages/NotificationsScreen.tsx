import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { notifications } from '@/data/places';

const NotificationsScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-8">
      <div className="px-5 pt-6 pb-3 flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="w-9 h-9 rounded-full bg-muted flex items-center justify-center">
          <ArrowLeft size={18} />
        </button>
        <h1 className="text-lg font-extrabold">Notifications</h1>
      </div>

      <div className="px-5 space-y-2 mt-2">
        {notifications.map((n) => (
          <div key={n.id} className="flex items-start gap-3 p-3 rounded-xl bg-card shadow-card">
            <span className="text-2xl">{n.icon}</span>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-bold">{n.title}</h3>
              <p className="text-xs text-muted-foreground truncate">{n.subtitle}</p>
            </div>
            <span className="text-[10px] text-muted-foreground flex-shrink-0">{n.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationsScreen;
