
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
          <p className="sub-header-text text-center lh-lg">RechargeRefuel allows you to identify Points of Interest around the selected charge point to while away the hours spent waiting for your pride and joy recharge!</p>
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