export const MAX_RATING_STARS = 5;
export const SINGULAR = 1;

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

export const SortingTypes = {
  Popular: 'Popular',
  PriceLowToHigh: 'Price: low to high',
  PriceHighToLow: 'Price: high to low',
  TopRatedFirst: 'Top rated first',
} as const;

export const DEFAULT_SORTING_TYPE = SortingTypes.Popular;

export enum ApiRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
  Nearby = '/nearby',
  Comments = '/comments',
  Favorite = '/favorite',
}

export enum RequestStatus {
  Idle = 'idle',
  Loading = 'loading',
  Success = 'success',
  Failed = 'failed',
}
