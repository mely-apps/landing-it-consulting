import React from 'react';
import CodeSandBox from './icons/CodeSandBox';
import Phone from './icons/Phone';
import { FaFacebookF, FaLinkedinIn, FaTiktok, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='mt-40 bg-[#023C38] py-10'>
      <div className='container grid grid-cols-4'>
        <div className='text-lg font-extrabold'>
          <p>IT CONSULTANT</p>
          <p className='text-primary'>CHALLENGE</p>
        </div>
        <div>
          <p className='inline-block border-b-2 border-[#419D98] py-1 font-bold'>
            Đơn vị tổ chức
          </p>
          <ul className='mt-2 flex flex-col gap-2'>
            <li className='flex gap-x-3'>
              <CodeSandBox />
              <p className='uppercase'>Code MeLy</p>
            </li>
            <li className='flex gap-x-3'>
              <CodeSandBox />
              <p className='uppercase'>net company</p>
            </li>
          </ul>
        </div>
        <div>
          <p className='inline-block border-b-2 border-[#419D98] py-1 font-bold'>
            Liên Hệ
          </p>
          <ul className='mt-2 flex flex-col gap-2'>
            <li className='flex gap-x-3'>
              <Phone />
              <p>Cao Dang Tinh</p>
            </li>
            <li className='flex gap-x-3'>
              <Phone />
              <p>Sep: Truong Thanh Hy</p>
            </li>
          </ul>
        </div>
        <div>
          <p className='inline-block border-b-2 border-[#419D98] py-1 font-bold'>
            Theo dõi chúng tôi tại
          </p>
          <div className='mt-2 flex gap-x-3'>
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
