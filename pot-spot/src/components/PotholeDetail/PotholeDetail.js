import React from "react";
import './PotholeDetail.css';

const PotholeDetail = ({currentPothole, collectPotholePhotos}) => {
    

    return (
        <section className='pothole-detail'>
        <div className="location-detail">
            <h3>Location</h3>
            <p className="latitude-detail">Latitude: {currentPothole.latitude}</p>
            <p className="longitude-detail">Longitude: {currentPothole.longitude}</p>
            <div className="description-detail">Description: {currentPothole.description}</div>
        </div>
        <div className="pictures-detail" >{collectPotholePhotos()}</div>
    </section>
    )


}

export default PotholeDetail