import { useState } from 'react';
import { motion } from 'framer-motion';
import AudioButton from './AudioButton';

interface FlipCardProps {
  german: string;
  article?: 'der' | 'die' | 'das';
  uzbek: string;
  example?: string;
  exampleUz?: string;
}

export default function FlipCard({ german, article, uzbek, example, exampleUz }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative w-full h-64 perspective-1000 cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
      >
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden card flex flex-col items-center justify-center text-center p-6">
          <div className="absolute top-4 right-4">
            <AudioButton text={`${article ? article + ' ' : ''}${german}`} />
          </div>
          {article && <span className="text-sm font-bold text-[var(--text-muted)] mb-2 uppercase tracking-wider">{article}</span>}
          <h2 className="text-3xl font-bold text-[var(--text-primary)]">{german}</h2>
          <p className="text-sm text-[var(--text-muted)] mt-4">Aylantirish uchun bosing</p>
        </div>

        {/* Back */}
        <div className="absolute w-full h-full backface-hidden card flex flex-col items-center justify-center text-center p-6 [transform:rotateY(180deg)] border-[var(--primary)] bg-[var(--primary)]/5">
          <h2 className="text-2xl font-bold text-[var(--primary)] mb-4">{uzbek}</h2>
          {example && (
            <div className="mt-2 p-3 bg-[var(--surface)] rounded-lg text-sm text-[var(--text-secondary)] italic">
              "{example}"
            </div>
          )}
          {exampleUz && (
            <div className="mt-2 p-3 bg-[var(--surface)] rounded-lg text-sm text-[var(--text-muted)]">
              {exampleUz}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}