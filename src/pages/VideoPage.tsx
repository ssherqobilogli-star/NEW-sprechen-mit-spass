import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Clock, Lock, BookOpen, Film, Headphones, Tv } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useStore } from '../store/useStore';
import LevelSelector from '../components/LevelSelector';
import GlassCard from '../components/GlassCard';
import type { Video } from '../types';

const MOCK_VIDEOS: Video[] = [
  { id: 'v1', youtubeId: 'dQw4w9WgXcQ', title: 'Nemis tilida salomlashish', description: 'A1 darajasi uchun salomlashish mavzusi', thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/mqdefault.jpg', level: 'A1', topic: 'Begrüßung', type: 'lesson', duration: 300, isPro: false },
  { id: 'v2', youtubeId: 'abc123', title: 'Oilani tanishtirish', description: 'Familie mavzusi - A1', thumbnail: 'https://i.ytimg.com/vi/abc123/mqdefault.jpg', level: 'A1', topic: 'Familie', type: 'lesson', duration: 420, isPro: false },
  { id: 'v3', youtubeId: 'def456', title: 'Peppa Wutz - Der Spielplatz', description: 'Multfilm nemis tilida', thumbnail: 'https://i.ytimg.com/vi/def456/mqdefault.jpg', level: 'A1', topic: 'Freizeit', type: 'cartoon', duration: 300, isPro: true },
  { id: 'v4', youtubeId: 'ghi789', title: 'Deutsch lernen Podcast #1', description: 'Audio dars - A2', thumbnail: 'https://i.ytimg.com/vi/ghi789/mqdefault.jpg', level: 'A2', topic: 'Alltag', type: 'podcast', duration: 900, isPro: false },
  { id: 'v5', youtubeId: 'jkl012', title: 'Mascha und der Bär', description: 'Multfilm - A1', thumbnail: 'https://i.ytimg.com/vi/jkl012/mqdefault.jpg', level: 'A1', topic: 'Tiere', type: 'cartoon', duration: 420, isPro: true },
];

const typeIcons = {
  lesson: BookOpen,
  podcast: Headphones,
  cartoon: Tv,
  film: Film,
};

const typeLabels = {
  lesson: 'Dars',
  podcast: 'Podcast',
  cartoon: 'Multfilm',
  film: 'Film',
};

export default function VideoPage() {
  const { selectedLevel, setSelectedLevel } = useStore();
  const [selectedType, setSelectedType] = useState<string>('all');

  const filteredVideos = MOCK_VIDEOS.filter(v => {
    const levelMatch = v.level === selectedLevel;
    const typeMatch = selectedType === 'all' || v.type === selectedType;
    return levelMatch && typeMatch;
  });

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-black text-[var(--text-primary)]">Video Darslar</h1>

      <LevelSelector selected={selectedLevel} onSelect={setSelectedLevel} />

      {/* Type Filter */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        <button
          onClick={() => setSelectedType('all')}
          className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
            selectedType === 'all' ? 'bg-[var(--primary)] text-white' : 'bg-[var(--surface-hover)] text-[var(--text-secondary)]'
          }`}
        >
          Barchasi
        </button>
        {Object.entries(typeLabels).map(([type, label]) => {
          const Icon = typeIcons[type as keyof typeof typeIcons];
          return (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap flex items-center gap-2 transition-all ${
                selectedType === type ? 'bg-[var(--primary)] text-white' : 'bg-[var(--surface-hover)] text-[var(--text-secondary)]'
              }`}
            >
              <Icon size={16} />
              {label}
            </button>
          );
        })}
      </div>

      {/* Videos Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredVideos.map((video, i) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Link to={`/video/${video.id}`}>
              <div className="card group cursor-pointer overflow-hidden p-0">
                <div className="relative aspect-video bg-gray-900">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/320x180?text=Video'; }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play size={28} className="text-white ml-1" fill="white" />
                    </div>
                  </div>
                  {video.isPro && (
                    <div className="absolute top-2 right-2 bg-[var(--accent)] text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                      <Lock size={12} /> PRO
                    </div>
                  )}
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                    <Clock size={12} />
                    {Math.floor(video.duration / 60)}:{(video.duration % 60).toString().padStart(2, '0')}
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs bg-[var(--primary)]/10 text-[var(--primary)] px-2 py-0.5 rounded-full font-medium">
                      {video.level}
                    </span>
                    <span className="text-xs bg-[var(--surface-hover)] text-[var(--text-muted)] px-2 py-0.5 rounded-full flex items-center gap-1">
                      {(() => {
                        const Icon = typeIcons[video.type];
                        return <Icon size={12} />;
                      })()}
                      {typeLabels[video.type]}
                    </span>
                  </div>
                  <h3 className="font-bold text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] mt-1">{video.description}</p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {filteredVideos.length === 0 && (
        <GlassCard className="text-center py-12">
          <Tv size={48} className="mx-auto text-[var(--text-muted)] mb-4" />
          <p className="text-[var(--text-secondary)]">Bu daraja va tur uchun video topilmadi</p>
        </GlassCard>
      )}
    </div>
  );
}