import React from 'react' // eslint-disable-next-line
import { Card, Row, Col, Container } from 'react-bootstrap'
const StudentProfile = () => {
    return (
        <div className="hcare" style={{ marginTop: "8%" }}>

            <Container>
                <Row>
                    <Col md>
                    <div style={{ padding: '3%', marginBottom: '3%', textAlign: 'center'}}>
                        <img src="/images/79285222.jpeg" id="photo" alt="" />
                    </div>
                    </Col>
                    <Col md style={{textAlign: 'center'}}>
                    <h6> STUDENT NAME</h6>
                    <h4> WINNIE NASSOZI</h4>
                    </Col>
                    <Col md  style={{textAlign: 'center'}}>
                    <h6> STUDENT NUMBER</h6>
                    <h4> NGN79285222</h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card.Title>ABOUT</Card.Title>
                        <Card style={{ width: '100%', height: '70%' }}>
                            <Card.Body>

                                <Card.Text>
                                    <ul>
                                        <li>Phone:  0705178450</li>
                                        <li>Address:    Koboko, Uganda</li>
                                        <li>Email:  aleku2@student.com</li>
                                        <li>Birthday:  09/07/2000</li>
                                        <li>Gender: Female </li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>

                        </Card>
                    </Col>
                    <Col>
                        <Card.Title>BASIC INFORMATION</Card.Title>

                        <Card style={{ width: '100%', height: '70%' }}>

                            <Card.Body>
                                <Card.Text>
                                    <ul>
                                        <li>COURSE NAME:  HEALTH MGT</li>
                                        <li>YEAR OF STUDY:    2021</li>
                                       
                                    </ul>
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>



            </Container>

        </div>
    )
}

export default StudentProfile
