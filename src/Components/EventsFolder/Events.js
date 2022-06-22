import React from 'react';
import { Carousel, Container} from 'react-bootstrap';
import Tips from '../Tips/Tips';
import Upcomingevents from '../Upcomingevents'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { base_url } from '../../Constants/index.js';

const Events = () => {
  const [events, setEvents] = useState([]);
  
  
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
        console.log("capturing date:", res.data[0].date);
      })
      .catch((err) => {
        console.log({ message: err });
      });
  }, []);



  return (
    <Container style={{ maxWidth: '100%' }}>
      <h2
        style={{ textAlign: 'center', fontWeight: 'bolder', paddingTop: '5%' }}
      >
        Events
      </h2>

      <Carousel>
        {events.map((events_entity) =>
          events_entity.date < currentDate ? (
            <Carousel.Item>
              <img
                src={events_entity.image}
                alt=" "
                style={{ height: '400px', width: '100%' }}
              />
              <Carousel.Caption  className='eventscarousel'>
              <div className='eventdiv'>
                <h4 style={{ color: '#ffffff'}}>
                  {events_entity.title}
                </h4>
                <p style={{ color: '#ffffff'}}>
                  {events_entity.description}
                </p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          ) : null
        )}
      </Carousel>

      <Upcomingevents />
      <Tips />
    </Container>
  );
};

export default Events;
