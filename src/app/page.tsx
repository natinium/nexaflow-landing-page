import ThemeToggle from '@/components/ThemeToggle/component';

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 font-[family-name:var(--font-geist-sans)] relative">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome</h1>
        <p className="text-lg text-muted-foreground">
          This is a modern and simplistic landing page.
        </p>
      </div>
    </main>
  );
};

export default Home;
