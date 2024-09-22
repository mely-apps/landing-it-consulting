import { motion, Variants } from 'framer-motion';
import React, { useState } from 'react';
import { SECTION_IDS } from '@/constants';

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};
export const BtnNav = (item: { icon: Element; path: SECTION_IDS }) => {
  const [color, setColor] = useState('#7CD5C4');
  const handleSrollToSection = () => {
    const section = document.getElementById(item.path);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     const entry = entries[0];
  //     console.log(entry.isIntersecting);
  //     if (entry.isIntersecting) {
  //       setColor('#012F2C');
  //     } else {
  //       setColor('#7CD5C4');
  //     }
  //   });
  //
  //   const currentElement = section;
  //
  //   if (currentElement) {
  //     observer.observe(currentElement);
  //   }
  //
  //   // Cleanup observer khi component unmount
  //   return () => {
  //     if (currentElement) {
  //       observer.unobserve(currentElement);
  //     }
  //   };
  // }, []);
  return (
    <motion.li
      className={`m-1 mb-2 mt-2 flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-[${color}]`}
      whileHover={{
        scale: 1.1,
        transition: {
          duration: 0.2,
        },
      }}
      variants={itemVariants}
      onClick={handleSrollToSection}
      key={'icon_' + item.path}
    >
      {item.icon}
    </motion.li>
  );
};
