import Button from '@/components/button';
import { Infinity, MoveUpRight } from 'lucide-react';

const links = [
  { name: 'Benefits', href: '#benefits' },
  { name: 'How it works', href: '#howItWorks' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Pricing', href: '#pricing' },
];

const Navbar = () => {
  return (
    <nav
      className="
        sticky top-0 z-50
        flex items-center justify-between
        border rounded-xl border-[var(--border)]
        bg-[var(--card)]/75 dark:bg-[var(--secondary)]/75 backdrop-blur-md text-[var(--card-foreground)] dark:text-[var(--secondary-foreground)]
        w-full max-w-xl sm:max-w-3xl md:max-w-5xl lg:max-w-6xl xl:max-w-[1200px]
        mx-auto p-2 sm:p-4
        transition-colors duration-300
      "
    >
      {/* logo  */}
      <div className="flex items-center gap-2">
        <Infinity className="w-6 h-6 sm:w-8 sm:h-8 text-[var(--primary)] dark:text-[var(--primary-foreground)]" />
        <h2 className="font-semibold text-lg sm:text-xl text-[var(--foreground)] dark:text-[var(--foreground)]">
          Nexaflow
        </h2>
      </div>
      {/* nav items  */}
      <ul className="hidden sm:flex space-x-3 md:space-x-6 justify-center">
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="font-medium text-sm sm:text-base text-[var(--foreground)] dark:text-[var(--secondary-foreground)] hover:text-[var(--primary)] dark:hover:text-[var(--primary-foreground)] transition-colors duration-200"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
      {/* CTA button */}
      <Button text="Get template free" icon={MoveUpRight} size={16} />
    </nav>
  );
};

export default Navbar;
