import { NavLink } from 'react-router-dom';
import { Home, BookOpen, BookA, Swords, User } from 'lucide-react';
import { cn } from '../lib/utils';

export default function BottomNav() {
  const navItems = [
    { icon: Home, label: 'Asosiy', path: '/' },
    { icon: BookOpen, label: 'Darslar', path: '/learn' },
    { icon: BookA, label: 'Lug'at', path: '/dictionary' },
    { icon: Swords, label: 'Jang', path: '/battle' },
    { icon: User, label: 'Profil', path: '/profile' },
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-[var(--surface)] border-t border-[var(--border)] z-30 pb-safe">
      <div className="flex justify-around items-center h-16 px-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => cn(
              "flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors",
              isActive ? "text-[var(--primary)]" : "text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
            )}
          >
            {({ isActive }) => (
              <>
                <item.icon size={24} className={isActive ? "scale-110 transition-transform" : ""} />
                <span className="text-[10px] font-medium">{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}