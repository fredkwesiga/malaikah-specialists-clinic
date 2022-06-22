import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";

const StudentDashboard = () => {
  return (
    <div className="hcare" style={{ marginTop: "8%" }}>
      <Container>
        <h2>MY DASHBOARD</h2>
        <Row xs={1} md={3}>
          <Col>
            <Card style={{ margin: "1%", padding: "1%" }}>
              <Card.Img
                variant="top"
                src="/images/profileicon.png"
                style={{ width: "40%", margin: "auto" }} 
              />
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                   <a href="#StudentProfile" style={{textDecoration: 'none', color: '#020e20'}}>MY PROFILE</a>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ margin: "1%", padding: "1%" }}>
              <Card.Img
                variant="top"
                src="/images/quiz.png"
                style={{ width: "40%", margin: "auto" }}
              />
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  MY GRADES
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ margin: "1%", padding: "1%" }}>
              <Card.Img
                variant="top"
                src="/images/writing.png"
                style={{ width: "40%", margin: "auto" }}
              />
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                <a href="#Applicationforms" style={{textDecoration: 'none', color: '#020e20'}}>NEW APPLICATION</a>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ margin: "1%", padding: "1%" }}>
              <Card.Img
                variant="top"
                src="/images/checklist.png"
                style={{ width: "40%", margin: "auto" }}
              />
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  ASSIGNMENTS
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ margin: "1%", padding: "1%" }}>
              <Card.Img
                variant="top"
                src="/images/paper.png"
                style={{ width: "40%", margin: "auto" }}
              />
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  LEARNING MATERIALS
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default StudentDashboard;
