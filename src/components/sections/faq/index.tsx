import Section from '@/components/shared/section';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

// FAQ Section: Frequently asked questions about Nexaflow.
export const FaqSection = () => {
  // Content for the FAQ section
  const faqContent = {
    title: 'Frequently Asked Questions',
    description: 'Everything you need to know about Nexaflow',
    faqData: [
      {
        question: 'What is Nexaflow and what does it do?',
        answer:
          'Nexaflow is the ultimate developer tool, designed to accelerate product development. It provides a suite of features to streamline workflows, enhance collaboration, and ensure top-notch quality.',
      },
      {
        question: 'How much does Nexaflow cost? What are the pricing plans?',
        answer:
          "We offer a range of pricing plans tailored to different team sizes and needs. From startups to enterprises, find the perfect plan to unlock your team's potential. Visit our pricing page for details.",
      },
      {
        question: 'Is there a free trial available for Nexaflow?',
        answer:
          'Absolutely! We offer a 14-day free trial so you can experience the power of Nexaflow firsthand. Get full access to all features and see how it transforms your development process.',
      },
      {
        question: 'What kind of support do you offer to Nexaflow users?',
        answer:
          "We pride ourselves on providing exceptional support. Access our extensive knowledge base, join our community forum, or connect with our support team via email or live chat. We're here to help you succeed.",
      },
      {
        question: 'Can Nexaflow integrate with other tools I am currently using?',
        answer:
          'Yes, Nexaflow integrates seamlessly with popular development tools like VS Code, Jira, Slack, and more. Connect your favorite tools and create a unified development ecosystem.',
      },
      {
        question: 'How secure is my data with Nexaflow?',
        answer:
          'Your data security is our top priority. We employ industry-leading security measures, including encryption, access controls, and regular security audits, to ensure your data is always protected.',
      },
      {
        question: 'What are the system requirements for using Nexaflow?',
        answer:
          'Nexaflow is a cloud-based platform, so all you need is a modern web browser and a stable internet connection. Start building amazing products from anywhere, anytime.',
      },
      {
        question: 'Can I customize Nexaflow to fit my specific business needs?',
        answer:
          'Yes, Nexaflow is highly customizable. Tailor workflows, create custom fields, and integrate with your existing systems to create a development environment that perfectly matches your needs.',
      },
      {
        question: 'Where can I find tutorials and guides for using Nexaflow?',
        answer:
          'Our comprehensive documentation provides everything you need to get started with Nexaflow. Explore tutorials, guides, and best practices to master the platform and accelerate your development journey.',
      },
    ],
  };

  return (
    <Section id="faq" className="py-12 sm:py-24">
      <div className="text-center mb-8 sm:mb-16 px-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[var(--foreground)]">
          {faqContent.title}
        </h1>
        <p className="text-sm sm:text-lg text-[var(--muted-foreground)]">
          {faqContent.description}
        </p>
      </div>
      <div className="max-w-3xl mx-auto w-full space-y-4 sm:space-y-6 px-6">
        <Accordion type="single" collapsible className="w-full">
          {faqContent.faqData.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index + 1}`}
              className="border-b border-[var(--border)] transition-colors duration-200"
            >
              <AccordionTrigger className="text-sm sm:text-lg font-semibold hover:underline py-3 sm:py-4 text-[var(--foreground)]">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-xs sm:text-sm text-[var(--muted-foreground)] py-3 sm:py-4 leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
};
