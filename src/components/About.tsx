import React from 'react';
import { FlipWords } from './ui/flip-words';

const About = () => {
  return (
    <div className='container mt-24'>
      <FlipWords
        className='text-[70px] font-extrabold uppercase leading-[84px] !text-primary'
        words={['What is the IT Consultant Challenge?']}
      />
      <div className='mx-auto mt-[110px] flex max-w-[1280px] flex-col gap-[100px] font-inter text-3xl italic'>
        <p>
          <span className='font-extrabold'>IT Consultant Challenge</span>
          —an exciting full-day event where IT students have the chance to
          showcase their skills, creativity, and problem-solving abilities. This
          event, hosted by{' '}
          <span className='font-extrabold'>{`Netcompany`}</span>
          and
          <span className='font-extrabold'>{` Code MeLy `}</span>, is your
          opportunity to step into the shoes of an IT consultant and tackle
          real-life challenges through digital transformation. Work alongside
          like-minded peers, gain valuable experience, and make a lasting
          impact.
        </p>
        <div>
          <p className='font-bold'>Who can join the event?</p>
          <ul className='ml-10 list-disc'>
            <li>Background: IT, Software engineer</li>
            <li>2nd, 3rd year students</li>
            <li>Have passion with technology</li>
            <li>Have interest in exploring a role of an IT consultant</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
