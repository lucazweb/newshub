import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from './store';
import api, {
  fetchTGuardian,
  fetchNYT,
  translateStory,
  tGuardianToStory,
} from '../services/news.service';
import {
  EnableLoadingAction,
  DisableLoadingAction,
  ENABLE_LOADING,
  DISABLE_LOADING,
} from './user-interface';

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

export const fetchNews = (
  query: string = ''
): ThunkAction<
  void,
  RootState,
  undefined,
  | NewsRequestAction
  | NewsSuccessAction
  | EnableLoadingAction
  | DisableLoadingAction
> => async (dispatch) => {
  dispatch({
    type: NEWS_REQUEST,
  });

  dispatch({
    type: ENABLE_LOADING,
  });

  try {
    // Fetch The Guardian Data and NYT

    const [theGuardian, NYT] = await Promise.all([
      fetchTGuardian(),
      fetchNYT(),
    ]);

    console.log('⚡️', theGuardian, NYT);

    interface TheGuardianData {
      id: string;
      webTitle: string;
      fields: {
        headline: string;
        thumbnail: string;
        shortUrl: string;
        body: string;
      };
      webPublicationDate: string;
    }

    // translate The Guardian News
    const theGuardianNews = theGuardian.reduce(
      (acc: NewsState, story: TheGuardianData) =>
        acc.concat(tGuardianToStory(story)),
      []
    );
    //console.log('translated', theGuardianNews);

    // Performing an api call
    const response = await api.get('/top-headlines', {
      params: {
        country: 'us',
      },
    });

    const {
      data: { articles, totalResults },
    } = response;

    const news = articles.reduce(
      (acc: NewsState, story: any) => acc.concat(translateStory(story)),
      []
    );

    dispatch({
      type: NEWS_SUCCESS,
      payload: {
        news,
      },
    });

    dispatch({
      type: DISABLE_LOADING,
    });
  } catch (err) {
    console.log(err);
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
