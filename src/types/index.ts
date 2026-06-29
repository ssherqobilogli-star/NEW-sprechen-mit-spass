export type Level = 'A1' | 'A2' | 'B1' | 'B2';

export interface User {
  id: string;
  telegramId: string;
  username?: string;
  firstName?: string;
  lastName?: string;
  avatarUrl?: string;
  level: Level;
  xp: number;
  streak: number;
  maxStreak: number;
  wordsLearned: number;
  totalWords: number;
  isPro: boolean;
  proExpiry?: string;
}

export interface Word {
  id: string;
  german: string;
  article?: 'der' | 'die' | 'das';
  uzbek: string;
  pronunciation?: string;
  example?: string;
  exampleUz?: string;
  level: Level;
  topic: string;
  category?: string;
}

export interface Topic {
  id: string;
  level: Level;
  order: number;
  titleDe: string;
  titleUz: string;
  description?: string;
  icon: string;
  isLocked: boolean;
}

export interface BattleQuestion {
  id: string;
  type: 'translation' | 'article' | 'grammar' | 'fill_blank';
  question: string;
  options: string[];
  correct: number;
  explanation?: string;
  level: Level;
  points: number;
  time: number;
}

export interface Video {
  id: string;
  youtubeId: string;
  title: string;
  description?: string;
  thumbnail: string;
  level: Level;
  topic: string;
  type: 'podcast' | 'film' | 'cartoon' | 'lesson';
  duration: number;
  isPro: boolean;
}

export interface TranscriptLine {
  time: string;
  text: string;
  translation?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

export interface Badge {
  id: string;
  icon: string;
  label: string;
  color: 'primary' | 'secondary' | 'accent' | 'gray';
  isLocked: boolean;
}

export interface LeaderboardEntry {
  rank: number;
  user: User;
  xp: number;
  streak: number;
}

export interface MockExam {
  id: string;
  title: string;
  setNumber: number;
  level: Level;
  modules: MockModule[];
  isPro: boolean;
  price: number;
}

export interface MockModule {
  name: string;
  duration: number;
  questions: BattleQuestion[];
}

export interface MockResult {
  id: string;
  userId: string;
  mockId: string;
  moduleScores: Record<string, number>;
  totalScore: number;
  grade: Level;
  feedback?: string;
  completedAt: string;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  duration: string;
  price: number;
  dailyPrice: number;
  features: string[];
  isPopular?: boolean;
}