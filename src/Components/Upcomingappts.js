import React, {useEffect, useState} from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import { base_url } from '../Constants/index.js';


function Upcomingappts() {

   
   var currentDate = new Date();

   var dd = String(currentDate.getDate()).padStart(2, '0');
   var mm = String(currentDate.getMonth() + 1).padStart(2, '0');
   var yyyy = currentDate.getFullYear();

   currentDate = yyyy + '-' + mm + '-' + dd;

  const [upcomingappointments, setAppointments] = useState([]);

  useEffect(() => {
    axios
      .get(`${base_url}/bookappts`)
      .then((res) => {
        setAppointments(res.data);
        console.log('capturing date:', res.data[0].date);
      })
      .catch((err) => {
        console.log({ message: err });
      });
  }, []);
  return (
    <>
      <Container style={{ maxWidth: '100%' }}>
        {upcomingappointments.map((item) =>
          item.doa > currentDate ? (
            <Card id="card" style={{ width: '100%' }}>
              <Card.Body>
                <Row>
                  <Col sm={6} className="inline">
                  <h5>Date: <span className="spanappts">{item.doa}</span></h5>
                  <h5>Time: <span className="spanappts">{item.toa}</span></h5>
                  </Col>
                  <Col sm={6} className="inline">
                    <h5>Treatment: <span className="spanappts">{item.sdept}</span> </h5>
                    <h5> Location:<span className="spanappts">Virtual</span> </h5>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ) : null
        )}
      </Container>
    </>
  );
}

export default Upcomingappts;
