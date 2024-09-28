'use client';
import { LocaleProps } from '@/@types';
import { SECTION_IDS } from '@/constants';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { Switch } from './ui/switch';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Progress } from './ui/progress';
import { cn } from '@/lib/utils';

const SECTION_ITEMS = [
  {
    title: 'Home',
    path: SECTION_IDS.HOME,
  },
  {
    title: 'About',
    path: SECTION_IDS.ABOUT,
  },
  {
    title: 'Rules',
    path: SECTION_IDS.RULES,
  },
  {
    title: 'Timeline',
    path: SECTION_IDS.TIMELINE,
  },
  {
    title: 'Prizes',
    path: SECTION_IDS.PRIZES,
  },
  {
    title: 'Register',
    path: SECTION_IDS.REGISTER,
  },
  {
    title: 'Organizers',
    path: SECTION_IDS.ORGANIZERS,
  },
];

const Header = ({ locale }: LocaleProps) => {
  const router = useRouter();
  const t = useTranslations('HomePage');
  const [isChangingLang, setIsChangingLang] = useState(false);

  const handleToggleLocale = () => {
    setIsChangingLang(true);
    locale === 'vi' ? router.push('/en') : router.push('/vi');
  };

  const handleScrollToSection = (path: string) => {
    const section = document.getElementById(path);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const progressClassName = cn('progress h-1 w-80', {
    ['hidden']: !isChangingLang,
  });
  return (
    <>
      <div className={progressClassName} />
      <div
        className='container relative hidden items-center justify-between pt-4 lg:flex'
        id='header'
      >
        <div className='invisible font-montserrat text-lg font-extrabold sm:visible'>
          <p className='text-white'>IT Consultant</p>
          <p className='text-primary'>Challenge</p>
        </div>

        <nav className='flex h-full items-center gap-x-8 font-semibold text-gray'>
          <div className='hidden items-center gap-x-8 lg:flex'>
            {SECTION_ITEMS.map((item, idx) => (
              <p
                className='cursor-pointer hover:text-primary'
                key={item.title}
                onClick={() => {
                  handleScrollToSection(item.path);
                }}
              >
                {t(`header.${item.path}` as any)}
              </p>
            ))}
          </div>

          <div className='flex lg:hidden'>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Menu />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align='end'
                className='border-0 bg-[#226472] font-semibold'
                onCloseAutoFocus={(e) => e.preventDefault()}
              >
                {SECTION_ITEMS.map((item) => (
                  <DropdownMenuItem
                    key={item.title}
                    onSelect={() => handleScrollToSection(item.path)}
                  >
                    {item.title}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className='flex min-w-12 cursor-pointer items-center gap-x-2 uppercase hover:text-primary'>
            <Switch onClick={handleToggleLocale} checked={locale === 'vi'} />
            <span>{locale}</span>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
