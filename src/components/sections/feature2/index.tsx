import { AnimatedBeamMultipleOutput } from '@/components/animated-beam';
import Feature from '@/components/feature';

// Feature Section 2: Showcases advanced capabilities of Nexaflow.
export const FeatureSection2 = () => {
  // Content for the feature section
  const featureSectionContent = {
    title: 'Boost Productivity with Nexaflow',
    subtitle: 'Revolutionize your workflow with intelligent automation and seamless collaboration.',
    features: [
      {
        title: 'AI-Driven Automation',
        description:
          'Automate repetitive tasks and focus on what matters most: innovation and creativity.',
      },
      {
        title: 'Real-Time Collaboration',
        description:
          'Connect with your team in real-time, share ideas, and build together, no matter where you are.',
      },
      {
        title: 'Advanced Analytics',
        description:
          'Track your progress, identify bottlenecks, and optimize your development process with powerful analytics.',
      },
    ],
    buttonText: 'Learn More',
    displayComponent: <AnimatedBeamMultipleOutput />,
    imageAlt: 'Advanced Features Illustration',
  };

  return <Feature content={featureSectionContent} imagePosition="right" />;
};
