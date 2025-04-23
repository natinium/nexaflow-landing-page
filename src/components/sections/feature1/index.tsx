import AnimatedListDemo from '@/components/animatedList';
import Feature from '@/components/feature';

// Feature Section 1: Showcases advanced capabilities of Nexaflow.
export const FeatureSection1 = () => {
  // Content for the feature section
  const featureSectionContent = {
    title: 'Explore Advanced Capabilities',
    subtitle: 'Unleash the power of AI-driven development with Nexaflow.',
    features: [
      {
        title: 'AI-Powered Insights',
        description:
          'Transform your development process with intelligent insights that accelerate decision-making.',
      },
      {
        title: 'Seamless Integrations',
        description:
          'Connect your favorite tools and platforms for a streamlined and efficient workflow.',
      },
      {
        title: 'Scalable Architecture',
        description: 'Build robust and scalable applications that can handle any level of demand.',
      },
    ],
    buttonText: 'Learn More',
    displayComponent: <AnimatedListDemo />,
    imageAlt: 'Advanced Features Illustration',
  };

  return (
    <div id="howItWorks">
      <Feature content={featureSectionContent} imagePosition="left" />
    </div>
  );
};
