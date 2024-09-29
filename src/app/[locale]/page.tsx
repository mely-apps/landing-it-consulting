'use client';
import { LocaleProps } from '@/@types';
import About from '@/components/About';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Organizer from '@/components/Organizer';
import Prizes from '@/components/Prizes';
import Registration from '@/components/Registration';
import Rules from '@/components/Rules';
import ScrollToTop from '@/components/ScrollToTop';
import TimeCounter from '@/components/TimeCounter';
import Timeline from '@/components/Timeline';
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';
import { Bounce, ToastContainer, ToastContainerProps } from 'react-toastify';

const toastContainerConfig: ToastContainerProps = {
  position: 'top-right',
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  theme: 'dark',
  transition: Bounce,
  pauseOnHover: false,
};

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return (
    <>
      <ToastContainer {...toastContainerConfig} />
      <div className='background-animation main-container absolute inset-0 left-0 top-0 z-50 h-screen w-screen overflow-x-hidden overflow-y-scroll scrollbar-none'>
        <ScrollToTop locale={locale} />
        <Header locale={locale as LocaleProps['locale']} />
        {/* <div className='h-[92px]'></div> */}
        <Hero />
        <About />
        <Rules locale={locale} />
        <Timeline />
        <Prizes />
        <TimeCounter locale={locale} />
        <Registration />
        <Organizer />
        <Footer />
      </div>
    </>
  );
}
