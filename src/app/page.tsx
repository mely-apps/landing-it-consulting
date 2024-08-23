'use client';
import About from '@/components/About';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Rules from '@/components/Rules';
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';

export default function Home() {
  return (
    <BackgroundGradientAnimation>
      <div className='absolute inset-0 left-0 top-0 z-50 h-screen w-screen overflow-y-scroll'>
        <Header />
        <Hero />
        <About />
        <Rules />
      </div>
    </BackgroundGradientAnimation>
  );
}
