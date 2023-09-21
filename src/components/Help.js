import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../stylesheet/Help.css";
import Map from "../components/Map";

function Help() {
  return (
    <>
      <div className="help-page">
        <h1 className="help-title  blink">Help Center</h1>
        <p className="help-description">
          Welcome to the Help Center for our Support App. We provide a platform
          for users to buy and sell their products easily.
        </p>
      </div>
      <div className="help-center-container">
        <div className="section-card">
          <div className="section">
            <h3 className="section-title">About Our App</h3>
            <p className="section-description">
              Our Support App is a user-friendly platform that enables you to
              showcase and sell your products online.
            </p>
            <p>
              Our app provides you with the tools to create attractive offers
              and reach potential buyers.
            </p>
          </div>
        </div>
        <div className="section-card">
          <div className="section">
            <h3 className="section-title">Contact Us</h3>
            <p className="section-description">
              If you can't find the information you're looking for, or if you
              need further assistance, our support team is here to help.
            </p>
            <p className="contact-info">
              Contact our support team at
              <span className="E-mail">
                <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                support@mail.com
                <br />
              </span>
              you also reach us by phone at
              <span className="phone-number">
                <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                +1-800-123-4567
              </span>
            </p>
          </div>
        </div>
      </div>
      <p className="availability">
        We are available during our working hours, Monday to Friday, 9 AM - 6
        PM.
      </p>

      <div className="map-card">
        <div className="map-section">
          <h2 className="section-title">Seller Location</h2>
          <div className="map-container">
            <Map />
          </div>
        </div>
      </div>
    </>
  );
}

export default Help;
