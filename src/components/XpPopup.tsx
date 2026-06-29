import { motion, AnimatePresence } from 'framer-motion';

interface XpPopupProps {
  amount: number;
  isVisible: boolean;
  onComplete?: () => void;
}

export default function XpPopup({ amount, isVisible, onComplete }: XpPopupProps) {
  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.5 }}
          animate={{ opacity: 1, y: -40, scale: 1.2 }}
          exit={{ opacity: 0, y: -60, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none"
        >
          <div className="bg-[var(--accent)] text-white px-4 py-2 rounded-full font-black text-2xl shadow-xl border-2 border-white/20">
            +{amount} XP
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}