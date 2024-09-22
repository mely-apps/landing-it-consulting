'use client';
import React from 'react';
import { Form, Formik, FormikHelpers } from 'formik';
import { toast } from 'react-toastify';
import clsx from 'clsx';
import { FaSpinner } from 'react-icons/fa';
import { SECTION_IDS } from '@/constants';
import { DateTimeField, FormField, SelectField } from './FormField';
import {
  PersonalForm,
  personalFormInitValue,
  personalFormSchema,
  TeamForm,
  teamFormInitValue,
  teamFormSchema,
} from './Schema';

const Registration = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [typeForm, setTypeForm] = React.useState<'team' | 'personal'>(
    'personal',
  );

  const toggleTypeForm = (type: 'team' | 'personal') => {
    setTypeForm(type);
  };

  const handleTeamSubmit = async (
    values: TeamForm,
    formikHelpers: FormikHelpers<TeamForm>,
  ) => {
    try {
      setIsLoading(true);
      const url =
        `https://docs.google.com/forms/d/e/1FAIpQLSc7OU4gVBt1yD5LjohwqHPhH2tPF93AF0tvzGTUv0AYkBdZjQ/formResponse?` +
        `entry.924616653=${encodeURIComponent(values.teamName)}&` +
        `entry.521549446=${encodeURIComponent(values.teamSize)}&` +
        `entry.2134395723=${encodeURIComponent(values.school)}&` +
        `entry.614204740=${encodeURIComponent(values.phoneNumber)}&` +
        `entry.742289880=${encodeURIComponent(values.email)}&`;

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

  const handleSubmit = async (
    values: PersonalForm,
    formikHelpers: FormikHelpers<PersonalForm>,
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
      console.log(error);
      toast.error('Registration failed, please try again!');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='container' id={SECTION_IDS.REGISTER}>
      <h2 className='text-center text-2xl font-extrabold uppercase text-primary'>
        Registration
      </h2>

      {typeForm === 'personal' ? (
        <Formik
          enableReinitialize
          initialValues={personalFormInitValue}
          validationSchema={personalFormSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className='mx-auto mt-10 grid w-full grid-cols-2 gap-4 rounded-lg border border-white/30 bg-white/10 p-10 sm:w-3/4'>
              <div className='col-span-2 grid w-full grid-cols-2 gap-y-6 text-center text-3xl font-bold'>
                <button
                  onClick={() => toggleTypeForm('personal')}
                  className={clsx(
                    'border-b-4 border-white pb-4 text-base uppercase transition-all sm:text-lg',
                    typeForm === 'personal' && '!border-[#FFB84E] text-primary',
                  )}
                  type='button'
                >
                  individual
                </button>
                <button
                  onClick={() => toggleTypeForm('team')}
                  className={clsx(
                    'border-b-4 border-white pb-4 text-base uppercase transition-all sm:text-lg',
                  )}
                  type='button'
                >
                  team
                </button>
              </div>

              <div className='col-span-2'>
                <FormField label='Full name' name='fullName' />
              </div>
              <div className='col-span-2 md:col-span-1'>
                <DateTimeField name='dateOfBirth' label='Date of birth' />
              </div>
              <div className='col-span-2 md:col-span-1'>
                <SelectField
                  label='Gender'
                  name='gender'
                  options={[
                    { value: 'male', label: 'Male' },
                    { value: 'female', label: 'Female' },
                  ]}
                />
              </div>
              <div className='col-span-2 md:col-span-1'>
                <FormField label='School' name='school' />
              </div>
              <div className='col-span-2 md:col-span-1'>
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
                  {isLoading ? (
                    <FaSpinner className='animate-spin' />
                  ) : (
                    'Submit'
                  )}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      ) : (
        <Formik
          enableReinitialize
          initialValues={teamFormInitValue}
          validationSchema={teamFormSchema}
          onSubmit={handleTeamSubmit}
        >
          {() => (
            <Form className='mx-auto mt-10 grid w-full grid-cols-2 gap-4 rounded-lg border border-white/30 bg-white/10 p-10 sm:w-3/4'>
              <div className='col-span-2 grid w-full grid-cols-2 gap-y-6 text-center text-3xl font-bold'>
                <button
                  onClick={() => toggleTypeForm('personal')}
                  className={clsx(
                    'border-b-4 border-white pb-4 text-base uppercase transition-all sm:text-lg',
                  )}
                  type='button'
                >
                  individual
                </button>
                <button
                  onClick={() => toggleTypeForm('team')}
                  className={clsx(
                    'border-b-4 border-white pb-4 text-base uppercase transition-all sm:text-lg',
                    typeForm === 'team' && '!border-[#FFB84E] text-primary',
                  )}
                  type='button'
                >
                  team
                </button>
              </div>
              <div className='col-span-2'>
                <FormField label='Team Name' name='teamName' />
              </div>
              <div className='col-span-2'>
                <FormField label='Number of Team Members' name='teamSize' />
              </div>
              <div className='col-span-2'>
                <FormField label='School' name='school' />
              </div>
              <div className='col-span-2'>
                <FormField label='Phone Number' name='phoneNumber' />
              </div>
              <div className='col-span-2'>
                <FormField label='Email' name='email' />
              </div>
              <div className='col-span-2 mt-4 flex justify-end'>
                <button
                  type='submit'
                  disabled={isLoading}
                  className={clsx(
                    'flex items-center justify-center rounded-lg bg-[#7FFFF7] px-6 py-2 font-bold text-black hover:opacity-90',
                    isLoading && 'cursor-not-allowed opacity-90',
                  )}
                >
                  {isLoading ? (
                    <FaSpinner className='animate-spin' />
                  ) : (
                    'Submit'
                  )}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default Registration;
