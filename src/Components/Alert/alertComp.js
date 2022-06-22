import React from "react";
import { Alert } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { base_url } from '../../Constants/index.js';
import "./alertComp.css"
const Alerts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlerts] = useState([]);
  const [show, setShow] = useState(true);

 
  useEffect(() => {
    axios
      .get(`${base_url}/alerts`)
      .then((res) => {
        setIsLoading(false);
        setAlerts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log({ message: err });
      });
  }, []);
  if (isLoading) {
    return <div>Loading...</div>
  }
 
  return (
    <>
    
      {alert.map((alerts) => (
        <Alert
        className="alert"
          variant=""
        key={alerts.id}
         dismissible
         show={show}
         onClick={() => setShow(false)}

         >
          <p>
            {alerts.title}: {alerts.content}
          </p>
        
        </Alert>
      ))}
      
    </>
  );
}


export default Alerts;

