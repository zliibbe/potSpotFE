import React from "react";
import "./Pothole.css";

const Pothole = (props) => {
  let potholeDisplay = "";
  let picturesDisplay = "";
  if (props.pothole && props.potholePictures) {
    const { latitude, longitude, description, id, findPothole } = props.pothole;
    const pictures = props.potholePictures;
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
      <section className="pothole" onClick={() => findPothole(id)}>
        <div className="location">
          <h3>Pothole {id}</h3>
          <p className="latitude">{latitude}</p>
          <p className="longitude">{longitude}</p>
        </div>
        <div className="description">{description}</div>
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
