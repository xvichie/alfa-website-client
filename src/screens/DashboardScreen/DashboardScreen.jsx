import React, { useEffect, useState } from 'react'
import "./DashboardScreen.scss";
import { Button } from '@mui/material';
import { ENDPOINTS, createAPIEndpoint } from '../../api/api';
import ServicePreview from './Services/ServicePreview/ServicePreview';
import { useNavigate } from 'react-router-dom';
import ProjectPreview from './Projects/ProjectPreview/ProjectPreview';
import InsightPreview from './Insights/InsightPreview/InsightPreview';
import ReviewPreview from './Reviews/ReviewPreview/ReviewPreview';
import { useSelector } from 'react-redux';

function DashboardScreen() {
    const [Insights,SetInsights] = useState(null);
    const [Projects,SetProjects] = useState(null);
    const [Services,SetServices] = useState(null);
    const [Reviews,SetReviews] = useState(null);

    const navigate = useNavigate();

    const isAuthenticated = useSelector(state => state.auth.isLoggedIn);
    const isAdmin = useSelector(state => state.auth.isAdmin);


    useEffect(() => {

        if(!isAuthenticated){
            navigate('/login');
        }

        if(!isAdmin){
            navigate('/');
        }

        const FetchData = async () => {
            try {
                const response = await createAPIEndpoint(ENDPOINTS.projects).get();
                if (response.status === 200) {
                    SetProjects(response.data);
                } else {
                    console.error('Login failed:', response.statusText);
                }

                const response2 = await createAPIEndpoint(ENDPOINTS.services).get();
                if (response2.status === 200) {
                    SetServices(response2.data);
                } else {
                    console.error('Login failed:', response2.statusText);
                }

                const response3 = await createAPIEndpoint(ENDPOINTS.insights).get();
                if (response3.status === 200) {
                    SetInsights(response3.data);
                } else {
                    console.error('Login failed:', response3.statusText);
                }

                const response4 = await createAPIEndpoint(ENDPOINTS.reviews).get();
                if (response4.status === 200) {
                    SetReviews(response4.data);
                } else {
                    console.error('Login failed:', response4.statusText);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }

        FetchData().catch(console.error);
    },[]);
    // console.log(Reviews);
  return (
    <div className='DashboardScreen'>
            <div className="Dashboard-Main">
                <div className="Main-Wrapper">
                    <div className="Main-Left">
                        <div className='Left-Labels'>
                            <h1>Welcome to<br></br>Dashboard</h1>
                            <h4>Change Anything</h4>
                        </div>
                    </div>
                    <div className="Main-Right">
                        <h2>
                            Here You Can Control And Change Content On Website
                        </h2>
                    </div>
                </div>
            </div>
        <div className="Dashboard-Wrapper">
            <div className="Dashboard-Label">
                <h1>Dashboard</h1>
            </div>
            <div className="Dashboard-Services">
                <div className="Services-Label">
                    <h2>Current Services:</h2>
                    <Button variant='contained' onClick={() => navigate('AddServices')}>Add Services</Button>
                </div>
                <div className="Services-Previews">
                    {Services ? 
                        (
                            Services.map((Service, index) => (
                                <ServicePreview Service={Service} key={index}/>
                            ))
                        ) :
                        "Loading"
                    }
                </div>
            </div>
            <div className="Dashboard-Projects">
                <div className="Projects-Label">
                    <h2>Current Projects:</h2>
                    <Button variant='contained' onClick={() => navigate('AddProjects')}>Add Projects</Button>
                </div>
                <div className="Projects-Previews">
                    {Projects ? 
                            (
                                Projects.map((Project, index) => (
                                    <ProjectPreview Project={Project} key={index}/>
                                ))
                            ) :
                            "Loading"
                    }
                </div>
            </div>
            <div className="Dashboard-Insights">
                <div className="Insights-Label">
                    <h2>Current Insights:</h2>
                    <Button variant='contained' onClick={() => navigate("AddInsights")}>Add Insights</Button>
                </div>
                <div className="Insights-Previews">
                    {Insights ? 
                            (
                                Insights.map((Insight, index) => (
                                    <InsightPreview Insight={Insight} key={index}/>
                                ))
                            ) :
                            "Loading"
                    }
                </div>
            </div>
            <div className="Dashboard-Reviews">
                <div className="Reviews-Label">
                    <h2>Current Insights:</h2>
                    <Button variant='contained' onClick={() => navigate("AddReviews")}>Add Reviews</Button>
                </div>
                <div className="Reviews-Previews">
                    {Reviews ? 
                            (
                                Reviews.map((Review, index) => (
                                    <ReviewPreview Review={Review} key={index}/>
                                ))
                            ) :
                            "Loading"
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashboardScreen