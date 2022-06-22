import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import axios from 'axios';
import { base_url } from '../Constants/index.js';
import { Formik } from 'formik';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const validateBookappt = (bookapptDetails) => {
  const errors = {};

  if (!bookapptDetails.email) {
    errors.email = 'Please Enter Email';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(bookapptDetails.email)
  ) {
    errors.email = 'Invalid email address';
  }

  if (!bookapptDetails.sdept) {
    errors.sdept = 'Field Required';
  }

  if (!bookapptDetails.doa) {
     errors.doa = 'Field Required';
  }

  if (!bookapptDetails.toa) {
    errors.toa = 'Field Required';
  }

  if (!bookapptDetails.moa) {
    errors.moa = 'Field Required';
  }

  if (!bookapptDetails.pmi) {
    errors.pmi = 'Field Required';
  }

  return errors;
};

toast.configure();
const FormPage = ({ closeDialog }) => {
  // alertText = () => {
  //   alert('You have an appointment!!, Please check your email');
  // };
  const notify = () => {
    toast.success('successfully registered', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 4000,
    });
  };

  return (
    <>
      <div
        style={{
          width: '90%',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '1%',
        }}
      >
        <Row>
          <Col md className="pic">
            <img
              src="/images/wnn-06.png"
              alt="doctor"
              style={{ width: '600px', height: 'auto' }}
            />
          </Col>
          <Col md className="form">
            <h4>Patient Information </h4>
            <Formik
              initialValues={{
                email: '',
                sdept: '',
                doa: '',
                toa: '',
                moa: '',
                pmi: '',
              }}
              validate={validateBookappt}
              onSubmit={(values, actions) => {
                setTimeout(() => {
                  const patientObject = {
                    email: values.email,
                    sdept: values.sdept,
                    doa: values.doa,
                    toa: values.toa,
                    moa: values.moa,
                    pmi: values.pmi,
                  };

                  axios.post(`${base_url}/bookappts`, patientObject, {
                    headers: { 'Access-Control-Allow-Origin': '*' },
                  });
                  window.location.href = '/#/appts';
                  if (closeDialog) {
                    closeDialog();
                  }
                  actions.setSubmitting(false);
                }, 1000);
              }}
            >
              {(formik) => (
                <Form onSubmit={formik.handleSubmit}>
                  <Row>
                    <Col md>
                      <Form.Label id="field">
                        Email<span class="required">*</span>
                      </Form.Label>
                      <Form.Control
                        placeholder="winniek@example.com"
                        id="form-control email"
                        name="email"
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
                  <Col md className="">
                    <Row>
                      <Col md className="inputField">
                        <Form.Label id="field">
                          Department<span class="required">*</span>
                        </Form.Label>
                        <Form.Select
                          id="form-control dept"
                          name="sdept"
                          value={formik.values.sdept}
                          onChange={formik.handleChange}
                        >
                          <option>Select department</option>
                          <option>Gynecology</option>
                          <option>Paediatrics</option>
                          <option>Non-communicable diseases</option>
                          <option>Hernia and appendicitis Surgery</option>
                        </Form.Select>
                        {formik.touched.sdept && formik.errors.sdept ? (
                          <span style={{ color: 'red' }}>
                            {formik.errors.sdept}
                          </span>
                        ) : null}
                      </Col>
                      <Col md>
                        <Form.Label id="field">
                          Date Of Appointment<span class="required">*</span>
                        </Form.Label>
                        <Form.Control
                          type="date"
                          name="doa"
                          value={formik.values.doa}
                          onChange={formik.handleChange}
                          id="form-control doa"
                        />
                        {formik.touched.doa && formik.errors.doa ? (
                          <span style={{ color: 'red' }}>
                            {formik.errors.doa}
                          </span>
                        ) : null}
                      </Col>
                    </Row>
                    <Row>
                      <Col md>
                        <Form.Label id="field">
                          Time Of Appointment<span class="required">*</span>
                        </Form.Label>
                        <Form.Control
                          type="time"
                          name="toa"
                          value={formik.values.toa}
                          onChange={formik.handleChange}
                          id="form-control toa"
                        />
                        {formik.touched.toa && formik.errors.toa ? (
                          <span style={{ color: 'red' }}>
                            {formik.errors.toa}
                          </span>
                        ) : null}
                      </Col>

                      <Col md>
                        <Form.Label id="field">
                          Mode of appointment<span class="required">*</span>
                        </Form.Label>
                        <Form.Select
                          name="moa"
                          value={formik.values.moa}
                          onChange={formik.handleChange}
                          id="form-control moa"
                        >
                          <option>Select mode of appointment</option>
                          <option>Online</option>
                          <option>In Person</option>
                        </Form.Select>
                        {formik.touched.moa && formik.errors.moa ? (
                          <span style={{ color: 'red' }}>
                            {formik.errors.moa}
                          </span>
                        ) : null}
                      </Col>
                    </Row>

                    <Form.Label id="field">
                      What is your primary medical issue?
                      <span class="required">*</span>
                    </Form.Label>
                    <Form.Control
                      name="pmi"
                      value={formik.values.pmi}
                      onChange={formik.handleChange}
                      type="text-area"
                      id="textarea"
                    />
                    {formik.touched.pmi && formik.errors.pmi ? (
                      <span style={{ color: 'red' }}>{formik.errors.pmi}</span>
                    ) : null}
                    <Row>
                      <Col>
                        <Button onClick={notify} type="submit" id="Btn">
                          BOOK APPOINTMENT
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default FormPage;
