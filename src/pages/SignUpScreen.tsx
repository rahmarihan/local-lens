import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, MapPin, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const interests = ['Food', 'Cafés', 'Hidden Gems', 'Art', 'Nature', 'Nightlife', 'Shopping', 'History'];

const SignUpScreen = () => {
  const navigate = useNavigate();
  const [showPw, setShowPw] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const toggleInterest = (i: string) =>
    setSelected((prev) => (prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]));

  const handleSubmit = () => {
    const errs: Record<string, string> = {};
    if (!form.name) errs.name = 'Name is required';
    if (!form.email) errs.email = 'Email is required';
    if (!form.password || form.password.length < 6) errs.password = 'Password must be at least 6 characters';
    if (selected.length === 0) errs.interests = 'Select at least one interest';
    setErrors(errs);
    if (Object.keys(errs).length === 0) navigate('/home');
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen bg-background px-6 pt-4 pb-8">
      <button onClick={() => navigate('/')} className="w-9 h-9 rounded-full bg-muted flex items-center justify-center mb-4">
        <ArrowLeft size={18} />
      </button>

      <div className="flex items-center gap-2 mb-1">
        <MapPin size={20} className="text-primary" />
        <span className="text-lg font-extrabold">LikeALocal</span>
      </div>
      <h1 className="text-2xl font-extrabold mt-4">Create Account</h1>
      <p className="text-muted-foreground text-sm mt-1">Join the community of local explorers</p>

      <div className="mt-6 space-y-4">
        {(['name', 'email', 'password'] as const).map((field) => (
          <div key={field}>
            <label className="text-xs font-semibold capitalize text-muted-foreground">{field}</label>
            <div className="relative mt-1">
              <input
                type={field === 'password' ? (showPw ? 'text' : 'password') : field === 'email' ? 'email' : 'text'}
                placeholder={field === 'name' ? 'Your full name' : field === 'email' ? 'you@example.com' : '••••••••'}
                value={form[field]}
                onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                className={`w-full px-4 py-3 rounded-xl bg-muted text-sm border ${errors[field] ? 'border-destructive' : 'border-transparent'} focus:outline-none focus:ring-2 focus:ring-primary/30`}
              />
              {field === 'password' && (
                <button onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  {showPw ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              )}
            </div>
            {errors[field] && <p className="text-destructive text-xs mt-1">{errors[field]}</p>}
          </div>
        ))}

        <div>
          <label className="text-xs font-semibold text-muted-foreground">Your Interests</label>
          <div className="flex flex-wrap gap-2 mt-2">
            {interests.map((i) => (
              <button
                key={i}
                onClick={() => toggleInterest(i)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  selected.includes(i) ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                }`}
              >
                {i}
              </button>
            ))}
          </div>
          {errors.interests && <p className="text-destructive text-xs mt-1">{errors.interests}</p>}
        </div>

        <button onClick={handleSubmit} className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-bold text-sm mt-4">
          Create Account
        </button>

        <div className="flex items-center gap-3 my-4">
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs text-muted-foreground">or</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="space-y-2">
          <button className="w-full py-3 rounded-xl border border-border font-semibold text-sm flex items-center justify-center gap-2">
            <span>🍎</span> Continue with Apple
          </button>
          <button className="w-full py-3 rounded-xl border border-border font-semibold text-sm flex items-center justify-center gap-2">
            <span>G</span> Continue with Google
          </button>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-4">
          Already have an account?{' '}
          <button onClick={() => navigate('/login')} className="text-primary font-semibold">Log In</button>
        </p>
      </div>
    </motion.div>
  );
};

export default SignUpScreen;
