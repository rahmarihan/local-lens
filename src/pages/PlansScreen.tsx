import { useState } from 'react';
import { ArrowLeft, Check, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Explorer',
    price: 'Free',
    period: '',
    features: ['5 pins limit', '3 place submissions/month', 'Basic AI recommendations', 'Chat read-only after limit'],
    isCurrent: true,
    cta: 'Current Plan',
  },
  {
    name: 'Local',
    price: '$4.99',
    period: '/month',
    features: ['Unlimited pins', '20 place submissions/month', 'Full AI + chatbot', 'Full chat access', 'Exclusive locals-only hidden gems'],
    isCurrent: false,
    cta: 'Upgrade',
  },
  {
    name: 'Super Local',
    price: '$9.99',
    period: '/month',
    features: ['Everything in Local', 'Unlimited submissions', 'Priority search listing', 'Advanced AI insights', 'Super Local badge', 'Early access to features', 'Tip-receiving enabled'],
    isCurrent: false,
    cta: 'Upgrade',
  },
];

const PlansScreen = () => {
  const navigate = useNavigate();
  const [activePlan, setActivePlan] = useState(0);

  return (
    <div className="min-h-screen bg-background pb-8">
      <div className="px-5 pt-6 pb-3 flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="w-9 h-9 rounded-full bg-muted flex items-center justify-center">
          <ArrowLeft size={18} />
        </button>
        <h1 className="text-lg font-extrabold">Plans</h1>
      </div>

      {/* Freemium Banner */}
      <div className="mx-5 mt-2 p-3 rounded-xl bg-primary/10 border border-primary/20">
        <p className="text-xs font-semibold">3 of 5 free pins used — <span className="text-primary">Upgrade to unlock more</span></p>
        <div className="w-full h-1.5 rounded-full bg-muted mt-2">
          <div className="h-full rounded-full bg-primary" style={{ width: '60%' }} />
        </div>
      </div>

      {/* Plans carousel */}
      <div className="flex gap-4 overflow-x-auto scrollbar-hide px-5 mt-5 pb-4">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            whileTap={{ scale: 0.98 }}
            className={`flex-shrink-0 w-[280px] p-5 rounded-2xl border-2 transition-all ${
              plan.isCurrent ? 'border-primary bg-primary/5' : 'border-border bg-card'
            } shadow-card`}
          >
            <h3 className="font-extrabold text-lg">{plan.name}</h3>
            <div className="flex items-baseline gap-0.5 mt-1">
              <span className="text-2xl font-extrabold">{plan.price}</span>
              {plan.period && <span className="text-xs text-muted-foreground">{plan.period}</span>}
            </div>

            <div className="mt-4 space-y-2.5">
              {plan.features.map((f) => (
                <div key={f} className="flex items-start gap-2">
                  <Check size={14} className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-xs">{f}</span>
                </div>
              ))}
            </div>

            <button className={`w-full mt-5 py-3 rounded-xl text-sm font-bold ${
              plan.isCurrent
                ? 'bg-muted text-muted-foreground'
                : 'bg-primary text-primary-foreground'
            }`}>
              {plan.cta}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PlansScreen;
