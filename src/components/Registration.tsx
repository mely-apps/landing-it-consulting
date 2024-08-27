'use client';
import React from 'react';
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';

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
  gender: null,
  major: '',
  phoneNumber: '',
  school: '',
};

const Registration = () => {
  const handleSubmit = (
    values: RegistrationForm,
    formikHelpers: FormikHelpers<RegistrationForm>,
  ) => {
    console.log(values);
    formikHelpers.resetForm();
  };

  return (
    <div className='container'>
      <h2 className='text-center text-[50px] font-extrabold uppercase text-primary'>
        Registration
      </h2>

      <Formik
        initialValues={initialValues}
        validationSchema={registrationFormSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className='mx-auto mt-10 grid w-[70%] grid-cols-2 gap-4 rounded-lg border border-white/30 bg-white/10 p-10'>
            <div className='col-span-2'>
              <label className='block w-full font-bold capitalize text-primary'>
                Full Name
              </label>
              <Field
                name='fullName'
                className='mt-1 w-full rounded-lg px-4 py-2 text-black'
              />
              <ErrorMessage
                render={(msg) => (
                  <p className='capitalize italic text-red-500'>{msg}</p>
                )}
                name='fullName'
              />
            </div>
            <div className='col-span-1'>
              <label className='block w-full font-bold capitalize text-primary'>
                Date of birth
              </label>
              <Field
                name='dateOfBirth'
                className='mt-1 w-full rounded-lg px-4 py-2 text-black'
              />
              <ErrorMessage
                render={(msg) => (
                  <p className='capitalize italic text-red-500'>{msg}</p>
                )}
                name='dateOfBirth'
              />
            </div>
            <div className='col-span-1'>
              <label className='block w-full font-bold capitalize text-primary'>
                Gender
              </label>
              <Field
                name='gender'
                as='select'
                className='mt-1 w-full rounded-lg px-4 py-2 text-black'
              >
                <option value='male'>Male</option>
                <option value='female'>Female</option>
              </Field>
              <ErrorMessage
                render={(msg) => (
                  <p className='capitalize italic text-red-500'>{msg}</p>
                )}
                name='gender'
              />
            </div>

            <div className='col-span-1'>
              <label className='block w-full font-bold capitalize text-primary'>
                School
              </label>
              <Field
                name='school'
                className='mt-1 w-full rounded-lg px-4 py-2 text-black'
              />
              <ErrorMessage
                render={(msg) => (
                  <p className='capitalize italic text-red-500'>{msg}</p>
                )}
                name='school'
              />
            </div>
            <div className='col-span-1'>
              <label className='block w-full font-bold capitalize text-primary'>
                Major
              </label>
              <Field
                name='major'
                className='mt-1 w-full rounded-lg px-4 py-2 text-black'
              />
              <ErrorMessage
                render={(msg) => (
                  <p className='capitalize italic text-red-500'>{msg}</p>
                )}
                name='major'
              />
            </div>
            <div className='col-span-2'>
              <label className='block w-full font-bold capitalize text-primary'>
                Phone Number
              </label>
              <Field
                name='phoneNumber'
                className='mt-1 w-full rounded-lg px-4 py-2 text-black'
              />
              <ErrorMessage
                render={(msg) => (
                  <p className='capitalize italic text-red-500'>{msg}</p>
                )}
                name='phoneNumber'
              />
            </div>
            <div className='col-span-2'>
              <label className='block w-full font-bold capitalize text-primary'>
                Email
              </label>
              <Field
                type='email'
                name='email'
                className='mt-1 w-full rounded-lg px-4 py-2 text-black'
              />
              <ErrorMessage
                render={(msg) => (
                  <p className='capitalize italic text-red-500'>{msg}</p>
                )}
                name='email'
              />
            </div>

            <div className='col-span-2 mt-4 flex justify-end'>
              <button className='rounded-lg bg-[#7FFFF7] px-6 py-2 font-bold text-black hover:opacity-90'>
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Registration;
