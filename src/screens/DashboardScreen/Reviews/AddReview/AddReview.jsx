import React, { useState } from 'react'
import './AddReview.scss';
import { Button, TextField } from '@mui/material';
import UploadWidget from '../../../../components/UploadWidget/UploadWidget';
import { ENDPOINTS, createAPIEndpoint } from '../../../../api/api';
import { useNavigate } from 'react-router-dom';

function AddReview() {

    const [Body,SetBody] = useState("");
    const [PersonName,SetPersonName] = useState("");
    const [Workplace,SetWorkplace] = useState("");
    const [Position,SetPosition] = useState("");
    const [Location,SetLocation] = useState("");
    const [CompanyLogo,SetCompanyLogo] = useState("");
    const [PersonImage,SetPersonImage] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault()
        
        const data = {
            body: Body,
            personName: PersonName,
            workplace: Workplace,
            position: Position,
            location: Location,
            companyLogo: CompanyLogo,
            personImage: PersonImage
        }

        try{
            const response = await createAPIEndpoint(ENDPOINTS.reviews).post(data);

            if(response.status === 201){
                navigate('/dashboard');
            }
        }catch{
            console.error("Couldn't Add Review");
        }
        
    }

    console.log(CompanyLogo);
    console.log(PersonImage);

  return (
    <div className='AddReview'>
        <div className="AddReview-Main">
                <div className="Main-Wrapper">
                    <div className="Main-Left">
                        <div className='Left-Labels'>
                            <h1>Add New<br></br>Review</h1>
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
        <div className="AddReview-Wrapper">
            <div className="AddReview-Label">
                <h1>Add A New Review</h1>
            </div>
            <div className="AddReview-Fields">
            <form autoComplete="off" onSubmit={handleSubmit}>
                <TextField 
                    label="Person Name"
                    onChange={e => SetPersonName(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    // type="email"
                    sx={{mb: 3}}
                    fullWidth
                    value={PersonName}
                 />
                 <TextField 
                    label="Workplace"
                    onChange={e => SetWorkplace(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    // type="password"
                    value={Workplace}
                    fullWidth
                    sx={{mb: 3}}
                 />
                 <TextField 
                    label="Positon"
                    onChange={e => SetPosition(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    // type="password"
                    value={Position}
                    fullWidth
                    sx={{mb: 3}}
                 />
                 <TextField 
                    label="Body"
                    onChange={e => SetBody(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    value={Body}
                    fullWidth
                    sx={{mb: 3}}
                    multiline
                 />
                 <TextField 
                    label="Location"
                    onChange={e => SetLocation(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    value={Location}
                    fullWidth
                    sx={{mb: 3}}
                 />
                 <UploadWidget SetImage={SetCompanyLogo} />
                 <UploadWidget SetImage={SetPersonImage} />
                 <Button variant="outlined" color="secondary" type="submit">Submit</Button>
        </form>
            </div>
        </div>
    </div>
  )
}

export default AddReview