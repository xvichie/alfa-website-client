import React from 'react'
import "./HomeScreen.scss";
import { Button } from '@mui/material';

import BoltIcon from '@mui/icons-material/Bolt';
import GitHubIcon from '@mui/icons-material/GitHub';
import PublicIcon from '@mui/icons-material/Public';
import ConstructionIcon from '@mui/icons-material/Construction';

import CardComponent from '../../components/CardComponent/CardComponent';
import ReviewsComponent from '../../components/ReviewsComponent/ReviewsComponent';
import InsightsComponent from '../../components/InsightsComponent/InsightsComponent';
import Footer from '../../components/Footer/Footer';


function HomeScreen() {
  return (
    <div className="Home">
      <div className="Home-Image">
        <video 
        autoPlay muted loop
        type="video/mp4"
        src={process.env.PUBLIC_URL+'/videos/HomeVideo.mp4'}></video>
        <div className="Home-Labels">
          <div className="HomeLabels-Main">
            <h1>
              EDUCATION MADE<br></br><span className='animate-charcter'>SIMPLER</span>
            </h1>
          </div>
          <div className="HomeLabels-Description">
            <h2>
              REEDUCATE THE WORLD WITH US
            </h2>
          </div>
          <div className="HomeLabels-ContactUs">
            <Button variant='outlined' className='fill-button-main' 
            onClick={() => {
              const element = document.getElementById(`ContactUs`);
              if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
              }}}>
                Contact Us
            </Button>
          </div>
        </div>
        {/* <div className="Home-Button">
          <a href="">
            <img src={process.env.PUBLIC_URL+'/gifs/scrolldown.gif'} alt="" />
          </a>
        </div> */}
      </div>
      <div className="Home-Services">
        <div className="Services-Wrapper">
          <div className='Wrapper-Top'>
            <h3>Core Services</h3>
            <h4>Let Us Worry About Your Problems</h4>
          </div>
          <div className='Wrapper-Bottom'>
            <CardComponent 
              icon={<GitHubIcon />} 
              title={"Custom Software Development"}
              description={"Building complex enterprise level solution architecture and user orientated products."}
              >
            </CardComponent>
            <CardComponent 
              icon={<ConstructionIcon />} 
              title={"Custom Solution Implementation"}
              description={"Just give us a problem and we will find a solution based on our expertise and experineces"}
              >
            </CardComponent>
            <CardComponent 
              icon={<PublicIcon />} 
              title={"Digital Marketing"}
              description={"We know how to spread the word around. We Ensure, that what will be created, will be used by people"}
              >
            </CardComponent>
          </div>
        </div>
      </div>
      <div className="Home-Reviews">
        <ReviewsComponent></ReviewsComponent>
      </div>
      <div className="Home-Insights">
        <InsightsComponent></InsightsComponent>
      </div>
    </div>
  )
}

export default HomeScreen