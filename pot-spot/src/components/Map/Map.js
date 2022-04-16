import React, { Component } from "react";
import { GoogleMap, Marker, InfoWindow, LoadScript } from "@react-google-maps/api";
import './Map.css'
import apiKey from "../../apiKey";

class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPothole: null
        }
    }

    displayInfoWindow = (pothole) => {
        this.setState({ currentPothole: pothole })
    }
    closeWindow = () => {
        this.setState({ currentPothole: null })
    }
    render() {
        let pictures;
        let picturesImgs;
        if (this.state.currentPothole) {
            pictures = this.props.pictures.filter(picture => picture.pothole_id === this.state.currentPothole.id)
            picturesImgs = pictures.map(picture => {
                return (<img key={picture.url} className="info-box-pictures" src={picture.url} alt="Pothole" />)
            })
        }

        return (

            <div className='form-map-container'>
                <div className='pothole-form map-placeholder'>
                    <LoadScript
                        googleMapsApiKey={apiKey}>
                        <GoogleMap
                            zoom={12}
                            center={{ lat: 39.742043, lng: -104.991531 }}
                            mapContainerStyle={{
                                width: '100%',
                                height: '100%'
                            }}>
                            {this.props.potholes.map(pothole => {
                                return (
                                    <Marker
                                        key={pothole.id}
                                        position={{
                                            lat: parseFloat(pothole.latitude),
                                            lng: parseFloat(pothole.longitude)
                                        }}
                                        onClick={() => {
                                            this.displayInfoWindow(pothole)
                                        }}
                                    />)
                            })}

                            {this.state.currentPothole && (
                                <InfoWindow
                                    onCloseClick={() => {
                                        this.closeWindow();
                                    }}
                                    position={{
                                        lat: parseFloat(this.state.currentPothole.latitude),
                                        lng: parseFloat(this.state.currentPothole.longitude)
                                    }}
                                >
                                    <div className="info-box">
                                        <h1>Pothole {this.state.currentPothole.id}</h1>
                                        <section className="picture-section">
                                            {picturesImgs}
                                        </section>
                                        <p>{this.state.currentPothole.description}</p>
                                        <p>Location: lat-{this.state.currentPothole.latitude}, long-{this.state.currentPothole.longitude}</p>
                                    </div>

                                </InfoWindow>
                            )}

                        </GoogleMap>
                    </LoadScript>
</div>
</div>


                    )
    }
}

                    export default Map
