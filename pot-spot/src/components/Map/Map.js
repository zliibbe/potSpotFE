import React from "react";
import {GoogleMap, Marker} from "react-google-maps";

function Map({potholes}) {

    return (
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{lat:39.742043, lng:-104.991531 }}
        >

        {potholes.map(pothole => {
          return (<Marker
              key={pothole.id}
              position={{
                lat: parseFloat(pothole.latitude),
                lng: parseFloat(pothole.longitude)
              }}
            />)
        })}
      </GoogleMap>
    )
}

export default Map
