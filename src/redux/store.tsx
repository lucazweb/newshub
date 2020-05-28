import { createStore, combineReducers } from 'redux';
import newsReducer from './news';

const rootReducer = combineReducers({
  news: newsReducer,
});

// type RootReducer = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
