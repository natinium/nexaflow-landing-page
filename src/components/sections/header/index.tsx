import Navbar from '@/components/shared/navbar';

// Header Section: Contains the navigation bar.
export const HeaderSection = () => {
  return (
    <header
      className="flex justify-center p-4 
      sticky top-4 z-50"
    >
      <Navbar />
      {/* Other header content */}
    </header>
  );
};
