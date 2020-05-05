import { object, string, ref } from 'yup';

const validationSchema = object({
  name: string().required('The name is required'),
  surname: string().required('The surname is required'),
  username: string().required('Username is required'),
  email: string()
    .email('Please type a valid email')
    .required('Email is required'),
  password: string()
    .required('Password is required')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      'The password must match: minimum eight characters, at least one letter and one number',
    ),
  repeatPassword: string()
    .required('Repeat password is required')
    .oneOf([ref('password'), null], 'Passwords must match'),
});

export default validationSchema;
