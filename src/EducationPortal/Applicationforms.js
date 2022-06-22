import React from 'react'
import { Form, Row, Col, Button} from 'react-bootstrap';

const Applicationforms = () => {
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
                  <Col md>
                    <Form.Control placeholder="Surname" id="applicationfield" />
                  </Col>
                  <Col md>
                    <Form.Control
                      placeholder="Other names"
                      id="applicationfield"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Control
                      placeholder="Password"
                      id="applicationfield"
                    />
                    <Form.Control placeholder="Email" id="applicationfield" />
                    <Form.Select id="applicationfield">
                      <option>Select Academic Major/Field.</option>
                      <option>Public Health</option>
                      <option>Nursing</option>
                      <option>General Medicine</option>
                      <option>Midwivery</option>
                    </Form.Select>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button
                      type="submit"
                      id="btnapplicaton"
                      href="#applicationforms2"
                    >
                      START
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

export default Applicationforms;
