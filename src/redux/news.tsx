import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from './store';
import api from '../services/news.service';

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

type NewsState = Story[];

const NEWS_REQUEST = 'news/request';
interface NewsRequestAction extends Action<typeof NEWS_REQUEST> {}

const NEWS_SUCCESS = 'news/success';
interface NewsSuccessAction extends Action<typeof NEWS_SUCCESS> {
  payload: {
    news: NewsState;
  };
}
// const NEWS_FAILURE = 'news/failure';

export const fetchNews = (): ThunkAction<
  void,
  RootState,
  undefined,
  NewsRequestAction | NewsSuccessAction
> => async (dispatch) => {
  dispatch({
    type: NEWS_REQUEST,
  });

  try {
    // Performing an api call
    const response = await api.get('/top-headlines', {
      params: {
        country: 'us',
      },
    });

    const {
      data: { articles, totalResults },
    } = response;

    console.log(articles);

    const news = articles.reduce(
      (acc: NewsState, story: any) =>
        acc.concat({
          id: story.publishedAt,
          title: story.title,
          description: story.description,
          author: story.author,
          image: story.urlToImage,
          url: story.url,
          publishedAt: story.publishedAt,
          content: story.content,
          source: story.source.name,
        }),
      []
    );

    dispatch({
      type: NEWS_SUCCESS,
      payload: {
        news,
      },
    });
  } catch (err) {
    // dispatch NEWS_FAILURE ACTION
  }
};

export const selectNews = (rootState: RootState) => {
  const { news } = rootState;
  console.log(news);
  return news;
};

const initialState: NewsState = [];

const newsReducer = function (
  state: NewsState = initialState,
  action: NewsRequestAction | NewsSuccessAction
) {
  switch (action.type) {
    case NEWS_REQUEST:
      return state;

    case NEWS_SUCCESS:
      const { news } = action.payload;
      return [...state, ...news];

    default:
      return state;
  }
};

export default newsReducer;
