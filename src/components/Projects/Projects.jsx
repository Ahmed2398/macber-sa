import React from 'react'
import {Nav, Container, Col , Row, Tab  } from 'react-bootstrap'
import mansoft from '../../assets/images/mansoft.png';
import ProjectsList from './ProjectsList';
import './Projects.css';
import WebProjects from "./WebProjects";

const Projects = () => {
  return (
    <>
    <section className='projects ptb-60'>
    <Container>
      <Row>
        <Col  lg={6} sm={6} className="m-auto">
          <h3 className="head-banner h3-banner">Software </h3>
          <h1 className="head-banner"> Development
          </h1>
          <p className=" text-banner text-muted">Macber masters the art of software development. Thanks to our dedicated
            team's effort who utilize their years of experience in conveying, designing, coding, programming, testing,
            and optimizing various and highly innovative software programs to help you better achieve your
            business&nbsp;goals.
          </p>



        </Col>
        <Col lg={6} sm={6} >
          <img src={mansoft} alt="game" width="100%"/>
        </Col>
      </Row>
    </Container>
    </section>
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link className='tab__style text-white tab-link' eventKey="first">Mobile Applicatons</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className='tab__style text-white tab-link' eventKey="second">Website Development</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
          <ProjectsList/>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
         <WebProjects/>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    </>
  )
}

export default Projects