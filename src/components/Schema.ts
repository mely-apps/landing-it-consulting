import * as Yup from 'yup';
import dayjs from 'dayjs';

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

export const teamFormSchema = Yup.object().shape<
  Record<keyof TeamForm, Yup.StringSchema>
>({
  teamName: Yup.string()
    .required('Team name is required')
    .min(1, 'Team name must be at least 1 character'),
  teamSize: Yup.string().required('Team size is required'),
  school: Yup.string().required('School is required'),
  phoneNumber: Yup.string().required('Phone number is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
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
