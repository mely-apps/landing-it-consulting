'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const totalImages = 48;

const generateImageArray = (total: number) =>
  Array.from({ length: total }, (_, i) => ({
    src: `/images/slider/${i + 1}.jpg`,
    alt: `Image ${i + 1}`,
  }));

const images = generateImageArray(totalImages);

const Slider = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isHovering, setIsHovering] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const imageIndex = ((page % totalImages) + totalImages) % totalImages;

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const startAutoScroll = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (!isHovering) {
        paginate(1);
      }
    }, 2000);
  };

  useEffect(() => {
    startAutoScroll();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovering, startAutoScroll]);

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  return (
    <>
      <div className='relative mx-auto w-full max-w-3xl pt-10'>
        <div
          className='relative h-[500px] w-full overflow-hidden rounded-lg max-sm:h-[300px]'
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial='enter'
              animate='center'
              exit='exit'
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className='absolute h-full w-full'
            >
              <Image
                src={images[imageIndex].src}
                alt={images[imageIndex].alt}
                // fill
                width={2048}
                height={1365}
                style={{ objectFit: 'cover' }}
                priority={imageIndex === 0}
              ></Image>
            </motion.div>
          </AnimatePresence>
        </div>
        <Button
          variant='default'
          size='icon'
          className='absolute left-2 top-1/2 z-10 -translate-y-1/2 transition-all hover:opacity-80'
          onClick={() => paginate(-1)}
          aria-label='Previous image'
        >
          <ChevronLeft className='h-4 w-4' />
        </Button>
        <Button
          variant='default'
          size='icon'
          className='absolute right-2 top-1/2 z-10 -translate-y-1/2 transition-all hover:opacity-80'
          onClick={() => paginate(1)}
          aria-label='Next image'
        >
          <ChevronRight className='h-4 w-4' />
        </Button>
      </div>
    </>
  );
};

export default Slider;
