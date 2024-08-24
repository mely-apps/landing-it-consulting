import { Top1, Top2, Top3 } from '@/assets/Prizes';
import React from 'react';

const Prizes = () => {
  return (
    <div className='container mt-40'>
      <h2 className='text-center text-[50px] font-extrabold uppercase text-primary'>
        prizes
      </h2>
      <div className='mt-36 grid grid-cols-3'>
        <div className='flex justify-center'>
          <div className='w-72 rounded-lg border border-white bg-white/10 pb-10 shadow-lg'>
            <Top2 className='mx-auto w-40' />
            <p className='text-center text-2xl font-extrabold uppercase text-primary'>
              2ND PRIZE
            </p>
            <p className='mt-1 text-center text-xl'>8.000.000 VND</p>
          </div>
        </div>
        <div className='flex -translate-y-20 justify-center'>
          <div className='w-72 rounded-lg border border-white bg-white/10 pb-10 shadow-lg'>
            <Top1 className='mx-auto w-40' />
            <p className='text-center text-2xl font-extrabold uppercase text-primary'>
              1ST PRIZE
            </p>
            <p className='mt-1 text-center text-xl'>20.000.000 VND</p>
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='w-72 rounded-lg border border-white bg-white/10 pb-10 shadow-lg'>
            <Top3 className='mx-auto w-40' />
            <p className='text-center text-2xl font-extrabold uppercase text-primary'>
              3RD PRIZE
            </p>
            <p className='mt-1 text-center text-xl'>2.000.000 VND</p>
          </div>
        </div>
      </div>

      <div className='mt-20 flex flex-col items-center gap-2'>
        <p className='text-lg font-extrabold text-white'>
          TỔNG GIẢI THƯỞNG LÊN ĐẾN
        </p>
        <p className='text-4xl font-extrabold text-[#E86F0B]'>30.000.000 VNĐ</p>
      </div>
    </div>
  );
};

export default Prizes;
