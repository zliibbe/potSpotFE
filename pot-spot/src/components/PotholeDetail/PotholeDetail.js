import React from "react";

const PotholeDetail = ({currentPothole, collectPotholePhotos}) => {
    

    return (
        <section className='pothole-detail'>
        <div className="location-detail">
            <h2>Location</h2>
            <p className="latitude-detail">{currentPothole.latitude}</p>
            <p className="longitude-detail">{currentPothole.longitude}</p>
        </div>
        <div className="description-detail">{currentPothole.description}</div>
        <div className="pictures-detail" >{collectPotholePhotos()}</div>
    </section>
    )


}

export default PotholeDetail