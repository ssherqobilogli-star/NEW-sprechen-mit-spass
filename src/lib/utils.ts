import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('uz-UZ', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}

export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

export function formatNumber(num: number): string {
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
  return num.toString();
}

export function getLevelColor(level: string): string {
  const colors: Record<string, string> = {
    A1: '#10B981',
    A2: '#3B82F6',
    B1: '#F59E0B',
    B2: '#EF4444',
  };
  return colors[level] || '#64748B';
}

export function getLevelProgress(xp: number): { level: number; title: string; progress: number; nextLevel: number } {
  const levels = [
    { xp: 0, title: 'Yangi o'quvchi' },
    { xp: 100, title: 'Ildiz otgan' },
    { xp: 300, title: 'Tuzoqchi' },
    { xp: 600, title: 'Sayohatchi' },
    { xp: 1000, title: 'Hikoyachi' },
    { xp: 1500, title: 'Grammatik' },
    { xp: 2200, title: 'Suxandon' },
    { xp: 3000, title: 'Nemis Ustasi' },
    { xp: 4000, title: 'Goethe Zertifikat' },
    { xp: 5500, title: 'Nemis Profi' },
  ];

  let currentLevel = 1;
  let nextLevelXp = 100;

  for (let i = levels.length - 1; i >= 0; i--) {
    if (xp >= levels[i].xp) {
      currentLevel = i + 1;
      nextLevelXp = levels[i + 1]?.xp || levels[i].xp + 1500;
      break;
    }
  }

  const prevLevelXp = levels[currentLevel - 1]?.xp || 0;
  const progress = ((xp - prevLevelXp) / (nextLevelXp - prevLevelXp)) * 100;

  return {
    level: currentLevel,
    title: levels[currentLevel - 1]?.title || 'Nemis Profi',
    progress: Math.min(100, Math.max(0, progress)),
    nextLevel: nextLevelXp,
  };
}

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function generateId(): string {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}