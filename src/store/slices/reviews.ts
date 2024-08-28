import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Reviews, Review } from '../../types/reviews';
import { RequestStatus } from '../../const';
import { SliceName } from '../const';
import { fetchReviews, postReview } from '../thunk-action/reviews';

type ReviewState = {
  reviews: Reviews;
  requestStatus: RequestStatus;
}

const initialState: ReviewState = {
  reviews: [],
  requestStatus: RequestStatus.Idle,
};

const reviewSlice = createSlice({
  name: SliceName.Review,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviews.pending, (state) => {
        state.requestStatus = RequestStatus.Loading;
      })
      .addCase(fetchReviews.fulfilled, (state, action: PayloadAction<Reviews>) => {
        state.requestStatus = RequestStatus.Success;
        state.reviews = action.payload;
      })
      .addCase(fetchReviews.rejected, (state) => {
        state.requestStatus = RequestStatus.Failed;
      })
      .addCase(postReview.pending, (state) => {
        state.requestStatus = RequestStatus.Loading;
      })
      .addCase(postReview.fulfilled, (state, action: PayloadAction<Review>) => {
        state.requestStatus = RequestStatus.Success;
        state.reviews.push(action.payload);
      })
      .addCase(postReview.rejected, (state) => {
        state.requestStatus = RequestStatus.Failed;
      });
  },
  selectors: {
    userReviews: (state: ReviewState) => state.reviews,
    status: (state: ReviewState) => state.requestStatus,
  }
});

export const { userReviews, status } = reviewSlice.selectors;
export default reviewSlice;

