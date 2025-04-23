import Section from '@/components/shared/section';

// Trusted By Section: Displays logos of companies that trust Nexaflow.
export const TrustedBySection = () => {
  // Content for the trusted by section
  const trustedByContent = {
    title: 'Trusted By Leading Companies',
    logos: [
      'https://www.svgrepo.com/show/473503/zoom.svg',
      'https://www.svgrepo.com/show/305692/amd.svg',
      'https://www.svgrepo.com/show/473527/amazonaws.svg',
      'https://www.svgrepo.com/show/473683/kaggle.svg',
      'https://www.svgrepo.com/show/473567/cisco.svg',
      'https://www.svgrepo.com/show/473665/intel.svg',
    ],
  };

  return (
    <Section className="py-8 sm:py-12">
      <div className="container mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-[var(--foreground)] mb-6 sm:mb-8">
          {trustedByContent.title}
        </h2>

        {/* Logos */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8">
          {trustedByContent.logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center w-24 h-12 sm:w-32 sm:h-16">
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className="max-h-full max-w-full object-contain invert-0 dark:invert"
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default TrustedBySection;
