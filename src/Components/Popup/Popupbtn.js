import { useState}  from 'react';
// import {LinkContainer} from 'react-router-bootstrap'
import { Button, Modal, Row, Container } from 'react-bootstrap';
import './popup.css'



const Popupbtn = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
      <>
      <Container>
        <div className="popicon" onClick={handleShow}>
          <img className="popup" src="/images/chaticon.png" alt="" />
        </div>
        <div className="whatsappicon">
          <a
            href="https://wa.me/256754238777"
            className="whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="whatsapp" src="/images/Whatsappbtn.png " alt="" />
          </a>
        </div>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static" //   aria-labelledby="contained-modal-title-vcenter"
          //   centered
        >
          <Modal.Header id="PopModel" closeButton>
            <Modal.Title id="popuptitle">
              Welcome To Malaikah Specialists Clinics!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body id="PopModel">
            {/* onclick= {() => { navigation('/#/form');}} */}
            <a href="/login">
              <Button id="bookappointbtn">
                <Row xs={12} md={8}>
                  <h5 className="bookappoint">BOOK AN APPOINTMENT</h5>
                </Row>
              </Button>
            </a>

            <Container>
              <Row xs={12} md={8}>
                <Button id="talktodocbtn" href="https://wa.me/256754238777">
                  <h5 className="talktodoc">TALK TO A DOCTOR</h5>
                </Button>
              </Row>
            </Container>
          </Modal.Body>
        </Modal>
        </Container>
      </>
    );
}

export default Popupbtn
