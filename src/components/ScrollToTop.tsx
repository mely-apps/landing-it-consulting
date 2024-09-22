'use client';
import React, { useRef, useState } from 'react';
import {
  FaArrowUp,
  FaHome,
  FaInfoCircle,
  FaRegListAlt,
  FaUsers,
} from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';
import { Submit } from '@/components/icons/Submit';
import { Prize } from '@/components/icons/Prize';
import { SECTION_IDS } from '@/constants';

const itemNavs = [
  {
    icon: <FaHome color={'#012F2C'} />,
    path: SECTION_IDS.HOME,
  },
  {
    icon: <FaInfoCircle color={'#012F2C'} />,
    path: SECTION_IDS.ABOUT,
  },
  {
    icon: <FaRegListAlt color={'#012F2C'} />,
    path: SECTION_IDS.RULES,
  },
  {
    icon: <Prize color={'#012F2C'} />,
    path: SECTION_IDS.PRIZES,
  },
  {
    icon: <Submit color={'#012F2C'} />,
    path: SECTION_IDS.REGISTER,
  },
  {
    icon: <FaUsers color={'#012F2C'} />,
    path: SECTION_IDS.ORGANIZERS,
  },
];
const ScrollToTop = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const scrollToTop = () => {
    console.log(document.querySelector('#header'));
    document.querySelector('#header')?.scrollIntoView({ behavior: 'smooth' });
  };

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //       setIsOpen(false);
  //     }
  //   };
  //
  //   document.addEventListener('mousedown', handleClickOutside);
  //
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, [dropdownRef]);

  return (
    <AnimatePresence>
      {/*<motion.div*/}
      {/*  initial={{ opacity: 0, y: 20 }}*/}
      {/*  animate={{ opacity: 1, y: 0 }}*/}
      {/*  exit={{ opacity: 0, y: 20 }}*/}
      {/*  onClick={() => setIsOpen(true)}*/}
      {/*  className={*/}
      {/*    (isOpen ? 'hidden ' : '') +*/}
      {/*    'bottom-22 fixed right-4 z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[#226472] opacity-40 transition-all hover:opacity-100 lg:hidden'*/}
      {/*  }*/}
      {/*>*/}
      {/*  <motion.div*/}
      {/*    className='flex h-full w-full items-center justify-center overflow-hidden'*/}
      {/*    whileHover={{*/}
      {/*      scale: 1.1,*/}
      {/*      transition: {*/}
      {/*        duration: 0.2,*/}
      {/*      },*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    <ToolTip />*/}
      {/*  </motion.div>*/}
      {/*</motion.div>*/}
      <motion.div
        key={'header-mobile'}
        className='fixed inset-x-0 bottom-4 z-50 flex cursor-pointer justify-center lg:hidden'
      >
        <motion.ul
          variants={{
            open: {
              clipPath: 'inset(0% 0% 0% 0% round 10px)',
              transition: {
                type: 'spring',
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05,
              },
            },
            closed: {
              clipPath: 'inset(10% 50% 90% 50% round 10px)',
              transition: {
                type: 'spring',
                bounce: 0,
                duration: 0.3,
              },
            },
          }}
          className='flex items-center justify-center rounded-l-2xl rounded-r-2xl border-2 border-[#fefefe66] bg-gradient-white pl-1 pr-1 shadow-2xl'
        >
          {/*{itemNavs.map((item) => (*/}
          {/*  <BtnNav icon={item.icon} path={item.path} />*/}
          {/*))}*/}
          {/*<div className='h-6 border border-white'></div>*/}

          {/*<motion.li*/}
          {/*  className='flex h-12 w-12 items-center justify-center overflow-hidden'*/}
          {/*  whileHover={{*/}
          {/*    scale: 1.1,*/}
          {/*    transition: {*/}
          {/*      duration: 0.2,*/}
          {/*    },*/}
          {/*  }}*/}
          {/*  variants={itemVariants}*/}
          {/*  onClick={scrollToTop}*/}
          {/*>*/}
          {/*  <FaArrowUp />*/}
          {/*</motion.li>*/}
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
