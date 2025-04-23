'use client';

import { motion } from 'framer-motion';
import { ListChecks, BarChartBig, MonitorSmartphone } from 'lucide-react';
import { useTheme } from 'next-themes'; // Import useTheme
import { cn } from '@/utils/cn'; // Assuming cn utility exists for class merging

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4, // Stagger animation for each icon container
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },
};

// Enhanced animation for the icons (pulse + float)
const iconAnimation = {
  scale: [1, 1.08, 1], // Slightly stronger pulse
  y: [0, -5, 0], // Add a subtle vertical float
  transition: {
    duration: 3, // Slow down the animation slightly
    repeat: Infinity,
    ease: 'easeInOut',
  },
};

interface IconWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const IconWrapper: React.FC<IconWrapperProps> = ({ children, className }) => (
  <motion.div
    variants={itemVariants}
    className={cn(
      'flex items-center justify-center p-5 rounded-xl bg-muted/40 shadow-md', // Adjusted padding, rounding, background opacity, shadow, removed border
      className,
    )}
  >
    <motion.div animate={iconAnimation}>{children}</motion.div>
  </motion.div>
);

export const FeatureVisualization4: React.FC = () => {
  const { resolvedTheme } = useTheme(); // Get the current theme
  const iconSize = 50; // Adjust size as needed

  // Determine color based on theme, default to black if theme is unresolved
  const iconColor = resolvedTheme === 'dark' ? 'white' : 'black';

  // Optional: Add a check for when the theme is not yet resolved
  if (!resolvedTheme) {
    // You might want to return null or a loading indicator until the theme is resolved
    // For simplicity here, we'll proceed with the default color (black)
  }

  return (
    <motion.div
      className="relative flex h-full w-full items-center justify-around gap-5 overflow-hidden rounded-xl bg-background p-8 shadow-inner" // Adjusted padding, gap, rounding, shadow, removed border, added relative/overflow-hidden for potential background effects
      variants={containerVariants}
      initial="hidden"
      whileInView="visible" // Animate when in view
      viewport={{ once: true, amount: 0.3 }} // Trigger animation once when 30% visible
    >
      <IconWrapper>
        <ListChecks size={iconSize} color={iconColor} aria-label="Task Management Icon" />
      </IconWrapper>
      <IconWrapper>
        <BarChartBig size={iconSize} color={iconColor} aria-label="Automated Reporting Icon" />
      </IconWrapper>
      <IconWrapper>
        <MonitorSmartphone
          size={iconSize}
          color={iconColor}
          aria-label="Cross-Platform Compatibility Icon"
        />
      </IconWrapper>
    </motion.div>
  );
};

export default FeatureVisualization4;
