import { SECTION_IDS } from '@/constants';
import { motion, Variants } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};
export const BtnNav = (item: {
  icon: React.ReactNode;
  path?: SECTION_IDS;
  onTap?: () => void;
}) => {
  const [isActive, setIsActive] = useState(false);
  const handleSrollToSection = () => {
    if (!item.path) return;
    const section = document.getElementById(item.path);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.intersectionRatio < 0.6) {
          setIsActive(false);
        } else {
          setIsActive(true);
        }
      },
      { threshold: 0.6 },
    );

    const currentElement = item.path
      ? document.getElementById(item.path)
      : null;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <motion.li
      className={
        'm-1 mb-2 mt-2 flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl'
      }
      animate={{
        backgroundColor: isActive ? '#012F2C' : '#7CD5C4',
        color: isActive ? '#7CD5C4' : '#012F2C',
      }}
      whileHover={{
        scale: 1.1,
        transition: {
          duration: 0.2,
        },
      }}
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
      }}
      variants={itemVariants}
      onClick={item.onTap ?? handleSrollToSection}
    >
      {item.icon}
    </motion.li>
  );
};
