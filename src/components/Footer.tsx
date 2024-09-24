import React from 'react';
import CodeSandBox from './icons/CodeSandBox';
import Phone from './icons/Phone';
import { FaFacebookF, FaLinkedinIn, FaTiktok, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='mt-40 bg-[#023C38] pb-28 pt-10'>
      <div className='container grid lg:grid-cols-4'>
        <div className='pb-8 pt-8 text-3xl font-extrabold lg:pb-0 lg:pt-0'>
          <p className='text-center lg:text-left'>IT CONSULTANT</p>
          <p className='text-center text-primary lg:text-left'>CHALLENGE</p>
        </div>
        <div className='grid grid-cols-2 pb-8 pt-8 lg:col-span-2 lg:pb-0 lg:pt-0'>
          <div className='flex justify-center'>
            <div>
              <p className='inline-block border-b-2 border-[#419D98] py-1 font-bold'>
                Đơn vị tổ chức
              </p>
              <ul className='mt-2 flex flex-col gap-2'>
                <li className='flex gap-x-3'>
                  <CodeSandBox className={'hidden lg:block'} />
                  <p>Code MeLy</p>
                </li>
                <li className='flex gap-x-3'>
                  <CodeSandBox className={'hidden lg:block'} />
                  <p>Netcompany</p>
                </li>
              </ul>
            </div>
          </div>
          <div className='flex justify-center'>
            <div>
              <p className='inline-block border-b-2 border-[#419D98] py-1 font-bold'>
                Liên Hệ
              </p>
              <ul className='mt-2 flex flex-col gap-2'>
                <li className='flex gap-x-3'>
                  <Phone className={'hidden lg:block'} />
                  <p>contact@codemely.dev</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='flex flex-col lg:block'>
          <p className='inline-block py-1 text-center font-bold lg:border-b-2 lg:border-[#419D98] lg:text-left'>
            Theo dõi chúng tôi tại
          </p>
          <div className='mt-2 flex justify-center gap-x-3 lg:justify-start'>
            <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-[#FFFFFF] text-black'>
              <FaFacebookF />
            </div>
            <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-[#FFFFFF] text-black'>
              <FaLinkedinIn />
            </div>
            <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-[#FFFFFF] text-black'>
              <FaTiktok />
            </div>
            <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-[#FFFFFF] text-black'>
              <FaYoutube />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
