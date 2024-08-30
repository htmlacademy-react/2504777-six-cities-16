import dayjs from 'dayjs';
import { MAX_RATING_STARS, SINGULAR, SortingTypes } from './const';
import { OffersByCitiesType, Offers, ServerOffer } from './types/offers';
import { Reviews } from './types/reviews';

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

export const groopsOffersByCity = (offers: ServerOffer[]) => {
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
    return offers.toSorted((leftOffer, rightOffer) => rightOffer.price - leftOffer.price);
  }
  return offers.toSorted((leftOffer, rightOffer) => leftOffer.price - rightOffer.price);
};

const sortByRating = (offers: Offers) => offers.toSorted((leftOffer, rightOffer) => rightOffer.rating - leftOffer.rating);

export const sortOffersByCurrentType = (currentType: string, offers: Offers) => {
  switch(currentType) {
    case SortingTypes.PriceLowToHigh:
      return sortByPrice(offers);
    case SortingTypes.PriceHighToLow:
      return sortByPrice(offers, true);
    case SortingTypes.TopRatedFirst:
      return sortByRating(offers);
    default: return offers;
  }
};

export const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
