import { createAsyncThunk } from '@reduxjs/toolkit';
import { setError } from '../slices/error';
import { store } from '..';
import { SHOW_ERROR_TIMEOUT } from '../../const';

export const clearErrorAction = createAsyncThunk(
  'clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      SHOW_ERROR_TIMEOUT
    );
  },
);
