import { ArrowLeft, ChevronRight, Bell, MessageCircle, Shield, User, Moon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SettingsScreen = () => {
  const navigate = useNavigate();
  const [allowChats, setAllowChats] = useState(true);
  const [pushNotifs, setPushNotifs] = useState(true);
  const [nearbyAlerts, setNearbyAlerts] = useState(true);

  const Toggle = ({ value, onChange }: { value: boolean; onChange: (v: boolean) => void }) => (
    <button onClick={() => onChange(!value)} className={`w-11 h-6 rounded-full transition-colors ${value ? 'bg-primary' : 'bg-muted'} relative`}>
      <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-background shadow-sm transition-transform ${value ? 'left-[22px]' : 'left-0.5'}`} />
    </button>
  );

  return (
    <div className="min-h-screen bg-background pb-8">
      <div className="px-5 pt-6 pb-3 flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="w-9 h-9 rounded-full bg-muted flex items-center justify-center">
          <ArrowLeft size={18} />
        </button>
        <h1 className="text-lg font-extrabold">Settings</h1>
      </div>

      <div className="px-5 mt-4 space-y-6">
        <section>
          <h2 className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">Chat & Privacy</h2>
          <div className="space-y-1">
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center gap-3"><MessageCircle size={16} className="text-primary" /><span className="text-sm">Allow chats from others</span></div>
              <Toggle value={allowChats} onChange={setAllowChats} />
            </div>
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center gap-3"><Shield size={16} className="text-primary" /><span className="text-sm">Chat available hours</span></div>
              <span className="text-xs text-muted-foreground">9 AM - 10 PM</span>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">Notifications</h2>
          <div className="space-y-1">
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center gap-3"><Bell size={16} className="text-primary" /><span className="text-sm">Push notifications</span></div>
              <Toggle value={pushNotifs} onChange={setPushNotifs} />
            </div>
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center gap-3"><Bell size={16} className="text-primary" /><span className="text-sm">Nearby place alerts</span></div>
              <Toggle value={nearbyAlerts} onChange={setNearbyAlerts} />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">Account</h2>
          <div className="space-y-1">
            {[
              { icon: User, label: 'Edit Profile' },
              { icon: Shield, label: 'Privacy Policy' },
              { icon: Moon, label: 'Dark Mode' },
            ].map((item) => (
              <button key={item.label} className="w-full flex items-center justify-between py-3">
                <div className="flex items-center gap-3"><item.icon size={16} className="text-primary" /><span className="text-sm">{item.label}</span></div>
                <ChevronRight size={16} className="text-muted-foreground" />
              </button>
            ))}
          </div>
        </section>

        <button className="w-full py-3 rounded-xl border border-destructive text-destructive text-sm font-semibold">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default SettingsScreen;
