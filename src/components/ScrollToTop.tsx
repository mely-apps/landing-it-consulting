'use client';
import React, { ComponentRef, useEffect, useRef, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Group } from '@/components/icons/Group';
import { Home } from '@/components/icons/Home';
import { Information } from '@/components/icons/Information';
import { Prize } from '@/components/icons/Prize';
import { Rule } from '@/components/icons/Rule';
import { Submit } from '@/components/icons/Submit';
import { BtnNav } from '@/components/ui/btn-nav';
import { SECTION_IDS } from '@/constants';

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
  {
    icon: <Prize />,
    path: SECTION_IDS.PRIZES,
  },
  {
    icon: <Submit />,
    path: SECTION_IDS.REGISTER,
  },
  {
    icon: <Group />,
    path: SECTION_IDS.ORGANIZERS,
  },
];
const ScrollToTop = () => {
  const scrollToTop = () => {
    document.querySelector('#header')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToTopRef = useRef<ComponentRef<'div'>>(null);
  const [showScrollToTopButton, setShowScrollToTopButton] = useState(false);

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
        <motion.ul className='flex items-center justify-center rounded-[20px] border border-[#fefefe66] bg-gradient-white pl-1 pr-1 shadow-2xl'>
          {itemNavs.map((item) => (
            <BtnNav
              icon={item.icon}
              path={item.path}
              key={'icon_' + item.path}
            />
          ))}
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
