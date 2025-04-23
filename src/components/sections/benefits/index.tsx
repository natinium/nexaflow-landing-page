import { OrbitingCirclesDemo } from '@/components/orbitingCircles';
import Section from '@/components/shared/section';

// Benefits Section: Showcases the benefits of using Nexaflow.
export const BenefitsSection = () => {
  // Content for the benefits section
  const benefitsContent = {
    title: 'Empower Your Product Team',
    description:
      "Unleash your team's potential with Nexaflow. Build products faster, collaborate seamlessly, and deliver exceptional quality.",
    animationDescription: 'Discover the power of streamlined development',
  };

  return (
    <Section id="benefits" className="py-12 sm:py-24">
      <div className="max-w-7xl mx-auto text-center px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-12 text-[var(--foreground)]">
          {benefitsContent.title}
        </h1>
        <p className="text-sm sm:text-lg text-[var(--muted-foreground)] mb-6 sm:mb-12 max-w-2xl mx-auto">
          {benefitsContent.description}
        </p>
        <div className="flex items-center justify-center p-4 sm:p-6 rounded-[var(--radius-lg)] bg-[var(--secondary)] w-full">
          <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] shadow-md">
            <div className="flex items-center justify-center">
              <OrbitingCirclesDemo />
            </div>
            {/* Animation description */}
            <div className="p-2 sm:p-4 text-center text-sm text-[var(--card-foreground)]">
              {benefitsContent.animationDescription}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default BenefitsSection;
