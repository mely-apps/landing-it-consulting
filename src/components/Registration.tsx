'use client';
import React from 'react';
import { Form, Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import clsx from 'clsx';
import { FaSpinner } from 'react-icons/fa';
import { SECTION_IDS } from '@/constants';
import { DateTimeField, FormField, SelectField } from './FormField';

interface RegistrationForm {
  fullName: string;
  dateOfBirth: string;
  gender: 'male' | 'female' | null;
  school: string;
  major: string;
  phoneNumber: string;
  email: string;
}

const registrationFormSchema = Yup.object().shape<
  Record<keyof RegistrationForm, Yup.StringSchema>
>({
  fullName: Yup.string()
    .required('Full name is required')
    .min(1, 'Full name must be at least 1 character'),
  dateOfBirth: Yup.string().required('Date of birth is required'),
  gender: Yup.string()
    .oneOf(['male', 'female'], 'Please select your gender')
    .required('Please select your gender'),
  school: Yup.string().required('School is required'),
  major: Yup.string().required('Major is required'),
  phoneNumber: Yup.string().required('Phone number is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
});

const initialValues: RegistrationForm = {
  fullName: '',
  dateOfBirth: '',
  email: '',
  gender: 'male',
  major: '',
  phoneNumber: '',
  school: '',
};

const Registration = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [typeForm, setTypeForm] = React.useState<'team' | 'personal'>(
    'personal',
  );

  const toggleTypeForm = (type: 'team' | 'personal') => {
    setTypeForm(type);
  };

  const handleSubmit = async (
    values: RegistrationForm,
    formikHelpers: FormikHelpers<RegistrationForm>,
  ) => {
    try {
      setIsLoading(true);

      const url =
        `https://docs.google.com/forms/d/e/1FAIpQLSelxRAkMVo0fiFYDDUsOTQwfu-vfHJ0OTZOCZHEMQrG_BIJ6A/formResponse?` +
        `entry.1173258311=${encodeURIComponent(values.fullName)}&` +
        `entry.1794780755=${encodeURIComponent(values.dateOfBirth)}&` +
        `entry.1908292169=${encodeURIComponent(values.school)}&` +
        `entry.349812765=${encodeURIComponent(values.major)}&` +
        `entry.1938692918=${encodeURIComponent(values.phoneNumber)}&` +
        `entry.1820835535=${encodeURIComponent(values.email)}`;

      const response = await fetch(url, {
        method: 'POST',
        mode: 'no-cors',
      });

      toast.success('Registration successful!');

      formikHelpers.resetForm();
    } catch (error) {
      toast.error('Registration failed, please try again!');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='container' id={SECTION_IDS.REGISTER}>
      <h2 className='text-center text-[50px] font-extrabold uppercase text-primary'>
        Registration
      </h2>

      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={registrationFormSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className='mx-auto mt-10 grid w-[70%] grid-cols-2 gap-4 rounded-lg border border-white/30 bg-white/10 p-10'>
            <div className='col-span-2 grid w-full grid-cols-2 text-center text-3xl font-bold'>
              <button
                onClick={() => toggleTypeForm('personal')}
                className={clsx(
                  'border-b-4 border-white pb-4 uppercase transition-all',
                  typeForm === 'personal' &&
                    'border-b-4 border-primary text-primary',
                )}
                type='button'
              >
                individual
              </button>
              <button
                onClick={() => toggleTypeForm('team')}
                className={clsx(
                  'border-b-4 border-white pb-4 uppercase transition-all',
                  typeForm === 'team' &&
                    'border-b-4 border-primary text-primary',
                )}
                type='button'
              >
                team
              </button>
            </div>

            <div className='col-span-2'>
              <FormField label='Full name' name='fullName' />
            </div>
            <div className='col-span-1'>
              <DateTimeField name='dateOfBirth' label='Date of birth' />
            </div>
            <div className='col-span-1'>
              <SelectField
                label='Gender'
                name='gender'
                options={[
                  { value: 'male', label: 'Male' },
                  { value: 'female', label: 'Female' },
                ]}
              />
            </div>
            <div className='col-span-1'>
              <FormField label='School' name='school' />
            </div>
            <div className='col-span-1'>
              <FormField label='Major' name='major' />
            </div>
            <div className='col-span-2'>
              <FormField label='Phone Number' name='phoneNumber' />
            </div>
            <div className='col-span-2'>
              <FormField label='Email' name='email' />
            </div>

            <div className='col-span-2 mt-4 flex justify-end'>
              <button
                disabled={isLoading}
                type='submit'
                className={clsx(
                  'flex items-center justify-center rounded-lg bg-[#7FFFF7] px-6 py-2 font-bold text-black hover:opacity-90',
                  isLoading && 'cursor-not-allowed opacity-90',
                )}
              >
                {isLoading ? <FaSpinner className='animate-spin' /> : 'Submit'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Registration;
