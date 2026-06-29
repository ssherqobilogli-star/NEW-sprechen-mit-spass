import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mic, Bot, User, Sparkles, Trash2 } from 'lucide-react';
import { useStore } from '../store/useStore';
import { generateId } from '../lib/utils';
import type { ChatMessage } from '../types';
import GlassCard from '../components/GlassCard';

const SYSTEM_PROMPT = `Siz "Sprechen mit Spaß" platformasining professional AI nemis tili o'qituvchisisiz.

QOIDALAR:
1. Foydalanuvchi o'zbek tilida yozsa → NEMIS tilida javob bering, keyin o'zbekcha tarjima
2. Foydalanuvchi nemis tilida yozsa → NEMIS tilida javob bering, xatolarni to'g'rilang
3. Har doim oxirida o'zbek tiliga qisqa izoh qo'shing
4. Qisqa, aniq, do'stona yozing (maksimum 300 so'z)
5. Emoji ishlating

JAVOB FORMATI:
🇩🇪 [Nemischa javob]
🇺🇿 [O'zbekcha tarjima]

✏️ Tuzatish: [agar xato bo'lsa]
💡 Foydali ibora: [yangi ibora]`;

export default function AiMentorPage() {
  const { chatHistory, addChatMessage, clearChat } = useStore();
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const groqKey = import.meta.env.VITE_GROQ_KEY;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: generateId(),
      role: 'user',
      content: input,
      timestamp: Date.now(),
    };

    addChatMessage(userMsg);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${groqKey}`,
        },
        body: JSON.stringify({
          model: 'llama3-70b-8192',
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...chatHistory.slice(-10).map(m => ({ role: m.role, content: m.content })),
            { role: 'user', content: input },
          ],
          temperature: 0.7,
          max_tokens: 800,
        }),
      });

      const data = await response.json();
      const assistantContent = data.choices?.[0]?.message?.content || 'Kechirasiz, xatolik yuz berdi.';

      const assistantMsg: ChatMessage = {
        id: generateId(),
        role: 'assistant',
        content: assistantContent,
        timestamp: Date.now(),
      };

      addChatMessage(assistantMsg);
    } catch (error) {
      const errorMsg: ChatMessage = {
        id: generateId(),
        role: 'assistant',
        content: '❌ Xatolik yuz berdi. Iltimos, qayta urinib ko'ring.',
        timestamp: Date.now(),
      };
      addChatMessage(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const startRecording = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert('Brauzeringiz ovozli kiritishni qo'llab-quvvatlamaydi');
      return;
    }
    setIsRecording(true);
    // Web Speech API implementation would go here
    setTimeout(() => setIsRecording(false), 3000);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white">
            <Sparkles size={20} />
          </div>
          <div>
            <h1 className="font-bold text-[var(--text-primary)]">AI Mentor</h1>
            <p className="text-xs text-[var(--text-secondary)]">Nemis tili o'qituvchisi</p>
          </div>
        </div>
        <button 
          onClick={clearChat}
          className="p-2 rounded-lg hover:bg-[var(--surface-hover)] text-[var(--text-muted)] transition-colors"
        >
          <Trash2 size={18} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-4 mb-4 px-1">
        {chatHistory.length === 0 && (
          <GlassCard className="text-center py-8">
            <Bot size={48} className="mx-auto text-[var(--primary)] mb-4" />
            <h3 className="font-bold text-lg mb-2">Salom! 👋</h3>
            <p className="text-[var(--text-secondary)] text-sm">
              Men sizning nemis tili o'qituvchingizman.<br/>
              Menga o'zbekcha yoki nemischa yozing!
            </p>
            <div className="flex flex-wrap gap-2 justify-center mt-4">
              {['Wie geht's?', 'der die das farqi', 'Salomlashish'].map(suggestion => (
                <button
                  key={suggestion}
                  onClick={() => { setInput(suggestion); }}
                  className="px-3 py-1.5 bg-[var(--surface-hover)] rounded-full text-sm text-[var(--text-secondary)] hover:bg-[var(--primary)]/10 hover:text-[var(--primary)] transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </GlassCard>
        )}

        <AnimatePresence>
          {chatHistory.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                msg.role === 'user' 
                  ? 'bg-[var(--primary)] text-white' 
                  : 'bg-gradient-to-br from-blue-500 to-purple-500 text-white'
              }`}>
                {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
              </div>
              <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                msg.role === 'user'
                  ? 'bg-[var(--primary)] text-white rounded-tr-none'
                  : 'bg-[var(--surface)] border border-[var(--border)] rounded-tl-none'
              }`}>
                <div className="whitespace-pre-wrap">{msg.content}</div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex gap-3"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white">
              <Bot size={16} />
            </div>
            <div className="bg-[var(--surface)] border border-[var(--border)] p-3 rounded-2xl rounded-tl-none">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-[var(--primary)] rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-[var(--primary)] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                <div className="w-2 h-2 bg-[var(--primary)] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
              </div>
            </div>
          </motion.div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="flex gap-2 items-end">
        <button
          onClick={startRecording}
          className={`p-3 rounded-xl transition-all ${
            isRecording 
              ? 'bg-red-500 text-white animate-pulse' 
              : 'bg-[var(--surface-hover)] text-[var(--text-secondary)] hover:text-[var(--primary)]'
          }`}
        >
          <Mic size={20} />
        </button>
        <div className="flex-1 relative">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Xabar yozing..."
            rows={1}
            className="input resize-none pr-12 py-3"
            style={{ minHeight: '48px', maxHeight: '120px' }}
          />
        </div>
        <button
          onClick={sendMessage}
          disabled={!input.trim() || isLoading}
          className="p-3 rounded-xl bg-[var(--primary)] text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[var(--primary-dark)] transition-colors"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
}