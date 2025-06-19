import Header from '../app/components/Header';
import Hero from '../app/components/Hero';

export default function Home() {
  return (
    <main className="bg-gray-50 dark:bg-zinc-900 text-gray-900 dark:text-white min-h-screen">
      <Header />
      <div className="pt-20">
        <Hero />
      </div>
    </main>
  );
}
