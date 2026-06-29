import { useState } from 'react';
import { motion } from 'framer-motion';
import { PenLine, Send, Sparkles, CheckCircle } from 'lucide-react';
import { useStore } from '../store/useStore';
import GlassCard from '../components/GlassCard';

const WRITING_PROMPTS = [
  { id: 'w1', title: 'O'zingizni tanishtiring', level: 'A1', prompt: 'Schreiben Sie einen Text über sich selbst. (50-80 Wörter)' },
  { id: 'w2', title: 'Oilangiz haqida', level: 'A1', prompt: 'Beschreiben Sie Ihre Familie. (60-100 Wörter)' },
  { id: 'w3', title: 'Kundalik hayotingiz', level: 'A2', prompt: 'Beschreiben Sie Ihren Tagesablauf. (80-120 Wörter)' },
];

export default function WritingPage() {
  const [selectedPrompt, setSelectedPrompt] = useState(WRITING_PROMPTS[0]);
  const [text, setText] = useState('');
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isChecking, setIsChecking] = useState(false);

  const handleCheck = async () => {
    if (!text.trim()) return;
    setIsChecking(true);

    // Mock AI feedback
    setTimeout(() => {
      setFeedback(`✅ Grammatika: 8/10
✅ Lug'at: 7/10
✅ Tuzilma: 8/10

💡 Tavsiyalar:
- "ich bin" o'rniga "ich heiße" ishlatish yaxshiroq
- Artiklarni unutmang: der/die/das`);
      setIsChecking(false);
    }, 2000);
  };

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-black text-[var(--text-primary)]">Yozish Mashqlari</h1>

      {/* Prompt Selector */}
      <div className="space-y-2">
        {WRITING_PROMPTS.map((prompt) => (
          <div
            key={prompt.id}
            onClick={() => { setSelectedPrompt(prompt); setFeedback(null); }}
            className={`card cursor-pointer transition-all ${
              selectedPrompt.id === prompt.id ? 'border-[var(--primary)] border-2' : ''
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                selectedPrompt.id === prompt.id ? 'bg-[var(--primary)] text-white' : 'bg-[var(--surface-hover)] text-[var(--text-secondary)]'
              }`}>
                <PenLine size={20} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-sm">{prompt.title}</h3>
                <p className="text-xs text-[var(--text-muted)]">{prompt.level}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Prompt */}
      <GlassCard>
        <div className="flex items-start gap-2">
          <Sparkles size={20} className="text-[var(--accent)] flex-shrink-0 mt-0.5" />
          <p className="text-sm text-[var(--text-secondary)]">{selectedPrompt.prompt}</p>
        </div>
      </GlassCard>

      {/* Text Input */}
      <div className="space-y-3">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Nemischa yozing..."
          rows={8}
          className="input resize-none"
        />
        <div className="flex items-center justify-between">
          <span className="text-xs text-[var(--text-muted)]">{text.split(/\s+/).filter(Boolean).length} so'z</span>
          <button
            onClick={handleCheck}
            disabled={!text.trim() || isChecking}
            className="btn-primary flex items-center gap-2 disabled:opacity-50"
          >
            {isChecking ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Tekshirilmoqda...
              </>
            ) : (
              <>
                <Send size={18} />
                AI Tekshirish
              </>
            )}
          </button>
        </div>
      </div>

      {/* Feedback */}
      {feedback && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="card border-green-500 bg-green-50"
        >
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle size={20} className="text-green-600" />
            <h3 className="font-bold text-green-700">AI Baholash</h3>
          </div>
          <pre className="text-sm text-[var(--text-secondary)] whitespace-pre-wrap font-sans">
            {feedback}
          </pre>
        </motion.div>
      )}
    </div>
  );
}