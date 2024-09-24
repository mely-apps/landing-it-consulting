'use client';
import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTop = () => {
  const scrollToTop = () => {
    console.log(document.querySelector('#header'));
    document.querySelector('#header')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      <motion.div
        onClick={scrollToTop}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className='fixed bottom-4 right-4 z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[#226472] opacity-40 transition-all hover:opacity-100'
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
