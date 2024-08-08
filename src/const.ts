export const MAX_RATING_STARS = 5;
export const MAX_OFFER_IMAGE_NUMBER = 6;
export const SINGULAR = 1;
export const MAX_REVIEWS_NUMBER = 10;

export enum SixCities {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

const {Paris, Cologne, Brussels, Amsterdam, Hamburg, Dusseldorf} = SixCities;

export const DEFAULT_CITY = Paris;

export const CITIES_LIST = [Paris, Cologne, Brussels, Amsterdam, Hamburg, Dusseldorf];

export const CitiesLocation = {
  [Paris]: {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 13,
  },
  [Cologne]: {
    latitude: 50.938361,
    longitude: 6.959974,
    zoom: 13,
  },
  [Brussels]: {
    latitude: 50.846557,
    longitude: 4.351697,
    zoom: 13,
  },
  [Amsterdam]: {
    latitude: 52.37454,
    longitude: 4.897976,
    zoom: 13,
  },
  [Hamburg]: {
    latitude: 53.550341,
    longitude: 10.000654,
    zoom: 13,
  },
  [Dusseldorf]: {
    latitude: 51.225402,
    longitude: 6.776314,
    zoom: 13,
  },
};

export enum SpecialClassName {
  NearPlaces = 'near-places',
  Favorites = 'favorites',
  Cities = 'cities',
  Offer = 'offer',
  PlaceCard = 'place-card',
}

export enum AppRoute {
	Root = '/',
	Login = '/login',
	Favorites = '/favorites',
	Offer = '/offer/:id',
	Error = '*',
}

export enum Title {
	Login = '6 cities: authorization',
	Favorites = '6 cities: favorites',
	Offer = '6 cities: offer',
}

export enum AuthorizationStatus {
	Auth = 'AUTH',
	NoAuth = 'NO_AUTH',
	Unknown = 'UNKNOWN',
}

export enum ImageWidth {
  Basic = 260,
  ForFavorite = 150,
}

export enum ImageHeight {
  Basic = 200,
  ForFavorite = 110,
}

export enum LogoWidth {
  ForHeader = 81,
  ForFooter = 64,
}

export enum LogoHeight {
  ForHeader = 41,
  ForFooter = 33,
}

export enum BookmarkWidth {
  Basic = 18,
  ForOffer = 31,
}

export enum BookmarkHeight {
  Basic = 19,
  ForOffer = 33,
}

export enum DateFormat {
  FullDate = 'YYYY-MM-DD',
  MonthAndYear = 'MMMM YYYY',
}

export const Rating = {
  Perfect: 5,
  Good: 4,
  NotBad: 3,
  Badly: 2,
  Terribly: 1,
} as const;

export enum MapLayer {
  Template = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  Attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
}

export enum UrlMapMarker {
  Default = '/public/img/pin.svg',
  Active = '/public/img/pin-active.svg',
}

export const SortingTypes = {
  Popular: 'Popular',
  PriceLowToHigh: 'Price: low to high',
  PriceHighToLow: 'Price: high to low',
  TopRatedFirst: 'Top rated first',
} as const;

export const DEFAULT_SORTING_TYPE = SortingTypes.Popular;

export const SERVER_URL = 'https://16.design.htmlacademy.pro/six-cities';
export const REQUEST_TIMEOUT = 5000;
export const AUTH_TOKEN_KEY_NAME = 'six-cities-token';
