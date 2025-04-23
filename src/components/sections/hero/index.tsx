'use client';

import Button from '@/components/button';
import Section from '@/components/shared/section';
import { ArrowRightIcon, MoveUpRight } from 'lucide-react';
import { AnimatedShinyText } from '@/components/magicui/animated-shiny-text';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react'; // Import motion
import { BorderBeam } from '@/components/magicui/border-beam';

// Hero Section: Main introduction section of the landing page.
export const HeroSection = () => {
  // Content for the hero section
  const heroContent = {
    magicUIText: '✨ Introducing Magic UI',
    mainTitle: 'Build Better Products 10x Faster',
    subTitle:
      'The ultimate platform for developers to build, test, and deploy products with unparalleled speed and efficiency.',
    buttonText: 'Get Started',
    dashboardImage: '/assets/images/dashboard.png',
  };

  // Animation variants for staggering children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Adjust stagger timing as needed
      },
    },
  };

  // Animation variant for individual items (fade in + slide up)
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5, // Adjust duration as needed
        ease: 'easeOut',
      },
    },
  };

  // Animation variant for the image (fade in + scale up)
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6, // Slightly longer duration for the image
        ease: 'easeOut',
      },
    },
  };

  return (
    <Section className="flex flex-col items-center justify-center text-center px-6 py-12 sm:py-24 overflow-hidden">
      {' '}
      {/* Added overflow-hidden */}
      {/* Wrap the content container with motion for staggering */}
      <motion.div
        className="mb-8 sm:my-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible" // Animate when the component mounts
      >
        {/* Animate the Magic UI badge */}
        <motion.div variants={itemVariants} className="w-full py-2 sm:py-4 flex justify-center">
          <div
            className={cn(
              'group rounded-full border border-[var(--border)] bg-[var(--secondary)] text-[var(--secondary-foreground)] text-xs sm:text-sm transition-all ease-in hover:cursor-pointer hover:bg-[var(--secondary-foreground)]  hover:text-[var(--secondary)] dark:border-[var(--border)]',
            )}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-2 py-0.5 sm:px-3 sm:py-1 transition ease-out group-hover:text-[var(--muted-foreground)] hover:duration-300">
              <span>{heroContent.magicUIText}</span>
              <ArrowRightIcon className="ml-0.5 sm:ml-1 size-2 sm:size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </div>
        </motion.div>

        {/* Animate the main title */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-3xl font-bold my-2 sm:my-4 text-[var(--foreground)]"
        >
          {heroContent.mainTitle}
        </motion.h1>

        {/* Animate the subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg mb-4 sm:mb-8 text-[var(--muted-foreground)]"
        >
          {heroContent.subTitle}
        </motion.p>

        {/* Animate the button */}
        <motion.div variants={itemVariants}>
          <Button text={heroContent.buttonText} icon={MoveUpRight} size={30} />
        </motion.div>
      </motion.div>
      {/* Animate the dashboard image */}
      <div className="relative p-2 rounded-lg">
        <motion.img
          src={heroContent.dashboardImage}
          alt="Nexaflow Dashboard Preview" // Added descriptive alt text
          className="rounded-[var(--radius-lg)] shadow-md max-w-full"
          variants={imageVariants} // Use image-specific variants
          initial="hidden"
          animate="visible" // Animate when the component mounts
          // Apply a slightly longer delay for the image if desired
          transition={{ delay: 0.5, ...imageVariants.visible.transition }}
        />
        <BorderBeam
          duration={6}
          size={400}
          className="from-transparent via-red-500 to-transparent"
        />
        <BorderBeam
          duration={6}
          delay={3}
          size={400}
          className="from-transparent via-blue-500 to-transparent"
        />
      </div>
    </Section>
  );
};
