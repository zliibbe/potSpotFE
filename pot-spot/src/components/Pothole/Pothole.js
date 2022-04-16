import React from "react"
import './Pothole.css'

const Pothole = (props) => {
    let potholeDisplay = ''
    let picturesDisplay = ''
    if(props.pothole && props.potholePictures) {
      const {latitude, longitude, description, id, findPothole} = props.pothole;
      const pictures = props.potholePictures
      console.log(pictures)
      console.log(props)
      picturesDisplay = pictures.map(picture => {
        return <img alt="Pothole" src={picture.url}/>
      })
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
        {picturesDisplay}
      </React.Fragment>
    )
}

export default Pothole

// {/* <div className="pictures" >{potholePreviewPhoto}</div> */}
