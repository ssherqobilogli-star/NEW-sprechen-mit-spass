import { useState } from 'react';
import { motion } from 'framer-motion';
import { Swords, Users, Trophy, Zap, Clock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useStore } from '../store/useStore';
import LevelSelector from '../components/LevelSelector';
import GlassCard from '../components/GlassCard';

const battleModes = [
  {
    id: 'daily',
    icon: Clock,
    title: 'Kunlik Turnir',
    desc: 'Har kuni 10 ta savol. Barcha bir xil!',
    color: 'from-blue-500 to-cyan-500',
    players: '1,234',
  },
  {
    id: 'live',
    icon: Swords,
    title: 'Jonli Jang',
    desc: 'Real-time raqib bilan bellashing!',
    color: 'from-red-500 to-orange-500',
    players: '89 online',
  },
  {
    id: 'friend',
    icon: Users,
    title: 'Do'st bilan',
    desc: 'Havola orqali do'stingizni chaqiring',
    color: 'from-green-500 to-emerald-500',
    players: 'Play',
  },
];

const leaderboardPreview = [
  { rank: 1, name: 'Azizbek', xp: 4520, avatar: 'A' },
  { rank: 2, name: 'Malika', xp: 3890, avatar: 'M' },
  { rank: 3, name: 'Jasur', xp: 3210, avatar: 'J' },
];

export default function BattlePage() {
  const { selectedLevel, setSelectedLevel } = useStore();

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-black text-[var(--text-primary)]">Bellashuv</h1>

      <LevelSelector selected={selectedLevel} onSelect={setSelectedLevel} />

      {/* Battle Modes */}
      <div className="space-y-3">
        {battleModes.map((mode, i) => (
          <motion.div
            key={mode.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Link to={mode.id === 'daily' ? '/battle/game' : '#'}>
              <GlassCard className="flex items-center gap-4 cursor-pointer group hover:translate-x-1 transition-transform">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${mode.color} flex items-center justify-center text-white shadow-lg`}>
                  <mode.icon size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors">
                    {mode.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">{mode.desc}</p>
                  <div className="flex items-center gap-1 mt-1 text-xs text-[var(--text-muted)]">
                    <Users size={12} />
                    <span>{mode.players}</span>
                  </div>
                </div>
                <ChevronRight size={20} className="text-[var(--text-muted)] group-hover:text-[var(--primary)] transition-colors" />
              </GlassCard>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        <GlassCard className="text-center">
          <Trophy size={24} className="mx-auto text-[var(--accent)] mb-2" />
          <div className="text-2xl font-black">12</div>
          <div className="text-xs text-[var(--text-secondary)]">G'alaba</div>
        </GlassCard>
        <GlassCard className="text-center">
          <Zap size={24} className="mx-auto text-[var(--primary)] mb-2" />
          <div className="text-2xl font-black">89%</div>
          <div className="text-xs text-[var(--text-secondary)]">To'g'ri</div>
        </GlassCard>
        <GlassCard className="text-center">
          <Swords size={24} className="mx-auto text-[var(--secondary)] mb-2" />
          <div className="text-2xl font-black">45</div>
          <div className="text-xs text-[var(--text-secondary)]">Jang</div>
        </GlassCard>
      </div>

      {/* Leaderboard Preview */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-[var(--text-primary)]">Haftalik Reyting</h3>
          <Link to="/leaderboard" className="text-sm text-[var(--primary)] hover:underline">
            Barchasi
          </Link>
        </div>
        <div className="space-y-2">
          {leaderboardPreview.map((entry, i) => (
            <motion.div
              key={entry.rank}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="card flex items-center gap-3 p-3"
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                entry.rank === 1 ? 'bg-yellow-100 text-yellow-600' :
                entry.rank === 2 ? 'bg-gray-100 text-gray-600' :
                entry.rank === 3 ? 'bg-orange-100 text-orange-600' :
                'bg-[var(--surface-hover)] text-[var(--text-muted)]'
              }`}>
                {entry.rank}
              </div>
              <div className="w-10 h-10 rounded-full bg-[var(--primary)] flex items-center justify-center text-white font-bold">
                {entry.avatar}
              </div>
              <div className="flex-1">
                <div className="font-semibold">{entry.name}</div>
              </div>
              <div className="flex items-center gap-1 text-[var(--accent)] font-bold">
                <Zap size={14} fill="currentColor" />
                {entry.xp}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}