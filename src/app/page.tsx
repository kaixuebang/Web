import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BentoGrid from '@/components/BentoGrid';
import OpenSource from '@/components/OpenSource';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BentoGrid />
        <OpenSource />
      </main>
      <Footer />
    </>
  );
}
