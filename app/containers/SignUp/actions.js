/*
 *
 * SignUp actions
 *
 */

import { SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_ERROR } from './constants';

export function signUpRequest(user) {
  return {
    user,
    type: SIGN_UP_REQUEST,
  };
}

export function signUpResponse(response) {
  return {
    type: SIGN_UP_SUCCESS,
    response
  }
}

export function signUpError(error) {
  return {
    type: SIGN_UP_ERROR,
    error
  }
}
