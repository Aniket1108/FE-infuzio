import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { useHttp } from "utils/api_intercepters";

const SignIn = () => {
    const useHttpMethod = useHttp();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

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
            }
        })
    };

    return (
        <div className='signin__container'>
            <div className='heading'>
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

            <div>
                Forgot password?
            </div>
        </div>
    );
};

export default SignIn;
