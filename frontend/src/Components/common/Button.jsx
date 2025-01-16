import React from 'react';
import { Button as MuiButton } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledButton = styled(MuiButton)(({ theme }) => ({
  background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.light} 90%)`,
  color: 'white',
  boxShadow: '0 3px 5px 2px rgba(44, 62, 80, .3)',
  '&:hover': {
    background: `linear-gradient(45deg, ${theme.palette.primary.dark} 30%, ${theme.palette.primary.main} 90%)`,
  },
}));

export const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
}; 

export default Button;