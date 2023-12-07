import React from 'react'
import './InsightFacade.scss';

function InsightFacade({Insight}) {
  return (
    <div className='InsightFacade'>
        <img src={Insight.images[0]} style={{width:'95%',height:'95%'}} alt="" />
        <div className="Facade-Hidden">
            {'Read More'}
        </div>
    </div>
  )
}

export default InsightFacade