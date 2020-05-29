import React, { useEffect } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { StoryItem } from '../../components';
import { ResultHeading, ResultText, ShuffleButton } from './home.styled';
import { TiArrowShuffle } from 'react-icons/ti';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../redux/store';
import { fetchNews } from '../../redux/news';

const mapState = ({ news }: RootState) => {
  console.log(news);
  return {
    news,
  };
};

const mapDispatch = {
  fetchNews,
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface HomePageProps extends PropsFromRedux {}

const HomePage: React.FC<HomePageProps> = ({ news, fetchNews }) => {
  useEffect(() => {
    fetchNews();
  }, []);

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
        {news.length > 0 &&
          news.map((story) => (
            <Col key={story.id} xs={11} md={3}>
              <StoryItem story={story} />
            </Col>
          ))}
      </Row>
    </>
  );
};

export const Home = connect(mapState, mapDispatch)(HomePage);
