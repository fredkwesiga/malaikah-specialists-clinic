import React from 'react';
import { CardGroup, Container,} from 'react-bootstrap';
import  StaffComp from '../Components/Staff/StaffComp';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { base_url } from '../Constants/index.js';

const Staffscreen = (props) => {
   const [staff, setStaff] = useState([]);
   useEffect(() => {
     axios
       .get(`${base_url}/staff`)
       .then((res) => {
         setStaff(res.data);
         console.log(res.data);
       })
       .catch((err) => {
         console.log({ message: err });
       });
   }, []);
    return (
      <>
      <Container style={{maxWidth: '100%'}}>
        <h2 style={{ textAlign: 'center', marginTop: '10px'}}> Meet Our Doctors</h2>
            <CardGroup style={{justifyContent: 'space-evenly'}}>
            {staff.map((staff_entity) => (
              <StaffComp  Img={staff_entity.image} title={staff_entity.name} body={staff_entity.doctorsDetails}/>
              ))}
              {/* <StaffComp Img="/images/doc.jpg" title="DR. MARK ALEX" body="Experience: Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece  of classical Latin literature from 45 BC,  making "/>
              <StaffComp Img="/images/doc.jpg" title="DR.FRED OPIO" body="Experience: Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece  of classical Latin literature from 45 BC,  making "/> */}
              </CardGroup>
              <CardGroup style={{justifyContent: 'space-evenly'}}>
              {/* <StaffComp  Img="/images/doc.jpg" title="DR. WINNIE.KK" body="Experience: Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece  of classical Latin literature from 45 BC,  making "/>
              <StaffComp Img="/images/doc.jpg" title="DR. BAKER AGABA" body="Experience: Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece  of classical Latin literature from 45 BC,  making "/>
              <StaffComp Img="/images/doc.jpg" title="DR. ALICIA KWESIGA" body="Experience: Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece  of classical Latin literature from 45 BC,  making "/> */}
            </CardGroup>
        </Container>
      </>
    );
}

export default Staffscreen;
