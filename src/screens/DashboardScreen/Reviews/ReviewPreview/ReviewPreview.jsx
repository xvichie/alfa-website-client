import React from 'react'
import "./ReviewPreview.scss";
import { Button, ButtonGroup } from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { ENDPOINTS, createAPIEndpoint } from '../../../../api/api';
import { useNavigate } from 'react-router-dom';

function ReviewPreview({Review}) {

    const navigate = useNavigate();

    const DeleteReview = async () => {
        try{
            const response = await createAPIEndpoint(ENDPOINTS.reviews).delete(Review.reviewId);
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
    <div className='ReviewPreview'>
        <div className="ReviewPreview-Wrapper">
            <div className="ReviewPreview-Top">
                <img src={Review.companyLogo} height={48} alt="" />
            </div>
            <div className="ReviewPreview-Title">
                <h3>{Review.personName}</h3>
            </div>
            <div className="ReviewPreview-Description">
                <p>{Review.body}</p>
            </div>
            <div className="ReviewPreview-Actions">
                <ButtonGroup>
                    <Button variant='outlined' startIcon={<EditIcon></EditIcon>} onClick={() => navigate('editReview/'+Review.reviewId)}>
                        Edit
                    </Button>
                    <Button variant='outlined' endIcon={<DeleteIcon></DeleteIcon>} onClick={DeleteReview}>
                        Delete
                    </Button>
                </ButtonGroup>
            </div>
        </div>
    </div>
  )
}

export default ReviewPreview