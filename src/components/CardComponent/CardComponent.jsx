import React from 'react'
import './CardComponent.scss';

function CardComponent({icon, title, description}) {
    console.log(description);
  return (
    <div className='CardComponent'>
        <div className="CardComponent-Wrapper">
            <div className="CardComponent-Top">
                {icon}
            </div>
            <div className="CardComponent-Title">
                <h3>{title}</h3>
            </div>
            <div className="CardComponent-Description">
                <p>{description}</p>
            </div>
        </div>
    </div>
  )
}

export default CardComponent