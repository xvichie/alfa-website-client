import React, { useEffect, useState } from 'react'
import './ProjectsScreen.scss';
import ServiceCardComponent from '../../components/ServiceCardComponent/ServiceCardComponent';
import ProjectFacade from './ProjectFacade/ProjectFacade';
import { ENDPOINTS, createAPIEndpoint } from '../../api/api';

function ProjectsScreen() {
    const [projects,setProjects] = useState([]);

    const TempImage = 'https://sweeftdigital-com-data.s3.eu-central-1.amazonaws.com/projects/5546a652-702b-43ac-8d53-1d6c1da49ab9.PNG';

    useEffect(() => {
        // setProjects([
        //     {
        //         title:"Matka.ge",
        //         shortDescription:"magari tvini mogvetyna",
        //         mainDescription:"cvetshi tvini mogvetyna",
        //         description:"kide tvini moityna",
        //         sector:"education",
        //         year: 2023,
        //         challenge:"stayin alive",
        //         whatWeDid: "deda movityanit",
        //         images: [TempImage],
        //         tags: ['React','Node','auth0']
        //     },
        //     {
        //         title:"Matka.ge",
        //         shortDescription:"magari tvini mogvetyna",
        //         mainDescription:"cvetshi tvini mogvetyna",
        //         description:"kide tvini moityna",
        //         sector:"education",
        //         year: 2023,
        //         challenge:"stayin alive",
        //         whatWeDid: "deda movityanit",
        //         images: [TempImage],
        //         tags: ['React','Node','auth0']
        //     }]
        // )

        const fetchProjects = async () => {
            try{
                const response = await createAPIEndpoint(ENDPOINTS.projects).get();
                setProjects(response.data);
            }catch{
                console.error("Error Fetching Projects");
            }
        };
        fetchProjects();
    },[]);

    console.log(projects);
  return (
    <div className='ProjectsScreen'>
        <div className="Projects-Main">
            <div className="Main-Wrapper">
                <div className="Main-Left">
                    <div className='Left-Labels'>
                        <h1>Just Have a<br></br>Look</h1>
                        <h4>Let Our Work Do The Talking</h4>
                    </div>
                </div>
                <div className="Main-Right">
                    <h2>
                    We’re passionate about finding exceptional solutions for out clients,
                    get to know us a little better by browsing through our recent work below.
                    </h2>
                </div>
            </div>
        </div>
        <div className="Projects-Projects">
            <div className="Projects-Wrapper">
                <div className="Projects-Label">
                    <h1>
                        Our Projects
                    </h1>
                    <h3>
                        Have A Look
                    </h3>
                </div>
                <div className="Projects-List">
                        {projects ? (
                            projects.map((project, index) => (
                                    <ProjectFacade
                                    project={project} 
                                    />
                            ))
                            ) : (
                            <p>Loading Projects...</p>
                        )
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectsScreen