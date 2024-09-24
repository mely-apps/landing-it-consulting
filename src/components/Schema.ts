import * as Yup from 'yup';
import dayjs from 'dayjs';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export interface PersonalForm {
  fullName: string;
  dateOfBirth: string;
  gender: 'male' | 'female' | null;
  school: string;
  major: string;
  phoneNumber: string;
  email: string;
}

export interface TeamForm {
  teamName: string;
  teamSize: string;
  school: string;
  phoneNumber: string;
  email: string;
}

export const personalFormSchema = Yup.object().shape<
  Record<keyof PersonalForm, Yup.StringSchema>
>({
  fullName: Yup.string()
    .required('fullName.required')
    .trim('fullName.required'),
  dateOfBirth: Yup.string().required('dateOfBirth.required'),
  gender: Yup.string()
    .oneOf(['male', 'female'])
    .required('gender.required')
    .trim('gender.required'),
  school: Yup.string().required('school.required').trim('school.required'),
  major: Yup.string().required('major.required').trim('major.required'),
  phoneNumber: Yup.string()
    .matches(/^(0\d{9,10})|(\+\d{2}\d{9,10})$/, 'phoneNumber.invalid')
    .required('phoneNumber.required'),
  email: Yup.string().email('email.invalid').required('email.required'),
});

export const teamFormSchema = Yup.object().shape<
  Record<keyof TeamForm, Yup.StringSchema>
>({
  teamName: Yup.string()
    .required('teamName.required')
    .min(1, 'Team name must be at least 1 character'),
  teamSize: Yup.string().required('teamSize.required'),
  school: Yup.string().required('school.required'),
  phoneNumber: Yup.string()
    .matches(/^(0\d{9,10})|(\+\d{2}\d{9,10})$/, 'phoneNumber.invalid')
    .required('phoneNumber.required'),
  email: Yup.string().email('email.invalid').required('email.required'),
});

export const teamFormInitValue: TeamForm = {
  teamName: '',
  teamSize: '',
  school: '',
  phoneNumber: '',
  email: '',
};

export const personalFormInitValue: PersonalForm = {
  fullName: '',
  dateOfBirth: dayjs(Date.now()).format('YYYY-MM-DD'),
  email: '',
  gender: 'male',
  major: '',
  phoneNumber: '',
  school: '',
};
