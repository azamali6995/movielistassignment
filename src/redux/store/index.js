import {configureStore} from '@reduxjs/toolkit';
import {movieListSlice} from '../slices/MovieSlice';
import {favourite} from '../slices/favouriteSlice'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
const store = configureStore({
  reducer: {
    moive: movieListSlice.reducer,
    todoSlice: favourite   
  },
});

export default store;
