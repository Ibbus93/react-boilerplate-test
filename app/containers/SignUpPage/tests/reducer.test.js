/**
 * How to test Reducers
 *
 * Reducers are pure functions, hence the expected result is only the
 * immer produce with the result we are looking for
 *
 * The alternative is to use snapshots, how it could be seen in the 2nd and 3rd test
 */

import produce from 'immer';

import signUpReducer from '../reducer';
import { signUpRequest, signUpResponse, signUpError } from '../actions';
import { defaultState, response, error } from './mocks';

/* eslint-disable default-case, no-param-reassign */
describe('signUpReducer', () => {
  let state;

  beforeEach(() => {
    state = defaultState;
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(signUpReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the signUpRequest action correctly', () => {
    // const expectedResult = produce(state, draft => {
    //   draft.loading = true;
    //   draft.isError = false;
    // });

    // expect(signUpReducer(state, signUpRequest())).toEqual(expectedResult);

    expect(signUpReducer(state, signUpRequest())).toMatchSnapshot();
  });

  it('should handle the signUpResponse action correctly', () => {
    // const expectedResult = produce(state, draft => {
    //   draft.loading = false;
    //   draft.response = response;
    // });

    // expect(signUpReducer(state, signUpResponse(response))).toEqual(expectedResult);

    expect(signUpReducer(state, signUpResponse(response))).toMatchSnapshot();
  });

  it('should handle the signUpError action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loading = false;
      draft.isError = true;
      draft.error = error;
    });

    expect(signUpReducer(state, signUpError(error))).toEqual(expectedResult);
  });
});
