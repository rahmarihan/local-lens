import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, MapPin, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const LoginScreen = () => {
  const navigate = useNavigate();
  const [showPw, setShowPw] = useState(false);
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleLogin = () => {
    const errs: Record<string, string> = {};
    if (!form.email) errs.email = 'Email is required';
    if (!form.password) errs.password = 'Incorrect password';
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
      <h1 className="text-2xl font-extrabold mt-4">Welcome Back</h1>
      <p className="text-muted-foreground text-sm mt-1">Log in to continue exploring</p>

      <div className="mt-8 space-y-4">
        <div>
          <label className="text-xs font-semibold text-muted-foreground">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={`w-full mt-1 px-4 py-3 rounded-xl bg-muted text-sm border ${errors.email ? 'border-destructive' : 'border-transparent'} focus:outline-none focus:ring-2 focus:ring-primary/30`}
          />
          {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="text-xs font-semibold text-muted-foreground">Password</label>
          <div className="relative mt-1">
            <input
              type={showPw ? 'text' : 'password'}
              placeholder="••••••••"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className={`w-full px-4 py-3 rounded-xl bg-muted text-sm border ${errors.password ? 'border-destructive' : 'border-transparent'} focus:outline-none focus:ring-2 focus:ring-primary/30`}
            />
            <button onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              {showPw ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          {errors.password && <p className="text-destructive text-xs mt-1">{errors.password}</p>}
        </div>

        <button className="text-primary text-xs font-semibold">Forgot Password?</button>

        <button onClick={handleLogin} className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-bold text-sm">
          Log In
        </button>

        <p className="text-center text-sm text-muted-foreground mt-4">
          Don't have an account?{' '}
          <button onClick={() => navigate('/signup')} className="text-primary font-semibold">Sign Up</button>
        </p>
      </div>
    </motion.div>
  );
};

export default LoginScreen;
