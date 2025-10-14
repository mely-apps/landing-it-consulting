import en from './messages/en.json';

type Messages = typeof en;

declare global {
  interface IntlMessages extends Messages {}

  interface Window {
    FB?: {
      XFBML: {
        parse: () => void;
      };
    };
  }
}
