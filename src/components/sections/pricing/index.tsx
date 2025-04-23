import Section from '@/components/shared/section';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { CheckCircle, Sun } from 'lucide-react';

// Pricing Section: Displays pricing plans for Nexaflow.
export const PricingSection = () => {
  // Content for the pricing section
  const pricingContent = {
    title: 'Simple Pricing, Powerful Features',
    description:
      "Find the perfect plan to unlock your team's potential and accelerate your development process.",
    yearlyBilling: 'Yearly Billing',
    monthlyBilling: 'Monthly Billing',
    pricingPlans: {
      yearly: [
        {
          name: 'Startup',
          price: '$19',
          discount: 'Save 20%!',
          features: ['Up to 5 users', '100GB storage', 'Community support', 'Basic integrations'],
          buttonText: 'Start Free Trial',
          buttonVariant: 'outline',
        },
        {
          name: 'Business',
          price: '$49',
          discount: 'Most Popular',
          features: ['Up to 25 users', '1TB storage', 'Priority support', 'Advanced integrations'],
          buttonText: 'Get Started',
          buttonVariant: 'default',
          highlighted: true,
        },
        {
          name: 'Enterprise',
          price: 'Contact Us',
          features: [
            'Unlimited users',
            'Unlimited storage',
            '24/7 premium support',
            'Custom integrations',
          ],
          buttonText: 'Contact Sales',
          buttonVariant: 'outline',
        },
      ],
      monthly: [
        {
          name: 'Startup',
          price: '$24',
          features: ['Up to 5 users', '100GB storage', 'Community support', 'Basic integrations'],
          buttonText: 'Start Free Trial',
          buttonVariant: 'outline',
        },
        {
          name: 'Business',
          price: '$59',
          features: ['Up to 25 users', '1TB storage', 'Priority support', 'Advanced integrations'],
          buttonText: 'Get Started',
          buttonVariant: 'default',
          highlighted: true,
        },
        {
          name: 'Enterprise',
          price: 'Contact Us',
          features: [
            'Unlimited users',
            'Unlimited storage',
            '24/7 premium support',
            'Custom integrations',
          ],
          buttonText: 'Contact Sales',
          buttonVariant: 'outline',
        },
      ],
    },
  };

  interface Plan {
    name: string;
    price: string;
    discount?: string;
    features: string[];
    buttonText: string;
    buttonVariant: string;
    highlighted?: boolean;
  }

  const PricingCard = ({ plan, isYearly }: { plan: Plan; isYearly: boolean }) => {
    const price =
      plan.price === 'Contact Us' ? plan.price : `${plan.price}/${isYearly ? 'yr' : 'mo'}`;
    const discount = isYearly && plan.discount;

    return (
      <div
        className={cn(
          'relative flex flex-col justify-center h-full text-center mt-6 rounded-xl border-2 bg-[var(--card)] text-[var(--card-foreground)]',
          'p-4 sm:p-6 md:p-8',
          plan.highlighted ? 'border-[var(--primary)] shadow-lg' : 'border-[var(--border)]',
        )}
        style={{ minWidth: '280px' }}
      >
        <span className="uppercase text-sm text-[var(--muted-foreground)]">{plan.name}</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)] my-2">{price}</h2>
        {discount && <p className="text-sm text-[var(--primary-foreground)] mb-2">{discount}</p>}
        <ul className="my-4 sm:my-6 space-y-1 sm:space-y-2">
          {plan.features.map((feature) => (
            <li key={feature} className="text-[var(--muted-foreground)] flex items-center gap-2">
              <CheckCircle className="text-green-500 w-4 h-4" />
              {feature}
            </li>
          ))}
        </ul>
        <div className="mt-auto">
          <Button
            className="w-full border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--muted)] hover:text-[var(--foreground)]"
            variant={'outline'}
          >
            {plan.buttonText}
          </Button>
        </div>
      </div>
    );
  };

  return (
    <Section className="py-20" id="pricing">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4">
          {pricingContent.title}
        </h1>
        <p className="text-lg text-[var(--muted-foreground)]">{pricingContent.description}</p>
      </div>
      <div className="max-w-6xl mx-auto ">
        <Tabs defaultValue="yearly" className="w-full flex flex-col items-center">
          <TabsList className="bg-[var(--secondary)] rounded-md p-2 flex justify-center space-x-2 sm:space-x-4 w-full sm:w-auto">
            <TabsTrigger
              className="py-2 px-3 sm:px-4 rounded-md text-[var(--foreground)] data-[state=active]:bg-[var(--primary)] data-[state=active]:text-[var(--primary-foreground)] transition-colors duration-200"
              value="yearly"
            >
              {pricingContent.yearlyBilling}{' '}
              <Sun className="inline-block w-4 h-4 ml-1 text-yellow-500" />
            </TabsTrigger>
            <TabsTrigger
              className="py-2 px-3 sm:px-4 rounded-md text-[var(--foreground)] data-[state=active]:bg-[var(--primary)] data-[state=active]:text-[var(--primary-foreground)] transition-colors duration-200"
              value="monthly"
            >
              {pricingContent.monthlyBilling}
            </TabsTrigger>
          </TabsList>
          <div className="mt-8 w-full">
            <TabsContent
              value="yearly"
              className="sm:grid sm:grid-cols-3 sm:gap-8 flex flex-col items-center gap-8"
            >
              {pricingContent.pricingPlans.yearly.map((plan, index) => (
                <PricingCard key={index} plan={plan} isYearly />
              ))}
            </TabsContent>
            <TabsContent
              value="monthly"
              className="sm:grid sm:grid-cols-3 sm:gap-8 flex flex-col items-center gap-8"
            >
              {pricingContent.pricingPlans.monthly.map((plan, index) => (
                <PricingCard key={index} plan={plan} isYearly={false} />
              ))}
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </Section>
  );
};
