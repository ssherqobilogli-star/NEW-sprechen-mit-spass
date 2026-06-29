import { cn } from '../lib/utils';
import type { Level } from '../types';

interface LevelSelectorProps {
  selected: Level;
  onSelect: (level: Level) => void;
}

export default function LevelSelector({ selected, onSelect }: LevelSelectorProps) {
  const levels: Level[] = ['A1', 'A2', 'B1', 'B2'];

  return (
    <div className="flex gap-2 bg-[var(--surface-hover)] p-1.5 rounded-xl w-max">
      {levels.map((level) => (
        <button
          key={level}
          onClick={() => onSelect(level)}
          className={cn(
            "px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300",
            selected === level
              ? "bg-[var(--surface)] text-[var(--primary)] shadow-sm scale-105"
              : "text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
          )}
        >
          {level}
        </button>
      ))}
    </div>
  );
}