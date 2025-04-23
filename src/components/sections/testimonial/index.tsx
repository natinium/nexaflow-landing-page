import Section from '@/components/shared/section';
import Image from 'next/image';

// Testimonial Section: Displays testimonials from Nexaflow users.
export const TestimonialSection = () => {
  // Content for the testimonial section
  const testimonialContent = {
    title: 'What Our Users Say',
    description: 'Real stories from satisfied customers.',
    testimonialData: {
      testmonial_1: {
        user_name: 'John Doe',
        user_tag: '@johndoe',
        user_image: 'https://mighty.tools/mockmind-api/content/human/1.jpg',
        text: "With Nexaflow, our team's productivity has soared. We're delivering high-quality products in record time!",
      },
      testmonial_2: {
        user_name: 'Jane Smith',
        user_tag: '@janesmith',
        user_image: 'https://mighty.tools/mockmind-api/content/human/50.jpg',
        text: 'Nexaflow has transformed our workflow. The seamless integration and intuitive interface are a game-changer.',
      },
      testmonial_3: {
        user_name: 'Alice Johnson',
        user_tag: '@alicejohnson',
        user_image: 'https://mighty.tools/mockmind-api/content/human/23.jpg',
        text: 'The support team is fantastic! They are always quick to respond and provide helpful solutions. Nexaflow is a must-have tool.',
      },
      testmonial_4: {
        user_name: 'Bob Brown',
        user_tag: '@bobbrown',
        user_image: 'https://mighty.tools/mockmind-api/content/human/78.jpg',
        text: 'Nexaflow is reliable and efficient. It has streamlined our development process and improved our overall output.',
      },
      testmonial_5: {
        user_name: 'Eva Green',
        user_tag: '@evagreen',
        user_image: 'https://mighty.tools/mockmind-api/content/human/39.jpg',
        text: 'Nexaflow is a powerful tool that has exceeded our expectations. It has truly revolutionized the way we build products.',
      },
      testmonial_6: {
        user_name: 'Michael Lee',
        user_tag: '@michaellee',
        user_image: 'https://mighty.tools/mockmind-api/content/human/61.jpg',
        text: 'Nexaflow is an invaluable asset to our team. It has helped us save time, reduce costs, and deliver exceptional results.',
      },
      testmonial_7: {
        user_name: 'Sarah Wilson',
        user_tag: '@sarahwilson',
        user_image: 'https://mighty.tools/mockmind-api/content/human/92.jpg',
        text: 'Nexaflow is innovative and cutting-edge. It has empowered us to create solutions that were previously impossible.',
      },
      testmonial_8: {
        user_name: 'David Clark',
        user_tag: '@davidclark',
        user_image: 'https://mighty.tools/mockmind-api/content/human/15.jpg',
        text: 'Nexaflow is user-friendly and intuitive. It has made our development process more enjoyable and productive.',
      },
      testmonial_9: {
        user_name: 'Olivia Martinez',
        user_tag: '@oliviamartinez',
        user_image: 'https://mighty.tools/mockmind-api/content/human/45.jpg',
        text: 'Nexaflow is a game-changer. It has elevated our product development to a whole new level.',
      },
    },
  };

  interface TestimonialCardProps {
    testimonial: {
      user_name: string;
      user_tag: string;
      user_image: string;
      text: string;
    };
  }

  const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
    return (
      <div className="bg-[var(--card)] border-2 border-[var(--border)] p-6 rounded-xl flex flex-col">
        <blockquote className="mb-4 text-lg italic text-[var(--muted-foreground)] relative pl-6">
          <p>{testimonial.text}</p>
          <div className="absolute top-0 left-0 text-gray-400 text-2xl">“</div>
          <div className="absolute bottom-0 right-0 text-gray-400 text-2xl">”</div>
        </blockquote>
        <div className="mt-auto flex items-center space-x-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
            <Image
              src={testimonial.user_image}
              alt={testimonial.user_name}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div>
            <h3 className="text-[var(--foreground)] font-semibold">{testimonial.user_name}</h3>
            <p className="text-[var(--muted-foreground)] text-sm">{testimonial.user_tag}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Section className="py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white">{testimonialContent.title}</h2>
        <p className="text-gray-400 text-lg">{testimonialContent.description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 items-center">
        {Object.values(testimonialContent.testimonialData).map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </Section>
  );
};
