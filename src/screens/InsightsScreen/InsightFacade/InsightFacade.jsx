import React from 'react'
import './InsightFacade.scss';
import { useNavigate } from 'react-router-dom';

function InsightFacade({Insight}) {

  const navigate = useNavigate();

  return (
    <div className='InsightFacade' onClick={() => navigate('/Insights/'+Insight.insightId)}>
        <img src={Insight.image} style={{width:'95%',height:'95%'}} alt="" />
        <div className="Facade-Hidden">
            {'Read More'}
        </div>
    </div>
  )
}

export default InsightFacade