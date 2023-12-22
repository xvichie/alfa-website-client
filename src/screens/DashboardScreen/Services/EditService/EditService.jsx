import React, { useEffect, useState } from 'react'
import './EditService.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { ENDPOINTS, createAPIEndpoint } from '../../../../api/api';
import { Button, TextField } from '@mui/material';
import UploadWidget from '../../../../components/UploadWidget/UploadWidget';

function EditService() {

    const params = useParams();
    const [CurrentService,SetCurrentService] = useState();
    const [Title,SetTitle] = useState("");
    const [Description,SetDescription] = useState("");
    const [Tags,SetTags] = useState("");
    const [Image,SetImage] = useState("https://res.cloudinary.com/dzcb8ldz7/image/upload/v1703167775/cyzxaruwch0h0eq9gtbq.png");

    const ServiceId = params.ServiceId;

    const navigate = useNavigate();

    useEffect(() => {
        const fetchService = async () => {
            try{
                const response = await createAPIEndpoint(ENDPOINTS.services).getById(ServiceId);


                if(response.status === 200){
                    SetCurrentService(response.data);
                    SetTitle(response.data.title);
                    SetDescription(response.data.description);
                    SetTags(response.data.tags);
                    SetImage(response.data.icon);
                }else {
                    console.log("Something Went Wrong!");
                }
            }
            catch {
                console.error("Error");
            }
        };

        fetchService();
    },[]);
    console.log(CurrentService);

    const handleSubmit = async (event) => {
        event.preventDefault()
        
        const data = {
            serviceId: ServiceId,
            title: Title,
            description: Description,
            tags: Tags,
            icon: Image
        }
        console.log(data);

        try{
            const response = await createAPIEndpoint(ENDPOINTS.services).put(ServiceId,data);

            console.log(response);
            if(response.status === 204){
                navigate('/dashboard');
            }
        }catch{
            console.error("Couldn't Edit Service");
        }
        
    }

  return (
    <div className='EditService'>
        <div className="EditService-Main">
                <div className="Main-Wrapper">
                    <div className="Main-Left">
                        <div className='Left-Labels'>
                            <h1>Edit Your<br></br>Service</h1>
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
        <div className="EditService-Wrapper">
            <div className="EditService-Label">
                <h1>Edit The Service</h1>
            </div>
            <div className="EditService-Fields">
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

export default EditService