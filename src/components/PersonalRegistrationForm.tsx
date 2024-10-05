import { FormField, SelectField } from '@/components/FormField';
import {
  PersonalForm,
  personalFormInitValue,
  personalFormSchema,
} from '@/components/Schema';
import { MembersFormDataValue } from '@/components/TeamRegistrationForm';
import { cn } from '@/lib/utils';
import { Form, Formik, FormikHelpers, useFormik } from 'formik';
import { useTranslations } from 'next-intl';
import {
  Dispatch,
  ForwardedRef,
  forwardRef,
  SetStateAction,
  useId,
  useImperativeHandle,
  useState,
} from 'react';
import { FaSpinner } from 'react-icons/fa';
import { toast } from 'react-toastify';

interface PersonalRegistrationFormProps {
  onSubmitSuccess?: () => void;
  onRegistrationExpired?: () => void;
  showNotes?: boolean;
  asChild?: boolean;
  className?: string;
  hidden?: boolean;

  // only enabled when asChild is true
  formIndex?: number;
  formValues?: PersonalForm;
  onChange?: Dispatch<SetStateAction<MembersFormDataValue[]>>;
}

export type PersonalRegistrationFormHandle = {
  getValues: () => PersonalForm;
  validate: () => Promise<boolean>;
};

function PersonalRegistrationForm(
  {
    onSubmitSuccess,
    showNotes = true,
    asChild = false,
    className,
    formIndex,
    formValues,
    hidden,
    onChange,
    onRegistrationExpired,
  }: PersonalRegistrationFormProps,
  ref: ForwardedRef<PersonalRegistrationFormHandle>,
) {
  const mainTranslations = useTranslations('HomePage.registration');
  const errorTranslations = useTranslations(
    'HomePage.registration.errorMessages',
  );
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (
    values: PersonalForm,
    formikHelpers: FormikHelpers<PersonalForm>,
  ) => {
    try {
      const registrationCloseDate = new Date('2024-10-12T17:00:00Z'); // 13th Oct 2022, 00:00 GMT+7
      if (new Date() >= registrationCloseDate) {
        onRegistrationExpired?.();
        return;
      }

      setIsLoading(true);
      const url =
        `https://docs.google.com/forms/d/e/1FAIpQLSea32a8wFT9NJl8Tjpq_UbsuaEzd9W3JN482qH06Q_rG7wTZw/formResponse?` +
        `entry.2104713088=${encodeURIComponent(values.fullName)}&` +
        `entry.1390807190=${encodeURIComponent(values.expectedGraduationYear)}&` +
        `entry.1701909681=${encodeURIComponent(values.school)}&` +
        `entry.480658283=${encodeURIComponent(values.major)}&` +
        `entry.350657595=${encodeURIComponent(values.phoneNumber)}&` +
        `entry.489003859=${encodeURIComponent(values.email)}`;
      await fetch(url, {
        method: 'POST',
        mode: 'no-cors',
      });

      onSubmitSuccess?.();
      toast.success(mainTranslations('success.toastMessage'));
      formikHelpers.resetForm();
    } catch (error: any) {
      console.log(error);
      toast.error(mainTranslations('failed.toastMessage') + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const {
    handleChange,
    values,
    errors,
    touched,
    validateForm,
    setErrors,
    setTouched,
  } = useFormik({
    enableReinitialize: true,
    initialValues: formValues || personalFormInitValue,
    validationSchema: personalFormSchema,
    onSubmit: () => {},
  });

  const id = useId();

  useImperativeHandle(ref, () => ({
    getValues: () => values,
    validate: async () => {
      const validateErrors = await validateForm();
      setErrors(validateErrors);
      setTouched({
        fullName: true,
        expectedGraduationYear: true,
        email: true,
        gender: true,
        major: true,
        phoneNumber: true,
        school: true,
      });

      return Object.keys(validateErrors).length === 0;
    },
  }));

  if (!asChild) {
    return (
      <Formik
        initialValues={personalFormInitValue}
        validationSchema={personalFormSchema}
        onSubmit={handleSubmit}
      >
        <Form
          className={cn('grid w-full grid-cols-2 gap-4', className, {
            hidden: !hidden,
          })}
          suppressHydrationWarning
        >
          <div className='col-span-2'>
            <FormField
              label={mainTranslations('individual.fullName.label')}
              name='fullName'
              placeholder={mainTranslations('individual.fullName.placeholder')}
              required
            />
          </div>
          <div className='col-span-2 md:col-span-1'>
            <FormField
              label={mainTranslations(
                'individual.expectedGraduationYear.label',
              )}
              name='expectedGraduationYear'
              placeholder={mainTranslations(
                'individual.expectedGraduationYear.placeholder',
              )}
              required
            />
          </div>
          <div className='col-span-2 md:col-span-1'>
            <SelectField
              label={mainTranslations('individual.gender.label')}
              name='gender'
              required
              options={[
                {
                  value: 'male',
                  label: mainTranslations('individual.gender.male'),
                },
                {
                  value: 'female',
                  label: mainTranslations('individual.gender.female'),
                },
              ]}
            />
          </div>
          <div className='col-span-2 md:col-span-1'>
            <FormField
              label={mainTranslations('individual.school.label')}
              name='school'
              required
              placeholder={mainTranslations('individual.school.placeholder')}
            />
          </div>
          <div className='col-span-2 md:col-span-1'>
            <FormField
              label={mainTranslations('individual.major.label')}
              name='major'
              placeholder={mainTranslations('individual.major.placeholder')}
              required
            />
          </div>
          <div className='col-span-2'>
            <FormField
              label={mainTranslations('individual.phoneNumber.label')}
              name='phoneNumber'
              required
              placeholder={mainTranslations(
                'individual.phoneNumber.placeholder',
              )}
            />
          </div>
          <div className='col-span-2'>
            <FormField
              label={mainTranslations('individual.email.label')}
              name='email'
              required
              placeholder={mainTranslations('individual.email.placeholder')}
            />
          </div>
          {showNotes && (
            <div className='col-span-2 mt-4'>
              <p className='text-center italic text-primary'>
                {mainTranslations('individual.note')}
              </p>
            </div>
          )}
          <div className='col-span-2 mt-4 flex justify-end'>
            <button
              disabled={isLoading}
              type='submit'
              className={cn(
                'w-auto rounded-md !bg-[#7FFFF7] px-6 py-2 font-semibold text-black shadow-[0_0_2px_#7FFFF7,inset_0_0_2px_#7FFFF7,0_0_5px_#7FFFF7,0_0_15px_#7FFFF7,0_0_30px_#7FFFF7] transition-all hover:opacity-90',
                isLoading && 'cursor-not-allowed opacity-90',
              )}
            >
              {isLoading ? (
                <FaSpinner className='animate-spin' />
              ) : (
                mainTranslations('submit')
              )}
            </button>
          </div>
        </Form>
      </Formik>
    );
  }

  return (
    <div className={cn('grid w-full grid-cols-2 gap-4', className)}>
      <div className='col-span-2'>
        <label
          className='block w-full font-bold text-primary'
          htmlFor={`fullName_${id}`}
        >
          {mainTranslations('individual.fullName.label')}{' '}
          <span className='text-red-500'>*</span>
        </label>
        <input
          name='fullName'
          id={`fullName_${id}`}
          placeholder={mainTranslations('individual.fullName.placeholder')}
          value={formValues?.fullName || values.fullName}
          className='mt-1 w-full rounded-lg px-4 py-2 text-black'
          onChange={(e) => {
            handleChange(e);
            onChange?.((prev) =>
              prev.map((item) =>
                item.index === formIndex
                  ? { ...item, fullName: e.target.value }
                  : item,
              ),
            );
          }}
          onBlur={() => setTouched({ ...touched, fullName: true })}
        />
        {errors.fullName && touched.fullName && (
          <p className='italic text-red-500'>
            {errorTranslations(errors.fullName as any)}
          </p>
        )}
      </div>
      <div className='col-span-2 md:col-span-1'>
        <label
          className='block w-full font-bold text-primary'
          htmlFor={`expectedGraduationYear_${id}`}
        >
          {mainTranslations('individual.expectedGraduationYear.label')}{' '}
          <span className='text-red-500'>*</span>
        </label>
        <input
          name='expectedGraduationYear'
          id={`expectedGraduationYear_${id}`}
          placeholder={mainTranslations(
            'individual.expectedGraduationYear.placeholder',
          )}
          value={
            formValues?.expectedGraduationYear || values.expectedGraduationYear
          }
          className='mt-1 w-full rounded-lg px-4 py-2 text-black'
          onChange={(e) => {
            handleChange(e);
            onChange?.((prev) =>
              prev.map((item) =>
                item.index === formIndex
                  ? { ...item, expectedGraduationYear: e.target.value }
                  : item,
              ),
            );
          }}
          onBlur={() =>
            setTouched({ ...touched, expectedGraduationYear: true })
          }
        />
        {errors.expectedGraduationYear && touched.expectedGraduationYear && (
          <p className='italic text-red-500'>
            {errorTranslations(errors.expectedGraduationYear as any)}
          </p>
        )}
      </div>
      <div className='col-span-2 md:col-span-1'>
        <label
          className='block w-full font-bold text-primary'
          htmlFor={`gender_${id}`}
        >
          {mainTranslations('individual.gender.label')}{' '}
          <span className='text-red-500'>*</span>
        </label>
        <select
          name='gender'
          id={`gender_${id}`}
          className='mt-1 w-full rounded-lg px-4 py-2 text-black'
          onChange={(e) => {
            handleChange(e);
            onChange?.((prev) =>
              prev.map((item) =>
                item.index === formIndex
                  ? { ...item, gender: e.target.value as any }
                  : item,
              ),
            );
          }}
          onTouchEnd={() => setTouched({ ...touched, gender: true })}
          value={formValues?.gender || values.gender}
        >
          <option value='male'>
            {mainTranslations('individual.gender.male')}
          </option>
          <option value='female'>
            {mainTranslations('individual.gender.female')}
          </option>
        </select>
        {errors.gender && touched.gender && (
          <p className='italic text-red-500'>
            {errorTranslations(errors.gender as any)}
          </p>
        )}
      </div>
      <div className='col-span-2 md:col-span-1'>
        <label
          className='block w-full font-bold text-primary'
          htmlFor={`school_${id}`}
        >
          {mainTranslations('individual.school.label')}{' '}
          <span className='text-red-500'>*</span>
        </label>
        <input
          name='school'
          id={`school_${id}`}
          placeholder={mainTranslations('individual.school.placeholder')}
          value={formValues?.school || values.school}
          className='mt-1 w-full rounded-lg px-4 py-2 text-black'
          onChange={(e) => {
            handleChange(e);
            onChange?.((prev) =>
              prev.map((item) =>
                item.index === formIndex
                  ? { ...item, school: e.target.value }
                  : item,
              ),
            );
          }}
          onBlur={() => setTouched({ ...touched, school: true })}
        />
        {errors.school && touched.school && (
          <p className='italic text-red-500'>
            {errorTranslations(errors.school as any)}
          </p>
        )}
      </div>
      <div className='col-span-2 md:col-span-1'>
        <label
          className='block w-full font-bold text-primary'
          htmlFor={`major_${id}`}
        >
          {mainTranslations('individual.major.label')}{' '}
          <span className='text-red-500'>*</span>
        </label>
        <input
          name='major'
          id={`major_${id}`}
          value={formValues?.major || values.major}
          placeholder={mainTranslations('individual.major.placeholder')}
          className='mt-1 w-full rounded-lg px-4 py-2 text-black'
          onChange={(e) => {
            handleChange(e);
            onChange?.((prev) =>
              prev.map((item) =>
                item.index === formIndex
                  ? { ...item, major: e.target.value }
                  : item,
              ),
            );
          }}
          onBlur={() => setTouched({ ...touched, major: true })}
        />
        {errors.major && touched.major && (
          <p className='italic text-red-500'>
            {errorTranslations(errors.major as any)}
          </p>
        )}
      </div>
      <div className='col-span-2'>
        <label
          className='block w-full font-bold text-primary'
          htmlFor={`phoneNumber_${id}`}
        >
          {mainTranslations('individual.phoneNumber.label')}{' '}
          <span className='text-red-500'>*</span>
        </label>
        <input
          name='phoneNumber'
          id={`phoneNumber_${id}`}
          value={formValues?.phoneNumber || values.phoneNumber}
          className='mt-1 w-full rounded-lg px-4 py-2 text-black'
          placeholder={mainTranslations('individual.phoneNumber.placeholder')}
          onChange={(e) => {
            handleChange(e);
            onChange?.((prev) =>
              prev.map((item) =>
                item.index === formIndex
                  ? { ...item, phoneNumber: e.target.value }
                  : item,
              ),
            );
          }}
          onBlur={() => setTouched({ ...touched, phoneNumber: true })}
        />
        {errors.phoneNumber && touched.phoneNumber && (
          <p className='italic text-red-500'>
            {errorTranslations(errors.phoneNumber as any)}
          </p>
        )}
      </div>
      <div className='col-span-2'>
        <label
          className='block w-full font-bold text-primary'
          htmlFor={`email_${id}`}
        >
          {mainTranslations('individual.email.label')}{' '}
          <span className='text-red-500'>*</span>
        </label>
        <input
          name='email'
          placeholder={mainTranslations('individual.email.placeholder')}
          id={`email_${id}`}
          value={formValues?.email || values.email}
          className='mt-1 w-full rounded-lg px-4 py-2 text-black'
          onChange={(e) => {
            handleChange(e);
            onChange?.((prev) =>
              prev.map((item) =>
                item.index === formIndex
                  ? { ...item, email: e.target.value }
                  : item,
              ),
            );
          }}
          onBlur={() => setTouched({ ...touched, email: true })}
        />
        {errors.email && touched.email && (
          <p className='italic text-red-500'>
            {errorTranslations(errors.email as any)}
          </p>
        )}
      </div>
      {showNotes && (
        <div className='col-span-2 mt-4'>
          <p className='text-center italic text-primary'>
            {mainTranslations('individual.note')}
          </p>
        </div>
      )}
    </div>
  );
}

export default forwardRef<
  PersonalRegistrationFormHandle,
  PersonalRegistrationFormProps
>(PersonalRegistrationForm);
