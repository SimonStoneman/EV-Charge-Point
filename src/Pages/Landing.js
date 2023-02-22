
import React from 'react';

import SuggestBar from '../Components/SuggestBar/suggestBar'

import Sidebar from '../Components/Sidebar/Sidebar';

import Maparea from '../Components/Maparea/Maparea';

import { Container, Row, Col } from 'react-bootstrap';


function Landing() {
  return (
    <Container fluid as="main">
      <Row>
        <Col md="2" sm="12">
          <Sidebar />
        </Col>
        <Col md="7" sm="12" className="text-center d-flex flex-column align-items-center">
          <h1 className="main-header-text text-center mt-5">Landing</h1>
          <p className="sub-header-text text-center lh-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, qui veniam, quas, possimus nulla cumque corporis fugit impedit dolor quibusdam suscipit? Id doloremque mollitia aliquid, molestiae magnam quae? Libero, dicta?</p>
          <Maparea />
        </Col>
        <Col md="3" sm="12">
          <SuggestBar />
        </Col>
      </Row>
    </Container>
  )
}

export default Landing;