/**
 * How to test Redux Actions
 * Read more on: https://redux.js.org/recipes/writing-tests#action-creators
 *
 * The main goal in testing Redux Actions is to:
 * > check if the constant type is matching the right action type
 * > check if the returned object is consistent to its definition
 */

import { signUpRequest, signUpResponse, signUpError } from '../actions';
import { SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_ERROR } from '../constants';
import { user, response } from './mocks';

describe('SignUp actions', () => {
  it('Should create an action to register the user', () => {
    const expected = {
      type: SIGN_UP_REQUEST,
      user,
    };

    expect(signUpRequest(user)).toEqual(expected);
  });

  it('Should create an action to save the response of the sign up call', () => {
    const expected = {
      type: SIGN_UP_SUCCESS,
      response,
    };
    expect(signUpResponse(response)).toEqual(expected);
  });

  it('Should create an action to save the error of the sign up call', () => {
    const expected = {
      type: SIGN_UP_ERROR,
      error: response,
    };

    expect(signUpError(response)).toEqual(expected);
  });
});
