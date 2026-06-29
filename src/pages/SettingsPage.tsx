import { useState } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Volume2, VolumeX, Bell, BellOff, Globe, ChevronRight, LogOut } from 'lucide-react';
import { useStore } from '../store/useStore';
import GlassCard from '../components/GlassCard';

export default function SettingsPage() {
  const { theme, toggleTheme } = useStore();
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState('uz');

  const settings = [
    {
      id: 'theme',
      icon: theme === 'dark' ? Sun : Moon,
      label: 'Mavzu',
      value: theme === 'dark' ? 'Qorong'u' : 'Yorug'',
      action: toggleTheme,
    },
    {
      id: 'sound',
      icon: soundEnabled ? Volume2 : VolumeX,
      label: 'Ovoz effektlari',
      value: soundEnabled ? 'Yoqilgan' : 'O'chirilgan',
      action: () => setSoundEnabled(!soundEnabled),
    },
    {
      id: 'notifications',
      icon: notifications ? Bell : BellOff,
      label: 'Bildirishnomalar',
      value: notifications ? 'Yoqilgan' : 'O'chirilgan',
      action: () => setNotifications(!notifications),
    },
    {
      id: 'language',
      icon: Globe,
      label: 'Til',
      value: language === 'uz' ? 'O'zbek' : 'English',
      action: () => setLanguage(lang => lang === 'uz' ? 'en' : 'uz'),
    },
  ];

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-black text-[var(--text-primary)]">Sozlamalar</h1>

      <div className="space-y-3">
        {settings.map((setting, i) => (
          <motion.div
            key={setting.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <div 
              onClick={setting.action}
              className="card flex items-center gap-4 cursor-pointer hover:bg-[var(--surface-hover)] transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)]">
                <setting.icon size={20} />
              </div>
              <div className="flex-1">
                <div className="font-medium">{setting.label}</div>
                <div className="text-sm text-[var(--text-secondary)]">{setting.value}</div>
              </div>
              <ChevronRight size={20} className="text-[var(--text-muted)]" />
            </div>
          </motion.div>
        ))}
      </div>

      <GlassCard className="text-center py-6">
        <h3 className="font-bold mb-2">Sprechen mit Spaß</h3>
        <p className="text-sm text-[var(--text-secondary)]">Versiya 1.0.0</p>
        <p className="text-xs text-[var(--text-muted)] mt-1">
          Telegram: @Sprechenmitspass_bot
        </p>
      </GlassCard>
    </div>
  );
}