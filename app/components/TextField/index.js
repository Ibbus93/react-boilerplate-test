import React from 'react';
import MuiTextField from '@material-ui/core/TextField';
import { getIn } from 'formik';

const fieldToTextField = ({
    disabled,
    field,
    form: { isSubmitting, touched, errors },
    ...props
}) => {
    const fieldError = getIn(errors, field.name);
    const showError = getIn(touched, field.name) && !!fieldError;

    return {
        ...props,
        ...field,
        error: showError,
        helperText: showError ? fieldError : props.helperText,
        //disabled: disabled || isSubmitting,
        variant: props.variant,
    };
}

const TextField = ({ children, ...props }) =>  (
    <MuiTextField { ...fieldToTextField(props) }>
        {children}
    </MuiTextField>
);

export default TextField;