'use client';
import About from '@/components/About';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Prizes from '@/components/Prizes';
import Rules from '@/components/Rules';
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';

export default function Home() {
  return (
    <BackgroundGradientAnimation>
      <div className='absolute inset-0 left-0 top-0 z-50 h-screen w-screen overflow-y-scroll scrollbar-none'>
        <Header />
        <Hero />
        <About />
        <Rules />
        <Prizes />
      </div>
    </BackgroundGradientAnimation>
  );
}
