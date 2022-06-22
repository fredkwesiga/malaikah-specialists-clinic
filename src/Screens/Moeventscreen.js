import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Col, Row, Alert, Card, Container, Modal } from 'react-bootstrap';
import { base_url } from '../Constants/index.js';
import EventModelScreen from './EventModelScreen.js';


const Moeventscreen = (props) => {
  const [event, setEvents] = useState([]);
  const [eventData, setEventData] = useState([]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  var currentDate = new Date();
  var dd = String(currentDate.getDate()).padStart(2, '0');
  var mm = String(currentDate.getMonth() + 1).padStart(2, '0');
  var yyyy = currentDate.getFullYear();

  currentDate = yyyy + '-' + mm + '-' + dd;
  useEffect(() => {
    axios
      .get(`${base_url}/events`)
      .then((res) => {
        setEvents(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log({ message: err });
      });
  }, []);
  //  console.log(events)

  const handleShow = (data) => {
    console.log(data);
    setEventData(data);
    setShow(true);
  };
  

  if (event.length > 0) {
    return (
      <>
        <div>
          <div>
            <Modal
              {...props}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              show={show}
              onHide={handleClose}
            >
              <EventModelScreen data={eventData} closeDialog={handleClose} />
            </Modal>
            {event.map((events) => (events.date > currentDate) ? (
              <Container style={{ maxWidth: '100%', margin: '0' }}>
                <Card
                  id="contentcard"
                  style={{ marginLeft: 'auto', marginRight: 'auto' }}
                >
                  <Row style={{ height: 'auto' }} key={events.id}>
                    <Col
                      sm={2}
                      style={{
                        paddingTop: '4%',
                        backgroundColor: '#020e20',
                        textAlign: 'center',
                      }}
                    >
                      <h3 className="day">{events.date}</h3>
                    </Col>
                    <Col sm={10} style={{ padding: '5px 30px' }}>
                      <h2>{events.title}</h2>
                      <h6>{events.time}</h6>
                      <p>{events.description}</p>

                      <div>
                        <h5 style={{ textAlign: 'left' }}>
                          Location:
                          <span style={{ fontWeight: 'lighter' }}>
                            {events.location}
                          </span>
                        </h5>
                      </div>
                      <div>
                        <h5 style={{ textAlign: 'left' }}>
                          Contact:
                          <span style={{ fontWeight: 'lighter' }}>
                            malaikah@gmail.com
                          </span>
                        </h5>
                      </div>
                      <button
                        className="Btn"
                        onClick={() => {
                          handleShow(events);
                        }}
                      >
                        REGISTER
                      </button>
                    </Col>
                  </Row>
                </Card>
              </Container>
            ): null )}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="event-alert" variant="success" style={{marginTop:'50%'}}>
        <Alert variant="success">NO EVENTS YET</Alert>
      </div>
    );
  }
};

export default Moeventscreen;
