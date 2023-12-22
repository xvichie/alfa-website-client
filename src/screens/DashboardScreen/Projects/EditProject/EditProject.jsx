import React, { useEffect, useState } from 'react'
import './EditProject.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { ENDPOINTS, createAPIEndpoint } from '../../../../api/api';
import { Button, TextField } from '@mui/material';
import UploadWidget from '../../../../components/UploadWidget/UploadWidget';

function EditProject() {

    const params = useParams();

    const [CurrentProject,SetCurrentProject] = useState();
    const [Challenge,SetChallenge] = useState("");
    const [Description,SetDescription] = useState("");
    const [Tags,SetTags] = useState("");
    const [Image,SetImage] = useState("https://res.cloudinary.com/dzcb8ldz7/image/upload/v1703167775/cyzxaruwch0h0eq9gtbq.png");
    const [MainDescription,SetMainDescription] = useState("");
    const [Sector,SetSector] = useState("");
    const [ShortDescription,SetShortDescription] = useState("");
    const [Title,SetTitle] = useState("");
    const [WhatWeDid,SetWhatWeDid] = useState("");
    const [Year,SetYear] = useState(2023);

    const ProjectId = params.ProjectId;

    const navigate = useNavigate();

    useEffect(() => {
        const fetchProject = async () => {
            try{
                const response = await createAPIEndpoint(ENDPOINTS.projects).getById(ProjectId);


                if(response.status === 200){
                    SetCurrentProject(response.data);
                    SetChallenge(response.data.challenge);
                    SetMainDescription(response.data.mainDescription);
                    SetSector(response.data.sector);
                    SetShortDescription(response.data.shortDescription);
                    SetWhatWeDid(response.data.whatWeDid);
                    SetTitle(response.data.title);
                    SetDescription(response.data.description);
                    SetTags(response.data.tags);
                    SetYear(response.data.year);
                    SetImage(response.data.image);
                }else {
                    console.log("Something Went Wrong!");
                }
            }
            catch {
                console.error("Error");
            }
        };

        fetchProject();
    },[]);
    console.log(CurrentProject);

    const handleSubmit = async (event) => {
        event.preventDefault()
        
        const data = {
            projectId: ProjectId,
            title: Title,
            description: Description,
            tags: Tags,
            image: Image,
            challenge: Challenge,
            mainDescription: MainDescription,
            shortDescription: ShortDescription,
            sector: Sector,
            whatWeDid: WhatWeDid,
            year:Year
        }
        console.log(data);

        try{
            const response = await createAPIEndpoint(ENDPOINTS.projects).put(ProjectId,data);

            console.log(response);
            if(response.status === 204){
                navigate('/dashboard');
            }
        }catch{
            console.error("Couldn't Edit Project");
        }
        
    }

    console.log(ProjectId);

  return (
    <div className='EditProject'>
        <div className="EditProject-Main">
                <div className="Main-Wrapper">
                    <div className="Main-Left">
                        <div className='Left-Labels'>
                            <h1>Edit Your<br></br>Project</h1>
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
        <div className="EditProject-Wrapper">
            <div className="EditProject-Label">
                <h1>Edit The Project</h1>
            </div>
            <div className="EditProject-Fields">
            <form autoComplete="off" onSubmit={handleSubmit}>
            <TextField 
                    label="Title"
                    onChange={e => SetTitle(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    // type="email"
                    sx={{mb: 3}}
                    fullWidth
                    value={Title}
                 />
                 <TextField 
                    label="Description"
                    onChange={e => SetDescription(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    // type="password"
                    value={Description}
                    fullWidth
                    sx={{mb: 3}}
                 />
                 <TextField 
                    label="Tags"
                    onChange={e => SetTags(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    // type="password"
                    value={Tags}
                    fullWidth
                    sx={{mb: 3}}
                 />
                 <TextField 
                    label="Challenge"
                    onChange={e => SetChallenge(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    value={Challenge}
                    fullWidth
                    sx={{mb: 3}}
                 />
                 <TextField 
                    label="Main Description"
                    onChange={e => SetMainDescription(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    value={MainDescription}
                    fullWidth
                    sx={{mb: 3}}
                 />
                 <TextField 
                    label="Short Description"
                    onChange={e => SetShortDescription(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    value={ShortDescription}
                    fullWidth
                    sx={{mb: 3}}
                 />
                 <TextField 
                    label="Sector"
                    onChange={e => SetSector(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    value={Sector}
                    fullWidth
                    sx={{mb: 3}}
                 />
                 <TextField 
                    label="What We Did"
                    onChange={e => SetWhatWeDid(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    value={WhatWeDid}
                    fullWidth
                    sx={{mb: 3}}
                 />
                 <TextField 
                    label="Year"
                    onChange={e => SetYear(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    value={Year}
                    fullWidth
                    sx={{mb: 3}}
                 />
                 <UploadWidget SetImage={SetImage} />
                 <Button variant="outlined" color="secondary" type="submit">Submit</Button>
            </form>
            </div>
        </div>
    </div>
  )
}

export default EditProject