import React, { HTMLAttributes } from 'react';

interface MagicButtonProps extends HTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  type: 'shimmer' | 'border-magic';
}

const MagicButton = ({ className, type, icon, ...props }: MagicButtonProps) => {
  return type === 'shimmer' ? (
    <button
      {...props}
      className={`animate-shimmer inline-flex items-center justify-center gap-x-3 rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 py-3 font-medium text-slate-400 transition-colors focus:outline-none ${className}`}
    >
      {props.children}
      {icon}
    </button>
  ) : (
    <button className='relative inline-flex h-12 w-fit overflow-hidden rounded-lg p-[1px] focus:outline-none'>
      <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
      <span
        className={`bg-black-100 inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-lg px-7 text-sm font-medium text-white backdrop-blur-3xl`}
      >
        {props.children}
        {icon}
      </span>
    </button>
  );
};

export default MagicButton;
