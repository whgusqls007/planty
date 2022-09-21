import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import dictionaryReducer from '../features/dictionary/dictionarySlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    dictionary: dictionaryReducer,
  },
});

export default store;
