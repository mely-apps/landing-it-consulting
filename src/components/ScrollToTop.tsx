'use client';
import { Home } from '@/assets/Home';
import { Information } from '@/assets/Information';
import { Rule } from '@/assets/Rule';
import { BtnNav } from '@/components/ui/btn-nav';
import { SECTION_IDS } from '@/constants';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { ComponentRef, useEffect, useRef, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const itemNavs = [
  {
    icon: <Home />,
    path: SECTION_IDS.HOME,
  },
  {
    icon: <Information />,
    path: SECTION_IDS.ABOUT,
  },
  {
    icon: <Rule />,
    path: SECTION_IDS.RULES,
  },
];
const ScrollToTop = ({ locale }: { locale: string }) => {
  const router = useRouter();
  const translations = useTranslations('root');
  const [isMobileRegisterBtnHidden, setIsMobileRegisterBtnHidden] =
    useState<boolean>(true);

  const scrollToTop = () => {
    document
      .getElementById(SECTION_IDS.HOME)
      ?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToTopRef = useRef<ComponentRef<'div'>>(null);
  const [showScrollToTopButton, setShowScrollToTopButton] = useState(false);
  const [lang, setLang] = useState(locale.toUpperCase());

  const handleScrollToRegistration = () => {
    const section = document.getElementById(SECTION_IDS.REGISTER);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const changeLanguage = () => {
    locale === 'vi' ? router.push('/en') : router.push('/vi');
  };

  useEffect(() => {
    const mainContainer = document.querySelector('.main-container');

    const handleScroll = () => {
      const aboutSectionPosition = document
        .querySelector(`#${SECTION_IDS.ABOUT}`)!
        .getBoundingClientRect().y;
      if (scrollToTopRef.current) {
        setShowScrollToTopButton(
          mainContainer!.scrollTop > aboutSectionPosition,
        );
      }
    };

    const handleHideMobileRegisterBtn = () => {
      const aboutSectionPosition = document.getElementById(
        SECTION_IDS.ABOUT,
      )!.offsetTop;
      const registerSectionPosition = document.getElementById(
        SECTION_IDS.REGISTER,
      )!.offsetTop;
      const highlightsSectionPosition = document.getElementById(
        SECTION_IDS.HIGHLIGHTS,
      )!.offsetTop;

      setIsMobileRegisterBtnHidden(
        mainContainer!.scrollTop < aboutSectionPosition ||
          (mainContainer!.scrollTop >= registerSectionPosition &&
            mainContainer!.scrollTop <= highlightsSectionPosition),
      );
    };

    mainContainer!.addEventListener('scroll', handleScroll);
    mainContainer!.addEventListener('scrollend', handleHideMobileRegisterBtn);
    return () => {
      mainContainer!.removeEventListener('scroll', handleScroll);
      mainContainer!.removeEventListener(
        'scrollend',
        handleHideMobileRegisterBtn,
      );
    };
  }, []);

  useEffect(() => {}, []);

  return (
    <AnimatePresence>
      <motion.div
        ref={scrollToTopRef}
        key={'header-mobile'}
        className='fixed inset-x-0 bottom-4 z-50 flex cursor-pointer justify-center lg:hidden'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
        }}
      >
        <motion.ul
          transition={{
            duration: 0.3,
            ease: 'easeIn',
          }}
          className='card-gradient-border flex items-center justify-center !rounded-[20px] pl-1 pr-1 shadow-2xl before:rounded-[20px]'
        >
          {itemNavs.map((item) => (
            <BtnNav
              icon={item.icon}
              path={item.path}
              key={'icon_' + item.path}
            />
          ))}
          <BtnNav
            icon={<div className='font-extrabold'>{lang}</div>}
            onTap={changeLanguage}
            key={'icon_lang'}
          />

          <div
            className={cn(
              'w ml-[2px] h-[28px] border border-[#7CD5C4] transition-all duration-500',
              { 'opacity-0': isMobileRegisterBtnHidden },
            )}
          />

          <button
            className={cn(
              'mx-[8px] w-[130px] rounded-[12px] !bg-[#7FFFF7] p-[10px] font-semibold text-black shadow-[0_0_2px_#7FFFF7,inset_0_0_2px_#7FFFF7,0_0_5px_#7FFFF7,0_0_15px_#7FFFF7,0_0_30px_#7FFFF7] transition-all duration-500',
              { 'm-0 w-0 p-0 opacity-0': isMobileRegisterBtnHidden },
            )}
            onClick={
              isMobileRegisterBtnHidden ? undefined : handleScrollToRegistration
            }
          >
            <span className='line-clamp-1'>
              {translations('hero.buttonTitle')}
            </span>
          </button>
        </motion.ul>
      </motion.div>

      <motion.div
        key={'tool-pc'}
        ref={scrollToTopRef}
        onClick={showScrollToTopButton ? scrollToTop : undefined}
        className={cn(
          { 'cursor-pointer opacity-100': showScrollToTopButton },
          { 'opacity-0': !showScrollToTopButton },
          'fixed bottom-8 right-8 z-50 hidden h-12 w-12 items-center justify-center rounded-full bg-[#226472] transition-all lg:flex',
        )}
      >
        <motion.div
          className='flex h-12 w-12 items-center justify-center overflow-hidden'
          whileHover={{
            scale: 1.1,
            transition: {
              duration: 0.2,
            },
          }}
        >
          <FaArrowUp />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ScrollToTop;
