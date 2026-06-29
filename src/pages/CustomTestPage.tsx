import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, ArrowRight, RotateCcw, Zap } from 'lucide-react';
import { useStore } from '../store/useStore';
import { WORDS, getRandomWords } from '../data/words';
import { shuffleArray, generateId } from '../lib/utils';
import LevelSelector from '../components/LevelSelector';
import Timer from '../components/Timer';
import Confetti from '../components/Confetti';
import XpPopup from '../components/XpPopup';

interface TestQuestion {
  id: string;
  type: 'translation' | 'article';
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

function generateTest(level: string, count: number): TestQuestion[] {
  const words = getRandomWords(count, level);
  return words.map((word) => {
    const isArticle = !!word.article && Math.random() > 0.5;

    if (isArticle) {
      const options = shuffleArray(['der', 'die', 'das']);
      return {
        id: generateId(),
        type: 'article' as const,
        question: `"${word.german}" so'zining artikli?`,
        options,
        correct: options.indexOf(word.article!),
        explanation: `${word.article} ${word.german} = ${word.uzbek}`,
      };
    } else {
      const wrongOptions = WORDS
        .filter(w => w.id !== word.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map(w => w.uzbek);
      const options = shuffleArray([word.uzbek, ...wrongOptions]);

      return {
        id: generateId(),
        type: 'translation' as const,
        question: `"${word.article ? word.article + ' ' : ''}${word.german}" so'zining o'zbekcha tarjimasi?`,
        options,
        correct: options.indexOf(word.uzbek),
        explanation: `${word.german} = ${word.uzbek}`,
      };
    }
  });
}

export default function CustomTestPage() {
  const { selectedLevel, setSelectedLevel, addXp, xpPopup, hideXpPopup } = useStore();
  const [questions, setQuestions] = useState<TestQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [started, setStarted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const startTest = () => {
    setQuestions(generateTest(selectedLevel, 10));
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setScore(0);
    setCorrectCount(0);
    setGameOver(false);
    setStarted(true);
    setShowConfetti(false);
  };

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(index);
    const correct = index === questions[currentIndex].correct;
    setIsCorrect(correct);

    if (correct) {
      setScore(prev => prev + 10);
      setCorrectCount(prev => prev + 1);
    }

    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(prev => prev + 1);
        setSelectedAnswer(null);
        setIsCorrect(null);
      } else {
        setGameOver(true);
        addXp(score + (correct ? 10 : 0));
        if (correctCount + (correct ? 1 : 0) >= 7) {
          setShowConfetti(true);
        }
      }
    }, 1500);
  };

  const handleTimeUp = () => {
    if (selectedAnswer === null) {
      handleAnswer(-1);
    }
  };

  if (!started) {
    return (
      <div className="max-w-md mx-auto text-center space-y-6 py-8">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center text-white mx-auto">
          <Zap size={40} />
        </div>
        <h1 className="text-2xl font-black">Maxsus Test</h1>
        <p className="text-[var(--text-secondary)]">10 ta savol • 10 soniya har biri</p>

        <LevelSelector selected={selectedLevel} onSelect={setSelectedLevel} />

        <button onClick={startTest} className="btn-primary w-full">
          Boshlash
        </button>
      </div>
    );
  }

  if (gameOver) {
    const percentage = Math.round((correctCount / questions.length) * 100);

    return (
      <div className="max-w-md mx-auto text-center space-y-6 py-8">
        {showConfetti && <Confetti />}
        <XpPopup amount={xpPopup.amount} isVisible={xpPopup.visible} onComplete={hideXpPopup} />

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto ${
            percentage >= 70 ? 'bg-green-100' : 'bg-orange-100'
          }`}
        >
          <span className={`text-3xl font-black ${
            percentage >= 70 ? 'text-green-600' : 'text-orange-600'
          }`}>
            {percentage}%
          </span>
        </motion.div>

        <div>
          <h2 className="text-2xl font-black mb-2">
            {percentage >= 70 ? '🎉 Ajoyib!' : '💪 Mashq qiling!'}
          </h2>
          <p className="text-[var(--text-secondary)]">
            {correctCount}/{questions.length} to'g'ri • {score} XP
          </p>
        </div>

        <button onClick={startTest} className="btn-primary w-full flex items-center justify-center gap-2">
          <RotateCcw size={18} />
          Qayta o'ynash
        </button>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <XpPopup amount={xpPopup.amount} isVisible={xpPopup.visible} onComplete={hideXpPopup} />

      <div className="flex items-center justify-between">
        <span className="text-sm text-[var(--text-secondary)]">
          {currentIndex + 1}/{questions.length}
        </span>
        <div className="flex items-center gap-1 text-[var(--accent)] font-bold">
          <Zap size={16} fill="currentColor" />
          {score}
        </div>
      </div>

      <div className="h-2 bg-[var(--surface-hover)] rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]"
          animate={{ width: `${((currentIndex) / questions.length) * 100}%` }}
        />
      </div>

      <div className="flex justify-center">
        <Timer duration={10} onTimeUp={handleTimeUp} key={currentIndex} />
      </div>

      <motion.div
        key={currentQuestion.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card py-8 text-center"
      >
        <h2 className="text-xl font-bold text-[var(--text-primary)]">{currentQuestion.question}</h2>
      </motion.div>

      <div className="grid grid-cols-1 gap-3">
        <AnimatePresence>
          {currentQuestion.options.map((option, i) => {
            const isSelected = selectedAnswer === i;
            const isRight = i === currentQuestion.correct;

            let bgClass = 'bg-[var(--surface)] border-[var(--border)] hover:border-[var(--primary)]';
            if (selectedAnswer !== null) {
              if (isRight) bgClass = 'bg-green-100 border-green-500 text-green-700';
              else if (isSelected) bgClass = 'bg-red-100 border-red-500 text-red-700';
              else bgClass = 'bg-[var(--surface)] border-[var(--border)] opacity-50';
            }

            return (
              <motion.button
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => handleAnswer(i)}
                disabled={selectedAnswer !== null}
                className={`card p-4 text-left font-semibold transition-all ${bgClass}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${
                    selectedAnswer !== null
                      ? isRight ? 'bg-green-500 text-white' : isSelected ? 'bg-red-500 text-white' : 'bg-[var(--surface-hover)]'
                      : 'bg-[var(--primary)]/10 text-[var(--primary)]'
                  }`}>
                    {selectedAnswer !== null ? (
                      isRight ? <Check size={16} /> : isSelected ? <X size={16} /> : String.fromCharCode(65 + i)
                    ) : (
                      String.fromCharCode(65 + i)
                    )}
                  </div>
                  <span>{option}</span>
                </div>
              </motion.button>
            );
          })}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedAnswer !== null && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-xl text-center font-medium ${
              isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}
          >
            {isCorrect ? '✅ To'g'ri!' : '❌ Noto'g'ri!'}
            <p className="text-sm mt-1">{currentQuestion.explanation}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}