import { Offers, CardOffer } from '../../types/offers';
import { RequestStatus, SliceName, SixCities, DEFAULT_CITY, DEFAULT_SORTING_TYPE } from '../../const';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchOffers } from '../thunk-action/offers';
import { State } from '../types';

type OffersState = {
  offers: Offers;
  activeOfferId: null | string;
  city: SixCities;
  sortingType: string;
  requestStatus: RequestStatus;
}

const initialState: OffersState = {
  offers: [],
  activeOfferId: null,
  city: DEFAULT_CITY,
  sortingType: DEFAULT_SORTING_TYPE,
  requestStatus: RequestStatus.Idle,
};

const offersSlice = createSlice({
  name: SliceName.Offers,
  initialState,
  reducers: {
    setActiveOfferId(state, action: PayloadAction<CardOffer['id'] | null>) {
      state.activeOfferId = action.payload;
    },
    changeCity(state, action: PayloadAction<SixCities>) {
      state.city = action.payload;
    },
    changeSortingType(state, action: PayloadAction<string>) {
      state.sortingType = action.payload;
    },
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

export const { setActiveOfferId, changeCity, changeSortingType} = offersSlice.actions;

export const getSortingType = (state: State): string => state[SliceName.Offers].sortingType;
export const getActiveCity = (state: State): SixCities => state[SliceName.Offers].city;
export const getActiveOfferId = (state: State): null | string => state[SliceName.Offers].activeOfferId;
export const getOffers = (state: State): Offers => state[SliceName.Offers].offers;
export const getRequestLoadedStatus = (state: State): boolean => state[SliceName.Offers].requestStatus !== RequestStatus.Loading;
// export const { offers, activeOfferId, requestStatus } = offersSlice.selectors;
export default offersSlice;
