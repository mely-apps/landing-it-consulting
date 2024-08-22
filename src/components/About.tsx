import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <div className='container'>
      <div className='grid grid-cols-3 gap-6'>
        <div className='relative col-span-2'>
          <Image
            className='min-h-96 object-cover shadow-xl'
            src='/about-image.png'
            alt=''
            fill
          />
        </div>
        <div className='col-span-1'>
          <h2 className='text-5xl font-extrabold uppercase text-primary'>
            About
          </h2>
          <p className='mt-3 leading-[1.5]'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse,
            excepturi sed voluptas aperiam suscipit laboriosam. Harum dolorem
            porro, asperiores veritatis, earum libero eos tempore enim saepe
            iure nostrum vero. Ipsum.
          </p>
          <button className='mt-5 rounded-md bg-[#24524F] px-6 py-2 font-extrabold'>
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
