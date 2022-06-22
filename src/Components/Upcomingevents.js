import React from 'react'
import { Card,  Col, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { base_url } from '../Constants/index.js';

const Upcomingevents = () => {
  const [events, setEvents] = useState([]);

  var currentDate = new Date();
  var dd = String(currentDate.getDate()).padStart(2, '0');
  var mm = String(currentDate.getMonth() + 1).padStart(2, '0');
  var yyyy = currentDate.getFullYear();

  currentDate = yyyy + '-' + mm + '-' + dd;

  // var startTime = performance.now();
  // var endTime = performance.now();
  // currentTime = String(endTime - startTime)


  useEffect(() => {
    axios
      .get(`${base_url}/events`)
      .then((res) => {
        setEvents(res.data);
        console.log('capturing date:', res.data[0].date);
      })
      .catch((err) => {
        console.log({ message: err });
      });
  }, []);

    return (
      <div>
        <div style={{ marginLeft: 'auto', marginRight: 'auto', width: '90%' }}>
          <div className="upcoming">
            <h2>Upcoming Events</h2>
            <a href="#moeevents" style={{ textDecoration: 'none' }}>
              <h4>Find more Events</h4>
            </a>
          </div>
          <Card
            style={{
              height: 'auto',
              position: 'relative',
              maxWidth: '100%',
              margin: 'auto',
            }}
          >
            {events.map((events_entity) => (
              events_entity.date > currentDate ) ? (
              <Row style={{ height: 'auto' }}>
              
                <Col
                  sm={2}
                  style={{
                    paddingTop: '4%',
                    backgroundColor: '#020e20',
                    textAlign: 'center',
                  }}
                >
                  <h3>{events_entity.date}</h3>
                </Col>
                <Col sm={8} style={{ border: 'none' }}>
                  <h2>{events_entity.title}</h2>

                  <h6>{events_entity.time}</h6>
                  <p>{events_entity.description}</p>
                  <div>
                    <h5 style={{ textAlign: 'left' }}>
                      Location: 
                      <span style={{ fontWeight: 'lighter' }}>{events_entity.location}</span>
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
                </Col>
                <Col sm={2}>
                  <img
                    className="pic"
                    src={events_entity.image}
                    // src="https://images.unsplash.com/photo-1535229398509-70179087ac75?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRoeSUyMGZvb2R8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt=""
                    style={{ height: '200px', width: '100%' }}
                  />
                  
                </Col>
              </Row>
              ): null)}
          </Card>
        </div>
      </div>
    );
}

export default Upcomingevents
