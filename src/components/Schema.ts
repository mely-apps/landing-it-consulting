import * as Yup from 'yup';
export interface PersonalForm {
  fullName: string;
  expectedGraduationYear: string;
  gender: 'male' | 'female';
  school: string;
  major: string;
  phoneNumber: string;
  email: string;
}

export interface TeamForm {
  teamName: string;
}

export const personalFormSchema = Yup.object().shape<
  Record<keyof PersonalForm, Yup.StringSchema>
>({
  fullName: Yup.string()
    .required('fullName.required')
    .trim('fullName.required'),
  expectedGraduationYear: Yup.string()
    .matches(/^\d{4}$/g, 'expectedGraduationYear.invalid')
    .required('expectedGraduationYear.required'),
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
});

export const teamFormInitValue: TeamForm = {
  teamName: '',
};

export const personalFormInitValue: PersonalForm = {
  fullName: '',
  expectedGraduationYear: '',
  email: '',
  gender: 'male',
  major: '',
  phoneNumber: '',
  school: '',
};
