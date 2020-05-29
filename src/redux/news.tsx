import { Action } from 'redux';
import { RootState } from './store';

export interface Story {
  id: string;
  title: string;
  description: string;
  author: string;
  image: string;
  url: string;
  publishedAt: string;
  content: string;
  source: string;
}

// interface NewsState {
//   news: Story[];
// }

type NewsState = Story[];

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

const initialState: NewsState = [
  {
    id: '_jdoajfai!id',
    title: 'A new research developed in order to help Covid19 victims by UCLA',
    description:
      'A new research developed in order to help Covid19 victims by UCLA',
    author: 'Pamela Wells',
    image:
      'https://cdn.cnn.com/cnnnext/dam/assets/200430131824-02-russia-coronavirus-medical-workers-medium-tease.jpg',
    url:
      'https://edition.cnn.com/2020/05/29/politics/donald-trump-george-floyd-protests/index.html',
    publishedAt: new Date().toISOString(),
    content:
      'A new research developed in order to help Covid19 victims by UCLA',
    source: 'CNN',
  },
  {
    id: '_jdoajfaafasddsa',
    title:
      'Trump says right-wing voices are being censored. The data says something else',
    description:
      'A new research developed in order to help Covid19 victims by UCLA',
    author: 'Pamela Wells',
    image:
      'https://cdn.cnn.com/cnnnext/dam/assets/200528165045-02-trump-social-media-executive-order-large-tease.jpg',
    url:
      'https://edition.cnn.com/2020/05/29/politics/donald-trump-george-floyd-protests/index.html',
    publishedAt: new Date().toISOString(),
    content:
      'A new research developed in order to help Covid19 victims by UCLA',
    source: 'The New York Times',
  },
];

const newsReducer = function (state: NewsState = initialState, action: Action) {
  switch (action.type) {
    default:
      return state;
  }
};

export default newsReducer;
