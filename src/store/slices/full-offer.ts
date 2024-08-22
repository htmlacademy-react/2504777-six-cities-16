import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FullOffer, Offers } from '../../types/offers';
import { RequestStatus, SliceName } from '../../const';
import { fetchFullOffer, fetchOffersNearby } from '../thunk-action/full-offer';
import { ChangeResponse, State } from '../types';
import { changeFavorites } from '../thunk-action/favorites';
import { logout } from '../thunk-action/user';

type FullOfferState = {
  info: null | FullOffer;
  offersNearby: Offers;
  requestStatus: RequestStatus;
}

const initialState: FullOfferState = {
  info: null,
  offersNearby: [],
  requestStatus: RequestStatus.Idle,
};

const fullOfferSlice = createSlice({
  name: SliceName.FullOffer,
  initialState,
  reducers: {
    // updateOffer(state, action: PayloadAction<string>) {
    //   state.info = state.info?.id === action.payload
    //     ? { ...state.info, isFavorite: !state.info.isFavorite}
    //     : state.info;
    // },
    // clearOffer(state) {
    //   if (state.info) {
    //     state.info = { ...state.info, isFavorite: false};
    //   }
    // },
    // clearOffersNearby(state) {
    //   state.offersNearby = state.offersNearby.map((offer) => ({ ...offer, isFavorite: false }));
    // },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFullOffer.pending, (state) => {
        state.requestStatus = RequestStatus.Loading;
      })
      .addCase(fetchFullOffer.fulfilled, (state, action: PayloadAction<FullOffer>) => {
        state.requestStatus = RequestStatus.Success;
        state.info = action.payload;
      })
      .addCase(fetchFullOffer.rejected, (state) => {
        state.requestStatus = RequestStatus.Failed;
      })

      .addCase(fetchOffersNearby.pending, (state) => {
        state.requestStatus = RequestStatus.Loading;
      })
      .addCase(fetchOffersNearby.fulfilled, (state, action: PayloadAction<Offers>) => {
        state.requestStatus = RequestStatus.Success;
        state.offersNearby = action.payload;
      })
      .addCase(fetchOffersNearby.rejected, (state) => {
        state.requestStatus = RequestStatus.Failed;
      })

      .addCase(changeFavorites.fulfilled, (state, action: PayloadAction<ChangeResponse>) => {
        state.info = state.info?.id === action.payload.offer.id
          ? { ...state.info, isFavorite: action.payload.offer.isFavorite}
          : state.info;
      })

      .addCase(logout.fulfilled, (state) => {
        if (state.info) {
          state.info = { ...state.info, isFavorite: false};
        }
        state.offersNearby = state.offersNearby.map((offer) => ({ ...offer, isFavorite: false }));
      });
  },
  // selectors: {
  //   offerInfo: (state: FullOfferState) => state.info,
  //   offersNearby: (state: FullOfferState) => state.offersNearby,
  //   requestStatus: (state: FullOfferState) => state.requestStatus,
  // }
});

// export const { clearOffer, clearOffersNearby } = fullOfferSlice.actions;

export const getOfferInfo = (state: State) => state[SliceName.FullOffer].info;
export const getOffersNearby = (state: State) => state[SliceName.FullOffer].offersNearby;
export const getOfferStatus = (state: State) => state[SliceName.FullOffer].requestStatus;
// export const { offerInfo, offersNearby, requestStatus } = fullOfferSlice.selectors;
export default fullOfferSlice;
