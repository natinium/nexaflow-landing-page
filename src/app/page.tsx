import ThemeToggle from '@/components/ThemeToggle/component';

import {
  HeaderSection,
  HeroSection,
  TrustedBySection,
  BenefitsSection,
  FeatureSection1,
  FeatureSection2,
  FeatureSection3,
  FeatureSection4,
  StatsSection,
  TestimonialSection,
  FaqSection,
  ContactSection,
  PricingSection,
  CTASection,
  FooterSection,
} from '@/components/sections';

const Home = () => {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      <div className="fixed top-10 right-10 z-51">
        <ThemeToggle />
      </div>
      <HeaderSection />
      <HeroSection />
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
