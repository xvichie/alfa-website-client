import React from 'react'
import "./ServicePreview.scss";
import { Button, ButtonGroup } from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { ENDPOINTS, createAPIEndpoint } from '../../../../api/api';
import { useNavigate } from 'react-router-dom';

function ServicePreview({Service}) {

    const navigate = useNavigate();

    const DeleteService = async () => {
        try{
            const response = await createAPIEndpoint(ENDPOINTS.services).delete(Service.serviceId);
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
    <div className='ServicePreview'>
        <div className="ServicePreview-Wrapper">
            <div className="ServicePreview-Top">
                <img src={Service.icon} height={48} alt="" />
            </div>
            <div className="ServicePreview-Title">
                <h3>{Service.title}</h3>
            </div>
            <div className="ServicePreview-Description">
                <p>{Service.description}</p>
            </div>
            <div className="ServicePreview-Actions">
                <ButtonGroup>
                    <Button variant='outlined' startIcon={<EditIcon></EditIcon>} onClick={() => navigate('editService/'+Service.serviceId)}>
                        Edit
                    </Button>
                    <Button variant='outlined' endIcon={<DeleteIcon></DeleteIcon>} onClick={DeleteService}>
                        Delete
                    </Button>
                </ButtonGroup>
            </div>
        </div>
    </div>
  )
}

export default ServicePreview