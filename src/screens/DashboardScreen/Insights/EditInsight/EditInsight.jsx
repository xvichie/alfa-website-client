import React, { useEffect, useState } from 'react'
import './EditInsight.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { ENDPOINTS, createAPIEndpoint } from '../../../../api/api';
import { Button, TextField } from '@mui/material';
import UploadWidget from '../../../../components/UploadWidget/UploadWidget';

function EditInsight() {

    const params = useParams();

    const [CurrentInsight,SetCurrentInsight] = useState();
    const [Description,SetDescription] = useState("");
    const [Author,SetAuthor] = useState("");
    const [Body,SetBody] = useState("");
    const [Title,SetTitle] = useState("");
    const [Image,SetImage] = useState("");
    const [DatePublished,SetDatePublished] = useState("");

    const InsightId = params.InsightId;

    const navigate = useNavigate();

    useEffect(() => {
        const fetchInsight = async () => {
            try{
                const response = await createAPIEndpoint(ENDPOINTS.insights).getById(InsightId);


                if(response.status === 200){
                    SetCurrentInsight(response.data);
                    SetTitle(response.data.title);
                    SetDescription(response.data.description);
                    SetImage(response.data.image);
                    SetAuthor(response.data.author);
                    SetBody(response.data.body);
                    SetDatePublished(response.data.datePublished);
                }else {
                    console.log("Something Went Wrong!");
                }
            }
            catch {
                console.error("Error");
            }
        };

        fetchInsight();
    },[]);
    console.log(CurrentInsight);

    const handleSubmit = async (event) => {
        event.preventDefault()
        
        const data = {
            insightId: InsightId,
            title: Title,
            description: Description,
            image: Image,
            author:Author,
            body:Body,
            datePublished: DatePublished
        }
        console.log(data);

        try{
            const response = await createAPIEndpoint(ENDPOINTS.insights).put(InsightId,data);

            console.log(response);
            if(response.status === 204){
                navigate('/dashboard');
            }
        }catch{
            console.error("Couldn't Edit Insight");
        }
        
    }

    console.log(InsightId);

  return (
    <div className='EditInsight'>
        <div className="EditInsight-Main">
                <div className="Main-Wrapper">
                    <div className="Main-Left">
                        <div className='Left-Labels'>
                            <h1>Edit Your<br></br>Insight</h1>
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
        <div className="EditInsight-Wrapper">
            <div className="EditInsight-Label">
                <h1>Edit The Insight</h1>
            </div>
            <div className="EditInsight-Fields">
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

export default EditInsight