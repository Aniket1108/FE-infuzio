import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

import { useHttp } from "utils/api_intercepters";
import Snackbar from 'components/snackbar/Snackbar';

import userAuth from 'assets/images/user_auth.png'

const SignIn = () => {
    const useHttpMethod = useHttp();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    const [snackbarData, setSnackbarData] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create the JSON data object to send in the request body
        const requestData = {
            email,
            password,
            remember,
        };

        useHttpMethod.post("/auth/signin", requestData).then((res) => {
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

    const forgotPassword = () => {
        // Create the JSON data object to send in the request body
        if (!email) {
            setSnackbarData({ type: 'error', message: 'please enter your email address' })
            return
        }

        const requestData = {
            email
        };

        useHttpMethod.post("/auth/forgot-password", requestData).then((res) => {
            if (res.statusCode === 200) {
                setSnackbarData({ type: 'success', message: res.message });
            } else {
                setSnackbarData({ type: 'error', message: res.message });
            }
        })
    }

    return (
        <div className='signin__container'>
            <div className='heading'>
                <img className='user__auth__image' src={userAuth} />

                <p className='top__heading'>Welcome back</p>
                <p>Sign in to your account to continue</p>
            </div>

            <div className='signin__form'>

                <form onSubmit={handleSubmit} className='form__values'>

                    <input className='input__feilds' type='email' placeholder='Email address' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input className='input__feilds' type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />

                    <div className='checkbox'>
                        <input className='input__checkbox' type='checkbox' name='Remember' value={remember} onChange={(e) => setRemember(e.target.checked)} />
                        <label for="Remember"> Remember Me</label>
                    </div>

                    <button className='submit__button' type='submit'>Sign In</button>
                </form>

            </div>

            <div className='navigate__link'
                onClick={() => {
                    forgotPassword()
                }}
            >
                Fotgot Password?
            </div>

            <div>
                Create new account? <Link className='navigate__link custom__link' to='/auth/sign-up' >Sign Up</Link>
            </div>

            {snackbarData && <Snackbar message={snackbarData.message} handleClose={handleSnackbarClose} Type={snackbarData.type} />}        </div>
    );
};

export default SignIn;
