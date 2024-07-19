// import { LogoParams } from './types/offers';

export const MAX_RATING_STARS = 5;

export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export enum PlaceCardClassName {
  NearPlaces = 'near-places',
  Favorites = 'favorites',
  Cities = 'cities',
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

// type LogoType = {
// 	ForHeader: LogoParams;
// 	ForFooter: LogoParams;
// }

export enum ImageWidth {
  Basic = 260,
  ForFavorite = 150,
}

export enum ImageHeight {
  Basic = 200,
  ForFavorite = 110,
}


// export const LogoType: LogoType = {
// 	ForHeader: {
// 		prefixName: 'header',
// 		width: 81,
// 		height: 41,
// 	},
// 	ForFooter: {
// 		prefixName: 'footer',
// 		width: 64,
// 		height: 33,
// 	}
// } as const;
