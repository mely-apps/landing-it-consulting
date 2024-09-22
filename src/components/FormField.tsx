import { ErrorMessage, Field } from 'formik';
import React from 'react';
import DatePickerField from './DatePickerField';

interface FormFieldProps {
  name: string;
  label: string;
}

const FormField = ({ label, name }: FormFieldProps) => {
  return (
    <div>
      <label
        className='block w-full font-bold capitalize text-primary'
        htmlFor={name}
      >
        {label}
      </label>
      <Field
        name={name}
        className='mt-1 w-full rounded-lg px-4 py-2 text-black'
      />
      <ErrorMessage
        render={(msg) => <p className='capitalize text-red-500'>{msg}</p>}
        name={name}
      />
    </div>
  );
};

const DateTimeField = ({ name, label }: FormFieldProps) => {
  return (
    <div>
      <label className='block w-full font-bold capitalize text-primary'>
        {label}
      </label>
      <Field
        name={name}
        className='mt-1 w-full rounded-lg px-4 py-2 text-black'
        component={DatePickerField}
      />
      <ErrorMessage
        render={(msg) => <p className='capitalize text-red-500'>{msg}</p>}
        name={name}
      />
    </div>
  );
};

const SelectField = ({
  name,
  label,
  options,
}: FormFieldProps & {
  options: {
    value: string;
    label: string;
  }[];
}) => {
  return (
    <div>
      <label className='block w-full font-bold capitalize text-primary'>
        {label}
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
        render={(msg) => <p className='capitalize text-red-500'>{msg}</p>}
        name={name}
      />
    </div>
  );
};

export { FormField, DateTimeField, SelectField };
