import React from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';
import { isMobile } from 'react-device-detect';
const MotionDiv = (props: HTMLMotionProps<'div'>) => {
  const Component = isMobile ? `div` : motion.div;
  return (
    //@ts-ignore
    <Component {...props} />
  );
};

export default MotionDiv;
