import { ErrorMessage, Field } from 'formik';
import { useTranslations } from 'next-intl';
import React from 'react';

interface FormFieldProps {
  name: string;
  label: string;
  required?: boolean;
}

const FormField = ({ label, name, required = false }: FormFieldProps) => {
  const t = useTranslations('HomePage.registration.errorMessages');

  return (
    <div>
      <label className='block w-full font-bold text-primary' htmlFor={name}>
        {label} {required && <span className='text-red-500'>*</span>}
      </label>
      <Field
        name={name}
        className='mt-1 w-full rounded-lg px-4 py-2 text-black'
      />
      <ErrorMessage
        render={(msg) => <p className='italic text-red-500'>{t(msg as any)}</p>}
        name={name}
      />
    </div>
  );
};

const SelectField = ({
  name,
  label,
  options,
  required = false,
}: FormFieldProps & {
  options: {
    value: string;
    label: string;
  }[];
}) => {
  return (
    <div>
      <label className='block w-full font-bold text-primary'>
        {label} {required && <span className='text-red-500'>*</span>}
      </label>
      <Field
        name={name}
        as='select'
        className='mt-1 w-full rounded-lg px-4 py-2 text-black'
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Field>
      <ErrorMessage
        render={(msg) => <p className='italic text-red-500'>{msg}</p>}
        name={name}
      />
    </div>
  );
};

export { FormField, SelectField };
