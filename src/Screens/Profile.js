import React from "react";
import { Col, Container, Row, Button, Card } from "react-bootstrap";
import AuthService from "../Services/auth.service";

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();

  if (!currentUser) {
    return (
      <div>
        <Card style={{ width: "18rem", margin: 'auto', textAlign:'center' }}>
          <Card.Img variant="top" src="/images/err.gif" />
          <Card.Body>
            <Card.Text style={{color: 'red'}}>
            Invalid Login credentials!!
            </Card.Text>
            <Button className="Btn" variant="primary" href='/login'>Try Again</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
  return (
    <div style={{ background: "#f8f8f8" }} className="formcontent">
      <Container>
        <Row>
          <Col
            style={{
              marginTop: "5%",
              paddingTop: "2%",
              textAlign: "center",
            }}
          >
            <div
              style={{
                padding: "3%",
                marginBottom: "3%",
                background: "#fcfcfc",
              }}
            >
              <div style={{ textAlign: "left" }}>
                <h4>{currentUser.name}</h4>
              </div>
            </div>

            <div className="info ">
              <h3>Personal Information</h3>
              <Row>
                <Col md>
                  <div>
                    <h5>Date of birth</h5>
                    <h4>{currentUser.dob}</h4>
                  </div>

                  <div>
                    <h5>Gender</h5>
                    <h4>{currentUser.gender}</h4>
                  </div>
                  <div>
                    <h5>Address</h5>
                    <h4>{currentUser.location}</h4>
                  </div>
                </Col>
                <Col md>
                  <div>
                    <h5>Phone</h5>
                    <h4>{currentUser.phoneNumber}</h4>
                  </div>
                  <div>
                    <h5>Marital Status</h5>
                    <h4>{currentUser.marital}</h4>
                  </div>
                  <div>
                    <h5>Email Address</h5>
                    <h4>{currentUser.email}</h4>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Profile;
