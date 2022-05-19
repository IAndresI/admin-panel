import React from 'react'
import { Button as MUIButton } from '@mui/material';
import styled from '@emotion/styled';

const StyledButton = styled(MUIButton)(({ theme }) => ({
  backgroundColor: "var(--color-purple)",
  borderRadius: 10,
  padding: 15,
  border: "1px solid var(--color-purple)",
  fontWeight: 700,
  color: "var(--text-color)",
  marginBottom: 20,
  '&:hover, &:focus': {
    outline: "transparent",
    backgroundColor: 'transparent',
    border: "1px solid var(--color-purple)",
  }
}));

export default function Button({ children, onClick, disabled = false }) {
  return (
    <StyledButton
      className="auth__btn"
      variant="outlined"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  )
}