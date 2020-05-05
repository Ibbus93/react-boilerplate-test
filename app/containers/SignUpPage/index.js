/**
 *
 * SignUp
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Formik } from 'formik';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import SignUpForm from './components/SignUpForm';
import { initialValues } from './map';
import validationSchema from './validators';

import makeSelectSignUp from './selectors';
import { signUpRequest } from './actions';
import reducer from './reducer';
import saga from './saga';

export function SignUp({ registerUser }) {
  useInjectReducer({ key: 'signUp', reducer });
  useInjectSaga({ key: 'signUp', saga });

  return (
    <Box
      alignItems="center"
      display="flex"
      flexDirection="column"
      height="100%"
      justifyContent="center"
      width="100%"
    >
      <Box
        bgcolor="white"
        border="1px solid lightgray"
        borderRadius="10px"
        display="flex"
        flexDirection="column"
        p={2}
        maxWidth="450px"
        width="100%"
        textAlign="center"
      >
        <Typography
          component="h3"
          variant="h5"
          style={{ marginBottom: '16px' }}
        >
          Sign Up with TempDox
        </Typography>
        <Formik
          onSubmit={registerUser}
          component={SignUpForm}
          initialValues={initialValues}
          validationSchema={validationSchema}
        />
      </Box>
    </Box>
  );
}

SignUp.propTypes = {
  registerUser: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  signUp: makeSelectSignUp(),
});

function mapDispatchToProps(dispatch) {
  return {
    registerUser: values => dispatch(signUpRequest(values)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(SignUp);
