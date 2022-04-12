import React from "react"
import './Pothole.css'

const Pothole = ({latitude, longitude, description, pictures, id}) => {
    return (
        <section className='pothole'>
            <div className="location">
                <h2>Location</h2>
                <p className="latitude">{latitude}</p>
                <p className="longitude">{longitude}</p>
            </div>
            <div className="description">{description}</div>
            <div className="pictures">{pictures}</div>
        </section>
    )
}

export default Pothole