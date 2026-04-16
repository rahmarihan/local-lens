import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ChevronRight } from 'lucide-react';
import onboarding1 from '@/assets/onboarding-1.jpg';
import onboarding2 from '@/assets/onboarding-2.jpg';
import onboarding3 from '@/assets/onboarding-3.jpg';

const slides = [
  { image: onboarding1, title: 'Discover Hidden Gems', subtitle: 'Find secret spots that only locals know about — from tucked-away cafés to ancient gardens.' },
  { image: onboarding2, title: 'Share Local Tips', subtitle: 'Connect with a community of explorers and share your favorite discoveries with the world.' },
  { image: onboarding3, title: 'Get AI Recommendations', subtitle: 'Our smart guide learns your taste and suggests the perfect spots — tailored just for you.' },
];

const SplashScreen = ({ onFinish }: { onFinish: () => void }) => (
  <motion.div
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-primary"
    onClick={onFinish}
  >
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
      className="flex flex-col items-center"
    >
      <div className="w-20 h-20 rounded-2xl bg-primary-foreground/20 flex items-center justify-center mb-4">
        <MapPin size={40} className="text-primary-foreground" />
      </div>
      <h1 className="text-3xl font-extrabold text-primary-foreground tracking-tight">LikeALocal</h1>
      <p className="text-primary-foreground/70 text-sm mt-1">Explore like you belong</p>
    </motion.div>
  </motion.div>
);

const OnboardingScreen = () => {
  const navigate = useNavigate();
  const [showSplash, setShowSplash] = useState(true);
  const [current, setCurrent] = useState(0);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <AnimatePresence>
        {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col min-h-screen"
        >
          <div className="relative h-[55vh] overflow-hidden">
            <img src={slides[current].image} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          </div>

          <div className="flex-1 px-6 pt-4 pb-8 flex flex-col">
            <h2 className="text-2xl font-extrabold">{slides[current].title}</h2>
            <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{slides[current].subtitle}</p>

            <div className="flex gap-2 mt-6">
              {slides.map((_, i) => (
                <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-primary' : 'w-4 bg-muted'}`} />
              ))}
            </div>

            <div className="mt-auto flex gap-3">
              {current < slides.length - 1 ? (
                <>
                  <button onClick={() => navigate('/signup')} className="flex-1 py-3.5 text-sm font-semibold text-muted-foreground">
                    Skip
                  </button>
                  <button
                    onClick={() => setCurrent(current + 1)}
                    className="flex-1 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm flex items-center justify-center gap-1"
                  >
                    Next <ChevronRight size={16} />
                  </button>
                </>
              ) : (
                <button
                  onClick={() => navigate('/signup')}
                  className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-bold text-sm animate-pulse-glow"
                >
                  Get Started
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default OnboardingScreen;
