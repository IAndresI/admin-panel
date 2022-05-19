import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useRegistrationMutation } from '../../../services/authService';
import Button from '../../Button/Button';
import PasswordInput from '../../Input/PasswordInput';
import TextInput from '../../Input/TextInput';
import IRegistrationData from '../../../models/IRegistrationData'
import { useAppDispatch } from '../../../store/hooks/redux';
import { authActions } from '../../../store/reducers/authSlice';

export default function Registration() {

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [userName, setUserName] = useState('')

  const [register, { data, isLoading, error }] = useRegistrationMutation();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      return;
    }
    const user: IRegistrationData = {
      email,
      firstName,
      lastName,
      phone,
      password,
      userName,
    }

    await register(user);
  }

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!data) return;

    dispatch(authActions.login(data))
    navigate("/")
  }, [dispatch, data, navigate])

  useEffect(() => {
    console.log(error);
  }, [error])



  return (
    <div className="auth__inner">
      <div className="auth__header">
        <h2 className="auth__header-title">
          Create an account
        </h2>
        <span className="auth__header-subtitle">
          You are welcome!
        </span>
      </div>
      <form className="auth__form">
        <label className="auth__label">
          <span className="auth__label-text">E-mail or user name</span>
          <div className="auth__form-double-input">
            <TextInput
              type="text"
              label="First name"
              value={firstName}
              setValue={setFirstName}
            />
            <TextInput
              type="text"
              label="Last name"
              value={lastName}
              setValue={setLastName}
            />
          </div>
        </label>
        <label className="auth__label">
          <span className="auth__label-text">E-mail</span>
          <TextInput
            type="email"
            label="Email"
            value={email}
            setValue={setEmail}
          />
        </label>
        <label className="auth__label">
          <span className="auth__label-text">User Name</span>
          <TextInput
            type="text"
            label="User Name"
            value={userName}
            setValue={setUserName}
          />
        </label>
        <label className="auth__label">
          <span className="auth__label-text">Phone</span>
          <TextInput
            type="text"
            label="Phone"
            value={phone}
            setValue={setPhone}
          />
        </label>
        <label className="auth__label">
          <span className="auth__label-text">Password</span>
          <PasswordInput password={password} setPassword={setPassword} />
        </label>
        <label className="auth__label">
          <span className="auth__label-text">Confirm Password</span>
          <PasswordInput password={confirmPassword} setPassword={setConfirmPassword} />
        </label>
        <Button
          onClick={() => handleSubmit()}
          disabled={isLoading}
        >
          Sign Up
        </Button>
        <div className="auth__link-container auth__link-container--center">
          Already have an account?
          <Link
            className='auth__link'
            to="/auth/login"
          >Sign In</Link>
        </div>
      </form>
    </div>
  )
}