import React from 'react'
import { Container , Row, Col, Button} from 'react-bootstrap';

const Programs = () => {
    return (
      <div>
        <Container className="hcare" style={{ maxWidth: '100%' }}>
          <Row>
            <Col md className=" programsinfo">
              <h1 style={{ marginTop: '5%' }}>
                A Certificate in Nursing with
                <br />
                Malaikah Specialties Clinic
              </h1>
              <article>
                The online Credential of Readiness (CORe) program will prepare
                you to contribute to business discussions and decision-making,
                whether you're looking to advance your career, considering
                graduate school, or exploring new career paths. The online
                Credential of Readiness (CORe) program will prepare you to
                contribute to business discussions and decision-making, whether
                you're looking to advance your career, considering graduate
                school, or exploring new career paths.
              </article>
              <Button type="submit" id="Btn" href="#applicationforms"style={{fontWeight: 'bolder'}}>
              APPLY
            </Button>
            </Col>
            <Col md className="pic">
              <img
                src="/images/programs.jpeg"
                alt=""
                style={{
                  width: '100%',
                  height: '400px',
                }}
              />
            </Col>
          </Row>

          <div>
            <h2>First Intake February 2022</h2>
            <p>
              There should be a paragraphy w "Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
            <h4>FEE: $300</h4>
            <h4>Duration: 2 Years</h4>
            <h4>Application Deadline: January 2022</h4>
          </div>
        </Container>
      </div>
    );
}

export default Programs
