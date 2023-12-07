import React, { useEffect, useState } from 'react'
import './InsightsScreen.scss';
import InsightFacade from './InsightFacade/InsightFacade';

function InsightsScreen() {
    const [Insights,setInsights] = useState([]);

    const TempImage = 'https://sweeftdigital-com-data.s3.eu-central-1.amazonaws.com/blogs/1523c91d-e5bf-4392-81ed-d58aa5e4f3f1.png';

    useEffect(() => {
        setInsights([
            {
                title:"Matka.ge",
                shortDescription:"magari tvini mogvetyna",
                mainDescription:"cvetshi tvini mogvetyna",
                description:"kide tvini moityna",
                sector:"education",
                year: 2023,
                challenge:"stayin alive",
                whatWeDid: "deda movityanit",
                images: [TempImage],
                tags: ['React','Node','auth0']
            },
            {
                title:"Matka.ge",
                shortDescription:"magari tvini mogvetyna",
                mainDescription:"cvetshi tvini mogvetyna",
                description:"kide tvini moityna",
                sector:"education",
                year: 2023,
                challenge:"stayin alive",
                whatWeDid: "deda movityanit",
                images: [TempImage],
                tags: ['React','Node','auth0']
            }]
        )
    },[]);
  return (
    <div className='InsightsScreen'>
        <div className="Insights-Main">
            <div className="Main-Wrapper">
                <div className="Main-Left">
                    <div className='Left-Labels'>
                        <h1>Read Our<br></br>Blog</h1>
                        <h4>To Always Keep You Up Do Date</h4>
                    </div>
                </div>
                <div className="Main-Right">
                    <h2>
                    We are deeply committed to discovering extraordinary solutions for our clients.
                     Get acquainted with us further by exploring our recent work showcased below.
                    </h2>
                </div>
            </div>
        </div>
        <div className="Insights-Insights">
            <div className="Insights-Wrapper">
                <div className="Insights-Label">
                    <h1>
                        Our Insights
                    </h1>
                    <h3>
                        Have A Look
                    </h3>
                </div>
                <div className="Insights-List">
                        {Insights ? (
                            Insights.map((insight, index) => (
                                    <InsightFacade
                                    Insight={insight} 
                                    />
                            ))
                            ) : (
                            <p>Loading Insights...</p>
                        )
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default InsightsScreen