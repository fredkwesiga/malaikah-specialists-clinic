import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap';

const Applicationforms2 = () => {
    return (
      <>
        <div
          className="hcare"
          style={{
            width: '80%',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '10%',
          }}
        >
          <h1>Admission Application</h1>

          <Row>
            <Col>
              <Form className="form" style={{ marginTop: '1%' }}>
                <Row>
                  <Col>
                    <Form.Control placeholder="Country" id="applicationfield" />
                    <Form.Control placeholder="City" id="applicationfield" />
                    <Form.Select id="applicationfield">
                      <option>Gender</option>
                      <option>Male</option>
                      <option>Female</option>
                    </Form.Select>
                    <Form.Control
                      placeholder="Date of Birth"
                      id="applicationfield"
                    />
                  </Col>
                </Row>
                <Row>
                <Col>
                    <Button type="submit" id="btnapplicaton" href="#applicationforms">
                      BACK
                    </Button>
                    </Col>
                  <Col>
                    <Button type="submit" id="btnapplicaton" href="#applicationforms3">
                      NEXT
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
            <Col md>
              <div className="pic">
                <img
                  src="/images/applicationimg.png"
                  alt="doctor"
                  style={{ width: '500px', height: '340px', marginTop: '1%' }}
                />
              </div>
            </Col>
          </Row>
        </div>
      </>
    );
}

export default Applicationforms2;
