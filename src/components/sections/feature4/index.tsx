import Feature from '@/components/feature';
// import AnimatedFeatureList from '@/components/animated-feature-list'; // No longer needed
import FeatureVisualization4 from '@/components/feature-visualization-4'; // Import the new visualization

// Feature Section 4: Showcases the benefits of using Nexaflow.
export const FeatureSection4 = () => {
  // Define features array first to avoid self-reference issues
  const features = [
    {
      title: 'Smart Task Management',
      description:
        'Prioritize tasks, track progress, and optimize your workflow with our intelligent task management system.',
    },
    {
      title: 'Automated Reporting',
      description:
        "Generate insightful reports automatically and gain a clear understanding of your team's performance.",
    },
    {
      title: 'Cross-Platform Compatibility',
      description:
        'Build applications that run seamlessly on any device, reaching a wider audience and maximizing your impact.',
    },
  ];

  // Content for the feature section, using the predefined features array
  const featureSectionContent = {
    title: 'Maximize Your Output with Nexaflow',
    subtitle: "Unlock your team's full potential and achieve unprecedented levels of productivity.",
    features: features, // Use the predefined features array
    buttonText: 'Learn More',
    // Use the new FeatureVisualization4 component
    displayComponent: <FeatureVisualization4 />,
    imageAlt: 'Advanced Features Illustration',
  };

  return <Feature content={featureSectionContent} imagePosition="right" />;
};
