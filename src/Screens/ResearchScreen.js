import React, { useState, useEffect } from "react";
import { Col, Row, Container, Button, Modal } from "react-bootstrap";
import axios from "axios";
import { base_url } from '../Constants';
import Readmore from './Readmore';



const Research = (props) => {
  const [research, setResearch] = useState([]);
  const [researchData, setResearchData] = useState([]);
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);


   const handleClose = () => setShow(false);

  const handleShow = (data) => {
    console.log(data);
    setResearchData(data);
    setShow(true);
    setFullscreen(true);
  };

   useEffect(() => {
     axios
       .get(`${base_url}/research`)
       .then((res) => {
         setResearch(res.data);
         console.log('data', res);
       })
       .catch((err) => {
         console.log({ message: err });
       });
   }, []);

    return (
      <>
        <div className="res-bimg">
          <div className="res-bcolor">
            <h1
              style={{
                fontSize: '80px',
                padding: '210px 10px 20px',
                color: 'whitesmoke',
                fontWeight: 'bolder',
              }}
            >
              Our
              <br />
              Research
            </h1>
          </div>
        </div>
        <Modal
          {...props}
          onHide={handleClose}
          show={show}
          fullscreen={fullscreen}
        >
          <Readmore data={researchData} />
        </Modal>
        <Container>
          {research.map((research_entity) => (
            <div class="row" style={{ height: 'auto', marginTop: '30px' }}>
              <div class="col-sm-4">
                <div class="card-box" id="card4">
                  <div class="card-thumbnail">
                    <img
                      className="card-image"
                      src={research_entity.image}
                      alt=" "
                    />
                  </div>
                </div>
              </div>
              <div class="col-sm-8">
                <div id="card5">
                  <h2>{research_entity.title}</h2>
                  <Row>
                    <Col style={{ marginTop: '5px' }}>
                      {research_entity.date}
                    </Col>
                  </Row>

                  <p>{research_entity.summary}</p>

                  <Row>
                    <Col md style={{ marginTop: '5px' }}>
                      <Button
                        class="btn btn-primary"
                        // to="/readmore"
                        role="button"
                        style={{
                          background: '#FBBB35',
                          color: 'black',
                          border: 'none',
                        }}
                        onClick={() => {
                          handleShow(research_entity);
                        }}
                      >
                        Read More
                      </Button>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          ))}
        </Container>
      </>
    );
 
}

export default Research;
