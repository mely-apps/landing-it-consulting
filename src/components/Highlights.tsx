'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { SECTION_IDS } from '@/constants';
import { useState } from 'react';
import VideoRecap from '@/components/VideoRecap';

const Highlights = () => {
  const t = useTranslations('root');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const highlightImages = [
    '/images/slider/1.jpg',
    '/images/slider/2.jpg',
    '/images/slider/3.jpg',
    '/images/slider/4.jpg',
    '/images/slider/5.jpg',
    '/images/slider/6.jpg',
    '/images/slider/23.jpg',
  ];

  return (
    <div className='container px-4 py-16 md:py-24' id={SECTION_IDS.HIGHLIGHTS}>
      <h2 className='mb-4 text-center font-montserrat text-3xl font-extrabold uppercase text-[#FFB84E] md:mb-6 md:text-5xl'>
        {t('highlights.title')}
      </h2>

      <p className='mb-8 text-center text-sm italic text-gray-300 md:mb-12 md:text-base'>
        {t('highlights.subtitle')}
      </p>

      <VideoRecap />

      {/* Row 1 - 4 ảnh */}
      <div className='mb-6 mt-12 grid grid-cols-4 gap-3 md:gap-6'>
        {/* Ảnh 1 */}
        <div className='col-span-1'>
          <div
            className='group relative h-full min-h-[120px] cursor-pointer overflow-hidden rounded-2xl border-4 border-white shadow-2xl md:min-h-[280px]'
            style={{ transform: 'rotate(-3deg)' }}
            onClick={() => setSelectedImage(0)}
          >
            <Image
              src={highlightImages[0]}
              alt='IT Consultant Challenge Highlight 1'
              fill
              className='object-cover transition-transform duration-300 group-hover:scale-110'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
          </div>
        </div>

        {/* Ảnh 2 */}
        <div className='col-span-1'>
          <div
            className='group relative h-full min-h-[120px] cursor-pointer overflow-hidden rounded-2xl border-4 border-white shadow-2xl md:min-h-[280px]'
            style={{ transform: 'rotate(2deg)' }}
            onClick={() => setSelectedImage(1)}
          >
            <Image
              src={highlightImages[1]}
              alt='IT Consultant Challenge Highlight 2'
              fill
              className='object-cover transition-transform duration-300 group-hover:scale-110'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
          </div>
        </div>

        {/* Ảnh 3 */}
        <div className='col-span-1'>
          <div
            className='group relative h-full min-h-[120px] cursor-pointer overflow-hidden rounded-2xl border-4 border-white shadow-2xl md:min-h-[280px]'
            style={{ transform: 'rotate(-2deg)' }}
            onClick={() => setSelectedImage(2)}
          >
            <Image
              src={highlightImages[2]}
              alt='IT Consultant Challenge Highlight 3'
              fill
              className='object-cover transition-transform duration-300 group-hover:scale-110'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
          </div>
        </div>

        {/* Ảnh 4 */}
        <div className='col-span-1'>
          <div
            className='group relative h-full min-h-[120px] cursor-pointer overflow-hidden rounded-2xl border-4 border-white shadow-2xl md:min-h-[280px]'
            style={{ transform: 'rotate(3deg)' }}
            onClick={() => setSelectedImage(3)}
          >
            <Image
              src={highlightImages[3]}
              alt='IT Consultant Challenge Highlight 4'
              fill
              className='object-cover transition-transform duration-300 group-hover:scale-110'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
          </div>
        </div>
      </div>

      {/* Row 2 - 3 ảnh */}
      <div className='grid grid-cols-3 gap-3 md:gap-6'>
        {/* Ảnh 5 */}
        <div className='col-span-1'>
          <div
            className='group relative h-full min-h-[150px] cursor-pointer overflow-hidden rounded-2xl border-4 border-white shadow-2xl md:min-h-[320px]'
            // style={{ transform: 'rotate(2deg)' }}
            onClick={() => setSelectedImage(4)}
          >
            <Image
              src={highlightImages[4]}
              alt='IT Consultant Challenge Highlight 5'
              fill
              className='object-cover transition-transform duration-300 group-hover:scale-110'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
          </div>
        </div>

        {/* Ảnh 6 */}
        <div className='col-span-1'>
          <div
            className='group relative h-full min-h-[150px] cursor-pointer overflow-hidden rounded-2xl border-4 border-white shadow-2xl md:min-h-[320px]'
            // style={{ transform: 'rotate(-2deg)' }}
            onClick={() => setSelectedImage(5)}
          >
            <Image
              src={highlightImages[5]}
              alt='IT Consultant Challenge Highlight 6'
              fill
              className='object-cover transition-transform duration-300 group-hover:scale-110'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
          </div>
        </div>

        {/* Ảnh 7 */}
        <div className='col-span-1'>
          <div
            className='group relative h-full min-h-[150px] cursor-pointer overflow-hidden rounded-2xl border-4 border-white shadow-2xl md:min-h-[320px]'
            // style={{ transform: 'rotate(3deg)' }}
            onClick={() => setSelectedImage(6)}
          >
            <Image
              src={highlightImages[6]}
              alt='IT Consultant Challenge Highlight 7'
              fill
              className='object-cover transition-transform duration-300 group-hover:scale-110'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
          </div>
        </div>
      </div>

      {/* Modal xem ảnh phóng to */}
      {selectedImage !== null && (
        <motion.div
          className='fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className='relative h-[80vh] w-full max-w-6xl'
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={highlightImages[selectedImage]}
              alt={`IT Consultant Challenge Highlight ${selectedImage + 1}`}
              fill
              className='rounded-lg object-contain'
            />
            <button
              className='absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-all hover:bg-white/20'
              onClick={() => setSelectedImage(null)}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Highlights;
