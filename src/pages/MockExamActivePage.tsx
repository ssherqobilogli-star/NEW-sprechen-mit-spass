import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Check, ChevronRight, Mic, PenLine } from 'lucide-react';
import { useStore } from '../store/useStore';
import Timer from '../components/Timer';
import Confetti from '../components/Confetti';
import GlassCard from '../components/GlassCard';

const MOCK_QUESTIONS = [
  { id: 'q1', text: 'Wie heißt du?', options: ['Ich bin müde', 'Ich heiße Anna', 'Ich komme aus Berlin', 'Ich bin 20'], correct: 1 },
  { id: 'q2', text: 'Was ist das? (Apfel)', options: ['der Apfel', 'die Apfel', 'das Apfel', 'die Äpfel'], correct: 0 },
  { id: 'q3', text: 'Ich ___ aus Uzbekistan.', options: ['komme', 'kommst', 'kommen', 'kommt'], correct: 0 },
];

export default function MockExamActivePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addXp } = useStore();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = MOCK_QUESTIONS[currentIndex];
  const progress = ((currentIndex) / MOCK_QUESTIONS.length) * 100;

  const handleAnswer = (index: number) => {
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: index }));

    if (currentIndex < MOCK_QUESTIONS.length - 1) {
      setTimeout(() => setCurrentIndex(prev => prev + 1), 500);
    } else {
      setTimeout(() => setShowResult(true), 500);
    }
  };

  if (showResult) {
    const correctCount = Object.entries(answers).filter(([qId, ans]) => {
      const q = MOCK_QUESTIONS.find(q => q.id === qId);
      return q && q.correct === ans;
    }).length;

    const score = Math.round((correctCount / MOCK_QUESTIONS.length) * 100);

    return (
      <div className="max-w-md mx-auto text-center space-y-6 py-8">
        {score >= 70 && <Confetti />}

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className={`w-32 h-32 rounded-full flex items-center justify-center mx-auto ${
            score >= 70 ? 'bg-green-100' : score >= 50 ? 'bg-yellow-100' : 'bg-red-100'
          }`}
        >
          <span className={`text-4xl font-black ${
            score >= 70 ? 'text-green-600' : score >= 50 ? 'text-yellow-600' : 'text-red-600'
          }`}>
            {score}%
          </span>
        </motion.div>

        <div>
          <h2 className="text-2xl font-black mb-2">
            {score >= 70 ? '🎉 Ajoyib!' : score >= 50 ? '👍 Yaxshi!' : '💪 Mashq qiling!'}
          </h2>
          <p className="text-[var(--text-secondary)]">
            {correctCount}/{MOCK_QUESTIONS.length} to'g'ri javob
          </p>
        </div>

        <div className="space-y-2">
          {MOCK_QUESTIONS.map((q, i) => {
            const userAns = answers[q.id];
            const isCorrect = userAns === q.correct;
            return (
              <div key={q.id} className={`card p-3 flex items-center gap-3 ${
                isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'
              }`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  isCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                }`}>
                  {isCorrect ? <Check size={16} /> : <span className="text-sm font-bold">{i + 1}</span>}
                </div>
                <div className="flex-1 text-left text-sm">{q.text}</div>
              </div>
            );
          })}
        </div>

        <button onClick={() => navigate('/mock')} className="btn-primary w-full">
          Yopish
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <button onClick={() => navigate('/mock')} className="flex items-center gap-2 text-[var(--text-secondary)]">
          <ArrowLeft size={20} />
          <span>Orqaga</span>
        </button>
        <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
          <Clock size={16} />
          <span>25:00</span>
        </div>
      </div>

      <div className="h-2 bg-[var(--surface-hover)] rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]"
          animate={{ width: `${progress}%` }}
        />
      </div>

      <div className="text-center text-sm text-[var(--text-secondary)]">
        Savol {currentIndex + 1} / {MOCK_QUESTIONS.length}
      </div>

      <motion.div
        key={currentQuestion.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card py-8 text-center"
      >
        <h2 className="text-xl font-bold text-[var(--text-primary)]">{currentQuestion.text}</h2>
      </motion.div>

      <div className="space-y-3">
        {currentQuestion.options.map((option, i) => (
          <motion.button
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            onClick={() => handleAnswer(i)}
            className={`card w-full p-4 text-left font-semibold transition-all hover:border-[var(--primary)] ${
              answers[currentQuestion.id] === i ? 'border-[var(--primary)] bg-[var(--primary)]/5' : ''
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${
                answers[currentQuestion.id] === i ? 'bg-[var(--primary)] text-white' : 'bg-[var(--surface-hover)]'
              }`}>
                {String.fromCharCode(65 + i)}
              </div>
              <span>{option}</span>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}