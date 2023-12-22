import React, { useState } from 'react'
import './RegisterScreen.scss';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { ENDPOINTS, createAPIEndpoint } from '../../api/api';

import { useSelector, useDispatch } from 'react-redux';
import { setToken } from '../../redux/slices/authSlice';

import { useNavigate } from 'react-router-dom';


function RegisterScreen() {

    const [email, setEmail] = useState("");
    const [name,setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
  
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
      e.preventDefault();
      

      if(password == confirmPassword){
        createAPIEndpoint(ENDPOINTS.register).post()
        const data = {
            email: email,
            password: password
        };

        try {
            const response = await createAPIEndpoint(ENDPOINTS.register).post(data);

            if (response.status === 200) {
                console.log("Successful Registration");

                navigate('/');
                navigate(0);

            } else {
                console.error('Login failed:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
      }

    };

  return (
    <div className='RegisterScreen'>
        <div className="RegisterScreen-Wrapper">
            <div className="Register-Left">
                <img src={process.env.PUBLIC_URL+'/images/Logo-White-Text.png'} alt="" className="Left-Logo" />
            </div>
            <div className="Register-Right">
                <div className="Right-Wrapper">
                    <h2>Sign Up</h2>
                    <h3>Already Have An Acount? <a href="/login">Sign In Now</a></h3>
                    <form onSubmit={handleSubmit}>
                            <TextField
                                className='TextField'
                                fullWidth
                                label="Full Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                margin="normal"
                                required
                                // type="email"
                            />
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
                            // multiline
                            rows={4}
                            />
                             <TextField
                            className='TextField'
                            fullWidth
                            label="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            margin="normal"
                            required
                            // multiline
                            rows={4}
                            />
                            <Button variant="contained" type="submit" sx={{ mt: 2 }}>
                            Register
                            </Button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RegisterScreen