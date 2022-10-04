import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import dictionaryReducer from '../features/dictionary/dictionarySlice';
import feedReducer from '../features/feed/feedSlice';
import gardenReducer from '../features/garden/gardenSlice';
import magazineReducer from '../features/magazine/magazineSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    dictionary: dictionaryReducer,
    feed: feedReducer,
    garden: gardenReducer,
    magazine: magazineReducer,
  },
});

export default store;
