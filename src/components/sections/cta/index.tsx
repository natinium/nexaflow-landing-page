import Button from '@/components/button';
import Section from '@/components/shared/section';
import { MoveUpRight } from 'lucide-react';
import { GridPattern } from '@/components/magicui/grid-pattern';
import { cn } from '@/lib/utils';

// CTA Section: Call to action section for Nexaflow.
export const CTASection = () => {
  // Content for the CTA section
  const ctaContent = {
    title: 'Ready to Rock and Roll?',
    description:
      'Supercharge your development with Nexaflow. Start your free trial today and see how much faster you can build.',
    buttonText: 'Try Nexaflow for free',
  };

  return (
    <Section className="relative overflow-hidden py-12 sm:py-24">
      <GridPattern
        width={20}
        height={20}
        x={-1}
        y={-1}
        className={cn(
          '[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ',
        )}
      />
      <div className="relative z-10 text-center px-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 sm:mb-6 text-[var(--foreground)]">
          {ctaContent.title}
        </h1>
        <p className="text-sm sm:text-lg text-[var(--muted-foreground)] mb-6 sm:mb-8 max-w-2xl mx-auto">
          {ctaContent.description}
        </p>
        <Button text={ctaContent.buttonText} icon={MoveUpRight} size={20} />
      </div>
    </Section>
  );
};
