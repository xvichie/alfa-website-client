import React, { useState } from 'react'
import './ContactUsComponent.scss';
import { Button, FormControl, FormHelperText, Input, InputLabel, TextField } from '@mui/material';

function ContactUsComponent() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //
  };

  return (
    <div className='ContactUsComponent' id='ContactUs'>
        <div className="ContactUs-Wrapper">
            <div className="ContactUs-Left">
                    <h2 className="mb-3">Leave Us A Message</h2>
                    <div className="Left-Top">
                      <form onSubmit={handleSubmit}>
                        <div className="Top-NameEmail">
                          <TextField
                          className='TextField'
                            fullWidth
                            label="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            margin="normal"
                            required
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
                        </div>
                        <TextField
                          className='TextField'
                          fullWidth
                          label="Message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          margin="normal"
                          required
                          multiline
                          rows={4}
                        />
                        <Button variant="contained" type="submit" sx={{ mt: 2 }}>
                          Submit
                        </Button>
                      </form>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default ContactUsComponent