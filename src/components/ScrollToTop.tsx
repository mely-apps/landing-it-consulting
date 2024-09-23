'use client';
import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';
import { Submit } from '@/components/icons/Submit';
import { Prize } from '@/components/icons/Prize';
import { SECTION_IDS } from '@/constants';
import { BtnNav } from '@/components/ui/btn-nav';
import { Rule } from '@/components/icons/Rule';
import { Information } from '@/components/icons/Information';
import { Home } from '@/components/icons/Home';
import { Group } from '@/components/icons/Group';

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
    console.log(document.querySelector('#header'));
    document.querySelector('#header')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      <motion.div
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
        <motion.ul className='flex items-center justify-center rounded-l-2xl rounded-r-2xl border-2 border-[#fefefe66] bg-gradient-white pl-1 pr-1 shadow-2xl'>
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
        onClick={scrollToTop}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className='fixed bottom-8 right-4 z-50 hidden h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[#226472] opacity-40 transition-all hover:opacity-100 lg:flex'
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
