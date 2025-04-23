import Feature from '@/components/feature';
import { IconCloudCard } from '@/components/icon-clouds';

// Feature Section 3: Highlights key features of Nexaflow.
export const FeatureSection3 = () => {
  // Content for the feature section
  const featureSectionContent = {
    title: 'Develop Faster with Nexaflow',
    subtitle:
      'Streamline your development process and deliver products to market faster than ever before.',
    features: [
      {
        title: 'Automated Code Generation',
        description: 'Generate code automatically and eliminate tedious manual coding tasks.',
      },
      {
        title: 'Integrated Testing Tools',
        description:
          'Ensure code quality and reliability with our comprehensive suite of testing tools.',
      },
      {
        title: 'Cloud-Based Environment',
        description:
          'Develop, test, and deploy your applications in our secure and scalable cloud environment.',
      },
    ],
    buttonText: 'Learn More',
    displayComponent: <IconCloudCard />,
    imageAlt: 'Advanced Features Illustration',
  };

  return <Feature content={featureSectionContent} imagePosition="left" />;
};
