import { AppRoute, MAX_RATING_STARS } from './const';

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

export const getRatingStars = (rating: number): string => `${Math.round(rating) * 100 / MAX_RATING_STARS}%`;
