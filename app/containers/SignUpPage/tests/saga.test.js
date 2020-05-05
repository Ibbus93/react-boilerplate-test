/**
 * How to test Sagas
 * Read more on: https://redux-saga.js.org/docs/advanced/Testing.html
 *
 * Testing a Saga middleware is being done mocking the API call
 * It is even possible to test each yield, see this article for more info:
 * https://medium.com/@13gaurab/unit-testing-sagas-with-jest-29a8bcfca028
 */

/* eslint-disable redux-saga/yield-effects */
import { runSaga } from 'redux-saga';

import * as api from 'api';

import { signUpResponse, signUpError } from '../actions';
import { requestSignUp } from '../saga';
import { response, requestData, error } from './mocks';

describe('SignUp Saga', () => {
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
