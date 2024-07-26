export const MAX_RATING_STARS = 5;
export const MAX_OFFER_IMAGE_NUMBER = 6;
export const SINGULAR = 1;

export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

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
