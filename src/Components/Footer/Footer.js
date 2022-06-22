import React from "react";
import { Col, Row } from "react-bootstrap";
import './Footer.css'

import {
  FacebookIcon,
  LinkedinIcon,
  FacebookShareButton,
  LinkedinShareButton,
} from 'react-share';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <footer className="footer">
         <Row>
          <Col md>
            <img
              src="/images/bluelogo-01.png"
              alt=""
              width="100px"
              height="100px"
            /> MALAIKAH
          </Col>
          <Col md>
            <h5>NAVIGATION</h5>

            <a className="footer-li" href="/">
              Home |
            </a>

            <a className="footer-li" href="#rscreen">
              Research |
            </a>

            <a className="footer-li" href="#specscreen">
              Specialties |
            </a>

            <a className="footer-li" href="#moeevents">
              Events |
            </a>

            <a className="footer-li" href="#emergservice">
              About
            </a>
            <div style={{ }}>
              © 2021 Copyright. All rights reserved.
            </div>
          </Col>
          <Col md>
            <h5>CONTACT US</h5>
            
              <p className="footer-li">Email: support@malaikahgroup.com</p>
              <p className="footer-li">Tel: +234 703 229 3770 </p>
           
            <FacebookShareButton
              url="https://www.facebook.com/malaikahmedicalcenter" >
              <FacebookIcon
                className="facebookicon"
                logofillcolor="black"
                round="true"
              ></FacebookIcon>
            </FacebookShareButton>
            
            <LinkedinShareButton
              url="https://www.linkedin.com/company/malaikah-specialist-clinics">
              <LinkedinIcon
                className="linkedinicon"
                logofillcolor="white"
                round="true"
              ></LinkedinIcon>
            </LinkedinShareButton>
            <a href="https://www.youtube.com/channel/UCZogwUu3bJLpOgca5LdI8Yw" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faYoutube} className="youtubeicon" />
            </a>
          </Col>
        </Row> 
      </footer>
    </>
  );
}

export default Footer;
