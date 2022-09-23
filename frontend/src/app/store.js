import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import dictionaryReducer from '../features/dictionary/dictionarySlice';
import feedReducer from '../features/feed/feedSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    dictionary: dictionaryReducer,
    feed: feedReducer,
  },
});

export default store;
