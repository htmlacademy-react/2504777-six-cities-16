import { AppRoute } from './const';

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
