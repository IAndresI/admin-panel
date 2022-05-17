import React, { useState, useEffect } from 'react'
import { useLoginMutation } from '../../services/authService'
import { useAppDispatch, useAppSilector } from '../../store/hooks/redux'
import { authActions } from '../../store/reducers/authSlice'
import './Login.scss'

export default function Login() {

  const [emailOrUserName, setEmailOrUserName] = useState('')
  const [password, setPassword] = useState('second')
  const [login, { data, isLoading, error, isError }] = useLoginMutation();
  const dispatch = useAppDispatch();

  //const { } = useAppSilector(state => state.userReducer.)
  //const { data } = useFetchAllUsersQuery(5);

  const handleChange = (e) => {

    switch (e.target.name) {
      case 'login':
        setEmailOrUserName(e.target.value)
        break;
      case 'password':
        setPassword(e.target.value)
        break;
    }
  }
  const makeLogin = async () => {
    const result = await login({ emailOrUserName, password });
  }

  useEffect(() => {
    if (!data) return;

    dispatch(authActions.login(data))
  }, [useAppDispatch, data])


  useEffect(() => {
    if (error) {
      console.log({ ...error });

    }
  }, [error])



  return (
    <div>
      <form>
        <label>
          userName or Email
          <input
            value={emailOrUserName}
            onChange={(e) => handleChange(e)}
            name="login"
          />
        </label>
        <label>
          password
          <input
            value={password}
            onChange={(e) => handleChange(e)}
            name="password"
          />
        </label>
        <button
          onClick={() => makeLogin()}
          type="button"
        >
          Login
        </button>
      </form>
    </div>
  )
}
