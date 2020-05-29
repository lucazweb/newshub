import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { Story } from '../../components';

export const Home: React.FC = () => {
  return (
    <Row center="xs">
      <Col xs={11}>
        <Story />
        <Story />
        <Story />
      </Col>
    </Row>
  );
};
