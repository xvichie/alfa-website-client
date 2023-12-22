import React, { useState } from 'react'
import './AddProject.scss';
import { Button, TextField } from '@mui/material';
import UploadWidget from '../../../../components/UploadWidget/UploadWidget';
import { ENDPOINTS, createAPIEndpoint } from '../../../../api/api';
import { useNavigate } from 'react-router-dom';

function AddProject() {

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



    

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault()
        
        const data = {
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

        try{
            const response = await createAPIEndpoint(ENDPOINTS.projects).post(data);

            if(response.status === 201){
                navigate('/dashboard');
            }
        }catch{
            console.error("Couldn't Add Project");
        }
        
    }

    console.log(Image);

  return (
    <div className='AddProject'>
        <div className="AddProject-Main">
                <div className="Main-Wrapper">
                    <div className="Main-Left">
                        <div className='Left-Labels'>
                            <h1>Add New<br></br>Project</h1>
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
        <div className="AddProject-Wrapper">
            <div className="AddProject-Label">
                <h1>Add A New Project</h1>
            </div>
            <div className="AddProject-Fields">
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

export default AddProject