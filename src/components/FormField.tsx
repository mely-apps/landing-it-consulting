import { ErrorMessage, Field, FieldAttributes } from 'formik';
import React from 'react';
import { useTranslations } from 'next-intl';

interface FormFieldProps extends FieldAttributes<any> {
  name: string;
  label: string;
  required?: boolean;
  autoFocus?: boolean;
}

const FormField = ({
  label,
  name,
  autoFocus,
  required = false,
  ...defaultProps
}: FormFieldProps) => {
  const t = useTranslations('root.registration.errorMessages');

  return (
    <div>
      <label className='block w-full font-bold text-primary' htmlFor={name}>
        {label} {required && <span className='text-red-500'>*</span>}
      </label>
      <Field
        name={name}
        autoFocus={autoFocus}
        className='mt-1 w-full rounded-lg px-4 py-2 text-black'
        {...defaultProps}
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
