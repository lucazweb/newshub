import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { StorySkeleton } from '../../components';

export const HomeSkeleton = () => {
  return (
    <>
      <Row center="xs">
        <Col xs={11} md={3} style={{ lineHeight: 1.5 }}>
          <StorySkeleton />
        </Col>
        <Col xs={11} md={3} style={{ lineHeight: 1.5 }}>
          <StorySkeleton />
        </Col>
        <Col xs={11} md={3} style={{ lineHeight: 1.5 }}>
          <StorySkeleton />
        </Col>
        <Col xs={11} md={3} style={{ lineHeight: 1.5 }}>
          <StorySkeleton />
        </Col>
      </Row>
      <Row center="xs">
        <Col xs={11} md={3} style={{ lineHeight: 1.5 }}>
          <StorySkeleton />
        </Col>
        <Col xs={11} md={3} style={{ lineHeight: 1.5 }}>
          <StorySkeleton />
        </Col>
        <Col xs={11} md={3} style={{ lineHeight: 1.5 }}>
          <StorySkeleton />
        </Col>
        <Col xs={11} md={3} style={{ lineHeight: 1.5 }}>
          <StorySkeleton />
        </Col>
      </Row>
    </>
  );
};
