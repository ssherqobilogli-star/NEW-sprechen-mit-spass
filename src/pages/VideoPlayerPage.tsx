import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Play, Pause, Volume2, Maximize, SkipBack, SkipForward, Settings } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import AudioButton from '../components/AudioButton';

const MOCK_TRANSCRIPT = [
  { time: '00:00', text: 'Hallo! Willkommen zur Deutsch-Stunde.', translation: 'Salom! Nemis darsiga xush kelibsiz.' },
  { time: '00:05', text: 'Heute lernen wir Begrüßungen.', translation: 'Bugun salomlashishni o'rganamiz.' },
  { time: '00:10', text: 'Wie sagt man "Guten Morgen"?', translation: '"Xayrli tong" qanday aytiladi?' },
  { time: '00:15', text: 'Guten Morgen bedeutet auf Uzbekisch...', translation: 'Xayrli tong o'zbekchada...' },
];

const MOCK_VOCAB = [
  { word: 'Hallo', article: undefined, translation: 'Salom', pronunciation: 'HA-lo' },
  { word: 'Guten Morgen', article: undefined, translation: 'Xayrli tong', pronunciation: 'GUU-ten MOR-gen' },
  { word: 'Willkommen', article: undefined, translation: 'Xush kelibsiz', pronunciation: 'VIL-ko-men' },
];

export default function VideoPlayerPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'transcript' | 'vocab'>('transcript');
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {/* Back Button */}
      <button 
        onClick={() => navigate('/learn')}
        className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
      >
        <ArrowLeft size={20} />
        <span>Orqaga</span>
      </button>

      {/* Video Player */}
      <div className="relative aspect-video bg-black rounded-2xl overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white/50">YouTube Video: {id}</p>
        </div>

        {/* Controls Overlay */}
        <div className="absolute inset-0 flex flex-col justify-between p-4 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity">
          <div className="flex justify-end gap-2">
            <button className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30">
              <Settings size={18} />
            </button>
          </div>

          <div className="flex items-center justify-center gap-4">
            <button className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30">
              <SkipBack size={24} />
            </button>
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-14 h-14 rounded-full bg-white/90 text-black flex items-center justify-center hover:scale-110 transition-transform"
            >
              {isPlaying ? <Pause size={28} /> : <Play size={28} className="ml-1" />}
            </button>
            <button className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30">
              <SkipForward size={24} />
            </button>
          </div>

          <div className="space-y-2">
            <div className="h-1 bg-white/30 rounded-full cursor-pointer">
              <div className="h-full w-1/3 bg-[var(--primary)] rounded-full" />
            </div>
            <div className="flex items-center justify-between text-white text-sm">
              <div className="flex items-center gap-3">
                <span>01:23 / 05:00</span>
                <button className="hover:text-[var(--primary)]"><Volume2 size={18} /></button>
              </div>
              <div className="flex items-center gap-2">
                <select 
                  value={speed} 
                  onChange={(e) => setSpeed(Number(e.target.value))}
                  className="bg-white/20 rounded px-2 py-1 text-sm"
                >
                  <option value={0.5}>0.5x</option>
                  <option value={0.75}>0.75x</option>
                  <option value={1}>1x</option>
                  <option value={1.25}>1.25x</option>
                  <option value={1.5}>1.5x</option>
                  <option value={2}>2x</option>
                </select>
                <button><Maximize size={18} /></button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2">
        <button
          onClick={() => setActiveTab('transcript')}
          className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
            activeTab === 'transcript' 
              ? 'bg-[var(--primary)] text-white' 
              : 'bg-[var(--surface-hover)] text-[var(--text-secondary)]'
          }`}
        >
          Transkripsiya
        </button>
        <button
          onClick={() => setActiveTab('vocab')}
          className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
            activeTab === 'vocab' 
              ? 'bg-[var(--primary)] text-white' 
              : 'bg-[var(--surface-hover)] text-[var(--text-secondary)]'
          }`}
        >
          Lug'at
        </button>
      </div>

      {/* Content */}
      {activeTab === 'transcript' ? (
        <div className="space-y-2">
          {MOCK_TRANSCRIPT.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="card p-4 cursor-pointer hover:bg-[var(--surface-hover)] transition-colors group"
            >
              <div className="flex items-start gap-3">
                <span className="text-sm font-mono text-[var(--primary)] mt-0.5">{line.time}</span>
                <div className="flex-1">
                  <p className="text-[var(--text-primary)] font-medium">{line.text}</p>
                  <p className="text-sm text-[var(--text-secondary)] mt-1">{line.translation}</p>
                </div>
                <AudioButton text={line.text} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {MOCK_VOCAB.map((word, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="card flex items-center gap-3 p-4"
            >
              <AudioButton text={`${word.article ? word.article + ' ' : ''}${word.word}`} />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  {word.article && (
                    <span className="text-xs font-bold text-[var(--primary)]">{word.article}</span>
                  )}
                  <span className="font-bold">{word.word}</span>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">{word.translation}</p>
                {word.pronunciation && (
                  <p className="text-xs text-[var(--text-muted)] font-mono">/{word.pronunciation}/</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}