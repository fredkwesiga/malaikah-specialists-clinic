import React from "react";
import { Button} from "react-bootstrap";
import Courses from "./Courses"


const HomePage = () => {
  return (
    <>
      <div className="studenthome" style={{ marginTop: "11.5%" }}>
      </div>
      <Button id="Btn" href="#studentlogin" style={{float: 'right', marginTop:'-25%'}}>LOGIN/REGISTER</Button>
      <div style={{backgroundColor:'#20C997', textAlign:'center', height: 'auto', fontSize:'larger', fontWeight:'medium', color:'#0A1F3E', padding: '1%'
}}>
          <p>
            Welcome to Malaikah's application for diploma, undergraduate,
            admissions and scholarships. <br/>By starting your application, you're
            taking your first step toward the best medical school <br/> system in the
            world. Explore more
          </p>
        </div>
       <Courses/>
      
    </>
  );
};

export default HomePage;
