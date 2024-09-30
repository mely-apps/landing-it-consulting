'use client';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';

import { type LocaleProps } from '@/@types';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { SECTION_IDS } from '@/constants';
import { cn } from '@/lib/utils';

import { Switch } from './ui/switch';
import Title from './ui/Title';

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
  // {
  //   title: 'Prizes',
  //   path: SECTION_IDS.PRIZES,
  // },
  {
    title: 'Register',
    path: SECTION_IDS.REGISTER,
  },
  // {
  //   title: 'Organizers',
  //   path: SECTION_IDS.ORGANIZERS,
  // },
];

const Header = ({ locale }: LocaleProps) => {
  const router = useRouter();
  const [isActiveScroll, setIsActiveScroll] = useState(false);
  const [activeClass, setActiveClass] = useState(SECTION_IDS.HOME);
  const [isChangingLang, setIsChangingLang] = useState(false);

  const t = useTranslations('HomePage');
  useEffect(() => {
    const screen = document.querySelector('.main-container');
    if (screen) {
      screen.addEventListener('scroll', () => {
        if (screen.scrollTop > 60) {
          setIsActiveScroll(true);
        } else {
          setIsActiveScroll(false);
        }
      });
    }
  }, []);
  const handleToggleLocale = () => {
    setIsChangingLang(true);
    locale === 'vi' ? router.push('/en') : router.push('/vi');
  };

  const handleScrollToSection = (path: string) => {
    const section = document.getElementById(path);
    if (section) {
      const paddingTop = window
        .getComputedStyle(section, null)
        .getPropertyValue('padding-top')
        .replace('px', '');
      const marginTop = window
        .getComputedStyle(section, null)
        .getPropertyValue('margin-top')
        .replace('px', '');
      document.querySelector('.main-container')!.scrollTo({
        top: section.offsetTop - parseInt(paddingTop) - parseInt(marginTop) / 2,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setActiveClass(entry.target.id as SECTION_IDS);
      },
      { threshold: 0.7 },
    );

    const elements = SECTION_ITEMS.map((item) => {
      const element = document.getElementById(item.path);
      if (element) observer.observe(element);
      return element;
    });

    return () => {
      elements.forEach((element) => {
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const progressClassName = cn('progress h-1 w-80', {
    ['hidden']: !isChangingLang,
  });

  const headerClassName = cn(
    `
      fixed z-[1000] w-full justify-center

      sm:bg-transparent
    `,
    {
      ['lg:bg-[#023C38]']: isActiveScroll,
    },
  );

  const navClassName = cn(
    `
      container hidden h-[70px] items-center justify-between

      lg:flex

      xl:justify-between
    `,
    {
      ['md:justify-end']: !isActiveScroll,
    },
  );
  return (
    <motion.div
      className={headerClassName}
      transition={{
        stiffness: 400,
        damping: 10,
      }}
    >
      <div className={progressClassName} />
      <motion.div
        className={navClassName}
        initial={{
          paddingTop: 16,
        }}
        animate={{
          paddingTop: isActiveScroll ? 0 : 16,
        }}
        transition={{
          duration: 0.3,
          ease: 'linear',
          type: 'spring',
        }}
        id='header'
      >
        <Title isActiveScroll={isActiveScroll} />

        <nav className='flex h-full items-center gap-x-8 font-semibold text-gray'>
          <div className={`
            hidden items-center gap-x-8

            lg:flex
          `}>
            {SECTION_ITEMS.map((item, idx) => (
              <div
                onClick={() => {
                  handleScrollToSection(item.path);
                }}
                key={item.title}
              >
                <motion.p
                  className={`
                    cursor-pointer

                    hover:text-primary

                    ${activeClass === item.path && `text-primary`}
                  `}
                >
                  {t(`header.${item.path}` as any)}
                </motion.p>
                <motion.div
                  animate={{
                    width:
                      activeClass === item.path ? ['0%', '90%', '100%'] : '0%',
                    borderBottom:
                      activeClass === item.path ? '2px solid #ffb84e' : '2px',
                  }}
                  transition={{
                    duration: 0.6,
                    ease: 'easeInOut',
                    times: [0, 0.4, 0.6],
                    stiffness: 400,
                    damping: 10,
                  }}
                ></motion.div>
              </div>
            ))}
          </div>

          <div className={`
            flex

            lg:hidden
          `}>
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

          <div className={`
            flex min-w-12 cursor-pointer items-center gap-x-2 uppercase

            hover:text-primary
          `}>
            <Switch onClick={handleToggleLocale} checked={locale === 'vi'} />
            <span>{locale}</span>
          </div>
        </nav>
      </motion.div>
    </motion.div>
  );
};

export default Header;
