export const user = {
  name: 'Name',
  surname: 'Surname',
  username: 'username',
  email: 'test@email.com',
  password: 'password1',
};

export const response = {
  data: {
    name: 'Gino',
    surname: 'Bartali',
    email: 'gino@bartali.it',
    username: 'bartali',
  },
};

export const requestData = { user };

export const error = 'fake error';

export const defaultState = {
  loading: false,
  isError: false,
  response: null,
  error: null,
};

export const validSchema = {
  ...user,
  repeatPassword: user.password,
};
