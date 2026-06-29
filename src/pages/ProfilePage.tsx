import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Zap, Flame, BookOpen, Trophy, Settings, ChevronRight, Star, Target, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { getLevelProgress, formatNumber } from '../lib/utils';
import ProgressBar from '../components/ProgressBar';
import Badge from '../components/Badge';
import GlassCard from '../components/GlassCard';

const badges = [
  { id: 'b1', icon: Flame, label: '7 kun seriya', color: 'accent' as const, isLocked: false },
  { id: 'b2', icon: Star, label: '100 so'z', color: 'primary' as const, isLocked: true },
  { id: 'b3', icon: Trophy, label: 'A1 tugatdi', color: 'secondary' as const, isLocked: true },
  { id: 'b4', icon: Award, label: 'Haftalik 1', color: 'accent' as const, isLocked: true },
];

const activityData = Array.from({ length: 35 }, (_, i) => ({
  day: i,
  xp: Math.random() > 0.3 ? Math.floor(Math.random() * 50) : 0,
}));

export default function ProfilePage() {
  const { user } = useStore();
  const [activeTab, setActiveTab] = useState<'stats' | 'badges' | 'activity'>('stats');
  const progress = getLevelProgress(user?.xp || 0);

  const stats = [
    { icon: Zap, label: 'Jami XP', value: formatNumber(user?.xp || 0) },
    { icon: BookOpen, label: 'So'zlar', value: formatNumber(user?.wordsLearned || 0) },
    { icon: Target, label: 'Testlar', value: '12' },
    { icon: Trophy, label: 'Janglar', value: '8' },
  ];

  const getActivityColor = (xp: number) => {
    if (xp === 0) return 'bg-[var(--surface-hover)]';
    if (xp < 20) return 'bg-green-200';
    if (xp < 40) return 'bg-green-400';
    return 'bg-green-600';
  };

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      {/* Profile Header */}
      <div className="text-center">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center text-white text-3xl font-black mx-auto mb-4 shadow-lg">
          {user?.firstName?.[0] || user?.username?.[0] || 'S'}
        </div>
        <h1 className="text-xl font-black text-[var(--text-primary)]">
          {user?.firstName || user?.username || 'Mehmon'}
        </h1>
        <p className="text-[var(--text-secondary)]">@{user?.username || 'username'}</p>

        <div className="flex items-center justify-center gap-2 mt-3">
          <span className="px-3 py-1 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-sm font-bold">
            {user?.level || 'A1'}
          </span>
          <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-bold flex items-center gap-1">
            <Flame size={14} fill="currentColor" /> {user?.streak || 0} kun
          </span>
        </div>
      </div>

      {/* Level Progress */}
      <GlassCard>
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="font-bold">{progress.title}</h3>
            <p className="text-xs text-[var(--text-secondary)]">Daraja {progress.level}</p>
          </div>
          <span className="text-2xl font-black text-[var(--primary)]">{Math.round(progress.progress)}%</span>
        </div>
        <ProgressBar progress={progress.progress} height="h-3" />
        <p className="text-xs text-[var(--text-muted)] mt-2">
          {user?.xp || 0} / {progress.nextLevel} XP
        </p>
      </GlassCard>

      {/* Tabs */}
      <div className="flex gap-2 bg-[var(--surface-hover)] p-1 rounded-xl">
        {(['stats', 'badges', 'activity'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${
              activeTab === tab ? 'bg-[var(--surface)] text-[var(--primary)] shadow-sm' : 'text-[var(--text-muted)]'
            }`}
          >
            {tab === 'stats' ? 'Statistika' : tab === 'badges' ? 'Nishonlar' : 'Faollik'}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === 'stats' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-2 gap-3"
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="card text-center p-4">
              <stat.icon size={24} className="mx-auto text-[var(--primary)] mb-2" />
              <div className="text-2xl font-black">{stat.value}</div>
              <div className="text-xs text-[var(--text-secondary)]">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      )}

      {activeTab === 'badges' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-2 gap-3"
        >
          {badges.map((badge) => (
            <Badge
              key={badge.id}
              icon={badge.icon}
              label={badge.label}
              color={badge.color}
              isLocked={badge.isLocked}
            />
          ))}
        </motion.div>
      )}

      {activeTab === 'activity' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="card"
        >
          <h3 className="font-bold mb-4">Faollik grafigi</h3>
          <div className="grid grid-cols-7 gap-1">
            {activityData.map((day, i) => (
              <div
                key={i}
                className={`aspect-square rounded-sm ${getActivityColor(day.xp)} hover:ring-2 hover:ring-[var(--primary)] transition-all cursor-pointer`}
                title={`${day.xp} XP`}
              />
            ))}
          </div>
          <div className="flex items-center justify-between mt-3 text-xs text-[var(--text-muted)]">
            <span>Kam</span>
            <div className="flex gap-1">
              <div className="w-3 h-3 bg-[var(--surface-hover)] rounded-sm" />
              <div className="w-3 h-3 bg-green-200 rounded-sm" />
              <div className="w-3 h-3 bg-green-400 rounded-sm" />
              <div className="w-3 h-3 bg-green-600 rounded-sm" />
            </div>
            <span>Ko'p</span>
          </div>
        </motion.div>
      )}

      {/* Settings Link */}
      <Link to="/settings">
        <div className="card flex items-center gap-3 cursor-pointer hover:translate-x-1 transition-transform">
          <Settings size={20} className="text-[var(--text-secondary)]" />
          <span className="flex-1 font-medium">Sozlamalar</span>
          <ChevronRight size={20} className="text-[var(--text-muted)]" />
        </div>
      </Link>
    </div>
  );
}