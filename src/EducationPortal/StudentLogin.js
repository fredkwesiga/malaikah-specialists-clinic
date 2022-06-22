import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

const StudentLogin = () => {
  return (
    <>
      <Container style={{ marginTop: "15%", marginBottom: "5%" }}>
        <Form className="stdform">
          <Row>
            <Col md style={{}}>
              <h2>LOGIN</h2>
              <Form.Control type="email" placeholder="Email" id="field" />

              <Form.Control type="password" placeholder="Password" id="field" />

              <div style={{ textAlign: "center" }}>
                <Button id="Btn" type="submit" href="#studentdashboard">
                  {" "}
                  SUBMIT{" "}
                </Button>
              </div>
            </Col>
           
            <Col style={{textAlign: 'center'}}>
           <div className="pic">
             <img src="images/nurse.gif" alt=""
             style={{width: '500px', height: '220px'}}
             />
           </div>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default StudentLogin;
