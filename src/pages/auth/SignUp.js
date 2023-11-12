import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

import { useHttp } from "utils/api_intercepters";
import Snackbar from 'components/snackbar/Snackbar';

import userAuth from 'assets/images/user_auth.png'

const SignUp = () => {
  const useHttpMethod = useHttp();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [snackbarData, setSnackbarData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create the JSON data object to send in the request body
    const requestData = {
      firstName,
      lastName,
      email,
      password,
    };

    useHttpMethod.post("/user/auth/signup", requestData).then((res) => {
      if (res.statusCode === 200) {
        localStorage.setItem("token", res.payload.token);
        navigate("/dashboard");
      } else {
        setSnackbarData({ type: 'error', message: res.message });
      }
    })
  };

  const handleSnackbarClose = () => {
    setSnackbarData(null);
  };

  return (
    <div className='signin__container'>
      <div className='heading'>
        <img className='user__auth__image' src={userAuth} />

        <p className='top__heading'>Welcome</p>
        <p>Create your account to continue</p>
      </div>

      <div className='signin__form'>

        <form onSubmit={handleSubmit} className='form__values'>
          <div className='top__inputs'>
            <input className='input__feilds' type='text' placeholder='First name' value={firstName} onChange={(e) => setFirstName(e.target.firstName)} />
            <input className='input__feilds' type='text' placeholder='Last name' value={lastName} onChange={(e) => setLastName(e.target.lastName)} />
          </div>

          <input className='input__feilds' type='email' placeholder='Email address' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input className='input__feilds' type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />

          <button className='submit__button' type='submit'>Sign Up</button>
        </form>

      </div>

      <div>
        Already have account? <Link className='navigate__link custom__link' to='/auth/sign-in' >Sign In</Link>
      </div>

      {snackbarData && <Snackbar message={snackbarData.message} handleClose={handleSnackbarClose} Type={snackbarData.type} />}        </div>
  );
}

export default SignUp