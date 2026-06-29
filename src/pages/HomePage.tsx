import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Swords, Trophy, Zap, Brain, ChevronRight, Star, Target, Flame } from 'lucide-react';
import { useStore } from '../store/useStore';
import { getLevelProgress, formatNumber } from '../lib/utils';
import { WORDS, getRandomWords } from '../data/words';
import { TOPICS, getTopicsByLevel } from '../data/topics';
import FlipCard from '../components/FlipCard';
import ProgressBar from '../components/ProgressBar';
import LevelSelector from '../components/LevelSelector';
import GlassCard from '../components/GlassCard';
import XpPopup from '../components/XpPopup';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const { user, selectedLevel, setSelectedLevel, xpPopup, hideXpPopup, addXp } = useStore();
  const [dailyWord, setDailyWord] = useState(getRandomWords(1)[0]);
  const [showDaily, setShowDaily] = useState(true);
  const progress = getLevelProgress(user?.xp || 0);
  const topics = getTopicsByLevel(selectedLevel);

  const quickActions = [
    { icon: Brain, label: 'AI Mentor', desc: 'Suhbatlashish', path: '/mentor', color: 'from-blue-500 to-cyan-500' },
    { icon: BookOpen, label: 'Lug'at', desc: 'So'z o'rganish', path: '/dictionary', color: 'from-green-500 to-emerald-500' },
    { icon: Swords, label: 'Jang', desc: 'Bellashuv', path: '/battle', color: 'from-orange-500 to-red-500' },
    { icon: Trophy, label: 'Mock', desc: 'Imtihon', path: '/mock', color: 'from-purple-500 to-pink-500' },
  ];

  const stats = [
    { icon: Zap, label: 'XP', value: formatNumber(user?.xp || 0), color: 'text-yellow-500' },
    { icon: Star, label: 'So'zlar', value: formatNumber(user?.wordsLearned || 0), color: 'text-blue-500' },
    { icon: Target, label: 'Daraja', value: user?.level || 'A1', color: 'text-green-500' },
    { icon: Flame, label: 'Seriya', value: (user?.streak || 0) + ' kun', color: 'text-orange-500' },
  ];

  const handleLearnDaily = () => {
    addXp(5);
    setShowDaily(false);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* XP Popup */}
      <XpPopup amount={xpPopup.amount} isVisible={xpPopup.visible} onComplete={hideXpPopup} />

      {/* Welcome */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-6"
      >
        <h1 className="text-3xl font-black text-[var(--text-primary)] mb-2">
          Sprechen mit Spaß 🇩🇪
        </h1>
        <p className="text-[var(--text-secondary)]">Nemis tilini o'ynab o'rganing!</p>
      </motion.div>

      {/* Level Selector */}
      <div className="flex justify-center">
        <LevelSelector selected={selectedLevel} onSelect={setSelectedLevel} />
      </div>

      {/* Progress */}
      <GlassCard>
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="font-bold text-[var(--text-primary)]">{progress.title}</h3>
            <p className="text-sm text-[var(--text-secondary)]">Daraja {progress.level}</p>
          </div>
          <div className="text-right">
            <span className="text-2xl font-black text-[var(--primary)]">{Math.round(progress.progress)}%</span>
          </div>
        </div>
        <ProgressBar progress={progress.progress} height="h-3" />
        <p className="text-xs text-[var(--text-muted)] mt-2">
          Keyingi daraja: {progress.nextLevel} XP
        </p>
      </GlassCard>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-3">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="card flex flex-col items-center p-3"
          >
            <stat.icon size={24} className={stat.color} />
            <span className="text-lg font-black mt-1">{stat.value}</span>
            <span className="text-xs text-[var(--text-muted)]">{stat.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Daily Word */}
      {showDaily && dailyWord && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="card border-2 border-[var(--accent)]/30"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-[var(--accent)] flex items-center gap-2">
              <Star size={20} fill="currentColor" /> Kunlik so'z
            </h3>
            <button 
              onClick={handleLearnDaily}
              className="btn-sm btn-primary"
            >
              +5 XP
            </button>
          </div>
          <FlipCard 
            german={dailyWord.german}
            article={dailyWord.article}
            uzbek={dailyWord.uzbek}
            example={dailyWord.example}
            exampleUz={dailyWord.exampleUz}
          />
        </motion.div>
      )}

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3">
        {quickActions.map((action, i) => (
          <motion.div
            key={action.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.1 }}
          >
            <Link to={action.path}>
              <div className="card group cursor-pointer h-full">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform`}>
                  <action.icon size={24} />
                </div>
                <h3 className="font-bold text-[var(--text-primary)]">{action.label}</h3>
                <p className="text-sm text-[var(--text-secondary)]">{action.desc}</p>
                <div className="flex items-center text-[var(--primary)] text-sm mt-2 group-hover:translate-x-1 transition-transform">
                  Boshlash <ChevronRight size={16} />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Topics Preview */}
      <div>
        <h3 className="font-bold text-[var(--text-primary)] mb-3">Mavzular ({selectedLevel})</h3>
        <div className="space-y-2">
          {topics.slice(0, 5).map((topic, i) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="card flex items-center gap-4 p-3 cursor-pointer hover:translate-x-1 transition-transform"
            >
              <span className="text-2xl">{topic.icon}</span>
              <div className="flex-1">
                <h4 className="font-semibold text-sm">{topic.titleDe}</h4>
                <p className="text-xs text-[var(--text-secondary)]">{topic.titleUz}</p>
              </div>
              {topic.isLocked ? (
                <span className="text-xs bg-[var(--surface-hover)] px-2 py-1 rounded-full text-[var(--text-muted)]">🔒</span>
              ) : (
                <ChevronRight size={16} className="text-[var(--text-muted)]" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}