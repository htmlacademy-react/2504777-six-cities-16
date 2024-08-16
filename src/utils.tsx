import dayjs from 'dayjs';
import { AppRoute, MAX_RATING_STARS, SINGULAR, SortingTypes } from './const';
import { CardOffer, OffersByCitiesType, Offers } from './types/offers';
import { Reviews } from './types/reviews';

export const getLayoutState = (location: AppRoute, favoriteOffersCount: number) => {
  switch (location) {
    case AppRoute.Login:
      return {
        extraClassName: 'page--gray page--login',
        shouldRenderFooter: false,
        shouldRenderNavigation: false,
      };
    case AppRoute.Root:
      return {
        extraClassName: 'page--gray page--main',
        shouldRenderFooter: false,
        shouldRenderNavigation: true,
      };
    case AppRoute.Favorites:
      return {
        extraClassName: !favoriteOffersCount ? 'page--favorites-empty' : '',
        shouldRenderFooter: true,
        shouldRenderNavigation: true,
      };
    default:
      return {
        extraClassName: '',
        shouldRenderFooter: false,
        shouldRenderNavigation: true,
      };
  }
};

export const getRatingStars = (rating: number) => ({width: `${Math.round(rating) * 100 / MAX_RATING_STARS}%`});

export const getEnding = (count: number, word: string) => count > SINGULAR ? `${word}s` : word;

export const getRatingKeyValue = (key: string) => {
  switch(key) {
    case 'Perfect': return 'perfect';
    case 'Good': return 'good';
    case 'NotBad': return 'not bad';
    case 'Badly': return 'badly';
    case 'Terribly': return 'terribly';
  }
};

export const groopsOffersByCity = (offers: CardOffer[]) => {
  const offersByCities: OffersByCitiesType = {};

  offers.forEach((offer) => {
    if (!offersByCities[offer.city.name]) {
      offersByCities[offer.city.name] = [];
    }
    offersByCities[offer.city.name].push(offer);
  });

  return offersByCities;
};

export const humanizeDate = (date: string, format: string) => dayjs(date).format(format);

export const upFirstLetter = (data: string) => data.charAt(0).toUpperCase() + data.slice(1);

export const sortReviewsByDate = (reviews: Reviews) => {
  if (reviews.length > 1) {
    return reviews.toSorted((leftReview, rightReview) => dayjs(rightReview.date).diff(dayjs(leftReview.date)));
  }
  return reviews;
};

const sortByPrice = (offers: Offers, isDecreaseOrder = false) => {
  if (isDecreaseOrder) {
    return offers.sort((leftOffer, rightOffer) => rightOffer.price - leftOffer.price);
  }
  return offers.sort((leftOffer, rightOffer) => leftOffer.price - rightOffer.price);
};

const sortByRating = (offers: Offers) => offers.sort((leftOffer, rightOffer) => rightOffer.rating - leftOffer.rating);

export const sortOffersByCurrentType = (currentType: string, offers: Offers) => {
  switch(currentType) {
    case SortingTypes.PriceLowToHigh:
      return sortByPrice(offers);
    case SortingTypes.PriceHighToLow:
      return sortByPrice(offers, true);
    case SortingTypes.TopRatedFirst:
      return sortByRating(offers);
  }
  return offers;
};

