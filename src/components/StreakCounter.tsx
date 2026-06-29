import { Flame } from 'lucide-react';

export default function StreakCounter({ streak }: { streak: number }) {
  const isActive = streak > 0;

  return (
    <div className={`flex items-center gap-1 font-bold px-3 py-1.5 rounded-full ${isActive ? 'bg-orange-100 text-orange-600 dark:bg-orange-900/30' : 'bg-[var(--surface-hover)] text-[var(--text-muted)]'}`}>
      <Flame size={18} className={isActive ? "fill-orange-500 text-orange-500 animate-pulse" : ""} />
      <span>{streak}</span>
    </div>
  );
}