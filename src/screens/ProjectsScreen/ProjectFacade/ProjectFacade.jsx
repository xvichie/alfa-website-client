import React from 'react'
import './ProjectFacade.scss';

function ProjectFacade({project}) {
  return (
    <div className='ProjectFacade'>
        <img src={project.image} style={{width:'95%',height:'95%'}} alt="" />
        <div className="Facade-Hidden">
            {project.title}
        </div>
    </div>
  )
}

export default ProjectFacade