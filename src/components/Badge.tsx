import type { LucideIcon } from 'lucide-react';
import { cn } from '../lib/utils';

interface BadgeProps {
  icon: LucideIcon;
  label: string;
  color?: 'primary' | 'secondary' | 'accent' | 'gray';
  isLocked?: boolean;
}

export default function Badge({ icon: Icon, label, color = 'primary', isLocked = false }: BadgeProps) {
  const colorStyles = {
    primary: "bg-[var(--primary)]/10 text-[var(--primary)] border-[var(--primary)]/20",
    secondary: "bg-[var(--secondary)]/10 text-[var(--secondary)] border-[var(--secondary)]/20",
    accent: "bg-[var(--accent)]/10 text-[var(--accent)] border-[var(--accent)]/20",
    gray: "bg-[var(--surface-hover)] text-[var(--text-muted)] border-[var(--border)]",
  };

  return (
    <div className={cn(
      "flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all",
      isLocked ? colorStyles.gray + " opacity-60 grayscale" : colorStyles[color]
    )}>
      <Icon size={28} className="mb-2" />
      <span className="text-xs font-bold text-center">{label}</span>
    </div>
  );
}