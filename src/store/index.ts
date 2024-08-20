import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createApi } from '../services/api';
import offersSlice from './slices/offers';
import fullOfferSlice from './slices/full-offer';
import reviewSlice from './slices/reviews';
import userSlice from './slices/user';
import favoritesSlice from './slices/favorites';
import errorSlice from './slices/error';

const api = createApi();

const reducer = combineReducers({
  [offersSlice.name]: offersSlice.reducer,
  [fullOfferSlice.name]: fullOfferSlice.reducer,
  [reviewSlice.name]: reviewSlice.reducer,
  [userSlice.name]: userSlice.reducer,
  [favoritesSlice.name]: favoritesSlice.reducer,
  [errorSlice.name]: errorSlice.reducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
