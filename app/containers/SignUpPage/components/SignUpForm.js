import React from 'react';
import { Field } from 'formik';

// Todo move this to general components
import Button from 'components/Button';
import TextField from 'components/TextField';

function SignUpForm ({ handleSubmit }) {
    return (
        <form onSubmit={handleSubmit}>
            <Field 
                name="name"
                label="Name"
                variant="outlined"
                component={TextField}
                fullWidth
            />
            <Field 
                name="surname"
                label="Surname"
                variant="outlined"
                component={TextField}
                fullWidth
            />
            <Field 
                name="username"
                label="Username"
                variant="outlined"
                component={TextField}
                fullWidth
            />
            <Field 
                name="email"
                label="Email"
                variant="outlined"
                component={TextField}
                type="email"
                fullWidth
            />
            <Field 
                name="password"
                label="Password"
                variant="outlined"
                type="password"
                component={TextField}
                fullWidth
            />
            <Field 
                name="repeatPassword"
                label="Repeat password"
                variant="outlined"
                type="password"
                component={TextField}
                fullWidth
            />
            <Button 
                color="primary" 
                size="large" 
                type="submit"
                variant="contained" 
                fullWidth
            >
                Send
            </Button>
        </form>
    );
}

export default SignUpForm;