import React from 'react';
import { ButtonProps as ButtonProps$1 } from '@mui/material';

type ButtonProps = ButtonProps$1 & {};
declare const Button: {
    ({ children, ...rest }: ButtonProps): React.JSX.Element;
    defaultProps: {
        variant: string;
    };
};

export { Button, ButtonProps };
