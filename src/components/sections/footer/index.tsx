import Section from '@/components/shared/section';
import { Infinity } from 'lucide-react';
import Link from 'next/link';

// Footer Section: Contains links and copyright information.
export const FooterSection = () => {
  // Content for the footer section
  const footerContent = {
    companyName: 'Nexaflow',
    companyDescription: 'The developer tool to build products fast.',
    builtBy: 'Built with ❤️ by ናቲኒዬም',
    exploreTitle: 'Explore',
    benefitsLink: 'Benefits',
    howItWorksLink: 'How it works',
    faqLink: 'FAQ',
    pricingLink: 'Pricing',
    copyright: `© ${new Date().getFullYear()} Clicks Design. All Rights Reserved.`,
    termsLink: 'Terms of Service',
    privacyLink: 'Privacy Policy',
  };

  return (
    <Section className="py-16">
      <div className="container mx-auto px-4">
        <hr className="border-gray-700 mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Left Section */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Infinity size={30} className="text-primary-500" />
              <h2 className="text-xl font-semibold">{footerContent.companyName}</h2>
            </div>
            <p className="text-sm">{footerContent.companyDescription}</p>
            <p className="text-sm text-gray-500">{footerContent.builtBy}</p>
          </div>

          {/* Right Section */}
          <div>
            <h3 className="text-md font-semibold mb-4">{footerContent.exploreTitle}</h3>
            <ul className="flex gap-6">
              <li>
                <Link href="/benefits" className="hover:text-primary-500 transition-colors">
                  {footerContent.benefitsLink}
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-primary-500 transition-colors">
                  {footerContent.howItWorksLink}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-primary-500 transition-colors">
                  {footerContent.faqLink}
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-primary-500 transition-colors">
                  {footerContent.pricingLink}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-gray-700 mt-8" />
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>{footerContent.copyright}</p>
          <div className="flex gap-4">
            <Link href="/terms" className="hover:text-gray-400 transition-colors">
              {footerContent.termsLink}
            </Link>
            <Link href="/privacy" className="hover:text-gray-400 transition-colors">
              Privacy Policy
            </Link>
            <Link
              href="https://cal.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              Cal.com
            </Link>
            <Link
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              X (Twitter)
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};
