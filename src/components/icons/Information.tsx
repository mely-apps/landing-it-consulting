import React from 'react';
import type { IconType } from 'react-icons';

export const Information = (props: IconType) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox='0 0 19 19'
      xmlns='http://www.w3.org/2000/svg'
      stroke='currentColor'
      fill='none'
      {...props}
    >
      <circle
        cx='9.25161'
        cy='5.04644'
        r='0.75'
        fill='currentColor'
        strokeWidth='0.131642'
      />
      <path
        d='M8.43565 7.4939H9.25147V13.2046M17.4097 9.12555C17.4097 13.6312 13.7571 17.2838 9.25147 17.2838C4.74582 17.2838 1.09326 13.6312 1.09326 9.12555C1.09326 4.61989 4.74582 0.967339 9.25147 0.967339C13.7571 0.967339 17.4097 4.61989 17.4097 9.12555Z'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
