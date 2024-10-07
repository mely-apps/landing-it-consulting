import { cn } from '@/lib/utils';
import { clsx } from 'clsx';
import type { IconBaseProps } from 'react-icons';

export interface IPhoneProps extends IconBaseProps {
  className?: string;
}

const MailContact = (props: IPhoneProps) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn(props.className, 'lucide lucide-phone')}
      {...props}
    >
      <g id='Icons/communication/outline/mail'>
        <path
          id='Vector'
          d='M6 8L9.7812 10.5208C11.1248 11.4165 12.8752 11.4165 14.2188 10.5208L18 8M6 21H18C20.2091 21 22 19.2091 22 17V7C22 4.79086 20.2091 3 18 3H6C3.79086 3 2 4.79086 2 7V17C2 19.2091 3.79086 21 6 21Z'
          stroke='#FFFFFF'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
    </svg>
  );
};

export default MailContact;
