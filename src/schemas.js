import * as Yup from 'yup';

export const LoginFormSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .required('Required')
    .min(8, 'Password is too short - should be 8 chars minimum.'),
});

export const RegistrationFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .required('Required'),
});
