import { AppRoute, MAX_RATING_STARS, SINGULAR, AuthorizationStatus } from './const';

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

export const getAuthorizationStatus = () => AuthorizationStatus.Auth;

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

// export const getRandomNumber = (min: number, max: number) => Math.round(min - 0.5 + Math.random() * (max - min + 1));

