import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import newsReducer from './news';
import uiReducer from './user-interface';

const rootReducer = combineReducers({
  news: newsReducer,
  ui: uiReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
