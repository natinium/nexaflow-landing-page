import ThemeToggle from '@/components/ThemeToggle/component';
import dynamic from 'next/dynamic';

// Directly import components likely to be above the fold
import { HeaderSection, HeroSection } from '@/components/sections';

// Dynamically import components likely to be below the fold
const TrustedBySection = dynamic(() =>
  import('@/components/sections').then((mod) => mod.TrustedBySection),
);
const BenefitsSection = dynamic(() =>
  import('@/components/sections').then((mod) => mod.BenefitsSection),
);
const FeatureSection1 = dynamic(() =>
  import('@/components/sections').then((mod) => mod.FeatureSection1),
);
const FeatureSection2 = dynamic(() =>
  import('@/components/sections').then((mod) => mod.FeatureSection2),
);
const FeatureSection3 = dynamic(() =>
  import('@/components/sections').then((mod) => mod.FeatureSection3),
);
const FeatureSection4 = dynamic(() =>
  import('@/components/sections').then((mod) => mod.FeatureSection4),
);
const StatsSection = dynamic(() => import('@/components/sections').then((mod) => mod.StatsSection));
const TestimonialSection = dynamic(() =>
  import('@/components/sections').then((mod) => mod.TestimonialSection),
);
const FaqSection = dynamic(() => import('@/components/sections').then((mod) => mod.FaqSection));
const ContactSection = dynamic(() =>
  import('@/components/sections').then((mod) => mod.ContactSection),
);
const PricingSection = dynamic(() =>
  import('@/components/sections').then((mod) => mod.PricingSection),
);
const CTASection = dynamic(() => import('@/components/sections').then((mod) => mod.CTASection));
const FooterSection = dynamic(() =>
  import('@/components/sections').then((mod) => mod.FooterSection),
);

const Home = () => {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      <div className="fixed top-10 right-10 z-51">
        <ThemeToggle />
      </div>
      {/* Components likely above the fold */}
      <HeaderSection />
      <HeroSection />

      {/* Components likely below the fold (lazy loaded) */}
      <TrustedBySection />
      <BenefitsSection />
      <FeatureSection1 />
      <FeatureSection2 />
      <FeatureSection3 />
      <FeatureSection4 />
      <StatsSection />
      <TestimonialSection />
      <FaqSection />
      <ContactSection />
      <PricingSection />
      <CTASection />
      <FooterSection />
    </main>
  );
};

export default Home;
