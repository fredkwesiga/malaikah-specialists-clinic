import React from 'react';
import { Modal, Row, Col, Container } from 'react-bootstrap';

function Readmore({ data }) {
  return (
    <>
      <Modal.Header closeButton>
        {/* <Modal.Title>
          <h2 style={{ textAlign: 'center' }}>{data.title}</h2>
        </Modal.Title> */}
      </Modal.Header>
      <Modal.Body>
        <Container style={{ maxWidth: '100%' }}>
          <Row>
            <Col md>
              <img
                src={data.image}
                alt=""
                style={{ width: '90%', height: 'auto' }}
              />
            </Col>
            <Col
              md
              style={{
                textAlign: 'center',
                backgroundImage: `url("images/readmore.jpg")`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <h2 style={{ marginTop: '10%' }}>{data.title}</h2>
              <h4>
                <span>Published By: </span>{data.author}
              </h4>
              <h4>{data.date}</h4>
            </Col>
          </Row>
        </Container>

        <Container
          style={{ marginTop: '2%', wordSpacing: '8px', maxWidth: '100%' }}
        >
          <Row>
            <Col md>
              <article>{data.summary} {data.content}</article>
            </Col>
          </Row>
        </Container>
        {/* <hr style={{ borderTop: '2px solid gray' }} /> */}
      </Modal.Body>
    </>
  );
}
export default Readmore;
