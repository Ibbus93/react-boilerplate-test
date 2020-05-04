/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Box from '@material-ui/core/Box';

import HomePage from 'containers/HomePage/Loadable';
import SignUpPage from 'containers/SignUp/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <Box height="100%">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/sign-up" component={SignUpPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </Box>
  );
}
