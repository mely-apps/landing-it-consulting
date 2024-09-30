declare module '@formfacade/embed-react' {
  import { type ComponentType } from 'react';

  interface FormfacadeEmbedProps {
    formFacadeURL: string;
    onSubmitForm?: () => void;
  }

  const FormfacadeEmbed: ComponentType<FormfacadeEmbedProps>;
  export default FormfacadeEmbed;
}
