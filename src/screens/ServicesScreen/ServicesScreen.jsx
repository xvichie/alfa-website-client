import React, { useEffect, useState } from 'react'
import './ServicesScreen.scss';
import CardComponent from '../../components/CardComponent/CardComponent';
import ServiceCardComponent from '../../components/ServiceCardComponent/ServiceCardComponent';
import ServiceFacade from './ServiceFacade/ServiceFacade';

function ServicesScreen() {
    const [services,setServices] = useState([]);

    useEffect(() => {
        setServices([
            {
                title:"Jurnali",
                description:"Agiwyobt Jurnals",
                tags: ["node","react","angular","dedis trak"],
                icon: "https://sweeftdigital.com/assets/backend-development.svg"
            },
            {
                title:"Jurnali",
                description:"Agiwyobt Jurnals",
                tags: ["node","react","angular","dedis trak"],
                icon: "https://sweeftdigital.com/assets/backend-development.svg"
            },
            {
                title:"Jurnali",
                description:"Agiwyobt Jurnals",
                tags: ["node","react","angular","dedis trak"],
                icon: "https://sweeftdigital.com/assets/backend-development.svg"
            },
            {
                title:"Jurnali",
                description:"Agiwyobt Jurnals",
                tags: ["node","react","angular","dedis trak"],
                icon: "https://sweeftdigital.com/assets/backend-development.svg"
            },
            {
                title:"Jurnali",
                description:"Agiwyobt Jurnals",
                tags: ["node","react","angular","dedis trak"],
                icon: "https://sweeftdigital.com/assets/backend-development.svg"
            },
            {
                title:"Jurnali",
                description:"Agiwyobt Jurnals",
                tags: ["node","react","angular","dedis trak"],
                icon: "https://sweeftdigital.com/assets/backend-development.svg"
            },
            {
                title:"Jurnali",
                description:"Agiwyobt Jurnals",
                tags: ["node","react","angular","dedis trak"],
                icon: "https://sweeftdigital.com/assets/backend-development.svg"
            },
            {
                title:"Jurnali",
                description:"Agiwyobt Jurnals",
                tags: ["node","react","angular","dedis trak"],
                icon: "https://sweeftdigital.com/assets/backend-development.svg"
            },
            {
                title:"Jurnali",
                description:"Agiwyobt Jurnals",
                tags: ["node","react","angular","dedis trak"],
                icon: "https://sweeftdigital.com/assets/backend-development.svg"
            }]
        )
    },[]);
  return (
    <div className='ServicesScreen'>
        <div className="Services-Main">
            <div className="Main-Wrapper">
                <div className="Main-Left">
                    <div className='Left-Labels'>
                        <h1>We Do<br></br>Everything</h1>
                        <h4>See Our Projects</h4>
                    </div>
                </div>
                <div className="Main-Right">
                    <h2>
                        Our experience enables us to provide one of a kind solutions to your business 
                        needs and our expertise guarantees delivery on promises and deadlines.
                    </h2>
                </div>
            </div>
        </div>
        <div className="Services-Services">
            <div className="Services-Wrapper">
                <div className="Services-Label">
                    <h1>
                        Software Services
                    </h1>
                </div>
                <div className="Services-List">
                        {services ? (
                        services.map((service, index) => (
                                <ServiceFacade 
                                key={index} 
                                title={service.title} 
                                description={service.description} 
                                icon={<img src={service.icon} />} />
                        ))
                        ) : (
                        <p>Loading Services...</p>
                        )
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServicesScreen