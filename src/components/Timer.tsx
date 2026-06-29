import { useEffect, useState } from 'react';

interface TimerProps {
  duration: number;
  onTimeUp: () => void;
}

export default function Timer({ duration, onTimeUp }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState(duration);
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (timeLeft / duration) * circumference;

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, onTimeUp]);

  const getColor = () => {
    if (timeLeft > duration * 0.5) return 'var(--success)';
    if (timeLeft > duration * 0.2) return 'var(--warning)';
    return 'var(--error)';
  };

  return (
    <div className="relative flex items-center justify-center w-20 h-20">
      <svg className="transform -rotate-90 w-20 h-20">
        <circle
          cx="40" cy="40" r={radius}
          stroke="var(--surface-hover)" strokeWidth="6" fill="transparent"
        />
        <circle
          cx="40" cy="40" r={radius}
          stroke={getColor()} strokeWidth="6" fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-1000 linear"
        />
      </svg>
      <div className="absolute text-xl font-bold text-[var(--text-primary)]">
        {timeLeft}
      </div>
    </div>
  );
}