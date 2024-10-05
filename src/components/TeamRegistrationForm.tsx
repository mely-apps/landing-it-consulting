import { FormField } from '@/components/FormField';
import PersonalRegistrationForm, {
  PersonalRegistrationFormHandle,
} from '@/components/PersonalRegistrationForm';
import {
  PersonalForm,
  personalFormInitValue,
  TeamForm,
  teamFormInitValue,
  teamFormSchema,
} from '@/components/Schema';
import { REGISTRATION_CLOSE_DATE } from '@/constants';
import { cn } from '@/lib/utils';
import { Form, Formik, FormikHelpers } from 'formik';
import { Delete, Plus } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { toast } from 'react-toastify';

interface TeamRegistrationFormProps {
  onSubmitSuccess?: () => void;
  onRegistrationExpired?: () => void;
  hidden?: boolean;
}

export interface MembersFormDataValue extends PersonalForm {
  index: number;
}

let indexCount = 2;

export default function TeamRegistrationForm({
  onSubmitSuccess,
  onRegistrationExpired,
  hidden,
}: TeamRegistrationFormProps) {
  const t = useTranslations('HomePage');
  const memberFormsRef = useRef<PersonalRegistrationFormHandle[]>([]);
  const [selectedMemberIndex, setSelectedMemberIndex] = useState(0);
  const [membersFormData, setMembersFormData] = useState<
    MembersFormDataValue[]
  >([
    { index: 0, ...personalFormInitValue },
    { index: 1, ...personalFormInitValue },
  ]);

  const handleSubmit = async (
    values: TeamForm,
    formikHelpers: FormikHelpers<TeamForm>,
  ) => {
    try {
      if (new Date() >= REGISTRATION_CLOSE_DATE) {
        onRegistrationExpired?.();
        return;
      }

      const allMemberFormsAreValid = await (
        await Promise.all(memberFormsRef.current.map((form) => form.validate()))
      ).every(Boolean);

      if (!allMemberFormsAreValid) {
        toast.error(t('registration.failed.inputError'));
        return;
      }

      await Promise.all(
        membersFormData.map((data) => {
          const url =
            `https://docs.google.com/forms/d/e/1FAIpQLScxKAC9Ww4wevdbu82gMn9rM_FlTurlnYVIFpwQdiOGWPcMfg/formResponse?` +
            `entry.224019388=${encodeURIComponent(values.teamName)}&` +
            `entry.629332802=${encodeURIComponent(membersFormData.length)}&` +
            `entry.1358224807=${encodeURIComponent(data.fullName)}&` +
            `entry.1076600136=${encodeURIComponent(data.expectedGraduationYear)}&` +
            `entry.255642493=${encodeURIComponent(data.school)}&` +
            `entry.421524129=${encodeURIComponent(data.major)}&` +
            `entry.1071420772=${encodeURIComponent(data.phoneNumber)}&` +
            `entry.1527414272=${encodeURIComponent(data.email)}&`;

          return fetch(url, {
            method: 'POST',
            mode: 'no-cors',
          });
        }),
      );

      onSubmitSuccess?.();
      toast.success(t('registration.success.toastMessage'));
      formikHelpers.resetForm();
    } catch (error) {
      toast.error(t('registration.failed.toastMessage'));
    }
  };

  const handleAddMember = () => {
    setMembersFormData([
      ...membersFormData,
      { ...personalFormInitValue, index: indexCount++ },
    ]);
  };

  const handleDeleteMember = (value: MembersFormDataValue) => {
    if (value.index === selectedMemberIndex) {
      const indexOfItem = membersFormData.indexOf(value);
      if (indexOfItem === membersFormData.length - 1) {
        setSelectedMemberIndex(membersFormData[indexOfItem - 1].index);
      } else setSelectedMemberIndex(membersFormData[indexOfItem + 1].index);
    }

    setMembersFormData(
      membersFormData.filter((data) => data.index !== value.index),
    );
  };

  return (
    <Formik
      initialValues={teamFormInitValue}
      validationSchema={teamFormSchema}
      onSubmit={handleSubmit}
    >
      {({ isValidating, isSubmitting }) => (
        <Form
          className={cn('grid w-full grid-cols-2 gap-4', {
            hidden: !hidden,
          })}
          suppressHydrationWarning
        >
          <div className='col-span-2'>
            <FormField
              label={t('registration.team.teamName.label')}
              name='teamName'
              autoFocus={!hidden}
              placeholder={t('registration.team.teamName.placeholder')}
              required
            />
          </div>

          <div className='col-span-2'>
            <hr className='border-white' />
            <h3 className='mt-4 w-full text-center text-lg font-bold text-primary'>
              {t('registration.team.memberInfo.title')}
            </h3>
          </div>

          <div className='col-span-2 grid grid-cols-4 gap-4'>
            <div className='col-span-4 flex flex-col items-center border-white sm:col-span-1 sm:border-r'>
              {membersFormData.map((data) => (
                <button
                  key={`member_tab_${data.index}`}
                  type='button'
                  className={cn(
                    'flex w-full justify-between rounded-s-lg border-r-8 border-transparent p-4 text-white transition-all hover:bg-[#ccc]/30',
                    {
                      'border-primary bg-[#ccc]/30':
                        selectedMemberIndex === data.index,
                    },
                  )}
                  onClick={() => setSelectedMemberIndex(data.index)}
                >
                  <span
                    className={cn(
                      {
                        'text-primary': selectedMemberIndex === data.index,
                      },
                      'line-clamp-1 text-left',
                    )}
                  >
                    {data.fullName.trim() === ''
                      ? t('registration.team.memberIndex', {
                          index: data.index + 1,
                        })
                      : data.fullName}
                  </span>
                  {membersFormData.length > 2 && (
                    <Delete
                      className='h-6 w-6 transition-all hover:text-red-500'
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteMember(data);
                      }}
                    />
                  )}
                </button>
              ))}
              {membersFormData.length < 4 && (
                <button
                  type='button'
                  className='sm: mt-4 flex items-center justify-around rounded-lg bg-[#7FFFF7] px-4 py-2 font-bold text-black hover:opacity-90 max-sm:gap-x-2'
                  onClick={handleAddMember}
                >
                  <Plus />
                  {t('registration.team.addMember')}
                </button>
              )}
            </div>
            <div className='col-span-4 sm:col-span-3'>
              {membersFormData.map((data, index) => (
                <PersonalRegistrationForm
                  key={`member_form_${data.index}`}
                  ref={(formHandle) => {
                    if (formHandle) memberFormsRef.current[index] = formHandle;
                    else memberFormsRef.current.splice(0, 1);
                  }}
                  showNotes={false}
                  asChild
                  className={cn({ hidden: selectedMemberIndex !== data.index })}
                  formValues={membersFormData[index]}
                  formIndex={data.index}
                  onChange={setMembersFormData}
                />
              ))}
            </div>
          </div>

          <div className='col-span-2 mt-4'>
            <p className='text-center italic text-primary'>
              {t('registration.team.note')}
            </p>
          </div>
          <div className='col-span-2 mt-4 flex justify-end'>
            <button
              type='submit'
              disabled={isValidating || isSubmitting}
              className={cn(
                'w-auto rounded-md !bg-[#7FFFF7] px-6 py-2 font-semibold text-black shadow-[0_0_2px_#7FFFF7,inset_0_0_2px_#7FFFF7,0_0_5px_#7FFFF7,0_0_15px_#7FFFF7,0_0_30px_#7FFFF7] transition-all hover:opacity-90',
                {
                  'cursor-not-allowed opacity-90': isValidating || isSubmitting,
                },
              )}
            >
              {isValidating || isSubmitting ? (
                <FaSpinner className='animate-spin' />
              ) : (
                t('registration.submit')
              )}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
