import React from 'react';
import { Col, Row, Container, Accordion } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { base_url } from '../Constants';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';

const Specialities =()=> {
  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log('totally custom!')
    );

    return (
      <button
        type="button"
        style={{ backgroundColor: '#020e20', color: 'white', borderRadius:'6px', border: 'none', padding:'2%' }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }
  
   const [specialty, setSpecialties] = useState([]);
    useEffect(() => {
    axios
      .get(`${base_url}/specialties`)
      .then((res) => {
        setSpecialties(res.data);
        console.log("This is special", res);
      })
      .catch((err) => {
        console.log({ message: err });
      });
  },[]);

  return (
    <>
      <div className="b-img">
        <div className="b-color">
          <h1
            style={{
              fontSize: '65px',
              padding: '210px 10px 20px',
              color: 'whitesmoke',
              fontWeight: 'bolder',
            }}
          >
            Our
            <br />
            Specialities
          </h1>
        </div>
      </div>

      <Container>
        {specialty.map((Specialties) => (
          <div
            class="row"
            style={{ height: 'auto', marginTop: '30px' }}
            key={Specialties.id}
          >
            <div class="col-sm-4">
              <div class="card-box" id="card4">
                <div class="card-thumbnail">
                  <img className="card-image" src={Specialties.image} alt="" />
                </div>
              </div>
            </div>
            <div class="col-sm-8">
              <div id="card5">
                <h2>{Specialties.title}</h2>

                <p>{Specialties.description}</p>
                <Row>
                  <Col xs={12} lg={6}>
                    <Accordion>
                      <CustomToggle eventKey="0" >VIEW DETAILS</CustomToggle>
                      <Accordion.Collapse eventKey="0">
                        <p>{Specialties.specialtiesDetails}</p>
                      </Accordion.Collapse>
                    </Accordion>
                  </Col>
                  <Col xs={12} lg={6} style={{ marginTop: '5px' }}>
                    <a href="/form" role="button">
                      <button className="Btn">Book An Appointment</button>
                    </a>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </>
  );
}
export default Specialities;