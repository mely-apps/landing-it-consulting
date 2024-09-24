'use client';
import React, { ComponentRef, useEffect, useRef, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Home } from '@/components/icons/Home';
import { Information } from '@/components/icons/Information';
import { Rule } from '@/components/icons/Rule';
import { BtnNav } from '@/components/ui/btn-nav';
import { SECTION_IDS } from '@/constants';
import { useTranslations } from 'next-intl';

const itemNavs = [
  {
    icon: <Home />,
    path: SECTION_IDS.HOME,
  },
  {
    icon: <Information />,
    path: SECTION_IDS.ABOUT,
  },
  {
    icon: <Rule />,
    path: SECTION_IDS.RULES,
  },
];
const ScrollToTop = ({ locale }: { locale: string }) => {
  const translations = useTranslations('HomePage');
  const isHiddenComponent = [SECTION_IDS.HOME, SECTION_IDS.REGISTER];
  const [isHidden, setIsHidden] = useState(false);
  const scrollToTop = () => {
    document.querySelector('#header')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToTopRef = useRef<ComponentRef<'div'>>(null);
  const [showScrollToTopButton, setShowScrollToTopButton] = useState(false);
  const [lang, setLang] = useState(locale.toUpperCase());
  const handleScrollToRegistration = () => {
    const section = document.getElementById(SECTION_IDS.REGISTER);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const changeLanguage = () => {};

  useEffect(() => {
    const mainContainer = document.querySelector('.main-container');

    const handleScroll = () => {
      const aboutSectionPosition = document
        .querySelector('#about')!
        .getBoundingClientRect().y;
      if (scrollToTopRef.current) {
        setShowScrollToTopButton(
          mainContainer!.scrollTop > aboutSectionPosition,
        );
      }
    };

    mainContainer!.addEventListener('scroll', handleScroll);
    return () => mainContainer!.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.intersectionRatio < 0.6) {
          setIsHidden(true);
        } else {
          setIsHidden(false);
        }
      },
      { threshold: 0.6 },
    );

    const home = document.getElementById(SECTION_IDS.HOME);
    const register = document.getElementById(SECTION_IDS.REGISTER);

    if (home) {
      observer.observe(home);
    }

    if (register) {
      observer.observe(register);
    }

    return () => {
      if (home) {
        observer.unobserve(home);
      }
      if (register) {
        observer.unobserve(register);
      }
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        ref={scrollToTopRef}
        onClick={showScrollToTopButton ? scrollToTop : undefined}
        key={'header-mobile'}
        className='fixed inset-x-0 bottom-4 z-50 flex cursor-pointer justify-center lg:hidden'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
        }}
      >
        <motion.ul
          transition={{
            duration: 0.3,
            ease: 'easeIn',
          }}
          className='card-gradient-border flex items-center justify-center !rounded-[20px] pl-1 pr-1 shadow-2xl before:rounded-[20px]'
        >
          {itemNavs.map((item) => (
            <BtnNav
              icon={item.icon}
              path={item.path}
              key={'icon_' + item.path}
            />
          ))}
          <BtnNav
            icon={<div className='font-extrabold'>{lang}</div>}
            key={'icon_lang'}
          />
          {!isHidden && (
            <motion.div className='w h-[28px] border border-[#7CD5C4]' />
          )}
          {!isHidden && (
            <motion.button
              initial={{ width: 0, content: '' }}
              animate={{
                width: 'auto',
                content: translations('hero.buttonTitle'),
              }}
              transition={{
                duration: 0.5,
                ease: 'linear',
              }}
              className='mx-[4px] my-[8px] line-clamp-1 overflow-hidden rounded-[12px] !bg-[#7FFFF7] px-[11px] py-[8px] font-semibold text-black hover:opacity-90'
              onClick={handleScrollToRegistration}
            >
              {translations('hero.buttonTitle')}
              {/*<GradualSpacing*/}
              {/*  text={translations('hero.buttonTitle')}*/}
              {/*  // className='text-2xl font-extrabold uppercase !text-primary'*/}
              {/*/>*/}
            </motion.button>
          )}
        </motion.ul>
      </motion.div>

      <motion.div
        key={'tool-pc'}
        ref={scrollToTopRef}
        onClick={showScrollToTopButton ? scrollToTop : undefined}
        className={cn(
          { 'cursor-pointer opacity-100': showScrollToTopButton },
          { 'opacity-0': !showScrollToTopButton },
          'fixed bottom-8 right-8 z-50 hidden h-12 w-12 items-center justify-center rounded-full bg-[#226472] transition-all lg:flex',
        )}
      >
        <motion.div
          className='flex h-12 w-12 items-center justify-center overflow-hidden'
          whileHover={{
            scale: 1.1,
            transition: {
              duration: 0.2,
            },
          }}
        >
          <FaArrowUp />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ScrollToTop;
