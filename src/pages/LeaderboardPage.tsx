import { motion } from 'framer-motion';
import { Trophy, Zap, Flame, Crown, Medal } from 'lucide-react';
import { useStore } from '../store/useStore';
import LevelSelector from '../components/LevelSelector';
import GlassCard from '../components/GlassCard';

const MOCK_LEADERBOARD = [
  { rank: 1, name: 'Azizbek', xp: 4520, streak: 45, avatar: 'A', country: '🇺🇿' },
  { rank: 2, name: 'Malika', xp: 3890, streak: 32, avatar: 'M', country: '🇺🇿' },
  { rank: 3, name: 'Jasur', xp: 3210, streak: 28, avatar: 'J', country: '🇺🇿' },
  { rank: 4, name: 'Nodira', xp: 2980, streak: 21, avatar: 'N', country: '🇺🇿' },
  { rank: 5, name: 'Bekzod', xp: 2650, streak: 18, avatar: 'B', country: '🇺🇿' },
  { rank: 6, name: 'Dilnoza', xp: 2340, streak: 15, avatar: 'D', country: '🇺🇿' },
  { rank: 7, name: 'Shohruh', xp: 2100, streak: 12, avatar: 'S', country: '🇺🇿' },
  { rank: 8, name: 'Gulnora', xp: 1890, streak: 10, avatar: 'G', country: '🇺🇿' },
  { rank: 9, name: 'Temur', xp: 1650, streak: 8, avatar: 'T', country: '🇺🇿' },
  { rank: 10, name: 'Zarina', xp: 1420, streak: 7, avatar: 'Z', country: '🇺🇿' },
];

export default function LeaderboardPage() {
  const { selectedLevel, setSelectedLevel, user } = useStore();

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Crown size={20} className="text-yellow-500" />;
    if (rank === 2) return <Medal size={20} className="text-gray-400" />;
    if (rank === 3) return <Medal size={20} className="text-orange-400" />;
    return <span className="text-sm font-bold text-[var(--text-muted)] w-5 text-center">{rank}</span>;
  };

  const getRankBg = (rank: number) => {
    if (rank === 1) return 'bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200';
    if (rank === 2) return 'bg-gradient-to-r from-gray-50 to-gray-100 border-gray-200';
    if (rank === 3) return 'bg-gradient-to-r from-orange-50 to-amber-50 border-orange-200';
    return 'bg-[var(--surface)]';
  };

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <div className="text-center">
        <Trophy size={48} className="mx-auto text-[var(--accent)] mb-3" />
        <h1 className="text-2xl font-black text-[var(--text-primary)]">Reyting</h1>
        <p className="text-[var(--text-secondary)]">Eng faol o'quvchilar</p>
      </div>

      <LevelSelector selected={selectedLevel} onSelect={setSelectedLevel} />

      {/* Top 3 Podium */}
      <div className="flex items-end justify-center gap-4 py-4">
        {[2, 1, 3].map((pos) => {
          const entry = MOCK_LEADERBOARD.find(e => e.rank === pos);
          if (!entry) return null;

          const heights = { 1: 'h-32', 2: 'h-24', 3: 'h-20' };
          const colors = { 1: 'from-yellow-400 to-orange-400', 2: 'from-gray-300 to-gray-400', 3: 'from-orange-300 to-amber-400' };

          return (
            <motion.div
              key={pos}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: pos * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${colors[pos as keyof typeof colors]} flex items-center justify-center text-white font-bold text-lg mb-2 shadow-lg`}>
                {entry.avatar}
              </div>
              <div className={`${heights[pos as keyof typeof heights]} w-20 rounded-t-xl bg-gradient-to-t ${colors[pos as keyof typeof colors]} opacity-80 flex items-end justify-center pb-2`}>
                <span className="text-white font-bold">{pos}</span>
              </div>
              <p className="text-sm font-bold mt-2">{entry.name}</p>
              <p className="text-xs text-[var(--text-muted)]">{entry.xp} XP</p>
            </motion.div>
          );
        })}
      </div>

      {/* Full List */}
      <div className="space-y-2">
        {MOCK_LEADERBOARD.map((entry, i) => (
          <motion.div
            key={entry.rank}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className={`card flex items-center gap-3 p-3 ${getRankBg(entry.rank)} ${
              user?.username === entry.name ? 'border-[var(--primary)] border-2' : ''
            }`}
          >
            <div className="w-8 flex justify-center">
              {getRankIcon(entry.rank)}
            </div>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm ${
              entry.rank <= 3 ? 'bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)]' : 'bg-[var(--surface-hover)] text-[var(--text-primary)]'
            }`}>
              {entry.avatar}
            </div>
            <div className="flex-1">
              <div className="font-semibold text-sm">{entry.name}</div>
              <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                <span className="flex items-center gap-1"><Flame size={12} className="text-orange-500" /> {entry.streak}</span>
              </div>
            </div>
            <div className="flex items-center gap-1 text-[var(--accent)] font-bold">
              <Zap size={14} fill="currentColor" />
              {entry.xp}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}