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
    <BackgroundGradientAnimation>
      <ToastContainer {...toastContainerConfig} />
      <div className='main-container absolute inset-0 left-0 top-0 z-50 h-screen w-screen overflow-x-hidden overflow-y-scroll scrollbar-none'>
        <ScrollToTop />
        {/*<div className={'relative mt-10'}>*/}
        <Header locale={locale as LocaleProps['locale']} />
        <Hero />
        {/*  <div*/}
        {/*    className={*/}
        {/*      'absolute left-[50%] top-0 h-[100%] w-[100%] translate-x-[-50%]'*/}
        {/*    }*/}
        {/*  >*/}
        {/*    <Folder />*/}
        {/*  </div>*/}
        {/*</div>*/}
        <About />
        <Rules />
        <Timeline />
        <Prizes />
        <TimeCounter />
        <Registration />
        <Organizer />
        <Footer />
      </div>
    </BackgroundGradientAnimation>
  );
}
