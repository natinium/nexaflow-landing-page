import { OrbitingCircles } from '@/components/magicui/orbiting-circles';
import { BadgeDollarSign, GitGraph, GoalIcon, Star, WholeWord } from 'lucide-react';

export function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-64 w-48 sm:h-64 sm:w-64 flex-col items-center justify-center overflow-hidden">
      <OrbitingCircles iconSize={20} radius={80}>
        <Icons.whatsapp />
        <Icons.notion />
        <Icons.openai />
        <Icons.googleDrive />
        <Icons.whatsapp />
      </OrbitingCircles>
      <OrbitingCircles iconSize={15} radius={40} reverse speed={2}>
        <Icons.whatsapp />
        <Icons.notion />
        <Icons.openai />
        <Icons.googleDrive />
      </OrbitingCircles>
    </div>
  );
}

const Icons = {
  gitHub: () => <GitGraph size={20} />,
  notion: () => <Star size={20} />,
  openai: () => <WholeWord size={20} />,
  googleDrive: () => <GoalIcon size={20} />,
  whatsapp: () => <BadgeDollarSign size={20} />,
};
