import React from "react"
import './Pothole.css'

const Pothole = ({latitude, longitude, description, pictures, id, findPothole}) => {
    // const photoElements = pictures.map(picture => {
    //     return <a href={ picture }><img alt={picture} src={picture}/> </a>
    // })
    // const potholePreviewPhoto = <img src={pictures[0]} className='photo-preview'/>

    return (
        <section className='pothole' onClick={() => findPothole(id)}>
            <div className="location">
                <h3>Location</h3>
                <p className="latitude">{latitude}</p>
                <p className="longitude">{longitude}</p>
            </div>
            <div className="description">{description}</div>
            
        </section>
    )
}

export default Pothole

// {/* <div className="pictures" >{potholePreviewPhoto}</div> */}