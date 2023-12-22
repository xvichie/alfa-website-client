import React, { useState } from 'react'
import './AddInsight.scss';
import { Button, TextField } from '@mui/material';
import UploadWidget from '../../../../components/UploadWidget/UploadWidget';
import { ENDPOINTS, createAPIEndpoint } from '../../../../api/api';
import { useNavigate } from 'react-router-dom';
import { Description } from '@mui/icons-material';

function AddInsight() {

    const [Description,SetDescription] = useState("");
    const [Author,SetAuthor] = useState("");
    const [Body,SetBody] = useState("");
    const [Title,SetTitle] = useState("");
    const [Image,SetImage] = useState("");
    const [DatePublished,SetDatePublished] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault()
        
        const data = {
            author: Author,
            body: Body,
            datePublished: DatePublished.toString(),
            description: Description,
            title: Title,
            image: Image
        };

        console.log(data);
        try{
            const response = await createAPIEndpoint(ENDPOINTS.insights).post(data);

            if(response.status === 201){
                navigate('/dashboard');
            }
        }catch{
            console.error("Couldn't Add Insight");
        }
        
    }

    console.log(Image);

  return (
    <div className='AddInsight'>
        <div className="AddInsight-Main">
                <div className="Main-Wrapper">
                    <div className="Main-Left">
                        <div className='Left-Labels'>
                            <h1>Add New<br></br>Insight</h1>
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
        <div className="AddInsight-Wrapper">
            <div className="AddInsight-Label">
                <h1>Add A New Insight</h1>
            </div>
            <div className="AddInsight-Fields">
            <form autoComplete="off" onSubmit={handleSubmit}>
                <TextField 
                    label="Title"
                    onChange={e => SetTitle(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
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
                    value={Description}
                    fullWidth
                    sx={{mb: 3}}
                 />
                 <TextField 
                    label="Author"
                    onChange={e => SetAuthor(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    value={Author}
                    fullWidth
                    sx={{mb: 3}}
                 />
                 <TextField 
                    // label="Date Published"
                    onChange={e => SetDatePublished(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    value={DatePublished}
                    type='date'
                    fullWidth
                    sx={{mb: 3}}
                 />
                 <TextField 
                    label="Body (In HTML)"
                    onChange={e => SetBody(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    value={Body}
                    fullWidth
                    sx={{mb: 3}}
                    multiline
                 />
                 <UploadWidget SetImage={SetImage} />
                 <Button variant="outlined" color="secondary" type="submit">Submit</Button>
        </form>
            </div>
        </div>
    </div>
  )
}

export default AddInsight