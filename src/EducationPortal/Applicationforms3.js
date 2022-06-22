import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap';

const Applicationforms3 = () => {
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
                    <p>
                      What is the highest level of education you have completed?
                    </p>
                    <Form.Select id="applicationfield">
                      <option>Select...</option>
                      <option>Certificate</option>
                      <option>Diploma</option>
                      <option>Degree</option>
                    </Form.Select>

                    <p>
                      Can you provide a copy of your official high school
                      diploma/transcript?
                    </p>
                    <Form.Select id="applicationfield">
                      <option>Select...</option>
                      <option>Yes, I have it</option>
                      <option>Not right now, but I can get it soon</option>
                      <option>No, I will not be able to</option>
                    </Form.Select>
                  </Col>
                </Row>
                <Row>
                <Col>
                    <Button type="submit" id="btnapplicaton" href="#applicationforms2">
                      BACK
                    </Button>
                  </Col>
                  <Col>
                    <Button type="submit" id="btnapplicaton">
                      SUBMIT
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

export default Applicationforms3;
