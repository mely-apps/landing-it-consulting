import * as Yup from 'yup';

export interface TeamForm {
  teamName: string;
}

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
