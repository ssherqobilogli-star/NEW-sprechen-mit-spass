import { cn } from '../lib/utils';

interface SkeletonLoaderProps {
  type?: 'text' | 'circle' | 'card';
  className?: string;
}

export default function SkeletonLoader({ type = 'text', className }: SkeletonLoaderProps) {
  const baseClass = "skeleton rounded-lg";

  const typeClasses = {
    text: "h-4 w-full",
    circle: "h-12 w-12 rounded-full",
    card: "h-32 w-full rounded-2xl",
  };

  return (
    <div className={cn(baseClass, typeClasses[type], className)} />
  );
}