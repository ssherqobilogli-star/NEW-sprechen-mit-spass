import { Volume2 } from 'lucide-react';

interface AudioButtonProps {
  text: string;
  lang?: string;
}

export default function AudioButton({ text, lang = 'de-DE' }: AudioButtonProps) {
  const playAudio = (e: React.MouseEvent) => {
    e.stopPropagation();
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <button 
      onClick={playAudio} 
      className="p-2 rounded-full bg-[var(--surface-hover)] hover:bg-[var(--primary)]/10 text-[var(--primary)] transition-colors"
      aria-label="Tinglash"
    >
      <Volume2 size={20} />
    </button>
  );
}