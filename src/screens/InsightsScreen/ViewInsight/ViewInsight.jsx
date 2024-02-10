import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ENDPOINTS, createAPIEndpoint } from '../../../api/api';

import './ViewInsight.scss';

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

    console.log(Insight);


    return (
        <>
          {Insight ? (
            <div className='ViewInsight'>
              <div className="ViewInsight-TopSpace"></div>
              <div className="ViewInsight-Top"
              >
                <div className="ViewInsight-Top-Wrapper">
                  <div className="Top-Labels">
                      <h1>{Insight.title}</h1>
                  </div>
                  <div className="Top-Info">
                      <h3>{Insight.author}</h3>
                      <h3>{Insight.datePublished}</h3>
                  </div>
                  <div className="Top-Description">
                    <h4>{Insight.description}</h4>
                  </div>
                  <div className="Top-Image">
                    <img src={Insight.image} alt="" />
                  </div>
                </div>
              </div>
              <div className="ViewInsight-Main">
                <div className="ViewInsight-Wrapper" dangerouslySetInnerHTML={{ __html: Insight.body }}>
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