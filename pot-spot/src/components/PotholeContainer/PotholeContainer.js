import React from 'react'
import Pothole from '../Pothole/Pothole'
import './PotholeContainer.css'


const PotholeContainer = ({potholes}) => {
    const allPotholes = potholes.map(pothole => {        
        return(
            <Pothole 
                latitude={pothole.latitude}
                longitude={pothole.longitude}
                description={pothole.description}
                pictures={pothole.pictures} 
                id={pothole.id}
                key={pothole.id}
            />
        )
    })
    
    
    return (
        <section className='pothole-container'>
            {allPotholes}
        </section>
    )
}

export default PotholeContainer