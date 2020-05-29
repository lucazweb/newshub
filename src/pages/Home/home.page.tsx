import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { Story } from '../../components';
import { ResultHeading, ResultText, ShuffleButton } from './home.styled';
import { TiArrowShuffle } from 'react-icons/ti';

export const Home: React.FC = () => {
  return (
    <>
      <Row between="xs">
        <Col xs={12}>
          <ResultHeading>
            <ResultText>
              Results for <em>Covid 19</em> of principals news sources
            </ResultText>
            <ShuffleButton>
              <TiArrowShuffle />
              <span>Shuffle</span>
            </ShuffleButton>
          </ResultHeading>
        </Col>
      </Row>

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
