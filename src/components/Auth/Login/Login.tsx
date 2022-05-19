import React, { useState, useEffect } from 'react'
import { useLoginMutation } from '../../../services/authService'
import { useAppDispatch } from '../../../store/hooks/redux'
import { authActions } from '../../../store/reducers/authSlice'
import Input from '../../Input/TextInput';
import { Link, useNavigate } from 'react-router-dom'
import PasswordInput from '../../Input/PasswordInput'
import Button from '../../Button/Button';

import './Login.scss'

export default function Login() {

  const [emailOrUserName, setEmailOrUserName] = useState('')
  const [password, setPassword] = useState({
    value: '',
    showPassword: false,
  })
  const [login, { data, isLoading, error, isError }] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const makeLogin = async () => {
    await login({ emailOrUserName, password: password })
  }

  useEffect(() => {
    if (!data) return;

    dispatch(authActions.login(data))
    navigate("/");
  }, [dispatch, data])

  useEffect(() => {
    if (error || isError) {
      console.log({ ...error });
    }
  }, [error, isError])

  return (
    <div className="auth__inner">
      <div className="auth__header">
        <h2 className="auth__header-title">
          Welcome back!
        </h2>
        <span className="auth__header-subtitle">
          Let's build something great
        </span>
      </div>
      <form className="auth__form">
        <label className="auth__label">
          <span className="auth__label-text">E-mail or user name</span>
          <Input
            type="email"
            label="Email"
            value={emailOrUserName}
            setValue={setEmailOrUserName}
          />

        </label>
        <label className="auth__label">
          <span className="auth__label-text">Password</span>
          <PasswordInput password={password} setPassword={setPassword} />
        </label>
        <Button
          disabled={isLoading}
          onClick={() => makeLogin()}
        >
          Login
        </Button>
        <div className="auth__link-container">
          <Link
            className='auth__link'
            to="/auth/recover"
          >Forgot Password?</Link>
        </div>
        <div className="auth__link-container auth__link-container--center">
          Don't have an account?
          <Link
            className='auth__link'
            to="/auth/registration"
          >Sign Up</Link>
        </div>
      </form>
    </div>
  )
}
