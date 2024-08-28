import { store } from '.';
import { AuthorizationStatus, RequestStatus } from '../const';
import { FavoriteStatus } from './const';
import { FullOffer, ServerOffer } from '../types/offers';
import { UserReview } from '../types/reviews';
import { User } from '../types/user';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserState = {
  info: null | User;
  status: AuthorizationStatus;
  requestStatus: RequestStatus;
};

export type ChangeProps = {
  offerId: string;
  status: FavoriteStatus;
}

export type ChangeResponse = {
  offer: ServerOffer;
  status: FavoriteStatus;
}

export type PostReviewProps = {
  body: UserReview;
  offerId: FullOffer['id'];
}

export type LoginData = {
  email: string;
  password: string;
}

