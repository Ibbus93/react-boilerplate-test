/**
 * How to test Sagas
 * Read more on: https://redux-saga.js.org/docs/advanced/Testing.html
 */

/* eslint-disable redux-saga/yield-effects */
import { runSaga } from 'redux-saga';

import * as api from 'api';

import { signUpResponse, signUpError } from '../actions';
import { requestSignUp } from '../saga';

describe('SignUp Saga', () => {
  const response = {
    data: {
      name: 'Gino',
      surname: 'Bartali',
      email: 'gino@bartali.it',
      username: 'bartali',
    },
  };
  const requestData = { user: { ...response.data, password: 'fake' } };

  const error = 'fake error';

  it('should call api and dispatch success action', async () => {
    const registerUser = jest
      .spyOn(api, 'registerUser')
      .mockImplementation(() =>
        Promise.resolve({
          json: () => response,
        }),
      );

    const dispatched = [];
    await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      requestSignUp,
      requestData,
    );

    expect(registerUser).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([signUpResponse(response)]);
    registerUser.mockClear();
  });

  it('should call api and dispatch error action', async () => {
    const registerUser = jest
      .spyOn(api, 'registerUser')
      .mockImplementation(() => Promise.reject(error));

    const dispatched = [];

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      requestSignUp,
      requestData,
    );

    expect(registerUser).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([signUpError(error)]);
  });
});
