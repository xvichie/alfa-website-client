import React, { useEffect, useState } from 'react'
import './InsightsComponent.scss';
import InsightFacade from '../../screens/InsightsScreen/InsightFacade/InsightFacade';
import { ENDPOINTS, createAPIEndpoint } from '../../api/api';

function InsightsComponent() {
    const [insights,setInsights] = useState();

    useEffect(() => {
        const fetchInsighs = async () => {
          try{
            const response = await createAPIEndpoint(ENDPOINTS.insights).get();

            if(response.status === 200){
              setInsights(response.data.slice(-6));
            }
          }
          catch(err){
            console.error(err);
          }
        }

        fetchInsighs()
      }, []);

  return (
    <div className='InsightsComponent'>
        <div className="Insights-Wrapper">
            <div className="Insights-Label">
                <h1>Check Out Our Blogs!</h1>
            </div>
            <div className="Insights-Posts">
                    {insights ? (
                        insights.map((insight, index) => (
                            <InsightFacade key={index} Insight={insight}></InsightFacade>
                        ))
                    ) : (
                        <div>Loading</div>
                    )}
                </div>
        </div>
    </div>
  )
}

export default InsightsComponent