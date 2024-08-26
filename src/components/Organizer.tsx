import Image from 'next/image';
import React from 'react';

const Organizer = () => {
  return (
    <div className='container mt-40'>
      <h2 className='flex w-full justify-center text-[50px] font-extrabold uppercase text-primary'>
        Organizers
      </h2>

      <div className='flex flex-col gap-20'>
        <div className='mt-20 grid grid-cols-3 gap-x-10'>
          <div className='relative col-span-1 flex h-56 w-96 items-center justify-center rounded-lg border border-white/40 bg-white/10 shadow-lg'>
            <Image
              src={'/companies/codemely.png'}
              className='object-contain px-10'
              alt=''
              fill
            />
          </div>
          <div className='col-span-2'>
            <p className='text-2xl font-light italic leading-[1.3]'>
              <span className='font-bold'>Code MeLy</span> is a vibrant IT
              community and launchpad for young talents, especially female
              programmers. Our mission is to foster a dynamic IT GenZ community
              by creating engaging competitions and platforms that enhance
              programming skills and provide top-tier talent for IT projects
              worldwide.
            </p>
          </div>
        </div>

        <div className='grid grid-cols-3 gap-x-10'>
          <div className='relative col-span-1 flex h-56 w-96 items-center justify-center rounded-lg border border-white/40 bg-white/10 shadow-lg'>
            <Image
              src={'/companies/netcompany.png'}
              className='object-contain px-10'
              alt=''
              fill
            />
          </div>
          <div className='col-span-2'>
            <p className='text-2xl font-light italic leading-[1.3]'>
              <span className='font-bold'>Netcompany</span> is an IT consulting
              firm founded in 2000 in Copenhagen, Denmark. The company plays a
              crucial role in digital transformation for both public and private
              sectors. Netcompany believes that technology can have a positive
              impact on society and business, and continuously seeks talented IT
              professionals, offering career development opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organizer;
