'use client';
import React, { ComponentRef, useEffect, useRef, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

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
        className={cn(
          { 'cursor-pointer opacity-100': showScrollToTopButton },
          { 'opacity-0': !showScrollToTopButton },
          'fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#226472] transition-all duration-300',
        )}
      >
        <motion.div
          className='flex h-full w-full items-center justify-center overflow-hidden'
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
