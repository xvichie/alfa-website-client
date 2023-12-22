import React from 'react'
import './ServiceFacade.scss';

function ServiceFacade({icon, title, description, tags}) {
    console.log(tags);

  return (
    <div className='ServiceFacade'>
        <div className="ServiceFacade-Wrapper">
            <div className="ServiceFacade-Top">
                {icon}
            </div>
            <div className="ServiceFacade-Title">
                <h4>{title}</h4>
            </div>
            <div className="ServiceFacade-Description">
                <p>{description}</p>
            </div>
            <div className="ServiceFacade-Tags">
                <h4>{tags.replaceAll(',',' · ')}</h4>
            </div>
        </div>
    </div>
  )
}

export default ServiceFacade