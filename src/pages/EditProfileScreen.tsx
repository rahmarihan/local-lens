import { useState } from 'react';
import { ArrowLeft, Camera } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

const interests = ['Food', 'Cafés', 'Hidden Gems', 'Art', 'Nature', 'Nightlife', 'History', 'Shopping'];

const EditProfileScreen = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('Ahmed Mostafa');
  const [bio, setBio] = useState('Exploring Cairo one hidden gem at a time ✨');
  const [email, setEmail] = useState('ahmed@example.com');
  const [location, setLocation] = useState('Cairo, Egypt');
  const [selected, setSelected] = useState<string[]>(['Food', 'Hidden Gems', 'Art']);

  const toggle = (i: string) =>
    setSelected((prev) => (prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]));

  const handleSave = () => {
    toast({ title: 'Profile updated', description: 'Your changes have been saved.' });
    navigate('/profile');
  };

  return (
    <div className="min-h-screen bg-background pb-8">
      <div className="px-5 pt-6 pb-3 flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="w-9 h-9 rounded-full bg-muted flex items-center justify-center">
          <ArrowLeft size={18} />
        </button>
        <h1 className="text-lg font-extrabold">Edit Profile</h1>
      </div>

      <div className="px-5 mt-4">
        {/* Avatar */}
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-4xl">🧑🏽</div>
            <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-md">
              <Camera size={14} />
            </button>
          </div>
          <button className="mt-2 text-xs font-semibold text-primary">Change photo</button>
        </div>

        {/* Form */}
        <div className="mt-6 space-y-4">
          <div>
            <label className="text-xs font-semibold text-muted-foreground">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-1 px-4 py-3 rounded-xl bg-muted text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-muted-foreground">Bio</label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full mt-1 px-4 py-3 rounded-xl bg-muted text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none h-20"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-muted-foreground">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-4 py-3 rounded-xl bg-muted text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-muted-foreground">Location</label>
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full mt-1 px-4 py-3 rounded-xl bg-muted text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-muted-foreground">Interests</label>
            <div className="flex flex-wrap gap-2 mt-2">
              {interests.map((i) => (
                <button
                  key={i}
                  onClick={() => toggle(i)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    selected.includes(i)
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {i}
                </button>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={handleSave}
          className="w-full mt-8 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default EditProfileScreen;
