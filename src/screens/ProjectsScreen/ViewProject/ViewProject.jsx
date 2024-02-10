import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ENDPOINTS, createAPIEndpoint } from '../../../api/api';

import './ViewProject.scss';

import CircleIcon from '@mui/icons-material/Circle';

function ViewProject() {

    const params = useParams();
    const [Project,SetProject] = useState(null);

    useEffect(() => {

        const FetchProject = async () => {
            try{
                const response = await createAPIEndpoint(ENDPOINTS.projects).getById(params.ProjectId);

                if(response.status === 200){
                    SetProject(response.data);
                }
            }
            catch {
                console.error("Couldn't Get Project")
            }
        }

        FetchProject();
    },[])

  return (
    <>
      {Project ? (
        <div className='ViewProject'>
          <div className="ViewProject-Top"
          style={{
            backgroundImage: "url(" + Project.image + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            margin:0,
          }}
          >
            {/* <img src={Project.image} style={{width:'100%',height:'100%',objectFit:'cover'}} alt="" /> */}
            <div className="ViewProject-Top-Wrapper">
              <div className="Top-Labels">
                <h1 className='Title'>{Project.title}</h1>
                <h3 className='Sub'>{Project.shortDescription}</h3>
              </div>
            </div>
          </div>
          <div className="ViewProject-Main">
            <div className="ViewProject-Wrapper">
                <div className="ViewProject-Details">
                    <div className="Details-Left">
                        <h1 className='Title'>
                            {Project.mainDescription}
                        </h1>
                        <h3 className='Sub'>
                            {Project.description}
                        </h3>
                    </div>
                    <div className="Details-Right">
                        <span>
                            <h3 className='Title'>
                                Sector
                            </h3>
                            <h4 className='Sub'>
                                {Project.sector}
                            </h4>
                        </span>
                        <span>
                            <h3 className='Title'>
                                Year
                            </h3>
                            <h4 className='Sub'>
                                {Project.year}
                            </h4>
                        </span>
                    </div>
                </div>
                <div className="ViewProject-Insight">
                    <div className="Insight-Challenge">
                        <h3 className='Title'>Challenge</h3>
                        <h4 className='Sub'>{Project.challenge}</h4>
                    </div>
                    <div className="Insight-WhatWeDid">
                        <h3 className='Title'>What We Did</h3>
                        <h4 className='Sub'>{Project.whatWeDid}</h4>
                    </div>
                </div>
                <div className="ViewProject-Tags">
                    <h1 className='Title'>Tags</h1>
                    <div>
                        {Project.tags.split(',').map(
                            (tag,index) => {
                                return (<div className='Tag Sub' key={index}
                                style={{
                                    display:'flex',
                                }}>
                                    <CircleIcon className='CircleIcon'></CircleIcon>
                                    <h4 className='Sub'>{tag}</h4>
                                </div>)
                            }
                        )}
                    </div>
                </div>
            </div>
          </div>
        </div>
      ) : (
        "Loading"
      )}
    </>
  )
}

export default ViewProject