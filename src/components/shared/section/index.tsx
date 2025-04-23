import { cn } from '@/utils/cn';

interface SectionProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
}

const Section = ({ id, className, children }: SectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        'flex flex-col items-center justify-center py-16 px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32',
        className,
      )}
    >
      {children}
    </section>
  );
};

export default Section;
