import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { Story } from '../../components';
import { ResultHeading } from './home.styled';

export const Home: React.FC = () => {
  return (
    <>
      <ResultHeading>
        Results for <em>Covid 19</em> of principals news sources
      </ResultHeading>

      <Row center="xs">
        <Col xs={11} md={3}>
          <Story />
        </Col>
        <Col xs={11} md={3}>
          <Story />
        </Col>
        <Col xs={11} md={3}>
          <Story />
        </Col>
        <Col xs={11} md={3}>
          <Story />
        </Col>
      </Row>

      <Row style={{ marginTop: 18 }} center="xs">
        <Col xs={11} md={3}>
          <Story />
        </Col>
        <Col xs={11} md={3}>
          <Story />
        </Col>
        <Col xs={11} md={3}>
          <Story />
        </Col>
        <Col xs={11} md={3}>
          <Story />
        </Col>
      </Row>
    </>
  );
};
