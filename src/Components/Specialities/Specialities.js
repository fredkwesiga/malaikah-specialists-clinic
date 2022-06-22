import React from "react";
import { Col, Row, Card } from "react-bootstrap";
// import { LinkContainer } from "react-router-bootstrap";
import './specialties.css'

function Specialities() {
  return (
    <> 
    <h2 style={{textAlign: 'center', fontWeight: 'bolder', marginTop:'5%'}}> Our Specialties</h2>
     <div style={{width: '91%', marginLeft: 'auto', marginRight: 'auto'}}>
      <Row>
        <Col>
        <div className='slider'>
        <div className='slider-track' >
          <a href='/specialities'>
          <Card id="crds">
               <Card.Img
                variant="top"
                className='crd-icon'
                src="/images/gynecology.png"
              /> 
              
              <Card.Body>
               <h6>Gynecology services</h6>
              </Card.Body>
            </Card>
          </a>
           
          <a href='/specialities'>
            <Card id="crds">
              <Card.Img
              className='crd-icon'
                variant="top"
                src="/images/bby.png"
              />
              <Card.Body>
                <h6>Paediatrics</h6>
              </Card.Body>
            </Card>
            </a>
            <a href='/specialities'>
            <Card id="crds">
              <Card.Img
                variant="top"
                className='crd-icon'
                src="/images/ambl.png"
              />
              <Card.Body>
                <h6>Ambulance services</h6>
              </Card.Body>
            </Card>
            </a>
            <a href='/specialities'>
            <Card id="crds">
              <Card.Img
                variant="top"
                className='crd-icon'
                src="/images/tummy.png"
              />
              <Card.Body>
                <h6>Hernia & Appendicitis surgery</h6>
              </Card.Body>
            </Card>
            </a>

            <a href='/specialities'>
            <Card id="crds">
              <Card.Img
                variant="top"
                className='crd-icon'
                src="/images/edu.png"
              />
              <Card.Body>
                <h6>Health Education</h6>
              </Card.Body>
            </Card>
            </a>
          <a href='/specialities'>
          <Card id="crds">
              <Card.Img
                variant="top"
                className='crd-icon'
                src="/images/gynecology.png"
              />
              <Card.Body>
               <h6>Gynecology services</h6>
              </Card.Body>
            </Card>
          </a>
           
          <a href='/specialities'>
            <Card id="crds">
              <Card.Img
                variant="top"
                className='crd-icon'
                src="/images/bby.png"
              />
              <Card.Body>
                <h6>Paediatrics</h6>
              </Card.Body>
            </Card>
            </a>
            <a href='/specialities'>
            <Card id="crds">
              <Card.Img
                variant="top"
                className='crd-icon'
                src="/images/ambl.png"
               
              />
              <Card.Body>
                <h6>Ambulance services</h6>
              </Card.Body>
            </Card>
            </a>
            <a href='/specialities'>
            <Card id="crds">
              <Card.Img
                variant="top"
                className='crd-icon'
                src="/images/tummy.png"
              />
              <Card.Body>
                <h6>Hernia & Appendicitis surgery</h6>
              </Card.Body>
            </Card>
            </a>

            <a href='/specialities'>
            <Card id="crds">
              <Card.Img
                variant="top"
                className='crd-icon'
                src="/images/edu.png"
              />
              <Card.Body>
                <h6>Health Education</h6>
              </Card.Body>
            </Card>
            </a>
          {/* </CardGroup> */}
          </div>
          </div>
        </Col>
      </Row>
      </div>
      {/* second row */}
      <Row id='row2'style={{width: '85%', marginLeft: 'auto', marginRight: 'auto'}}>
        <Col md>
        <h2>Out-Of-Hospital Care</h2>
              <Row>
              <Col>
                <img
                  src="/images/icons-04.png"
                  alt="homecare"
                  className='crd-icon'
                />{" "}
                <br />
                <a
                  href="#hcare"
                  style={{ color: "#0A1F3E", textDecoration: "none" }}
                >
                  {" "}
                  Home Care services
                </a>
              </Col>
           
              <Col >
                <img
                  src="/images/icons-05.png"
                  alt=""
                  className='crd-icon'
                />{" "}
                <br />
                <a
                  href="#emergservice"
                  style={{ color: "#0A1F3E", textDecoration: "none" }}
                >
                  Emergency Services
                </a>
              </Col>
              </Row>
              </Col>
              
        <Col md>
          <Card id="spc-card" style={{ width: "auto", height: "auto", padding:'5%'}}>
            <Card.Title style={{textAlign: 'center'}}>Check Our Weekly Time Table</Card.Title>
            <Row>
              <Col>Gynecology</Col> 
              <Col> Saturday</Col> 
              <Col>7:30AM - 6:00PM</Col> 
              </Row> <hr/>
              <Row>
              <Col>Eye Clinic</Col> 
              <Col> Wednesday</Col> 
              <Col>7:30AM - 6:00PM</Col> 
            </Row> <hr/>
            <Row>
              <Col>Other Specialties</Col> 
              <Col> </Col> 
              <Col>24/7</Col> 
            </Row>
          </Card>
        </Col>
      </Row>
      
    </>
  );
}

export default Specialities;
