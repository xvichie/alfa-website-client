import React, { useEffect, useState } from 'react'
import './LoginScreen.scss';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';

import { ENDPOINTS, createAPIEndpoint } from '../../api/api';

import { useSelector, useDispatch } from 'react-redux';
import { setToken } from '../../redux/slices/authSlice';

import { useNavigate } from 'react-router-dom';

function LoginScreen() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  
    const navigate = useNavigate();
    const dispatch = useDispatch();


    useEffect(() => {
        console.log(isLoggedIn);
        if(isLoggedIn){
            navigate('/');
        }
    },[isLoggedIn])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            email: email,
            password: password
        };

        try {
            const response = await createAPIEndpoint(ENDPOINTS.login).post(data);

            if (response.status === 200) {
                console.log(response.data);
                dispatch(setToken(response.data));
                navigate('/');
                navigate(0);

            } else {
                console.error('Login failed:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

  return (
    <div className='LoginScreen'>
        <div className="LoginScreen-Wrapper">
            <div className="Login-Left">
                <img src={process.env.PUBLIC_URL+'/images/Logo-White-Text.png'} alt="" className="Left-Logo" />
            </div>
            <div className="Login-Right">
                <div className="Right-Wrapper">
                    <h2>Sign In</h2>
                    <h3>Don't Have An Acount? <a href="/register">Sign Up Now</a></h3>
                    <form onSubmit={handleSubmit}>
                            <TextField
                                className='TextField'
                                fullWidth
                                label="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                margin="normal"
                                required
                                type="email"
                            />
                            <TextField
                            className='TextField'
                            fullWidth
                            label="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            margin="normal"
                            required
                            rows={4}
                            type='password'
                            />
                            <Button variant="contained" type="submit" sx={{ mt: 2 }}>
                            Log In
                            </Button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginScreen