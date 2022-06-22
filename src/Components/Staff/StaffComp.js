import React from "react"
import { Card } from "react-bootstrap"


const StaffComp = (props) => {
    return (
      <>
            <Card style={{margin: '1%'}}>
              <Card.Img variant="top" src={props.Img} style={{height: '300px'}} />
              <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.body}</Card.Text>
              </Card.Body>
            </Card>
         

      </>
    );
}

export default StaffComp
