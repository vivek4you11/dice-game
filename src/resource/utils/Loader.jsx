import React from 'react';
import { Row, Col } from 'antd';
import Loader from 'react-loader-spinner';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const CustomLoader = () => {
  return (
    <Row className="custom-loader">
      <Row className="loader-section">
        <Col xs={24} sm={24} md={24} lg={24}>
          <Loader type="Bars" color="#00A200" height={150} width={150} />
          <br />
          <Row style={{ color: '#ffffff', fontSize: '1.125rem' }}>Game loading...</Row>
        </Col>
      </Row>
    </Row>
  );
};

export default CustomLoader;
