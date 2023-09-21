import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import SonalImg from "../assets/indiaFlag.png";
import JonImg from "../assets/caliFlag.png";
import RyeImg from "../assets/txFlag.png";
import "../stylesheet/About.css";

function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="about-title">We are your Support Squad</h1>
            <p className="about-sub">
              Support App is your one-stop solution for finding the best offers
              and deals. Our mission is to help you save money and get the best
              value for your purchases.
            </p>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="squad-list">
              <img src={SonalImg} alt="" />
              <h3>Sonal Kheware</h3>
              <div className="squad-info">
                <p>
                  Lead Full-Stack Developer and Head of R&D for new
                  infrastructure of our Support app. Oversees agile Development,
                  methodologies and creating reliable APIs keeping Support on
                  top of it's game.
                </p>

                <ul className="squad-icons">
                  <li className="s-media">
                    <FaTwitter />
                  </li>
                  <li className="s-media">
                    <FaFacebook />
                  </li>
                  <li className="s-media">
                    <FaLinkedin />
                  </li>
                  <li className="s-media">
                    <FaGithub />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="squad-list">
              <img src={JonImg} alt="" width={600} className="squad-img" />
              <h3>Jonathan Solano</h3>
              <div className="squad-info">
                <p>
                  SEO and Founder of Support. Senior Developer and Architect
                  guiding the development of the end-to-end system we call
                  Support. Oversees development and maintenance of new and
                  existing features.
                </p>

                <ul className="squad-icons">
                  <li>
                    <FaTwitter />
                  </li>
                  <li>
                    <FaFacebook />
                  </li>
                  <li>
                    <FaLinkedin />
                  </li>
                  <li>
                    <FaGithub />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="squad-list">
              <img src={RyeImg} alt="" width={600} className="squad-img" />
              <h3>Ryan Capacia</h3>
              <div className="squad-info">
                <p>
                  Lead Frontend Developer and UI Designer of Support. Head of
                  application performance, uptime, and scaling. Maintains our
                  high standards for code quality and application design.
                </p>

                <ul className="squad-icons">
                  <li>
                    <FaTwitter />
                  </li>
                  <li>
                    <FaFacebook />
                  </li>
                  <li>
                    <FaLinkedin />
                  </li>
                  <li>
                    <FaGithub />
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="squad-list2">
            <p>
              Whether you are looking for discounts on electronics, fashion,
              home appliances, or any other products, Support App has got you
              covered.
            </p>
            <p>Thank you for choosing Support App!</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
