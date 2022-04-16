import React from "react"
import './Pothole.css'

const Pothole = (props) => {
    // const photoElements = pictures.map(picture => {
    //     return <a href={ picture }><img alt={picture} src={picture}/> </a>
    // })
    // const potholePreviewPhoto = <img src={pictures[0]} className='photo-preview'/>
    let potholeDisplay = ''
    if(props.pothole) {
      const {latitude, longitude, description, pictures, id, findPothole} = props.pothole;
      potholeDisplay = <section className='pothole' onClick={() => findPothole(id)}>
        <div className="location">
          <h3>Location</h3>
          <p className="latitude">{latitude}</p>
          <p className="longitude">{longitude}</p>
        </div>
        <div className="description">{description}</div>
      </section>
    }

    return (
      <React.Fragment>
        {potholeDisplay}
      </React.Fragment>
    )
}

export default Pothole

// {/* <div className="pictures" >{potholePreviewPhoto}</div> */}
