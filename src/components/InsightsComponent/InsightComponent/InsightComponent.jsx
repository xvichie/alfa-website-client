import React from 'react'
import './InsightComponent.scss';

import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

function InsightComponent({insight}) {
  return (
    <div className='InsightComponent'>
        <div className="Insight-Wrapper">
            <div className="Insight-Image">
                <img src={insight.images[0]} alt="" />
            </div>
            <div className='Insight-Bottom'>
                <div className="Bottom-Title">
                    {insight.title}
                </div>
                <div className="Bottom-Text">
                    <h3>{insight.date}</h3>
                    <a href="" className='Bottom-Readmore'>
                        <h3>Read More</h3>
                        <ArrowCircleRightIcon />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InsightComponent