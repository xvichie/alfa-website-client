import React, { useEffect, useState } from 'react'
import './InsightsComponent.scss';
import InsightComponent from './InsightComponent/InsightComponent';

function InsightsComponent() {
    const [insights,setInsights] = useState();

    useEffect(() => {
        // FETCH REVIEWS FROM BACKEND
        // Simulating fetched data for the sake of example
        const fetchedInsights = [
          {
            title:"Gela Menabde",
            description: "Gela Magaria",
            author:"Gela Lol",
            images:["https://sweeftdigital-com-data.s3.eu-central-1.amazonaws.com/blogs/5eae8800-bc70-4850-bd48-3db6037946c1.png"],
            body: "karoche ra",
            date: "03/12/2023"
          },
          {
            title:"Gela Menabde",
            description: "Gela Magaria",
            author:"Gela Lol",
            images:["https://sweeftdigital-com-data.s3.eu-central-1.amazonaws.com/blogs/5eae8800-bc70-4850-bd48-3db6037946c1.png"],
            body: "karoche ra",
            date: "03/12/2023"
          },
          {
            title:"Gela Menabde",
            description: "Gela Magaria",
            author:"Gela Lol",
            images:["https://sweeftdigital-com-data.s3.eu-central-1.amazonaws.com/blogs/5eae8800-bc70-4850-bd48-3db6037946c1.png"],
            body: "karoche ra",
            date: "03/12/2023"
          }
        ];
    
        // Set the fetched reviews into state
        setInsights(fetchedInsights);
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
                            <InsightComponent key={index} insight={insight}></InsightComponent>
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