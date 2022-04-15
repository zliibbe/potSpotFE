import React, { Component } from "react";
import {GoogleMap, Marker, InfoWindow} from "@react-google-maps/api";

class Map extends Component {
  constructor(props) {
    super(props);
    this.state= {
      currentPothole: null
    }
  }

  displayInfoWindow =(pothole) => {
    this.setState({currentPothole: pothole})
  }
  closeWindow = () => {
    this.setState({currentPothole: null})
  }
  render() {
    return (
        <GoogleMap
            zoom={10}
            center={{lat:39.742043, lng:-104.991531 }}
            containerStyle={{
              width: '100%',
              height: '100%'
            }}
        >

        {this.props.potholes.map(pothole => {
          return (<Marker
              key={pothole.id}
              position={{
                lat: parseFloat(pothole.latitude),
                lng: parseFloat(pothole.longitude)
              }}
              onClick={(event) => {
                this.displayInfoWindow(pothole)
              }}
            />)
        })}


      </GoogleMap>
    )
  }
  /*
  {this.state.currentPothole && (
    <InfoWindow
      onClick={this.closeWindow}
      position={{
        lat:parseFloat(this.state.currentPothole.latitude),
        lng: parseFloat(this.state.currentPothole.longitude)
      }}>(
        <div>
          <p>Hello world</p>
        </div>
      )
    </InfoWindow>

  )}
  */
}

export default Map
