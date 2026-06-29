import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Crown } from 'lucide-react';
import { useStore } from '../store/useStore';
import GlassCard from '../components/GlassCard';

const plans = [
  {
    id: 'free',
    name: 'Bepul',
    duration: 'Cheksiz',
    price: 0,
    dailyPrice: 0,
    features: [
      '50 so'z/kun',
      '1 test/kun',
      'Cheklangan AI',
      'Asosiy lug'at',
    ],
    isPopular: false,
  },
  {
    id: 'monthly',
    name: 'Oylik',
    duration: '1 oy',
    price: 39000,
    dailyPrice: 1300,
    features: [
      'Cheksiz so'z',
      'Cheksiz test',
      'Cheksiz AI suhbat',
      'Barcha video darslar',
    ],
    isPopular: true,
  },
  {
    id: 'exam',
    name: 'Imtihon Pass',
    duration: '6 oy',
    price: 159000,
    dailyPrice: 880,
    features: [
      'Barcha oylik imkoniyatlar',
      'Barcha mock imtihonlar',
      'AI baholash',
      'Yozish mashqlari',
    ],
    isPopular: false,
  },
  {
    id: 'full',
    name: 'To'liq Yo'l',
    duration: '18 oy',
    price: 390000,
    dailyPrice: 720,
    features: [
      'Barcha imtihon pass imkoniyatlari',
      'Video darslar (cheksiz)',
      'Maxsus nishonlar',
      'Reklama yo'q',
    ],
    isPopular: false,
  },
];

export default function SubscriptionPage() {
  const { user } = useStore();
  const [selectedPlan, setSelectedPlan] = useState('monthly');

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="text-center">
        <Crown size={48} className="mx-auto text-[var(--accent)] mb-3" />
        <h1 className="text-2xl font-black text-[var(--text-primary)]">Pro Tariflar</h1>
        <p className="text-[var(--text-secondary)]">O'rganishni kuchaytiring!</p>
      </div>

      {user?.isPro && (
        <div className="card bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white text-center py-4">
          <div className="flex items-center justify-center gap-2 mb-1">
            <Star size={20} fill="currentColor" />
            <span className="font-bold">Siz Pro foydalanuvchisiz!</span>
          </div>
          <p className="text-sm opacity-90">Pro muddati: {user.proExpiry || 'Cheksiz'}</p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            onClick={() => setSelectedPlan(plan.id)}
            className={`relative card cursor-pointer transition-all ${
              selectedPlan === plan.id ? 'border-[var(--primary)] border-2 ring-4 ring-[var(--primary)]/10' : ''
            } ${plan.isPopular ? 'sm:col-span-2 sm:max-w-sm sm:mx-auto' : ''}`}
          >
            {plan.isPopular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--accent)] text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                <Zap size={12} fill="currentColor" /> Eng mashhur
              </div>
            )}

            <div className="text-center mb-4">
              <h3 className="font-bold text-lg">{plan.name}</h3>
              <p className="text-sm text-[var(--text-secondary)]">{plan.duration}</p>
            </div>

            <div className="text-center mb-4">
              <span className="text-3xl font-black text-[var(--text-primary)]">
                {plan.price === 0 ? 'Bepul' : `${plan.price.toLocaleString()} so'm`}
              </span>
              {plan.price > 0 && (
                <p className="text-xs text-[var(--text-muted)]">Kuniga {plan.dailyPrice} so'm</p>
              )}
            </div>

            <div className="space-y-2 mb-4">
              {plan.features.map((feature, fi) => (
                <div key={fi} className="flex items-center gap-2 text-sm">
                  <Check size={16} className="text-[var(--secondary)] flex-shrink-0" />
                  <span className="text-[var(--text-secondary)]">{feature}</span>
                </div>
              ))}
            </div>

            <button
              className={`w-full py-3 rounded-xl font-bold transition-all ${
                selectedPlan === plan.id
                  ? 'btn-primary'
                  : 'bg-[var(--surface-hover)] text-[var(--text-secondary)] hover:bg-[var(--primary)]/10 hover:text-[var(--primary)]'
              }`}
            >
              {plan.price === 0 ? 'Bepul davom etish' : 'Tanlash'}
            </button>
          </motion.div>
        ))}
      </div>

      <GlassCard className="text-center py-4">
        <p className="text-sm text-[var(--text-secondary)]">
          To'lov usullari: Click, Payme, Uzcard, Telegram Stars
        </p>
      </GlassCard>
    </div>
  );
}