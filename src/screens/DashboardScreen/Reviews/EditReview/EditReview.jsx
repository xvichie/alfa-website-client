import React, { useEffect, useState } from 'react'
import './EditReview.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { ENDPOINTS, createAPIEndpoint } from '../../../../api/api';
import { Button, TextField } from '@mui/material';
import UploadWidget from '../../../../components/UploadWidget/UploadWidget';

function EditReview() {

    const params = useParams();

    const [CurrentReview,SetCurrentReview] = useState();
    const [Body,SetBody] = useState("");
    const [PersonName,SetPersonName] = useState("");
    const [Workplace,SetWorkplace] = useState("");
    const [Position,SetPosition] = useState("");
    const [Location,SetLocation] = useState("");
    const [CompanyLogo,SetCompanyLogo] = useState("");
    const [PersonImage,SetPersonImage] = useState("");

    const ReviewId = params.ReviewId;

    const navigate = useNavigate();

    useEffect(() => {
        const fetchReview = async () => {
            try{
                const response = await createAPIEndpoint(ENDPOINTS.reviews).getById(ReviewId);


                if(response.status === 200){
                    SetBody(response.data.body);
                    SetPersonName(response.data.personName);
                    SetWorkplace(response.data.workplace);
                    SetPosition(response.data.position);
                    SetLocation(response.data.location);
                    SetCompanyLogo(response.data.companyLogo);
                    SetPersonImage(response.data.personImage);
                }else {
                    console.log("Something Went Wrong!");
                }
            }
            catch {
                console.error("Error");
            }
        };

        fetchReview();
    },[]);
    console.log(CurrentReview);

    const handleSubmit = async (event) => {
        event.preventDefault()
        
        const data = {
            reviewId: ReviewId,
            body: Body,
            personName: PersonName,
            workplace: Workplace,
            position: Position,
            location: Location,
            companyLogo: CompanyLogo,
            personImage: PersonImage
        }
        console.log(data);

        try{
            const response = await createAPIEndpoint(ENDPOINTS.reviews).put(ReviewId,data);

            console.log(response);
            if(response.status === 204){
                navigate('/dashboard');
            }
        }catch{
            console.error("Couldn't Edit Review");
        }
        
    }

    console.log(ReviewId);

  return (
    <div className='EditReview'>
        <div className="EditReview-Main">
                <div className="Main-Wrapper">
                    <div className="Main-Left">
                        <div className='Left-Labels'>
                            <h1>Edit Your<br></br>Review</h1>
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
        <div className="EditReview-Wrapper">
            <div className="EditReview-Label">
                <h1>Edit The Review</h1>
            </div>
            <div className="EditReview-Fields">
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

export default EditReview