import React from 'react';
import { Col, Container, Row, Tab, Tabs,} from "react-bootstrap";
import Pastappts from "../Components/Appointment/Pastappts"
import Upcomingappts from "../Components/Upcomingappts"




const Appointments = () => {
  
  return (
    <>
      <div style={{ background: '#f8f8f8' }}>
        <Container >
          <Row>
        
            <Col
              style={{
                marginTop: '5%',
                paddingTop: '3%',
                textAlign: 'center',
                background: '#FCFCFC', 
                borderRadius: '12px'
              }}
             
            >
              <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3"
                variant="pills"
                style={{justifyContent: 'space-around'}}
              >
                <Tab eventKey="home" title="Upcoming" id="tab-pills">
                  <Upcomingappts />
                </Tab>
                <Tab eventKey="profile" title="Past" id="tab-pills">
                  <Pastappts />
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Appointments;
