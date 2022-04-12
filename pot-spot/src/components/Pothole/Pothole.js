import React from "react"
import './Pothole.css'

const Pothole = ({latitude, longitude, description, pictures, id}) => {
    const photoElements = pictures.map(picture => {
        return <a href={ picture }> Picture of pothole #{id} </a>
        

        
    })
    
    return (
        <section className='pothole'>
            <div className="location">
                <h2>Location</h2>
                <p className="latitude">{latitude}</p>
                <p className="longitude">{longitude}</p>
            </div>
            <div className="description">{description}</div>
            <div className="pictures">{photoElements}</div>
        </section>
    )
}

export default Pothole