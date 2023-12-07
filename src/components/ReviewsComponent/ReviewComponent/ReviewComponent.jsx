import React from 'react'
import './ReviewComponent.scss';
import { Paper } from '@mui/material';

import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import LocationOnIcon from '@mui/icons-material/LocationOn';


function ReviewComponent({review}) {
  return (
    <div className='ReviewComponent'>
        <Paper className='ReviewComponent-Paper' elevation={5}>
            <div className="Paper-Wrapper">
                <div className="Paper-Left">
                    <img src={review.companyLogo} className="Left-Logo" alt="" />
                </div>
                <div className="Paper-Middle">
                    <FormatQuoteIcon className='Middle-Quotes'></FormatQuoteIcon>
                </div>
                <div className="Paper-Right">
                    <div className="Right-Top">
                        {review.body}
                    </div>
                    <div className="Right-Bottom">
                        <h2 className='Bottom-PersonName'>{review.personName}</h2>
                        <h3 className='Bottom-Workplace'>{review.workplace},{review.position}</h3>
                        <h5 className='Bottom-Location'>{<LocationOnIcon></LocationOnIcon>}{review.location}</h5>
                    </div>
                </div>
            </div>
        </Paper>
    </div>
  )
}

export default ReviewComponent