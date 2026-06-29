import { useStore } from '../store/useStore';
import StreakCounter from './StreakCounter';
import { User, Zap } from 'lucide-react';

export default function Header() {
  const { user } = useStore();

  return (
    <header className="h-16 flex items-center justify-between px-4 bg-[var(--surface)]/80 backdrop-blur-md border-b border-[var(--border)] sticky top-0 z-20">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-black text-xl shadow-md">
          S
        </div>
        <div className="hidden sm:flex px-2 py-1 bg-[var(--surface-hover)] rounded-md text-sm font-bold text-[var(--primary)]">
          {user?.level || 'A1'}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 text-[var(--accent)] font-bold bg-[var(--accent)]/10 px-3 py-1.5 rounded-full">
          <Zap size={18} fill="currentColor" /> 
          <span>{user?.xp || 0} XP</span>
        </div>

        <StreakCounter streak={user?.streak || 0} />

        <button className="w-10 h-10 bg-[var(--surface-hover)] rounded-full flex items-center justify-center border-2 border-[var(--primary)] overflow-hidden transition-transform hover:scale-105">
          {user?.avatarUrl ? (
            <img src={user.avatarUrl} alt="Profile" className="w-full h-full object-cover" />
          ) : (
            <User size={20} className="text-[var(--primary)]" />
          )}
        </button>
      </div>
    </header>
  );
}