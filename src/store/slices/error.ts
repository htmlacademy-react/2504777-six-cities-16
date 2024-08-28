import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SliceName } from '../const';

type ErrorState = {
  error: null | string;
}

const initialState: ErrorState = {
  error: null,
};

const errorSlice = createSlice({
  name: SliceName.Error,
  initialState,
  reducers: {
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
  selectors: {
    error: (state: ErrorState) => state.error,
  }
});

export const { error } = errorSlice.selectors;
export const { setError } = errorSlice.actions;
export default errorSlice;
