import { LogoParams } from './types/types';

export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

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

type LogoType = {
  ForHeader: LogoParams;
  ForFooter: LogoParams;
}

export const LogoType: LogoType = {
  ForHeader: {
    prefixName: 'header',
    width: 81,
    height: 41,
  },
  ForFooter: {
    prefixName: 'footer',
    width: 64,
    height: 33,
  }
} as const;
