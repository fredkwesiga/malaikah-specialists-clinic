import {React, useState} from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { base_url } from '../Constants/index.js';
import { Formik } from 'formik';
import {Navigate} from "react-router-dom";
import Loader from "../Components/Loader"



const Login = () => {
  const [navigate, setNavigate] = useState(false);
  const[loading, setLoading] = useState(false);

  if (navigate) {
    return <Navigate to="/profile"/>;
}
  return (
    <>
      {loading && <Loader />}
      <div
        className="formcontent"
        style={{
          width: '80%',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '8%',
        }}
      >
        <Row>
          <Col md>
            <h2 style={{ textAlign: 'center' }}>Login</h2>
            <div id="pic">
              <img
                src="/images/blk.png"
                alt="care"
                width="500px"
                height="340px"
              />
            </div>
          </Col>
          <Col md sm={6} className="form">
            
          <Formik
          initialValues={
          {
           "email": '',
           "password": ''
          }
        }
          onSubmit={(values, actions) => {
            setTimeout(() => {
              const LoginObject = 
              {
                email: values.email,
                password: values.password
              };

              axios.post(`${base_url}/auth/login`,  LoginObject, {
                headers: { 'Access-Control-Allow-Origin': '*',
            "Content-type": "application/json"
            }, mode: 'cors'
              }, 
              setLoading(true)
              )
              .then((res) => {
            console.log(res)
            console.log(res.data)
              if (res.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(res.data));
                setNavigate(true)
              }
              console.log(res.data);
            })
            .catch((err) => {
                if(err.res){
                    console.log("response error")
                } else if (err.request){
                        console.log("request error")
                }else if (err.message){
                    console.log("Message error")
            }
            setNavigate(true)
              console.log(err.toJSON);
            });
            
           
              actions.setSubmitting(false);
            }, 1000);
          }}
        >
          
          {(formik) => (
                <Form
                  style={{ padding: '10px' }}
                  onSubmit={formik.handleSubmit}
                >
                  <Row>
                    <Col md>
                      <Form.Label id="field">Email Address</Form.Label>
                      <Form.Control
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        id="email"
                      />
                      {formik.touched.email && formik.errors.email ? (
                        <span style={{ color: 'red' }}>
                          {formik.errors.email}
                        </span>
                      ) : null}
                    </Col>
                  </Row>
                  <Row>
                    <Col md>
                      <Form.Label id="field">Password</Form.Label>
                      <Form.Control
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        type="password"
                        id="form-control password "
                      />
                      {formik.touched.password && formik.errors.password ? (
                        <span style={{ color: 'red' }}>
                          {formik.errors.password}
                        </span>
                      ) : null}
                    </Col>
                  </Row>
                  <Row>
                    <Col style={{ marginTop: '5%' }}>
                      <Button type="submit" id="Btn" onSubmit="user()">
                        LOGIN
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col style={{ marginTop: '9.5%' }}>
                      <p>
                        Have No account? <a href="/register">Sign Up</a>
                      </p>
                    </Col>
                  </Row>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Login;