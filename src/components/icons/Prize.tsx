import React from 'react';
import type { IconBaseProps } from 'react-icons';

export const Prize = (props: IconBaseProps) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox='0 0 20 20'
      xmlns='http://www.w3.org/2000/svg'
      stroke='currentColor'
      fill='none'
      {...props}
    >
      <path
        d='M3.45264 6.90233C3.45264 8.52027 4.09536 10.0719 5.23942 11.216C6.38348 12.3601 7.93515 13.0028 9.55309 13.0028C11.171 13.0028 12.7227 12.3601 13.8668 11.216C15.0108 10.0719 15.6535 8.52027 15.6535 6.90233C15.6535 5.28439 15.0108 3.73271 13.8668 2.58865C12.7227 1.4446 11.171 0.801872 9.55309 0.801872C7.93515 0.801872 6.38348 1.4446 5.23942 2.58865C4.09536 3.73271 3.45264 5.28439 3.45264 6.90233Z'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9.55348 13.0028L13.0104 18.9914L14.6352 15.7043L18.2934 15.9402L14.8365 9.95256M4.26845 9.95256L0.811523 15.9412L4.46976 15.7043L6.09452 18.9904L9.55144 13.0028'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
