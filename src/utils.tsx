import { AppRoute, MAX_RATING_STARS } from './const';

export const getExtraPageClassName = (location: string) => {
  switch (location) {
    case AppRoute.Login as string:
      return 'page--gray page--login';
    case AppRoute.Root as string:
      return 'page--gray page--main';
    default:
      return '';
  }
};

export const getRatingStars = (rating: number): string => `${Math.round(rating) * 100 / MAX_RATING_STARS}%`;
