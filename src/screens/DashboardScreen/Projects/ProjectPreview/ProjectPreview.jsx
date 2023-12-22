import React from 'react'
import "./ProjectPreview.scss";
import { Button, ButtonGroup } from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { ENDPOINTS, createAPIEndpoint } from '../../../../api/api';
import { useNavigate } from 'react-router-dom';

function ProjectPreview({Project}) {

    const navigate = useNavigate();

    const DeleteProject = async () => {
        try{
            const response = await createAPIEndpoint(ENDPOINTS.projects).delete(Project.projectId);
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
    <div className='ProjectPreview'>
        <div className="ProjectPreview-Wrapper">
            <div className="ProjectPreview-Top">
                <img src={Project.image} height={48} alt="" />
            </div>
            <div className="ProjectPreview-Title">
                <h3>{Project.title}</h3>
            </div>
            <div className="ProjectPreview-Description">
                <p>{Project.description}</p>
            </div>
            <div className="ProjectPreview-Actions">
                <ButtonGroup>
                    <Button variant='outlined' startIcon={<EditIcon></EditIcon>} onClick={() => navigate('editProject/'+Project.projectId)}>
                        Edit
                    </Button>
                    <Button variant='outlined' endIcon={<DeleteIcon></DeleteIcon>} onClick={DeleteProject}>
                        Delete
                    </Button>
                </ButtonGroup>
            </div>
        </div>
    </div>
  )
}

export default ProjectPreview