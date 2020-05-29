import { Action } from 'redux';
import { RootState } from './store';

interface Story {
  id: string;
  title: string;
  description: string;
  author: string;
  image: string;
  url: string;
  publishedAt: string;
  content: string;
}

interface NewsState {
  news: Story[];
}

const NEWS_REQUEST = 'news/request';
// const NEWS_SUCCESS = 'news/success';
// const NEWS_FAILURE = 'news/failure';

type NewsRequestAction = Action<typeof NEWS_REQUEST>;

export const newsRequest = (): NewsRequestAction => ({
  type: NEWS_REQUEST,
});

export const selectNews = (rootState: RootState) => {
  const { news } = rootState;
  console.log(news);
  return news;
};

const initialState: NewsState = {
  news: [],
};

const newsReducer = function (state: NewsState = initialState, action: Action) {
  switch (action.type) {
    default:
      return state;
  }
};

export default newsReducer;
