import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { IconButton, InputAdornment, OutlinedInput, styled } from '@mui/material'
import React from 'react'

const StyledInput = styled(OutlinedInput)(({ theme }) => ({
  '.MuiOutlinedInput-input, .MuiOutlinedInput-notchedOutline': {
    color: "var(--text-color)",
    border: "none",
    transition: 'all .3s ease-in-out',
  },
  borderRadius: 10,
  backgroundColor: "transparent",
  border: "1px solid var(--color-gray)",
  marginBottom: 10,
  transition: 'all .3s ease-in-out',
  '&:hover, &:focus-within': {
    border: "1px solid var(--color-purple)",
  }
}));

export default function PasswordInput({ setPassword, password }) {

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickShowPassword = () => {
    setPassword({
      ...password,
      showPassword: !password.showPassword,
    });
  };

  return (
    <StyledInput
      type={password.showPassword ? 'text' : 'password'}
      onChange={(e) => setPassword(e.target.value)}
      value={password.value}
      placeholder="Password"
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
            edge="end"
          >
            {password.showPassword ? <VisibilityOff sx={{ color: 'white' }} /> : <Visibility sx={{ color: 'white' }} />}
          </IconButton>
        </InputAdornment>
      }
    />
  )
}