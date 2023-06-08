import React from "react";
import "./Footer.css";
import { foot } from "../../footer";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const Footer = () => {
  const MapWithAMarker = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: -1.2306616792179152, lng: 36.84835920697511 }}
      >
        <Marker
          position={{ lat: -1.2306616792179152, lng: 36.84835920697511 }}
        />
      </GoogleMap>
    ))
  );
  return (
    <div className="footer-container">
      <div className="footer-one">
        <h3>Contact Us</h3>
        <div className="footer-socials">
          {foot.map((item, index) => {
            return (
              <div key={index} className="work-one">
                <h3>{item.title}</h3>
                <p>{item.titleDes}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="footer-two">
        <MapWithAMarker
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBAXOQcxZzrxgrzdLhtRcmdBaiPEWzFkD8"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `750px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />{" "}
      </div>
    </div>
  );
};

export default Footer;
