/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Row, Col, Form, Button, Alert } from "react-bootstrap";
import axios from 'axios';
import { base_url } from '../Constants/index.js';
import { Formik } from "formik";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const validateUser = (regUser) => {
  const errors = {};

  if (!regUser.name) {
    errors.name = "Please Enter Full Names";
  } else if (regUser.name.length > 25) {
    errors.name = "Name cannot exceed 25 characters";
  }
  if (!regUser.email) {
    errors.email = "Please Enter Email";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(regUser.email)) {
    errors.email = "Invalid email address";
  }
  if (!regUser.phoneNumber) {
    errors.phoneNumber = "Please Enter Phone Number";
  } else if (regUser.phoneNumber.length > 15) {
    errors.phoneNumber = "Contact can not exceed 15 characters";
  }

  if (!regUser.dob) {
    errors.dob = "Required";
  }

  if (!regUser.gender) {
    errors.gender = "Required";
  }
  if (!regUser.location) {
    errors.location = "Required";
  }

  if (!regUser.password) {
    errors.password = "Password Required";
  }
  if (!regUser.marital) {
    errors.marital = "Marital Status Required";
  }

  return errors;
};


toast.configure()
const Register = ({ closeDialog }) => {
  const [type, setType]= useState('password')

  const handleToggle=()=>{
    if(type==='password'){
  setType('text')
    }else{
      setType('password')
    }
  }

  const notify =()=> {
    toast.success('successfully registered', {position: toast.POSITION.TOP_CENTER, autoClose: 4000})
  }
 
    return (
      <>
        <div
          style={{
            width: '80%',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '1%',
          }}
        >
          <Row>
            <Col md id="pic">
              <h2 style={{ marginTop: '40px', textAlign: 'center' }}>
                Create An Account
              </h2>

              <img
                src="/images/reg.jpg"
                alt="care"
                width="500px"
                height="380px"
              />
            </Col>
            <Col md className="form">
              <Formik
                initialValues={{
                  name: '',
                  email: '',
                  phoneNumber: '',
                  dob: '',
                  gender: '',
                  location: '',
                  password: '',
                  marital: '',
                }}
                validate={validateUser}
                onSubmit={(values, actions) => {
                  setTimeout(() => {
                    const userObject = {
                      name: values.name,
                      email: values.email,
                      phoneNumber: values.phoneNumber,
                      dob: values.dob,
                      gender: values.gender,
                      location: values.location,
                      password: values.password,
                      marital: values.marital,
                    };

                    axios.post(`${base_url}/auth/register`, userObject, {
                      headers: { 'Access-Control-Allow-Origin': '*' },
                    });
                    // .then((res)=>{
                    //   localStorage.setItem('access_token', res.data.access_token)
                    // });
                    window.location.href = '/login';
                    if (closeDialog) {
                      closeDialog();
                    }
                    actions.setSubmitting(false);
                  }, 1000);
                }}
              >
                {(formik) => (
                  <Form
                    onSubmit={formik.handleSubmit}
                    style={{ padding: '10px' }}
                  >
                    <Row>
                      <Col md>
                        <Form.Label id="field">
                          Full Names<span class="required">*</span>
                        </Form.Label>
                        <Form.Control
                          name="name"
                          type="text"
                          id="form-control name"
                          value={formik.values.name}
                          onChange={formik.handleChange}
                        />
                        {formik.touched.name && formik.errors.name ? (
                          <span style={{ color: 'red' }}>
                            {formik.errors.name}
                          </span>
                        ) : null}
                      </Col>
                      <Col md className="inputField">
                        <Form.Label id="field">
                          Email Address<span class="required">*</span>
                        </Form.Label>
                        <Form.Control
                          name="email"
                          id="form-control email"
                          value={formik.values.email}
                          onChange={formik.handleChange}
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
                        <Form.Label id="field">
                          Phone number<span class="required">*</span>
                        </Form.Label>
                        <Form.Control
                          name="phoneNumber"
                          id="form-control phoneNumber"
                          value={formik.values.phoneNumber}
                          onChange={formik.handleChange}
                        />
                        {formik.touched.phoneNumber &&
                        formik.errors.phoneNumber ? (
                          <span style={{ color: 'red' }}>
                            {formik.errors.phoneNumber}
                          </span>
                        ) : null}
                      </Col>
                      <Col md>
                        <Form.Label id="field">
                          Date of birth<span class="required">*</span>
                        </Form.Label>
                        <Form.Control
                          name="dob"
                          id="form-control dob"
                          value={formik.values.dob}
                          onChange={formik.handleChange}
                        />
                        {formik.touched.dob && formik.errors.dob ? (
                          <span style={{ color: 'red' }}>
                            {formik.errors.dob}
                          </span>
                        ) : null}
                      </Col>
                    </Row>
                    <Row>
                      <Col md>
                        <Form.Label id="field">
                          Gender<span class="required">*</span>
                        </Form.Label>
                        <Form.Select
                          name="gender"
                          id="form-control gender"
                          value={formik.values.gender}
                          onChange={formik.handleChange}
                        >
                          <option>Select Gender</option>
                          <option value="Female">Female</option>
                          <option value="Male">Male</option>
                          <option value="Other">Prefer not to say</option>
                        </Form.Select>
                        {formik.touched.gender && formik.errors.gender ? (
                          <span style={{ color: 'red' }}>
                            {formik.errors.gender}
                          </span>
                        ) : null}
                      </Col>
                      <Col md>
                        <Form.Label id="field">
                          Location<span class="required">*</span>
                        </Form.Label>
                        <Form.Control
                          name="location"
                          type="text"
                          id="form-control location"
                          value={formik.values.location}
                          onChange={formik.handleChange}
                        />
                        {formik.touched.location && formik.errors.location ? (
                          <span style={{ color: 'red' }}>
                            {formik.errors.location}
                          </span>
                        ) : null}
                      </Col>
                    </Row>
                    <Row>
                      <Col md>
                        <Form.Label id="field">
                          Marital Status<span class="required">*</span>
                        </Form.Label>
                        <Form.Select
                          name="marital"
                          id="form-control marital"
                          value={formik.values.marital}
                          onChange={formik.handleChange}
                        >
                          <option>Select Marital Status</option>
                          <option value="single">Single</option>
                          <option value="Married">Married</option>
                          <option value="seperated">Seperated</option>
                        </Form.Select>
                        {formik.touched.marital && formik.errors.marital ? (
                          <span style={{ color: 'red' }}>
                            {formik.errors.marital}
                          </span>
                        ) : null}
                      </Col>

                      <Col md>
                        <Form.Label id="field">
                          Password<span class="required">*</span>
                        </Form.Label>
                        <div className="password">
                          <Form.Control
                            name="password"
                            type={type}
                            id="form-control password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                          />
                          {formik.touched.password && formik.errors.password ? (
                            <span style={{ color: 'red' }}>
                              {formik.errors.password}
                            </span>
                          ) : null}
                        </div>
                        <div className="span">
                          <span>
                            <img
                              src="/images/eye.png"
                              id="eye"
                              onClick={handleToggle}
                              alt="show password"
                            />
                          </span>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col style={{ marginTop: '5%' }}>
                        <Button
                          onClick={notify}
                          type="submit"
                          id="Btn"
                        >
                          REGISTER
                        </Button>
                      </Col>
                      <Col style={{ marginTop: '9.5%' }}>
                        <p>
                          Already have an account? <a href="/login">Sign in</a>
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

export default Register;