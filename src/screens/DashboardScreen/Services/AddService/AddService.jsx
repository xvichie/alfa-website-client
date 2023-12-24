import React, { useState } from 'react'
import './AddService.scss';
import { Button, TextField } from '@mui/material';
import UploadWidget from '../../../../components/UploadWidget/UploadWidget';
import { ENDPOINTS, createAPIEndpoint } from '../../../../api/api';
import { useNavigate } from 'react-router-dom';

function AddService() {

    const [Title,SetTitle] = useState("");
    const [Description,SetDescription] = useState("");
    const [Tags,SetTags] = useState("");
    const [Image,SetImage] = useState("https://res.cloudinary.com/dzcb8ldz7/image/upload/v1703167775/cyzxaruwch0h0eq9gtbq.png");

    const navigate = useNavigate();

    
    const handleSubmit = async (event) => {
        event.preventDefault()
        
        const data = {
            title: Title,
            description: Description,
            tags: Tags,
            icon: Image
        }

        try{
            const response = await createAPIEndpoint(ENDPOINTS.services).post(data);

            if(response.status === 201){
                navigate('/dashboard');
            }
        }catch{
            console.error("Couldn't Add Service");
        }
        
    }

    console.log(Image);

  return (
    <div className='AddService'>
        <div className="AddService-Main">
                <div className="Main-Wrapper">
                    <div className="Main-Left">
                        <div className='Left-Labels'>
                            <h1>Add New<br></br>Service</h1>
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
        <div className="AddService-Wrapper">
            <div className="AddService-Label">
                <h1>Add A New Service</h1>
            </div>
            <div className="AddService-Fields">
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
                 <UploadWidget SetImage={SetImage} />
                 <Button variant="outlined" color="secondary" type="submit">Submit</Button>
        </form>
            </div>
        </div>
    </div>
  )
}

export default AddService