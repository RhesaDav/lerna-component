import React from "react";
import { ButtonProps as Props } from '@mui/material';
export type ButtonProps = Props & {};
declare const Button: {
    ({ children, ...rest }: ButtonProps): React.JSX.Element;
    defaultProps: {
        variant: string;
    };
};
export default Button;
