import React, { useEffect } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { StoryItem } from '../../components';
import { ResultHeading, ResultText, ShuffleButton } from './home.styled';
import { TiArrowShuffle } from 'react-icons/ti';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../redux/store';
import { fetchNews } from '../../redux/news';
import { HomeSkeleton } from './home-skeleton.component';

const mapState = ({ news, ui: { loading } }: RootState) => {
  return {
    news,
    loading,
  };
};

const mapDispatch = {
  fetchNews,
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface HomePageProps extends PropsFromRedux {}

const HomePage: React.FC<HomePageProps> = ({ news, loading, fetchNews }) => {
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
        {!loading &&
          news.length > 0 &&
          news.map((story) => (
            <Col key={story.id} xs={11} md={3}>
              <StoryItem story={story} />
            </Col>
          ))}
      </Row>
      {loading && <HomeSkeleton />}
    </>
  );
};

export const Home = connect(mapState, mapDispatch)(HomePage);
