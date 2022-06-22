import React from "react";
import {Accordion, Container, Row, Col} from 'react-bootstrap'



const Aboutscreen = () => {
  
  return (
    <Container style={{maxWidth: '100%'}}>
    <div>
       <Row id="main"> 
         <Col md className="aboutus1">
          <h1> Who We Are</h1>
          <p st>
            Malaikah Specialist Center aims is to provide you with quality,
            accessible, & affordable health care services & health education.
            Our specialized services include: Virtual Consultation, Emergency
            Services, Home Care Services, Virtual Communities.
          </p>
        </Col>
        <Col md className="pic">
          <img
            src="/images/Aboutteam.jpeg "
            alt=""
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </Col>
      </Row>
      <div className="aboutus2">
        <h1 style={{ textAlign: 'center', marginTop:"10px" }}>
          Why Choose Us?
        </h1>
        <p style={{marginLeft: "20px", marginRight:"20px"}}>
          The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).{' '}
        </p>
      </div>
      <Accordion flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header style={{ textAlign: 'center' }}>
            Our Vision
          </Accordion.Header>
          <Accordion.Body>
            To provide exceptional quality, affordable and innovative care that
            ensures good health and wellbeing of the communities and Africans
            with a mandate for health education and research.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Our Mission</Accordion.Header>
          <Accordion.Body>
            To be a reference point and recognized by patients, staff, peer
            institutions, and the community as the leading model providing
            exceptional, innovative care and research that makes a difference in
            diversity and inclusion.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Our Principles</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>
                {' '}
                Malaikah shall nurture all upcoming practitioners equally
                without any discrimination.
              </li>
              <li>
                {' '}
                Malaikah shall work with other like minded partners involved in
                quality and innovative care delivery.
              </li>
              <li>
                {' '}
                Malaikah cherishes the principle of <b>result oriented</b>{' '}
                management and therefore all staff shall execute their work with
                minimum supervision based on their agreed action plans per work
                plans.
              </li>
              <li>
                {' '}
                Malaikah shall seek <b>professionalism </b>in all its
                operations.
              </li>
              <li>
                {' '}
                Malaikah believes in collective efforts realized through{' '}
                <b>teamwork</b>.
              </li>
              <li>
                {' '}
                Malaikah shall pride itself in <b>gender sensitivity</b> in its
                operations in terms of clients and staff.
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
    </Container>
  );
};

export default Aboutscreen;
