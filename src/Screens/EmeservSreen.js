
import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
// import LinearGradient from 'react-native-linear-gradient'; 

const EmeservSreen = () => {
    return (
      <>
       <Container style={{maxWidth: '100%'}}>
        <Row id='main'>
          <Col md className='pic'>
          <img src="/images/emeservice.jpg" alt=""
          style={{
            width: '100%',
            height: 'auto'
          }}  
          />
          </Col>
          <Col md className=' headingsect row-herosect'>
          <p> Emergency <br/> services </p>
          </Col>
           </Row>
           
        <div>
            <h5 className="emeserviceheading" id="emeserviceheading">We’re Ready When You Need Us</h5>
            <ul className="emecontent">
              <li>
                Our Emergency Centre provides services 24 hours a day 7 days a
                week. It serves as an Emergency Department, Out-Patient
                Department and as entry point for all the admission cases.
              </li>
              <li>
                A well laid out emergency preparedness plan coupled with
                well-equipped staff has made the Centre a one-stop Centre able
                to handle mass accidents, advanced trauma, gunshots, disaster
                management, poisons, and cases like malaria, pneumonia,
                non-communicable and communicable diseases, and many others.
              </li>
              <li>
                The Emergency Department comprises of motivated team of doctors,
                nurses, technicians and other para health professionals well
                skilled who undergo regular training to ensure their skills and
                knowledge is up to date.
              </li>
            </ul>
        </div>
        </Container>
      </>
    );
}

export default EmeservSreen
