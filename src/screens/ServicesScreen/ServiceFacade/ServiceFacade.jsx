import React from 'react'
import './ServiceFacade.scss';

function ServiceFacade({icon, title, description}) {
    console.log(description);
  return (
    <div className='ServiceFacade'>
        <div className="ServiceFacade-Wrapper">
            <div className="ServiceFacade-Top">
                {icon}
            </div>
            <div className="ServiceFacade-Title">
                <h3>{title}</h3>
            </div>
            <div className="ServiceFacade-Description">
                <p>{description}</p>
            </div>
        </div>
    </div>
  )
}

export default ServiceFacade