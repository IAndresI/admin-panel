import { styled, TextField } from '@mui/material'
import React from 'react'
import Input from '@mui/material/Input';

const StyledInput = styled(Input)(({ theme }) => ({
  color: "#ffffff",
  padding: 0,
  '.MuiOutlinedInput-root': {
    color: "var(--text-color)",
  },
  '.MuiInput-input': {
    padding: "15px 15px",
    borderRadius: 10,
    transition: 'all .3s ease-in-out',
    border: "1px solid var(--color-gray)",
    '&:hover, &:focus-within': {
      border: "1px solid var(--color-purple)",
    }
  }
}));

export default function TextInput({ setValue, value, type, label }) {

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <StyledInput
      className="auth__input"
      type={type}
      placeholder={label}
      value={value}
      onChange={(e) => handleChange(e)}
    />
  )
}