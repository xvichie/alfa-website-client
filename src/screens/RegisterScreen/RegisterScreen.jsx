import React, { useState } from 'react'
import './RegisterScreen.scss';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';


function RegisterScreen() {

    const [email, setEmail] = useState("");
    const [name,setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      //
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
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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