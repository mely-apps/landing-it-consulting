import { SECTION_IDS } from '@/constants';
import { ClassValue, clsx } from 'clsx';
import { isMobile } from 'react-device-detect';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const focusInput = (input: HTMLInputElement) => {
  if (isMobile) {
    input.scrollIntoView();
    setTimeout(() => {
      input.focus({
        preventScroll: true,
      });
    }, 300);
  } else {
    input.focus({
      preventScroll: true,
    });
  }
};

export const gotoRegistration = () => {
  const section = document.getElementById(SECTION_IDS.REGISTER);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
    const inputTeamName = document.querySelector(
      'input[name="teamName"]',
    ) as HTMLInputElement;
    const inputFullName = document.querySelector(
      'input[name="fullName"]',
    ) as HTMLInputElement;
    if (inputTeamName?.checkVisibility()) {
      focusInput(inputTeamName);
    }
    if (inputFullName?.checkVisibility()) {
      focusInput(inputFullName);
    }
  }
};
