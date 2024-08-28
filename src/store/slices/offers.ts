import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Offers, CardOffer, ServerOffer } from '../../types/offers';
import { ChangeResponse } from '../types';
import { RequestStatus, SixCities, DEFAULT_CITY, DEFAULT_SORTING_TYPE } from '../../const';
import { SliceName } from '../const';
import { fetchOffers } from '../thunk-action/offers';
import { fetchFavoritesOnLogin, changeFavorites } from '../thunk-action/favorites';
import { logout } from '../thunk-action/user';

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
      })

      .addCase(fetchFavoritesOnLogin.pending, (state) => {
        state.requestStatus = RequestStatus.Loading;
      })
      .addCase(fetchFavoritesOnLogin.fulfilled, (state, action: PayloadAction<ServerOffer[]>) => {
        state.requestStatus = RequestStatus.Success;

        const favoritesId = action.payload.map((item) => item.id);
        state.offers = state.offers.map((offer) => {
          if (favoritesId.includes(offer.id)) {
            const favoriteOfferIndex = action.payload.findIndex((item) => item.id === offer.id);
            return { ...offer, isFavorite: action.payload[favoriteOfferIndex].isFavorite };
          }
          return offer;
        });
      })
      .addCase(fetchFavoritesOnLogin.rejected, (state) => {
        state.requestStatus = RequestStatus.Failed;
      })

      .addCase(changeFavorites.fulfilled, (state, action: PayloadAction<ChangeResponse>) => {
        const newOfferIndex = state.offers.findIndex((offer) => offer.id === action.payload.offer.id);
        if (newOfferIndex >= 0) {
          state.offers[newOfferIndex].isFavorite = action.payload.offer.isFavorite;
        }
      })

      .addCase(logout.fulfilled, (state) => {
        state.offers = state.offers.map((offer) => ({ ...offer, isFavorite: false }));
      });
  },
  selectors: {
    allOffers: (state: OffersState) => state.offers,
    activeOfferId: (state: OffersState) => state.activeOfferId,
    status: (state: OffersState) => state.requestStatus,
    city: (state: OffersState) => state.city,
    sortingType: (state: OffersState) => state.sortingType,
  }
});

export const { allOffers, activeOfferId, status, sortingType, city } = offersSlice.selectors;
export const { setActiveOfferId, changeCity, changeSortingType } = offersSlice.actions;
export default offersSlice;
