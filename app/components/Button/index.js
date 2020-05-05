import React from 'react';
import MaterialButton from '@material-ui/core/Button';

function Button (props) {
    return (
        <MaterialButton { ...props } />        
    )
};

export default Button;