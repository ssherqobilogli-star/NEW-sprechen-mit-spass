import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Zap, Clock, Trophy } from 'lucide-react';
import { useStore } from '../store/useStore';
import { WORDS, getRandomWords } from '../data/words';
import { shuffleArray, generateId } from '../lib/utils';
import Timer from '../components/Timer';
import Confetti from '../components/Confetti';
import XpPopup from '../components/XpPopup';

interface Question {
  id: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  points: number;
}

function generateQuestions(level: string): Question[] {
  const words = getRandomWords(10, level);
  return words.map((word, i) => {
    const wrongOptions = WORDS
      .filter(w => w.id !== word.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map(w => w.uzbek);

    const options = shuffleArray([word.uzbek, ...wrongOptions]);

    return {
      id: generateId(),
      question: `"${word.article ? word.article + ' ' : ''}${word.german}" so'zining o'zbekcha tarjimasi?`,
      options,
      correct: options.indexOf(word.uzbek),
      explanation: `${word.german} = ${word.uzbek}`,
      points: 10,
    };
  });
}

export default function BattleGamePage() {
  const { selectedLevel, addXp } = useStore();
  const [questions] = useState(() => generateQuestions(selectedLevel));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [streak, setStreak] = useState(0);

  const currentQuestion = questions[currentIndex];

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(index);
    const correct = index === currentQuestion.correct;
    setIsCorrect(correct);

    if (correct) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      const bonus = newStreak >= 3 ? 5 : 0;
      const totalPoints = currentQuestion.points + bonus;
      setScore(prev => prev + totalPoints);
      setCorrectCount(prev => prev + 1);
    } else {
      setStreak(0);
    }

    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(prev => prev + 1);
        setSelectedAnswer(null);
        setIsCorrect(null);
      } else {
        setGameOver(true);
        if (correctCount + (correct ? 1 : 0) >= 7) {
          setShowConfetti(true);
        }
        addXp(score + (correct ? currentQuestion.points : 0));
      }
    }, 1500);
  };

  const handleTimeUp = useCallback(() => {
    if (selectedAnswer === null) {
      setSelectedAnswer(-1);
      setIsCorrect(false);
      setStreak(0);

      setTimeout(() => {
        if (currentIndex < questions.length - 1) {
          setCurrentIndex(prev => prev + 1);
          setSelectedAnswer(null);
          setIsCorrect(null);
        } else {
          setGameOver(true);
          addXp(score);
        }
      }, 1500);
    }
  }, [currentIndex, questions.length, score, addXp, selectedAnswer]);

  if (gameOver) {
    const percentage = Math.round((correctCount / questions.length) * 100);
    const isWin = correctCount >= 7;

    return (
      <div className="max-w-md mx-auto text-center space-y-6 py-8">
        {showConfetti && <Confetti />}

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto ${
            isWin ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'
          }`}
        >
          <Trophy size={48} />
        </motion.div>

        <div>
          <h2 className="text-2xl font-black mb-2">
            {isWin ? '🎉 Ajoyib!' : '👍 Yaxshi urinish!'}
          </h2>
          <p className="text-[var(--text-secondary)]">
            {correctCount}/{questions.length} to'g'ri javob
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="card text-center">
            <div className="text-3xl font-black text-[var(--primary)]">{score}</div>
            <div className="text-sm text-[var(--text-secondary)]">XP</div>
          </div>
          <div className="card text-center">
            <div className="text-3xl font-black text-[var(--accent)]">{percentage}%</div>
            <div className="text-sm text-[var(--text-secondary)]">Natija</div>
          </div>
        </div>

        <button 
          onClick={() => window.location.reload()}
          className="btn-primary w-full"
        >
          Qayta o'ynash
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm text-[var(--text-secondary)]">
            Savol {currentIndex + 1}/{questions.length}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-[var(--accent)] font-bold">
            <Zap size={16} fill="currentColor" />
            {score}
          </div>
          {streak > 1 && (
            <div className="text-sm font-bold text-orange-500">
              🔥 {streak}x
            </div>
          )}
        </div>
      </div>

      {/* Progress */}
      <div className="h-2 bg-[var(--surface-hover)] rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]"
          animate={{ width: `${((currentIndex) / questions.length) * 100}%` }}
        />
      </div>

      {/* Timer */}
      <div className="flex justify-center">
        <Timer duration={10} onTimeUp={handleTimeUp} key={currentIndex} />
      </div>

      {/* Question */}
      <motion.div
        key={currentQuestion.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-4"
      >
        <h2 className="text-xl font-bold text-[var(--text-primary)]">
          {currentQuestion.question}
        </h2>
      </motion.div>

      {/* Options */}
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
                className={`card p-4 text-left font-semibold transition-all ${bgClass} ${
                  selectedAnswer === null ? 'cursor-pointer' : 'cursor-default'
                }`}
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

      {/* Explanation */}
      <AnimatePresence>
        {selectedAnswer !== null && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
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