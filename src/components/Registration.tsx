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
import { useTranslations } from 'next-intl';

const Registration = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [typeForm, setTypeForm] = React.useState<'team' | 'personal'>(
    'personal',
  );

  const t = useTranslations('HomePage.registration');

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
      <h2 className='text-center text-[50px] font-extrabold uppercase text-primary'>
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
            <Form className='mx-auto mt-10 grid w-[70%] grid-cols-2 gap-4 rounded-lg border border-white/30 bg-white/10 p-10'>
              <div className='col-span-2 grid w-full grid-cols-2 text-center text-3xl font-bold'>
                <button
                  onClick={() => toggleTypeForm('personal')}
                  className={clsx(
                    'border-b-4 border-white pb-4 uppercase transition-all',
                    typeForm === 'personal' && '!border-[#FFB84E] text-primary',
                  )}
                  type='button'
                >
                  {t('individual')}
                </button>
                <button
                  onClick={() => toggleTypeForm('team')}
                  className={clsx(
                    'border-b-4 border-white pb-4 uppercase transition-all',
                  )}
                  type='button'
                >
                  {t('team')}
                </button>
              </div>

              <div className='col-span-2'>
                <FormField
                  label={t('fullname')}
                  name='fullName'
                  placeholder='ex: Nguyễn Văn A'
                />
              </div>
              <div className='col-span-1'>
                <DateTimeField
                  name='dateOfBirth'
                  label={t('dateOfBirth')}
                  placeholder='ex: 01/01/2000'
                />
              </div>
              <div className='col-span-1'>
                <SelectField
                  label={t('gender')}
                  name='gender'
                  placeholder='ex: Male'
                  options={[
                    { value: 'male', label: 'Male' },
                    { value: 'female', label: 'Female' },
                  ]}
                />
              </div>
              <div className='col-span-1'>
                <FormField
                  label={t('school')}
                  name='school'
                  placeholder='ex: Trường Đại Học A'
                />
              </div>
              <div className='col-span-1'>
                <FormField
                  label={t('major')}
                  name='major'
                  placeholder='ex: CNTT'
                />
              </div>
              <div className='col-span-2'>
                <FormField
                  label={t('phonenumber')}
                  name='phoneNumber'
                  placeholder='092929211xx'
                />
              </div>
              <div className='col-span-2'>
                <FormField
                  label='Email'
                  name='email'
                  placeholder='Ex: example@gmail.com'
                />
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
            <Form className='mx-auto mt-10 grid w-[70%] grid-cols-2 gap-4 rounded-lg border border-white/30 bg-white/10 p-10'>
              <div className='col-span-2 grid w-full grid-cols-2 text-center text-3xl font-bold'>
                <button
                  onClick={() => toggleTypeForm('personal')}
                  className={clsx(
                    'border-b-4 border-white pb-4 uppercase transition-all',
                  )}
                  type='button'
                >
                  {t('individual')}
                </button>
                <button
                  onClick={() => toggleTypeForm('team')}
                  className={clsx(
                    'border-b-4 border-white pb-4 uppercase transition-all',
                    typeForm === 'team' && '!border-[#FFB84E] text-primary',
                  )}
                  type='button'
                >
                  {t('team')}
                </button>
              </div>
              <div className='col-span-2'>
                <FormField
                  label={t('teamName')}
                  name='teamName'
                  placeholder='ex: Team A'
                />
              </div>
              <div className='col-span-2'>
                <FormField
                  label={t('teamSize')}
                  placeholder='ex: 4'
                  name='teamSize'
                />
              </div>
              <div className='col-span-2'>
                <FormField
                  label={t('school')}
                  name='school'
                  placeholder='ex: Trường Đại Học A'
                />{' '}
              </div>
              <div className='col-span-2'>
                <FormField
                  label={t('phonenumber')}
                  name='phoneNumber'
                  placeholder='092929211xx'
                />{' '}
              </div>
              <div className='col-span-2'>
                <FormField
                  label='Email'
                  name='email'
                  placeholder='Ex: example@gmail.com'
                />
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
                    t('submit')
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
