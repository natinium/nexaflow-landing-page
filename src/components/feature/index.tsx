import Section from '@/components/shared/section';
import Button from '@/components/button';
import { Check, MoveUpRight } from 'lucide-react';
import Image from 'next/image';
import React, { ReactNode } from 'react';

interface FeatureProps {
  content: {
    title: string;
    subtitle: string;
    features: { title: string; description: string }[];
    buttonText: string;
    imageSrc?: string; // Make imageSrc optional
    imageAlt?: string; // Make imageAlt optional
    // New prop to accept a React component
    displayComponent?: ReactNode;
  };
  imagePosition?: 'left' | 'right';
}

const Feature = ({ content, imagePosition = 'left' }: FeatureProps) => {
  const { title, subtitle, features, buttonText, imageSrc, imageAlt, displayComponent } = content;

  const displayColumn = (
    <div
      className={`
        w-full md:w-1/2 lg:w-2/5
        ${imagePosition === 'left' ? 'order-1 md:order-1' : 'order-1 md:order-2'}
      `}
    >
      <div className="rounded-[var(--radius-md)] aspect-video flex items-center justify-center bg-background]">
        {displayComponent ? (
          <>{displayComponent}</>
        ) : imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt || 'Feature Visual'}
            width={500}
            height={350}
            className="object-cover rounded-[var(--radius-md)]"
          />
        ) : (
          <div className="text-[var(--muted-foreground)] dark:text-[var(--secondary-foreground)] flex items-center justify-center rounded-[var(--radius-md)]">
            No Visual Content
          </div>
        )}
      </div>
    </div>
  );

  const textColumn = (
    <div
      className={`
        w-full md:w-1/2 lg:w-3/5 space-y-4 sm:space-y-6 text-left md:text-left
        ${imagePosition === 'left' ? 'order-2 md:order-2' : 'order-2 md:order-1'}
      `}
    >
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-[var(--foreground)]">
        {title}
      </h1>
      <p className="text-sm sm:text-lg text-[var(--muted-foreground)]">{subtitle}</p>

      <ul className="space-y-3 pt-3 sm:pt-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 justify-start md:justify-start">
            <div className="flex items-center justify-center rounded-full p-2 bg-[var(--secondary)] dark:bg-[var(--muted)]">
              <div className="flex-shrink-0 bg-green-400 text-white rounded-full p-1">
                <Check className="size-4 stroke-2" />
              </div>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-[var(--foreground)]">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm text-[var(--muted-foreground)]">
                {feature.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
      {buttonText && <Button text={buttonText} icon={MoveUpRight} size={20} />}
    </div>
  );

  return (
    <Section className="py-8 sm:py-12 md:py-16">
      <div className="overflow-hidden max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          {displayColumn}
          {textColumn}
        </div>
      </div>
    </Section>
  );
};

export default Feature;
