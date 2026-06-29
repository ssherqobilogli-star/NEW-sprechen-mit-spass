import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Clock, Lock, BookOpen, Headphones, PenLine, Mic, ChevronRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useStore } from '../store/useStore';
import LevelSelector from '../components/LevelSelector';
import GlassCard from '../components/GlassCard';

const modules = [
  { id: 'reading', name: 'Lesen', nameUz: 'O'qish', icon: BookOpen, duration: 25, questions: 15, color: 'from-blue-500 to-cyan-500' },
  { id: 'listening', name: 'Hören', nameUz: 'Tinglash', icon: Headphones, duration: 20, questions: 15, color: 'from-green-500 to-emerald-500' },
  { id: 'writing', name: 'Schreiben', nameUz: 'Yozish', icon: PenLine, duration: 20, questions: 2, color: 'from-orange-500 to-red-500' },
  { id: 'speaking', name: 'Sprechen', nameUz: 'Gapirish', icon: Mic, duration: 15, questions: 3, color: 'from-purple-500 to-pink-500' },
];

const mockExams = [
  { id: 'm1', title: 'Goethe-Zertifikat A1', level: 'A1', setNumber: 1, isPro: false, price: 0 },
  { id: 'm2', title: 'Goethe-Zertifikat A2', level: 'A2', setNumber: 1, isPro: false, price: 0 },
  { id: 'm3', title: 'Goethe-Zertifikat B1', level: 'B1', setNumber: 1, isPro: true, price: 19000 },
  { id: 'm4', title: 'Goethe-Zertifikat B2', level: 'B2', setNumber: 1, isPro: true, price: 19000 },
];

export default function MockExamPage() {
  const { selectedLevel, setSelectedLevel, user } = useStore();
  const [activeTab, setActiveTab] = useState<'full' | 'module'>('full');

  const filteredExams = mockExams.filter(e => e.level === selectedLevel);

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-black text-[var(--text-primary)]">Mock Imtihon</h1>

      <LevelSelector selected={selectedLevel} onSelect={setSelectedLevel} />

      {/* Tabs */}
      <div className="flex gap-2 bg-[var(--surface-hover)] p-1 rounded-xl">
        <button
          onClick={() => setActiveTab('full')}
          className={`flex-1 py-2.5 rounded-lg font-semibold text-sm transition-all ${
            activeTab === 'full' ? 'bg-[var(--surface)] text-[var(--primary)] shadow-sm' : 'text-[var(--text-muted)]'
          }`}
        >
          To'liq Mock
        </button>
        <button
          onClick={() => setActiveTab('module')}
          className={`flex-1 py-2.5 rounded-lg font-semibold text-sm transition-all ${
            activeTab === 'module' ? 'bg-[var(--surface)] text-[var(--primary)] shadow-sm' : 'text-[var(--text-muted)]'
          }`}
        >
          Alohida Modul
        </button>
      </div>

      {activeTab === 'full' ? (
        <div className="space-y-4">
          {filteredExams.map((exam, i) => (
            <motion.div
              key={exam.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link to={exam.isPro && !user?.isPro ? '/subscription' : `/mock/${exam.id}`}>
                <GlassCard className="flex items-center gap-4 cursor-pointer group hover:translate-x-1 transition-transform">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center text-white">
                    <FileText size={28} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors">
                        {exam.title}
                      </h3>
                      {exam.isPro && (
                        <span className="text-xs bg-[var(--accent)] text-white px-2 py-0.5 rounded-full flex items-center gap-1">
                          <Lock size={10} /> PRO
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-[var(--text-secondary)]">
                      4 modul • 80 daqiqa • {exam.level}
                    </p>
                  </div>
                  <div className="text-right">
                    {exam.isPro ? (
                      <div className="text-[var(--accent)] font-bold">{exam.price.toLocaleString()} so'm</div>
                    ) : (
                      <div className="text-green-500 font-bold">Bepul</div>
                    )}
                  </div>
                  <ChevronRight size={20} className="text-[var(--text-muted)]" />
                </GlassCard>
              </Link>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {modules.map((module, i) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="card cursor-pointer hover:translate-y-[-4px] transition-transform h-full">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${module.color} flex items-center justify-center text-white mb-3`}>
                  <module.icon size={24} />
                </div>
                <h3 className="font-bold text-[var(--text-primary)]">{module.name}</h3>
                <p className="text-sm text-[var(--text-secondary)]">{module.nameUz}</p>
                <div className="flex items-center gap-3 mt-3 text-xs text-[var(--text-muted)]">
                  <span className="flex items-center gap-1"><Clock size={12} /> {module.duration} min</span>
                  <span className="flex items-center gap-1"><FileText size={12} /> {module.questions} ta</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Info */}
      <GlassCard className="text-center py-6">
        <Star size={32} className="mx-auto text-[var(--accent)] mb-3" />
        <h3 className="font-bold mb-2">AI Baholash</h3>
        <p className="text-sm text-[var(--text-secondary)]">
          Yozish va gapirish qismlarini AI avtomatik baholaydi.<br/>
          Grammatika, lug'at va tuzilma bo'yicha tahlil.
        </p>
      </GlassCard>
    </div>
  );
}