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
        {/*<div className={'absolute top-0 h-[100vh] w-[100vw]'}>*/}
        {/*  <div*/}
        {/*    className='absolute h-[100%] w-[100%] rounded-lg border border-white'*/}
        {/*    style={{*/}
        {/*      clipPath:*/}
        {/*        'polygon(0 0, 32% 0, 51% 15%, 100% 15%, 100% 100%, 0 100%)',*/}
        {/*    }}*/}
        {/*  ></div>*/}
        {/*  <div*/}
        {/*    className='absolute bottom-0 h-[88%] w-[100%] rounded-lg border border-white'*/}
        {/*    style={{*/}
        {/*      clipPath: 'polygon(41% 0%, 100% 0%, 100% 100%, 0 100%)',*/}
        {/*    }}*/}
        {/*  ></div>*/}
        {/*  <div*/}
        {/*    className='absolute w-[10%] border border-white'*/}
        {/*    style={{*/}
        {/*      transform: 'rotate(135deg)',*/}
        {/*      left: '27.7%',*/}
        {/*      height: '119px',*/}
        {/*      top: '2.8%',*/}
        {/*      borderRadius: '6px',*/}
        {/*      clipPath: 'polygon(0% 0%, 0px 100%, 4% 100%)',*/}
        {/*    }}*/}
        {/*  ></div>*/}
        {/*  <div*/}
        {/*    className='absolute w-[10%] border border-white'*/}
        {/*    style={{*/}
        {/*      transform: 'rotate(135deg)',*/}
        {/*      left: '36.2%',*/}
        {/*      height: 'calc(9% / 0.7071)',*/}
        {/*      top: '-4.2%',*/}
        {/*      borderRadius: '6px',*/}
        {/*      clipPath: 'polygon(100% 100%, 100% 0, 97% 0)',*/}
        {/*    }}*/}
        {/*  ></div>*/}
        {/*  <div*/}
        {/*    className='absolute w-[10%] border border-white'*/}
        {/*    style={{*/}
        {/*      left: '39.9%',*/}
        {/*      height: '12%',*/}
        {/*      borderRadius: '6px',*/}
        {/*      top: '0.5px',*/}
        {/*      clipPath: 'polygon(0 96%, 0 100%, 100% 100%)',*/}
        {/*    }}*/}
        {/*  ></div>*/}
        {/*</div>*/}
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
