import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import newsReducer from './news';

const rootReducer = combineReducers({
  news: newsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
