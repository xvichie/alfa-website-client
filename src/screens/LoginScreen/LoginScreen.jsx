import React, { useState } from 'react'
import './LoginScreen.scss';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';


function LoginScreen() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      //
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
                            multiline
                            rows={4}
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