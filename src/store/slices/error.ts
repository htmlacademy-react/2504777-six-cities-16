import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SliceName } from '../../const';
import { State } from '../types';

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
});

export const getError = (state: State) => state[SliceName.Error].error;
export const { setError } = errorSlice.actions;
export default errorSlice;
