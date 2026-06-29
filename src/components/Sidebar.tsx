import { NavLink } from 'react-router-dom';
import { Home, BookOpen, BookA, Swords, FileText, Trophy, User, Settings } from 'lucide-react';
import { cn } from '../lib/utils';
import ThemeToggle from './ThemeToggle';

export default function Sidebar() {
  const navItems = [
    { icon: Home, label: 'Asosiy', path: '/' },
    { icon: BookOpen, label: 'Video Darslar', path: '/learn' },
    { icon: BookA, label: 'Lug'at', path: '/dictionary' },
    { icon: Swords, label: 'Bellashuv', path: '/battle' },
    { icon: FileText, label: 'Mock Imtihon', path: '/mock' },
    { icon: Trophy, label: 'Reyting', path: '/leaderboard' },
    { icon: User, label: 'Profil', path: '/profile' },
  ];

  return (
    <aside className="hidden lg:flex flex-col w-64 fixed top-0 left-0 bottom-0 bg-[var(--surface)] border-r border-[var(--border)] z-30">
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-black text-xl shadow-md">
          S
        </div>
        <span className="font-bold text-lg text-[var(--text-primary)]">Sprechen mit Spaß</span>
      </div>

      <nav className="flex-1 px-4 space-y-2 overflow-y-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => cn(
              "flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all",
              isActive 
                ? "bg-[var(--primary)]/10 text-[var(--primary)]" 
                : "text-[var(--text-secondary)] hover:bg-[var(--surface-hover)] hover:text-[var(--text-primary)]"
            )}
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-[var(--border)] space-y-2">
        <NavLink to="/settings" className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-[var(--text-secondary)] hover:bg-[var(--surface-hover)] transition-all">
          <Settings size={20} />
          <span>Sozlamalar</span>
        </NavLink>
        <div className="px-4 py-2 flex items-center justify-between">
          <span className="text-sm font-medium text-[var(--text-secondary)]">Mavzu</span>
          <ThemeToggle />
        </div>
      </div>
    </aside>
  );
}