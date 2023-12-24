import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ENDPOINTS, createAPIEndpoint } from '../../../api/api';

function ViewInsight() {

    const params = useParams();
    const [Insight,SetInsight] = useState(null);
    
    useEffect(() => {
        const FetchInsight = async () => {
            try{
                const response = await createAPIEndpoint(ENDPOINTS.insights).getById(params.InsightId);

                if(response.status === 200){
                    SetInsight(response.data);
                }
            }
            catch {
                console.error("Couldn't Get Insight")
            }
        }

        FetchInsight();
    },[])

    return (
        <>
          {Insight ? (
            <div className='ViewInsight'>
              <div className="ViewInsight-Top"
              >
                <div className="ViewInsight-Top-Wrapper">
                  <div className="Top-Labels">
                    
                  </div>
                </div>
              </div>
              <div className="ViewInsight-Main">
                <div className="ViewInsight-Wrapper">
                    
                </div>
              </div>
            </div>
          ) : (
            "Loading"
          )}
        </>
      )
}

export default ViewInsight