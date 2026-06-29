import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, BookOpen, Volume2 } from 'lucide-react';
import { WORDS, getWordsByLevel, getTopicsByLevel } from '../data/words';
import { useStore } from '../store/useStore';
import LevelSelector from '../components/LevelSelector';
import FlipCard from '../components/FlipCard';
import AudioButton from '../components/AudioButton';
import { cn } from '../lib/utils';

export default function DictionaryPage() {
  const { selectedLevel, setSelectedLevel } = useStore();
  const [search, setSearch] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const words = getWordsByLevel(selectedLevel);
  const topics = getTopicsByLevel(selectedLevel);

  const filteredWords = words.filter(w => {
    const matchesSearch = w.german.toLowerCase().includes(search.toLowerCase()) ||
                         w.uzbek.toLowerCase().includes(search.toLowerCase());
    const matchesTopic = selectedTopic === 'all' || w.topic === selectedTopic;
    return matchesSearch && matchesTopic;
  });

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black text-[var(--text-primary)]">Lug'at</h1>
        <span className="text-sm text-[var(--text-secondary)]">{filteredWords.length} ta so'z</span>
      </div>

      <LevelSelector selected={selectedLevel} onSelect={setSelectedLevel} />

      {/* Search & Filter */}
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
          <input
            type="text"
            placeholder="So'z qidirish..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input pl-10"
          />
        </div>
        <button 
          onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
          className="btn-secondary btn-sm"
        >
          <Filter size={18} />
        </button>
      </div>

      {/* Topic Filter */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        <button
          onClick={() => setSelectedTopic('all')}
          className={cn(
            "px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all",
            selectedTopic === 'all' 
              ? "bg-[var(--primary)] text-white" 
              : "bg-[var(--surface-hover)] text-[var(--text-secondary)]"
          )}
        >
          Barchasi
        </button>
        {topics.map(topic => (
          <button
            key={topic}
            onClick={() => setSelectedTopic(topic)}
            className={cn(
              "px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all",
              selectedTopic === topic 
                ? "bg-[var(--primary)] text-white" 
                : "bg-[var(--surface-hover)] text-[var(--text-secondary)]"
            )}
          >
            {topic}
          </button>
        ))}
      </div>

      {/* Words Grid */}
      <AnimatePresence mode="popLayout">
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredWords.map((word, i) => (
              <motion.div
                key={word.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: i * 0.03 }}
              >
                <FlipCard
                  german={word.german}
                  article={word.article}
                  uzbek={word.uzbek}
                  example={word.example}
                  exampleUz={word.exampleUz}
                />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-2">
            {filteredWords.map((word) => (
              <motion.div
                key={word.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="card flex items-center gap-4 p-4"
              >
                <AudioButton text={`${word.article ? word.article + ' ' : ''}${word.german}`} />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    {word.article && (
                      <span className="text-xs font-bold text-[var(--primary)]">{word.article}</span>
                    )}
                    <span className="font-bold text-[var(--text-primary)]">{word.german}</span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{word.uzbek}</p>
                </div>
                <span className="text-xs bg-[var(--surface-hover)] px-2 py-1 rounded-full text-[var(--text-muted)]">
                  {word.topic}
                </span>
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}