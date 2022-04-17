import React from "react";
import "./Pothole.css";

const Pothole = (props) => {
  let potholeDisplay = "";
  let picturesDisplay = "";
  if (props.pothole && props.potholePictures) {
    const { latitude, longitude, description, id } = props.pothole;
    const pictures = props.potholePictures;
    console.log("props: ", props)
    picturesDisplay = pictures.map((picture) => {
      return (
        <img
          className="pictures"
          key={picture.url}
          alt="Pothole"
          src={picture.url}
        />
      );
    });
    potholeDisplay = (
      <section className="pothole">
        <div className="location">
          <h3>Pothole {id}</h3>
          <p className="latitude">{latitude}</p>
          <p className="longitude">{longitude}</p>
        </div>
        <div className="description">{description}</div>
        <button onClick={() => props.removePothole(id)}>X</button>
      </section>
    );
  }



  return (
    <React.Fragment>
      {potholeDisplay}
      <section className="pictures-section">{picturesDisplay}</section>
    </React.Fragment>
  );
};

export default Pothole;

// {/* <div className="pictures" >{potholePreviewPhoto}</div> */}
