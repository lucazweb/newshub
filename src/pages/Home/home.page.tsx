import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { StoryItem, SearchButton, QueryButton } from '../../components';
import { StoryDetail } from '../../components/StoryDetail/story-detail.component';
import {
  ResultHeading,
  ResultText,
  ShuffleButton,
  SearchForm,
  SearchFormField,
  SearchInput,
} from './home.styled';
import { GoPulse } from 'react-icons/go';

import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../redux/store';
import { Story, fetchNews } from '../../redux/news';
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
  const [story, setStory] = useState<Story | null>(null);
  const [query, setQuery] = useState<string>('');
  const [displaySearch, setDisplaySearch] = useState<boolean>(false);

  const handleClose = () => {
    setStory(null);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleDisplaySearch();
  };

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setQuery(value);
  };

  const handleDisplaySearch = () => {
    setDisplaySearch((display) => !display);
  };

  const handleKeyEscape = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { keyCode } = e;
    if (keyCode === 27) {
      setQuery('');
      handleDisplaySearch();
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <>
      <Row between="xs">
        <Col xs={12}>
          <ResultHeading>
            {displaySearch ? (
              <SearchForm onSubmit={handleSubmit}>
                <SearchFormField>
                  <SearchInput
                    value={query}
                    onChange={handleFieldChange}
                    onKeyDown={handleKeyEscape}
                    placeholder="Search for keyword"
                  />
                </SearchFormField>
              </SearchForm>
            ) : (
              <>
                {query === '' ? (
                  <>
                    <ResultText>
                      New stories from different news sources
                      <SearchButton onClick={handleDisplaySearch} />
                    </ResultText>
                  </>
                ) : (
                  <>
                    <ResultText>
                      Results for
                      <QueryButton onClick={handleDisplaySearch}>
                        {query}
                      </QueryButton>
                      of different news sources
                    </ResultText>
                  </>
                )}
              </>
            )}

            <ShuffleButton>
              <GoPulse />
              <span>Pulse</span>
            </ShuffleButton>
          </ResultHeading>
        </Col>
      </Row>

      <Row center="xs">
        {!loading &&
          news.length > 0 &&
          news.slice(0, 8).map((story) => (
            <Col key={story.id} xs={11} md={3}>
              <StoryItem handleDetail={setStory} story={story} />
            </Col>
          ))}
      </Row>
      {loading && <HomeSkeleton />}

      {story && <StoryDetail handleClose={handleClose} story={story} />}
    </>
  );
};

export const Home = connect(mapState, mapDispatch)(HomePage);
