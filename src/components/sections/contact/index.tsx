import Button from '@/components/button';
import Section from '@/components/shared/section';
import { MoveUpRight } from 'lucide-react';

// Contact Section: Allows users to contact Nexaflow.
export const ContactSection = () => {
  // Content for the contact section
  const contactContent = {
    title: 'Still have some questions?',
    description:
      "Reach out to us and let our experts guide you. We're here to help you build better products, faster.",
    buttonText: 'Send us an email',
    socialMediaText: 'Connect with us on social media for the latest updates and insights:',
  };

  return (
    <Section>
      <div className="text-center">
        <h2 className="text-6xl font-bold mb-6">{contactContent.title}</h2>
        <p className="text-lg text-gray-400 mb-8">{contactContent.description}</p>
        <Button text={contactContent.buttonText} icon={MoveUpRight} size={20} />
      </div>
      <hr className="border-white/10 mt-12 w-2/3 mx-auto" />
      <div className="text-center mt-8 text-gray-500 text-sm">
        <p>{contactContent.socialMediaText}</p>
        {/* TODO: Add social media links/icons here */}
      </div>
    </Section>
  );
};
