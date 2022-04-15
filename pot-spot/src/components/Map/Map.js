import React, { Component } from "react";
import {GoogleMap, Marker, InfoWindow, LoadScript} from "@react-google-maps/api";

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

      <LoadScript
        googleMapsApiKey="AIzaSyCNdw_FpGRuXLBOf6iS_K7qYCg3YrsRti8">
        <GoogleMap
          zoom={12}
          center={{lat:39.742043, lng:-104.991531 }}
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
              onClick={(event) => {
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
              lat:parseFloat(this.state.currentPothole.latitude),
              lng: parseFloat(this.state.currentPothole.longitude)
            }}
            >
              <div>
                <p>{this.state.currentPothole.description}</p>
              </div>

          </InfoWindow>
        )}

      </GoogleMap>
      </LoadScript>

    )
  }
  /*
  <Marker
  position={{
  lat: parseFloat(this.props.potholes[0].latitude),
  lng: parseFloat(this.props.potholes[0].longitude)
  }}
  ></Marker>


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
  */
}

export default Map
