import React from "react";
import {GoogleMap} from "react-google-maps";

function Map() {
    
    return (
        <GoogleMap 
            defaultZoom={10} 
            defaultCenter={{lat:39.742043, lng:-104.991531 }} 
        />
    )
}

export default Map