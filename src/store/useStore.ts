import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User, Level, ChatMessage } from '../types';

interface AppState {
  user: User | null;
  theme: 'light' | 'dark';
  currentPage: string;
  isAuthenticated: boolean;
  selectedLevel: Level;
  chatHistory: ChatMessage[];
  dailyWord: { word: string; learned: boolean } | null;
  xpPopup: { amount: number; visible: boolean };

  setUser: (user: User | null) => void;
  setTheme: (theme: 'light' | 'dark') => void;
  setCurrentPage: (page: string) => void;
  setAuthenticated: (status: boolean) => void;
  setSelectedLevel: (level: Level) => void;
  addXp: (amount: number) => void;
  updateStreak: (streak: number) => void;
  addChatMessage: (message: ChatMessage) => void;
  clearChat: () => void;
  setDailyWord: (word: { word: string; learned: boolean } | null) => void;
  showXpPopup: (amount: number) => void;
  hideXpPopup: () => void;
  toggleTheme: () => void;
}

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      user: null,
      theme: 'light',
      currentPage: 'home',
      isAuthenticated: false,
      selectedLevel: 'A1',
      chatHistory: [],
      dailyWord: null,
      xpPopup: { amount: 0, visible: false },

      setUser: (user) => set({ user }),

      setTheme: (theme) => {
        set({ theme });
        if (theme === 'dark') {
          document.documentElement.setAttribute('data-theme', 'dark');
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.removeAttribute('data-theme');
          document.documentElement.classList.remove('dark');
        }
      },

      toggleTheme: () => set((state) => {
        const newTheme = state.theme === 'light' ? 'dark' : 'light';
        if (newTheme === 'dark') {
          document.documentElement.setAttribute('data-theme', 'dark');
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.removeAttribute('data-theme');
          document.documentElement.classList.remove('dark');
        }
        return { theme: newTheme };
      }),

      setCurrentPage: (currentPage) => set({ currentPage }),

      setAuthenticated: (isAuthenticated) => set({ isAuthenticated }),

      setSelectedLevel: (selectedLevel) => set({ selectedLevel }),

      addXp: (amount) => set((state) => ({
        user: state.user ? { ...state.user, xp: state.user.xp + amount } : null,
        xpPopup: { amount, visible: true },
      })),

      updateStreak: (streak) => set((state) => ({
        user: state.user ? { ...state.user, streak, maxStreak: Math.max(state.user.maxStreak, streak) } : null,
      })),

      addChatMessage: (message) => set((state) => ({
        chatHistory: [...state.chatHistory, message],
      })),

      clearChat: () => set({ chatHistory: [] }),

      setDailyWord: (dailyWord) => set({ dailyWord }),

      showXpPopup: (amount) => set({ xpPopup: { amount, visible: true } }),

      hideXpPopup: () => set({ xpPopup: { amount: 0, visible: false } }),
    }),
    {
      name: 'sprechen-mit-spass-storage',
      partialize: (state) => ({ 
        theme: state.theme, 
        isAuthenticated: state.isAuthenticated,
        selectedLevel: state.selectedLevel,
        user: state.user,
      }),
    }
  )
);