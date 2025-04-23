import Section from '@/components/shared/section';
import { Activity, Globe, Smile, Users } from 'lucide-react';

// Stats Section: Displays key statistics about Nexaflow.
export const StatsSection = () => {
  // Content for the stats section
  const statsContent = {
    title: 'Our Impact, By the Numbers',
    description: 'See how Nexaflow is transforming product development for teams around the world.',
    statsData: [
      {
        icon: Users,
        value: '10,000+',
        label: 'Developers Empowered',
      },
      {
        icon: Globe,
        value: '50+',
        label: 'Countries Reached',
      },
      {
        icon: Smile,
        value: '99.9%',
        label: 'Customer Satisfaction',
      },
      {
        icon: Activity,
        value: 'Millions',
        label: 'Lines of Code Generated',
      },
    ],
  };

  return (
    <Section className="py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white mb-3">{statsContent.title}</h2>
        <p className="text-gray-400 text-lg">{statsContent.description}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {statsContent.statsData.map((stat, index) => (
          <div
            key={index}
            className="bg-[var(--secondary)] dark:bg-[#121317] border-2 border-[var(--border)] p-4 sm:p-6 rounded-xl flex flex-col justify-between items-start h-[140px] sm:h-[160px]"
          >
            <div className="bg-green-500 rounded-full p-2 sm:p-3 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center mb-2 sm:mb-4">
              <stat.icon size={16} className="text-[var(--foreground)]" />
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--foreground)]">
                {stat.value}
              </h3>
              <p className="text-sm sm:text-md text-[var(--muted-foreground)]">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
