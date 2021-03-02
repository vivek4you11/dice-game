import React from 'react';
import { Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';

const NotFound = props => {
  return (
    <Row className="custom-loader">
      <Row className="loader-section">
        <Col xs={24} sm={24} md={24} lg={24} style={{ fontSize: '1rem', fontFamily: 'JioType-Medium', color: '#ffffff' }}>
          <h3 style={{ fontSize: '1rem', fontFamily: 'JioType-Medium', color: '#ffffff' }}>404 PAGE NOT FOUND</h3>
          <p>We are sorry but the page you are looking for does not exist.</p>
          <Link to="/">
            <Row style={{ textAlign: 'center' }}>
              <Button
                shape={'round'}
                htmlType="button"
                className="login-form-button"
                style={{ width: '180px', background: '#00A200', color: '#ffffff', fontFamily: 'JioType-Light' }}
                size="default"
              >
                Go to Home
              </Button>
            </Row>
          </Link>
        </Col>
      </Row>
    </Row>
  );
};

export default NotFound;
