import { Offers, CardOffer } from '../../types/offers';
import { RequestStatus, SliceName } from '../../const';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchOffers } from '../thunk-action/offers';

type OffersState = {
  offers: Offers;
  activeOfferId: null | string;
  requestStatus: RequestStatus;
}

const initialState: OffersState = {
  offers: [],
  activeOfferId: null,
  requestStatus: RequestStatus.Idle,
};

const offersSlice = createSlice({
  name: SliceName.Offers,
  initialState,
  reducers: {
    setActiveOfferId(state, action: PayloadAction<CardOffer['id'] | null>) {
      state.activeOfferId = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffers.pending, (state) => {
        state.requestStatus = RequestStatus.Loading;
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.requestStatus = RequestStatus.Success;
        state.offers = action.payload;
      })
      .addCase(fetchOffers.rejected, (state) => {
        state.requestStatus = RequestStatus.Failed;
      });
  },
  // selectors: {
  //   offers: (state: OffersState) => state.offers,
  //   activeOfferId: (state: OffersState) => state.activeOfferId,
  //   requestStatus: (state: OffersState) => state.requestStatus,
  // }
});

export const { setActiveOfferId } = offersSlice.actions;
// export const { offers, activeOfferId, requestStatus } = offersSlice.selectors;
export default offersSlice;
