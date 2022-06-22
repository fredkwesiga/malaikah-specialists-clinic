import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import './Research.css'

function Research() {

  return (
    <>
      <Container>
        <h2 style={{ textAlign: 'center' }}>Our Research</h2>
        <Row>
          <Col md>
            <p style={{ marginTop: '1%' }}>
              Meow all night head nudges . Cat not kitten around get scared by
              sudden appearance of cucumber, bawl under human beds so eat
              owner's food. I am the best try to jump onto window and fall while
              scratching at wall yet while happily ignoring when being called.
              Stare at the wall, play with food and get confused by dust. Meow
              all night head nudges . Cat not kitten around get scared by sudden
              appearance of cucumber, bawl under human beds so eat owner's food.
              Cat not kitten around get scared by sudden appearance of cucumber,
              bawl under human beds so eat owner's food.
            </p>
            <Button href="#rscreen" id="Btn" style={{ marginTop: '0' }}>
              LEARN MORE
            </Button>
          </Col>
        </Row>
        <hr style={{ borderTop: '2px solid gray' }} />
      </Container>
    </>
  );
}

export default Research;