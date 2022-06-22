import React from "react";
import {Row, Col, Container} from 'react-bootstrap';


const homecareservices = () => {
  return (
    <>
    <Container style={{maxWidth: '100%'}}>
    <div>
      <Row>
        <Col className="sect1">
          <h1 className="first-txt">Compasionate care <br/> for your loved ones</h1>
          <h4 style={{margin: '20px 0px 0px 20px'}}>One click away <br/> +234 703 229 3770</h4>
        </Col>
      </Row>
      <Row>
        <Col className="middlesect">
          <h4>Why choose Malaikah home care services</h4>
          <p>
            We provide clients and their families expectional care 24/7 peace of
            mind.
            <br /> we make sure your loved ones have the best home care
            possible.
          </p>
        </Col>
      </Row>
      <Row style={{padding: '30px'}}>
        <Col md>
          <h4>Available 24/7</h4>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </Col>
        <Col md>
          <h4>Quality Caregivers</h4>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </Col>
        <Col md>
          <h4>Peace of Mind</h4>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </Col>
      </Row>
      </div>
      </Container>
    </>
  );
};

export default homecareservices;
