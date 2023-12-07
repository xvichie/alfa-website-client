import React from 'react'
import './Footer.scss';
import { Button } from '@mui/material';

import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function Footer() {
  return (
    <div className='Footer'>
        <div className="Footer-Wrapper">
            <div className="Footer-Top">
                <div className="Top-Policies">
                    <a href="/privacy">
                        Privacy Policy
                    </a>
                    Copyright© 2023 Alfa Solutions.
                </div>
                <div className="Top-Logo">
                    <Button><img src={process.env.PUBLIC_URL+'/images/Logo-White-Text.png'} alt="" /></Button>
                </div>
                <div className="Top-Socials">
                    <ul>
                        <li>
                            <a href="#">
                                <FacebookIcon className='Socials-Icon'></FacebookIcon>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <GitHubIcon className='Socials-Icon'></GitHubIcon>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <InstagramIcon className='Socials-Icon'></InstagramIcon>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <LinkedInIcon className='Socials-Icon'></LinkedInIcon>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer