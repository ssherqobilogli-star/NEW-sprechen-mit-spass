import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AiMentorPage from './pages/AiMentorPage';
import VideoPage from './pages/VideoPage';
import VideoPlayerPage from './pages/VideoPlayerPage';
import DictionaryPage from './pages/DictionaryPage';
import BattlePage from './pages/BattlePage';
import BattleGamePage from './pages/BattleGamePage';
import MockExamPage from './pages/MockExamPage';
import MockExamActivePage from './pages/MockExamActivePage';
import LeaderboardPage from './pages/LeaderboardPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
import SubscriptionPage from './pages/SubscriptionPage';
import WritingPage from './pages/WritingPage';
import CustomTestPage from './pages/CustomTestPage';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/learn" element={<VideoPage />} />
        <Route path="/video/:id" element={<VideoPlayerPage />} />
        <Route path="/dictionary" element={<DictionaryPage />} />
        <Route path="/battle" element={<BattlePage />} />
        <Route path="/battle/game" element={<BattleGamePage />} />
        <Route path="/mock" element={<MockExamPage />} />
        <Route path="/mock/:id" element={<MockExamActivePage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/subscription" element={<SubscriptionPage />} />
        <Route path="/writing" element={<WritingPage />} />
        <Route path="/test" element={<CustomTestPage />} />
        <Route path="/mentor" element={<AiMentorPage />} />
      </Route>
    </Routes>
  );
}