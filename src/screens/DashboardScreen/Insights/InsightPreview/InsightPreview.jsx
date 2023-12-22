import React from 'react'
import "./InsightPreview.scss";
import { Button, ButtonGroup } from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { ENDPOINTS, createAPIEndpoint } from '../../../../api/api';
import { useNavigate } from 'react-router-dom';

function InsightPreview({Insight}) {

    const navigate = useNavigate();

    const DeleteInsight = async () => {
        try{
            const response = await createAPIEndpoint(ENDPOINTS.insights).delete(Insight.insightId);
            if(response.status === 204){
                console.log("Deleted Successfully!");
                navigate(0);
            }else{
                console.error(response);
            }
        }
        catch{
            console.error("Something Went Wrong");
        }
    }

  return (
    <div className='InsightPreview'>
        <div className="InsightPreview-Wrapper">
            <div className="InsightPreview-Top">
                <img src={Insight.image} height={48} alt="" />
            </div>
            <div className="InsightPreview-Title">
                <h3>{Insight.title}</h3>
            </div>
            <div className="InsightPreview-Description">
                <p>{Insight.description}</p>
            </div>
            <div className="InsightPreview-Actions">
                <ButtonGroup>
                    <Button variant='outlined' startIcon={<EditIcon></EditIcon>} onClick={() => navigate('editInsight/'+Insight.insightId)}>
                        Edit
                    </Button>
                    <Button variant='outlined' endIcon={<DeleteIcon></DeleteIcon>} onClick={DeleteInsight}>
                        Delete
                    </Button>
                </ButtonGroup>
            </div>
        </div>
    </div>
  )
}

export default InsightPreview