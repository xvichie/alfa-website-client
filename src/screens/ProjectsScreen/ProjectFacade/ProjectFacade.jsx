import React from 'react'
import './ProjectFacade.scss';
import { useNavigate } from 'react-router-dom';

function ProjectFacade({project}) {
  const navigate = useNavigate();
  return (
    <div className='ProjectFacade' onClick={() => navigate('/Projects/'+project.projectId)}>
        <img src={project.image} style={{width:'95%',height:'95%'}} alt="" />
        <div className="Facade-Hidden">
            {project.title}
        </div>
    </div>
  )
}

export default ProjectFacade